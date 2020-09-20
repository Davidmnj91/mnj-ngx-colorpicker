import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW } from '@angular/cdk/keycodes';
import { Directive, EventEmitter, forwardRef, Inject, Input, Optional, Output, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subject, Subscription } from 'rxjs';
import { MNJ_COLOR_CONFIG_PROVIDER } from './color/color-config';
import * as i0 from "@angular/core";
import * as i1 from "./color/color-adapter";
import * as i2 from "@angular/material/form-field";
/** @docs-private */
export const MNJ_COLORPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MnjColorpickerInput),
    multi: true,
};
/** @docs-private */
export const MNJ_COLORPICKER_VALIDATORS = {
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
    constructor(
    /** Reference to the colorpicker input component that emitted the event. */
    target, 
    /** Reference to the native input element associated with the colorpicker input. */
    targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
/** Directive used to connect an input to a MnjColorpicker. */
export class MnjColorpickerInput {
    constructor(_elementRef, _colorAdapter, _config, _formField) {
        this._elementRef = _elementRef;
        this._colorAdapter = _colorAdapter;
        this._config = _config;
        this._formField = _formField;
        this._value = null;
        /** Emits when a `change` event is fired on this `<input>`. */
        this.colorChange = new EventEmitter();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.colorInput = new EventEmitter();
        /** Emits when the value changes (either due to user input or programmatic change). */
        this._valueChange = new EventEmitter();
        /** Emits when the internal state has changed */
        this._stateChanges = new Subject();
        this._onTouched = () => { };
        this._cvaOnChange = () => { };
        this._validatorOnChange = () => { };
        this._colorpickerSubscription = Subscription.EMPTY;
        this._colorpickerConfigurationSubscription = Subscription.EMPTY;
        this._localeSubscription = Subscription.EMPTY;
        /** The form control validator for whether the input parses. */
        this._parseValidator = () => {
            return this._lastValueValid ? null : { mnjColorpickerParse: { text: this._elementRef.nativeElement.value } };
        };
        /** The combined form control validator for this input. */
        this._validator = this._parseValidator;
        /** Whether the last value set on the input was valid. */
        this._lastValueValid = false;
    }
    /** The colorpicker that this input is associated with. */
    set mnjColorpicker(value) {
        if (!value) {
            return;
        }
        this._colorpicker = value;
        this._colorpicker._registerInput(this);
        this._colorpickerSubscription.unsubscribe();
        this._colorpickerSubscription = this._colorpicker._selectedChanged.subscribe((selected) => {
            this.value = selected;
            this._cvaOnChange(selected);
            this._onTouched();
            this.colorInput.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
            this.colorChange.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
        });
        this._colorpickerConfigurationSubscription = this._colorpicker._configurationChanges.subscribe((_) => this._formatValue(this.value));
    }
    /** The value of the input. */
    get value() {
        return this._value;
    }
    set value(value) {
        this._lastValueValid = !value || this._colorAdapter.isValid(value);
        value = this._colorAdapter.getValidColorOrNull(value);
        const oldColor = this.value;
        this._value = value;
        this._formatValue(value);
        if (!this._colorAdapter.sameColor(oldColor, value)) {
            this._valueChange.emit(value);
        }
    }
    /** Whether the colorpicker-input is disabled. */
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
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
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    /** @docs-private */
    validate(c) {
        return this._validator ? this._validator(c) : null;
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this.value = value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _onKeydown(event) {
        const isAltDownArrow = event.altKey && event.keyCode === DOWN_ARROW;
        if (this._colorpicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._openPopup();
            event.preventDefault();
        }
    }
    _onInput(value) {
        const lastValueWasValid = this._lastValueValid;
        let color = this._colorAdapter.parse(value);
        this._lastValueValid = this._colorAdapter.isValid(color);
        color = this._colorAdapter.getValidColorOrNull(color);
        if (!this._colorAdapter.sameColor(color, this.value)) {
            this._value = color;
            this._cvaOnChange(color);
            this._valueChange.emit(color);
            this.colorInput.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
        }
        else {
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
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Returns the palette used by the input's form field, if any. */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /** Gets the value at which the calendar should start. */
    getStartValue() {
        return this.value;
    }
    /** Opens the associated colorpicker. */
    _openPopup() {
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
    _formatValue(value) {
        const showAlpha = (this._colorpicker && this._colorpicker.showAlpha) || this._config.showAlpha;
        const displayFormat = (this._colorpicker && this._colorpicker.displayFormat) || this._config.displayFormat;
        this._elementRef.nativeElement.value = value ? this._colorAdapter.format(value, displayFormat, showAlpha) : '';
    }
}
MnjColorpickerInput.ɵfac = function MnjColorpickerInput_Factory(t) { return new (t || MnjColorpickerInput)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ColorAdapter), i0.ɵɵdirectiveInject(MNJ_COLOR_CONFIG_PROVIDER), i0.ɵɵdirectiveInject(i2.MatFormField, 8)); };
MnjColorpickerInput.ɵdir = i0.ɵɵdefineDirective({ type: MnjColorpickerInput, selectors: [["input", "mnjColorpicker", ""]], hostAttrs: ["aria-haspopup", "_colorpicker ? \"dialog\" : null"], hostVars: 2, hostBindings: function MnjColorpickerInput_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("input", function MnjColorpickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MnjColorpickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MnjColorpickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MnjColorpickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        i0.ɵɵhostProperty("disabled", ctx.disabled);
        i0.ɵɵattribute("aria-owns", (ctx._colorpicker == null ? null : ctx._colorpicker.opened) && ctx._colorpicker.id || null);
    } }, inputs: { mnjColorpicker: "mnjColorpicker", value: "value", disabled: "disabled" }, outputs: { colorChange: "colorChange", colorInput: "colorInput" }, exportAs: ["mnjColorpickerInput"], features: [i0.ɵɵProvidersFeature([
            MNJ_COLORPICKER_VALUE_ACCESSOR,
            MNJ_COLORPICKER_VALIDATORS,
            { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
        ]), i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorpickerInput, [{
        type: Directive,
        args: [{
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
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ColorAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MNJ_COLOR_CONFIG_PROVIDER]
            }] }, { type: i2.MatFormField, decorators: [{
                type: Optional
            }] }]; }, { mnjColorpicker: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], colorChange: [{
            type: Output
        }], colorInput: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvY29sb3JwaWNrZXItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGFBQWEsRUFDYixpQkFBaUIsR0FJbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUc3QyxPQUFPLEVBQWtCLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFHakYsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFRO0lBQ2pELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRixvQkFBb0I7QUFDcEIsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQVE7SUFDN0MsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRjs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLHdCQUF3QjtJQUluQztJQUNF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OEJBQThCO29CQUM5QiwwQkFBMEI7b0JBQzFCLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRTtpQkFDeEU7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxnQ0FBZ0M7b0JBQ2pELGtCQUFrQixFQUFFLG1EQUFtRDtvQkFDdkUsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLFNBQVMsRUFBRSwrQkFBK0I7b0JBQzFDLFVBQVUsRUFBRSxhQUFhO29CQUN6QixRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLG9CQUFvQjtpQkFDbEM7YUFDRjs7c0JBMkdJLE1BQU07dUJBQUMseUJBQXlCOztzQkFDaEMsUUFBUTt3QkF4R1AsY0FBYztrQkFEakIsS0FBSztZQTBCRixLQUFLO2tCQURSLEtBQUs7WUFtQkYsUUFBUTtrQkFEWCxLQUFLO1lBd0JhLFdBQVc7a0JBQTdCLE1BQU07WUFHWSxVQUFVO2tCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgRE9XTl9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICBOR19WQUxJREFUT1JTLFxyXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMsXHJcbiAgVmFsaWRhdG9yLFxyXG4gIFZhbGlkYXRvckZuLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNQVRfSU5QVVRfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3IvY29sb3InO1xyXG5pbXBvcnQgeyBDb2xvckFkYXB0ZXIgfSBmcm9tICcuL2NvbG9yL2NvbG9yLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBNbmpDb2xvckNvbmZpZywgTU5KX0NPTE9SX0NPTkZJR19QUk9WSURFUiB9IGZyb20gJy4vY29sb3IvY29sb3ItY29uZmlnJztcclxuaW1wb3J0IHsgTW5qQ29sb3JwaWNrZXIgfSBmcm9tICcuL2NvbG9ycGlja2VyJztcclxuXHJcbi8qKiBAZG9jcy1wcml2YXRlICovXHJcbmV4cG9ydCBjb25zdCBNTkpfQ09MT1JQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNbmpDb2xvcnBpY2tlcklucHV0KSxcclxuICBtdWx0aTogdHJ1ZSxcclxufTtcclxuXHJcbi8qKiBAZG9jcy1wcml2YXRlICovXHJcbmV4cG9ydCBjb25zdCBNTkpfQ09MT1JQSUNLRVJfVkFMSURBVE9SUzogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTW5qQ29sb3JwaWNrZXJJbnB1dCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdXNlZCBmb3IgY29sb3JwaWNrZXIgaW5wdXQgYW5kIGNoYW5nZSBldmVudHMuIFdlIGRvbid0IGFsd2F5cyBoYXZlIGFjY2VzcyB0byBhIG5hdGl2ZVxyXG4gKiBpbnB1dCBvciBjaGFuZ2UgZXZlbnQgYmVjYXVzZSB0aGUgZXZlbnQgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgdGhlIHVzZXIgY2xpY2tpbmcgb24gdGhlXHJcbiAqIGNhbGVuZGFyIHBvcHVwLiBGb3IgY29uc2lzdGVuY3ksIHdlIGFsd2F5cyB1c2UgTW5qQ29sb3JwaWNrZXJJbnB1dEV2ZW50IGluc3RlYWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW5qQ29sb3JwaWNrZXJJbnB1dEV2ZW50IHtcclxuICAvKiogVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIHRhcmdldCBjb2xvcnBpY2tlciBpbnB1dC4gKi9cclxuICB2YWx1ZTogQ29sb3IgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGNvbG9ycGlja2VyIGlucHV0IGNvbXBvbmVudCB0aGF0IGVtaXR0ZWQgdGhlIGV2ZW50LiAqL1xyXG4gICAgcHVibGljIHRhcmdldDogTW5qQ29sb3JwaWNrZXJJbnB1dCxcclxuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29sb3JwaWNrZXIgaW5wdXQuICovXHJcbiAgICBwdWJsaWMgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnRcclxuICApIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnRhcmdldC52YWx1ZTtcclxuICB9XHJcbn1cclxuLyoqIERpcmVjdGl2ZSB1c2VkIHRvIGNvbm5lY3QgYW4gaW5wdXQgdG8gYSBNbmpDb2xvcnBpY2tlci4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttbmpDb2xvcnBpY2tlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbW5qQ29sb3JwaWNrZXJJbnB1dCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBNTkpfQ09MT1JQSUNLRVJfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICBNTkpfQ09MT1JQSUNLRVJfVkFMSURBVE9SUyxcclxuICAgIHsgcHJvdmlkZTogTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogTW5qQ29sb3JwaWNrZXJJbnB1dCB9LFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAnX2NvbG9ycGlja2VyID8gXCJkaWFsb2dcIiA6IG51bGwnLFxyXG4gICAgJ1thdHRyLmFyaWEtb3duc10nOiAnKF9jb2xvcnBpY2tlcj8ub3BlbmVkICYmIF9jb2xvcnBpY2tlci5pZCkgfHwgbnVsbCcsXHJcbiAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnKGlucHV0KSc6ICdfb25JbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXHJcbiAgICAnKGNoYW5nZSknOiAnX29uQ2hhbmdlKCknLFxyXG4gICAgJyhibHVyKSc6ICdfb25CbHVyKCknLFxyXG4gICAgJyhrZXlkb3duKSc6ICdfb25LZXlkb3duKCRldmVudCknLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNbmpDb2xvcnBpY2tlcklucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBWYWxpZGF0b3Ige1xyXG4gIC8qKiBUaGUgY29sb3JwaWNrZXIgdGhhdCB0aGlzIGlucHV0IGlzIGFzc29jaWF0ZWQgd2l0aC4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBtbmpDb2xvcnBpY2tlcih2YWx1ZTogTW5qQ29sb3JwaWNrZXIpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NvbG9ycGlja2VyID0gdmFsdWU7XHJcbiAgICB0aGlzLl9jb2xvcnBpY2tlci5fcmVnaXN0ZXJJbnB1dCh0aGlzKTtcclxuICAgIHRoaXMuX2NvbG9ycGlja2VyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgdGhpcy5fY29sb3JwaWNrZXJTdWJzY3JpcHRpb24gPSB0aGlzLl9jb2xvcnBpY2tlci5fc2VsZWN0ZWRDaGFuZ2VkLnN1YnNjcmliZSgoc2VsZWN0ZWQ6IENvbG9yKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZDtcclxuICAgICAgdGhpcy5fY3ZhT25DaGFuZ2Uoc2VsZWN0ZWQpO1xyXG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgICAgdGhpcy5jb2xvcklucHV0LmVtaXQobmV3IE1uakNvbG9ycGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KG5ldyBNbmpDb2xvcnBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jb2xvcnBpY2tlckNvbmZpZ3VyYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLl9jb2xvcnBpY2tlci5fY29uZmlndXJhdGlvbkNoYW5nZXMuc3Vic2NyaWJlKChfKSA9PlxyXG4gICAgICB0aGlzLl9mb3JtYXRWYWx1ZSh0aGlzLnZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcbiAgX2NvbG9ycGlja2VyOiBNbmpDb2xvcnBpY2tlcjtcclxuXHJcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdmFsdWUoKTogQ29sb3IgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBDb2xvciB8IG51bGwpIHtcclxuICAgIHRoaXMuX2xhc3RWYWx1ZVZhbGlkID0gIXZhbHVlIHx8IHRoaXMuX2NvbG9yQWRhcHRlci5pc1ZhbGlkKHZhbHVlKTtcclxuICAgIHZhbHVlID0gdGhpcy5fY29sb3JBZGFwdGVyLmdldFZhbGlkQ29sb3JPck51bGwodmFsdWUpO1xyXG4gICAgY29uc3Qgb2xkQ29sb3IgPSB0aGlzLnZhbHVlO1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2Zvcm1hdFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2NvbG9yQWRhcHRlci5zYW1lQ29sb3Iob2xkQ29sb3IsIHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IENvbG9yIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjb2xvcnBpY2tlci1pbnB1dCBpcyBkaXNhYmxlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xyXG4gICAgICB0aGlzLl9zdGF0ZUNoYW5nZXMubmV4dCh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIG5lZWQgdG8gbnVsbCBjaGVjayB0aGUgYGJsdXJgIG1ldGhvZCwgYmVjYXVzZSBpdCdzIHVuZGVmaW5lZCBkdXJpbmcgU1NSLlxyXG4gICAgaWYgKG5ld1ZhbHVlICYmIGVsZW1lbnQuYmx1cikge1xyXG4gICAgICAvLyBOb3JtYWxseSwgbmF0aXZlIGlucHV0IGVsZW1lbnRzIGF1dG9tYXRpY2FsbHkgYmx1ciBpZiB0aGV5IHR1cm4gZGlzYWJsZWQuIFRoaXMgYmVoYXZpb3JcclxuICAgICAgLy8gaXMgcHJvYmxlbWF0aWMsIGJlY2F1c2UgaXQgd291bGQgbWVhbiB0aGF0IGl0IHRyaWdnZXJzIGFub3RoZXIgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSxcclxuICAgICAgLy8gd2hpY2ggdGhlbiBjYXVzZXMgYSBjaGFuZ2VkIGFmdGVyIGNoZWNrZWQgZXJyb3IgaWYgdGhlIGlucHV0IGVsZW1lbnQgd2FzIGZvY3VzZWQgYmVmb3JlLlxyXG4gICAgICBlbGVtZW50LmJsdXIoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGEgYGNoYW5nZWAgZXZlbnQgaXMgZmlyZWQgb24gdGhpcyBgPGlucHV0PmAuICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNvbG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW5qQ29sb3JwaWNrZXJJbnB1dEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW5qQ29sb3JwaWNrZXJJbnB1dEV2ZW50PigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhbiBgaW5wdXRgIGV2ZW50IGlzIGZpcmVkIG9uIHRoaXMgYDxpbnB1dD5gLiAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjb2xvcklucHV0OiBFdmVudEVtaXR0ZXI8TW5qQ29sb3JwaWNrZXJJbnB1dEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW5qQ29sb3JwaWNrZXJJbnB1dEV2ZW50PigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAoZWl0aGVyIGR1ZSB0byB1c2VyIGlucHV0IG9yIHByb2dyYW1tYXRpYyBjaGFuZ2UpLiAqL1xyXG4gIF92YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3IgfCBudWxsPigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgaW50ZXJuYWwgc3RhdGUgaGFzIGNoYW5nZWQgKi9cclxuICBfc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICBwcml2YXRlIF9jdmFPbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgcHJpdmF0ZSBfdmFsaWRhdG9yT25DaGFuZ2UgPSAoKSA9PiB7fTtcclxuXHJcbiAgcHJpdmF0ZSBfY29sb3JwaWNrZXJTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIHByaXZhdGUgX2NvbG9ycGlja2VyQ29uZmlndXJhdGlvblN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHdoZXRoZXIgdGhlIGlucHV0IHBhcnNlcy4gKi9cclxuICBwcml2YXRlIF9wYXJzZVZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhc3RWYWx1ZVZhbGlkID8gbnVsbCA6IHsgbW5qQ29sb3JwaWNrZXJQYXJzZTogeyB0ZXh0OiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgfSB9O1xyXG4gIH07XHJcblxyXG4gIC8qKiBUaGUgY29tYmluZWQgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhpcyBpbnB1dC4gKi9cclxuICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgbnVsbCA9IHRoaXMuX3BhcnNlVmFsaWRhdG9yO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgbGFzdCB2YWx1ZSBzZXQgb24gdGhlIGlucHV0IHdhcyB2YWxpZC4gKi9cclxuICBwcml2YXRlIF9sYXN0VmFsdWVWYWxpZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXHJcbiAgICBwdWJsaWMgX2NvbG9yQWRhcHRlcjogQ29sb3JBZGFwdGVyLFxyXG4gICAgQEluamVjdChNTkpfQ09MT1JfQ09ORklHX1BST1ZJREVSKSBwcml2YXRlIF9jb25maWc6IE1uakNvbG9yQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZm9ybUZpZWxkOiBNYXRGb3JtRmllbGRcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLm5leHQodW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fY29sb3JwaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2NvbG9ycGlja2VyQ29uZmlndXJhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fbG9jYWxlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xyXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xyXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IgPyB0aGlzLl92YWxpZGF0b3IoYykgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBDb2xvcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3ZhT25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgX29uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgY29uc3QgaXNBbHREb3duQXJyb3cgPSBldmVudC5hbHRLZXkgJiYgZXZlbnQua2V5Q29kZSA9PT0gRE9XTl9BUlJPVztcclxuXHJcbiAgICBpZiAodGhpcy5fY29sb3JwaWNrZXIgJiYgaXNBbHREb3duQXJyb3cgJiYgIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZWFkT25seSkge1xyXG4gICAgICB0aGlzLl9vcGVuUG9wdXAoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbklucHV0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGxhc3RWYWx1ZVdhc1ZhbGlkID0gdGhpcy5fbGFzdFZhbHVlVmFsaWQ7XHJcbiAgICBsZXQgY29sb3IgPSB0aGlzLl9jb2xvckFkYXB0ZXIucGFyc2UodmFsdWUpO1xyXG4gICAgdGhpcy5fbGFzdFZhbHVlVmFsaWQgPSB0aGlzLl9jb2xvckFkYXB0ZXIuaXNWYWxpZChjb2xvcik7XHJcbiAgICBjb2xvciA9IHRoaXMuX2NvbG9yQWRhcHRlci5nZXRWYWxpZENvbG9yT3JOdWxsKGNvbG9yKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2NvbG9yQWRhcHRlci5zYW1lQ29sb3IoY29sb3IsIHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gY29sb3I7XHJcbiAgICAgIHRoaXMuX2N2YU9uQ2hhbmdlKGNvbG9yKTtcclxuICAgICAgdGhpcy5fdmFsdWVDaGFuZ2UuZW1pdChjb2xvcik7XHJcbiAgICAgIHRoaXMuY29sb3JJbnB1dC5lbWl0KG5ldyBNbmpDb2xvcnBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDYWxsIHRoZSBDVkEgY2hhbmdlIGhhbmRsZXIgZm9yIGludmFsaWQgdmFsdWVzXHJcbiAgICAgIC8vIHNpbmNlIHRoaXMgaXMgd2hhdCBtYXJrcyB0aGUgY29udHJvbCBhcyBkaXJ0eS5cclxuICAgICAgaWYgKHZhbHVlICYmICF0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fY3ZhT25DaGFuZ2UoY29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGFzdFZhbHVlV2FzVmFsaWQgIT09IHRoaXMuX2xhc3RWYWx1ZVZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KG5ldyBNbmpDb2xvcnBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGNvbG9ycGlja2VyIHBvcHVwIHNob3VsZCBiZSBjb25uZWN0ZWQgdG8uXHJcbiAgICogQHJldHVybiBUaGUgZWxlbWVudCB0byBjb25uZWN0IHRoZSBwb3B1cCB0by5cclxuICAgKi9cclxuICBnZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCk6IEVsZW1lbnRSZWYge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1GaWVsZCA/IHRoaXMuX2Zvcm1GaWVsZC5nZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCkgOiB0aGlzLl9lbGVtZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJldHVybnMgdGhlIHBhbGV0dGUgdXNlZCBieSB0aGUgaW5wdXQncyBmb3JtIGZpZWxkLCBpZiBhbnkuICovXHJcbiAgZ2V0VGhlbWVQYWxldHRlKCk6IFRoZW1lUGFsZXR0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybUZpZWxkID8gdGhpcy5fZm9ybUZpZWxkLmNvbG9yIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgdGhlIHZhbHVlIGF0IHdoaWNoIHRoZSBjYWxlbmRhciBzaG91bGQgc3RhcnQuICovXHJcbiAgZ2V0U3RhcnRWYWx1ZSgpOiBDb2xvciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogT3BlbnMgdGhlIGFzc29jaWF0ZWQgY29sb3JwaWNrZXIuICovXHJcbiAgcHJvdGVjdGVkIF9vcGVuUG9wdXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fY29sb3JwaWNrZXIpIHtcclxuICAgICAgdGhpcy5fY29sb3JwaWNrZXIub3BlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgYmx1ciBldmVudHMgb24gdGhlIGlucHV0LiAqL1xyXG4gIF9vbkJsdXIoKSB7XHJcbiAgICAvLyBSZWZvcm1hdCB0aGUgaW5wdXQgb25seSBpZiB3ZSBoYXZlIGEgdmFsaWQgdmFsdWUuXHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLl9mb3JtYXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBGb3JtYXRzIGEgdmFsdWUgYW5kIHNldHMgaXQgb24gdGhlIGlucHV0IGVsZW1lbnQuICovXHJcbiAgcHJpdmF0ZSBfZm9ybWF0VmFsdWUodmFsdWU6IENvbG9yIHwgbnVsbCkge1xyXG4gICAgY29uc3Qgc2hvd0FscGhhID0gKHRoaXMuX2NvbG9ycGlja2VyICYmIHRoaXMuX2NvbG9ycGlja2VyLnNob3dBbHBoYSkgfHwgdGhpcy5fY29uZmlnLnNob3dBbHBoYTtcclxuICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSAodGhpcy5fY29sb3JwaWNrZXIgJiYgdGhpcy5fY29sb3JwaWNrZXIuZGlzcGxheUZvcm1hdCkgfHwgdGhpcy5fY29uZmlnLmRpc3BsYXlGb3JtYXQ7XHJcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSA/IHRoaXMuX2NvbG9yQWRhcHRlci5mb3JtYXQodmFsdWUsIGRpc3BsYXlGb3JtYXQsIHNob3dBbHBoYSkgOiAnJztcclxuICB9XHJcbn1cclxuIl19