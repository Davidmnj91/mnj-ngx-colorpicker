import { coerceElement } from '@angular/cdk/coercion';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Directive, Inject, Input } from '@angular/core';
import { clamp } from '../color/color';
import * as i0 from "@angular/core";
import * as i1 from "../color/color-adapter";
import * as i2 from "@angular/cdk/bidi";
// UTILS
export function getPointerPositionFromEvent(event) {
    const { clientX: x, clientY: y } = event instanceof MouseEvent ? event : event.touches[0];
    return { x, y };
}
export function isSamePosition(point1, point2) {
    if (!point1 || !point2) {
        return false;
    }
    return point1.x === point2.x && point1.y === point2.y;
}
export function getContainerSize(container) {
    const { top, left, right, bottom, width, height } = coerceElement(container).getBoundingClientRect();
    return { top, left, right, bottom, width, height };
}
export function getPointerPositionInContainer(pointer, container) {
    const pointerXToContainerX = (pointer.x - container.left) / container.width;
    const pointerYToContainerY = (pointer.y - container.top) / container.height;
    return { x: clamp(0, 1, pointerXToContainerX), y: clamp(0, 1, pointerYToContainerY) };
}
/** Options that can be used to bind a passive event listener. */
export const passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });
/** Options that can be used to bind an active event listener. */
export const activeEventListenerOptions = normalizePassiveListenerOptions({ passive: false });
/** Event options that can be used to bind an active, capturing event. */
export const activeCapturingEventOptions = normalizePassiveListenerOptions({
    passive: false,
    capture: true,
});
export class BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _dir) {
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this.thumbPosition = { x: 0, y: 0 };
        /** Keeps track of the event listeners that we've bound to the `document`. */
        this._globalListeners = new Map();
        /** Clears out the global event listeners from the `document`. */
        this._clearGlobalListeners = () => {
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
            this.cachedPointerPos = pointer;
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
            this.addGlobalListeners();
        };
        this.pointerMove = (event) => {
            const pointer = getPointerPositionFromEvent(event);
            if (isSamePosition(this.cachedPointerPos, pointer)) {
                return;
            }
            this.cachedPointerPos = pointer;
            this.calculateColorFromPosition(this.cachedContainerSize, pointer);
        };
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this.colorAdapter.sameColor(this._color, value)) {
            return;
        }
        this._color = value;
        this._setColor(value);
    }
    ngAfterViewInit() {
        this.attachListeners();
        this.cachedContainerSize = getContainerSize(this._elementRef);
        // Force setter after view is initialized
        this._setColor(this.color);
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
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
}
BaseSelector.ɵfac = function BaseSelector_Factory(t) { return new (t || BaseSelector)(i0.ɵɵdirectiveInject(i1.ColorAdapter), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Directionality)); };
BaseSelector.ɵdir = i0.ɵɵdefineDirective({ type: BaseSelector, inputs: { color: "color" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseSelector, [{
        type: Directive
    }], function () { return [{ type: i1.ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i2.Directionality }]; }, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi9zZWxlY3RvcnMvYmFzZS1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBaUIsU0FBUyxFQUFjLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxLQUFLLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWlCOUMsUUFBUTtBQUNSLE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxLQUE4QjtJQUN4RSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQWEsS0FBSyxDQUFDLENBQUMsQ0FBYyxLQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BILE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBYSxFQUFFLE1BQWE7SUFDekQsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUN0QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxNQUFNLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsU0FBbUM7SUFDbEUsTUFB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QUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFpREQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7SUFDaEQsQ0FBQzs7d0VBaEhtQixZQUFZLDhEQTZCdEIsUUFBUTtpREE3QkUsWUFBWTtrREFBWixZQUFZO2NBRGpDLFNBQVM7aUVBOEJpQyxRQUFRO3NCQUE5QyxNQUFNO3VCQUFDLFFBQVE7bUdBM0JkLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBjb2VyY2VFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjbGFtcCwgQ29sb3IgfSBmcm9tICcuLi9jb2xvci9jb2xvcic7XHJcbmltcG9ydCB7IENvbG9yQWRhcHRlciB9IGZyb20gJy4uL2NvbG9yL2NvbG9yLWFkYXB0ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXIge1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICByaWdodDogbnVtYmVyO1xyXG4gIGJvdHRvbTogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIFVUSUxTXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb25Gcm9tRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogUG9pbnQge1xyXG4gIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ID8gPE1vdXNlRXZlbnQ+ZXZlbnQgOiAoPFRvdWNoRXZlbnQ+ZXZlbnQpLnRvdWNoZXNbMF07XHJcbiAgcmV0dXJuIHsgeCwgeSB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lUG9zaXRpb24ocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCkge1xyXG4gIGlmICghcG9pbnQxIHx8ICFwb2ludDIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHBvaW50MS54ID09PSBwb2ludDIueCAmJiBwb2ludDEueSA9PT0gcG9pbnQyLnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250YWluZXJTaXplKGNvbnRhaW5lcjogRWxlbWVudFJlZiB8IEhUTUxFbGVtZW50KTogQ29udGFpbmVyIHtcclxuICBjb25zdCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gY29lcmNlRWxlbWVudChjb250YWluZXIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIHJldHVybiB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRlclBvc2l0aW9uSW5Db250YWluZXIocG9pbnRlcjogUG9pbnQsIGNvbnRhaW5lcjogQ29udGFpbmVyKTogUG9pbnQge1xyXG4gIGNvbnN0IHBvaW50ZXJYVG9Db250YWluZXJYID0gKHBvaW50ZXIueCAtIGNvbnRhaW5lci5sZWZ0KSAvIGNvbnRhaW5lci53aWR0aDtcclxuICBjb25zdCBwb2ludGVyWVRvQ29udGFpbmVyWSA9IChwb2ludGVyLnkgLSBjb250YWluZXIudG9wKSAvIGNvbnRhaW5lci5oZWlnaHQ7XHJcbiAgcmV0dXJuIHsgeDogY2xhbXAoMCwgMSwgcG9pbnRlclhUb0NvbnRhaW5lclgpLCB5OiBjbGFtcCgwLCAxLCBwb2ludGVyWVRvQ29udGFpbmVyWSkgfTtcclxufVxyXG5cclxuLyoqIE9wdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBiaW5kIGEgcGFzc2l2ZSBldmVudCBsaXN0ZW5lci4gKi9cclxuZXhwb3J0IGNvbnN0IHBhc3NpdmVFdmVudExpc3RlbmVyT3B0aW9ucyA9IG5vcm1hbGl6ZVBhc3NpdmVMaXN0ZW5lck9wdGlvbnMoeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuLyoqIE9wdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBiaW5kIGFuIGFjdGl2ZSBldmVudCBsaXN0ZW5lci4gKi9cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZUV2ZW50TGlzdGVuZXJPcHRpb25zID0gbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyh7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuLyoqIEV2ZW50IG9wdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBiaW5kIGFuIGFjdGl2ZSwgY2FwdHVyaW5nIGV2ZW50LiAqL1xyXG5leHBvcnQgY29uc3QgYWN0aXZlQ2FwdHVyaW5nRXZlbnRPcHRpb25zID0gbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyh7XHJcbiAgcGFzc2l2ZTogZmFsc2UsXHJcbiAgY2FwdHVyZTogdHJ1ZSxcclxufSk7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTZWxlY3RvciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBnZXQgY29sb3IoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuICBzZXQgY29sb3IodmFsdWU6IENvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5jb2xvckFkYXB0ZXIuc2FtZUNvbG9yKHRoaXMuX2NvbG9yLCB2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcclxuICAgIHRoaXMuX3NldENvbG9yKHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIF9jb2xvcjogQ29sb3I7XHJcblxyXG4gIGNhY2hlZFBvaW50ZXJQb3M6IFBvaW50O1xyXG4gIGNhY2hlZENvbnRhaW5lclNpemU6IENvbnRhaW5lcjtcclxuICB0aHVtYlBvc2l0aW9uOiBQb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGV2ZW50IGxpc3RlbmVycyB0aGF0IHdlJ3ZlIGJvdW5kIHRvIHRoZSBgZG9jdW1lbnRgLiAqL1xyXG4gIHByaXZhdGUgX2dsb2JhbExpc3RlbmVycyA9IG5ldyBNYXA8XHJcbiAgICBzdHJpbmcsXHJcbiAgICB7XHJcbiAgICAgIGhhbmRsZXI6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcbiAgICAgIG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjb2xvckFkYXB0ZXI6IENvbG9yQWRhcHRlcixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgcHJvdGVjdGVkIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBfZGlyPzogRGlyZWN0aW9uYWxpdHlcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLmNhY2hlZENvbnRhaW5lclNpemUgPSBnZXRDb250YWluZXJTaXplKHRoaXMuX2VsZW1lbnRSZWYpO1xyXG4gICAgLy8gRm9yY2Ugc2V0dGVyIGFmdGVyIHZpZXcgaXMgaW5pdGlhbGl6ZWRcclxuICAgIHRoaXMuX3NldENvbG9yKHRoaXMuY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGVhckdsb2JhbExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgLy8gTElTVEVORVJTXHJcbiAgYXR0YWNoTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyRWxlbWVudCA9IGNvZXJjZUVsZW1lbnQodGhpcy5fZWxlbWVudFJlZik7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX3BvaW50ZXJEb3duLCBhY3RpdmVFdmVudExpc3RlbmVyT3B0aW9ucyk7XHJcbiAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX3BvaW50ZXJEb3duLCBwYXNzaXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEdsb2JhbExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVycy5mb3JFYWNoKChjb25maWcsIG5hbWUpID0+IHtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNvbmZpZy5oYW5kbGVyLCBjb25maWcub3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xlYXJzIG91dCB0aGUgZ2xvYmFsIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBgZG9jdW1lbnRgLiAqL1xyXG4gIHByaXZhdGUgX2NsZWFyR2xvYmFsTGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXJzLmZvckVhY2goKGNvbmZpZywgbmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGNvbmZpZy5oYW5kbGVyLCBjb25maWcub3B0aW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICB9O1xyXG5cclxuICAvKiogSGFuZGxlciBmb3IgdGhlIGBtb3VzZWRvd25gL2B0b3VjaHN0YXJ0YCBldmVudHMuICovXHJcbiAgcHJpdmF0ZSBfcG9pbnRlckRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBwb2ludGVyID0gZ2V0UG9pbnRlclBvc2l0aW9uRnJvbUV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICBpZiAoaXNTYW1lUG9zaXRpb24odGhpcy5jYWNoZWRQb2ludGVyUG9zLCBwb2ludGVyKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jYWNoZWRDb250YWluZXJTaXplID0gZ2V0Q29udGFpbmVyU2l6ZSh0aGlzLl9lbGVtZW50UmVmKTtcclxuICAgIHRoaXMuY2FjaGVkUG9pbnRlclBvcyA9IHBvaW50ZXI7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUNvbG9yRnJvbVBvc2l0aW9uKHRoaXMuY2FjaGVkQ29udGFpbmVyU2l6ZSwgcG9pbnRlcik7XHJcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSBldmVudC50eXBlLnN0YXJ0c1dpdGgoJ3RvdWNoJyk7XHJcbiAgICBjb25zdCBtb3ZlRXZlbnQgPSBpc1RvdWNoRXZlbnQgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xyXG4gICAgY29uc3QgdXBFdmVudCA9IGlzVG91Y2hFdmVudCA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCc7XHJcbiAgICB0aGlzLl9jbGVhckdsb2JhbExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXJzXHJcbiAgICAgIC5zZXQobW92ZUV2ZW50LCB7XHJcbiAgICAgICAgaGFuZGxlcjogdGhpcy5wb2ludGVyTW92ZSxcclxuICAgICAgICBvcHRpb25zOiBhY3RpdmVDYXB0dXJpbmdFdmVudE9wdGlvbnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZXQodXBFdmVudCwge1xyXG4gICAgICAgIGhhbmRsZXI6IHRoaXMuX2NsZWFyR2xvYmFsTGlzdGVuZXJzLFxyXG4gICAgICAgIG9wdGlvbnM6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHBvaW50ZXJNb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgcG9pbnRlciA9IGdldFBvaW50ZXJQb3NpdGlvbkZyb21FdmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGlzU2FtZVBvc2l0aW9uKHRoaXMuY2FjaGVkUG9pbnRlclBvcywgcG9pbnRlcikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FjaGVkUG9pbnRlclBvcyA9IHBvaW50ZXI7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUNvbG9yRnJvbVBvc2l0aW9uKHRoaXMuY2FjaGVkQ29udGFpbmVyU2l6ZSwgcG9pbnRlcik7XHJcbiAgfTtcclxuXHJcbiAgX2lzUnRsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RpciAmJiB0aGlzLl9kaXIudmFsdWUgPT09ICdydGwnO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgY2FsY3VsYXRlQ29sb3JGcm9tUG9zaXRpb24oY29udGFpbmVyOiBDb250YWluZXIsIHBvaW50ZXJQb3M6IFBvaW50KTtcclxuXHJcbiAgYWJzdHJhY3QgX3NldENvbG9yKGNvbG9yOiBDb2xvcik7XHJcbn1cclxuIl19