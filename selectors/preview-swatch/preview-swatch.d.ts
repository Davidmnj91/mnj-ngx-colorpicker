import { Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import * as i0 from "@angular/core";
export declare class MnjPreviewSwatch {
    private colorAdapter;
    get color(): Color;
    set color(value: Color);
    private _color;
    get cssBackground(): string;
    constructor(colorAdapter: ColorAdapter);
    static ɵfac: i0.ɵɵFactoryDef<MnjPreviewSwatch, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjPreviewSwatch, "mnj-preview-swatch", never, { "color": "color"; }, {}, never, never>;
}
