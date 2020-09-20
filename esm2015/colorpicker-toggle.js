import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Attribute, ChangeDetectionStrategy, Component, ContentChild, Directive, Input, ViewChild, ViewEncapsulation, } from '@angular/core';
import { merge, of, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./colorpicker-intl";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
const _c0 = ["button"];
function MnjColorpickerToggle__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 4);
    i0.ɵɵelementEnd();
} }
const _c1 = [[["", "mnjColorpickerToggleIcon", ""]]];
const _c2 = ["[mnjColorpickerToggleIcon]"];
/** Can be used to override the icon of a `matColorpickerToggle`. */
export class MnjColorpickerToggleIcon {
}
MnjColorpickerToggleIcon.ɵfac = function MnjColorpickerToggleIcon_Factory(t) { return new (t || MnjColorpickerToggleIcon)(); };
MnjColorpickerToggleIcon.ɵdir = i0.ɵɵdefineDirective({ type: MnjColorpickerToggleIcon, selectors: [["", "mnjColorpickerToggleIcon", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorpickerToggleIcon, [{
        type: Directive,
        args: [{
                selector: '[mnjColorpickerToggleIcon]',
            }]
    }], null, null); })();
export class MnjColorpickerToggle {
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = Subscription.EMPTY;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    }
    /** Colorpicker instance that the button will toggle. */
    get colorpicker() {
        return this._colorpicker;
    }
    set colorpicker(value) {
        this._colorpicker = value;
        this._watchStateChanges();
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        if (this._disabled === undefined && this.colorpicker) {
            return this.colorpicker.disabled;
        }
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    _open(event) {
        if (this.colorpicker && !this.disabled) {
            this.colorpicker.open();
            event.stopPropagation();
        }
    }
    _watchStateChanges() {
        const colorpickerStateChanged = this.colorpicker ? this.colorpicker._stateChanges : of();
        const inputStateChanged = this.colorpicker && this.colorpicker._colorpickerInput ? this.colorpicker._colorpickerInput._stateChanges : of();
        const colorpickerToggled = this.colorpicker
            ? merge(this.colorpicker.openedStream, this.colorpicker.closedStream)
            : of();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, colorpickerStateChanged, inputStateChanged, colorpickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MnjColorpickerToggle.ɵfac = function MnjColorpickerToggle_Factory(t) { return new (t || MnjColorpickerToggle)(i0.ɵɵdirectiveInject(i1.MnjColorpickerIntl), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵinjectAttribute('tabindex')); };
MnjColorpickerToggle.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorpickerToggle, selectors: [["mnj-colorpicker-toggle"]], contentQueries: function MnjColorpickerToggle_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, MnjColorpickerToggleIcon, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MnjColorpickerToggle_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mnj-colorpicker-toggle"], hostVars: 8, hostBindings: function MnjColorpickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focus", function MnjColorpickerToggle_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.disabled ? null : -1)("data-mnj-color-panel", ctx.colorpicker ? ctx.colorpicker.id : null);
        i0.ɵɵclassProp("mnj-colorpicker-toggle-active", ctx.colorpicker && ctx.colorpicker.opened)("mnj-accent", ctx.colorpicker && ctx.colorpicker.color === "accent")("mnj-warn", ctx.colorpicker && ctx.colorpicker.color === "warn");
    } }, inputs: { colorpicker: ["for", "colorpicker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["mnjColorpickerToggle"], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mnj-colorpicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mnj-colorpicker-toggle-default-icon"], ["d", "M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"]], template: function MnjColorpickerToggle_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("click", function MnjColorpickerToggle_Template_button_click_0_listener($event) { return ctx._open($event); });
        i0.ɵɵtemplate(2, MnjColorpickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        i0.ɵɵattribute("aria-haspopup", ctx.colorpicker ? "dialog" : null)("aria-label", ctx._intl.openColorPickerLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx._customIcon);
    } }, directives: [i2.MatButton, i3.NgIf], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon{display:block;height:1.5em;width:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mnj-colorpicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mnj-colorpicker-toggle-default-icon{margin:auto}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorpickerToggle, [{
        type: Component,
        args: [{
                selector: 'mnj-colorpicker-toggle',
                templateUrl: 'colorpicker-toggle.html',
                styleUrls: ['colorpicker-toggle.scss'],
                exportAs: 'mnjColorpickerToggle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'mnj-colorpicker-toggle',
                    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
                    // consumer may have provided, while still being able to receive focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[class.mnj-colorpicker-toggle-active]': 'colorpicker && colorpicker.opened',
                    '[class.mnj-accent]': 'colorpicker && colorpicker.color === "accent"',
                    '[class.mnj-warn]': 'colorpicker && colorpicker.color === "warn"',
                    // Used by the test harness to tie this toggle to its colorpicker.
                    '[attr.data-mnj-color-panel]': 'colorpicker ? colorpicker.id : null',
                    '(focus)': '_button.focus()',
                },
            }]
    }], function () { return [{ type: i1.MnjColorpickerIntl }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }]; }, { colorpicker: [{
            type: Input,
            args: ['for']
        }], tabIndex: [{
            type: Input
        }], disabled: [{
            type: Input
        }], disableRipple: [{
            type: Input
        }], _customIcon: [{
            type: ContentChild,
            args: [MnjColorpickerToggleIcon]
        }], _button: [{
            type: ViewChild,
            args: ['button']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL2NvbG9ycGlja2VyLXRvZ2dsZS50cyIsIi4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi9jb2xvcnBpY2tlci10b2dnbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUVMLFNBQVMsRUFDVCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsS0FBSyxFQUVMLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lDSjdDLG1CQVNFO0lBVEYsOEJBU0U7SUFBQSwwQkFHRjtJQUFBLGlCQUFNOzs7O0FESlIsb0VBQW9FO0FBSXBFLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2FBQ3ZDOztBQXVCRCxNQUFNLE9BQU8sb0JBQW9CO0lBMEMvQixZQUNTLEtBQXlCLEVBQ3hCLGtCQUFxQyxFQUN0QixlQUF1QjtRQUZ2QyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBM0N2QyxrQkFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUE4Q3pDLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsSUFBSSxjQUFjLEtBQUssQ0FBQyxD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RSxzQkFBc0I7Z0JBQ2hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx3QkFBd0I7b0JBQy9CLHdGQUF3RjtvQkFDeEYsdUVBQXVFO29CQUN2RSxpQkFBaUIsRUFBRSxzQkFBc0I7b0JBQ3pDLHVDQUF1QyxFQUFFLG1DQUFtQztvQkFDNUUsb0JBQW9CLEVBQUUsK0NBQStDO29CQUNyRSxrQkFBa0IsRUFBRSw2Q0FBNkM7b0JBQ2pFLGtFQUFrRTtvQkFDbEUsNkJBQTZCLEVBQUUscUNBQXFDO29CQUNwRSxTQUFTLEVBQUUsaUJBQWlCO2lCQUM3QjthQUNGOztzQkE4Q0ksU0FBUzt1QkFBQyxVQUFVO3dCQXhDbkIsV0FBVztrQkFEZCxLQUFLO21CQUFDLEtBQUs7WUFhSCxRQUFRO2tCQUFoQixLQUFLO1lBSUYsUUFBUTtrQkFEWCxLQUFLO1lBY0csYUFBYTtrQkFBckIsS0FBSztZQUdrQyxXQUFXO2tCQUFsRCxZQUFZO21CQUFDLHdCQUF3QjtZQUdqQixPQUFPO2tCQUEzQixTQUFTO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRCdXR0b24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgbWVyZ2UsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1uakNvbG9ycGlja2VyIH0gZnJvbSAnLi9jb2xvcnBpY2tlcic7XG5pbXBvcnQgeyBNbmpDb2xvcnBpY2tlckludGwgfSBmcm9tICcuL2NvbG9ycGlja2VyLWludGwnO1xuXG4vKiogQ2FuIGJlIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGljb24gb2YgYSBgbWF0Q29sb3JwaWNrZXJUb2dnbGVgLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21uakNvbG9ycGlja2VyVG9nZ2xlSWNvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBNbmpDb2xvcnBpY2tlclRvZ2dsZUljb24ge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW5qLWNvbG9ycGlja2VyLXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnY29sb3JwaWNrZXItdG9nZ2xlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY29sb3JwaWNrZXItdG9nZ2xlLnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdtbmpDb2xvcnBpY2tlclRvZ2dsZScsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtbmotY29sb3JwaWNrZXItdG9nZ2xlJyxcbiAgICAvLyBBbHdheXMgc2V0IHRoZSB0YWJpbmRleCB0byAtMSBzbyB0aGF0IGl0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBjdXN0b20gdGFiaW5kZXggdGhlXG4gICAgLy8gY29uc3VtZXIgbWF5IGhhdmUgcHJvdmlkZWQsIHdoaWxlIHN0aWxsIGJlaW5nIGFibGUgdG8gcmVjZWl2ZSBmb2N1cy5cbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2Rpc2FibGVkID8gbnVsbCA6IC0xJyxcbiAgICAnW2NsYXNzLm1uai1jb2xvcnBpY2tlci10b2dnbGUtYWN0aXZlXSc6ICdjb2xvcnBpY2tlciAmJiBjb2xvcnBpY2tlci5vcGVuZWQnLFxuICAgICdbY2xhc3MubW5qLWFjY2VudF0nOiAnY29sb3JwaWNrZXIgJiYgY29sb3JwaWNrZXIuY29sb3IgPT09IFwiYWNjZW50XCInLFxuICAgICdbY2xhc3MubW5qLXdhcm5dJzogJ2NvbG9ycGlja2VyICYmIGNvbG9ycGlja2VyLmNvbG9yID09PSBcIndhcm5cIicsXG4gICAgLy8gVXNlZCBieSB0aGUgdGVzdCBoYXJuZXNzIHRvIHRpZSB0aGlzIHRvZ2dsZSB0byBpdHMgY29sb3JwaWNrZXIuXG4gICAgJ1thdHRyLmRhdGEtbW5qLWNvbG9yLXBhbmVsXSc6ICdjb2xvcnBpY2tlciA/IGNvbG9ycGlja2VyLmlkIDogbnVsbCcsXG4gICAgJyhmb2N1cyknOiAnX2J1dHRvbi5mb2N1cygpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTW5qQ29sb3JwaWNrZXJUb2dnbGUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZUNoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIENvbG9ycGlja2VyIGluc3RhbmNlIHRoYXQgdGhlIGJ1dHRvbiB3aWxsIHRvZ2dsZS4gKi9cbiAgQElucHV0KCdmb3InKVxuICBnZXQgY29sb3JwaWNrZXIoKTogTW5qQ29sb3JwaWNrZXIge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcnBpY2tlcjtcbiAgfVxuXG4gIHNldCBjb2xvcnBpY2tlcih2YWx1ZTogTW5qQ29sb3JwaWNrZXIpIHtcbiAgICB0aGlzLl9jb2xvcnBpY2tlciA9IHZhbHVlO1xuICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9jb2xvcnBpY2tlcjogTW5qQ29sb3JwaWNrZXI7XG5cbiAgLyoqIFRhYmluZGV4IGZvciB0aGUgdG9nZ2xlLiAqL1xuICBASW5wdXQoKSB0YWJJbmRleDogbnVtYmVyIHwgbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgdG9nZ2xlIGJ1dHRvbiBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY29sb3JwaWNrZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbG9ycGlja2VyLmRpc2FibGVkO1xuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciByaXBwbGVzIG9uIHRoZSB0b2dnbGUgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKSBkaXNhYmxlUmlwcGxlOiBib29sZWFuO1xuXG4gIC8qKiBDdXN0b20gaWNvbiBzZXQgYnkgdGhlIGNvbnN1bWVyLiAqL1xuICBAQ29udGVudENoaWxkKE1uakNvbG9ycGlja2VyVG9nZ2xlSWNvbikgX2N1c3RvbUljb246IE1uakNvbG9ycGlja2VyVG9nZ2xlSWNvbjtcblxuICAvKiogVW5kZXJseWluZyBidXR0b24gZWxlbWVudC4gKi9cbiAgQFZpZXdDaGlsZCgnYnV0dG9uJykgX2J1dHRvbjogTWF0QnV0dG9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfaW50bDogTW5qQ29sb3JwaWNrZXJJbnRsLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIGRlZmF1bHRUYWJJbmRleDogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IHBhcnNlZFRhYkluZGV4ID0gTnVtYmVyKGRlZmF1bHRUYWJJbmRleCk7XG4gICAgdGhpcy50YWJJbmRleCA9IHBhcnNlZFRhYkluZGV4IHx8IHBhcnNlZFRhYkluZGV4ID09PSAwID8gcGFyc2VkVGFiSW5kZXggOiBudWxsO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fd2F0Y2hTdGF0ZUNoYW5nZXMoKTtcbiAgfVxuXG4gIF9vcGVuKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbG9ycGlja2VyICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbG9ycGlja2VyLm9wZW4oKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3dhdGNoU3RhdGVDaGFuZ2VzKCkge1xuICAgIGNvbnN0IGNvbG9ycGlja2VyU3RhdGVDaGFuZ2VkID0gdGhpcy5jb2xvcnBpY2tlciA/IHRoaXMuY29sb3JwaWNrZXIuX3N0YXRlQ2hhbmdlcyA6IG9mKCk7XG4gICAgY29uc3QgaW5wdXRTdGF0ZUNoYW5nZWQgPVxuICAgICAgdGhpcy5jb2xvcnBpY2tlciAmJiB0aGlzLmNvbG9ycGlja2VyLl9jb2xvcnBpY2tlcklucHV0ID8gdGhpcy5jb2xvcnBpY2tlci5fY29sb3JwaWNrZXJJbnB1dC5fc3RhdGVDaGFuZ2VzIDogb2YoKTtcbiAgICBjb25zdCBjb2xvcnBpY2tlclRvZ2dsZWQgPSB0aGlzLmNvbG9ycGlja2VyXG4gICAgICA/IG1lcmdlKHRoaXMuY29sb3JwaWNrZXIub3BlbmVkU3RyZWFtLCB0aGlzLmNvbG9ycGlja2VyLmNsb3NlZFN0cmVhbSlcbiAgICAgIDogb2YoKTtcblxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcyA9IG1lcmdlKFxuICAgICAgdGhpcy5faW50bC5jaGFuZ2VzLFxuICAgICAgY29sb3JwaWNrZXJTdGF0ZUNoYW5nZWQsXG4gICAgICBpbnB1dFN0YXRlQ2hhbmdlZCxcbiAgICAgIGNvbG9ycGlja2VyVG9nZ2xlZFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIiwiPGJ1dHRvblxuICAjYnV0dG9uXG4gIG1hdC1pY29uLWJ1dHRvblxuICB0eXBlPVwiYnV0dG9uXCJcbiAgW2F0dHIuYXJpYS1oYXNwb3B1cF09XCJjb2xvcnBpY2tlciA/ICdkaWFsb2cnIDogbnVsbFwiXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwiX2ludGwub3BlbkNvbG9yUGlja2VyTGFiZWxcIlxuICBbYXR0ci50YWJpbmRleF09XCJkaXNhYmxlZCA/IC0xIDogdGFiSW5kZXhcIlxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICBbZGlzYWJsZVJpcHBsZV09XCJkaXNhYmxlUmlwcGxlXCJcbiAgKGNsaWNrKT1cIl9vcGVuKCRldmVudClcIlxuPlxuICA8c3ZnXG4gICAgKm5nSWY9XCIhX2N1c3RvbUljb25cIlxuICAgIGNsYXNzPVwibW5qLWNvbG9ycGlja2VyLXRvZ2dsZS1kZWZhdWx0LWljb25cIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHdpZHRoPVwiMjRweFwiXG4gICAgaGVpZ2h0PVwiMjRweFwiXG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMjAuNzEgNS42M2wtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMy4xMiAzLjEyLTEuOTMtMS45MS0xLjQxIDEuNDEgMS40MiAxLjQyTDMgMTYuMjVWMjFoNC43NWw4LjkyLTguOTIgMS40MiAxLjQyIDEuNDEtMS40MS0xLjkyLTEuOTIgMy4xMi0zLjEyYy40LS40LjQtMS4wMy4wMS0xLjQyek02LjkyIDE5TDUgMTcuMDhsOC4wNi04LjA2IDEuOTIgMS45Mkw2LjkyIDE5elwiXG4gICAgLz5cbiAgPC9zdmc+XG5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW21uakNvbG9ycGlja2VyVG9nZ2xlSWNvbl1cIj48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5cbiJdfQ==