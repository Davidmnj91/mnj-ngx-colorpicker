import { EventEmitter } from '@angular/core';
import { Color } from '../color/color';
import { ColorAdapter } from '../color/color-adapter';
import * as i0 from "@angular/core";
/** Pure abstract class due the impossibility to add decorators to interfaces */
export declare abstract class ColorPickerView {
    /**
     * The current active color. This determines which color is
     * highlighted when using keyboard navigation.
     */
    activeColor: Color;
    /** The currently selected color. */
    selected: Color;
    /**
     * Emits the color chosen in any view.
     * This doesn't imply a change on the selected color.
     */
    readonly activeColorChange: EventEmitter<Color>;
    static ɵfac: i0.ɵɵFactoryDef<ColorPickerView, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ColorPickerView, never, never, {}, {}, never>;
}
export declare abstract class BaseColorpickerView implements ColorPickerView {
    protected _colorAdapter: ColorAdapter;
    /**
     * The color to display in this armonies view.
     */
    get activeColor(): Color;
    set activeColor(value: Color);
    private _activeColor;
    get selected(): Color;
    set selected(value: Color);
    _selected: Color;
    readonly activeColorChange: EventEmitter<Color>;
    constructor(_colorAdapter: ColorAdapter);
    changeColor(value: Color): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseColorpickerView, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseColorpickerView, never, never, { "activeColor": "activeColor"; "selected": "selected"; }, { "activeColorChange": "activeColorChange"; }, never>;
}
