import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, InjectionToken, Input, Optional, Output, ViewEncapsulation, } from '@angular/core';
import { mixinColor, } from '@angular/material/core';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { mnjColorpickerAnimations } from './colorpicker-animations';
import * as i0 from "@angular/core";
import * as i1 from "./color-panel";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/cdk/overlay";
import * as i6 from "./color/color-adapter";
import * as i7 from "@angular/cdk/bidi";
/** Used to generate a unique ID for each colorpicker instance. */
let colorpickerUid = 0;
/** Injection token that determines the scroll handling while the color panel is open. */
export const MNJ_COLORPICKER_SCROLL_STRATEGY = new InjectionToken('mnj-colorpicker-scroll-strategy');
/** @docs-private */
export function MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
export const MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MNJ_COLORPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MnjColorpickerContent.
/** @docs-private */
class MnjColorpickerContentBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MnjColorpickerContentMixinBase = mixinColor(MnjColorpickerContentBase);
/**
 * Component used as the content for the colorpicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the color panel itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
export class MnjColorpickerContent extends _MnjColorpickerContentMixinBase {
    constructor(elementRef, _changeDetectorRef) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        /** Current state of the animation. */
        this._animationState = 'enter';
        /** Emits when an animation has finished. */
        this._animationDone = new Subject();
        this._subscriptions = new Subscription();
    }
    ngAfterViewInit() {
        this._subscriptions.add(this.colorpicker._stateChanges.subscribe(() => {
            this._changeDetectorRef.markForCheck();
        }));
    }
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this._animationDone.complete();
    }
    _handleUserSelection(value) {
        this.colorpicker.select(value);
        this.colorpicker.close();
    }
    _startExitAnimation() {
        this._animationState = 'void';
        this._changeDetectorRef.markForCheck();
    }
    _getSelected() {
        return this.colorpicker._selectedColor;
    }
}
MnjColorpickerContent.ɵfac = function MnjColorpickerContent_Factory(t) { return new (t || MnjColorpickerContent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MnjColorpickerContent.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorpickerContent, selectors: [["mnj-colorpicker-content"]], hostAttrs: [1, "mnj-colorpicker-content"], hostVars: 3, hostBindings: function MnjColorpickerContent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵsyntheticHostListener("@transformPanel.done", function MnjColorpickerContent_animation_transformPanel_done_HostBindingHandler() { return ctx._animationDone.next(); });
    } if (rf & 2) {
        i0.ɵɵsyntheticHostProperty("@transformPanel", ctx._animationState);
        i0.ɵɵclassProp("mnj-colorpicker-content-touch", ctx.colorpicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["mnjColorpickerContent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 9, consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "color", "startView", "startColor", "showAlpha", "palette", "selected", "_userSelection"]], template: function MnjColorpickerContent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mnj-color-panel", 0);
        i0.ɵɵlistener("_userSelection", function MnjColorpickerContent_Template_mnj_color_panel__userSelection_0_listener($event) { return ctx._handleUserSelection($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.colorpicker.id)("ngClass", ctx.colorpicker.panelClass)("color", ctx.colorpicker.color)("startView", ctx.colorpicker.startView)("startColor", ctx.colorpicker.startColor)("showAlpha", ctx.colorpicker.showAlpha)("palette", ctx.colorpicker.palette)("selected", ctx._getSelected())("@fadeInColorPanel", "enter");
    } }, directives: [i1.MnjColorPanel, i2.CdkTrapFocus, i3.NgClass], styles: [".mnj-colorpicker-content{border-radius:4px;display:flex;flex-direction:column}.mnj-colorpicker-content .mnj-color-panel{height:400px;width:350px}.mnj-colorpicker-content-touch{display:flex;flex-direction:column;margin:-24px;max-height:80vh;overflow:auto}.mnj-colorpicker-content-touch .mnj-color-panel{max-height:788px;max-width:750px;min-height:312px;min-width:250px}@media (orientation:landscape){.mnj-colorpicker-content-touch .mnj-color-panel{height:80vh;width:64vh}}@media (orientation:portrait){.mnj-colorpicker-content-touch .mnj-color-panel{height:100vw;width:80vw}}"], encapsulation: 2, data: { animation: [
            mnjColorpickerAnimations.transformPanel,
            mnjColorpickerAnimations.fadeInColorPanel,
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorpickerContent, [{
        type: Component,
        args: [{
                selector: 'mnj-colorpicker-content',
                templateUrl: 'colorpicker-content.html',
                styleUrls: ['colorpicker-content.scss'],
                exportAs: 'mnjColorpickerContent',
                inputs: ['color'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    mnjColorpickerAnimations.transformPanel,
                    mnjColorpickerAnimations.fadeInColorPanel,
                ],
                host: {
                    class: 'mnj-colorpicker-content',
                    '[@transformPanel]': '_animationState',
                    '(@transformPanel.done)': '_animationDone.next()',
                    '[class.mnj-colorpicker-content-touch]': 'colorpicker.touchUi',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
// Use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="mnjColorpicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the colorpicker popup/dialog. */
export class MnjColorpicker {
    constructor(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _colorAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._colorAdapter = _colorAdapter;
        this._dir = _dir;
        this._document = _document;
        /** Subscription to value changes in the associated input element. */
        this._inputStateChanges = Subscription.EMPTY;
        this._touchUi = false;
        /** Emits when the colorpicker has been opened. */
        this.openedStream = new EventEmitter();
        /** Emits when the colorpicker has been closed. */
        this.closedStream = new EventEmitter();
        this._opened = false;
        /** The id for the colorpicker color panel. */
        this.id = `mnj-colorpicker-${colorpickerUid++}`;
        this._validSelected = null;
        /** The element that was focused before the colorpicker was opened. */
        this._focusedElementBeforeOpen = null;
        /** Emits when the colorpicker is disabled. */
        this._stateChanges = new Subject();
        /** Emits when the colorpicker formmatting inputs (showAlpha and displayFormat) changes. */
        this._configurationChanges = new Subject();
        /** Emits new selected color when selected color changes. */
        this._selectedChanged = new Subject();
        this._scrollStrategy = scrollStrategy;
    }
    /** Color palette to use on the colorpicker's color panel. */
    get color() {
        return (this._color ||
            (this._colorpickerInput
                ? this._colorpickerInput.getThemePalette()
                : undefined));
    }
    set color(value) {
        this._color = value;
    }
    get startColor() {
        return this._startColor;
    }
    set startColor(value) {
        if (this._colorAdapter.isValid(value)) {
            this._startColor = value;
        }
    }
    get showAlpha() {
        return this._showAlpha;
    }
    set showAlpha(value) {
        value = coerceBooleanProperty(value);
        if (value !== this._showAlpha) {
            this._showAlpha = value;
            this._configurationChanges.next(undefined);
        }
    }
    get displayFormat() {
        return this._displayFormat;
    }
    set displayFormat(value) {
        if (value !== this._displayFormat) {
            this._displayFormat = value;
            this._configurationChanges.next(undefined);
        }
    }
    /**
     * Whether the color panel UI is in touch mode. In touch mode the color panel opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */
    get touchUi() {
        return this._touchUi;
    }
    set touchUi(value) {
        this._touchUi = coerceBooleanProperty(value);
    }
    /** Whether the colorpicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this._colorpickerInput
            ? this._colorpickerInput.disabled
            : !!this._disabled;
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._stateChanges.next(newValue);
        }
    }
    /** Preferred position of the colorpicker in the X axis. */
    get xPosition() {
        return this._xPosition || 'start';
    }
    set xPosition(value) {
        const isFirstChange = !this._xPosition;
        this._xPosition = value;
        if (isFirstChange) {
            this._updatePopupPositions();
        }
        this._stateChanges.next(undefined);
    }
    /** Preferred position of the colorpicker in the Y axis. */
    get yPosition() {
        return this._yPosition || 'below';
    }
    set yPosition(value) {
        const isFirstChange = !this._xPosition;
        this._yPosition = value;
        if (isFirstChange) {
            this._updatePopupPositions();
        }
        this._stateChanges.next(undefined);
    }
    /** Whether the color panel is open. */
    get opened() {
        return this._opened;
    }
    set opened(value) {
        coerceBooleanProperty(value) ? this.open() : this.close();
    }
    /** The currently selected color. */
    get _selectedColor() {
        return this._validSelected;
    }
    set _selectedColor(value) {
        this._validSelected = value;
    }
    ngOnDestroy() {
        this._destroyPopup();
        this.close();
        this._inputStateChanges.unsubscribe();
        this._selectedChanged.complete();
        this._stateChanges.complete();
    }
    /** Selects the given color */
    select(color) {
        const oldValue = this._selectedColor;
        this._selectedColor = color;
        if (!this._colorAdapter.sameColor(oldValue, this._selectedColor)) {
            this._selectedChanged.next(color);
        }
        this._stateChanges.next();
    }
    /**
     * Register an input with this colorpicker.
     * @param input The colorpicker input to register with this colorpicker.
     */
    _registerInput(input) {
        if (this._colorpickerInput) {
            throw Error('A MnjColorpicker can only be associated with a single input.');
        }
        this._inputStateChanges.unsubscribe();
        this._colorpickerInput = input;
        this._inputStateChanges = this._colorpickerInput._stateChanges.subscribe(() => {
            this._stateChanges.next();
            this.select(this._colorpickerInput.value);
        });
    }
    /** Open the color panel. */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._colorpickerInput) {
            throw Error('Attempted to open an MnjColorpicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    }
    /** Close the color panel. */
    close() {
        if (!this._opened) {
            return;
        }
        if (this._popupComponentRef && this._popupRef) {
            const instance = this._popupComponentRef.instance;
            instance._startExitAnimation();
            instance._animationDone
                .pipe(take(1))
                .subscribe(() => this._destroyPopup());
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        const completeClose = () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        };
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the colorpicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the colorpicker on focus, the user could be stuck with not being
            // able to close the color panel at all. We work around it by making the logic, that marks
            // the colorpicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /** Open the color panel as a dialog. */
    _openAsDialog() {
        // Usually this would be handled by `open` which ensures that we can only have one overlay
        // open at a time, however since we reset the variables in async handlers some overlays
        // may slip through if the user opens and closes multiple times in quick succession (e.g.
        // by holding down the enter key).
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(MnjColorpickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mnj-colorpicker-dialog',
        });
        this._dialogRef.afterClosed().subscribe(() => this.close());
        this._dialogRef.componentInstance.colorpicker = this;
        this._setTheme();
    }
    /** Open the color panel as a popup. */
    _openAsPopup() {
        const portal = new ComponentPortal(MnjColorpickerContent, this._viewContainerRef);
        this._destroyPopup();
        this._createPopup();
        this._popupComponentRef = this._popupRef.attach(portal);
        this._forwardContentValues(this._popupComponentRef.instance);
        // Update the position once the calendar has rendered.
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this._popupRef.updatePosition();
        });
    }
    /** Forwards relevant values from the colorpicker to the colorpicker content inside the overlay. */
    _forwardContentValues(instance) {
        instance.colorpicker = this;
        instance.color = this.color;
    }
    /** Create the popup. */
    _createPopup() {
        const positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(this._colorpickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mnj-colorpicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition();
        const overlayConfig = new OverlayConfig({
            positionStrategy: this._setConnectedPositions(positionStrategy),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mnj-colorpicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(filter((event) => {
            // Closing on alt + up is only valid when there's an input associated with the colorpicker.
            return (event.keyCode === ESCAPE ||
                (this._colorpickerInput &&
                    event.altKey &&
                    event.keyCode === UP_ARROW));
        }))).subscribe((event) => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        });
    }
    /** Sets the positions of the colorpicker in dropdown mode based on the current configuration. */
    _setConnectedPositions(strategy) {
        const primaryX = this.xPosition === 'end' ? 'end' : 'start';
        const secondaryX = primaryX === 'start' ? 'end' : 'start';
        const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
        const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
        return strategy.withPositions([
            {
                originX: primaryX,
                originY: secondaryY,
                overlayX: primaryX,
                overlayY: primaryY,
            },
            {
                originX: primaryX,
                originY: primaryY,
                overlayX: primaryX,
                overlayY: secondaryY,
            },
            {
                originX: secondaryX,
                originY: secondaryY,
                overlayX: secondaryX,
                overlayY: primaryY,
            },
            {
                originX: secondaryX,
                originY: primaryY,
                overlayX: secondaryX,
                overlayY: secondaryY,
            },
        ]);
    }
    _updatePopupPositions() {
        if (this._popupRef) {
            this._setConnectedPositions(this._popupRef.getConfig()
                .positionStrategy);
            if (this.opened) {
                this._popupRef.updatePosition();
            }
        }
    }
    /** Destroys the current popup overlay. */
    _destroyPopup() {
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupRef = this._popupComponentRef = null;
        }
    }
    /** Passes the current theme color along to the color panel overlay. */
    _setTheme() {
        const color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    }
}
MnjColorpicker.ɵfac = function MnjColorpicker_Factory(t) { return new (t || MnjColorpicker)(i0.ɵɵdirectiveInject(i4.MatDialog), i0.ɵɵdirectiveInject(i5.Overlay), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(MNJ_COLORPICKER_SCROLL_STRATEGY), i0.ɵɵdirectiveInject(i6.ColorAdapter), i0.ɵɵdirectiveInject(i7.Directionality, 8), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
MnjColorpicker.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorpicker, selectors: [["mnj-colorpicker"]], inputs: { color: "color", startColor: "startColor", startView: "startView", palette: "palette", showAlpha: "showAlpha", displayFormat: "displayFormat", touchUi: "touchUi", disabled: "disabled", xPosition: "xPosition", yPosition: "yPosition", panelClass: "panelClass", opened: "opened" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["mnjColorpicker"], decls: 0, vars: 0, template: function MnjColorpicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorpicker, [{
        type: Component,
        args: [{
                selector: 'mnj-colorpicker',
                template: '',
                exportAs: 'mnjColorpicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i4.MatDialog }, { type: i5.Overlay }, { type: i0.NgZone }, { type: i0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MNJ_COLORPICKER_SCROLL_STRATEGY]
            }] }, { type: i6.ColorAdapter }, { type: i7.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { color: [{
            type: Input
        }], startColor: [{
            type: Input
        }], startView: [{
            type: Input
        }], palette: [{
            type: Input
        }], showAlpha: [{
            type: Input
        }], displayFormat: [{
            type: Input
        }], touchUi: [{
            type: Input
        }], disabled: [{
            type: Input
        }], xPosition: [{
            type: Input
        }], yPosition: [{
            type: Input
        }], panelClass: [{
            type: Input
        }], openedStream: [{
            type: Output,
            args: ['opened']
        }], closedStream: [{
            type: Output,
            args: ['closed']
        }], opened: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvY29sb3JwaWNrZXIudHMiLCIuLi8uLi8uLi9wcm9qZWN0cy9tbmotbmd4LWNvbG9ycGlja2VyL3NyYy9saWIvY29sb3JwaWNrZXItY29udGVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUVMLE9BQU8sRUFDUCxhQUFhLEdBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUdULFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsVUFBVSxHQUVYLE1BQU0sd0JBQXdCLENBQUM7QUFFaEMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQUdwRSxrRUFBa0U7QUFDbEUsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXZCLHlGQUF5RjtBQUN6RixNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRyxJQUFJLGNBQWMsQ0FF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S0FBSztZQWVGLFVBQVU7a0JBRGIsS0FBSztZQWNHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxPQUFPO2tCQUFmLEtBQUs7WUFHRixTQUFTO2tCQURaLEtBQUs7WUFlRixhQUFhO2tCQURoQixLQUFLO1lBaUJGLE9BQU87a0JBRFYsS0FBSztZQVdGLFFBQVE7a0JBRFgsS0FBSztZQWtCRixTQUFTO2tCQURaLEtBQUs7WUFnQkYsU0FBUztrQkFEWixLQUFLO1lBaUJHLFVBQVU7a0JBQWxCLEtBQUs7WUFHWSxZQUFZO2tCQUE3QixNQUFNO21CQUFDLFFBQVE7WUFHRSxZQUFZO2tCQUE3QixNQUFNO21CQUFDLFFBQVE7WUFJWixNQUFNO2tCQURULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgRVNDQVBFLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFNjcm9sbFN0cmF0ZWd5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2FuQ29sb3IsXHJcbiAgQ2FuQ29sb3JDdG9yLFxyXG4gIG1peGluQ29sb3IsXHJcbiAgVGhlbWVQYWxldHRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNbmpDb2xvclBhbmVsVmlldyB9IGZyb20gJy4vY29sb3ItcGFuZWwnO1xyXG5pbXBvcnQgeyBDb2xvciwgUGFsZXR0ZUNvbG9yIH0gZnJvbSAnLi9jb2xvci9jb2xvcic7XHJcbmltcG9ydCB7IENvbG9yQWRhcHRlciB9IGZyb20gJy4vY29sb3IvY29sb3ItYWRhcHRlcic7XHJcbmltcG9ydCB7IENvbG9yRm9ybWF0IH0gZnJvbSAnLi9jb2xvci9jb2xvci1zcGFjZXMnO1xyXG5pbXBvcnQgeyBtbmpDb2xvcnBpY2tlckFuaW1hdGlvbnMgfSBmcm9tICcuL2NvbG9ycGlja2VyLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBNbmpDb2xvcnBpY2tlcklucHV0IH0gZnJvbSAnLi9jb2xvcnBpY2tlci1pbnB1dCc7XHJcblxyXG4vKiogVXNlZCB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZWFjaCBjb2xvcnBpY2tlciBpbnN0YW5jZS4gKi9cclxubGV0IGNvbG9ycGlja2VyVWlkID0gMDtcclxuXHJcbi8qKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBkZXRlcm1pbmVzIHRoZSBzY3JvbGwgaGFuZGxpbmcgd2hpbGUgdGhlIGNvbG9yIHBhbmVsIGlzIG9wZW4uICovXHJcbmV4cG9ydCBjb25zdCBNTkpfQ09MT1JQSUNLRVJfU0NST0xMX1NUUkFURUdZID0gbmV3IEluamVjdGlvblRva2VuPFxyXG4gICgpID0+IFNjcm9sbFN0cmF0ZWd5XHJcbj4oJ21uai1jb2xvcnBpY2tlci1zY3JvbGwtc3RyYXRlZ3knKTtcclxuXHJcbi8qKiBAZG9jcy1wcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBNTkpfQ09MT1JQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUlkoXHJcbiAgb3ZlcmxheTogT3ZlcmxheVxyXG4pOiAoKSA9PiBTY3JvbGxTdHJhdGVneSB7XHJcbiAgcmV0dXJuICgpID0+IG92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCk7XHJcbn1cclxuXHJcbi8qKiBQb3NzaWJsZSBwb3NpdGlvbnMgZm9yIHRoZSBjb2xvcnBpY2tlciBkcm9wZG93biBhbG9uZyB0aGUgWCBheGlzLiAqL1xyXG5leHBvcnQgdHlwZSBDb2xvcnBpY2tlckRyb3Bkb3duUG9zaXRpb25YID0gJ3N0YXJ0JyB8ICdlbmQnO1xyXG5cclxuLyoqIFBvc3NpYmxlIHBvc2l0aW9ucyBmb3IgdGhlIGNvbG9ycGlja2VyIGRyb3Bkb3duIGFsb25nIHRoZSBZIGF4aXMuICovXHJcbmV4cG9ydCB0eXBlIENvbG9ycGlja2VyRHJvcGRvd25Qb3NpdGlvblkgPSAnYWJvdmUnIHwgJ2JlbG93JztcclxuXHJcbi8qKiBAZG9jcy1wcml2YXRlICovXHJcbmV4cG9ydCBjb25zdCBNTkpfQ09MT1JQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIgPSB7XHJcbiAgcHJvdmlkZTogTU5KX0NPTE9SUElDS0VSX1NDUk9MTF9TVFJBVEVHWSxcclxuICBkZXBzOiBbT3ZlcmxheV0sXHJcbiAgdXNlRmFjdG9yeTogTU5KX0NPTE9SUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZLFxyXG59O1xyXG5cclxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNbmpDb2xvcnBpY2tlckNvbnRlbnQuXHJcbi8qKiBAZG9jcy1wcml2YXRlICovXHJcbmNsYXNzIE1uakNvbG9ycGlja2VyQ29udGVudEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxufVxyXG5jb25zdCBfTW5qQ29sb3JwaWNrZXJDb250ZW50TWl4aW5CYXNlOiBDYW5Db2xvckN0b3IgJlxyXG4gIHR5cGVvZiBNbmpDb2xvcnBpY2tlckNvbnRlbnRCYXNlID0gbWl4aW5Db2xvcihNbmpDb2xvcnBpY2tlckNvbnRlbnRCYXNlKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdXNlZCBhcyB0aGUgY29udGVudCBmb3IgdGhlIGNvbG9ycGlja2VyIGRpYWxvZyBhbmQgcG9wdXAuIFdlIHVzZSB0aGlzIGluc3RlYWQgb2YgdXNpbmdcclxuICogTWF0Q2FsZW5kYXIgZGlyZWN0bHkgYXMgdGhlIGNvbnRlbnQgc28gd2UgY2FuIGNvbnRyb2wgdGhlIGluaXRpYWwgZm9jdXMuIFRoaXMgYWxzbyBnaXZlcyB1cyBhXHJcbiAqIHBsYWNlIHRvIHB1dCBhZGRpdGlvbmFsIGZlYXR1cmVzIG9mIHRoZSBwb3B1cCB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgY29sb3IgcGFuZWwgaXRzZWxmIGluIHRoZVxyXG4gKiBmdXR1cmUuIChlLmcuIGNvbmZpcm1hdGlvbiBidXR0b25zKS5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtbmotY29sb3JwaWNrZXItY29udGVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdjb2xvcnBpY2tlci1jb250ZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjb2xvcnBpY2tlci1jb250ZW50LnNjc3MnXSxcclxuICBleHBvcnRBczogJ21uakNvbG9ycGlja2VyQ29udGVudCcsXHJcbiAgaW5wdXRzOiBbJ2NvbG9yJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICBtbmpDb2xvcnBpY2tlckFuaW1hdGlvbnMudHJhbnNmb3JtUGFuZWwsXHJcbiAgICBtbmpDb2xvcnBpY2tlckFuaW1hdGlvbnMuZmFkZUluQ29sb3JQYW5lbCxcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbW5qLWNvbG9ycGlja2VyLWNvbnRlbnQnLFxyXG4gICAgJ1tAdHJhbnNmb3JtUGFuZWxdJzogJ19hbmltYXRpb25TdGF0ZScsXHJcbiAgICAnKEB0cmFuc2Zvcm1QYW5lbC5kb25lKSc6ICdfYW5pbWF0aW9uRG9uZS5uZXh0KCknLFxyXG4gICAgJ1tjbGFzcy5tbmotY29sb3JwaWNrZXItY29udGVudC10b3VjaF0nOiAnY29sb3JwaWNrZXIudG91Y2hVaScsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1uakNvbG9ycGlja2VyQ29udGVudFxyXG4gIGV4dGVuZHMgX01uakNvbG9ycGlja2VyQ29udGVudE1peGluQmFzZVxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBDYW5Db2xvciB7XHJcbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgY29sb3JwaWNrZXIgdGhhdCBjcmVhdGVkIHRoZSBvdmVybGF5LiAqL1xyXG4gIGNvbG9ycGlja2VyOiBNbmpDb2xvcnBpY2tlcjtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNvbG9ycGlja2VyIGlzIGFib3ZlIG9yIGJlbG93IHRoZSBpbnB1dC4gKi9cclxuICBfaXNBYm92ZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIEN1cnJlbnQgc3RhdGUgb2YgdGhlIGFuaW1hdGlvbi4gKi9cclxuICBfYW5pbWF0aW9uU3RhdGU6ICdlbnRlcicgfCAndm9pZCcgPSAnZW50ZXInO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhbiBhbmltYXRpb24gaGFzIGZpbmlzaGVkLiAqL1xyXG4gIF9hbmltYXRpb25Eb25lID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKFxyXG4gICAgICB0aGlzLmNvbG9ycGlja2VyLl9zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2FuaW1hdGlvbkRvbmUuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVVc2VyU2VsZWN0aW9uKHZhbHVlOiBDb2xvcikge1xyXG4gICAgdGhpcy5jb2xvcnBpY2tlci5zZWxlY3QodmFsdWUpO1xyXG4gICAgdGhpcy5jb2xvcnBpY2tlci5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgX3N0YXJ0RXhpdEFuaW1hdGlvbigpIHtcclxuICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gJ3ZvaWQnO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0U2VsZWN0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xvcnBpY2tlci5fc2VsZWN0ZWRDb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFVzZSBhIGNvbXBvbmVudCBpbnN0ZWFkIG9mIGEgZGlyZWN0aXZlIGhlcmUgc28gdGhlIHVzZXIgY2FuIHVzZSBpbXBsaWNpdFxyXG4vLyB0ZW1wbGF0ZSByZWZlcmVuY2UgdmFyaWFibGVzIChlLmcuICNkIHZzICNkPVwibW5qQ29sb3JwaWNrZXJcIikuIFdlIGNhbiBjaGFuZ2UgdGhpcyB0byBhIGRpcmVjdGl2ZVxyXG4vLyBpZiBhbmd1bGFyIGFkZHMgc3VwcG9ydCBmb3IgYGV4cG9ydEFzOiAnJGltcGxpY2l0J2Agb24gZGlyZWN0aXZlcy5cclxuLyoqIENvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgdGhlIGNvbG9ycGlja2VyIHBvcHVwL2RpYWxvZy4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtbmotY29sb3JwaWNrZXInLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBleHBvcnRBczogJ21uakNvbG9ycGlja2VyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW5qQ29sb3JwaWNrZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5OiAoKSA9PiBTY3JvbGxTdHJhdGVneTtcclxuXHJcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB2YWx1ZSBjaGFuZ2VzIGluIHRoZSBhc3NvY2lhdGVkIGlucHV0IGVsZW1lbnQuICovXHJcbiAgcHJpdmF0ZSBfaW5wdXRTdGF0ZUNoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIC8qKiBDb2xvciBwYWxldHRlIHRvIHVzZSBvbiB0aGUgY29sb3JwaWNrZXIncyBjb2xvciBwYW5lbC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBjb2xvcigpOiBUaGVtZVBhbGV0dGUge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5fY29sb3IgfHxcclxuICAgICAgKHRoaXMuX2NvbG9ycGlja2VySW5wdXRcclxuICAgICAgICA/IHRoaXMuX2NvbG9ycGlja2VySW5wdXQuZ2V0VGhlbWVQYWxldHRlKClcclxuICAgICAgICA6IHVuZGVmaW5lZClcclxuICAgICk7XHJcbiAgfVxyXG4gIHNldCBjb2xvcih2YWx1ZTogVGhlbWVQYWxldHRlKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gIH1cclxuICBfY29sb3I6IFRoZW1lUGFsZXR0ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgc3RhcnRDb2xvcigpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRDb2xvcjtcclxuICB9XHJcblxyXG4gIHNldCBzdGFydENvbG9yKHZhbHVlOiBDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2NvbG9yQWRhcHRlci5pc1ZhbGlkKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9zdGFydENvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGFydENvbG9yOiBDb2xvcjtcclxuXHJcbiAgLyoqIFRoZSB2aWV3IHRoYXQgdGhlIGNvbG9yIHBhbmVsIHNob3VsZCBzdGFydCBpbi4gKi9cclxuICBASW5wdXQoKSBzdGFydFZpZXc6IE1uakNvbG9yUGFuZWxWaWV3O1xyXG5cclxuICBASW5wdXQoKSBwYWxldHRlOiBQYWxldHRlQ29sb3JbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgc2hvd0FscGhhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBbHBoYTtcclxuICB9XHJcblxyXG4gIHNldCBzaG93QWxwaGEodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fc2hvd0FscGhhKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dBbHBoYSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uQ2hhbmdlcy5uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIF9zaG93QWxwaGE6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc3BsYXlGb3JtYXQoKTogQ29sb3JGb3JtYXQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlGb3JtYXQ7XHJcbiAgfVxyXG4gIHNldCBkaXNwbGF5Rm9ybWF0KHZhbHVlOiBDb2xvckZvcm1hdCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9kaXNwbGF5Rm9ybWF0KSB7XHJcbiAgICAgIHRoaXMuX2Rpc3BsYXlGb3JtYXQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fY29uZmlndXJhdGlvbkNoYW5nZXMubmV4dCh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIF9kaXNwbGF5Rm9ybWF0OiBDb2xvckZvcm1hdDtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgY29sb3IgcGFuZWwgVUkgaXMgaW4gdG91Y2ggbW9kZS4gSW4gdG91Y2ggbW9kZSB0aGUgY29sb3IgcGFuZWwgb3BlbnMgaW4gYSBkaWFsb2cgcmF0aGVyXHJcbiAgICogdGhhbiBhIHBvcHVwIGFuZCBlbGVtZW50cyBoYXZlIG1vcmUgcGFkZGluZyB0byBhbGxvdyBmb3IgYmlnZ2VyIHRvdWNoIHRhcmdldHMuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdG91Y2hVaSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b3VjaFVpO1xyXG4gIH1cclxuICBzZXQgdG91Y2hVaSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdG91Y2hVaSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3RvdWNoVWkgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNvbG9ycGlja2VyIHBvcC11cCBzaG91bGQgYmUgZGlzYWJsZWQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jb2xvcnBpY2tlcklucHV0XHJcbiAgICAgID8gdGhpcy5fY29sb3JwaWNrZXJJbnB1dC5kaXNhYmxlZFxyXG4gICAgICA6ICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG5cclxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5fc3RhdGVDaGFuZ2VzLm5leHQobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIFByZWZlcnJlZCBwb3NpdGlvbiBvZiB0aGUgY29sb3JwaWNrZXIgaW4gdGhlIFggYXhpcy4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB4UG9zaXRpb24oKTogQ29sb3JwaWNrZXJEcm9wZG93blBvc2l0aW9uWCB7XHJcbiAgICByZXR1cm4gdGhpcy5feFBvc2l0aW9uIHx8ICdzdGFydCc7XHJcbiAgfVxyXG4gIHNldCB4UG9zaXRpb24odmFsdWU6IENvbG9ycGlja2VyRHJvcGRvd25Qb3NpdGlvblgpIHtcclxuICAgIGNvbnN0IGlzRmlyc3RDaGFuZ2UgPSAhdGhpcy5feFBvc2l0aW9uO1xyXG4gICAgdGhpcy5feFBvc2l0aW9uID0gdmFsdWU7XHJcbiAgICBpZiAoaXNGaXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLl91cGRhdGVQb3B1cFBvc2l0aW9ucygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLm5leHQodW5kZWZpbmVkKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfeFBvc2l0aW9uOiBDb2xvcnBpY2tlckRyb3Bkb3duUG9zaXRpb25YO1xyXG5cclxuICAvKiogUHJlZmVycmVkIHBvc2l0aW9uIG9mIHRoZSBjb2xvcnBpY2tlciBpbiB0aGUgWSBheGlzLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHlQb3NpdGlvbigpOiBDb2xvcnBpY2tlckRyb3Bkb3duUG9zaXRpb25ZIHtcclxuICAgIHJldHVybiB0aGlzLl95UG9zaXRpb24gfHwgJ2JlbG93JztcclxuICB9XHJcblxyXG4gIHNldCB5UG9zaXRpb24odmFsdWU6IENvbG9ycGlja2VyRHJvcGRvd25Qb3NpdGlvblkpIHtcclxuICAgIGNvbnN0IGlzRmlyc3RDaGFuZ2UgPSAhdGhpcy5feFBvc2l0aW9uO1xyXG4gICAgdGhpcy5feVBvc2l0aW9uID0gdmFsdWU7XHJcbiAgICBpZiAoaXNGaXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLl91cGRhdGVQb3B1cFBvc2l0aW9ucygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLm5leHQodW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3lQb3NpdGlvbjogQ29sb3JwaWNrZXJEcm9wZG93blBvc2l0aW9uWTtcclxuXHJcbiAgLyoqIENsYXNzZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBjb2xvciBwaWNrZXIgcGFuZWwuIFN1cHBvcnRzIHRoZSBzYW1lIHN5bnRheCBhcyBgbmdDbGFzc2AuICovXHJcbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb2xvcnBpY2tlciBoYXMgYmVlbiBvcGVuZWQuICovXHJcbiAgQE91dHB1dCgnb3BlbmVkJykgb3BlbmVkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb2xvcnBpY2tlciBoYXMgYmVlbiBjbG9zZWQuICovXHJcbiAgQE91dHB1dCgnY2xvc2VkJykgY2xvc2VkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjb2xvciBwYW5lbCBpcyBvcGVuLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XHJcbiAgfVxyXG4gIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSkgPyB0aGlzLm9wZW4oKSA6IHRoaXMuY2xvc2UoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgaWQgZm9yIHRoZSBjb2xvcnBpY2tlciBjb2xvciBwYW5lbC4gKi9cclxuICBpZDogc3RyaW5nID0gYG1uai1jb2xvcnBpY2tlci0ke2NvbG9ycGlja2VyVWlkKyt9YDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IuICovXHJcbiAgZ2V0IF9zZWxlY3RlZENvbG9yKCk6IENvbG9yIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRTZWxlY3RlZDtcclxuICB9XHJcbiAgc2V0IF9zZWxlY3RlZENvbG9yKHZhbHVlOiBDb2xvciB8IG51bGwpIHtcclxuICAgIHRoaXMuX3ZhbGlkU2VsZWN0ZWQgPSB2YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdmFsaWRTZWxlY3RlZDogQ29sb3IgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBvdmVybGF5IHdoZW4gdGhlIGNvbG9yIHBhbmVsIGlzIG9wZW5lZCBhcyBhIHBvcHVwLiAqL1xyXG4gIHByaXZhdGUgX3BvcHVwUmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcclxuXHJcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBkaWFsb2cgd2hlbiB0aGUgY29sb3IgcGFuZWwgaXMgb3BlbmVkIGFzIGEgZGlhbG9nLiAqL1xyXG4gIHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1uakNvbG9ycGlja2VyQ29udGVudD4gfCBudWxsO1xyXG5cclxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgaW5zdGFudGlhdGVkIGluIHBvcHVwIG1vZGUuICovXHJcbiAgcHJpdmF0ZSBfcG9wdXBDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxNbmpDb2xvcnBpY2tlckNvbnRlbnQ+IHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBjb2xvcnBpY2tlciB3YXMgb3BlbmVkLiAqL1xyXG4gIHByaXZhdGUgX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHRoaXMgY29sb3JwaWNrZXIgaXMgYXNzb2NpYXRlZCB3aXRoLiAqL1xyXG4gIF9jb2xvcnBpY2tlcklucHV0OiBNbmpDb2xvcnBpY2tlcklucHV0O1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgY29sb3JwaWNrZXIgaXMgZGlzYWJsZWQuICovXHJcbiAgcmVhZG9ubHkgX3N0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb2xvcnBpY2tlciBmb3JtbWF0dGluZyBpbnB1dHMgKHNob3dBbHBoYSBhbmQgZGlzcGxheUZvcm1hdCkgY2hhbmdlcy4gKi9cclxuICByZWFkb25seSBfY29uZmlndXJhdGlvbkNoYW5nZXMgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICAvKiogRW1pdHMgbmV3IHNlbGVjdGVkIGNvbG9yIHdoZW4gc2VsZWN0ZWQgY29sb3IgY2hhbmdlcy4gKi9cclxuICByZWFkb25seSBfc2VsZWN0ZWRDaGFuZ2VkID0gbmV3IFN1YmplY3Q8Q29sb3I+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgQEluamVjdChNTkpfQ09MT1JQSUNLRVJfU0NST0xMX1NUUkFURUdZKSBzY3JvbGxTdHJhdGVneTogYW55LFxyXG4gICAgcHJpdmF0ZSBfY29sb3JBZGFwdGVyOiBDb2xvckFkYXB0ZXIsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kgPSBzY3JvbGxTdHJhdGVneTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGVzdHJveVBvcHVwKCk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9pbnB1dFN0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRDaGFuZ2VkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBTZWxlY3RzIHRoZSBnaXZlbiBjb2xvciAqL1xyXG4gIHNlbGVjdChjb2xvcjogQ29sb3IpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fc2VsZWN0ZWRDb2xvcjtcclxuICAgIHRoaXMuX3NlbGVjdGVkQ29sb3IgPSBjb2xvcjtcclxuICAgIGlmICghdGhpcy5fY29sb3JBZGFwdGVyLnNhbWVDb2xvcihvbGRWYWx1ZSwgdGhpcy5fc2VsZWN0ZWRDb2xvcikpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWRDaGFuZ2VkLm5leHQoY29sb3IpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGFuIGlucHV0IHdpdGggdGhpcyBjb2xvcnBpY2tlci5cclxuICAgKiBAcGFyYW0gaW5wdXQgVGhlIGNvbG9ycGlja2VyIGlucHV0IHRvIHJlZ2lzdGVyIHdpdGggdGhpcyBjb2xvcnBpY2tlci5cclxuICAgKi9cclxuICBfcmVnaXN0ZXJJbnB1dChpbnB1dDogTW5qQ29sb3JwaWNrZXJJbnB1dCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2NvbG9ycGlja2VySW5wdXQpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgJ0EgTW5qQ29sb3JwaWNrZXIgY2FuIG9ubHkgYmUgYXNzb2NpYXRlZCB3aXRoIGEgc2luZ2xlIGlucHV0LidcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2lucHV0U3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9jb2xvcnBpY2tlcklucHV0ID0gaW5wdXQ7XHJcbiAgICB0aGlzLl9pbnB1dFN0YXRlQ2hhbmdlcyA9IHRoaXMuX2NvbG9ycGlja2VySW5wdXQuX3N0YXRlQ2hhbmdlcy5zdWJzY3JpYmUoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLl9zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuX2NvbG9ycGlja2VySW5wdXQudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIE9wZW4gdGhlIGNvbG9yIHBhbmVsLiAqL1xyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3BlbmVkIHx8IHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLl9jb2xvcnBpY2tlcklucHV0KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICdBdHRlbXB0ZWQgdG8gb3BlbiBhbiBNbmpDb2xvcnBpY2tlciB3aXRoIG5vIGFzc29jaWF0ZWQgaW5wdXQuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b3VjaFVpID8gdGhpcy5fb3BlbkFzRGlhbG9nKCkgOiB0aGlzLl9vcGVuQXNQb3B1cCgpO1xyXG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcclxuICAgIHRoaXMub3BlbmVkU3RyZWFtLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBDbG9zZSB0aGUgY29sb3IgcGFuZWwuICovXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX29wZW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fcG9wdXBDb21wb25lbnRSZWYgJiYgdGhpcy5fcG9wdXBSZWYpIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9wb3B1cENvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgaW5zdGFuY2UuX3N0YXJ0RXhpdEFuaW1hdGlvbigpO1xyXG4gICAgICBpbnN0YW5jZS5fYW5pbWF0aW9uRG9uZVxyXG4gICAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9kZXN0cm95UG9wdXAoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XHJcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICB0aGlzLl9kaWFsb2dSZWYgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIC8vIFRoZSBgX29wZW5lZGAgY291bGQndmUgYmVlbiByZXNldCBhbHJlYWR5IGlmXHJcbiAgICAgIC8vIHdlIGdvdCB0d28gZXZlbnRzIGluIHF1aWNrIHN1Y2Nlc3Npb24uXHJcbiAgICAgIGlmICh0aGlzLl9vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsb3NlZFN0cmVhbS5lbWl0KCk7XHJcbiAgICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiAmJlxyXG4gICAgICB0eXBlb2YgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzID09PSAnZnVuY3Rpb24nXHJcbiAgICApIHtcclxuICAgICAgLy8gQmVjYXVzZSBJRSBtb3ZlcyBmb2N1cyBhc3luY2hyb25vdXNseSwgd2UgY2FuJ3QgY291bnQgb24gaXQgYmVpbmcgcmVzdG9yZWQgYmVmb3JlIHdlJ3ZlXHJcbiAgICAgIC8vIG1hcmtlZCB0aGUgY29sb3JwaWNrZXIgYXMgY2xvc2VkLiBJZiB0aGUgZXZlbnQgZmlyZXMgb3V0IG9mIHNlcXVlbmNlIGFuZCB0aGUgZWxlbWVudCB0aGF0XHJcbiAgICAgIC8vIHdlJ3JlIHJlZm9jdXNpbmcgb3BlbnMgdGhlIGNvbG9ycGlja2VyIG9uIGZvY3VzLCB0aGUgdXNlciBjb3VsZCBiZSBzdHVjayB3aXRoIG5vdCBiZWluZ1xyXG4gICAgICAvLyBhYmxlIHRvIGNsb3NlIHRoZSBjb2xvciBwYW5lbCBhdCBhbGwuIFdlIHdvcmsgYXJvdW5kIGl0IGJ5IG1ha2luZyB0aGUgbG9naWMsIHRoYXQgbWFya3NcclxuICAgICAgLy8gdGhlIGNvbG9ycGlja2VyIGFzIGNsb3NlZCwgYXN5bmMgYXMgd2VsbC5cclxuICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoY29tcGxldGVDbG9zZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wbGV0ZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogT3BlbiB0aGUgY29sb3IgcGFuZWwgYXMgYSBkaWFsb2cuICovXHJcbiAgcHJpdmF0ZSBfb3BlbkFzRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgLy8gVXN1YWxseSB0aGlzIHdvdWxkIGJlIGhhbmRsZWQgYnkgYG9wZW5gIHdoaWNoIGVuc3VyZXMgdGhhdCB3ZSBjYW4gb25seSBoYXZlIG9uZSBvdmVybGF5XHJcbiAgICAvLyBvcGVuIGF0IGEgdGltZSwgaG93ZXZlciBzaW5jZSB3ZSByZXNldCB0aGUgdmFyaWFibGVzIGluIGFzeW5jIGhhbmRsZXJzIHNvbWUgb3ZlcmxheXNcclxuICAgIC8vIG1heSBzbGlwIHRocm91Z2ggaWYgdGhlIHVzZXIgb3BlbnMgYW5kIGNsb3NlcyBtdWx0aXBsZSB0aW1lcyBpbiBxdWljayBzdWNjZXNzaW9uIChlLmcuXHJcbiAgICAvLyBieSBob2xkaW5nIGRvd24gdGhlIGVudGVyIGtleSkuXHJcbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XHJcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RpYWxvZ1JlZiA9IHRoaXMuX2RpYWxvZy5vcGVuPE1uakNvbG9ycGlja2VyQ29udGVudD4oXHJcbiAgICAgIE1uakNvbG9ycGlja2VyQ29udGVudCxcclxuICAgICAge1xyXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyID8gdGhpcy5fZGlyLnZhbHVlIDogJ2x0cicsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5fdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwYW5lbENsYXNzOiAnbW5qLWNvbG9ycGlja2VyLWRpYWxvZycsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgICB0aGlzLl9kaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuY29sb3JwaWNrZXIgPSB0aGlzO1xyXG4gICAgdGhpcy5fc2V0VGhlbWUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBPcGVuIHRoZSBjb2xvciBwYW5lbCBhcyBhIHBvcHVwLiAqL1xyXG4gIHByaXZhdGUgX29wZW5Bc1BvcHVwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxNbmpDb2xvcnBpY2tlckNvbnRlbnQ+KFxyXG4gICAgICBNbmpDb2xvcnBpY2tlckNvbnRlbnQsXHJcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWZcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fZGVzdHJveVBvcHVwKCk7XHJcbiAgICB0aGlzLl9jcmVhdGVQb3B1cCgpO1xyXG4gICAgdGhpcy5fcG9wdXBDb21wb25lbnRSZWYgPSB0aGlzLl9wb3B1cFJlZiEuYXR0YWNoKHBvcnRhbCk7XHJcbiAgICB0aGlzLl9mb3J3YXJkQ29udGVudFZhbHVlcyh0aGlzLl9wb3B1cENvbXBvbmVudFJlZi5pbnN0YW5jZSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbiBvbmNlIHRoZSBjYWxlbmRhciBoYXMgcmVuZGVyZWQuXHJcbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9wb3B1cFJlZiEudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZvcndhcmRzIHJlbGV2YW50IHZhbHVlcyBmcm9tIHRoZSBjb2xvcnBpY2tlciB0byB0aGUgY29sb3JwaWNrZXIgY29udGVudCBpbnNpZGUgdGhlIG92ZXJsYXkuICovXHJcbiAgcHJvdGVjdGVkIF9mb3J3YXJkQ29udGVudFZhbHVlcyhpbnN0YW5jZTogTW5qQ29sb3JwaWNrZXJDb250ZW50KSB7XHJcbiAgICBpbnN0YW5jZS5jb2xvcnBpY2tlciA9IHRoaXM7XHJcbiAgICBpbnN0YW5jZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cC4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVQb3B1cCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuX2NvbG9ycGlja2VySW5wdXQuZ2V0Q29ubmVjdGVkT3ZlcmxheU9yaWdpbigpKVxyXG4gICAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKCcubW5qLWNvbG9ycGlja2VyLWNvbnRlbnQnKVxyXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcclxuICAgICAgLndpdGhWaWV3cG9ydE1hcmdpbig4KVxyXG4gICAgICAud2l0aExvY2tlZFBvc2l0aW9uKCk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fc2V0Q29ubmVjdGVkUG9zaXRpb25zKHBvc2l0aW9uU3RyYXRlZ3kpLFxyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgYmFja2Ryb3BDbGFzczogJ21hdC1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcclxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9zY3JvbGxTdHJhdGVneSgpLFxyXG4gICAgICBwYW5lbENsYXNzOiAnbW5qLWNvbG9ycGlja2VyLXBvcHVwJyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwUmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgICB0aGlzLl9wb3B1cFJlZi5vdmVybGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XHJcblxyXG4gICAgbWVyZ2UoXHJcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmJhY2tkcm9wQ2xpY2soKSxcclxuICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNobWVudHMoKSxcclxuICAgICAgdGhpcy5fcG9wdXBSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgLy8gQ2xvc2luZyBvbiBhbHQgKyB1cCBpcyBvbmx5IHZhbGlkIHdoZW4gdGhlcmUncyBhbiBpbnB1dCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbG9ycGlja2VyLlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFIHx8XHJcbiAgICAgICAgICAgICh0aGlzLl9jb2xvcnBpY2tlcklucHV0ICYmXHJcbiAgICAgICAgICAgICAgZXZlbnQuYWx0S2V5ICYmXHJcbiAgICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gVVBfQVJST1cpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBTZXRzIHRoZSBwb3NpdGlvbnMgb2YgdGhlIGNvbG9ycGlja2VyIGluIGRyb3Bkb3duIG1vZGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbi4gKi9cclxuICBwcml2YXRlIF9zZXRDb25uZWN0ZWRQb3NpdGlvbnMoc3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSkge1xyXG4gICAgY29uc3QgcHJpbWFyeVggPSB0aGlzLnhQb3NpdGlvbiA9PT0gJ2VuZCcgPyAnZW5kJyA6ICdzdGFydCc7XHJcbiAgICBjb25zdCBzZWNvbmRhcnlYID0gcHJpbWFyeVggPT09ICdzdGFydCcgPyAnZW5kJyA6ICdzdGFydCc7XHJcbiAgICBjb25zdCBwcmltYXJ5WSA9IHRoaXMueVBvc2l0aW9uID09PSAnYWJvdmUnID8gJ2JvdHRvbScgOiAndG9wJztcclxuICAgIGNvbnN0IHNlY29uZGFyeVkgPSBwcmltYXJ5WSA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG5cclxuICAgIHJldHVybiBzdHJhdGVneS53aXRoUG9zaXRpb25zKFtcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6IHByaW1hcnlYLFxyXG4gICAgICAgIG9yaWdpblk6IHNlY29uZGFyeVksXHJcbiAgICAgICAgb3ZlcmxheVg6IHByaW1hcnlYLFxyXG4gICAgICAgIG92ZXJsYXlZOiBwcmltYXJ5WSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6IHByaW1hcnlYLFxyXG4gICAgICAgIG9yaWdpblk6IHByaW1hcnlZLFxyXG4gICAgICAgIG92ZXJsYXlYOiBwcmltYXJ5WCxcclxuICAgICAgICBvdmVybGF5WTogc2Vjb25kYXJ5WSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6IHNlY29uZGFyeVgsXHJcbiAgICAgICAgb3JpZ2luWTogc2Vjb25kYXJ5WSxcclxuICAgICAgICBvdmVybGF5WDogc2Vjb25kYXJ5WCxcclxuICAgICAgICBvdmVybGF5WTogcHJpbWFyeVksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW5YOiBzZWNvbmRhcnlYLFxyXG4gICAgICAgIG9yaWdpblk6IHByaW1hcnlZLFxyXG4gICAgICAgIG92ZXJsYXlYOiBzZWNvbmRhcnlYLFxyXG4gICAgICAgIG92ZXJsYXlZOiBzZWNvbmRhcnlZLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVQb3B1cFBvc2l0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLl9wb3B1cFJlZikge1xyXG4gICAgICB0aGlzLl9zZXRDb25uZWN0ZWRQb3NpdGlvbnMoXHJcbiAgICAgICAgdGhpcy5fcG9wdXBSZWYuZ2V0Q29uZmlnKClcclxuICAgICAgICAgIC5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIERlc3Ryb3lzIHRoZSBjdXJyZW50IHBvcHVwIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBfZGVzdHJveVBvcHVwKCkge1xyXG4gICAgaWYgKHRoaXMuX3BvcHVwUmVmKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5fcG9wdXBSZWYgPSB0aGlzLl9wb3B1cENvbXBvbmVudFJlZiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogUGFzc2VzIHRoZSBjdXJyZW50IHRoZW1lIGNvbG9yIGFsb25nIHRvIHRoZSBjb2xvciBwYW5lbCBvdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgX3NldFRoZW1lKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgaWYgKHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmLmluc3RhbmNlLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XHJcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bW5qLWNvbG9yLXBhbmVsXG4gIGNka1RyYXBGb2N1c1xuICBbaWRdPVwiY29sb3JwaWNrZXIuaWRcIlxuICBbbmdDbGFzc109XCJjb2xvcnBpY2tlci5wYW5lbENsYXNzXCJcbiAgW2NvbG9yXT1cImNvbG9ycGlja2VyLmNvbG9yXCJcbiAgW3N0YXJ0Vmlld109XCJjb2xvcnBpY2tlci5zdGFydFZpZXdcIlxuICBbc3RhcnRDb2xvcl09XCJjb2xvcnBpY2tlci5zdGFydENvbG9yXCJcbiAgW3Nob3dBbHBoYV09XCJjb2xvcnBpY2tlci5zaG93QWxwaGFcIlxuICBbcGFsZXR0ZV09XCJjb2xvcnBpY2tlci5wYWxldHRlXCJcbiAgW3NlbGVjdGVkXT1cIl9nZXRTZWxlY3RlZCgpXCJcbiAgW0BmYWRlSW5Db2xvclBhbmVsXT1cIidlbnRlcidcIlxuICAoX3VzZXJTZWxlY3Rpb24pPVwiX2hhbmRsZVVzZXJTZWxlY3Rpb24oJGV2ZW50KVwiXG4+XG48L21uai1jb2xvci1wYW5lbD5cbiJdfQ==