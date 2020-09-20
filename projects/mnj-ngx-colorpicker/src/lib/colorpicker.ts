import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  Output,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { CanColor, CanColorCtor, mixinColor, ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { MnjColorPanelView } from './color-panel';
import { Color, PaletteColor } from './color/color';
import { ColorAdapter } from './color/color-adapter';
import { ColorFormat } from './color/color-spaces';
import { mnjColorpickerAnimations } from './colorpicker-animations';
import { MnjColorpickerInput } from './colorpicker-input';

/** Used to generate a unique ID for each colorpicker instance. */
let colorpickerUid = 0;

/** Injection token that determines the scroll handling while the color panel is open. */
export const MNJ_COLORPICKER_SCROLL_STRATEGY = new InjectionToken<() => ScrollStrategy>(
  'mnj-colorpicker-scroll-strategy'
);

/** @docs-private */
export function MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {
  return () => overlay.scrollStrategies.reposition();
}

/** Possible positions for the colorpicker dropdown along the X axis. */
export type ColorpickerDropdownPositionX = 'start' | 'end';

/** Possible positions for the colorpicker dropdown along the Y axis. */
export type ColorpickerDropdownPositionY = 'above' | 'below';

/** @docs-private */
export const MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MNJ_COLORPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY,
};

// Boilerplate for applying mixins to MnjColorpickerContent.
/** @docs-private */
class MnjColorpickerContentBase {
  constructor(public _elementRef: ElementRef) {}
}
const _MnjColorpickerContentMixinBase: CanColorCtor & typeof MnjColorpickerContentBase = mixinColor(
  MnjColorpickerContentBase
);

/**
 * Component used as the content for the colorpicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the color panel itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
@Component({
  selector: 'mnj-colorpicker-content',
  templateUrl: 'colorpicker-content.html',
  styleUrls: ['colorpicker-content.scss'],
  exportAs: 'mnjColorpickerContent',
  inputs: ['color'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [mnjColorpickerAnimations.transformPanel, mnjColorpickerAnimations.fadeInColorPanel],
  host: {
    class: 'mnj-colorpicker-content',
    '[@transformPanel]': '_animationState',
    '(@transformPanel.done)': '_animationDone.next()',
    '[class.mnj-colorpicker-content-touch]': 'colorpicker.touchUi',
  },
})
export class MnjColorpickerContent
  extends _MnjColorpickerContentMixinBase
  implements AfterViewInit, OnDestroy, CanColor {
  /** Reference to the colorpicker that created the overlay. */
  colorpicker: MnjColorpicker;

  /** Whether the colorpicker is above or below the input. */
  _isAbove: boolean;

  /** Current state of the animation. */
  _animationState: 'enter' | 'void' = 'enter';

  /** Emits when an animation has finished. */
  _animationDone = new Subject<void>();

  private _subscriptions = new Subscription();

  constructor(elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) {
    super(elementRef);
  }

  ngAfterViewInit() {
    this._subscriptions.add(
      this.colorpicker._stateChanges.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this._animationDone.complete();
  }

  _handleUserSelection(value: Color) {
    this.colorpicker.select(value);
    this.colorpicker.close();
  }

  _startExitAnimation() {
    this._animationState = 'void';
    this._changeDetectorRef.markForCheck();
  }

  _getSelected() {
    return this.colorpicker._selectedColor;
  }
}

