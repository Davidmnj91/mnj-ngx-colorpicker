import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ENTER } from '@angular/cdk/keycodes';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subject, Subscription } from 'rxjs';
import { Color, PaletteColor } from './color/color';
import { ColorAdapter } from './color/color-adapter';
import { MnjColorConfig, MNJ_COLOR_CONFIG_PROVIDER } from './color/color-config';
import { MnjColorpickerIntl } from './colorpicker-intl';
import { ColorPickerView } from './views';

/**
 * Possible views for the color-panel.
 * @docs-private
 */
export type MnjColorPanelView = 'picker' | 'armonies' | 'palette' | 'scan';

/** Default header for MnjColorPanel */
@Component({
  selector: 'mnj-color-panel-header',
  templateUrl: 'color-panel-header.html',
  exportAs: 'mnjColorPanelHeader',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MnjColorPanelHeader {
  private _views: MnjColorPanelView[] = ['picker', 'armonies', 'palette', 'scan'];

  constructor(
    private _intl: MnjColorpickerIntl,
    @Inject(forwardRef(() => MnjColorPanel)) public colorPanel: MnjColorPanel,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.colorPanel.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
  }

  /** The label for the current color panel view. */
  get pickerButtonText(): string {
    switch (this.colorPanel.currentView) {
      case 'picker': {
        return this._intl.pickerView;
      }
      case 'armonies': {
        return this._intl.armoniesView;
      }
      case 'palette': {
        return this._intl.paletteView;
      }
      case 'scan': {
        return this._intl.scanView;
      }
    }
  }

  get pickerViewButtonLabel(): string {
    switch (this.colorPanel.currentView) {
      case 'picker': {
        return this._intl.switchToArmoniesView;
      }
      case 'armonies': {
        return this._intl.switchToPaletteView;
      }
      case 'palette': {
        return this._intl.switchToScanView;
      }
      case 'scan': {
        return this._intl.switchToPickerView;
      }
    }
  }

  /** The label for the previous button. */
  get prevButtonLabel(): string {
    switch (this.colorPanel.currentView) {
      case 'picker': {
        return this._intl.switchToScanView;
      }
      case 'armonies': {
        return this._intl.switchToPickerView;
      }
      case 'palette': {
        return this._intl.switchToArmoniesView;
      }
      case 'scan': {
        return this._intl.switchToPaletteView;
      }
    }
  }

  /** The label for the next button. */
  get nextButtonLabel(): string {
    switch (this.colorPanel.currentView) {
      case 'picker': {
        return this._intl.switchToArmoniesView;
      }
      case 'armonies': {
        return this._intl.switchToPaletteView;
      }
      case 'palette': {
        return this._intl.switchToScanView;
      }
      case 'scan': {
        return this._intl.switchToPickerView;
      }
    }
  }

  /** Handles user clicks on the previous button. */
  previousClicked(): void {
    let index = this._views.findIndex((v) => v === this.colorPanel.currentView);
    index = (index + 4 - 1) % 4;
    this.colorPanel.currentView = this._views[index];
  }

  /** Handles user clicks on the next button. */
  nextClicked(): void {
    let index = this._views.findIndex((v) => v === this.colorPanel.currentView);
    index = (index + 4 + 1) % 4;
    this.colorPanel.currentView = this._views[index];
  }

  /** Whether the previous period button is enabled. */
  previousEnabled(): boolean {
    return this.colorPanel.currentView !== 'picker';
  }

  /** Whether the next period button is enabled. */
  nextEnabled(): boolean {
    return this.colorPanel.currentView !== 'scan';
  }
}

/**
 * A color panel that is used as part of the colorpicker.
 * @docs-private
 */
@Component({
  selector: 'mnj-color-panel',
  templateUrl: 'color-panel.html',
  styleUrls: ['color-panel.scss'],
  exportAs: 'mnjColorPanel',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'mnj-color-panel',
    '(keydown)': '_handleKeydownEvent($event)',
  },
})
export class MnjColorPanel implements AfterContentInit, OnDestroy {
  private _intlChanges: Subscription;

  /** Color palette to use on the color panel. */
  @Input() color: ThemePalette;

  /** Whether the color panel should be started in month or year view. */
  @Input() startView: MnjColorPanelView;

  /** The color to start focused on the picker. */
  @Input()
  get startColor(): Color | null {
    return this._startColor;
  }
  set startColor(value: Color | null) {
    this._startColor = this._colorAdapter.getValidColorOrNull(value);
  }
  private _startColor: Color | null;

  @Input()
  get palette(): PaletteColor[] {
    return this._palette || this._config.defaultPalette;
  }

  set palette(value: PaletteColor[]) {
    this._palette = value;
  }

  private _palette: PaletteColor[];

  @Input()
  get showAlpha(): boolean {
    return this._showAlpha || this._config.showAlpha;
  }

  set showAlpha(value: boolean) {
    this._showAlpha = coerceBooleanProperty(value);
  }

  private _showAlpha: boolean;

  /** The currently selected color. */
  @Input()
  get selected(): Color | null {
    return this._selected;
  }
  set selected(value: Color | null) {
    this._selected = this._colorAdapter.getValidColorOrNull(value);
  }
  private _selected: Color | null;

  /** Emits when the currently selected color changes. */
  @Output() readonly selectedChange: EventEmitter<Color> = new EventEmitter<Color>();

  /** Emits when any color is selected. */
  @Output() readonly _userSelection: EventEmitter<Color> = new EventEmitter<Color>();

  /** Reference to the current style picker component. */
  @ViewChild(ColorPickerView) currentPicker: ColorPickerView;

  /**
   * The current active color. This determines which time period is shown and which color is
   * highlighted when using keyboard navigation.
   */
  @Input()
  get activeColor(): Color {
    return this._activeColor;
  }
  set activeColor(value: Color) {
    this._activeColor = value;
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  private _activeColor: Color;

  /** Whether the color panel is in month view. */
  get currentView(): MnjColorPanelView {
    return this._currentView;
  }
  set currentView(value: MnjColorPanelView) {
    this._currentView = value;
    this._changeDetectorRef.markForCheck();
  }
  private _currentView: MnjColorPanelView;

  /**
   * Emits whenever there is a state change that the header may need to respond to.
   */
  stateChanges = new Subject<void>();

  constructor(
    _intl: MnjColorpickerIntl,
    private _colorAdapter: ColorAdapter,
    @Inject(MNJ_COLOR_CONFIG_PROVIDER) private _config: MnjColorConfig,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this._intlChanges = _intl.changes.subscribe(() => {
      _changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }

  ngAfterContentInit() {
    // Assign to the private property since we don't want to move focus on init.
    this._currentView = this.startView || 'picker';

    this.activeColor = this.selected || this.startColor || this._config.defaultColor;
  }

  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }

  /** Makes the active view color the selected one. */
  _selectColor() {
    const color = this._getCurrentViewComponent().activeColor;
    if (!this._colorAdapter.sameColor(color, this.selected)) {
      this.selectedChange.emit(color);
    }
    this._userSelection.emit(color);
  }

  _handleKeydownEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case ENTER:
        this._selectColor();
        return;
      default:
        return;
    }
  }

  /** Returns the component instance that corresponds to the current color panel view. */
  private _getCurrentViewComponent() {
    return this.currentPicker;
  }
}
