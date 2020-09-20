import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../color/color-adapter";
/** Pure abstract class due the impossibility to add decorators to interfaces */
export class ColorPickerView {
    constructor() {
        /**
         * Emits the color chosen in any view.
         * This doesn't imply a change on the selected color.
         */
        this.activeColorChange = new EventEmitter();
    }
}
ColorPickerView.ɵfac = function ColorPickerView_Factory(t) { return new (t || ColorPickerView)(); };
ColorPickerView.ɵdir = i0.ɵɵdefineDirective({ type: ColorPickerView });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ColorPickerView, [{
        type: Directive
    }], null, null); })();
export class BaseColorpickerView {
    constructor(_colorAdapter) {
        this._colorAdapter = _colorAdapter;
        this.activeColorChange = new EventEmitter();
    }
    /**
     * The color to display in this armonies view.
     */
    get activeColor() {
        return this._activeColor;
    }
    set activeColor(value) {
        const oldActiveColor = this._activeColor;
        if (this._colorAdapter.isValid(value) && !this._colorAdapter.sameColor(oldActiveColor, value)) {
            this._activeColor = value;
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
    }
    changeColor(value) {
        this.activeColor = value;
        this.activeColorChange.emit(this.activeColor);
    }
}
BaseColorpickerView.ɵfac = function BaseColorpickerView_Factory(t) { return new (t || BaseColorpickerView)(i0.ɵɵdirectiveInject(i1.ColorAdapter)); };
BaseColorpickerView.ɵdir = i0.ɵɵdefineDirective({ type: BaseColorpickerView, inputs: { activeColor: "activeColor", selected: "selected" }, outputs: { activeColorChange: "activeColorChange" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseColorpickerView, [{
        type: Directive
    }], function () { return [{ type: i1.ColorAdapter }]; }, { activeColor: [{
            type: Input
        }], selected: [{
            type: Input
        }], activeColorChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi92aWV3cy9jb2xvcnBpY2tlci12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUl2RSxnRkFBZ0Y7QUFFaEYsTUFBTSxPQUFnQixlQUFlO0lBRHJDO1FBV0U7OztXQUdHO1FBQ00sc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztLQUN4RDs7OEVBZnFCLGVBQWU7b0RBQWYsZUFBZTtrREFBZixlQUFlO2NBRHBDLFNBQVM7O0FBbUJWLE1BQU0sT0FBZ0IsbUJBQW1CO0lBK0J2QyxZQUFzQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUY5QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBRWIsQ0FBQztJQTlCckQ7O09BRUc7SUFDSCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQVk7UUFDMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzdGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUdELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBWTtRQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDdEQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFPRCxXQUFXLENBQUMsS0FBWTtRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOztzRkFwQ21CLG1CQUFtQjt3REFBbkIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEeEMsU0FBUzsrREFNSixXQUFXO2tCQURkLEtBQUs7WUFhRixRQUFRO2tCQURYLEtBQUs7WUFhYSxpQkFBaUI7a0JBQW5DLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL2NvbG9yL2NvbG9yJztcclxuaW1wb3J0IHsgQ29sb3JBZGFwdGVyIH0gZnJvbSAnLi4vY29sb3IvY29sb3ItYWRhcHRlcic7XHJcblxyXG4vKiogUHVyZSBhYnN0cmFjdCBjbGFzcyBkdWUgdGhlIGltcG9zc2liaWxpdHkgdG8gYWRkIGRlY29yYXRvcnMgdG8gaW50ZXJmYWNlcyAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbG9yUGlja2VyVmlldyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGN1cnJlbnQgYWN0aXZlIGNvbG9yLiBUaGlzIGRldGVybWluZXMgd2hpY2ggY29sb3IgaXNcclxuICAgKiBoaWdobGlnaHRlZCB3aGVuIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICovXHJcbiAgYWN0aXZlQ29sb3I6IENvbG9yO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvci4gKi9cclxuICBzZWxlY3RlZDogQ29sb3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIHRoZSBjb2xvciBjaG9zZW4gaW4gYW55IHZpZXcuXHJcbiAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBjb2xvci5cclxuICAgKi9cclxuICByZWFkb25seSBhY3RpdmVDb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KCk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbG9ycGlja2VyVmlldyBpbXBsZW1lbnRzIENvbG9yUGlja2VyVmlldyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbG9yIHRvIGRpc3BsYXkgaW4gdGhpcyBhcm1vbmllcyB2aWV3LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZUNvbG9yKCk6IENvbG9yIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDb2xvcjtcclxuICB9XHJcbiAgc2V0IGFjdGl2ZUNvbG9yKHZhbHVlOiBDb2xvcikge1xyXG4gICAgY29uc3Qgb2xkQWN0aXZlQ29sb3IgPSB0aGlzLl9hY3RpdmVDb2xvcjtcclxuICAgIGlmICh0aGlzLl9jb2xvckFkYXB0ZXIuaXNWYWxpZCh2YWx1ZSkgJiYgIXRoaXMuX2NvbG9yQWRhcHRlci5zYW1lQ29sb3Iob2xkQWN0aXZlQ29sb3IsIHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9hY3RpdmVDb2xvciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIF9hY3RpdmVDb2xvcjogQ29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IENvbG9yIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9jb2xvckFkYXB0ZXIuc2FtZUNvbG9yKHRoaXMuc2VsZWN0ZWQsIHZhbHVlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX2NvbG9yQWRhcHRlci5nZXRWYWxpZENvbG9yT3JOdWxsKHZhbHVlKTtcclxuICB9XHJcbiAgX3NlbGVjdGVkOiBDb2xvcjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFjdGl2ZUNvbG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9jb2xvckFkYXB0ZXI6IENvbG9yQWRhcHRlcikge31cclxuXHJcbiAgY2hhbmdlQ29sb3IodmFsdWU6IENvbG9yKSB7XHJcbiAgICB0aGlzLmFjdGl2ZUNvbG9yID0gdmFsdWU7XHJcbiAgICB0aGlzLmFjdGl2ZUNvbG9yQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVDb2xvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==