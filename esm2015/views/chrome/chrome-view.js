import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { calculateShades } from '../../color/color';
import { BaseColorpickerView, ColorPickerView } from '../colorpicker-view';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "../../selectors/grid/grid-selector";
import * as i3 from "../../selectors/sat/sat-selector";
import * as i4 from "../../selectors/hue/hue-selector";
import * as i5 from "@angular/common";
import * as i6 from "../../selectors/preview-swatch/preview-swatch";
import * as i7 from "../../selectors/input/input-selector";
import * as i8 from "../../selectors/alpha/alpha-selector";
function MnjChromePickerView_mnj_alpha_selector_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mnj-alpha-selector", 7);
    i0.ɵɵlistener("alphaChange", function MnjChromePickerView_mnj_alpha_selector_3_Template_mnj_alpha_selector_alphaChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.changeColor($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r0.activeColor);
} }
export class MnjChromePickerView extends BaseColorpickerView {
    constructor(_colorAdapter) {
        super(_colorAdapter);
        this._colorAdapter = _colorAdapter;
        this.colorShadesFn = (color) => {
            return calculateShades(color);
        };
    }
}
MnjChromePickerView.ɵfac = function MnjChromePickerView_Factory(t) { return new (t || MnjChromePickerView)(i0.ɵɵdirectiveInject(i1.ColorAdapter)); };
MnjChromePickerView.ɵcmp = i0.ɵɵdefineComponent({ type: MnjChromePickerView, selectors: [["mnj-chrome-picker-view"]], hostAttrs: [1, "mnj-chrome-picker-view"], inputs: { showAlpha: "showAlpha" }, exportAs: ["mnjChromePickerView"], features: [i0.ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjChromePickerView }]), i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 7, consts: [["cdkFocusInitial", "", 3, "color", "paletteGeneratorFn", "colorSelected"], [3, "color", "satChange"], [3, "color", "hueChange"], [3, "color", "alphaChange", 4, "ngIf"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color", "inputChange"], [3, "color", "alphaChange"]], template: function MnjChromePickerView_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjChromePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "mnj-saturation-selector", 1);
        i0.ɵɵlistener("satChange", function MnjChromePickerView_Template_mnj_saturation_selector_satChange_1_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mnj-hue-selector", 2);
        i0.ɵɵlistener("hueChange", function MnjChromePickerView_Template_mnj_hue_selector_hueChange_2_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, MnjChromePickerView_mnj_alpha_selector_3_Template, 1, 1, "mnj-alpha-selector", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "mnj-preview-swatch", 5);
        i0.ɵɵelementStart(6, "mnj-input-selector", 6);
        i0.ɵɵlistener("inputChange", function MnjChromePickerView_Template_mnj_input_selector_inputChange_6_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.colorShadesFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.activeColor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.activeColor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showAlpha);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("color", ctx.activeColor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.activeColor);
    } }, directives: [i2.MnjGridSelector, i3.MnjSaturationSelector, i4.MnjHueSelector, i5.NgIf, i6.MnjPreviewSwatch, i7.MnjInputSelector, i8.MnjAlphaSelector], styles: [".mnj-chrome-picker-view .controls-container{display:flex}.mnj-chrome-picker-view .controls-container--input{flex:1;margin-left:15px}.mnj-chrome-picker-view{display:flex;flex-direction:column;height:100%}.mnj-chrome-picker-view .mnj-saturation-selector{flex:1 0 auto}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjChromePickerView, [{
        type: Component,
        args: [{
                selector: 'mnj-chrome-picker-view',
                exportAs: 'mnjChromePickerView',
                templateUrl: 'chrome-view.html',
                styleUrls: ['chrome-view.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjChromePickerView }],
                host: {
                    class: 'mnj-chrome-picker-view',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }]; }, { showAlpha: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21lLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvdmlld3MvY2hyb21lL2Nocm9tZS12aWV3LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3ZpZXdzL2Nocm9tZS9jaHJvbWUtdmlldy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQVMsTUFBTSxtQkFBbUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7OztJQ0szRSw2Q0FBcUg7SUFBekQsMk9BQW1DO0lBQUMsaUJBQXFCOzs7SUFBL0UsMENBQXFCOztBRFMzRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsbUJBQW1CO0lBTzFELFlBQXNCLGFBQTJCO1FBQy9DLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQURELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSmpELGtCQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUMvQixPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7SUFJRixDQUFDOztzRkFUVSxtQkFBbUI7d0RBQW5CLG1CQUFtQiw2TEFMbkIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLENBQUM7UUNaN0UsNENBS3FCO1FBRG5CLGlJQUFpQix1QkFBbUIsSUFBQztRQUN0QyxpQkFBb0I7UUFDckIsa0RBQTJHO1FBQTVELCtIQUFhLHVCQUFtQixJQUFDO1FBQUMsaUJBQTBCO1FBQzNHLDJDQUE2RjtRQUFyRCx3SEFBYSx1QkFBbUIsSUFBQztRQUFDLGlCQUFtQjtRQUM3RixrR0FBZ0c7UUFDaEcsOEJBQ0U7UUFBQSx3Q0FBK0Q7UUFDL0QsNkNBSXNCO1FBRHBCLDhIQUFlLHVCQUFtQixJQUFDO1FBQ3BDLGlCQUFxQjtRQUN4QixpQkFBTTs7UUFkSix1Q0FBcUIseUNBQUE7UUFJRSxlQUFxQjtRQUFyQix1Q0FBcUI7UUFDNUIsZUFBcUI7UUFBckIsdUNBQXFCO1FBQ25CLGVBQWlCO1FBQWpCLG9DQUFpQjtRQUVmLGVBQXFCO1FBQXJCLHVDQUFxQjtRQUd2QyxlQUFxQjtRQUFyQix1Q0FBcUI7O2tERElaLG1CQUFtQjtjQVovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGtCQUFrQjtnQkFDL0IsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO2dCQUMzRSxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHdCQUF3QjtpQkFDaEM7YUFDRjsrREFFVSxTQUFTO2tCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVNoYWRlcywgQ29sb3IgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvcic7XHJcbmltcG9ydCB7IENvbG9yQWRhcHRlciB9IGZyb20gJy4uLy4uL2NvbG9yL2NvbG9yLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBCYXNlQ29sb3JwaWNrZXJWaWV3LCBDb2xvclBpY2tlclZpZXcgfSBmcm9tICcuLi9jb2xvcnBpY2tlci12aWV3JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbW5qLWNocm9tZS1waWNrZXItdmlldycsXHJcbiAgZXhwb3J0QXM6ICdtbmpDaHJvbWVQaWNrZXJWaWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJ2Nocm9tZS12aWV3Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjaHJvbWUtdmlldy5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENvbG9yUGlja2VyVmlldywgdXNlRXhpc3Rpbmc6IE1uakNocm9tZVBpY2tlclZpZXcgfV0sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtbmotY2hyb21lLXBpY2tlci12aWV3JyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW5qQ2hyb21lUGlja2VyVmlldyBleHRlbmRzIEJhc2VDb2xvcnBpY2tlclZpZXcge1xyXG4gIEBJbnB1dCgpIHNob3dBbHBoYTogYm9vbGVhbjtcclxuXHJcbiAgY29sb3JTaGFkZXNGbiA9IChjb2xvcjogQ29sb3IpID0+IHtcclxuICAgIHJldHVybiBjYWxjdWxhdGVTaGFkZXMoY29sb3IpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfY29sb3JBZGFwdGVyOiBDb2xvckFkYXB0ZXIpIHtcclxuICAgIHN1cGVyKF9jb2xvckFkYXB0ZXIpO1xyXG4gIH1cclxufVxyXG4iLCI8bW5qLWdyaWQtc2VsZWN0b3JcbiAgY2RrRm9jdXNJbml0aWFsXG4gIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiXG4gIFtwYWxldHRlR2VuZXJhdG9yRm5dPVwiY29sb3JTaGFkZXNGblwiXG4gIChjb2xvclNlbGVjdGVkKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuPjwvbW5qLWdyaWQtc2VsZWN0b3I+XG48bW5qLXNhdHVyYXRpb24tc2VsZWN0b3IgW2NvbG9yXT1cImFjdGl2ZUNvbG9yXCIgKHNhdENoYW5nZSk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCI+PC9tbmotc2F0dXJhdGlvbi1zZWxlY3Rvcj5cbjxtbmotaHVlLXNlbGVjdG9yIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiIChodWVDaGFuZ2UpPVwiY2hhbmdlQ29sb3IoJGV2ZW50KVwiPjwvbW5qLWh1ZS1zZWxlY3Rvcj5cbjxtbmotYWxwaGEtc2VsZWN0b3IgKm5nSWY9XCJzaG93QWxwaGFcIiBbY29sb3JdPVwiYWN0aXZlQ29sb3JcIiAoYWxwaGFDaGFuZ2UpPVwiY2hhbmdlQ29sb3IoJGV2ZW50KVwiPjwvbW5qLWFscGhhLXNlbGVjdG9yPlxuPGRpdiBjbGFzcz1cImNvbnRyb2xzLWNvbnRhaW5lclwiPlxuICA8bW5qLXByZXZpZXctc3dhdGNoIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvbW5qLXByZXZpZXctc3dhdGNoPlxuICA8bW5qLWlucHV0LXNlbGVjdG9yXG4gICAgY2xhc3M9XCJjb250cm9scy1jb250YWluZXItLWlucHV0XCJcbiAgICBbY29sb3JdPVwiYWN0aXZlQ29sb3JcIlxuICAgIChpbnB1dENoYW5nZSk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcbiAgPjwvbW5qLWlucHV0LXNlbGVjdG9yPlxuPC9kaXY+XG4iXX0=