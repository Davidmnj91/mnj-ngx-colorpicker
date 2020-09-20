import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { BaseSelector, Container, Point } from '../base-selector';
import * as i0 from "@angular/core";
export declare class MnjAlphaSelector extends BaseSelector {
    protected colorAdapter: ColorAdapter;
    protected _document: Document;
    protected _ngZone: NgZone;
    protected _elementRef: ElementRef;
    private _changeDetectorRef;
    protected _dir: Directionality;
    alphaChange: EventEmitter<Color>;
    get alphaThumbPos(): {
        left: string;
        top: string;
    };
    get gradient(): {
        backgroundImage: string;
    };
    constructor(colorAdapter: ColorAdapter, _document: Document, _ngZone: NgZone, _elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef, _dir: Directionality);
    _setColor(color: Color): void;
    calculateColorFromPosition(container: Container, pointerPos: Point): void;
    _handleKeydownEvent(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MnjAlphaSelector, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjAlphaSelector, "mnj-alpha-selector", never, {}, { "alphaChange": "alphaChange"; }, never, never>;
}
