import { ElementRef, EventEmitter } from '@angular/core';
import { Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { ColorFormat } from '../../color/color-spaces';
import * as i0 from "@angular/core";
export declare class MnjInputSelector {
    colorAdapter: ColorAdapter;
    get color(): Color;
    set color(value: Color);
    private _color;
    set colorFormat(value: ColorFormat);
    private _colorFormat;
    inputChange: EventEmitter<Color>;
    colorInput: ElementRef<HTMLInputElement>;
    get colorString(): string;
    private _formats;
    private _selectedIndex;
    constructor(colorAdapter: ColorAdapter);
    changeColor(event: Event): void;
    nextFormat(): void;
    previousFormat(): void;
    _handleKeydownEvent(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MnjInputSelector, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjInputSelector, "mnj-input-selector", never, { "color": "color"; "colorFormat": "colorFormat"; }, { "inputChange": "inputChange"; }, never, never>;
}
