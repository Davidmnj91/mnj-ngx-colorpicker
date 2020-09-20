import { coerceBooleanProperty, coerceElement, coerceNumberProperty } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { take } from 'rxjs/operators';
import { fromRgb } from '../../color/color';
import { activeCapturingEventOptions, activeEventListenerOptions, BaseSelector, getContainerSize, getPointerPositionFromEvent, getPointerPositionInContainer, isSamePosition, passiveEventListenerOptions, } from '../base-selector';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "@angular/common";
const _c0 = ["imageCanvas"];
function MnjPipetteSelector_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const swatch_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background", ctx_r2.getPixelBackground(swatch_r3));
    i0.ɵɵclassProp("mnj-pipette-selector__swatch-container--cell--active", i_r4 === ctx_r2._swatchMiddle);
} }
function MnjPipetteSelector_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, MnjPipetteSelector_div_2_div_2_Template, 1, 4, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r1.swatchGridPos);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r1.swatchGridStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.pipetteSwatchPalette);
} }
export class MnjPipetteSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef) {
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.pipetteColorChange = new EventEmitter();
        this._showPipetteSwatch = false;
        this.thumbPosition = { x: 0, y: 0 };
        this.swatchPosition = 'bottom-right';
        /** Keeps track of the event listeners that we've bound to the `document`. */
        this._globalListeners = new Map();
        this.pipetteSwatchPalette = [];
        /** Clears out the global event listeners from the `document`. */
        this._clearGlobalListeners = () => {
            this.showPipetteSwatch = false;
            this._globalListeners.forEach((config, name) => {
                this._document.removeEventListener(name, config.handler, config.options);
            });
            this._globalListeners.clear();
        };
        /** Handler for the `mousedown`/`touchstart` events. */
        this._pointerDown = (event) => {
            const pointer = getPointerPositionFromEvent(event);
            if (isSamePosition(this.cachedPointerPos, pointer)) {
                return;
            }
            this.cachedContainerSize = getContainerSize(this._elementRef);
            this.calculateColorFromPosition(this.cachedContainerSize, pointer);
            const isTouchEvent = event.type.startsWith('touch');
            const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            this._clearGlobalListeners();
            this._globalListeners
                .set(moveEvent, {
                handler: this.pointerMove,
                options: activeCapturingEventOptions,
            })
                .set(upEvent, {
                handler: this._clearGlobalListeners,
                options: true,
            });
            this.showPipetteSwatch = true;
            this.addGlobalListeners();
        };
        this.pointerMove = (event) => {
            const pointer = getPointerPositionFromEvent(event);
            if (isSamePosition(this.cachedPointerPos, pointer)) {
                return;
            }
            this.calculateColorFromPosition(this.cachedContainerSize, pointer);
        };
        this.swatchCells = 9;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
        this._paintCanvas();
    }
    set swatchCells(value) {
        value = coerceNumberProperty(value);
        value = value % 2 === 1 ? value : value - 1;
        if (value !== this._swatchCells) {
            this._swatchCells = value;
            this._swatchMiddle = Math.floor(Math.pow(value, 2) / 2);
        }
    }
    get canvasThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: `${this.thumbPosition.y}%` };
    }
    get swatchGridStyle() {
        return {
            gridTemplateColumns: `repeat(${this._swatchCells}, 10px)`,
            gridTemplateRows: `repeat(${this._swatchCells}, 10px)`,
        };
    }
    get swatchGridPos() {
        const delta = (this._swatchCells * 4) / 3;
        let translate;
        switch (this.swatchPosition) {
            case 'bottom-right': {
                translate = `${delta}%, ${delta}%`;
                break;
            }
            case 'top-right': {
                translate = `${delta}%, ${-100 - delta}%`;
                break;
            }
            case 'top-left': {
                translate = `${-100 - delta}%, ${-100 - delta}%`;
                break;
            }
            case 'bottom-left': {
                translate = `${-100 - delta}%, ${delta}%`;
                break;
            }
        }
        return {
            left: `${this.thumbPosition.x}%`,
            top: `${this.thumbPosition.y}%`,
            transform: `translate(${translate})`,
            width: `${this._swatchCells * 10 + 1}px`,
        };
    }
    getPixelBackground(pixel) {
        return `rgba(${pixel.red}, ${pixel.green}, ${pixel.blue}, ${pixel.alpha})`;
    }
    get showPipetteSwatch() {
        return this._showPipetteSwatch && !!this.image;
    }
    set showPipetteSwatch(value) {
        value = coerceBooleanProperty(value);
        if (this._showPipetteSwatch !== value) {
            this._showPipetteSwatch = value;
            this._changeDetectorRef.detectChanges();
        }
    }
    ngAfterViewInit() {
        this.attachListeners();
        if (this._image) {
            // Paint canvas if there was a pending image that could not be rendered until this momment
            this._ngZone.onStable.pipe(take(1)).subscribe(() => this._paintCanvas());
        }
    }
    ngOnDestroy() {
        this._clearGlobalListeners();
    }
    // LISTENERS
    attachListeners() {
        const sliderElement = coerceElement(this._elementRef);
        this._ngZone.runOutsideAngular(() => {
            sliderElement.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
            sliderElement.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        });
    }
    addGlobalListeners() {
        this._ngZone.runOutsideAngular(() => {
            this._globalListeners.forEach((config, name) => {
                this._document.addEventListener(name, config.handler, config.options);
            });
        });
    }
    _paintCanvas() {
        if (this.image && this.canvas) {
            const canvasElement = coerceElement(this.canvas);
            const { width: imgWidth, height: imgHeight } = this.image;
            const { width: containerWidth, height: containerHeight } = coerceElement(this._elementRef).getBoundingClientRect();
            const ctx = canvasElement.getContext('2d');
            ctx.clearRect(0, 0, canvasElement.height, canvasElement.width);
            const canvasWidth = Math.floor(containerWidth);
            const canvasHeight = Math.floor(containerHeight);
            const { offsetX, offsetY, width, height } = this._fitImage(canvasWidth, canvasHeight, imgWidth, imgHeight);
            canvasElement.width = canvasWidth;
            canvasElement.height = canvasHeight;
            ctx.drawImage(this.image, offsetX, offsetY, width, height);
            this._changeDetectorRef.markForCheck();
        }
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x, y } = getPointerPositionInContainer(pointerPos, container);
            const pointerX = x * 100;
            const pointerY = y * 100;
            this.thumbPosition = { x: pointerX, y: pointerY };
            this.swatchPosition = this._getSwatchPosition(pointerPos, container);
            const leftPos = pointerPos.x - container.left;
            const topPos = pointerPos.y - container.top;
            const ctx = this.canvas.nativeElement.getContext('2d');
            const negativeOffset = this._swatchCells / 2 - 1;
            const pixels = ctx.getImageData(leftPos - negativeOffset, topPos - negativeOffset, this._swatchCells, this._swatchCells);
            this.pipetteSwatchPalette = [];
            for (let i = 0; i < pixels.data.length; i += 4) {
                this.pipetteSwatchPalette.push({
                    red: pixels.data[i],
                    green: pixels.data[i + 1],
                    blue: pixels.data[i + 2],
                    alpha: pixels.data[i + 3] / 255,
                });
            }
            const { red, green, blue, alpha } = this.pipetteSwatchPalette[this._swatchMiddle];
            const color = fromRgb({ red, green, blue }, alpha);
            this.pipetteColorChange.emit(color);
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Centers and resize given children container into the parent container */
    _fitImage(parentWidth, parentHeight, childWidth, childHeight, scale = 1, offsetX = 0.5, offsetY = 0.5) {
        const childRatio = childWidth / childHeight;
        const parentRatio = parentWidth / parentHeight;
        let width = parentWidth * scale;
        let height = parentHeight * scale;
        if (childRatio > parentRatio) {
            height = width / childRatio;
        }
        else {
            width = height * childRatio;
        }
        return {
            width,
            height,
            offsetX: (parentWidth - width) * offsetX,
            offsetY: (parentHeight - height) * offsetY,
        };
    }
    _getSwatchPosition(pointerPos, container) {
        const { x, y } = pointerPos;
        const { right, bottom } = container;
        const swatchRight = x + 10 * this._swatchCells + 1; // 10 pixels per cell plus 1px border
        const swatchBottom = y + 10 * this._swatchCells + 1; // 10 pixels per cells plus 1px border
        const topOrBottom = swatchBottom > bottom;
        const leftOrRight = swatchRight > right;
        if (!topOrBottom && !leftOrRight)
            return 'bottom-right';
        if (topOrBottom && leftOrRight)
            return 'top-left';
        if (topOrBottom && !leftOrRight)
            return 'top-right';
        if (!topOrBottom && leftOrRight)
            return 'bottom-left';
    }
}
MnjPipetteSelector.ɵfac = function MnjPipetteSelector_Factory(t) { return new (t || MnjPipetteSelector)(i0.ɵɵdirectiveInject(i1.ColorAdapter), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MnjPipetteSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjPipetteSelector, selectors: [["mnj-pipette-selector"]], viewQuery: function MnjPipetteSelector_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
    } }, hostAttrs: [1, "mnj-pipette-selector"], inputs: { image: "image", swatchCells: "swatchCells" }, outputs: { pipetteColorChange: "pipetteColorChange" }, features: [i0.ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjPipetteSelector }])], decls: 5, vars: 2, consts: [["imageCanvas", ""], ["class", "mnj-pipette-selector__swatch-container", 3, "ngStyle", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"], [1, "mnj-pipette-selector__swatch-container", 3, "ngStyle"], [1, "mnj-pipette-selector__swatch-container__grid", 3, "ngStyle"], ["class", "mnj-pipette-selector__swatch-container--cell", 3, "background", "mnj-pipette-selector__swatch-container--cell--active", 4, "ngFor", "ngForOf"], [1, "mnj-pipette-selector__swatch-container--cell"]], template: function MnjPipetteSelector_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "canvas", null, 0);
        i0.ɵɵtemplate(2, MnjPipetteSelector_div_2_Template, 3, 3, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelement(4, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showPipetteSwatch);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.canvasThumbPos);
    } }, directives: [i2.NgIf, i2.NgStyle, i2.NgForOf], styles: [".mnj-pipette-selector{cursor:pointer;display:block;margin-bottom:12px;position:relative}.mnj-pipette-selector__swatch-container{-webkit-clip-path:circle(49% at 50% 50%);clip-path:circle(49% at 50% 50%);position:absolute;transition:transform .4s cubic-bezier(.25,.8,.25,1);z-index:1}.mnj-pipette-selector__swatch-container__grid{border-bottom:1px solid #000;border-right:1px solid #000;display:-ms-grid;display:grid}.mnj-pipette-selector__swatch-container--cell{border-left:1px solid #000;border-top:1px solid #000}.mnj-pipette-selector__swatch-container--cell--active{border:1px solid red;height:11px;width:11px;z-index:1}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjPipetteSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-pipette-selector',
                templateUrl: 'pipette-selector.html',
                styleUrls: ['pipette-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjPipetteSelector }],
                host: {
                    class: 'mnj-pipette-selector',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { canvas: [{
            type: ViewChild,
            args: ['imageCanvas']
        }], image: [{
            type: Input
        }], swatchCells: [{
            type: Input
        }], pipetteColorChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXR0ZS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi9zZWxlY3RvcnMvcGlwZXR0ZS9waXBldHRlLXNlbGVjdG9yLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9waXBldHRlL3BpcGV0dGUtc2VsZWN0b3IuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQVMsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsT0FBTyxFQUNMLDJCQUEyQixFQUMzQiwwQkFBMEIsRUFDMUIsWUFBWSxFQUVaLGdCQUFnQixFQUNoQiwyQkFBMkIsRUFDM0IsNkJBQTZCLEVBQzdCLGNBQWMsRUFDZCwyQkFBMkIsR0FFNUIsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0lDNUJ0Qix5QkFLTzs7Ozs7SUFGTCxrRUFBK0M7SUFDL0MscUdBQWtGOzs7SUFOeEYsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLHlFQUtDO0lBQ0gsaUJBQU07SUFDUixpQkFBTTs7O0lBVHdFLDhDQUF5QjtJQUMzQyxlQUEyQjtJQUEzQixnREFBMkI7SUFHakYsZUFBMEQ7SUFBMUQscURBQTBEOztBRHlDaEUs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QURSLEtBQUs7WUFhRixXQUFXO2tCQURkLEtBQUs7WUFhQyxrQkFBa0I7a0JBRHhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZUVsZW1lbnQsIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbG9yLCBmcm9tUmdiIH0gZnJvbSAnLi4vLi4vY29sb3IvY29sb3InO1xyXG5pbXBvcnQgeyBDb2xvckFkYXB0ZXIgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvci1hZGFwdGVyJztcclxuaW1wb3J0IHtcclxuICBhY3RpdmVDYXB0dXJpbmdFdmVudE9wdGlvbnMsXHJcbiAgYWN0aXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMsXHJcbiAgQmFzZVNlbGVjdG9yLFxyXG4gIENvbnRhaW5lcixcclxuICBnZXRDb250YWluZXJTaXplLFxyXG4gIGdldFBvaW50ZXJQb3NpdGlvbkZyb21FdmVudCxcclxuICBnZXRQb2ludGVyUG9zaXRpb25JbkNvbnRhaW5lcixcclxuICBpc1NhbWVQb3NpdGlvbixcclxuICBwYXNzaXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMsXHJcbiAgUG9pbnQsXHJcbn0gZnJvbSAnLi4vYmFzZS1zZWxlY3Rvcic7XHJcblxyXG50eXBlIFNlbGZQb3NpdGlvbiA9ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbW5qLXBpcGV0dGUtc2VsZWN0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAncGlwZXR0ZS1zZWxlY3Rvci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncGlwZXR0ZS1zZWxlY3Rvci5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEJhc2VTZWxlY3RvciwgdXNlRXhpc3Rpbmc6IE1ualBpcGV0dGVTZWxlY3RvciB9XSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ21uai1waXBldHRlLXNlbGVjdG9yJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW5qUGlwZXR0ZVNlbGVjdG9yIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdpbWFnZUNhbnZhcycpIGNhbnZhczogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGltYWdlKCk6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGltYWdlKHZhbHVlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9pbWFnZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5fcGFpbnRDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzd2F0Y2hDZWxscyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB2YWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcclxuICAgIHZhbHVlID0gdmFsdWUgJSAyID09PSAxID8gdmFsdWUgOiB2YWx1ZSAtIDE7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3N3YXRjaENlbGxzKSB7XHJcbiAgICAgIHRoaXMuX3N3YXRjaENlbGxzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX3N3YXRjaE1pZGRsZSA9IE1hdGguZmxvb3IoTWF0aC5wb3codmFsdWUsIDIpIC8gMik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgX3N3YXRjaENlbGxzO1xyXG4gIF9zd2F0Y2hNaWRkbGU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwaXBldHRlQ29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yPigpO1xyXG5cclxuICBnZXQgY2FudmFzVGh1bWJQb3MoKSB7XHJcbiAgICByZXR1cm4geyBsZWZ0OiBgJHt0aGlzLnRodW1iUG9zaXRpb24ueH0lYCwgdG9wOiBgJHt0aGlzLnRodW1iUG9zaXRpb24ueX0lYCB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN3YXRjaEdyaWRTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoJHt0aGlzLl9zd2F0Y2hDZWxsc30sIDEwcHgpYCxcclxuICAgICAgZ3JpZFRlbXBsYXRlUm93czogYHJlcGVhdCgke3RoaXMuX3N3YXRjaENlbGxzfSwgMTBweClgLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBzd2F0Y2hHcmlkUG9zKCkge1xyXG4gICAgY29uc3QgZGVsdGEgPSAodGhpcy5fc3dhdGNoQ2VsbHMgKiA0KSAvIDM7XHJcbiAgICBsZXQgdHJhbnNsYXRlO1xyXG4gICAgc3dpdGNoICh0aGlzLnN3YXRjaFBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6IHtcclxuICAgICAgICB0cmFuc2xhdGUgPSBgJHtkZWx0YX0lLCAke2RlbHRhfSVgO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6IHtcclxuICAgICAgICB0cmFuc2xhdGUgPSBgJHtkZWx0YX0lLCAkey0xMDAgLSBkZWx0YX0lYDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICd0b3AtbGVmdCc6IHtcclxuICAgICAgICB0cmFuc2xhdGUgPSBgJHstMTAwIC0gZGVsdGF9JSwgJHstMTAwIC0gZGVsdGF9JWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOiB7XHJcbiAgICAgICAgdHJhbnNsYXRlID0gYCR7LTEwMCAtIGRlbHRhfSUsICR7ZGVsdGF9JWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxlZnQ6IGAke3RoaXMudGh1bWJQb3NpdGlvbi54fSVgLFxyXG4gICAgICB0b3A6IGAke3RoaXMudGh1bWJQb3NpdGlvbi55fSVgLFxyXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGV9KWAsXHJcbiAgICAgIHdpZHRoOiBgJHt0aGlzLl9zd2F0Y2hDZWxscyAqIDEwICsgMX1weGAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0UGl4ZWxCYWNrZ3JvdW5kKHBpeGVsKSB7XHJcbiAgICByZXR1cm4gYHJnYmEoJHtwaXhlbC5yZWR9LCAke3BpeGVsLmdyZWVufSwgJHtwaXhlbC5ibHVlfSwgJHtwaXhlbC5hbHBoYX0pYDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93UGlwZXR0ZVN3YXRjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93UGlwZXR0ZVN3YXRjaCAmJiAhIXRoaXMuaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBzZXQgc2hvd1BpcGV0dGVTd2F0Y2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl9zaG93UGlwZXR0ZVN3YXRjaCAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fc2hvd1BpcGV0dGVTd2F0Y2ggPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1BpcGV0dGVTd2F0Y2ggPSBmYWxzZTtcclxuXHJcbiAgY2FjaGVkUG9pbnRlclBvczogUG9pbnQ7XHJcbiAgY2FjaGVkQ29udGFpbmVyU2l6ZTogQ29udGFpbmVyO1xyXG4gIHRodW1iUG9zaXRpb246IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgc3dhdGNoUG9zaXRpb246IFNlbGZQb3NpdGlvbiA9ICdib3R0b20tcmlnaHQnO1xyXG5cclxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGV2ZW50IGxpc3RlbmVycyB0aGF0IHdlJ3ZlIGJvdW5kIHRvIHRoZSBgZG9jdW1lbnRgLiAqL1xyXG4gIHByaXZhdGUgX2dsb2JhbExpc3RlbmVycyA9IG5ldyBNYXA8XHJcbiAgICBzdHJpbmcsXHJcbiAgICB7XHJcbiAgICAgIGhhbmRsZXI6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcbiAgICAgIG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgPigpO1xyXG5cclxuICBwaXBldHRlU3dhdGNoUGFsZXR0ZSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjb2xvckFkYXB0ZXI6IENvbG9yQWRhcHRlcixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgcHJvdGVjdGVkIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuc3dhdGNoQ2VsbHMgPSA5O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5hdHRhY2hMaXN0ZW5lcnMoKTtcclxuICAgIGlmICh0aGlzLl9pbWFnZSkge1xyXG4gICAgICAvLyBQYWludCBjYW52YXMgaWYgdGhlcmUgd2FzIGEgcGVuZGluZyBpbWFnZSB0aGF0IGNvdWxkIG5vdCBiZSByZW5kZXJlZCB1bnRpbCB0aGlzIG1vbW1lbnRcclxuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3BhaW50Q2FudmFzKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGVhckdsb2JhbExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgLy8gTElTVEVORVJTXHJcbiAgYXR0YWNoTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyRWxlbWVudCA9IGNvZXJjZUVsZW1lbnQodGhpcy5fZWxlbWVudFJlZik7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX3BvaW50ZXJEb3duLCBhY3RpdmVFdmVudExpc3RlbmVyT3B0aW9ucyk7XHJcbiAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX3BvaW50ZXJEb3duLCBwYXNzaXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEdsb2JhbExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVycy5mb3JFYWNoKChjb25maWcsIG5hbWUpID0+IHtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNvbmZpZy5oYW5kbGVyLCBjb25maWcub3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xlYXJzIG91dCB0aGUgZ2xvYmFsIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBgZG9jdW1lbnRgLiAqL1xyXG4gIHByaXZhdGUgX2NsZWFyR2xvYmFsTGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zaG93UGlwZXR0ZVN3YXRjaCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX2dsb2JhbExpc3RlbmVycy5mb3JFYWNoKChjb25maWcsIG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5fZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBjb25maWcuaGFuZGxlciwgY29uZmlnLm9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXJzLmNsZWFyKCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqIEhhbmRsZXIgZm9yIHRoZSBgbW91c2Vkb3duYC9gdG91Y2hzdGFydGAgZXZlbnRzLiAqL1xyXG4gIHByaXZhdGUgX3BvaW50ZXJEb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgcG9pbnRlciA9IGdldFBvaW50ZXJQb3NpdGlvbkZyb21FdmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGlzU2FtZVBvc2l0aW9uKHRoaXMuY2FjaGVkUG9pbnRlclBvcywgcG9pbnRlcikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FjaGVkQ29udGFpbmVyU2l6ZSA9IGdldENvbnRhaW5lclNpemUodGhpcy5fZWxlbWVudFJlZik7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUNvbG9yRnJvbVBvc2l0aW9uKHRoaXMuY2FjaGVkQ29udGFpbmVyU2l6ZSwgcG9pbnRlcik7XHJcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSBldmVudC50eXBlLnN0YXJ0c1dpdGgoJ3RvdWNoJyk7XHJcbiAgICBjb25zdCBtb3ZlRXZlbnQgPSBpc1RvdWNoRXZlbnQgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xyXG4gICAgY29uc3QgdXBFdmVudCA9IGlzVG91Y2hFdmVudCA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCc7XHJcbiAgICB0aGlzLl9jbGVhckdsb2JhbExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXJzXHJcbiAgICAgIC5zZXQobW92ZUV2ZW50LCB7XHJcbiAgICAgICAgaGFuZGxlcjogdGhpcy5wb2ludGVyTW92ZSxcclxuICAgICAgICBvcHRpb25zOiBhY3RpdmVDYXB0dXJpbmdFdmVudE9wdGlvbnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZXQodXBFdmVudCwge1xyXG4gICAgICAgIGhhbmRsZXI6IHRoaXMuX2NsZWFyR2xvYmFsTGlzdGVuZXJzLFxyXG4gICAgICAgIG9wdGlvbnM6IHRydWUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2hvd1BpcGV0dGVTd2F0Y2ggPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuYWRkR2xvYmFsTGlzdGVuZXJzKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBwb2ludGVyTW92ZSA9IChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHBvaW50ZXIgPSBnZXRQb2ludGVyUG9zaXRpb25Gcm9tRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIGlmIChpc1NhbWVQb3NpdGlvbih0aGlzLmNhY2hlZFBvaW50ZXJQb3MsIHBvaW50ZXIpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZUNvbG9yRnJvbVBvc2l0aW9uKHRoaXMuY2FjaGVkQ29udGFpbmVyU2l6ZSwgcG9pbnRlcik7XHJcbiAgfTtcclxuXHJcbiAgX3BhaW50Q2FudmFzKCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2UgJiYgdGhpcy5jYW52YXMpIHtcclxuICAgICAgY29uc3QgY2FudmFzRWxlbWVudCA9IGNvZXJjZUVsZW1lbnQodGhpcy5jYW52YXMpO1xyXG4gICAgICBjb25zdCB7IHdpZHRoOiBpbWdXaWR0aCwgaGVpZ2h0OiBpbWdIZWlnaHQgfSA9IHRoaXMuaW1hZ2U7XHJcbiAgICAgIGNvbnN0IHsgd2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodCB9ID0gY29lcmNlRWxlbWVudChcclxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmXHJcbiAgICAgICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC5oZWlnaHQsIGNhbnZhc0VsZW1lbnQud2lkdGgpO1xyXG5cclxuICAgICAgY29uc3QgY2FudmFzV2lkdGggPSBNYXRoLmZsb29yKGNvbnRhaW5lcldpZHRoKTtcclxuICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gTWF0aC5mbG9vcihjb250YWluZXJIZWlnaHQpO1xyXG5cclxuICAgICAgY29uc3QgeyBvZmZzZXRYLCBvZmZzZXRZLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9maXRJbWFnZShjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcclxuXHJcbiAgICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjYW52YXNXaWR0aDtcclxuICAgICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XHJcblxyXG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIG9mZnNldFgsIG9mZnNldFksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVDb2xvckZyb21Qb3NpdGlvbihjb250YWluZXI6IENvbnRhaW5lciwgcG9pbnRlclBvczogUG9pbnQpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGdldFBvaW50ZXJQb3NpdGlvbkluQ29udGFpbmVyKHBvaW50ZXJQb3MsIGNvbnRhaW5lcik7XHJcblxyXG4gICAgICBjb25zdCBwb2ludGVyWCA9IHggKiAxMDA7XHJcbiAgICAgIGNvbnN0IHBvaW50ZXJZID0geSAqIDEwMDtcclxuXHJcbiAgICAgIHRoaXMudGh1bWJQb3NpdGlvbiA9IHsgeDogcG9pbnRlclgsIHk6IHBvaW50ZXJZIH07XHJcbiAgICAgIHRoaXMuc3dhdGNoUG9zaXRpb24gPSB0aGlzLl9nZXRTd2F0Y2hQb3NpdGlvbihwb2ludGVyUG9zLCBjb250YWluZXIpO1xyXG5cclxuICAgICAgY29uc3QgbGVmdFBvcyA9IHBvaW50ZXJQb3MueCAtIGNvbnRhaW5lci5sZWZ0O1xyXG4gICAgICBjb25zdCB0b3BQb3MgPSBwb2ludGVyUG9zLnkgLSBjb250YWluZXIudG9wO1xyXG5cclxuICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjb25zdCBuZWdhdGl2ZU9mZnNldCA9IHRoaXMuX3N3YXRjaENlbGxzIC8gMiAtIDE7XHJcbiAgICAgIGNvbnN0IHBpeGVscyA9IGN0eC5nZXRJbWFnZURhdGEoXHJcbiAgICAgICAgbGVmdFBvcyAtIG5lZ2F0aXZlT2Zmc2V0LFxyXG4gICAgICAgIHRvcFBvcyAtIG5lZ2F0aXZlT2Zmc2V0LFxyXG4gICAgICAgIHRoaXMuX3N3YXRjaENlbGxzLFxyXG4gICAgICAgIHRoaXMuX3N3YXRjaENlbGxzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnBpcGV0dGVTd2F0Y2hQYWxldHRlID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGl4ZWxzLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgICB0aGlzLnBpcGV0dGVTd2F0Y2hQYWxldHRlLnB1c2goe1xyXG4gICAgICAgICAgcmVkOiBwaXhlbHMuZGF0YVtpXSxcclxuICAgICAgICAgIGdyZWVuOiBwaXhlbHMuZGF0YVtpICsgMV0sXHJcbiAgICAgICAgICBibHVlOiBwaXhlbHMuZGF0YVtpICsgMl0sXHJcbiAgICAgICAgICBhbHBoYTogcGl4ZWxzLmRhdGFbaSArIDNdIC8gMjU1LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0gPSB0aGlzLnBpcGV0dGVTd2F0Y2hQYWxldHRlW3RoaXMuX3N3YXRjaE1pZGRsZV07XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gZnJvbVJnYih7IHJlZCwgZ3JlZW4sIGJsdWUgfSwgYWxwaGEpO1xyXG4gICAgICB0aGlzLnBpcGV0dGVDb2xvckNoYW5nZS5lbWl0KGNvbG9yKTtcclxuXHJcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2VudGVycyBhbmQgcmVzaXplIGdpdmVuIGNoaWxkcmVuIGNvbnRhaW5lciBpbnRvIHRoZSBwYXJlbnQgY29udGFpbmVyICovXHJcbiAgcHJpdmF0ZSBfZml0SW1hZ2UocGFyZW50V2lkdGgsIHBhcmVudEhlaWdodCwgY2hpbGRXaWR0aCwgY2hpbGRIZWlnaHQsIHNjYWxlID0gMSwgb2Zmc2V0WCA9IDAuNSwgb2Zmc2V0WSA9IDAuNSkge1xyXG4gICAgY29uc3QgY2hpbGRSYXRpbyA9IGNoaWxkV2lkdGggLyBjaGlsZEhlaWdodDtcclxuICAgIGNvbnN0IHBhcmVudFJhdGlvID0gcGFyZW50V2lkdGggLyBwYXJlbnRIZWlnaHQ7XHJcbiAgICBsZXQgd2lkdGggPSBwYXJlbnRXaWR0aCAqIHNjYWxlO1xyXG4gICAgbGV0IGhlaWdodCA9IHBhcmVudEhlaWdodCAqIHNjYWxlO1xyXG5cclxuICAgIGlmIChjaGlsZFJhdGlvID4gcGFyZW50UmF0aW8pIHtcclxuICAgICAgaGVpZ2h0ID0gd2lkdGggLyBjaGlsZFJhdGlvO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2lkdGggPSBoZWlnaHQgKiBjaGlsZFJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHQsXHJcbiAgICAgIG9mZnNldFg6IChwYXJlbnRXaWR0aCAtIHdpZHRoKSAqIG9mZnNldFgsXHJcbiAgICAgIG9mZnNldFk6IChwYXJlbnRIZWlnaHQgLSBoZWlnaHQpICogb2Zmc2V0WSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRTd2F0Y2hQb3NpdGlvbihcclxuICAgIHBvaW50ZXJQb3M6IFBvaW50LFxyXG4gICAgY29udGFpbmVyOiBDb250YWluZXJcclxuICApOiAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcge1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludGVyUG9zO1xyXG4gICAgY29uc3QgeyByaWdodCwgYm90dG9tIH0gPSBjb250YWluZXI7XHJcbiAgICBjb25zdCBzd2F0Y2hSaWdodCA9IHggKyAxMCAqIHRoaXMuX3N3YXRjaENlbGxzICsgMTsgLy8gMTAgcGl4ZWxzIHBlciBjZWxsIHBsdXMgMXB4IGJvcmRlclxyXG4gICAgY29uc3Qgc3dhdGNoQm90dG9tID0geSArIDEwICogdGhpcy5fc3dhdGNoQ2VsbHMgKyAxOyAvLyAxMCBwaXhlbHMgcGVyIGNlbGxzIHBsdXMgMXB4IGJvcmRlclxyXG5cclxuICAgIGNvbnN0IHRvcE9yQm90dG9tID0gc3dhdGNoQm90dG9tID4gYm90dG9tO1xyXG4gICAgY29uc3QgbGVmdE9yUmlnaHQgPSBzd2F0Y2hSaWdodCA+IHJpZ2h0O1xyXG5cclxuICAgIGlmICghdG9wT3JCb3R0b20gJiYgIWxlZnRPclJpZ2h0KSByZXR1cm4gJ2JvdHRvbS1yaWdodCc7XHJcbiAgICBpZiAodG9wT3JCb3R0b20gJiYgbGVmdE9yUmlnaHQpIHJldHVybiAndG9wLWxlZnQnO1xyXG4gICAgaWYgKHRvcE9yQm90dG9tICYmICFsZWZ0T3JSaWdodCkgcmV0dXJuICd0b3AtcmlnaHQnO1xyXG4gICAgaWYgKCF0b3BPckJvdHRvbSAmJiBsZWZ0T3JSaWdodCkgcmV0dXJuICdib3R0b20tbGVmdCc7XHJcbiAgfVxyXG59XHJcbiIsIjxjYW52YXMgI2ltYWdlQ2FudmFzPjwvY2FudmFzPlxyXG48ZGl2ICpuZ0lmPVwic2hvd1BpcGV0dGVTd2F0Y2hcIiBjbGFzcz1cIm1uai1waXBldHRlLXNlbGVjdG9yX19zd2F0Y2gtY29udGFpbmVyXCIgW25nU3R5bGVdPVwic3dhdGNoR3JpZFBvc1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJtbmotcGlwZXR0ZS1zZWxlY3Rvcl9fc3dhdGNoLWNvbnRhaW5lcl9fZ3JpZFwiIFtuZ1N0eWxlXT1cInN3YXRjaEdyaWRTdHlsZVwiPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cIm1uai1waXBldHRlLXNlbGVjdG9yX19zd2F0Y2gtY29udGFpbmVyLS1jZWxsXCJcclxuICAgICAgKm5nRm9yPVwibGV0IHN3YXRjaCBvZiBwaXBldHRlU3dhdGNoUGFsZXR0ZTsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImdldFBpeGVsQmFja2dyb3VuZChzd2F0Y2gpXCJcclxuICAgICAgW2NsYXNzLm1uai1waXBldHRlLXNlbGVjdG9yX19zd2F0Y2gtY29udGFpbmVyLS1jZWxsLS1hY3RpdmVdPVwiaSA9PT0gX3N3YXRjaE1pZGRsZVwiXHJcbiAgICA+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibW5qLWNvbG9ycGlja2VyLXNlbGVjdG9yX190aHVtYlwiIFtuZ1N0eWxlXT1cImNhbnZhc1RodW1iUG9zXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9fdGh1bWJfX2lubmVyXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=