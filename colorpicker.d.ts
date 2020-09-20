import { Directionality } from '@angular/cdk/bidi';
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, InjectionToken, NgZone, OnDestroy, ViewContainerRef } from '@angular/core';
import { CanColor, CanColorCtor, ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { MnjColorPanelView } from './color-panel';
import { Color, PaletteColor } from './color/color';
import { ColorAdapter } from './color/color-adapter';
import { ColorFormat } from './color/color-spaces';
import { MnjColorpickerInput } from './colorpicker-input';
import * as i0 from "@angular/core";
/** Injection token that determines the scroll handling while the color panel is open. */
export declare const MNJ_COLORPICKER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
/** @docs-private */
export declare function MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy;
/** Possible positions for the colorpicker dropdown along the X axis. */
export declare type ColorpickerDropdownPositionX = 'start' | 'end';
/** Possible positions for the colorpicker dropdown along the Y axis. */
export declare type ColorpickerDropdownPositionY = 'above' | 'below';
/** @docs-private */
export declare const MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY;
};
/** @docs-private */
declare class MnjColorpickerContentBase {
    _elementRef: ElementRef;
    constructor(_elementRef: ElementRef);
}
declare const _MnjColorpickerContentMixinBase: CanColorCtor & typeof MnjColorpickerContentBase;
/**
 * Component used as the content for the colorpicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the color panel itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
export declare class MnjColorpickerContent extends _MnjColorpickerContentMixinBase implements AfterViewInit, OnDestroy, CanColor {
    private _changeDetectorRef;
    /** Reference to the colorpicker that created the overlay. */
    colorpicker: MnjColorpicker;
    /** Whether the colorpicker is above or below the input. */
    _isAbove: boolean;
    /** Current state of the animation. */
    _animationState: 'enter' | 'void';
    /** Emits when an animation has finished. */
    _animationDone: Subject<void>;
    private _subscriptions;
    constructor(elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _handleUserSelection(value: Color): void;
    _startExitAnimation(): void;
    _getSelected(): Color;
    static ɵfac: i0.ɵɵFactoryDef<MnjColorpickerContent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjColorpickerContent, "mnj-colorpicker-content", ["mnjColorpickerContent"], { "color": "color"; }, {}, never, never>;
}
/** Component responsible for managing the colorpicker popup/dialog. */
export declare class MnjColorpicker implements OnDestroy {
    private _dialog;
    private _overlay;
    private _ngZone;
    private _viewContainerRef;
    private _colorAdapter;
    private _dir;
    private _document;
    private _scrollStrategy;
    /** Subscription to value changes in the associated input element. */
    private _inputStateChanges;
    /** Color palette to use on the colorpicker's color panel. */
    get color(): ThemePalette;
    set color(value: ThemePalette);
    _color: ThemePalette;
    get startColor(): Color;
    set startColor(value: Color);
    private _startColor;
    /** The view that the color panel should start in. */
    startView: MnjColorPanelView;
    palette: PaletteColor[];
    get showAlpha(): boolean;
    set showAlpha(value: boolean);
    _showAlpha: boolean;
    get displayFormat(): ColorFormat;
    set displayFormat(value: ColorFormat);
    private _displayFormat;
    /**
     * Whether the color panel UI is in touch mode. In touch mode the color panel opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */
    get touchUi(): boolean;
    set touchUi(value: boolean);
    private _touchUi;
    /** Whether the colorpicker pop-up should be disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /** Preferred position of the colorpicker in the X axis. */
    get xPosition(): ColorpickerDropdownPositionX;
    set xPosition(value: ColorpickerDropdownPositionX);
    private _xPosition;
    /** Preferred position of the colorpicker in the Y axis. */
    get yPosition(): ColorpickerDropdownPositionY;
    set yPosition(value: ColorpickerDropdownPositionY);
    private _yPosition;
    /** Classes to be passed to the color picker panel. Supports the same syntax as `ngClass`. */
    panelClass: string | string[];
    /** Emits when the colorpicker has been opened. */
    openedStream: EventEmitter<void>;
    /** Emits when the colorpicker has been closed. */
    closedStream: EventEmitter<void>;
    /** Whether the color panel is open. */
    get opened(): boolean;
    set opened(value: boolean);
    private _opened;
    /** The id for the colorpicker color panel. */
    id: string;
    /** The currently selected color. */
    get _selectedColor(): Color | null;
    set _selectedColor(value: Color | null);
    private _validSelected;
    /** A reference to the overlay when the color panel is opened as a popup. */
    private _popupRef;
    /** A reference to the dialog when the color panel is opened as a dialog. */
    private _dialogRef;
    /** Reference to the component instantiated in popup mode. */
    private _popupComponentRef;
    /** The element that was focused before the colorpicker was opened. */
    private _focusedElementBeforeOpen;
    /** The input element this colorpicker is associated with. */
    _colorpickerInput: MnjColorpickerInput;
    /** Emits when the colorpicker is disabled. */
    readonly _stateChanges: Subject<boolean>;
    /** Emits when the colorpicker formmatting inputs (showAlpha and displayFormat) changes. */
    readonly _configurationChanges: Subject<boolean>;
    /** Emits new selected color when selected color changes. */
    readonly _selectedChanged: Subject<Color>;
    constructor(_dialog: MatDialog, _overlay: Overlay, _ngZone: NgZone, _viewContainerRef: ViewContainerRef, scrollStrategy: any, _colorAdapter: ColorAdapter, _dir: Directionality, _document: any);
    ngOnDestroy(): void;
    /** Selects the given color */
    select(color: Color): void;
    /**
     * Register an input with this colorpicker.
     * @param input The colorpicker input to register with this colorpicker.
     */
    _registerInput(input: MnjColorpickerInput): void;
    /** Open the color panel. */
    open(): void;
    /** Close the color panel. */
    close(): void;
    /** Open the color panel as a dialog. */
    private _openAsDialog;
    /** Open the color panel as a popup. */
    private _openAsPopup;
    /** Forwards relevant values from the colorpicker to the colorpicker content inside the overlay. */
    protected _forwardContentValues(instance: MnjColorpickerContent): void;
    /** Create the popup. */
    private _createPopup;
    /** Sets the positions of the colorpicker in dropdown mode based on the current configuration. */
    private _setConnectedPositions;
    private _updatePopupPositions;
    /** Destroys the current popup overlay. */
    private _destroyPopup;
    /** Passes the current theme color along to the color panel overlay. */
    private _setTheme;
    static ɵfac: i0.ɵɵFactoryDef<MnjColorpicker, [null, null, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjColorpicker, "mnj-colorpicker", ["mnjColorpicker"], { "color": "color"; "startColor": "startColor"; "startView": "startView"; "palette": "palette"; "showAlpha": "showAlpha"; "displayFormat": "displayFormat"; "touchUi": "touchUi"; "disabled": "disabled"; "xPosition": "xPosition"; "yPosition": "yPosition"; "panelClass": "panelClass"; "opened": "opened"; }, { "openedStream": "opened"; "closedStream": "closed"; }, never, never>;
}
export {};
