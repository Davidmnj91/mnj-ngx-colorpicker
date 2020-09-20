import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
export class MnjPreviewSwatch {
    constructor(colorAdapter) {
        this.colorAdapter = colorAdapter;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this.colorAdapter.sameColor(this.color, value)) {
            return;
        }
        this._color = value;
    }
    get cssBackground() {
        return this.colorAdapter.toRgbString(this.color, true);
    }
}
MnjPreviewSwatch.ɵfac = function MnjPreviewSwatch_Factory(t) { return new (t || MnjPreviewSwatch)(i0.ɵɵdirectiveInject(i1.ColorAdapter)); };
MnjPreviewSwatch.ɵcmp = i0.ɵɵdefineComponent({ type: MnjPreviewSwatch, selectors: [["mnj-preview-swatch"]], hostAttrs: [1, "mnj-preview-swatch"], inputs: { color: "color" }, decls: 3, vars: 2, consts: [[1, "swatch__container"], [1, "swatch__container--alpha-layer"], [1, "swatch__container--color-layer"]], template: function MnjPreviewSwatch_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("background", ctx.cssBackground);
    } }, styles: [".mnj-preview-swatch .swatch__container{cursor:default}.mnj-preview-swatch .swatch__container,.mnj-preview-swatch .swatch__container--alpha-layer,.mnj-preview-swatch .swatch__container--color-layer{border-radius:50%;height:24px;width:24px}.mnj-preview-swatch .swatch__container--alpha-layer{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=\") repeat;background-position:0 0}.mnj-preview-swatch .swatch__container--color-layer{transform:translateY(-24px)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjPreviewSwatch, [{
        type: Component,
        args: [{
                selector: 'mnj-preview-swatch',
                templateUrl: 'preview-swatch.html',
                styleUrls: ['preview-swatch.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'mnj-preview-swatch',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }]; }, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1zd2F0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvc2VsZWN0b3JzL3ByZXZpZXctc3dhdGNoL3ByZXZpZXctc3dhdGNoLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9wcmV2aWV3LXN3YXRjaC9wcmV2aWV3LXN3YXRjaC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFjN0YsTUFBTSxPQUFPLGdCQUFnQjtJQWlCM0IsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBaEJsRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFHRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0ZBZlUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7UUNkN0IsOEJBQ0U7UUFBQSx5QkFBa0Q7UUFDbEQseUJBQXFGO1FBQ3ZGLGlCQUFNOztRQUR3QyxlQUFrQztRQUFsQywrQ0FBa0M7O2tERFluRSxnQkFBZ0I7Y0FWNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxxQkFBcUI7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsb0JBQW9CO2lCQUM1QjthQUNGOytEQUdLLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvcic7XG5pbXBvcnQgeyBDb2xvckFkYXB0ZXIgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvci1hZGFwdGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW5qLXByZXZpZXctc3dhdGNoJyxcbiAgdGVtcGxhdGVVcmw6ICdwcmV2aWV3LXN3YXRjaC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3ByZXZpZXctc3dhdGNoLnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ21uai1wcmV2aWV3LXN3YXRjaCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1ualByZXZpZXdTd2F0Y2gge1xuICBASW5wdXQoKVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIHNldCBjb2xvcih2YWx1ZTogQ29sb3IpIHtcbiAgICBpZiAodGhpcy5jb2xvckFkYXB0ZXIuc2FtZUNvbG9yKHRoaXMuY29sb3IsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2NvbG9yOiBDb2xvcjtcblxuICBnZXQgY3NzQmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvckFkYXB0ZXIudG9SZ2JTdHJpbmcodGhpcy5jb2xvciwgdHJ1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbG9yQWRhcHRlcjogQ29sb3JBZGFwdGVyKSB7fVxufVxuIiwiPGRpdiBjbGFzcz1cInN3YXRjaF9fY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJzd2F0Y2hfX2NvbnRhaW5lci0tYWxwaGEtbGF5ZXJcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInN3YXRjaF9fY29udGFpbmVyLS1jb2xvci1sYXllclwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNzc0JhY2tncm91bmRcIj48L2Rpdj5cbjwvZGl2PlxuIl19