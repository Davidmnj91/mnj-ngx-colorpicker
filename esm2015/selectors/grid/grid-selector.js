import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW, END, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, SPACE, UP_ARROW, } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { clamp } from '../../color/color';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "@angular/common";
function MnjGridSelector_li_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleMap(ctx_r2.thumbSize());
} }
function MnjGridSelector_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵlistener("click", function MnjGridSelector_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r4); const cell_r1 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.selectColor(cell_r1); });
    i0.ɵɵtemplate(1, MnjGridSelector_li_1_div_1_Template, 2, 2, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(ctx_r0.cellSize());
    i0.ɵɵstyleProp("background", ctx_r0.cssColor(cell_r1.color));
    i0.ɵɵproperty("title", cell_r1.title);
    i0.ɵɵattribute("tabIndex", cell_r1.active ? 0 : -1)("aria-label", cell_r1.title)("aria-selected", cell_r1.active);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", cell_r1.active);
} }
export class MnjGridSelector {
    constructor(colorAdapter, _elementRef, _changeDetectorRef) {
        this.colorAdapter = colorAdapter;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.colorSelected = new EventEmitter();
        this.grid = [];
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this.colorAdapter.sameColor(this.color, value)) {
            return;
        }
        this._color = value;
        this._buildPalette();
    }
    get paletteGeneratorFn() {
        return this._paletteGeneratorFn;
    }
    set paletteGeneratorFn(value) {
        this._paletteGeneratorFn = value;
        this._buildPalette();
    }
    get columns() {
        return this._columns || 10;
    }
    set columns(value) {
        value = coerceNumberProperty(value);
        if (this._columns !== value) {
            this._columns = value;
            this._calculateCellSize();
        }
    }
    cssColor(color) {
        return this.colorAdapter.toRgbString(color);
    }
    cellSize() {
        return { width: `${this._cellSize}px`, height: `${this._cellSize}px` };
    }
    thumbSize() {
        return { width: `${this._thumbSize}px`, height: `${this._thumbSize}px` };
    }
    gridStyle() {
        return {
            gridTemplateColumns: `repeat(${this.columns}, auto)`,
            gridGap: `${0.25 * this._cellSize}px`,
            padding: `${(this._cellSize * 0.25) / 2}px 0px`,
        };
    }
    ngAfterViewInit() {
        this._calculateCellSize();
        this._changeDetectorRef.markForCheck();
    }
    _buildPalette() {
        if (this.paletteGeneratorFn && this.color) {
            this.grid = this.paletteGeneratorFn(this.color);
            this._selectedIndex = this.grid.findIndex((cell) => cell.active);
            this._calculateCellSize();
            this._changeDetectorRef.markForCheck();
        }
    }
    _calculateCellSize() {
        if (this._elementRef) {
            const { width } = this._elementRef.nativeElement.getBoundingClientRect();
            const cells = this.columns + this.columns * 0.25 + 1; // Columns per row + (Columns-1/2) spaces in each size of each Column
            const cellSize = Math.trunc(width / cells);
            this._cellSize = cellSize % 2 === 0 ? cellSize : cellSize - 1;
            const thumbSize = Math.trunc(this._cellSize * 0.67);
            this._thumbSize = thumbSize % 2 === 0 ? thumbSize : thumbSize - 1;
        }
    }
    selectColor(shade) {
        const { color } = shade;
        this.colorSelected.emit(color);
    }
    _handleKeydownEvent(event) {
        const grid = this.grid;
        const oldActiveIndex = this._selectedIndex;
        let activeIndex = oldActiveIndex;
        switch (event.keyCode) {
            case LEFT_ARROW:
                activeIndex--;
                break;
            case RIGHT_ARROW:
                activeIndex++;
                break;
            case UP_ARROW:
                activeIndex -= this.columns;
                break;
            case DOWN_ARROW:
                activeIndex += this.columns;
                break;
            case PAGE_UP:
            case HOME:
                activeIndex = 0;
                break;
            case PAGE_DOWN:
            case END:
                activeIndex = grid.length - 1;
                break;
            case SPACE:
                event.preventDefault();
                this.selectColor(grid[activeIndex]);
                return;
            default:
                return;
        }
        activeIndex = clamp(0, grid.length - 1, activeIndex);
        const cells = Array.from(this._elementRef.nativeElement.querySelectorAll('.mnj-grid-selector__row--cell'));
        if (activeIndex !== this._selectedIndex) {
            cells[activeIndex].focus();
            this._selectedIndex = activeIndex;
        }
    }
}
MnjGridSelector.ɵfac = function MnjGridSelector_Factory(t) { return new (t || MnjGridSelector)(i0.ɵɵdirectiveInject(i1.ColorAdapter), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MnjGridSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjGridSelector, selectors: [["mnj-grid-selector"]], hostAttrs: ["role", "grid", 1, "mnj-grid-selector"], hostBindings: function MnjGridSelector_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function MnjGridSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", paletteGeneratorFn: "paletteGeneratorFn", columns: "columns" }, outputs: { colorSelected: "colorSelected" }, exportAs: ["mnjGridSelector"], decls: 2, vars: 3, consts: [[1, "mnj-grid-selector__row"], ["class", "mnj-grid-selector__row--cell", 3, "title", "background", "style", "click", 4, "ngFor", "ngForOf"], [1, "mnj-grid-selector__row--cell", 3, "title", "click"], ["class", "mnj-colorpicker-selector__thumb", 3, "style", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjGridSelector_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, MnjGridSelector_li_1_Template, 2, 9, "li", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.gridStyle());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.grid);
    } }, directives: [i2.NgForOf, i2.NgIf], styles: [".mnj-grid-selector{display:block;margin:2px 0 12px}.mnj-grid-selector__row{display:-ms-grid;display:grid;justify-content:space-evenly;list-style:none;margin:0}.mnj-grid-selector__row--cell{align-items:center;border-radius:100%;cursor:pointer;display:flex;justify-content:center}.mnj-grid-selector__row--cell:focus,.mnj-grid-selector__row--cell:hover{outline:none;transform:scale(1.5);z-index:1}.mnj-grid-selector .mnj-colorpicker-selector__thumb{position:relative;transform:none}.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner{position:relative}.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner:after{border:none;position:relative}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjGridSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-grid-selector',
                templateUrl: 'grid-selector.html',
                styleUrls: ['grid-selector.scss'],
                exportAs: 'mnjGridSelector',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'mnj-grid-selector',
                    role: 'grid',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], paletteGeneratorFn: [{
            type: Input
        }], columns: [{
            type: Input
        }], colorSelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi9zZWxlY3RvcnMvZ3JpZC9ncmlkLXNlbGVjdG9yLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3NlbGVjdG9ycy9ncmlkL2dyaWQtc2VsZWN0b3IuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsVUFBVSxFQUNWLEdBQUcsRUFDSCxJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFDVCxPQUFPLEVBQ1AsV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBdUIsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7SUNYM0QsOEJBQ0U7SUFBQSx5QkFBMEQ7SUFDNUQsaUJBQU07OztJQUYyRCxpQ0FBcUI7Ozs7SUFYeEYsNkJBV0U7SUFGQSxxTkFBMkI7SUFFM0IscUVBQ0U7SUFFSixpQkFBSzs7OztJQU5ILGdDQUFvQjtJQURwQiw0REFBeUM7SUFKekMscUNBQW9CO0lBQ3BCLG1EQUFzQyw2QkFBQSxpQ0FBQTtJQU9qQyxlQUFtQjtJQUFuQixxQ0FBbUI7O0FEMkI1QixNQUFNLE9BQU8sZUFBZTtJQXNFMUIsWUFDVSxZQUEwQixFQUMxQixXQUFvQyxFQUNwQyxrQkFBcUM7UUFGckMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLHVCQUFr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QVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsb0JBQW9CO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDakMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLG1CQUFtQjtvQkFDMUIsSUFBSSxFQUFFLE1BQU07b0JBQ1osV0FBVyxFQUFFLDZCQUE2QjtpQkFDM0M7YUFDRjt3SEFHSyxLQUFLO2tCQURSLEtBQUs7WUFjRixrQkFBa0I7a0JBRHJCLEtBQUs7WUFXRixPQUFPO2tCQURWLEtBQUs7WUFnQkMsYUFBYTtrQkFEbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIERPV05fQVJST1csXG4gIEVORCxcbiAgSE9NRSxcbiAgTEVGVF9BUlJPVyxcbiAgUEFHRV9ET1dOLFxuICBQQUdFX1VQLFxuICBSSUdIVF9BUlJPVyxcbiAgU1BBQ0UsXG4gIFVQX0FSUk9XLFxufSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2xhbXAsIENvbG9yLCBQYWxldHRlQ29sb3IgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvcic7XG5pbXBvcnQgeyBDb2xvckFkYXB0ZXIgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvci1hZGFwdGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW5qLWdyaWQtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtc2VsZWN0b3IuaHRtbCcsXG4gIHN0eWxlVXJsczogWydncmlkLXNlbGVjdG9yLnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdtbmpHcmlkU2VsZWN0b3InLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbW5qLWdyaWQtc2VsZWN0b3InLFxuICAgIHJvbGU6ICdncmlkJyxcbiAgICAnKGtleWRvd24pJzogJ19oYW5kbGVLZXlkb3duRXZlbnQoJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1uakdyaWRTZWxlY3RvciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBnZXQgY29sb3IoKTogQ29sb3Ige1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IENvbG9yKSB7XG4gICAgaWYgKHRoaXMuY29sb3JBZGFwdGVyLnNhbWVDb2xvcih0aGlzLmNvbG9yLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcbiAgICB0aGlzLl9idWlsZFBhbGV0dGUoKTtcbiAgfVxuICBwcml2YXRlIF9jb2xvcjogQ29sb3I7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhbGV0dGVHZW5lcmF0b3JGbigpOiAoY29sb3I6IENvbG9yKSA9PiBQYWxldHRlQ29sb3JbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhbGV0dGVHZW5lcmF0b3JGbjtcbiAgfVxuICBzZXQgcGFsZXR0ZUdlbmVyYXRvckZuKHZhbHVlOiAoY29sb3I6IENvbG9yKSA9PiBQYWxldHRlQ29sb3JbXSkge1xuICAgIHRoaXMuX3BhbGV0dGVHZW5lcmF0b3JGbiA9IHZhbHVlO1xuICAgIHRoaXMuX2J1aWxkUGFsZXR0ZSgpO1xuICB9XG4gIHByaXZhdGUgX3BhbGV0dGVHZW5lcmF0b3JGbjogKGNvbG9yOiBDb2xvcikgPT4gUGFsZXR0ZUNvbG9yW107XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbHVtbnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucyB8fCAxMDtcbiAgfVxuXG4gIHNldCBjb2x1bW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICB2YWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgICBpZiAodGhpcy5fY29sdW1ucyAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZUNlbGxTaXplKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29sdW1uczogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY29sb3JTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KCk7XG5cbiAgZ3JpZDogUGFsZXR0ZUNvbG9yW10gPSBbXTtcblxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgY3NzQ29sb3IoY29sb3I6IENvbG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JBZGFwdGVyLnRvUmdiU3RyaW5nKGNvbG9yKTtcbiAgfVxuXG4gIGNlbGxTaXplKCkge1xuICAgIHJldHVybiB7IHdpZHRoOiBgJHt0aGlzLl9jZWxsU2l6ZX1weGAsIGhlaWdodDogYCR7dGhpcy5fY2VsbFNpemV9cHhgIH07XG4gIH1cblxuICBwcml2YXRlIF9jZWxsU2l6ZTogbnVtYmVyO1xuXG4gIHRodW1iU2l6ZSgpIHtcbiAgICByZXR1cm4geyB3aWR0aDogYCR7dGhpcy5fdGh1bWJTaXplfXB4YCwgaGVpZ2h0OiBgJHt0aGlzLl90aHVtYlNpemV9cHhgIH07XG4gIH1cblxuICBwcml2YXRlIF90aHVtYlNpemU6IG51bWJlcjtcblxuICBncmlkU3R5bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoJHt0aGlzLmNvbHVtbnN9LCBhdXRvKWAsXG4gICAgICBncmlkR2FwOiBgJHswLjI1ICogdGhpcy5fY2VsbFNpemV9cHhgLFxuICAgICAgcGFkZGluZzogYCR7KHRoaXMuX2NlbGxTaXplICogMC4yNSkgLyAyfXB4IDBweGAsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29sb3JBZGFwdGVyOiBDb2xvckFkYXB0ZXIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2VsbFNpemUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9idWlsZFBhbGV0dGUoKSB7XG4gICAgaWYgKHRoaXMucGFsZXR0ZUdlbmVyYXRvckZuICYmIHRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucGFsZXR0ZUdlbmVyYXRvckZuKHRoaXMuY29sb3IpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHRoaXMuZ3JpZC5maW5kSW5kZXgoKGNlbGwpID0+IGNlbGwuYWN0aXZlKTtcblxuICAgICAgdGhpcy5fY2FsY3VsYXRlQ2VsbFNpemUoKTtcblxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgX2NhbGN1bGF0ZUNlbGxTaXplKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmKSB7XG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjZWxscyA9IHRoaXMuY29sdW1ucyArIHRoaXMuY29sdW1ucyAqIDAuMjUgKyAxOyAvLyBDb2x1bW5zIHBlciByb3cgKyAoQ29sdW1ucy0xLzIpIHNwYWNlcyBpbiBlYWNoIHNpemUgb2YgZWFjaCBDb2x1bW5cbiAgICAgIGNvbnN0IGNlbGxTaXplID0gTWF0aC50cnVuYyh3aWR0aCAvIGNlbGxzKTtcbiAgICAgIHRoaXMuX2NlbGxTaXplID0gY2VsbFNpemUgJSAyID09PSAwID8gY2VsbFNpemUgOiBjZWxsU2l6ZSAtIDE7XG5cbiAgICAgIGNvbnN0IHRodW1iU2l6ZSA9IE1hdGgudHJ1bmModGhpcy5fY2VsbFNpemUgKiAwLjY3KTtcbiAgICAgIHRoaXMuX3RodW1iU2l6ZSA9IHRodW1iU2l6ZSAlIDIgPT09IDAgPyB0aHVtYlNpemUgOiB0aHVtYlNpemUgLSAxO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdENvbG9yKHNoYWRlOiBQYWxldHRlQ29sb3IpIHtcbiAgICBjb25zdCB7IGNvbG9yIH0gPSBzaGFkZTtcbiAgICB0aGlzLmNvbG9yU2VsZWN0ZWQuZW1pdChjb2xvcik7XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bkV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICBjb25zdCBvbGRBY3RpdmVJbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gb2xkQWN0aXZlSW5kZXg7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgYWN0aXZlSW5kZXgtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICBhY3RpdmVJbmRleCsrO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIGFjdGl2ZUluZGV4IC09IHRoaXMuY29sdW1ucztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIGFjdGl2ZUluZGV4ICs9IHRoaXMuY29sdW1ucztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBBR0VfVVA6XG4gICAgICBjYXNlIEhPTUU6XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBBR0VfRE9XTjpcbiAgICAgIGNhc2UgRU5EOlxuICAgICAgICBhY3RpdmVJbmRleCA9IGdyaWQubGVuZ3RoIC0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdENvbG9yKGdyaWRbYWN0aXZlSW5kZXhdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2ZUluZGV4ID0gY2xhbXAoMCwgZ3JpZC5sZW5ndGggLSAxLCBhY3RpdmVJbmRleCk7XG4gICAgY29uc3QgY2VsbHM6IEhUTUxFbGVtZW50W10gPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tbmotZ3JpZC1zZWxlY3Rvcl9fcm93LS1jZWxsJylcbiAgICApO1xuICAgIGlmIChhY3RpdmVJbmRleCAhPT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xuICAgICAgY2VsbHNbYWN0aXZlSW5kZXhdLmZvY3VzKCk7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgfVxuICB9XG59XG4iLCI8dWwgY2xhc3M9XCJtbmotZ3JpZC1zZWxlY3Rvcl9fcm93XCIgW3N0eWxlXT1cImdyaWRTdHlsZSgpXCI+XG4gIDxsaVxuICAgIGNsYXNzPVwibW5qLWdyaWQtc2VsZWN0b3JfX3Jvdy0tY2VsbFwiXG4gICAgKm5nRm9yPVwibGV0IGNlbGwgb2YgZ3JpZFwiXG4gICAgW3RpdGxlXT1cImNlbGwudGl0bGVcIlxuICAgIFthdHRyLnRhYkluZGV4XT1cImNlbGwuYWN0aXZlID8gMCA6IC0xXCJcbiAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImNlbGwudGl0bGVcIlxuICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiY2VsbC5hY3RpdmVcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNzc0NvbG9yKGNlbGwuY29sb3IpXCJcbiAgICBbc3R5bGVdPVwiY2VsbFNpemUoKVwiXG4gICAgKGNsaWNrKT1cInNlbGVjdENvbG9yKGNlbGwpXCJcbiAgPlxuICAgIDxkaXYgKm5nSWY9XCJjZWxsLmFjdGl2ZVwiIGNsYXNzPVwibW5qLWNvbG9ycGlja2VyLXNlbGVjdG9yX190aHVtYlwiIFtzdHlsZV09XCJ0aHVtYlNpemUoKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9fdGh1bWJfX2lubmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG48L3VsPlxuIl19