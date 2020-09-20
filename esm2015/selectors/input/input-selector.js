import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
const _c0 = ["colorInput"];
export class MnjInputSelector {
    constructor(colorAdapter) {
        this.colorAdapter = colorAdapter;
        this._colorFormat = 'HEX';
        this.inputChange = new EventEmitter();
        this._formats = ['HEX', 'RGB', 'HSL', 'HWB', 'CMYK'];
        this._selectedIndex = 0;
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
    set colorFormat(value) {
        if (value !== this._colorFormat) {
            this._colorFormat = value;
            this._selectedIndex = this._formats.indexOf(value);
        }
    }
    get colorString() {
        return this.colorAdapter.format(this.color, this._colorFormat, this.color.alpha !== 1);
    }
    changeColor(event) {
        const colorString = event.target.value;
        const color = this.colorAdapter.parse(colorString);
        if (this.colorAdapter.isValid(color)) {
            this.inputChange.emit(color);
        }
    }
    nextFormat() {
        this._selectedIndex = (this._selectedIndex + this._formats.length + 1) % this._formats.length;
        this.colorFormat = this._formats[this._selectedIndex];
    }
    previousFormat() {
        this._selectedIndex = (this._selectedIndex + this._formats.length - 1) % this._formats.length;
        this.colorFormat = this._formats[this._selectedIndex];
    }
    _handleKeydownEvent(event) {
        switch (event.keyCode) {
            case UP_ARROW:
            case LEFT_ARROW:
                this.previousFormat();
                break;
            case DOWN_ARROW:
            case RIGHT_ARROW:
                this.nextFormat();
                break;
            default:
                return;
        }
    }
}
MnjInputSelector.ɵfac = function MnjInputSelector_Factory(t) { return new (t || MnjInputSelector)(i0.ɵɵdirectiveInject(i1.ColorAdapter)); };
MnjInputSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjInputSelector, selectors: [["mnj-input-selector"]], viewQuery: function MnjInputSelector_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.colorInput = _t.first);
    } }, hostAttrs: [1, "mnj-input-selector"], hostBindings: function MnjInputSelector_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function MnjInputSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", colorFormat: "colorFormat" }, outputs: { inputChange: "inputChange" }, decls: 6, vars: 1, consts: [[1, "mnj-input-selector__container"], ["type", "text", "autocorrect", "off", "autocomplete", "off", "spellcheck", "false", "aria-label", "Color code", 1, "color-input", 3, "value", "change"], ["colorInput", ""], [1, "mnj-input-selector__container__switch-buttons"], [1, "switch-buttons--prev", 3, "click"], [1, "switch-buttons--next", 3, "click"]], template: function MnjInputSelector_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("change", function MnjInputSelector_Template_input_change_1_listener($event) { return ctx.changeColor($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵlistener("click", function MnjInputSelector_Template_span_click_4_listener() { return ctx.previousFormat(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 5);
        i0.ɵɵlistener("click", function MnjInputSelector_Template_span_click_5_listener() { return ctx.nextFormat(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.colorString);
    } }, styles: [".mnj-input-selector{width:100%}.mnj-input-selector__container{display:flex;grid-gap:5px}.mnj-input-selector__container .color-input{border:none;border-bottom:1px solid;flex:1 0 auto;font-size:inherit;height:24px;padding:6px 8px;text-transform:uppercase}.mnj-input-selector__container .color-input:focus{border-bottom:1px solid;outline:none}.mnj-input-selector__container__switch-buttons{display:flex;flex-flow:column nowrap}.mnj-input-selector__container__switch-buttons .switch-buttons--next,.mnj-input-selector__container__switch-buttons .switch-buttons--prev{height:10px;position:relative;width:10px}.mnj-input-selector__container__switch-buttons .switch-buttons--next:after,.mnj-input-selector__container__switch-buttons .switch-buttons--prev:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0}[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--next,[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--prev{transform:rotate(180deg)}.mnj-input-selector__container__switch-buttons .switch-buttons--prev:after{border-left-width:2px;transform:translateY(4px) rotate(45deg)}.mnj-input-selector__container__switch-buttons .switch-buttons--next:after{border-right-width:2px;transform:translateY(4px) rotate(135deg)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjInputSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-input-selector',
                templateUrl: 'input-selector.html',
                styleUrls: ['input-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'mnj-input-selector',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }]; }, { color: [{
            type: Input
        }], colorFormat: [{
            type: Input
        }], inputChange: [{
            type: Output
        }], colorInput: [{
            type: ViewChild,
            args: ['colorInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvc2VsZWN0b3JzL2lucHV0L2lucHV0LXNlbGVjdG9yLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9pbnB1dC9pbnB1dC1zZWxlY3Rvci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7O0FBZ0J2QixNQUFNLE9BQU8sZ0JBQWdCO0lBbUMzQixZQUFtQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWJyQyxpQkFBWSxHQUFnQixLQUFLLENBQUM7UUFFaEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBUTFDLGFBQVEsR0FBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsbUJBQWMsR0FBRyxDQUFDLENBQUM7SUFFcUIsQ0FBQztJQWxDakQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFZO1FBQ3BCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNsRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFH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QjtpQkFDM0M7YUFDRjsrREFHSyxLQUFLO2tCQURSLEtBQUs7WUFjRixXQUFXO2tCQURkLEtBQUs7WUFVSSxXQUFXO2tCQUFwQixNQUFNO1lBRWtCLFVBQVU7a0JBQWxDLFNBQVM7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPV05fQVJST1csIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvcic7XG5pbXBvcnQgeyBDb2xvckFkYXB0ZXIgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvci1hZGFwdGVyJztcbmltcG9ydCB7IENvbG9yRm9ybWF0IH0gZnJvbSAnLi4vLi4vY29sb3IvY29sb3Itc3BhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW5qLWlucHV0LXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1zZWxlY3Rvci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LXNlbGVjdG9yLnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ21uai1pbnB1dC1zZWxlY3RvcicsXG4gICAgJyhrZXlkb3duKSc6ICdfaGFuZGxlS2V5ZG93bkV2ZW50KCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNbmpJbnB1dFNlbGVjdG9yIHtcbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IENvbG9yIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbHVlOiBDb2xvcikge1xuICAgIGlmICh0aGlzLmNvbG9yQWRhcHRlci5zYW1lQ29sb3IodGhpcy5jb2xvciwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9jb2xvcjogQ29sb3I7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yRm9ybWF0KHZhbHVlOiBDb2xvckZvcm1hdCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29sb3JGb3JtYXQpIHtcbiAgICAgIHRoaXMuX2NvbG9yRm9ybWF0ID0gdmFsdWU7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fZm9ybWF0cy5pbmRleE9mKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb2xvckZvcm1hdDogQ29sb3JGb3JtYXQgPSAnSEVYJztcblxuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbG9ySW5wdXQnKSBjb2xvcklucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIGdldCBjb2xvclN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvckFkYXB0ZXIuZm9ybWF0KHRoaXMuY29sb3IsIHRoaXMuX2NvbG9yRm9ybWF0LCB0aGlzLmNvbG9yLmFscGhhICE9PSAxKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Zvcm1hdHM6IENvbG9yRm9ybWF0W10gPSBbJ0hFWCcsICdSR0InLCAnSFNMJywgJ0hXQicsICdDTVlLJ107XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2xvckFkYXB0ZXI6IENvbG9yQWRhcHRlcikge31cblxuICBjaGFuZ2VDb2xvcihldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBjb2xvclN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpLnZhbHVlO1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvckFkYXB0ZXIucGFyc2UoY29sb3JTdHJpbmcpO1xuICAgIGlmICh0aGlzLmNvbG9yQWRhcHRlci5pc1ZhbGlkKGNvbG9yKSkge1xuICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBuZXh0Rm9ybWF0KCkge1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAodGhpcy5fc2VsZWN0ZWRJbmRleCArIHRoaXMuX2Zvcm1hdHMubGVuZ3RoICsgMSkgJSB0aGlzLl9mb3JtYXRzLmxlbmd0aDtcbiAgICB0aGlzLmNvbG9yRm9ybWF0ID0gdGhpcy5fZm9ybWF0c1t0aGlzLl9zZWxlY3RlZEluZGV4XTtcbiAgfVxuXG4gIHByZXZpb3VzRm9ybWF0KCkge1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAodGhpcy5fc2VsZWN0ZWRJbmRleCArIHRoaXMuX2Zvcm1hdHMubGVuZ3RoIC0gMSkgJSB0aGlzLl9mb3JtYXRzLmxlbmd0aDtcbiAgICB0aGlzLmNvbG9yRm9ybWF0ID0gdGhpcy5fZm9ybWF0c1t0aGlzLl9zZWxlY3RlZEluZGV4XTtcbiAgfVxuXG4gIF9oYW5kbGVLZXlkb3duRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICAgIHRoaXMucHJldmlvdXNGb3JtYXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLm5leHRGb3JtYXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibW5qLWlucHV0LXNlbGVjdG9yX19jb250YWluZXJcIj5cbiAgPGlucHV0XG4gICAgI2NvbG9ySW5wdXRcbiAgICBjbGFzcz1cImNvbG9yLWlucHV0XCJcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICBhcmlhLWxhYmVsPVwiQ29sb3IgY29kZVwiXG4gICAgW3ZhbHVlXT1cImNvbG9yU3RyaW5nXCJcbiAgICAoY2hhbmdlKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuICAvPlxuICA8ZGl2IGNsYXNzPVwibW5qLWlucHV0LXNlbGVjdG9yX19jb250YWluZXJfX3N3aXRjaC1idXR0b25zXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJzd2l0Y2gtYnV0dG9ucy0tcHJldlwiIChjbGljayk9XCJwcmV2aW91c0Zvcm1hdCgpXCI+XG4gICAgICA8IS0tIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTIzLjI1IDIwTDEyIDUuNjMuNzggMjAgMCAxOS4zOCAxMiA0bDEyIDE1LjQtLjc2LjZ6XCIgLz5cbiAgICAgIDwvc3ZnPiAtLT5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJzd2l0Y2gtYnV0dG9ucy0tbmV4dFwiIChjbGljayk9XCJuZXh0Rm9ybWF0KClcIj5cbiAgICAgIDwhLS0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjMuMjUgNEwxMiAxOC4zNy43OCA0IDAgNC42MiAxMiAyMCAyNCA0LjZsLS43Ni0uNnpcIiAvPlxuICAgICAgPC9zdmc+IC0tPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==