// Use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="mnjColorpicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the colorpicker popup/dialog. */
@Component({
  selector: 'mnj-colorpicker',
  template: '',
  exportAs: 'mnjColorpicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MnjColorpicker implements OnDestroy {
  private _scrollStrategy: () => ScrollStrategy;

  /** Subscription to value changes in the associated input element. */
  private _inputStateChanges = Subscription.EMPTY;

  /** Color palette to use on the colorpicker's color panel. */
  @Input()
  get color(): ThemePalette {
    return this._color || (this._colorpickerInput ? this._colorpickerInput.getThemePalette() : undefined);
  }
  set color(value: ThemePalette) {
    this._color = value;
  }
  _color: ThemePalette;

  @Input()
  get startColor(): Color {
    return this._startColor;
  }

  set startColor(value: Color) {
    if (this._colorAdapter.isValid(value)) {
      this._startColor = value;
    }
  }

  private _startColor: Color;

  /** The view that the color panel should start in. */
  @Input() startView: MnjColorPanelView;

  @Input() palette: PaletteColor[];

  @Input()
  get showAlpha() {
    return this._showAlpha;
  }

  set showAlpha(value: boolean) {
    value = coerceBooleanProperty(value);
    if (value !== this._showAlpha) {
      this._showAlpha = value;
      this._configurationChanges.next(undefined);
    }
  }
  _showAlpha: boolean;

  @Input()
  get displayFormat(): ColorFormat {
    return this._displayFormat;
  }
  set displayFormat(value: ColorFormat) {
    if (value !== this._displayFormat) {
      this._displayFormat = value;
      this._configurationChanges.next(undefined);
    }
  }
  private _displayFormat: ColorFormat;

  /**
   * Whether the color panel UI is in touch mode. In touch mode the color panel opens in a dialog rather
   * than a popup and elements have more padding to allow for bigger touch targets.
   */
  @Input()
  get touchUi(): boolean {
    return this._touchUi;
  }
  set touchUi(value: boolean) {
    this._touchUi = coerceBooleanProperty(value);
  }
  private _touchUi = false;

  /** Whether the colorpicker pop-up should be disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled === undefined && this._colorpickerInput ? this._colorpickerInput.disabled : !!this._disabled;
  }
  set disabled(value: boolean) {
    const newValue = coerceBooleanProperty(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this._stateChanges.next(newValue);
    }
  }
  private _disabled: boolean;

  /** Preferred position of the colorpicker in the X axis. */
  @Input()
  get xPosition(): ColorpickerDropdownPositionX {
    return this._xPosition || 'start';
  }
  set xPosition(value: ColorpickerDropdownPositionX) {
    const isFirstChange = !this._xPosition;
    this._xPosition = value;
    if (isFirstChange) {
      this._updatePopupPositions();
    }
    this._stateChanges.next(undefined);
  }
  private _xPosition: ColorpickerDropdownPositionX;

  /** Preferred position of the colorpicker in the Y axis. */
  @Input()
  get yPosition(): ColorpickerDropdownPositionY {
    return this._yPosition || 'below';
  }

  set yPosition(value: ColorpickerDropdownPositionY) {
    const isFirstChange = !this._xPosition;
    this._yPosition = value;
    if (isFirstChange) {
      this._updatePopupPositions();
    }
    this._stateChanges.next(undefined);
  }

  private _yPosition: ColorpickerDropdownPositionY;

  /** Classes to be passed to the color picker panel. Supports the same syntax as `ngClass`. */
  @Input() panelClass: string | string[];

  /** Emits when the colorpicker has been opened. */
  @Output('opened') openedStream: EventEmitter<void> = new EventEmitter<void>();

  /** Emits when the colorpicker has been closed. */
  @Output('closed') closedStream: EventEmitter<void> = new EventEmitter<void>();

  /** Whether the color panel is open. */
  @Input()
  get opened(): boolean {
    return this._opened;
  }
  set opened(value: boolean) {
    coerceBooleanProperty(value) ? this.open() : this.close();
  }
  private _opened = false;

  /** The id for the colorpicker color panel. */
  id: string = `mnj-colorpicker-${colorpickerUid++}`;

  /** The currently selected color. */
  get _selectedColor(): Color | null {
    return this._validSelected;
  }
  set _selectedColor(value: Color | null) {
    this._validSelected = value;
  }
  private _validSelected: Color | null = null;

  /** A reference to the overlay when the color panel is opened as a popup. */
  private _popupRef: OverlayRef | null;

  /** A reference to the dialog when the color panel is opened as a dialog. */
  private _dialogRef: MatDialogRef<MnjColorpickerContent> | null;

  /** Reference to the component instantiated in popup mode. */
  private _popupComponentRef: ComponentRef<MnjColorpickerContent> | null;

  /** The element that was focused before the colorpicker was opened. */
  private _focusedElementBeforeOpen: HTMLElement | null = null;

  /** The input element this colorpicker is associated with. */
  _colorpickerInput: MnjColorpickerInput;

  /** Emits when the colorpicker is disabled. */
  readonly _stateChanges = new Subject<boolean>();

  /** Emits when the colorpicker formmatting inputs (showAlpha and displayFormat) changes. */
  readonly _configurationChanges = new Subject<boolean>();

  /** Emits new selected color when selected color changes. */
  readonly _selectedChanged = new Subject<Color>();

  constructor(
    private _dialog: MatDialog,
    private _overlay: Overlay,
    private _ngZone: NgZone,
    private _viewContainerRef: ViewContainerRef,
    @Inject(MNJ_COLORPICKER_SCROLL_STRATEGY) scrollStrategy: any,
    private _colorAdapter: ColorAdapter,
    @Optional() private _dir: Directionality,
    @Optional() @Inject(DOCUMENT) private _document: any
  ) {
    this._scrollStrategy = scrollStrategy;
  }

  ngOnDestroy() {
    this._destroyPopup();
    this.close();
    this._inputStateChanges.unsubscribe();
    this._selectedChanged.complete();
    this._stateChanges.complete();
  }

  /** Selects the given color */
  select(color: Color): void {
    const oldValue = this._selectedColor;
    this._selectedColor = color;
    if (!this._colorAdapter.sameColor(oldValue, this._selectedColor)) {
      this._selectedChanged.next(color);
    }
    this._stateChanges.next();
  }

  /**
   * Register an input with this colorpicker.
   * @param input The colorpicker input to register with this colorpicker.
   */
  _registerInput(input: MnjColorpickerInput): void {
    if (this._colorpickerInput) {
      throw Error('A MnjColorpicker can only be associated with a single input.');
    }
    this._inputStateChanges.unsubscribe();
    this._colorpickerInput = input;
    this._inputStateChanges = this._colorpickerInput._stateChanges.subscribe(() => {
      this._stateChanges.next();
      this.select(this._colorpickerInput.value);
    });
  }

  /** Open the color panel. */
  open(): void {
    if (this._opened || this.disabled) {
      return;
    }
    if (!this._colorpickerInput) {
      throw Error('Attempted to open an MnjColorpicker with no associated input.');
    }
    if (this._document) {
      this._focusedElementBeforeOpen = this._document.activeElement;
    }

    this.touchUi ? this._openAsDialog() : this._openAsPopup();
    this._opened = true;
    this.openedStream.emit();
  }

  /** Close the color panel. */
  close(): void {
    if (!this._opened) {
      return;
    }
    if (this._popupComponentRef && this._popupRef) {
      const instance = this._popupComponentRef.instance;
      instance._startExitAnimation();
      instance._animationDone.pipe(take(1)).subscribe(() => this._destroyPopup());
    }
    if (this._dialogRef) {
      this._dialogRef.close();
      this._dialogRef = null;
    }

    const completeClose = () => {
      // The `_opened` could've been reset already if
      // we got two events in quick succession.
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
        this._focusedElementBeforeOpen = null;
      }
    };

    if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
      // Because IE moves focus asynchronously, we can't count on it being restored before we've
      // marked the colorpicker as closed. If the event fires out of sequence and the element that
      // we're refocusing opens the colorpicker on focus, the user could be stuck with not being
      // able to close the color panel at all. We work around it by making the logic, that marks
      // the colorpicker as closed, async as well.
      this._focusedElementBeforeOpen.focus();
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }

  /** Open the color panel as a dialog. */
  private _openAsDialog(): void {
    // Usually this would be handled by `open` which ensures that we can only have one overlay
    // open at a time, however since we reset the variables in async handlers some overlays
    // may slip through if the user opens and closes multiple times in quick succession (e.g.
    // by holding down the enter key).
    if (this._dialogRef) {
      this._dialogRef.close();
    }

    this._dialogRef = this._dialog.open<MnjColorpickerContent>(MnjColorpickerContent, {
      direction: this._dir ? this._dir.value : 'ltr',
      viewContainerRef: this._viewContainerRef,
      panelClass: 'mnj-colorpicker-dialog',
    });

    this._dialogRef.afterClosed().subscribe(() => this.close());
    this._dialogRef.componentInstance.colorpicker = this;
    this._setTheme();
  }

  /** Open the color panel as a popup. */
  private _openAsPopup(): void {
    const portal = new ComponentPortal<MnjColorpickerContent>(MnjColorpickerContent, this._viewContainerRef);

    this._destroyPopup();
    this._createPopup();
    this._popupComponentRef = this._popupRef!.attach(portal);
    this._forwardContentValues(this._popupComponentRef.instance);

    // Update the position once the calendar has rendered.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      this._popupRef!.updatePosition();
    });
  }

  /** Forwards relevant values from the colorpicker to the colorpicker content inside the overlay. */
  protected _forwardContentValues(instance: MnjColorpickerContent) {
    instance.colorpicker = this;
    instance.color = this.color;
  }

  /** Create the popup. */
  private _createPopup(): void {
    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._colorpickerInput.getConnectedOverlayOrigin())
      .withTransformOriginOn('.mnj-colorpicker-content')
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withLockedPosition();

    const overlayConfig = new OverlayConfig({
      positionStrategy: this._setConnectedPositions(positionStrategy),
      hasBackdrop: true,
      backdropClass: 'mat-overlay-transparent-backdrop',
      direction: this._dir,
      scrollStrategy: this._scrollStrategy(),
      panelClass: 'mnj-colorpicker-popup',
    });

    this._popupRef = this._overlay.create(overlayConfig);
    this._popupRef.overlayElement.setAttribute('role', 'dialog');

    merge(
      this._popupRef.backdropClick(),
      this._popupRef.detachments(),
      this._popupRef.keydownEvents().pipe(
        filter((event) => {
          // Closing on alt + up is only valid when there's an input associated with the colorpicker.
          return event.keyCode === ESCAPE || (this._colorpickerInput && event.altKey && event.keyCode === UP_ARROW);
        })
      )
    ).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }

      this.close();
    });
  }

  /** Sets the positions of the colorpicker in dropdown mode based on the current configuration. */
  private _setConnectedPositions(strategy: FlexibleConnectedPositionStrategy) {
    const primaryX = this.xPosition === 'end' ? 'end' : 'start';
    const secondaryX = primaryX === 'start' ? 'end' : 'start';
    const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
    const secondaryY = primaryY === 'top' ? 'bottom' : 'top';

    return strategy.withPositions([
      {
        originX: primaryX,
        originY: secondaryY,
        overlayX: primaryX,
        overlayY: primaryY,
      },
      {
        originX: primaryX,
        originY: primaryY,
        overlayX: primaryX,
        overlayY: secondaryY,
      },
      {
        originX: secondaryX,
        originY: secondaryY,
        overlayX: secondaryX,
        overlayY: primaryY,
      },
      {
        originX: secondaryX,
        originY: primaryY,
        overlayX: secondaryX,
        overlayY: secondaryY,
      },
    ]);
  }

  private _updatePopupPositions() {
    if (this._popupRef) {
      this._setConnectedPositions(this._popupRef.getConfig().positionStrategy as FlexibleConnectedPositionStrategy);

      if (this.opened) {
        this._popupRef.updatePosition();
      }
    }
  }

  /** Destroys the current popup overlay. */
  private _destroyPopup() {
    if (this._popupRef) {
      this._popupRef.dispose();
      this._popupRef = this._popupComponentRef = null;
    }
  }

  /** Passes the current theme color along to the color panel overlay. */
  private _setTheme(): void {
    const color = this.color;
    if (this._popupComponentRef) {
      this._popupComponentRef.instance.color = color;
    }
    if (this._dialogRef) {
      this._dialogRef.componentInstance.color = color;
    }
  }
}
