import { Directionality } from '@angular/cdk/bidi';
import { AfterViewInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Color } from '../color/color';
import { ColorAdapter } from '../color/color-adapter';
import * as i0 from "@angular/core";
export interface Point {
    x: number;
    y: number;
}
export interface Container {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}
export declare function getPointerPositionFromEvent(event: MouseEvent | TouchEvent): Point;
export declare function isSamePosition(point1: Point, point2: Point): boolean;
export declare function getContainerSize(container: ElementRef | HTMLElement): Container;
export declare function getPointerPositionInContainer(pointer: Point, container: Container): Point;
/** Options that can be used to bind a passive event listener. */
export declare const passiveEventListenerOptions: boolean | AddEventListenerOptions;
/** Options that can be used to bind an active event listener. */
export declare const activeEventListenerOptions: boolean | AddEventListenerOptions;
/** Event options that can be used to bind an active, capturing event. */
export declare const activeCapturingEventOptions: boolean | AddEventListenerOptions;
export declare abstract class BaseSelector implements AfterViewInit, OnDestroy {
    protected colorAdapter: ColorAdapter;
    protected _document: Document;
    protected _ngZone: NgZone;
    protected _elementRef: ElementRef;
    protected _dir?: Directionality;
    get color(): Color;
    set color(value: Color);
    _color: Color;
    cachedPointerPos: Point;
    cachedContainerSize: Container;
    thumbPosition: Point;
    /** Keeps track of the event listeners that we've bound to the `document`. */
    private _globalListeners;
    constructor(colorAdapter: ColorAdapter, _document: Document, _ngZone: NgZone, _elementRef: ElementRef, _dir?: Directionality);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    attachListeners(): void;
    private addGlobalListeners;
    /** Clears out the global event listeners from the `document`. */
    private _clearGlobalListeners;
    /** Handler for the `mousedown`/`touchstart` events. */
    private _pointerDown;
    private pointerMove;
    _isRtl(): boolean;
    abstract calculateColorFromPosition(container: Container, pointerPos: Point): any;
    abstract _setColor(color: Color): any;
    static ɵfac: i0.ɵɵFactoryDef<BaseSelector, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseSelector, never, never, { "color": "color"; }, {}, never>;
}
