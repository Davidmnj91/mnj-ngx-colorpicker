import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { analogous, calculateShades, complementary, splitComplementary, tetradic, triadic, } from '../../color/color';
import { BaseColorpickerView, ColorPickerView } from '../colorpicker-view';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "../../selectors/grid/grid-selector";
export class MnjArmoniesPickerView extends BaseColorpickerView {
    constructor(_colorAdapter) {
        super(_colorAdapter);
        this._colorAdapter = _colorAdapter;
        this.complementaryPaletteFn = (color) => {
            const complementaryColor = complementary(color);
            return calculateShades(complementaryColor);
        };
        this.splitComplementaryPaletteFn = (color) => {
            const splitComplementaryColor = splitComplementary(color)[0];
            return calculateShades(splitComplementaryColor);
        };
        this.splitComplementaryPaletteFn1 = (color) => {
            const splitComplementaryColor = splitComplementary(color)[1];
            return calculateShades(splitComplementaryColor);
        };
        this.analogous1PaletteFn = (color) => {
            const analogousColor = analogous(color)[0];
            return calculateShades(analogousColor);
        };
        this.analogous2PaletteFn = (color) => {
            const analogousColor = analogous(color)[1];
            return calculateShades(analogousColor);
        };
        this.triadic1PaletteFn = (color) => {
            const triadicColor = triadic(color)[0];
            return calculateShades(triadicColor);
        };
        this.triadic2PaletteFn = (color) => {
            const triadicColor = triadic(color)[1];
            return calculateShades(triadicColor);
        };
        this.tetradic1PaletteFn = (color) => {
            const tetradicColor = tetradic(color)[0];
            return calculateShades(tetradicColor);
        };
        this.tetradic2PaletteFn = (color) => {
            const tetradicColor = tetradic(color)[1];
            return calculateShades(tetradicColor);
        };
        this.tetradic3PaletteFn = (color) => {
            const tetradicColor = tetradic(color)[2];
            return calculateShades(tetradicColor);
        };
    }
}
MnjArmoniesPickerView.ɵfac = function MnjArmoniesPickerView_Factory(t) { return new (t || MnjArmoniesPickerView)(i0.ɵɵdirectiveInject(i1.ColorAdapter)); };
MnjArmoniesPickerView.ɵcmp = i0.ɵɵdefineComponent({ type: MnjArmoniesPickerView, selectors: [["mnj-armonies-picker-view"]], hostAttrs: [1, "mnj-armonies-picker-view"], exportAs: ["mnjArmoniesPickerView"], features: [i0.ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjArmoniesPickerView }]), i0.ɵɵInheritDefinitionFeature], decls: 20, vars: 20, consts: [[3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjArmoniesPickerView_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "label");
        i0.ɵɵtext(1, "Complementary:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_2_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "label");
        i0.ɵɵtext(4, "Split Complementary:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_5_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_6_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "label");
        i0.ɵɵtext(8, "Analogous:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_9_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_10_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "label");
        i0.ɵɵtext(12, "Triadic:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_13_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_14_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "label");
        i0.ɵɵtext(16, "Tetradic:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_17_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_18_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_19_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.complementaryPaletteFn);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous1PaletteFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous2PaletteFn);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic1PaletteFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic2PaletteFn);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic1PaletteFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic2PaletteFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic3PaletteFn);
    } }, directives: [i2.MnjGridSelector], styles: [".mnj-armonies-picker-view{display:flex;flex-flow:column}.mnj-armonies-picker-view label{margin-bottom:10px;margin-top:10px}.mnj-armonies-picker-view .mnj-grid-selector__row--cell{height:20px;width:20px}.mnj-armonies-picker-view .mnj-grid-selector__thumb{height:16px;width:16px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjArmoniesPickerView, [{
        type: Component,
        args: [{
                selector: 'mnj-armonies-picker-view',
                exportAs: 'mnjArmoniesPickerView',
                templateUrl: 'armonies-view.html',
                styleUrls: ['armonies-view.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjArmoniesPickerView }],
                host: {
                    class: 'mnj-armonies-picker-view',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJtb25pZXMtdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi92aWV3cy9hcm1vbmllcy9hcm1vbmllcy12aWV3LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3ZpZXdzL2FybW9uaWVzL2FybW9uaWVzLXZpZXcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLGFBQWEsRUFFYixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLE9BQU8sR0FDUixNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQWMzRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsbUJBQW1CO0lBQzVELFlBQXNCLGFBQTJCO1FBQy9DLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQURELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSWpELDJCQUFzQixHQUFHLENBQUMsS0FBWSxFQUFrQixFQUFFO1lBQ3hELE1BQU0sa0JBQWtCLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELE9BQU8sZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRUYsZ0NBQTJCLEdBQUcsQ0FBQyxLQUFZLEVBQWtCLEVBQUU7WUFDN0QsTUFBTSx1QkFBdUIsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxPQUFPLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQztRQUNGLGlDQUE0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RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGFuYWxvZ291cyxcclxuICBjYWxjdWxhdGVTaGFkZXMsXHJcbiAgQ29sb3IsXHJcbiAgY29tcGxlbWVudGFyeSxcclxuICBQYWxldHRlQ29sb3IsXHJcbiAgc3BsaXRDb21wbGVtZW50YXJ5LFxyXG4gIHRldHJhZGljLFxyXG4gIHRyaWFkaWMsXHJcbn0gZnJvbSAnLi4vLi4vY29sb3IvY29sb3InO1xyXG5pbXBvcnQgeyBDb2xvckFkYXB0ZXIgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvci1hZGFwdGVyJztcclxuaW1wb3J0IHsgQmFzZUNvbG9ycGlja2VyVmlldywgQ29sb3JQaWNrZXJWaWV3IH0gZnJvbSAnLi4vY29sb3JwaWNrZXItdmlldyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21uai1hcm1vbmllcy1waWNrZXItdmlldycsXHJcbiAgZXhwb3J0QXM6ICdtbmpBcm1vbmllc1BpY2tlclZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXJtb25pZXMtdmlldy5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXJtb25pZXMtdmlldy5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENvbG9yUGlja2VyVmlldywgdXNlRXhpc3Rpbmc6IE1uakFybW9uaWVzUGlja2VyVmlldyB9XSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ21uai1hcm1vbmllcy1waWNrZXItdmlldycsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1uakFybW9uaWVzUGlja2VyVmlldyBleHRlbmRzIEJhc2VDb2xvcnBpY2tlclZpZXcge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfY29sb3JBZGFwdGVyOiBDb2xvckFkYXB0ZXIpIHtcclxuICAgIHN1cGVyKF9jb2xvckFkYXB0ZXIpO1xyXG4gIH1cclxuXHJcbiAgY29tcGxlbWVudGFyeVBhbGV0dGVGbiA9IChjb2xvcjogQ29sb3IpOiBQYWxldHRlQ29sb3JbXSA9PiB7XHJcbiAgICBjb25zdCBjb21wbGVtZW50YXJ5Q29sb3IgPSBjb21wbGVtZW50YXJ5KGNvbG9yKTtcclxuICAgIHJldHVybiBjYWxjdWxhdGVTaGFkZXMoY29tcGxlbWVudGFyeUNvbG9yKTtcclxuICB9O1xyXG5cclxuICBzcGxpdENvbXBsZW1lbnRhcnlQYWxldHRlRm4gPSAoY29sb3I6IENvbG9yKTogUGFsZXR0ZUNvbG9yW10gPT4ge1xyXG4gICAgY29uc3Qgc3BsaXRDb21wbGVtZW50YXJ5Q29sb3IgPSBzcGxpdENvbXBsZW1lbnRhcnkoY29sb3IpWzBdO1xyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZVNoYWRlcyhzcGxpdENvbXBsZW1lbnRhcnlDb2xvcik7XHJcbiAgfTtcclxuICBzcGxpdENvbXBsZW1lbnRhcnlQYWxldHRlRm4xID0gKGNvbG9yOiBDb2xvcik6IFBhbGV0dGVDb2xvcltdID0+IHtcclxuICAgIGNvbnN0IHNwbGl0Q29tcGxlbWVudGFyeUNvbG9yID0gc3BsaXRDb21wbGVtZW50YXJ5KGNvbG9yKVsxXTtcclxuICAgIHJldHVybiBjYWxjdWxhdGVTaGFkZXMoc3BsaXRDb21wbGVtZW50YXJ5Q29sb3IpO1xyXG4gIH07XHJcblxyXG4gIGFuYWxvZ291czFQYWxldHRlRm4gPSAoY29sb3I6IENvbG9yKTogUGFsZXR0ZUNvbG9yW10gPT4ge1xyXG4gICAgY29uc3QgYW5hbG9nb3VzQ29sb3IgPSBhbmFsb2dvdXMoY29sb3IpWzBdO1xyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZVNoYWRlcyhhbmFsb2dvdXNDb2xvcik7XHJcbiAgfTtcclxuICBhbmFsb2dvdXMyUGFsZXR0ZUZuID0gKGNvbG9yOiBDb2xvcik6IFBhbGV0dGVDb2xvcltdID0+IHtcclxuICAgIGNvbnN0IGFuYWxvZ291c0NvbG9yID0gYW5hbG9nb3VzKGNvbG9yKVsxXTtcclxuICAgIHJldHVybiBjYWxjdWxhdGVTaGFkZXMoYW5hbG9nb3VzQ29sb3IpO1xyXG4gIH07XHJcblxyXG4gIHRyaWFkaWMxUGFsZXR0ZUZuID0gKGNvbG9yOiBDb2xvcik6IFBhbGV0dGVDb2xvcltdID0+IHtcclxuICAgIGNvbnN0IHRyaWFkaWNDb2xvciA9IHRyaWFkaWMoY29sb3IpWzBdO1xyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZVNoYWRlcyh0cmlhZGljQ29sb3IpO1xyXG4gIH07XHJcbiAgdHJpYWRpYzJQYWxldHRlRm4gPSAoY29sb3I6IENvbG9yKTogUGFsZXR0ZUNvbG9yW10gPT4ge1xyXG4gICAgY29uc3QgdHJpYWRpY0NvbG9yID0gdHJpYWRpYyhjb2xvcilbMV07XHJcbiAgICByZXR1cm4gY2FsY3VsYXRlU2hhZGVzKHRyaWFkaWNDb2xvcik7XHJcbiAgfTtcclxuICB0ZXRyYWRpYzFQYWxldHRlRm4gPSAoY29sb3I6IENvbG9yKTogUGFsZXR0ZUNvbG9yW10gPT4ge1xyXG4gICAgY29uc3QgdGV0cmFkaWNDb2xvciA9IHRldHJhZGljKGNvbG9yKVswXTtcclxuICAgIHJldHVybiBjYWxjdWxhdGVTaGFkZXModGV0cmFkaWNDb2xvcik7XHJcbiAgfTtcclxuICB0ZXRyYWRpYzJQYWxldHRlRm4gPSAoY29sb3I6IENvbG9yKTogUGFsZXR0ZUNvbG9yW10gPT4ge1xyXG4gICAgY29uc3QgdGV0cmFkaWNDb2xvciA9IHRldHJhZGljKGNvbG9yKVsxXTtcclxuICAgIHJldHVybiBjYWxjdWxhdGVTaGFkZXModGV0cmFkaWNDb2xvcik7XHJcbiAgfTtcclxuICB0ZXRyYWRpYzNQYWxldHRlRm4gPSAoY29sb3I6IENvbG9yKTogUGFsZXR0ZUNvbG9yW10gPT4ge1xyXG4gICAgY29uc3QgdGV0cmFkaWNDb2xvciA9IHRldHJhZGljKGNvbG9yKVsyXTtcclxuICAgIHJldHVybiBjYWxjdWxhdGVTaGFkZXModGV0cmFkaWNDb2xvcik7XHJcbiAgfTtcclxufVxyXG4iLCI8bGFiZWw+Q29tcGxlbWVudGFyeTo8L2xhYmVsPlxuPG1uai1ncmlkLXNlbGVjdG9yXG4gIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiXG4gIFtwYWxldHRlR2VuZXJhdG9yRm5dPVwiY29tcGxlbWVudGFyeVBhbGV0dGVGblwiXG4gIChjb2xvclNlbGVjdGVkKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuPjwvbW5qLWdyaWQtc2VsZWN0b3I+XG5cbjxsYWJlbD5TcGxpdCBDb21wbGVtZW50YXJ5OjwvbGFiZWw+XG48bW5qLWdyaWQtc2VsZWN0b3JcbiAgW2NvbG9yXT1cImFjdGl2ZUNvbG9yXCJcbiAgW3BhbGV0dGVHZW5lcmF0b3JGbl09XCJzcGxpdENvbXBsZW1lbnRhcnlQYWxldHRlRm5cIlxuICAoY29sb3JTZWxlY3RlZCk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcbj48L21uai1ncmlkLXNlbGVjdG9yPlxuPG1uai1ncmlkLXNlbGVjdG9yXG4gIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiXG4gIFtwYWxldHRlR2VuZXJhdG9yRm5dPVwic3BsaXRDb21wbGVtZW50YXJ5UGFsZXR0ZUZuMVwiXG4gIChjb2xvclNlbGVjdGVkKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuPjwvbW5qLWdyaWQtc2VsZWN0b3I+XG5cbjxsYWJlbD5BbmFsb2dvdXM6PC9sYWJlbD5cbjxtbmotZ3JpZC1zZWxlY3RvclxuICBbY29sb3JdPVwiYWN0aXZlQ29sb3JcIlxuICBbcGFsZXR0ZUdlbmVyYXRvckZuXT1cImFuYWxvZ291czFQYWxldHRlRm5cIlxuICAoY29sb3JTZWxlY3RlZCk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcbj48L21uai1ncmlkLXNlbGVjdG9yPlxuPG1uai1ncmlkLXNlbGVjdG9yXG4gIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiXG4gIFtwYWxldHRlR2VuZXJhdG9yRm5dPVwiYW5hbG9nb3VzMlBhbGV0dGVGblwiXG4gIChjb2xvclNlbGVjdGVkKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuPjwvbW5qLWdyaWQtc2VsZWN0b3I+XG5cbjxsYWJlbD5UcmlhZGljOjwvbGFiZWw+XG48bW5qLWdyaWQtc2VsZWN0b3JcbiAgW2NvbG9yXT1cImFjdGl2ZUNvbG9yXCJcbiAgW3BhbGV0dGVHZW5lcmF0b3JGbl09XCJ0cmlhZGljMVBhbGV0dGVGblwiXG4gIChjb2xvclNlbGVjdGVkKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuPjwvbW5qLWdyaWQtc2VsZWN0b3I+XG48bW5qLWdyaWQtc2VsZWN0b3JcbiAgW2NvbG9yXT1cImFjdGl2ZUNvbG9yXCJcbiAgW3BhbGV0dGVHZW5lcmF0b3JGbl09XCJ0cmlhZGljMlBhbGV0dGVGblwiXG4gIChjb2xvclNlbGVjdGVkKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuPjwvbW5qLWdyaWQtc2VsZWN0b3I+XG5cbjxsYWJlbD5UZXRyYWRpYzo8L2xhYmVsPlxuPG1uai1ncmlkLXNlbGVjdG9yXG4gIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiXG4gIFtwYWxldHRlR2VuZXJhdG9yRm5dPVwidGV0cmFkaWMxUGFsZXR0ZUZuXCJcbiAgKGNvbG9yU2VsZWN0ZWQpPVwiY2hhbmdlQ29sb3IoJGV2ZW50KVwiXG4+PC9tbmotZ3JpZC1zZWxlY3Rvcj5cbjxtbmotZ3JpZC1zZWxlY3RvclxuICBbY29sb3JdPVwiYWN0aXZlQ29sb3JcIlxuICBbcGFsZXR0ZUdlbmVyYXRvckZuXT1cInRldHJhZGljMlBhbGV0dGVGblwiXG4gIChjb2xvclNlbGVjdGVkKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuPjwvbW5qLWdyaWQtc2VsZWN0b3I+XG48bW5qLWdyaWQtc2VsZWN0b3JcbiAgW2NvbG9yXT1cImFjdGl2ZUNvbG9yXCJcbiAgW3BhbGV0dGVHZW5lcmF0b3JGbl09XCJ0ZXRyYWRpYzNQYWxldHRlRm5cIlxuICAoY29sb3JTZWxlY3RlZCk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcbj48L21uai1ncmlkLXNlbGVjdG9yPlxuIl19