import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MnjColorpicker } from './colorpicker';
import { MnjColorpickerIntl } from './colorpicker-intl';
import * as i0 from "@angular/core";
/** Can be used to override the icon of a `matColorpickerToggle`. */
export declare class MnjColorpickerToggleIcon {
    static ɵfac: i0.ɵɵFactoryDef<MnjColorpickerToggleIcon, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MnjColorpickerToggleIcon, "[mnjColorpickerToggleIcon]", never, {}, {}, never>;
}
export declare class MnjColorpickerToggle implements AfterContentInit, OnDestroy {
    _intl: MnjColorpickerIntl;
    private _changeDetectorRef;
    private _stateChanges;
    /** Colorpicker instance that the button will toggle. */
    get colorpicker(): MnjColorpicker;
    set colorpicker(value: MnjColorpicker);
    private _colorpicker;
    /** Tabindex for the toggle. */
    tabIndex: number | null;
    /** Whether the toggle button is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /** Whether ripples on the toggle should be disabled. */
    disableRipple: boolean;
    /** Custom icon set by the consumer. */
    _customIcon: MnjColorpickerToggleIcon;
    /** Underlying button element. */
    _button: MatButton;
    constructor(_intl: MnjColorpickerIntl, _changeDetectorRef: ChangeDetectorRef, defaultTabIndex: string);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    _open(event: Event): void;
    private _watchStateChanges;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: i0.ɵɵFactoryDef<MnjColorpickerToggle, [null, null, { attribute: "tabindex"; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjColorpickerToggle, "mnj-colorpicker-toggle", ["mnjColorpickerToggle"], { "colorpicker": "for"; "tabIndex": "tabIndex"; "disabled": "disabled"; "disableRipple": "disableRipple"; }, {}, ["_customIcon"], ["[mnjColorpickerToggleIcon]"]>;
}
