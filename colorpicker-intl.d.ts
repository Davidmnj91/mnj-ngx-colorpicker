import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** Colorpicker data that requires internationalization. */
export declare class MnjColorpickerIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    readonly changes: Subject<void>;
    /** A label for the Color wheel view (used by screen readers) */
    pickerView: string;
    /** A label for the Color armonies view (used by screen readers) */
    armoniesView: string;
    /** A label for the Color palette view (used by screen readers) */
    paletteView: string;
    /** A label for the Color palette view (used by screen readers) */
    scanView: string;
    /** A label for the scan picker view */
    uploadPhotoToScan: string;
    /** A label for the Color wheel view (used by screen readers) */
    switchToPickerView: string;
    /** A label for the Color wheel view (used by screen readers) */
    switchToArmoniesView: string;
    /** A label for the Color wheel view (used by screen readers) */
    switchToPaletteView: string;
    /** A label for the Color wheel view (used by screen readers) */
    switchToScanView: string;
    /** A label for the button used to open the color picker popup (used by screen readers). */
    openColorPickerLabel: string;
    static ɵfac: i0.ɵɵFactoryDef<MnjColorpickerIntl, never>;
    static ɵprov: i0.ɵɵInjectableDef<MnjColorpickerIntl>;
}
