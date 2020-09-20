import { DOWN_ARROW, END, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output, ViewEncapsulation, } from '@angular/core';
import { clamp, fromHsl, fromHsv } from '../../color/color';
import { hslToHsv } from '../../color/color-conversions';
import { BaseSelector, getPointerPositionInContainer } from '../base-selector';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
export class MnjSaturationSelector extends BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.satChange = new EventEmitter();
    }
    get satThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: `${this.thumbPosition.y}%` };
    }
    get satBackgroundColor() {
        return { 'background-color': `hsl(${this.color.hue}, 100%, 50%)` };
    }
    get satThumbBackgroundColor() {
        return { 'background-color': this.colorAdapter.format(this.color, 'RGB') };
    }
    _setColor(color) {
        if (this._elementRef) {
            const { saturation, value } = hslToHsv(color);
            let xPosition = clamp(0, 100, saturation);
            const yPosition = clamp(0, 100, 100 - value);
            if (this._isRtl()) {
                xPosition = 100 - xPosition;
            }
            this.thumbPosition = { x: xPosition, y: yPosition };
        }
        this._changeDetectorRef.markForCheck();
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x, y } = getPointerPositionInContainer(pointerPos, container);
            let pointerX = x * 100;
            const pointerY = y * 100;
            if (this._isRtl()) {
                pointerX = 100 - pointerX;
            }
            this.thumbPosition = { x: pointerX, y: pointerY };
            let saturation = Math.round(pointerX) || 0;
            let value = Math.round(100 - pointerY) || 0;
            saturation = clamp(0, 100, saturation);
            value = clamp(0, 100, value);
            const { hue } = this.color;
            const color = fromHsv({ hue, saturation, value });
            this.satChange.emit(color);
        });
    }
    _handleKeydownEvent(event) {
        const { hue, saturation, lightness } = this.color;
        const isRtl = this._isRtl();
        let newSaturation = saturation;
        let newLightness = lightness;
        switch (event.keyCode) {
            case UP_ARROW:
                newLightness++;
                break;
            case LEFT_ARROW:
                newSaturation += isRtl ? 1 : -1;
                break;
            case DOWN_ARROW:
                newLightness--;
                break;
            case RIGHT_ARROW:
                newSaturation += isRtl ? -1 : +1;
                break;
            case PAGE_UP:
                newLightness = newLightness - 10;
                break;
            case PAGE_DOWN:
                newLightness = newLightness + 10;
                break;
            case HOME:
                newSaturation = 0;
                newLightness = 0;
                break;
            case END:
                newSaturation = 100;
                newLightness = 50;
                break;
            default:
                return;
        }
        newSaturation = clamp(0, 100, newSaturation);
        newLightness = clamp(0, 100, newLightness);
        const color = fromHsl({ hue, saturation: newSaturation, lightness: newLightness });
        this.satChange.emit(color);
    }
}
MnjSaturationSelector.ɵfac = function MnjSaturationSelector_Factory(t) { return new (t || MnjSaturationSelector)(i0.ɵɵdirectiveInject(i1.ColorAdapter), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality)); };
MnjSaturationSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjSaturationSelector, selectors: [["mnj-saturation-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-saturation-selector"], hostVars: 3, hostBindings: function MnjSaturationSelector_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function MnjSaturationSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", 0);
        i0.ɵɵclassProp("mnj-saturation-selector--rtl", ctx._isRtl());
    } }, outputs: { satChange: "satChange" }, features: [i0.ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjSaturationSelector }]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "mnj-saturation-selector__mask"], [1, "mnj-saturation-selector__mask--fill", 3, "ngStyle"], [1, "mnj-saturation-selector__mask--saturation"], [1, "mnj-saturation-selector__mask--value"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner", 3, "ngStyle"]], template: function MnjSaturationSelector_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.satBackgroundColor);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngStyle", ctx.satThumbPos);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.satThumbBackgroundColor);
    } }, directives: [i3.NgStyle], styles: [".mnj-saturation-selector{min-height:80px}.mnj-saturation-selector__mask{border-radius:2px;height:100%;overflow:hidden;position:relative;width:100%}.mnj-saturation-selector__mask--fill,.mnj-saturation-selector__mask--saturation,.mnj-saturation-selector__mask--value{height:100%;position:absolute;width:100%}.mnj-saturation-selector__mask--saturation{background-image:linear-gradient(90deg,#fff,transparent)}.mnj-saturation-selector__mask--value{background-image:linear-gradient(0deg,#000,transparent)}.mnj-saturation-selector__mask--rtl .mnj-saturation-selector__mask--saturation{background-image:linear-gradient(270deg,#fff,transparent)}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjSaturationSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-saturation-selector',
                templateUrl: 'sat-selector.html',
                styleUrls: ['sat-selector.scss', '../base-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjSaturationSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-saturation-selector',
                    '[class.mnj-saturation-selector--rtl]': '_isRtl()',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality }]; }, { satChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F0LXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9zYXQvc2F0LXNlbGVjdG9yLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9zYXQvc2F0LXNlbGVjdG9yLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNySCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFFTixNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFhLDZCQUE2QixFQUFTLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBZ0JqRyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsWUFBWTtJQWdCckQsWUFDWSxZQUEwQixFQUNSLFNBQW1CLEVBQ3JDLE9BQWUsRUFDZixXQUF1QixFQUN6QixrQkFBcUMsRUFDbkMsSUFBb0I7UUFFOUIsS0FBSyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQVBqRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNSLGNBQVMsR0FBVCxT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b0JBQ3pELHNDQUFzQyxFQUFFLFVBQVU7b0JBQ2xELGlCQUFpQixFQUFFLEdBQUc7b0JBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7aUJBQzNDO2FBQ0Y7aUVBbUIwQyxRQUFRO3NCQUE5QyxNQUFNO3VCQUFDLFFBQVE7bUlBaEJYLFNBQVM7a0JBRGYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTkQsIEhPTUUsIExFRlRfQVJST1csIFBBR0VfRE9XTiwgUEFHRV9VUCwgUklHSFRfQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgTmdab25lLFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY2xhbXAsIENvbG9yLCBmcm9tSHNsLCBmcm9tSHN2IH0gZnJvbSAnLi4vLi4vY29sb3IvY29sb3InO1xyXG5pbXBvcnQgeyBDb2xvckFkYXB0ZXIgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvci1hZGFwdGVyJztcclxuaW1wb3J0IHsgaHNsVG9Ic3YgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvci1jb252ZXJzaW9ucyc7XHJcbmltcG9ydCB7IEJhc2VTZWxlY3RvciwgQ29udGFpbmVyLCBnZXRQb2ludGVyUG9zaXRpb25JbkNvbnRhaW5lciwgUG9pbnQgfSBmcm9tICcuLi9iYXNlLXNlbGVjdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbW5qLXNhdHVyYXRpb24tc2VsZWN0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2F0LXNlbGVjdG9yLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzYXQtc2VsZWN0b3Iuc2NzcycsICcuLi9iYXNlLXNlbGVjdG9yLnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQmFzZVNlbGVjdG9yLCB1c2VFeGlzdGluZzogTW5qU2F0dXJhdGlvblNlbGVjdG9yIH1dLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbW5qLWNvbG9ycGlja2VyLXNlbGVjdG9yIG1uai1zYXR1cmF0aW9uLXNlbGVjdG9yJyxcclxuICAgICdbY2xhc3MubW5qLXNhdHVyYXRpb24tc2VsZWN0b3ItLXJ0bF0nOiAnX2lzUnRsKCknLFxyXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICcwJyxcclxuICAgICcoa2V5ZG93biknOiAnX2hhbmRsZUtleWRvd25FdmVudCgkZXZlbnQpJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW5qU2F0dXJhdGlvblNlbGVjdG9yIGV4dGVuZHMgQmFzZVNlbGVjdG9yIHtcclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2F0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oKTtcclxuXHJcbiAgZ2V0IHNhdFRodW1iUG9zKCkge1xyXG4gICAgcmV0dXJuIHsgbGVmdDogYCR7dGhpcy50aHVtYlBvc2l0aW9uLnh9JWAsIHRvcDogYCR7dGhpcy50aHVtYlBvc2l0aW9uLnl9JWAgfTtcclxuICB9XHJcblxyXG4gIGdldCBzYXRCYWNrZ3JvdW5kQ29sb3IoKSB7XHJcbiAgICByZXR1cm4geyAnYmFja2dyb3VuZC1jb2xvcic6IGBoc2woJHt0aGlzLmNvbG9yLmh1ZX0sIDEwMCUsIDUwJSlgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgc2F0VGh1bWJCYWNrZ3JvdW5kQ29sb3IoKSB7XHJcbiAgICByZXR1cm4geyAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuY29sb3JBZGFwdGVyLmZvcm1hdCh0aGlzLmNvbG9yLCAnUkdCJykgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNvbG9yQWRhcHRlcjogQ29sb3JBZGFwdGVyLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICBwcm90ZWN0ZWQgX25nWm9uZTogTmdab25lLFxyXG4gICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJvdGVjdGVkIF9kaXI6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb2xvckFkYXB0ZXIsIF9kb2N1bWVudCwgX25nWm9uZSwgX2VsZW1lbnRSZWYsIF9kaXIpO1xyXG4gIH1cclxuXHJcbiAgX3NldENvbG9yKGNvbG9yOiBDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYpIHtcclxuICAgICAgY29uc3QgeyBzYXR1cmF0aW9uLCB2YWx1ZSB9ID0gaHNsVG9Ic3YoY29sb3IpO1xyXG5cclxuICAgICAgbGV0IHhQb3NpdGlvbiA9IGNsYW1wKDAsIDEwMCwgc2F0dXJhdGlvbik7XHJcbiAgICAgIGNvbnN0IHlQb3NpdGlvbiA9IGNsYW1wKDAsIDEwMCwgMTAwIC0gdmFsdWUpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lzUnRsKCkpIHtcclxuICAgICAgICB4UG9zaXRpb24gPSAxMDAgLSB4UG9zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGh1bWJQb3NpdGlvbiA9IHsgeDogeFBvc2l0aW9uLCB5OiB5UG9zaXRpb24gfTtcclxuICAgIH1cclxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlQ29sb3JGcm9tUG9zaXRpb24oY29udGFpbmVyOiBDb250YWluZXIsIHBvaW50ZXJQb3M6IFBvaW50KSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRQb2ludGVyUG9zaXRpb25JbkNvbnRhaW5lcihwb2ludGVyUG9zLCBjb250YWluZXIpO1xyXG5cclxuICAgICAgbGV0IHBvaW50ZXJYID0geCAqIDEwMDtcclxuICAgICAgY29uc3QgcG9pbnRlclkgPSB5ICogMTAwO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lzUnRsKCkpIHtcclxuICAgICAgICBwb2ludGVyWCA9IDEwMCAtIHBvaW50ZXJYO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRodW1iUG9zaXRpb24gPSB7IHg6IHBvaW50ZXJYLCB5OiBwb2ludGVyWSB9O1xyXG5cclxuICAgICAgbGV0IHNhdHVyYXRpb24gPSBNYXRoLnJvdW5kKHBvaW50ZXJYKSB8fCAwO1xyXG4gICAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKDEwMCAtIHBvaW50ZXJZKSB8fCAwO1xyXG4gICAgICBzYXR1cmF0aW9uID0gY2xhbXAoMCwgMTAwLCBzYXR1cmF0aW9uKTtcclxuICAgICAgdmFsdWUgPSBjbGFtcCgwLCAxMDAsIHZhbHVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgaHVlIH0gPSB0aGlzLmNvbG9yO1xyXG4gICAgICBjb25zdCBjb2xvciA9IGZyb21Ic3YoeyBodWUsIHNhdHVyYXRpb24sIHZhbHVlIH0pO1xyXG5cclxuICAgICAgdGhpcy5zYXRDaGFuZ2UuZW1pdChjb2xvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVLZXlkb3duRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGNvbnN0IHsgaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MgfSA9IHRoaXMuY29sb3I7XHJcbiAgICBjb25zdCBpc1J0bCA9IHRoaXMuX2lzUnRsKCk7XHJcblxyXG4gICAgbGV0IG5ld1NhdHVyYXRpb24gPSBzYXR1cmF0aW9uO1xyXG4gICAgbGV0IG5ld0xpZ2h0bmVzcyA9IGxpZ2h0bmVzcztcclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICBuZXdMaWdodG5lc3MrKztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxyXG4gICAgICAgIG5ld1NhdHVyYXRpb24gKz0gaXNSdGwgPyAxIDogLTE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICBuZXdMaWdodG5lc3MtLTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICBuZXdTYXR1cmF0aW9uICs9IGlzUnRsID8gLTEgOiArMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQQUdFX1VQOlxyXG4gICAgICAgIG5ld0xpZ2h0bmVzcyA9IG5ld0xpZ2h0bmVzcyAtIDEwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICBuZXdMaWdodG5lc3MgPSBuZXdMaWdodG5lc3MgKyAxMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBIT01FOlxyXG4gICAgICAgIG5ld1NhdHVyYXRpb24gPSAwO1xyXG4gICAgICAgIG5ld0xpZ2h0bmVzcyA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5EOlxyXG4gICAgICAgIG5ld1NhdHVyYXRpb24gPSAxMDA7XHJcbiAgICAgICAgbmV3TGlnaHRuZXNzID0gNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld1NhdHVyYXRpb24gPSBjbGFtcCgwLCAxMDAsIG5ld1NhdHVyYXRpb24pO1xyXG4gICAgbmV3TGlnaHRuZXNzID0gY2xhbXAoMCwgMTAwLCBuZXdMaWdodG5lc3MpO1xyXG4gICAgY29uc3QgY29sb3IgPSBmcm9tSHNsKHsgaHVlLCBzYXR1cmF0aW9uOiBuZXdTYXR1cmF0aW9uLCBsaWdodG5lc3M6IG5ld0xpZ2h0bmVzcyB9KTtcclxuICAgIHRoaXMuc2F0Q2hhbmdlLmVtaXQoY29sb3IpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibW5qLXNhdHVyYXRpb24tc2VsZWN0b3JfX21hc2tcIj5cbiAgPGRpdiBjbGFzcz1cIm1uai1zYXR1cmF0aW9uLXNlbGVjdG9yX19tYXNrLS1maWxsXCIgW25nU3R5bGVdPVwic2F0QmFja2dyb3VuZENvbG9yXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtbmotc2F0dXJhdGlvbi1zZWxlY3Rvcl9fbWFzay0tc2F0dXJhdGlvblwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW5qLXNhdHVyYXRpb24tc2VsZWN0b3JfX21hc2stLXZhbHVlXCI+PC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9fdGh1bWJcIiBbbmdTdHlsZV09XCJzYXRUaHVtYlBvc1wiPlxuICA8ZGl2IGNsYXNzPVwibW5qLWNvbG9ycGlja2VyLXNlbGVjdG9yX190aHVtYl9faW5uZXJcIiBbbmdTdHlsZV09XCJzYXRUaHVtYkJhY2tncm91bmRDb2xvclwiPjwvZGl2PlxuPC9kaXY+XG4iXX0=