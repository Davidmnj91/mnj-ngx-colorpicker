import { ElementRef, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { Color } from './color/color';
import { ColorAdapter } from './color/color-adapter';
import { MnjColorConfig } from './color/color-config';
import { MnjColorpicker } from './colorpicker';
import * as i0 from "@angular/core";
/** @docs-private */
export declare const MNJ_COLORPICKER_VALUE_ACCESSOR: any;
/** @docs-private */
export declare const MNJ_COLORPICKER_VALIDATORS: any;
/**
 * An event used for colorpicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MnjColorpickerInputEvent instead.
 */
export declare class MnjColorpickerInputEvent {
    /** Reference to the colorpicker input component that emitted the event. */
    target: MnjColorpickerInput;
    /** Reference to the native input element associated with the colorpicker input. */
    targetElement: HTMLElement;
    /** The new value for the target colorpicker input. */
    value: Color | null;
    constructor(
    /** Reference to the colorpicker input component that emitted the event. */
    target: MnjColorpickerInput, 
    /** Reference to the native input element associated with the colorpicker input. */
    targetElement: HTMLElement);
}
/** Directive used to connect an input to a MnjColorpicker. */
export declare class MnjColorpickerInput implements ControlValueAccessor, OnDestroy, OnChanges, Validator {
    private _elementRef;
    _colorAdapter: ColorAdapter;
    private _config;
    private _formField;
    /** The colorpicker that this input is associated with. */
    set mnjColorpicker(value: MnjColorpicker);
    _colorpicker: MnjColorpicker;
    /** The value of the input. */
    get value(): Color | null;
    set value(value: Color | null);
    private _value;
    /** Whether the colorpicker-input is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /** Emits when a `change` event is fired on this `<input>`. */
    readonly colorChange: EventEmitter<MnjColorpickerInputEvent>;
    /** Emits when an `input` event is fired on this `<input>`. */
    readonly colorInput: EventEmitter<MnjColorpickerInputEvent>;
    /** Emits when the value changes (either due to user input or programmatic change). */
    _valueChange: EventEmitter<Color>;
    /** Emits when the internal state has changed */
    _stateChanges: Subject<void>;
    _onTouched: () => void;
    private _cvaOnChange;
    private _validatorOnChange;
    private _colorpickerSubscription;
    private _colorpickerConfigurationSubscription;
    private _localeSubscription;
    /** The form control validator for whether the input parses. */
    private _parseValidator;
    /** The combined form control validator for this input. */
    private _validator;
    /** Whether the last value set on the input was valid. */
    private _lastValueValid;
    constructor(_elementRef: ElementRef<HTMLInputElement>, _colorAdapter: ColorAdapter, _config: MnjColorConfig, _formField: MatFormField);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    /** @docs-private */
    registerOnValidatorChange(fn: () => void): void;
    /** @docs-private */
    validate(c: AbstractControl): ValidationErrors | null;
    writeValue(value: Color): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    _onKeydown(event: KeyboardEvent): void;
    _onInput(value: string): void;
    _onChange(): void;
    /**
     * Gets the element that the colorpicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    getConnectedOverlayOrigin(): ElementRef;
    /** Returns the palette used by the input's form field, if any. */
    getThemePalette(): ThemePalette;
    /** Gets the value at which the calendar should start. */
    getStartValue(): Color | null;
    /** Opens the associated colorpicker. */
    protected _openPopup(): void;
    /** Handles blur events on the input. */
    _onBlur(): void;
    /** Formats a value and sets it on the input element. */
    private _formatValue;
    static ɵfac: i0.ɵɵFactoryDef<MnjColorpickerInput, [null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MnjColorpickerInput, "input[mnjColorpicker]", ["mnjColorpickerInput"], { "mnjColorpicker": "mnjColorpicker"; "value": "value"; "disabled": "disabled"; }, { "colorChange": "colorChange"; "colorInput": "colorInput"; }, never>;
}
