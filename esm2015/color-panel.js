import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Inject, Input, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { MNJ_COLOR_CONFIG_PROVIDER } from './color/color-config';
import { ColorPickerView } from './views';
import * as i0 from "@angular/core";
import * as i1 from "./colorpicker-intl";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/cdk/a11y";
import * as i4 from "./color/color-adapter";
import * as i5 from "@angular/common";
import * as i6 from "./views/chrome/chrome-view";
import * as i7 from "./views/armonies/armonies-view";
import * as i8 from "./views/palette/palette-view";
import * as i9 from "./views/scan/scan-view";
function MnjColorPanel_mnj_chrome_picker_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mnj-chrome-picker-view", 7);
    i0.ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_chrome_picker_view_2_Template_mnj_chrome_picker_view_activeColorChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.activeColor = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("activeColor", ctx_r0.activeColor)("selected", ctx_r0.selected)("showAlpha", ctx_r0.showAlpha);
} }
function MnjColorPanel_mnj_armonies_picker_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mnj-armonies-picker-view", 8);
    i0.ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_armonies_picker_view_3_Template_mnj_armonies_picker_view_activeColorChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.activeColor = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("activeColor", ctx_r1.activeColor)("selected", ctx_r1.selected);
} }
function MnjColorPanel_mnj_palette_picker_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mnj-palette-picker-view", 9);
    i0.ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_palette_picker_view_4_Template_mnj_palette_picker_view_activeColorChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.activeColor = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("activeColor", ctx_r2.activeColor)("palette", ctx_r2.palette)("selected", ctx_r2.selected);
} }
function MnjColorPanel_mnj_scan_picker_view_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mnj-scan-picker-view", 8);
    i0.ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_scan_picker_view_5_Template_mnj_scan_picker_view_activeColorChange_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.activeColor = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("activeColor", ctx_r3.activeColor)("selected", ctx_r3.selected);
} }
/** Default header for MnjColorPanel */
export class MnjColorPanelHeader {
    constructor(_intl, colorPanel, changeDetectorRef) {
        this._intl = _intl;
        this.colorPanel = colorPanel;
        this._views = ['picker', 'armonies', 'palette', 'scan'];
        this.colorPanel.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** The label for the current color panel view. */
    get pickerButtonText() {
        switch (this.colorPanel.currentView) {
            case 'picker': {
                return this._intl.pickerView;
            }
            case 'armonies': {
                return this._intl.armoniesView;
            }
            case 'palette': {
                return this._intl.paletteView;
            }
            case 'scan': {
                return this._intl.scanView;
            }
        }
    }
    get pickerViewButtonLabel() {
        switch (this.colorPanel.currentView) {
            case 'picker': {
                return this._intl.switchToArmoniesView;
            }
            case 'armonies': {
                return this._intl.switchToPaletteView;
            }
            case 'palette': {
                return this._intl.switchToScanView;
            }
            case 'scan': {
                return this._intl.switchToPickerView;
            }
        }
    }
    /** The label for the previous button. */
    get prevButtonLabel() {
        switch (this.colorPanel.currentView) {
            case 'picker': {
                return this._intl.switchToScanView;
            }
            case 'armonies': {
                return this._intl.switchToPickerView;
            }
            case 'palette': {
                return this._intl.switchToArmoniesView;
            }
            case 'scan': {
                return this._intl.switchToPaletteView;
            }
        }
    }
    /** The label for the next button. */
    get nextButtonLabel() {
        switch (this.colorPanel.currentView) {
            case 'picker': {
                return this._intl.switchToArmoniesView;
            }
            case 'armonies': {
                return this._intl.switchToPaletteView;
            }
            case 'palette': {
                return this._intl.switchToScanView;
            }
            case 'scan': {
                return this._intl.switchToPickerView;
            }
        }
    }
    /** Handles user clicks on the previous button. */
    previousClicked() {
        let index = this._views.findIndex((v) => v === this.colorPanel.currentView);
        index = (index + 4 - 1) % 4;
        this.colorPanel.currentView = this._views[index];
    }
    /** Handles user clicks on the next button. */
    nextClicked() {
        let index = this._views.findIndex((v) => v === this.colorPanel.currentView);
        index = (index + 4 + 1) % 4;
        this.colorPanel.currentView = this._views[index];
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
        return this.colorPanel.currentView !== 'picker';
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
        return this.colorPanel.currentView !== 'scan';
    }
}
MnjColorPanelHeader.ɵfac = function MnjColorPanelHeader_Factory(t) { return new (t || MnjColorPanelHeader)(i0.ɵɵdirectiveInject(i1.MnjColorpickerIntl), i0.ɵɵdirectiveInject(forwardRef(() => MnjColorPanel)), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MnjColorPanelHeader.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorPanelHeader, selectors: [["mnj-color-panel-header"]], exportAs: ["mnjColorPanelHeader"], decls: 8, vars: 8, consts: [[1, "mnj-color-panel-header"], [1, "mnj-color-panel-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mnj-color-panel-picker-button", 3, "click"], [1, "mnj-color-panel-arrow"], [1, "mnj-color-panel-spacer"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-next-button", 3, "disabled", "click"]], template: function MnjColorPanelHeader_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_2_listener() { return ctx.nextClicked(); });
        i0.ɵɵtext(3);
        i0.ɵɵelement(4, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "div", 4);
        i0.ɵɵelementStart(6, "button", 5);
        i0.ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_6_listener() { return ctx.previousClicked(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_7_listener() { return ctx.nextClicked(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵattribute("aria-label", ctx.pickerViewButtonLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.pickerButtonText, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("mnj-color-panel-invert", ctx.colorPanel.currentView === "scan");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.previousEnabled());
        i0.ɵɵattribute("aria-label", ctx.prevButtonLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx.nextEnabled());
        i0.ɵɵattribute("aria-label", ctx.nextButtonLabel);
    } }, directives: [i2.MatButton, i3.CdkAriaLive], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorPanelHeader, [{
        type: Component,
        args: [{
                selector: 'mnj-color-panel-header',
                templateUrl: 'color-panel-header.html',
                exportAs: 'mnjColorPanelHeader',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.MnjColorpickerIntl }, { type: MnjColorPanel, decorators: [{
                type: Inject,
                args: [forwardRef(() => MnjColorPanel)]
            }] }, { type: i0.ChangeDetectorRef }]; }, null); })();
/**
 * A color panel that is used as part of the colorpicker.
 * @docs-private
 */
export class MnjColorPanel {
    constructor(_intl, _colorAdapter, _config, _changeDetectorRef) {
        this._colorAdapter = _colorAdapter;
        this._config = _config;
        this._changeDetectorRef = _changeDetectorRef;
        /** Emits when the currently selected color changes. */
        this.selectedChange = new EventEmitter();
        /** Emits when any color is selected. */
        this._userSelection = new EventEmitter();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new Subject();
        this._intlChanges = _intl.changes.subscribe(() => {
            _changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** The color to start focused on the picker. */
    get startColor() {
        return this._startColor;
    }
    set startColor(value) {
        this._startColor = this._colorAdapter.getValidColorOrNull(value);
    }
    get palette() {
        return this._palette || this._config.defaultPalette;
    }
    set palette(value) {
        this._palette = value;
    }
    get showAlpha() {
        return this._showAlpha || this._config.showAlpha;
    }
    set showAlpha(value) {
        this._showAlpha = coerceBooleanProperty(value);
    }
    /** The currently selected color. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = this._colorAdapter.getValidColorOrNull(value);
    }
    /**
     * The current active color. This determines which time period is shown and which color is
     * highlighted when using keyboard navigation.
     */
    get activeColor() {
        return this._activeColor;
    }
    set activeColor(value) {
        this._activeColor = value;
        this.stateChanges.next();
        this._changeDetectorRef.markForCheck();
    }
    /** Whether the color panel is in month view. */
    get currentView() {
        return this._currentView;
    }
    set currentView(value) {
        this._currentView = value;
        this._changeDetectorRef.markForCheck();
    }
    ngAfterContentInit() {
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView || 'picker';
        this.activeColor = this.selected || this.startColor || this._config.defaultColor;
    }
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    }
    /** Makes the active view color the selected one. */
    _selectColor() {
        const color = this._getCurrentViewComponent().activeColor;
        if (!this._colorAdapter.sameColor(color, this.selected)) {
            this.selectedChange.emit(color);
        }
        this._userSelection.emit(color);
    }
    _handleKeydownEvent(event) {
        switch (event.keyCode) {
            case ENTER:
                this._selectColor();
                return;
            default:
                return;
        }
    }
    /** Returns the component instance that corresponds to the current color panel view. */
    _getCurrentViewComponent() {
        return this.currentPicker;
    }
}
MnjColorPanel.ɵfac = function MnjColorPanel_Factory(t) { return new (t || MnjColorPanel)(i0.ɵɵdirectiveInject(i1.MnjColorpickerIntl), i0.ɵɵdirectiveInject(i4.ColorAdapter), i0.ɵɵdirectiveInject(MNJ_COLOR_CONFIG_PROVIDER), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MnjColorPanel.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorPanel, selectors: [["mnj-color-panel"]], viewQuery: function MnjColorPanel_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(ColorPickerView, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.currentPicker = _t.first);
    } }, hostAttrs: [1, "mnj-color-panel"], hostBindings: function MnjColorPanel_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function MnjColorPanel_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", startView: "startView", startColor: "startColor", palette: "palette", showAlpha: "showAlpha", selected: "selected", activeColor: "activeColor" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection" }, exportAs: ["mnjColorPanel"], decls: 9, vars: 6, consts: [["cdkFocusInitial", ""], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mnj-color-panel-content", 3, "ngSwitch"], [3, "activeColor", "selected", "showAlpha", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "selected", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "palette", "selected", "activeColorChange", 4, "ngSwitchCase"], [1, "mnj-color-panel-footer"], ["mat-button", "", 3, "color", "click"], [3, "activeColor", "selected", "showAlpha", "activeColorChange"], [3, "activeColor", "selected", "activeColorChange"], [3, "activeColor", "palette", "selected", "activeColorChange"]], template: function MnjColorPanel_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mnj-color-panel-header", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, MnjColorPanel_mnj_chrome_picker_view_2_Template, 1, 3, "mnj-chrome-picker-view", 2);
        i0.ɵɵtemplate(3, MnjColorPanel_mnj_armonies_picker_view_3_Template, 1, 2, "mnj-armonies-picker-view", 3);
        i0.ɵɵtemplate(4, MnjColorPanel_mnj_palette_picker_view_4_Template, 1, 3, "mnj-palette-picker-view", 4);
        i0.ɵɵtemplate(5, MnjColorPanel_mnj_scan_picker_view_5_Template, 1, 2, "mnj-scan-picker-view", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵlistener("click", function MnjColorPanel_Template_button_click_7_listener() { return ctx._selectColor(); });
        i0.ɵɵtext(8, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.currentView);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "picker");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "armonies");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "palette");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "scan");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("color", ctx.color);
    } }, directives: [MnjColorPanelHeader, i3.CdkMonitorFocus, i5.NgSwitch, i5.NgSwitchCase, i2.MatButton, i6.MnjChromePickerView, i7.MnjArmoniesPickerView, i8.MnjPalettePickerView, i9.MnjScanPickerView], styles: [".mnj-color-panel{display:flex;flex-direction:column}.mnj-color-panel-header{padding:9px 16px 0}.mnj-color-panel-content{flex:1 0 0;outline:none;overflow-y:auto;padding:9px 16px}.mnj-color-panel-footer{display:flex;justify-content:flex-end;padding:0 16px 9px}.mnj-color-panel-controls{display:flex;margin:5% calc(4.71429% - 16px)}.mnj-color-panel-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mnj-color-panel-spacer{flex:1 1 auto}.mnj-color-panel-picker-button{min-width:0}.mnj-color-panel-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-top-style:solid;border-top-width:5px;display:inline-block;height:0;margin:0 0 0 5px;vertical-align:middle;width:0}.mnj-color-panel-arrow.mnj-color-panel-invert{transform:rotate(180deg)}[dir=rtl] .mnj-color-panel-arrow{margin:0 5px 0 0}.mnj-color-panel-next-button,.mnj-color-panel-previous-button{position:relative}.mnj-color-panel-next-button:after,.mnj-color-panel-previous-button:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;margin:15.5px;position:absolute;right:0;top:0}[dir=rtl] .mnj-color-panel-next-button,[dir=rtl] .mnj-color-panel-previous-button{transform:rotate(180deg)}.mnj-color-panel-previous-button:after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mnj-color-panel-next-button:after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorPanel, [{
        type: Component,
        args: [{
                selector: 'mnj-color-panel',
                templateUrl: 'color-panel.html',
                styleUrls: ['color-panel.scss'],
                exportAs: 'mnjColorPanel',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'mnj-color-panel',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: i1.MnjColorpickerIntl }, { type: i4.ColorAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MNJ_COLOR_CONFIG_PROVIDER]
            }] }, { type: i0.ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], startView: [{
            type: Input
        }], startColor: [{
            type: Input
        }], palette: [{
            type: Input
        }], showAlpha: [{
            type: Input
        }], selected: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], _userSelection: [{
            type: Output
        }], currentPicker: [{
            type: ViewChild,
            args: [ColorPickerView]
        }], activeColor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGFuZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvY29sb3ItcGFuZWwudHMiLCIuLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvY29sb3ItcGFuZWwuaHRtbCIsIi4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi9jb2xvci1wYW5lbC1oZWFkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRzdDLE9BQU8sRUFBa0IseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7O0lDcEJ4QyxpREFNeUI7SUFKdkIsMFBBQTZCO0lBSS9CLGlCQUF5Qjs7O0lBSnZCLGdEQUE2Qiw2QkFBQSwrQkFBQTs7OztJQUsvQixtREFDMkI7SUFEMEIsOFBBQTZCO0lBQ2xGLGlCQUEyQjs7O0lBRDBCLGdEQUE2Qiw2QkFBQTs7OztJQUVsRixrREFNMEI7SUFKeEIsNFBBQTZCO0lBSS9CLGlCQUEwQjs7O0lBSnhCLGdEQUE2QiwyQkFBQSw2QkFBQTs7OztJQUsvQiwrQ0FDdUI7SUFEc0IseVBBQTZCO0lBQzFFLGlCQUF1Qjs7O0lBRHNCLGdEQUE2Qiw2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TUFBTTt1QkFBQyx5QkFBeUI7d0RBekYxQixLQUFLO2tCQUFiLEtBQUs7WUFHRyxTQUFTO2tCQUFqQixLQUFLO1lBSUYsVUFBVTtrQkFEYixLQUFLO1lBVUYsT0FBTztrQkFEVixLQUFLO1lBWUYsU0FBUztrQkFEWixLQUFLO1lBYUYsUUFBUTtrQkFEWCxLQUFLO1lBVWEsY0FBYztrQkFBaEMsTUFBTTtZQUdZLGNBQWM7a0JBQWhDLE1BQU07WUFHcUIsYUFBYTtrQkFBeEMsU0FBUzttQkFBQyxlQUFlO1lBT3RCLFdBQVc7a0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7IEVOVEVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29sb3IsIFBhbGV0dGVDb2xvciB9IGZyb20gJy4vY29sb3IvY29sb3InO1xyXG5pbXBvcnQgeyBDb2xvckFkYXB0ZXIgfSBmcm9tICcuL2NvbG9yL2NvbG9yLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBNbmpDb2xvckNvbmZpZywgTU5KX0NPTE9SX0NPTkZJR19QUk9WSURFUiB9IGZyb20gJy4vY29sb3IvY29sb3ItY29uZmlnJztcclxuaW1wb3J0IHsgTW5qQ29sb3JwaWNrZXJJbnRsIH0gZnJvbSAnLi9jb2xvcnBpY2tlci1pbnRsJztcclxuaW1wb3J0IHsgQ29sb3JQaWNrZXJWaWV3IH0gZnJvbSAnLi92aWV3cyc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgdmlld3MgZm9yIHRoZSBjb2xvci1wYW5lbC5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTW5qQ29sb3JQYW5lbFZpZXcgPSAncGlja2VyJyB8ICdhcm1vbmllcycgfCAncGFsZXR0ZScgfCAnc2Nhbic7XHJcblxyXG4vKiogRGVmYXVsdCBoZWFkZXIgZm9yIE1uakNvbG9yUGFuZWwgKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtbmotY29sb3ItcGFuZWwtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbG9yLXBhbmVsLWhlYWRlci5odG1sJyxcclxuICBleHBvcnRBczogJ21uakNvbG9yUGFuZWxIZWFkZXInLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNbmpDb2xvclBhbmVsSGVhZGVyIHtcclxuICBwcml2YXRlIF92aWV3czogTW5qQ29sb3JQYW5lbFZpZXdbXSA9IFsncGlja2VyJywgJ2FybW9uaWVzJywgJ3BhbGV0dGUnLCAnc2NhbiddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2ludGw6IE1uakNvbG9ycGlja2VySW50bCxcclxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBNbmpDb2xvclBhbmVsKSkgcHVibGljIGNvbG9yUGFuZWw6IE1uakNvbG9yUGFuZWwsXHJcbiAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuY29sb3JQYW5lbC5zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IGNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBjdXJyZW50IGNvbG9yIHBhbmVsIHZpZXcuICovXHJcbiAgZ2V0IHBpY2tlckJ1dHRvblRleHQoKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAodGhpcy5jb2xvclBhbmVsLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgIGNhc2UgJ3BpY2tlcic6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50bC5waWNrZXJWaWV3O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2FybW9uaWVzJzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRsLmFybW9uaWVzVmlldztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdwYWxldHRlJzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRsLnBhbGV0dGVWaWV3O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3NjYW4nOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGwuc2NhblZpZXc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwaWNrZXJWaWV3QnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAodGhpcy5jb2xvclBhbmVsLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgIGNhc2UgJ3BpY2tlcic6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50bC5zd2l0Y2hUb0FybW9uaWVzVmlldztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhcm1vbmllcyc6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50bC5zd2l0Y2hUb1BhbGV0dGVWaWV3O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3BhbGV0dGUnOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGwuc3dpdGNoVG9TY2FuVmlldztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdzY2FuJzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRsLnN3aXRjaFRvUGlja2VyVmlldztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIHByZXZpb3VzIGJ1dHRvbi4gKi9cclxuICBnZXQgcHJldkJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY29sb3JQYW5lbC5jdXJyZW50Vmlldykge1xyXG4gICAgICBjYXNlICdwaWNrZXInOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGwuc3dpdGNoVG9TY2FuVmlldztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhcm1vbmllcyc6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50bC5zd2l0Y2hUb1BpY2tlclZpZXc7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAncGFsZXR0ZSc6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50bC5zd2l0Y2hUb0FybW9uaWVzVmlldztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdzY2FuJzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRsLnN3aXRjaFRvUGFsZXR0ZVZpZXc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBuZXh0IGJ1dHRvbi4gKi9cclxuICBnZXQgbmV4dEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY29sb3JQYW5lbC5jdXJyZW50Vmlldykge1xyXG4gICAgICBjYXNlICdwaWNrZXInOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGwuc3dpdGNoVG9Bcm1vbmllc1ZpZXc7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnYXJtb25pZXMnOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGwuc3dpdGNoVG9QYWxldHRlVmlldztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdwYWxldHRlJzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRsLnN3aXRjaFRvU2NhblZpZXc7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnc2Nhbic6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50bC5zd2l0Y2hUb1BpY2tlclZpZXc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHVzZXIgY2xpY2tzIG9uIHRoZSBwcmV2aW91cyBidXR0b24uICovXHJcbiAgcHJldmlvdXNDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5fdmlld3MuZmluZEluZGV4KCh2KSA9PiB2ID09PSB0aGlzLmNvbG9yUGFuZWwuY3VycmVudFZpZXcpO1xyXG4gICAgaW5kZXggPSAoaW5kZXggKyA0IC0gMSkgJSA0O1xyXG4gICAgdGhpcy5jb2xvclBhbmVsLmN1cnJlbnRWaWV3ID0gdGhpcy5fdmlld3NbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIG5leHQgYnV0dG9uLiAqL1xyXG4gIG5leHRDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5fdmlld3MuZmluZEluZGV4KCh2KSA9PiB2ID09PSB0aGlzLmNvbG9yUGFuZWwuY3VycmVudFZpZXcpO1xyXG4gICAgaW5kZXggPSAoaW5kZXggKyA0ICsgMSkgJSA0O1xyXG4gICAgdGhpcy5jb2xvclBhbmVsLmN1cnJlbnRWaWV3ID0gdGhpcy5fdmlld3NbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHByZXZpb3VzIHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICBwcmV2aW91c0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xvclBhbmVsLmN1cnJlbnRWaWV3ICE9PSAncGlja2VyJztcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBuZXh0IHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICBuZXh0RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbG9yUGFuZWwuY3VycmVudFZpZXcgIT09ICdzY2FuJztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbG9yIHBhbmVsIHRoYXQgaXMgdXNlZCBhcyBwYXJ0IG9mIHRoZSBjb2xvcnBpY2tlci5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtbmotY29sb3ItcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29sb3ItcGFuZWwuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NvbG9yLXBhbmVsLnNjc3MnXSxcclxuICBleHBvcnRBczogJ21uakNvbG9yUGFuZWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtbmotY29sb3ItcGFuZWwnLFxyXG4gICAgJyhrZXlkb3duKSc6ICdfaGFuZGxlS2V5ZG93bkV2ZW50KCRldmVudCknLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNbmpDb2xvclBhbmVsIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9pbnRsQ2hhbmdlczogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvKiogQ29sb3IgcGFsZXR0ZSB0byB1c2Ugb24gdGhlIGNvbG9yIHBhbmVsLiAqL1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGU7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjb2xvciBwYW5lbCBzaG91bGQgYmUgc3RhcnRlZCBpbiBtb250aCBvciB5ZWFyIHZpZXcuICovXHJcbiAgQElucHV0KCkgc3RhcnRWaWV3OiBNbmpDb2xvclBhbmVsVmlldztcclxuXHJcbiAgLyoqIFRoZSBjb2xvciB0byBzdGFydCBmb2N1c2VkIG9uIHRoZSBwaWNrZXIuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc3RhcnRDb2xvcigpOiBDb2xvciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0Q29sb3I7XHJcbiAgfVxyXG4gIHNldCBzdGFydENvbG9yKHZhbHVlOiBDb2xvciB8IG51bGwpIHtcclxuICAgIHRoaXMuX3N0YXJ0Q29sb3IgPSB0aGlzLl9jb2xvckFkYXB0ZXIuZ2V0VmFsaWRDb2xvck9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3N0YXJ0Q29sb3I6IENvbG9yIHwgbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgcGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFsZXR0ZSB8fCB0aGlzLl9jb25maWcuZGVmYXVsdFBhbGV0dGU7XHJcbiAgfVxyXG5cclxuICBzZXQgcGFsZXR0ZSh2YWx1ZTogUGFsZXR0ZUNvbG9yW10pIHtcclxuICAgIHRoaXMuX3BhbGV0dGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3BhbGV0dGU6IFBhbGV0dGVDb2xvcltdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBzaG93QWxwaGEoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FscGhhIHx8IHRoaXMuX2NvbmZpZy5zaG93QWxwaGE7XHJcbiAgfVxyXG5cclxuICBzZXQgc2hvd0FscGhhKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93QWxwaGEgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2hvd0FscGhhOiBib29sZWFuO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvci4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzZWxlY3RlZCgpOiBDb2xvciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IENvbG9yIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9jb2xvckFkYXB0ZXIuZ2V0VmFsaWRDb2xvck9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBDb2xvciB8IG51bGw7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IgY2hhbmdlcy4gKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDb2xvcj4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yPigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhbnkgY29sb3IgaXMgc2VsZWN0ZWQuICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IF91c2VyU2VsZWN0aW9uOiBFdmVudEVtaXR0ZXI8Q29sb3I+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oKTtcclxuXHJcbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBzdHlsZSBwaWNrZXIgY29tcG9uZW50LiAqL1xyXG4gIEBWaWV3Q2hpbGQoQ29sb3JQaWNrZXJWaWV3KSBjdXJyZW50UGlja2VyOiBDb2xvclBpY2tlclZpZXc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjdXJyZW50IGFjdGl2ZSBjb2xvci4gVGhpcyBkZXRlcm1pbmVzIHdoaWNoIHRpbWUgcGVyaW9kIGlzIHNob3duIGFuZCB3aGljaCBjb2xvciBpc1xyXG4gICAqIGhpZ2hsaWdodGVkIHdoZW4gdXNpbmcga2V5Ym9hcmQgbmF2aWdhdGlvbi5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBhY3RpdmVDb2xvcigpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29sb3I7XHJcbiAgfVxyXG4gIHNldCBhY3RpdmVDb2xvcih2YWx1ZTogQ29sb3IpIHtcclxuICAgIHRoaXMuX2FjdGl2ZUNvbG9yID0gdmFsdWU7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYWN0aXZlQ29sb3I6IENvbG9yO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY29sb3IgcGFuZWwgaXMgaW4gbW9udGggdmlldy4gKi9cclxuICBnZXQgY3VycmVudFZpZXcoKTogTW5qQ29sb3JQYW5lbFZpZXcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3O1xyXG4gIH1cclxuICBzZXQgY3VycmVudFZpZXcodmFsdWU6IE1uakNvbG9yUGFuZWxWaWV3KSB7XHJcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IHZhbHVlO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2N1cnJlbnRWaWV3OiBNbmpDb2xvclBhbmVsVmlldztcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgd2hlbmV2ZXIgdGhlcmUgaXMgYSBzdGF0ZSBjaGFuZ2UgdGhhdCB0aGUgaGVhZGVyIG1heSBuZWVkIHRvIHJlc3BvbmQgdG8uXHJcbiAgICovXHJcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfaW50bDogTW5qQ29sb3JwaWNrZXJJbnRsLFxyXG4gICAgcHJpdmF0ZSBfY29sb3JBZGFwdGVyOiBDb2xvckFkYXB0ZXIsXHJcbiAgICBASW5qZWN0KE1OSl9DT0xPUl9DT05GSUdfUFJPVklERVIpIHByaXZhdGUgX2NvbmZpZzogTW5qQ29sb3JDb25maWcsXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuX2ludGxDaGFuZ2VzID0gX2ludGwuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBfY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgLy8gQXNzaWduIHRvIHRoZSBwcml2YXRlIHByb3BlcnR5IHNpbmNlIHdlIGRvbid0IHdhbnQgdG8gbW92ZSBmb2N1cyBvbiBpbml0LlxyXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSB0aGlzLnN0YXJ0VmlldyB8fCAncGlja2VyJztcclxuXHJcbiAgICB0aGlzLmFjdGl2ZUNvbG9yID0gdGhpcy5zZWxlY3RlZCB8fCB0aGlzLnN0YXJ0Q29sb3IgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRDb2xvcjtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5faW50bENoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogTWFrZXMgdGhlIGFjdGl2ZSB2aWV3IGNvbG9yIHRoZSBzZWxlY3RlZCBvbmUuICovXHJcbiAgX3NlbGVjdENvbG9yKCkge1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLl9nZXRDdXJyZW50Vmlld0NvbXBvbmVudCgpLmFjdGl2ZUNvbG9yO1xyXG4gICAgaWYgKCF0aGlzLl9jb2xvckFkYXB0ZXIuc2FtZUNvbG9yKGNvbG9yLCB0aGlzLnNlbGVjdGVkKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoY29sb3IpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdXNlclNlbGVjdGlvbi5lbWl0KGNvbG9yKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVLZXlkb3duRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIHRoaXMuX3NlbGVjdENvbG9yKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQgaW5zdGFuY2UgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgY3VycmVudCBjb2xvciBwYW5lbCB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2dldEN1cnJlbnRWaWV3Q29tcG9uZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBpY2tlcjtcclxuICB9XHJcbn1cclxuIiwiPG1uai1jb2xvci1wYW5lbC1oZWFkZXIgY2RrRm9jdXNJbml0aWFsPjwvbW5qLWNvbG9yLXBhbmVsLWhlYWRlcj5cclxuPGRpdiBjbGFzcz1cIm1uai1jb2xvci1wYW5lbC1jb250ZW50XCIgW25nU3dpdGNoXT1cImN1cnJlbnRWaWV3XCIgY2RrTW9uaXRvclN1YnRyZWVGb2N1cyB0YWJpbmRleD1cIi0xXCI+XHJcbiAgPG1uai1jaHJvbWUtcGlja2VyLXZpZXdcclxuICAgICpuZ1N3aXRjaENhc2U9XCIncGlja2VyJ1wiXHJcbiAgICBbKGFjdGl2ZUNvbG9yKV09XCJhY3RpdmVDb2xvclwiXHJcbiAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxyXG4gICAgW3Nob3dBbHBoYV09XCJzaG93QWxwaGFcIlxyXG4gID5cclxuICA8L21uai1jaHJvbWUtcGlja2VyLXZpZXc+XHJcbiAgPG1uai1hcm1vbmllcy1waWNrZXItdmlldyAqbmdTd2l0Y2hDYXNlPVwiJ2FybW9uaWVzJ1wiIFsoYWN0aXZlQ29sb3IpXT1cImFjdGl2ZUNvbG9yXCIgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCI+XHJcbiAgPC9tbmotYXJtb25pZXMtcGlja2VyLXZpZXc+XHJcbiAgPG1uai1wYWxldHRlLXBpY2tlci12aWV3XHJcbiAgICAqbmdTd2l0Y2hDYXNlPVwiJ3BhbGV0dGUnXCJcclxuICAgIFsoYWN0aXZlQ29sb3IpXT1cImFjdGl2ZUNvbG9yXCJcclxuICAgIFtwYWxldHRlXT1cInBhbGV0dGVcIlxyXG4gICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcclxuICA+XHJcbiAgPC9tbmotcGFsZXR0ZS1waWNrZXItdmlldz5cclxuICA8bW5qLXNjYW4tcGlja2VyLXZpZXcgKm5nU3dpdGNoQ2FzZT1cIidzY2FuJ1wiIFsoYWN0aXZlQ29sb3IpXT1cImFjdGl2ZUNvbG9yXCIgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCI+XHJcbiAgPC9tbmotc2Nhbi1waWNrZXItdmlldz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtbmotY29sb3ItcGFuZWwtZm9vdGVyXCI+XHJcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIFtjb2xvcl09XCJjb2xvclwiIChjbGljayk9XCJfc2VsZWN0Q29sb3IoKVwiPlNhdmU8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiIsIjxkaXYgY2xhc3M9XCJtbmotY29sb3ItcGFuZWwtaGVhZGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJtbmotY29sb3ItcGFuZWwtY29udHJvbHNcIj5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtYnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwibW5qLWNvbG9yLXBhbmVsLXBpY2tlci1idXR0b25cIlxuICAgICAgKGNsaWNrKT1cIm5leHRDbGlja2VkKClcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJwaWNrZXJWaWV3QnV0dG9uTGFiZWxcIlxuICAgICAgY2RrQXJpYUxpdmU9XCJwb2xpdGVcIlxuICAgID5cbiAgICAgIHt7cGlja2VyQnV0dG9uVGV4dH19XG4gICAgICA8ZGl2IGNsYXNzPVwibW5qLWNvbG9yLXBhbmVsLWFycm93XCIgW2NsYXNzLm1uai1jb2xvci1wYW5lbC1pbnZlcnRdPVwiY29sb3JQYW5lbC5jdXJyZW50VmlldyA9PT0gJ3NjYW4nXCI+PC9kaXY+XG4gICAgPC9idXR0b24+XG5cbiAgICA8ZGl2IGNsYXNzPVwibW5qLWNvbG9yLXBhbmVsLXNwYWNlclwiPjwvZGl2PlxuXG4gICAgPGJ1dHRvblxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwibW5qLWNvbG9yLXBhbmVsLXByZXZpb3VzLWJ1dHRvblwiXG4gICAgICBbZGlzYWJsZWRdPVwiIXByZXZpb3VzRW5hYmxlZCgpXCJcbiAgICAgIChjbGljayk9XCJwcmV2aW91c0NsaWNrZWQoKVwiXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInByZXZCdXR0b25MYWJlbFwiXG4gICAgPjwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvblxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwibW5qLWNvbG9yLXBhbmVsLW5leHQtYnV0dG9uXCJcbiAgICAgIFtkaXNhYmxlZF09XCIhbmV4dEVuYWJsZWQoKVwiXG4gICAgICAoY2xpY2spPVwibmV4dENsaWNrZWQoKVwiXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIm5leHRCdXR0b25MYWJlbFwiXG4gICAgPjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19