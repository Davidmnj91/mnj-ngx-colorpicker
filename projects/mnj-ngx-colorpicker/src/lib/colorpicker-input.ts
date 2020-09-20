import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW } from '@angular/cdk/keycodes';
import {
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subject, Subscription } from 'rxjs';
import { Color } from './color/color';
import { ColorAdapter } from './color/color-adapter';
import { MnjColorConfig, MNJ_COLOR_CONFIG_PROVIDER } from './color/color-config';
import { MnjColorpicker } from './colorpicker';

/** @docs-private */
export const MNJ_COLORPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MnjColorpickerInput),
  multi: true,
};

/** @docs-private */
export const MNJ_COLORPICKER_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MnjColorpickerInput),
  multi: true,
};

/**
 * An event used for colorpicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MnjColorpickerInputEvent instead.
 */
export class MnjColorpickerInputEvent {
  /** The new value for the target colorpicker input. */
  value: Color | null;

  constructor(
    /** Reference to the colorpicker input component that emitted the event. */
    public target: MnjColorpickerInput,
    /** Reference to the native input element associated with the colorpicker input. */
    public targetElement: HTMLElement
  ) {
    this.value = this.target.value;
  }
}
/** Directive used to connect an input to a MnjColorpicker. */
@Directive({
  selector: 'input[mnjColorpicker]',
  exportAs: 'mnjColorpickerInput',
  providers: [
    MNJ_COLORPICKER_VALUE_ACCESSOR,
    MNJ_COLORPICKER_VALIDATORS,
    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
  ],
  host: {
    'aria-haspopup': '_colorpicker ? "dialog" : null',
    '[attr.aria-owns]': '(_colorpicker?.opened && _colorpicker.id) || null',
    '[disabled]': 'disabled',
    '(input)': '_onInput($event.target.value)',
    '(change)': '_onChange()',
    '(blur)': '_onBlur()',
    '(keydown)': '_onKeydown($event)',
  },
})
export class MnjColorpickerInput implements ControlValueAccessor, OnDestroy, OnChanges, Validator {
  /** The colorpicker that this input is associated with. */
  @Input()
  set mnjColorpicker(value: MnjColorpicker) {
    if (!value) {
      return;
    }

    this._colorpicker = value;
    this._colorpicker._registerInput(this);
    this._colorpickerSubscription.unsubscribe();

    this._colorpickerSubscription = this._colorpicker._selectedChanged.subscribe((selected: Color) => {
      this.value = selected;
      this._cvaOnChange(selected);
      this._onTouched();
      this.colorInput.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
      this.colorChange.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
    });

    this._colorpickerConfigurationSubscription = this._colorpicker._configurationChanges.subscribe((_) =>
      this._formatValue(this.value)
    );
  }
  _colorpicker: MnjColorpicker;

  /** The value of the input. */
  @Input()
  get value(): Color | null {
    return this._value;
  }
  set value(value: Color | null) {
    this._lastValueValid = !value || this._colorAdapter.isValid(value);
    value = this._colorAdapter.getValidColorOrNull(value);
    const oldColor = this.value;
    this._value = value;
    this._formatValue(value);

    if (!this._colorAdapter.sameColor(oldColor, value)) {
      this._valueChange.emit(value);
    }
  }
  private _value: Color | null = null;

  /** Whether the colorpicker-input is disabled. */
  @Input()
  get disabled(): boolean {
    return !!this._disabled;
  }
  set disabled(value: boolean) {
    const newValue = coerceBooleanProperty(value);
    const element = this._elementRef.nativeElement;

    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this._stateChanges.next(undefined);
    }

