import { Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { BaseColorpickerView } from '../colorpicker-view';
import * as i0 from "@angular/core";
export declare class MnjChromePickerView extends BaseColorpickerView {
    protected _colorAdapter: ColorAdapter;
    showAlpha: boolean;
    colorShadesFn: (color: Color) => {
        title: string;
        color: Color;
        active: boolean;
    }[];
    constructor(_colorAdapter: ColorAdapter);
    static ɵfac: i0.ɵɵFactoryDef<MnjChromePickerView, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjChromePickerView, "mnj-chrome-picker-view", ["mnjChromePickerView"], { "showAlpha": "showAlpha"; }, {}, never, never>;
}
