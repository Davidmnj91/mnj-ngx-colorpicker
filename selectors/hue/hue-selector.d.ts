import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { BaseSelector, Container, Point } from '../base-selector';
import * as i0 from "@angular/core";
export declare class MnjHueSelector extends BaseSelector {
    protected colorAdapter: ColorAdapter;
    protected _document: Document;
    protected _ngZone: NgZone;
    protected _elementRef: ElementRef;
    private _changeDetectorRef;
    protected _dir: Directionality;
    hueChange: EventEmitter<Color>;
    get hueThumbPos(): {
        left: string;
        top: string;
    };
    constructor(colorAdapter: ColorAdapter, _document: Document, _ngZone: NgZone, _elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef, _dir: Directionality);
    _setColor(color: Color): void;
    calculateColorFromPosition(container: Container, pointerPos: Point): void;
    _handleKeydownEvent(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MnjHueSelector, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjHueSelector, "mnj-hue-selector", never, {}, { "hueChange": "hueChange"; }, never, never>;
}
