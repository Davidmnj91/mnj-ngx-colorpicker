import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BaseColorpickerView, ColorPickerView } from '../colorpicker-view';
import * as i0 from "@angular/core";
import * as i1 from "../../color/color-adapter";
import * as i2 from "../../colorpicker-intl";
import * as i3 from "@angular/common";
import * as i4 from "../../selectors/pipette/pipette-selector";
import * as i5 from "@angular/material/button";
import * as i6 from "../../selectors/preview-swatch/preview-swatch";
import * as i7 from "../../selectors/input/input-selector";
function MnjScanPickerView_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function MnjScanPickerView_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(2); return _r1.click(); })("drop", function MnjScanPickerView_div_0_Template_div_drop_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.uploadFile($event); })("dragover", function MnjScanPickerView_div_0_Template_div_dragover_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6._allowDrop($event); });
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.uploadPhotoToScanLabel);
} }
function MnjScanPickerView_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mnj-pipette-selector", 6);
    i0.ɵɵlistener("pipetteColorChange", function MnjScanPickerView_ng_container_3_Template_mnj_pipette_selector_pipetteColorChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.changeColor($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 7);
    i0.ɵɵlistener("click", function MnjScanPickerView_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8); i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(2); return _r1.click(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 8);
    i0.ɵɵelement(4, "path", 9);
    i0.ɵɵelement(5, "path", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelement(7, "mnj-preview-swatch", 12);
    i0.ɵɵelement(8, "mnj-input-selector", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", ctx_r2._loadedImage);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("color", ctx_r2.activeColor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", ctx_r2.activeColor);
} }
export class MnjScanPickerView extends BaseColorpickerView {
    constructor(_colorAdapter, _intl, changeDetectorRef) {
        super(_colorAdapter);
        this._colorAdapter = _colorAdapter;
        this._intl = _intl;
        this.changeDetectorRef = changeDetectorRef;
    }
    get uploadPhotoToScanLabel() {
        return this._intl.uploadPhotoToScan;
    }
    ngOnDestroy() {
        if (this._loadedImage) {
            URL.revokeObjectURL(this._loadedImage.src);
        }
    }
    uploadFile(event) {
        event.preventDefault();
        event.stopPropagation();
        const files = event.type === 'drop' ? event.dataTransfer.files : event.target.files;
        if (files && files.length) {
            const file = files[0];
            if (!file.type.match('image.*')) {
                return;
            }
            const image = new Image();
            image.onload = () => {
                this._loadedImage = image;
                this.changeDetectorRef.markForCheck();
            };
            image.src = URL.createObjectURL(file);
        }
    }
    _allowDrop(event) {
        event.preventDefault();
    }
}
MnjScanPickerView.ɵfac = function MnjScanPickerView_Factory(t) { return new (t || MnjScanPickerView)(i0.ɵɵdirectiveInject(i1.ColorAdapter), i0.ɵɵdirectiveInject(i2.MnjColorpickerIntl), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MnjScanPickerView.ɵcmp = i0.ɵɵdefineComponent({ type: MnjScanPickerView, selectors: [["mnj-scan-picker-view"]], hostAttrs: [1, "mnj-scan-picker-view"], exportAs: ["mnjScanPickerView"], features: [i0.ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjScanPickerView }]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [["class", "upload-control", 3, "click", "drop", "dragover", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "upload-control--fileInput", 3, "change"], ["fileInput", ""], [4, "ngIf"], [1, "upload-control", 3, "click", "drop", "dragover"], [1, "mat-body"], [3, "image", "pipetteColorChange"], ["mat-mini-fab", "", "color", "primary", 1, "upload-control--fab", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color"]], template: function MnjScanPickerView_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MnjScanPickerView_div_0_Template, 3, 1, "div", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("change", function MnjScanPickerView_Template_input_change_1_listener($event) { return ctx.uploadFile($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, MnjScanPickerView_ng_container_3_Template, 9, 3, "ng-container", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx._loadedImage);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx._loadedImage);
    } }, directives: [i3.NgIf, i4.MnjPipetteSelector, i5.MatButton, i6.MnjPreviewSwatch, i7.MnjInputSelector], styles: [".mnj-scan-picker-view .controls-container{display:flex}.mnj-scan-picker-view .controls-container--input{flex:1;margin-left:15px}.mnj-scan-picker-view{display:block;flex-direction:column;height:100%;position:relative}.mnj-scan-picker-view .mnj-pipette-selector{height:calc(100% - 40px)}.mnj-scan-picker-view .upload-control{align-items:center;border:2px dashed;border-radius:4px;display:flex;height:100%;justify-content:center}.mnj-scan-picker-view .upload-control--fileInput{display:none}.mnj-scan-picker-view .upload-control--fab{position:absolute;right:-8px;top:-8px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjScanPickerView, [{
        type: Component,
        args: [{
                selector: 'mnj-scan-picker-view',
                exportAs: 'mnjScanPickerView',
                templateUrl: 'scan-view.html',
                styleUrls: ['scan-view.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjScanPickerView }],
                host: {
                    class: 'mnj-scan-picker-view',
                },
            }]
    }], function () { return [{ type: i1.ColorAdapter }, { type: i2.MnjColorpickerIntl }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3ZpZXdzL3NjYW4vc2Nhbi12aWV3LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL3ZpZXdzL3NjYW4vc2Nhbi12aWV3Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7OztJQ0gzRSw4QkFPRTtJQUpBLDJLQUFTLFdBQWlCLElBQUMsK0tBQUEsdUxBQUE7SUFJM0IsK0JBQXVCO0lBQUEsWUFBMEI7SUFBQSxpQkFBTztJQUMxRCxpQkFBTTs7O0lBRG1CLGVBQTBCO0lBQTFCLG1EQUEwQjs7OztJQUduRCw2QkFDRTtJQUFBLCtDQUErRztJQUFsRSxtUEFBMEM7SUFBQyxpQkFBdUI7SUFDL0csaUNBQ0U7SUFEK0QsdUxBQVMsV0FBaUIsSUFBQztJQUMxRixtQkFDRTtJQURGLDhCQUNFO0lBQUEsMEJBQ0E7SUFBQSwyQkFHRjtJQUFBLGlCQUFNO0lBQ1IsaUJBQVM7SUFDVCxvQkFDRTtJQURGLCtCQUNFO0lBQUEseUNBQStEO0lBQy9ELHlDQUFpRztJQUNuRyxpQkFBTTtJQUNSLDBCQUFlOzs7SUFiUyxlQUFzQjtJQUF0QiwyQ0FBc0I7SUFVdEIsZUFBcUI7SUFBckIsMENBQXFCO0lBQ2EsZUFBcUI7SUFBckIsMENBQXFCOztBREwvRSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1CO0lBT3hELFlBQ1ksYUFBMkIsRUFDN0IsS0FBeUIsRUFDekIsaUJBQW9DO1FBRTVDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUpYLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzdCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFHOUMsQ0FBQztJQVZELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztJQUN0QyxDQUFDO0lBVUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQXdCO1FBQ2pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsTUFBTSxLQUFLLEdBQ1QsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFhLEtBQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFFekcsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMvQixPQUFPO2FBQ1I7WUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hDLENBQUMsQ0FBQztZQUNGLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBZ0I7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2tGQTVDVSxpQkFBaUI7c0RBQWpCLGlCQUFpQixtSkFMakIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLENBQUM7UUNaM0Usa0VBT0U7UUFFRixtQ0FDQTtRQURpRixxR0FBVSxzQkFBa0IsSUFBQztRQUE5RyxpQkFDQTtRQUFBLG9GQUNFOztRQVZBLHdDQUFxQjtRQVNULGVBQW9CO1FBQXBCLHVDQUFvQjs7a0RET3JCLGlCQUFpQjtjQVo3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdCQUFnQjtnQkFDN0IsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO2dCQUN6RSxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHNCQUFzQjtpQkFDOUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yQWRhcHRlciB9IGZyb20gJy4uLy4uL2NvbG9yL2NvbG9yLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBNbmpDb2xvcnBpY2tlckludGwgfSBmcm9tICcuLi8uLi9jb2xvcnBpY2tlci1pbnRsJztcclxuaW1wb3J0IHsgQmFzZUNvbG9ycGlja2VyVmlldywgQ29sb3JQaWNrZXJWaWV3IH0gZnJvbSAnLi4vY29sb3JwaWNrZXItdmlldyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21uai1zY2FuLXBpY2tlci12aWV3JyxcclxuICBleHBvcnRBczogJ21ualNjYW5QaWNrZXJWaWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJ3NjYW4tdmlldy5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc2Nhbi12aWV3LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29sb3JQaWNrZXJWaWV3LCB1c2VFeGlzdGluZzogTW5qU2NhblBpY2tlclZpZXcgfV0sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtbmotc2Nhbi1waWNrZXItdmlldycsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1ualNjYW5QaWNrZXJWaWV3IGV4dGVuZHMgQmFzZUNvbG9ycGlja2VyVmlldyBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgX2xvYWRlZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBnZXQgdXBsb2FkUGhvdG9Ub1NjYW5MYWJlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnRsLnVwbG9hZFBob3RvVG9TY2FuO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgX2NvbG9yQWRhcHRlcjogQ29sb3JBZGFwdGVyLFxyXG4gICAgcHJpdmF0ZSBfaW50bDogTW5qQ29sb3JwaWNrZXJJbnRsLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKF9jb2xvckFkYXB0ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fbG9hZGVkSW1hZ2UpIHtcclxuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLl9sb2FkZWRJbWFnZS5zcmMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZShldmVudDogRHJhZ0V2ZW50IHwgRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBmaWxlcyA9XHJcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdkcm9wJyA/ICg8RHJhZ0V2ZW50PmV2ZW50KS5kYXRhVHJhbnNmZXIuZmlsZXMgOiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5maWxlcztcclxuXHJcbiAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcclxuICAgICAgaWYgKCFmaWxlLnR5cGUubWF0Y2goJ2ltYWdlLionKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVkSW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9O1xyXG4gICAgICBpbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FsbG93RHJvcChldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgKm5nSWY9XCIhX2xvYWRlZEltYWdlXCJcclxuICBjbGFzcz1cInVwbG9hZC1jb250cm9sXCJcclxuICAoY2xpY2spPVwiZmlsZUlucHV0LmNsaWNrKClcIlxyXG4gIChkcm9wKT1cInVwbG9hZEZpbGUoJGV2ZW50KVwiXHJcbiAgKGRyYWdvdmVyKT1cIl9hbGxvd0Ryb3AoJGV2ZW50KVwiXHJcbj5cclxuICA8c3BhbiBjbGFzcz1cIm1hdC1ib2R5XCI+e3t1cGxvYWRQaG90b1RvU2NhbkxhYmVsfX08L3NwYW4+XHJcbjwvZGl2PlxyXG48aW5wdXQgY2xhc3M9XCJ1cGxvYWQtY29udHJvbC0tZmlsZUlucHV0XCIgI2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiAoY2hhbmdlKT1cInVwbG9hZEZpbGUoJGV2ZW50KVwiIC8+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJfbG9hZGVkSW1hZ2VcIj5cclxuICA8bW5qLXBpcGV0dGUtc2VsZWN0b3IgW2ltYWdlXT1cIl9sb2FkZWRJbWFnZVwiIChwaXBldHRlQ29sb3JDaGFuZ2UpPVwiY2hhbmdlQ29sb3IoJGV2ZW50KVwiPjwvbW5qLXBpcGV0dGUtc2VsZWN0b3I+XHJcbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJ1cGxvYWQtY29udHJvbC0tZmFiXCIgKGNsaWNrKT1cImZpbGVJbnB1dC5jbGljaygpXCI+XHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzelwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICA8L2J1dHRvbj5cclxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHMtY29udGFpbmVyXCI+XHJcbiAgICA8bW5qLXByZXZpZXctc3dhdGNoIFtjb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvbW5qLXByZXZpZXctc3dhdGNoPlxyXG4gICAgPG1uai1pbnB1dC1zZWxlY3RvciBjbGFzcz1cImNvbnRyb2xzLWNvbnRhaW5lci0taW5wdXRcIiBbY29sb3JdPVwiYWN0aXZlQ29sb3JcIj48L21uai1pbnB1dC1zZWxlY3Rvcj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==