    // We need to null check the `blur` method, because it's undefined during SSR.
    if (newValue && element.blur) {
      // Normally, native input elements automatically blur if they turn disabled. This behavior
      // is problematic, because it would mean that it triggers another change detection cycle,
      // which then causes a changed after checked error if the input element was focused before.
      element.blur();
    }
  }
  private _disabled: boolean;

  /** Emits when a `change` event is fired on this `<input>`. */
  @Output() readonly colorChange: EventEmitter<MnjColorpickerInputEvent> = new EventEmitter<MnjColorpickerInputEvent>();

  /** Emits when an `input` event is fired on this `<input>`. */
  @Output() readonly colorInput: EventEmitter<MnjColorpickerInputEvent> = new EventEmitter<MnjColorpickerInputEvent>();

  /** Emits when the value changes (either due to user input or programmatic change). */
  _valueChange = new EventEmitter<Color | null>();

  /** Emits when the internal state has changed */
  _stateChanges = new Subject<void>();

  _onTouched = () => {};

  private _cvaOnChange: (value: any) => void = () => {};

  private _validatorOnChange = () => {};

  private _colorpickerSubscription = Subscription.EMPTY;

  private _colorpickerConfigurationSubscription = Subscription.EMPTY;

  private _localeSubscription = Subscription.EMPTY;

  /** The form control validator for whether the input parses. */
  private _parseValidator: ValidatorFn = (): ValidationErrors | null => {
    return this._lastValueValid ? null : { mnjColorpickerParse: { text: this._elementRef.nativeElement.value } };
  };

  /** The combined form control validator for this input. */
  private _validator: ValidatorFn | null = this._parseValidator;

  /** Whether the last value set on the input was valid. */
  private _lastValueValid = false;

  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    public _colorAdapter: ColorAdapter,
    @Inject(MNJ_COLOR_CONFIG_PROVIDER) private _config: MnjColorConfig,
    @Optional() private _formField: MatFormField
  ) {}

  ngOnChanges() {
    this._stateChanges.next(undefined);
  }

  ngOnDestroy() {
    this._colorpickerSubscription.unsubscribe();
    this._colorpickerConfigurationSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this._valueChange.complete();
    this._stateChanges.complete();
  }

  /** @docs-private */
  registerOnValidatorChange(fn: () => void): void {
    this._validatorOnChange = fn;
  }

  /** @docs-private */
  validate(c: AbstractControl): ValidationErrors | null {
    return this._validator ? this._validator(c) : null;
  }

  // Implemented as part of ControlValueAccessor.
  writeValue(value: Color): void {
    this.value = value;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn: (value: any) => void): void {
    this._cvaOnChange = fn;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _onKeydown(event: KeyboardEvent) {
    const isAltDownArrow = event.altKey && event.keyCode === DOWN_ARROW;

    if (this._colorpicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }

  _onInput(value: string) {
    const lastValueWasValid = this._lastValueValid;
    let color = this._colorAdapter.parse(value);
    this._lastValueValid = this._colorAdapter.isValid(color);
    color = this._colorAdapter.getValidColorOrNull(color);

    if (!this._colorAdapter.sameColor(color, this.value)) {
      this._value = color;
      this._cvaOnChange(color);
      this._valueChange.emit(color);
      this.colorInput.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
    } else {
      // Call the CVA change handler for invalid values
      // since this is what marks the control as dirty.
      if (value && !this.value) {
        this._cvaOnChange(color);
      }

      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
  }

  _onChange() {
    this.colorChange.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
  }

  /**
   * Gets the element that the colorpicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin(): ElementRef {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }

  /** Returns the palette used by the input's form field, if any. */
  getThemePalette(): ThemePalette {
    return this._formField ? this._formField.color : undefined;
  }

  /** Gets the value at which the calendar should start. */
  getStartValue(): Color | null {
    return this.value;
  }

  /** Opens the associated colorpicker. */
  protected _openPopup(): void {
    if (this._colorpicker) {
      this._colorpicker.open();
    }
  }

  /** Handles blur events on the input. */
  _onBlur() {
    // Reformat the input only if we have a valid value.
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
    this._stateChanges.next();
  }

  /** Formats a value and sets it on the input element. */
  private _formatValue(value: Color | null) {
    const showAlpha = (this._colorpicker && this._colorpicker.showAlpha) || this._config.showAlpha;
    const displayFormat = (this._colorpicker && this._colorpicker.displayFormat) || this._config.displayFormat;
    this._elementRef.nativeElement.value = value ? this._colorAdapter.format(value, displayFormat, showAlpha) : '';
  }
}
