import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subject } from 'rxjs';
import { Color, PaletteColor } from './color/color';
import { ColorAdapter } from './color/color-adapter';
import { MnjColorConfig } from './color/color-config';
import { MnjColorpickerIntl } from './colorpicker-intl';
import { ColorPickerView } from './views';
import * as i0 from "@angular/core";
/**
 * Possible views for the color-panel.
 * @docs-private
 */
export declare type MnjColorPanelView = 'picker' | 'armonies' | 'palette' | 'scan';
/** Default header for MnjColorPanel */
export declare class MnjColorPanelHeader {
    private _intl;
    colorPanel: MnjColorPanel;
    private _views;
    constructor(_intl: MnjColorpickerIntl, colorPanel: MnjColorPanel, changeDetectorRef: ChangeDetectorRef);
    /** The label for the current color panel view. */
    get pickerButtonText(): string;
    get pickerViewButtonLabel(): string;
    /** The label for the previous button. */
    get prevButtonLabel(): string;
    /** The label for the next button. */
    get nextButtonLabel(): string;
    /** Handles user clicks on the previous button. */
    previousClicked(): void;
    /** Handles user clicks on the next button. */
    nextClicked(): void;
    /** Whether the previous period button is enabled. */
    previousEnabled(): boolean;
    /** Whether the next period button is enabled. */
    nextEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<MnjColorPanelHeader, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjColorPanelHeader, "mnj-color-panel-header", ["mnjColorPanelHeader"], {}, {}, never, never>;
}
/**
 * A color panel that is used as part of the colorpicker.
 * @docs-private
 */
export declare class MnjColorPanel implements AfterContentInit, OnDestroy {
    private _colorAdapter;
    private _config;
    private _changeDetectorRef;
    private _intlChanges;
    /** Color palette to use on the color panel. */
    color: ThemePalette;
    /** Whether the color panel should be started in month or year view. */
    startView: MnjColorPanelView;
    /** The color to start focused on the picker. */
    get startColor(): Color | null;
    set startColor(value: Color | null);
    private _startColor;
    get palette(): PaletteColor[];
    set palette(value: PaletteColor[]);
    private _palette;
    get showAlpha(): boolean;
    set showAlpha(value: boolean);
    private _showAlpha;
    /** The currently selected color. */
    get selected(): Color | null;
    set selected(value: Color | null);
    private _selected;
    /** Emits when the currently selected color changes. */
    readonly selectedChange: EventEmitter<Color>;
    /** Emits when any color is selected. */
    readonly _userSelection: EventEmitter<Color>;
    /** Reference to the current style picker component. */
    currentPicker: ColorPickerView;
    /**
     * The current active color. This determines which time period is shown and which color is
     * highlighted when using keyboard navigation.
     */
    get activeColor(): Color;
    set activeColor(value: Color);
    private _activeColor;
    /** Whether the color panel is in month view. */
    get currentView(): MnjColorPanelView;
    set currentView(value: MnjColorPanelView);
    private _currentView;
    /**
     * Emits whenever there is a state change that the header may need to respond to.
     */
    stateChanges: Subject<void>;
    constructor(_intl: MnjColorpickerIntl, _colorAdapter: ColorAdapter, _config: MnjColorConfig, _changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /** Makes the active view color the selected one. */
    _selectColor(): void;
    _handleKeydownEvent(event: KeyboardEvent): void;
    /** Returns the component instance that corresponds to the current color panel view. */
    private _getCurrentViewComponent;
    static ɵfac: i0.ɵɵFactoryDef<MnjColorPanel, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjColorPanel, "mnj-color-panel", ["mnjColorPanel"], { "color": "color"; "startView": "startView"; "startColor": "startColor"; "palette": "palette"; "showAlpha": "showAlpha"; "selected": "selected"; "activeColor": "activeColor"; }, { "selectedChange": "selectedChange"; "_userSelection": "_userSelection"; }, never, never>;
}
