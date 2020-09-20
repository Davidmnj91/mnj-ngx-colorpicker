import { DOWN_ARROW, END, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output, ViewEncapsulation, } from '@angular/core';
import { clamp } from '../../color/color';
import { BaseSelector, getPointerPositionInContainer } from '../base-selector';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
export class MnjAlphaSelector extends BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.alphaChange = new EventEmitter();
    }
    get alphaThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: '50%' };
    }
    get gradient() {
        const { red, green, blue } = this.color;
        const direction = this._isRtl() ? 'to left' : 'to right';
        return {
            backgroundImage: `linear-gradient(${direction}, rgba(${red}, ${green}, ${blue}, 0) 0%, rgb(${red}, ${green}, ${blue}) 100%)`,
        };
    }
    _setColor(color) {
        if (this._elementRef) {
            const alpha = color.alpha * 100;
            let xPosition = clamp(0, 100, alpha);
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
            const alpha = Math.round(pointerX) / 100;
            const color = Object.assign({}, this.color);
            color.alpha = alpha;
            this.alphaChange.emit(color);
        });
    }
    _handleKeydownEvent(event) {
        const { alpha: oldAlpha } = this.color;
        const isRtl = this._isRtl();
        let newAlpha = oldAlpha;
        switch (event.keyCode) {
            case UP_ARROW:
            case LEFT_ARROW:
                newAlpha = newAlpha + (isRtl ? 0.01 : -0.01);
                break;
            case DOWN_ARROW:
            case RIGHT_ARROW:
                newAlpha = newAlpha + (isRtl ? -0.01 : 0.01);
                break;
            case HOME:
                newAlpha = 0;
                break;
            case END:
                newAlpha = 1;
                break;
            case PAGE_UP:
                newAlpha = newAlpha + (isRtl ? 0.1 : -0.1);
                break;
            case PAGE_DOWN:
                newAlpha = newAlpha + (isRtl ? -0.1 : 0.1);
                break;
            default:
                return;
        }
        newAlpha = clamp(0, 1, newAlpha);
        const color = Object.assign(Object.assign({}, this.color), { alpha: newAlpha });
        this.alphaChange.emit(color);
    }
}
MnjAlphaSelector.ɵfac = function MnjAlphaSelector_Factory(t) { return new (t || MnjAlphaSelector)(i0.ɵɵdirectiveInject(i1.ColorAdapter), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality)); };
MnjAlphaSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjAlphaSelector, selectors: [["mnj-alpha-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-alpha-selector"], hostVars: 1, hostBindings: function MnjAlphaSelector_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function MnjAlphaSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", 0);
    } }, outputs: { alphaChange: "alphaChange" }, features: [i0.ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjAlphaSelector }]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "mnj-alpha-selector__gradient", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjAlphaSelector_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx.gradient);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.alphaThumbPos);
    } }, directives: [i3.NgStyle], styles: [".mnj-alpha-selector{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=\") repeat 0}.mnj-alpha-selector__gradient{border-radius:2px;height:100%}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjAlphaSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-alpha-selector',
                templateUrl: 'alpha-selector.html',
                styleUrls: ['alpha-selector.scss', '../base-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjAlphaSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-alpha-selector',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality }]; }, { alphaChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtc2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvc2VsZWN0b3JzL2FscGhhL2FscGhhLXNlbGVjdG9yLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9hbHBoYS9hbHBoYS1zZWxlY3Rvci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBRU4sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBYSw2QkFBNkIsRUFBUyxNQUFNLGtCQUFrQixDQUFDOzs7OztBQWVqRyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQWdCaEQsWUFDWSxZQUEwQixFQUNSLFNBQW1CLEVBQ3JDLE9BQWUsRUFDZixXQUF1QixFQUN6QixrQkFBcUMsRUFDbkMsSUFBb0I7UUFFOUIsS0FBSyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQVBqRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNSLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDckMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGdCQUFXLEdBQVgsV0FB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Q0U7UUFBQSx5QkFBMEQ7UUFDNUQsaUJBQU07O1FBSm9DLHNDQUFvQjtRQUVqQixlQUF5QjtRQUF6QiwyQ0FBeUI7O2tERDZCekQsZ0JBQWdCO2NBYjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQztnQkFDM0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3JFLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsNkNBQTZDO29CQUNwRCxpQkFBaUIsRUFBRSxHQUFHO29CQUN0QixXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzthQUNGO2lFQW1CMEMsUUFBUTtzQkFBOUMsTUFBTTt1QkFBQyxRQUFRO21JQWhCWCxXQUFXO2tCQURqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IERPV05fQVJST1csIEVORCwgSE9NRSwgTEVGVF9BUlJPVywgUEFHRV9ET1dOLCBQQUdFX1VQLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBOZ1pvbmUsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjbGFtcCwgQ29sb3IgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvcic7XHJcbmltcG9ydCB7IENvbG9yQWRhcHRlciB9IGZyb20gJy4uLy4uL2NvbG9yL2NvbG9yLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBCYXNlU2VsZWN0b3IsIENvbnRhaW5lciwgZ2V0UG9pbnRlclBvc2l0aW9uSW5Db250YWluZXIsIFBvaW50IH0gZnJvbSAnLi4vYmFzZS1zZWxlY3Rvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21uai1hbHBoYS1zZWxlY3RvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdhbHBoYS1zZWxlY3Rvci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYWxwaGEtc2VsZWN0b3Iuc2NzcycsICcuLi9iYXNlLXNlbGVjdG9yLnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQmFzZVNlbGVjdG9yLCB1c2VFeGlzdGluZzogTW5qQWxwaGFTZWxlY3RvciB9XSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ21uai1jb2xvcnBpY2tlci1zZWxlY3RvciBtbmotYWxwaGEtc2VsZWN0b3InLFxyXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICcwJyxcclxuICAgICcoa2V5ZG93biknOiAnX2hhbmRsZUtleWRvd25FdmVudCgkZXZlbnQpJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW5qQWxwaGFTZWxlY3RvciBleHRlbmRzIEJhc2VTZWxlY3RvciB7XHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFscGhhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oKTtcclxuXHJcbiAgZ2V0IGFscGhhVGh1bWJQb3MoKSB7XHJcbiAgICByZXR1cm4geyBsZWZ0OiBgJHt0aGlzLnRodW1iUG9zaXRpb24ueH0lYCwgdG9wOiAnNTAlJyB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBncmFkaWVudCgpIHtcclxuICAgIGNvbnN0IHsgcmVkLCBncmVlbiwgYmx1ZSB9ID0gdGhpcy5jb2xvcjtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuX2lzUnRsKCkgPyAndG8gbGVmdCcgOiAndG8gcmlnaHQnO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAwKSAwJSwgcmdiKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0pIDEwMCUpYCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjb2xvckFkYXB0ZXI6IENvbG9yQWRhcHRlcixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgcHJvdGVjdGVkIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByb3RlY3RlZCBfZGlyOiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge1xyXG4gICAgc3VwZXIoY29sb3JBZGFwdGVyLCBfZG9jdW1lbnQsIF9uZ1pvbmUsIF9lbGVtZW50UmVmLCBfZGlyKTtcclxuICB9XHJcblxyXG4gIF9zZXRDb2xvcihjb2xvcjogQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IGFscGhhID0gY29sb3IuYWxwaGEgKiAxMDA7XHJcblxyXG4gICAgICBsZXQgeFBvc2l0aW9uID0gY2xhbXAoMCwgMTAwLCBhbHBoYSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNSdGwoKSkge1xyXG4gICAgICAgIHhQb3NpdGlvbiA9IDEwMCAtIHhQb3NpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50aHVtYlBvc2l0aW9uID0geyB4OiB4UG9zaXRpb24sIHk6IDUwIH07XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUNvbG9yRnJvbVBvc2l0aW9uKGNvbnRhaW5lcjogQ29udGFpbmVyLCBwb2ludGVyUG9zOiBQb2ludCkge1xyXG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgeDogcG9pbnRlclRvQ29udGFpbmVyWCB9ID0gZ2V0UG9pbnRlclBvc2l0aW9uSW5Db250YWluZXIocG9pbnRlclBvcywgY29udGFpbmVyKTtcclxuXHJcbiAgICAgIGxldCBwb2ludGVyWCA9IE1hdGgucm91bmQocG9pbnRlclRvQ29udGFpbmVyWCAqIDEwMCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNSdGwoKSkge1xyXG4gICAgICAgIHBvaW50ZXJYID0gMTAwIC0gcG9pbnRlclg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGh1bWJQb3NpdGlvbiA9IHsgeDogcG9pbnRlclgsIHk6IDUwIH07XHJcblxyXG4gICAgICBjb25zdCBhbHBoYSA9IE1hdGgucm91bmQocG9pbnRlclgpIC8gMTAwO1xyXG5cclxuICAgICAgY29uc3QgY29sb3IgPSB7IC4uLnRoaXMuY29sb3IgfTtcclxuICAgICAgY29sb3IuYWxwaGEgPSBhbHBoYTtcclxuXHJcbiAgICAgIHRoaXMuYWxwaGFDaGFuZ2UuZW1pdChjb2xvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVLZXlkb3duRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGNvbnN0IHsgYWxwaGE6IG9sZEFscGhhIH0gPSB0aGlzLmNvbG9yO1xyXG4gICAgY29uc3QgaXNSdGwgPSB0aGlzLl9pc1J0bCgpO1xyXG5cclxuICAgIGxldCBuZXdBbHBoYSA9IG9sZEFscGhhO1xyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICBjYXNlIExFRlRfQVJST1c6XHJcbiAgICAgICAgbmV3QWxwaGEgPSBuZXdBbHBoYSArIChpc1J0bCA/IDAuMDEgOiAtMC4wMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICBuZXdBbHBoYSA9IG5ld0FscGhhICsgKGlzUnRsID8gLTAuMDEgOiAwLjAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBIT01FOlxyXG4gICAgICAgIG5ld0FscGhhID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTkQ6XHJcbiAgICAgICAgbmV3QWxwaGEgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgbmV3QWxwaGEgPSBuZXdBbHBoYSArIChpc1J0bCA/IDAuMSA6IC0wLjEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICBuZXdBbHBoYSA9IG5ld0FscGhhICsgKGlzUnRsID8gLTAuMSA6IDAuMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0FscGhhID0gY2xhbXAoMCwgMSwgbmV3QWxwaGEpO1xyXG4gICAgY29uc3QgY29sb3IgPSB7IC4uLnRoaXMuY29sb3IsIC4uLnsgYWxwaGE6IG5ld0FscGhhIH0gfTtcclxuICAgIHRoaXMuYWxwaGFDaGFuZ2UuZW1pdChjb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtbmotYWxwaGEtc2VsZWN0b3JfX2dyYWRpZW50XCIgW25nU3R5bGVdPVwiZ3JhZGllbnRcIj48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9fdGh1bWJcIiBbbmdTdHlsZV09XCJhbHBoYVRodW1iUG9zXCI+XG4gIDxkaXYgY2xhc3M9XCJtbmotY29sb3JwaWNrZXItc2VsZWN0b3JfX3RodW1iX19pbm5lclwiPjwvZGl2PlxuPC9kaXY+XG4iXX0=