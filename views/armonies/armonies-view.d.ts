import { Color, PaletteColor } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { BaseColorpickerView } from '../colorpicker-view';
import * as i0 from "@angular/core";
export declare class MnjArmoniesPickerView extends BaseColorpickerView {
    protected _colorAdapter: ColorAdapter;
    constructor(_colorAdapter: ColorAdapter);
    complementaryPaletteFn: (color: Color) => PaletteColor[];
    splitComplementaryPaletteFn: (color: Color) => PaletteColor[];
    splitComplementaryPaletteFn1: (color: Color) => PaletteColor[];
    analogous1PaletteFn: (color: Color) => PaletteColor[];
    analogous2PaletteFn: (color: Color) => PaletteColor[];
    triadic1PaletteFn: (color: Color) => PaletteColor[];
    triadic2PaletteFn: (color: Color) => PaletteColor[];
    tetradic1PaletteFn: (color: Color) => PaletteColor[];
    tetradic2PaletteFn: (color: Color) => PaletteColor[];
    tetradic3PaletteFn: (color: Color) => PaletteColor[];
    static ɵfac: i0.ɵɵFactoryDef<MnjArmoniesPickerView, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjArmoniesPickerView, "mnj-armonies-picker-view", ["mnjArmoniesPickerView"], {}, {}, never, never>;
}
