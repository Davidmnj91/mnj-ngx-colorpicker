import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ColorPickerView } from '../colorpicker-view';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "../../selectors/grid/grid-selector";
export class MnjPalettePickerView {
    constructor(_colorAdapter) {
        this._colorAdapter = _colorAdapter;
        this.paletteFn = () => this.palette;
        // tslint:disable-next-line: member-ordering
        this.activeColorChange = new EventEmitter();
    }
    get activeColor() {
        return this._activeColor;
    }
    set activeColor(value) {
        const oldActiveColor = this._activeColor;
        if (this._colorAdapter.isValid(value) && !this._colorAdapter.sameColor(oldActiveColor, value)) {
            this._activeColor = value;
            this._selectColorInPalette();
        }
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        if (this._colorAdapter.sameColor(this.selected, value)) {
            return;
        }
        this._selected = this._colorAdapter.getValidColorOrNull(value);
        this._selectColorInPalette();
    }
    get palette() {
        return this._palette;
    }
    set palette(value) {
        this._palette = value;
        this._selectColorInPalette();
    }
    changeColor(value) {
        this.activeColor = value;
        this.activeColorChange.emit(this.activeColor);
    }
    _selectColorInPalette() {
        if (!this.palette || !this.activeColor) {
            return;
        }
        const defaultSelected = this.palette.findIndex((p) => p.active === true);
        if (defaultSelected >= 0) {
            this._palette[defaultSelected].active = false;
        }
        let matchIndex = this.palette.findIndex((p) => this._colorAdapter.sameColor(p.color, this.activeColor));
        // If no match select the first one for keyboard accesibility
        matchIndex = Math.max(0, matchIndex);
        this._palette[matchIndex].active = true;
    }
}
MnjPalettePickerView.ɵfac = function MnjPalettePickerView_Factory(t) { return new (t || MnjPalettePickerView)(i0.ɵɵdirectiveInject(i1.ColorAdapter)); };
MnjPalettePickerView.ɵcmp = i0.ɵɵdefineComponent({ type: MnjPalettePickerView, selectors: [["mnj-palette-picker-view"]], hostAttrs: [1, "mnj-palette-picker-view"], inputs: { activeColor: "activeColor", selected: "selected", palette: "palette" }, outputs: { activeColorChange: "activeColorChange" }, exportAs: ["mnjPalettePickerView"], features: [i0.ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjPalettePickerView }])], decls: 1, vars: 2, consts: [["columns", "6", 3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjPalettePickerView_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mnj-grid-selector", 0);
        i0.ɵɵlistener("colorSelected", function MnjPalettePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.paletteFn);
    } }, directives: [i2.MnjGridSelector], styles: [".mnj-palette-picker-view{display:block}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjPalettePickerView, [{
        type: Component,
        args: [{
                selector: 'mnj-palette-picker-view',
                templateUrl: 'palette-view.html',
                styleUrls: ['palette-view.scss'],
                exportAs: 'mnjPalettePickerView',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjPalettePickerView }],
                host: {
                    class: 'mnj-palette-picker-view',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }]; }, { activeColor: [{
            type: Input
        }], selected: [{
            type: Input
        }], palette: [{
            type: Input
        }], activeColorChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsZXR0ZS12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3ZpZXdzL3BhbGV0dGUvcGFsZXR0ZS12aWV3LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3ZpZXdzL3BhbGV0dGUvcGFsZXR0ZS12aWV3Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFjdEQsTUFBTSxPQUFPLG9CQUFvQjtJQTJDL0IsWUFBc0IsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFMakQsY0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFL0IsNENBQTRDO1FBQ3pCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFFYixDQUFDO0lBMUNyRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQVk7UUFDMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzdGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO0lBQ0gs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ZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3IsIFBhbGV0dGVDb2xvciB9IGZyb20gJy4uLy4uL2NvbG9yJztcclxuaW1wb3J0IHsgQ29sb3JBZGFwdGVyIH0gZnJvbSAnLi4vLi4vY29sb3IvY29sb3ItYWRhcHRlcic7XHJcbmltcG9ydCB7IENvbG9yUGlja2VyVmlldyB9IGZyb20gJy4uL2NvbG9ycGlja2VyLXZpZXcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtbmotcGFsZXR0ZS1waWNrZXItdmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWxldHRlLXZpZXcuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3BhbGV0dGUtdmlldy5zY3NzJ10sXHJcbiAgZXhwb3J0QXM6ICdtbmpQYWxldHRlUGlja2VyVmlldycsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENvbG9yUGlja2VyVmlldywgdXNlRXhpc3Rpbmc6IE1ualBhbGV0dGVQaWNrZXJWaWV3IH1dLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbW5qLXBhbGV0dGUtcGlja2VyLXZpZXcnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNbmpQYWxldHRlUGlja2VyVmlldyBpbXBsZW1lbnRzIENvbG9yUGlja2VyVmlldyB7XHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlQ29sb3IoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbG9yO1xyXG4gIH1cclxuICBzZXQgYWN0aXZlQ29sb3IodmFsdWU6IENvbG9yKSB7XHJcbiAgICBjb25zdCBvbGRBY3RpdmVDb2xvciA9IHRoaXMuX2FjdGl2ZUNvbG9yO1xyXG4gICAgaWYgKHRoaXMuX2NvbG9yQWRhcHRlci5pc1ZhbGlkKHZhbHVlKSAmJiAhdGhpcy5fY29sb3JBZGFwdGVyLnNhbWVDb2xvcihvbGRBY3RpdmVDb2xvciwgdmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX3NlbGVjdENvbG9ySW5QYWxldHRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgX2FjdGl2ZUNvbG9yOiBDb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWQoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2NvbG9yQWRhcHRlci5zYW1lQ29sb3IodGhpcy5zZWxlY3RlZCwgdmFsdWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fY29sb3JBZGFwdGVyLmdldFZhbGlkQ29sb3JPck51bGwodmFsdWUpO1xyXG4gICAgdGhpcy5fc2VsZWN0Q29sb3JJblBhbGV0dGUoKTtcclxuICB9XHJcbiAgX3NlbGVjdGVkOiBDb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgcGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFsZXR0ZTtcclxuICB9XHJcbiAgc2V0IHBhbGV0dGUodmFsdWU6IFBhbGV0dGVDb2xvcltdKSB7XHJcbiAgICB0aGlzLl9wYWxldHRlID0gdmFsdWU7XHJcbiAgICB0aGlzLl9zZWxlY3RDb2xvckluUGFsZXR0ZSgpO1xyXG4gIH1cclxuICBwcml2YXRlIF9wYWxldHRlOiBQYWxldHRlQ29sb3JbXTtcclxuXHJcbiAgcGFsZXR0ZUZuID0gKCkgPT4gdGhpcy5wYWxldHRlO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhY3RpdmVDb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfY29sb3JBZGFwdGVyOiBDb2xvckFkYXB0ZXIpIHt9XHJcblxyXG4gIGNoYW5nZUNvbG9yKHZhbHVlOiBDb2xvcikge1xyXG4gICAgdGhpcy5hY3RpdmVDb2xvciA9IHZhbHVlO1xyXG4gICAgdGhpcy5hY3RpdmVDb2xvckNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlQ29sb3IpO1xyXG4gIH1cclxuXHJcbiAgX3NlbGVjdENvbG9ySW5QYWxldHRlKCkge1xyXG4gICAgaWYgKCF0aGlzLnBhbGV0dGUgfHwgIXRoaXMuYWN0aXZlQ29sb3IpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVmYXVsdFNlbGVjdGVkID0gdGhpcy5wYWxldHRlLmZpbmRJbmRleCgocCkgPT4gcC5hY3RpdmUgPT09IHRydWUpO1xyXG4gICAgaWYgKGRlZmF1bHRTZWxlY3RlZCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuX3BhbGV0dGVbZGVmYXVsdFNlbGVjdGVkXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBtYXRjaEluZGV4ID0gdGhpcy5wYWxldHRlLmZpbmRJbmRleCgocCkgPT4gdGhpcy5fY29sb3JBZGFwdGVyLnNhbWVDb2xvcihwLmNvbG9yLCB0aGlzLmFjdGl2ZUNvbG9yKSk7XHJcbiAgICAvLyBJZiBubyBtYXRjaCBzZWxlY3QgdGhlIGZpcnN0IG9uZSBmb3Iga2V5Ym9hcmQgYWNjZXNpYmlsaXR5XHJcbiAgICBtYXRjaEluZGV4ID0gTWF0aC5tYXgoMCwgbWF0Y2hJbmRleCk7XHJcbiAgICB0aGlzLl9wYWxldHRlW21hdGNoSW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsIjxtbmotZ3JpZC1zZWxlY3RvclxyXG4gIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiXHJcbiAgW3BhbGV0dGVHZW5lcmF0b3JGbl09XCJwYWxldHRlRm5cIlxyXG4gIGNvbHVtbnM9XCI2XCJcclxuICAoY29sb3JTZWxlY3RlZCk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcclxuPjwvbW5qLWdyaWQtc2VsZWN0b3I+XHJcbiJdfQ==