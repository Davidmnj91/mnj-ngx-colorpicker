import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ColorAdapter } from '../../color/color-adapter';
import { MnjColorpickerIntl } from '../../colorpicker-intl';
import { BaseColorpickerView } from '../colorpicker-view';
import * as i0 from "@angular/core";
export declare class MnjScanPickerView extends BaseColorpickerView implements OnDestroy {
    protected _colorAdapter: ColorAdapter;
    private _intl;
    private changeDetectorRef;
    _loadedImage: HTMLImageElement;
    get uploadPhotoToScanLabel(): string;
    constructor(_colorAdapter: ColorAdapter, _intl: MnjColorpickerIntl, changeDetectorRef: ChangeDetectorRef);
    ngOnDestroy(): void;
    uploadFile(event: DragEvent | Event): void;
    _allowDrop(event: DragEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MnjScanPickerView, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjScanPickerView, "mnj-scan-picker-view", ["mnjScanPickerView"], {}, {}, never, never>;
}
