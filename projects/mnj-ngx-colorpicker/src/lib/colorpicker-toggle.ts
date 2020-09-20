import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { merge, of, Subscription } from 'rxjs';
import { MnjColorpicker } from './colorpicker';
import { MnjColorpickerIntl } from './colorpicker-intl';

/** Can be used to override the icon of a `matColorpickerToggle`. */
@Directive({
  selector: '[mnjColorpickerToggleIcon]',
})
export class MnjColorpickerToggleIcon {}

@Component({
  selector: 'mnj-colorpicker-toggle',
  templateUrl: 'colorpicker-toggle.html',
  styleUrls: ['colorpicker-toggle.scss'],
  exportAs: 'mnjColorpickerToggle',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'mnj-colorpicker-toggle',
    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
    // consumer may have provided, while still being able to receive focus.
    '[attr.tabindex]': 'disabled ? null : -1',
    '[class.mnj-colorpicker-toggle-active]': 'colorpicker && colorpicker.opened',
    '[class.mnj-accent]': 'colorpicker && colorpicker.color === "accent"',
    '[class.mnj-warn]': 'colorpicker && colorpicker.color === "warn"',
    // Used by the test harness to tie this toggle to its colorpicker.
    '[attr.data-mnj-color-panel]': 'colorpicker ? colorpicker.id : null',
    '(focus)': '_button.focus()',
  },
})
export class MnjColorpickerToggle implements AfterContentInit, OnDestroy {
  private _stateChanges = Subscription.EMPTY;

  /** Colorpicker instance that the button will toggle. */
  @Input('for')
  get colorpicker(): MnjColorpicker {
    return this._colorpicker;
  }

  set colorpicker(value: MnjColorpicker) {
    this._colorpicker = value;
    this._watchStateChanges();
  }

  private _colorpicker: MnjColorpicker;

  /** Tabindex for the toggle. */
  @Input() tabIndex: number | null;

  /** Whether the toggle button is disabled. */
  @Input()
  get disabled(): boolean {
    if (this._disabled === undefined && this.colorpicker) {
      return this.colorpicker.disabled;
    }

    return !!this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean;

  /** Whether ripples on the toggle should be disabled. */
  @Input() disableRipple: boolean;

  /** Custom icon set by the consumer. */
  @ContentChild(MnjColorpickerToggleIcon) _customIcon: MnjColorpickerToggleIcon;

  /** Underlying button element. */
  @ViewChild('button') _button: MatButton;

  constructor(
    public _intl: MnjColorpickerIntl,
    private _changeDetectorRef: ChangeDetectorRef,
    @Attribute('tabindex') defaultTabIndex: string
  ) {
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }

  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }

  ngAfterContentInit() {
    this._watchStateChanges();
  }

  _open(event: Event): void {
    if (this.colorpicker && !this.disabled) {
      this.colorpicker.open();
      event.stopPropagation();
    }
  }

  private _watchStateChanges() {
    const colorpickerStateChanged = this.colorpicker ? this.colorpicker._stateChanges : of();
    const inputStateChanged =
      this.colorpicker && this.colorpicker._colorpickerInput ? this.colorpicker._colorpickerInput._stateChanges : of();
    const colorpickerToggled = this.colorpicker
      ? merge(this.colorpicker.openedStream, this.colorpicker.closedStream)
      : of();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge(
      this._intl.changes,
      colorpickerStateChanged,
      inputStateChanged,
      colorpickerToggled
    ).subscribe(() => this._changeDetectorRef.markForCheck());
  }

  static ngAcceptInputType_disabled: BooleanInput;
}
