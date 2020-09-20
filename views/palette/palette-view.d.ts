import { EventEmitter } from '@angular/core';
import { Color, PaletteColor } from '../../color';
import { ColorAdapter } from '../../color/color-adapter';
import { ColorPickerView } from '../colorpicker-view';
import * as i0 from "@angular/core";
export declare class MnjPalettePickerView implements ColorPickerView {
    protected _colorAdapter: ColorAdapter;
    get activeColor(): Color;
    set activeColor(value: Color);
    private _activeColor;
    get selected(): Color;
    set selected(value: Color);
    _selected: Color;
    get palette(): PaletteColor[];
    set palette(value: PaletteColor[]);
    private _palette;
    paletteFn: () => PaletteColor[];
    readonly activeColorChange: EventEmitter<Color>;
    constructor(_colorAdapter: ColorAdapter);
    changeColor(value: Color): void;
    _selectColorInPalette(): void;
    static ɵfac: i0.ɵɵFactoryDef<MnjPalettePickerView, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjPalettePickerView, "mnj-palette-picker-view", ["mnjPalettePickerView"], { "activeColor": "activeColor"; "selected": "selected"; "palette": "palette"; }, { "activeColorChange": "activeColorChange"; }, never, never>;
}
