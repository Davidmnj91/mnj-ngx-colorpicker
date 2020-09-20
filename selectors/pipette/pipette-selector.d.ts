import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { Container, Point } from '../base-selector';
import * as i0 from "@angular/core";
declare type SelfPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare class MnjPipetteSelector implements AfterViewInit, OnDestroy {
    protected colorAdapter: ColorAdapter;
    protected _document: Document;
    protected _ngZone: NgZone;
    protected _elementRef: ElementRef<HTMLElement>;
    private _changeDetectorRef;
    canvas: ElementRef<HTMLCanvasElement>;
    get image(): HTMLImageElement;
    set image(value: HTMLImageElement);
    private _image;
    set swatchCells(value: number);
    private _swatchCells;
    _swatchMiddle: any;
    pipetteColorChange: EventEmitter<Color>;
    get canvasThumbPos(): {
        left: string;
        top: string;
    };
    get swatchGridStyle(): {
        gridTemplateColumns: string;
        gridTemplateRows: string;
    };
    get swatchGridPos(): {
        left: string;
        top: string;
        transform: string;
        width: string;
    };
    getPixelBackground(pixel: any): string;
    get showPipetteSwatch(): boolean;
    set showPipetteSwatch(value: boolean);
    private _showPipetteSwatch;
    cachedPointerPos: Point;
    cachedContainerSize: Container;
    thumbPosition: Point;
    swatchPosition: SelfPosition;
    /** Keeps track of the event listeners that we've bound to the `document`. */
    private _globalListeners;
    pipetteSwatchPalette: any[];
    constructor(colorAdapter: ColorAdapter, _document: Document, _ngZone: NgZone, _elementRef: ElementRef<HTMLElement>, _changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    attachListeners(): void;
    private addGlobalListeners;
    /** Clears out the global event listeners from the `document`. */
    private _clearGlobalListeners;
    /** Handler for the `mousedown`/`touchstart` events. */
    private _pointerDown;
    private pointerMove;
    _paintCanvas(): void;
    calculateColorFromPosition(container: Container, pointerPos: Point): void;
    /** Centers and resize given children container into the parent container */
    private _fitImage;
    private _getSwatchPosition;
    static ɵfac: i0.ɵɵFactoryDef<MnjPipetteSelector, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjPipetteSelector, "mnj-pipette-selector", never, { "image": "image"; "swatchCells": "swatchCells"; }, { "pipetteColorChange": "pipetteColorChange"; }, never, never>;
}
export {};
