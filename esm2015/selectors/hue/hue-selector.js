import { DOWN_ARROW, END, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output, ViewEncapsulation, } from '@angular/core';
import { clamp, fromHsl } from '../../color/color';
import { BaseSelector, getPointerPositionInContainer } from '../base-selector';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
export class MnjHueSelector extends BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.hueChange = new EventEmitter();
    }
    get hueThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: '50%' };
    }
    _setColor(color) {
        if (this._elementRef) {
            const hue = color.hue || 0;
            let xPosition = clamp(0, 100, (hue / 360) * 100);
            if (this._isRtl()) {
                xPosition = 100 - xPosition;
            }
            this.thumbPosition = { x: xPosition, y: 50 };
        }
        this._changeDetectorRef.markForCheck();
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x: pointerToContainerX } = getPointerPositionInContainer(pointerPos, container);
            let pointerX = Math.round(pointerToContainerX * 100);
            if (this._isRtl()) {
                pointerX = 100 - pointerX;
            }
            this.thumbPosition = { x: pointerX, y: 50 };
            let hue = Math.round(pointerToContainerX * 360);
            hue = clamp(0, 359, hue);
            const { saturation, lightness } = this.color;
            const color = fromHsl({ hue, saturation, lightness });
            this.hueChange.emit(color);
        });
    }
    _handleKeydownEvent(event) {
        const { hue: oldHue, saturation, lightness, alpha } = this.color;
        const isRtl = this._isRtl();
        let newHue = oldHue;
        switch (event.keyCode) {
            case UP_ARROW:
            case LEFT_ARROW:
                newHue = newHue + (isRtl ? 1 : -1);
                break;
            case DOWN_ARROW:
            case RIGHT_ARROW:
                newHue = newHue + (isRtl ? -1 : +1);
                break;
            case HOME:
                newHue = 0;
                break;
            case END:
                newHue = 359;
                break;
            case PAGE_UP:
                newHue = newHue + (isRtl ? 60 : -60);
                break;
            case PAGE_DOWN:
                newHue = newHue + (isRtl ? -60 : +60);
                break;
            default:
                return;
        }
        newHue = (newHue + 360) % 360;
        const color = fromHsl({ hue: newHue, saturation, lightness }, alpha);
        this.hueChange.emit(color);
    }
}
MnjHueSelector.ɵfac = function MnjHueSelector_Factory(t) { return new (t || MnjHueSelector)(i0.ɵɵdirectiveInject(i1.ColorAdapter), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality)); };
MnjHueSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjHueSelector, selectors: [["mnj-hue-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-hue-selector"], hostVars: 1, hostBindings: function MnjHueSelector_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function MnjHueSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", 0);
    } }, outputs: { hueChange: "hueChange" }, features: [i0.ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjHueSelector }]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjHueSelector_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx.hueThumbPos);
    } }, directives: [i3.NgStyle], styles: [".mnj-hue-selector{background:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjHueSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-hue-selector',
                templateUrl: 'hue-selector.html',
                styleUrls: ['hue-selector.scss', '../base-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjHueSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-hue-selector',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality }]; }, { hueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlLXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9odWUvaHVlLXNlbGVjdG9yLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9odWUvaHVlLXNlbGVjdG9yLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNySCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFFTixNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQVMsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBYSw2QkFBNkIsRUFBUyxNQUFNLGtCQUFrQixDQUFDOzs7OztBQWVqRyxNQUFNLE9BQU8sY0FBZSxTQUFRLFlBQVk7SUFROUMsWUFDWSxZQUEwQixFQUNSLFNBQW1CLEVBQ3JDLE9BQWUsRUFDZixXQUF1QixFQUN6QixrQkFBcUMsRUFDbkMsSUFBb0I7UUFFOUIsS0FBSyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQVBqRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNSLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDckMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxD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QVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDO2dCQUN6RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLENBQUM7Z0JBQ25FLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsMkNBQTJDO29CQUNsRCxpQkFBaUIsRUFBRSxHQUFHO29CQUN0QixXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzthQUNGO2lFQVcwQyxRQUFRO3NCQUE5QyxNQUFNO3VCQUFDLFFBQVE7bUlBUlgsU0FBUztrQkFEZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IERPV05fQVJST1csIEVORCwgSE9NRSwgTEVGVF9BUlJPVywgUEFHRV9ET1dOLCBQQUdFX1VQLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBOZ1pvbmUsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjbGFtcCwgQ29sb3IsIGZyb21Ic2wgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvcic7XHJcbmltcG9ydCB7IENvbG9yQWRhcHRlciB9IGZyb20gJy4uLy4uL2NvbG9yL2NvbG9yLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBCYXNlU2VsZWN0b3IsIENvbnRhaW5lciwgZ2V0UG9pbnRlclBvc2l0aW9uSW5Db250YWluZXIsIFBvaW50IH0gZnJvbSAnLi4vYmFzZS1zZWxlY3Rvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21uai1odWUtc2VsZWN0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnaHVlLXNlbGVjdG9yLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydodWUtc2VsZWN0b3Iuc2NzcycsICcuLi9iYXNlLXNlbGVjdG9yLnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQmFzZVNlbGVjdG9yLCB1c2VFeGlzdGluZzogTW5qSHVlU2VsZWN0b3IgfV0sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtbmotY29sb3JwaWNrZXItc2VsZWN0b3IgbW5qLWh1ZS1zZWxlY3RvcicsXHJcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJzAnLFxyXG4gICAgJyhrZXlkb3duKSc6ICdfaGFuZGxlS2V5ZG93bkV2ZW50KCRldmVudCknLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNbmpIdWVTZWxlY3RvciBleHRlbmRzIEJhc2VTZWxlY3RvciB7XHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGh1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KCk7XHJcblxyXG4gIGdldCBodWVUaHVtYlBvcygpIHtcclxuICAgIHJldHVybiB7IGxlZnQ6IGAke3RoaXMudGh1bWJQb3NpdGlvbi54fSVgLCB0b3A6ICc1MCUnIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjb2xvckFkYXB0ZXI6IENvbG9yQWRhcHRlcixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgcHJvdGVjdGVkIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByb3RlY3RlZCBfZGlyOiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge1xyXG4gICAgc3VwZXIoY29sb3JBZGFwdGVyLCBfZG9jdW1lbnQsIF9uZ1pvbmUsIF9lbGVtZW50UmVmLCBfZGlyKTtcclxuICB9XHJcblxyXG4gIF9zZXRDb2xvcihjb2xvcjogQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IGh1ZSA9IGNvbG9yLmh1ZSB8fCAwO1xyXG5cclxuICAgICAgbGV0IHhQb3NpdGlvbiA9IGNsYW1wKDAsIDEwMCwgKGh1ZSAvIDM2MCkgKiAxMDApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lzUnRsKCkpIHtcclxuICAgICAgICB4UG9zaXRpb24gPSAxMDAgLSB4UG9zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGh1bWJQb3NpdGlvbiA9IHsgeDogeFBvc2l0aW9uLCB5OiA1MCB9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVDb2xvckZyb21Qb3NpdGlvbihjb250YWluZXI6IENvbnRhaW5lciwgcG9pbnRlclBvczogUG9pbnQpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHg6IHBvaW50ZXJUb0NvbnRhaW5lclggfSA9IGdldFBvaW50ZXJQb3NpdGlvbkluQ29udGFpbmVyKHBvaW50ZXJQb3MsIGNvbnRhaW5lcik7XHJcblxyXG4gICAgICBsZXQgcG9pbnRlclggPSBNYXRoLnJvdW5kKHBvaW50ZXJUb0NvbnRhaW5lclggKiAxMDApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lzUnRsKCkpIHtcclxuICAgICAgICBwb2ludGVyWCA9IDEwMCAtIHBvaW50ZXJYO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRodW1iUG9zaXRpb24gPSB7IHg6IHBvaW50ZXJYLCB5OiA1MCB9O1xyXG5cclxuICAgICAgbGV0IGh1ZSA9IE1hdGgucm91bmQocG9pbnRlclRvQ29udGFpbmVyWCAqIDM2MCk7XHJcbiAgICAgIGh1ZSA9IGNsYW1wKDAsIDM1OSwgaHVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgc2F0dXJhdGlvbiwgbGlnaHRuZXNzIH0gPSB0aGlzLmNvbG9yO1xyXG5cclxuICAgICAgY29uc3QgY29sb3IgPSBmcm9tSHNsKHsgaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MgfSk7XHJcblxyXG4gICAgICB0aGlzLmh1ZUNoYW5nZS5lbWl0KGNvbG9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUtleWRvd25FdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgY29uc3QgeyBodWU6IG9sZEh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSB9ID0gdGhpcy5jb2xvcjtcclxuICAgIGNvbnN0IGlzUnRsID0gdGhpcy5faXNSdGwoKTtcclxuXHJcbiAgICBsZXQgbmV3SHVlID0gb2xkSHVlO1xyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICBjYXNlIExFRlRfQVJST1c6XHJcbiAgICAgICAgbmV3SHVlID0gbmV3SHVlICsgKGlzUnRsID8gMSA6IC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxyXG4gICAgICAgIG5ld0h1ZSA9IG5ld0h1ZSArIChpc1J0bCA/IC0xIDogKzEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEhPTUU6XHJcbiAgICAgICAgbmV3SHVlID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTkQ6XHJcbiAgICAgICAgbmV3SHVlID0gMzU5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgbmV3SHVlID0gbmV3SHVlICsgKGlzUnRsID8gNjAgOiAtNjApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICBuZXdIdWUgPSBuZXdIdWUgKyAoaXNSdGwgPyAtNjAgOiArNjApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBuZXdIdWUgPSAobmV3SHVlICsgMzYwKSAlIDM2MDtcclxuICAgIGNvbnN0IGNvbG9yID0gZnJvbUhzbCh7IGh1ZTogbmV3SHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MgfSwgYWxwaGEpO1xyXG4gICAgdGhpcy5odWVDaGFuZ2UuZW1pdChjb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtbmotY29sb3JwaWNrZXItc2VsZWN0b3JfX3RodW1iXCIgW25nU3R5bGVdPVwiaHVlVGh1bWJQb3NcIj5cbiAgPGRpdiBjbGFzcz1cIm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9fdGh1bWJfX2lubmVyXCI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==