import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** Colorpicker data that requires internationalization. */
export class MnjColorpickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** A label for the Color wheel view (used by screen readers) */
        this.pickerView = 'Color Picker';
        /** A label for the Color armonies view (used by screen readers) */
        this.armoniesView = 'Color Armonies';
        /** A label for the Color palette view (used by screen readers) */
        this.paletteView = 'Color Palette';
        /** A label for the Color palette view (used by screen readers) */
        this.scanView = 'Color Scan';
        /** A label for the scan picker view */
        this.uploadPhotoToScan = 'Click or drop a picture to scan';
        /** A label for the Color wheel view (used by screen readers) */
        this.switchToPickerView = 'Choose color';
        /** A label for the Color wheel view (used by screen readers) */
        this.switchToArmoniesView = 'Choose armonie';
        /** A label for the Color wheel view (used by screen readers) */
        this.switchToPaletteView = 'Choose from palette';
        /** A label for the Color wheel view (used by screen readers) */
        this.switchToScanView = 'Choose from a picture';
        /** A label for the button used to open the color picker popup (used by screen readers). */
        this.openColorPickerLabel = 'Open Color Picker';
    }
}
MnjColorpickerIntl.ɵfac = function MnjColorpickerIntl_Factory(t) { return new (t || MnjColorpickerIntl)(); };
MnjColorpickerIntl.ɵprov = i0.ɵɵdefineInjectable({ token: MnjColorpickerIntl, factory: MnjColorpickerIntl.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorpickerIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItaW50bC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi9jb2xvcnBpY2tlci1pbnRsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0IsMkRBQTJEO0FBRTNELE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFRTs7O1dBR0c7UUFDTSxZQUFPLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFFdEQsZ0VBQWdFO1FBQ2hFLGVBQVUsR0FBVyxjQUFjLENBQUM7UUFFcEMsbUVBQW1FO1FBQ25FLGlCQUFZLEdBQVcsZ0JBQWdCLENBQUM7UUFFeEMsa0VBQWtFO1FBQ2xFLGdCQUFXLEdBQVcsZUFBZSxDQUFDO1FBRXRDLGtFQUFrRTtRQUNsRSxhQUFRLEdBQVcsWUFBWSxDQUFDO1FBRWhDLHVDQUF1QztRQUN2QyxzQkFBaUIsR0FBVyxpQ0FBaUMsQ0FBQztRQUU5RCxnRUFBZ0U7UUFDaEUsdUJBQWtCLEdBQVcsY0FBYyxDQUFDO1FBRTVDLGdFQUFnRTtRQUNoRSx5QkFBb0IsR0FBVyxnQkFBZ0IsQ0FBQztRQUVoRCxnRUFBZ0U7UUFDaEUsd0JBQW1CLEdBQVcscUJBQXFCLENBQUM7UUFFcEQsZ0VBQWdFO1FBQ2hFLHFCQUFnQixHQUFXLHVCQUF1QixDQUFDO1FBRW5ELDJGQUEyRjtRQUMzRix5QkFBb0IsR0FBVyxtQkFBbUIsQ0FBQztLQUNwRDs7b0ZBcENZLGtCQUFrQjswREFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFETCxNQUFNO2tEQUNuQixrQkFBa0I7Y0FEOUIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqIENvbG9ycGlja2VyIGRhdGEgdGhhdCByZXF1aXJlcyBpbnRlcm5hdGlvbmFsaXphdGlvbi4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTW5qQ29sb3JwaWNrZXJJbnRsIHtcbiAgLyoqXG4gICAqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSBsYWJlbHMgaGVyZSBhcmUgY2hhbmdlZC4gVXNlIHRoaXMgdG8gbm90aWZ5XG4gICAqIGNvbXBvbmVudHMgaWYgdGhlIGxhYmVscyBoYXZlIGNoYW5nZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuICByZWFkb25seSBjaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlIENvbG9yIHdoZWVsIHZpZXcgKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpICovXG4gIHBpY2tlclZpZXc6IHN0cmluZyA9ICdDb2xvciBQaWNrZXInO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgQ29sb3IgYXJtb25pZXMgdmlldyAodXNlZCBieSBzY3JlZW4gcmVhZGVycykgKi9cbiAgYXJtb25pZXNWaWV3OiBzdHJpbmcgPSAnQ29sb3IgQXJtb25pZXMnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgQ29sb3IgcGFsZXR0ZSB2aWV3ICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKSAqL1xuICBwYWxldHRlVmlldzogc3RyaW5nID0gJ0NvbG9yIFBhbGV0dGUnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgQ29sb3IgcGFsZXR0ZSB2aWV3ICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKSAqL1xuICBzY2FuVmlldzogc3RyaW5nID0gJ0NvbG9yIFNjYW4nO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgc2NhbiBwaWNrZXIgdmlldyAqL1xuICB1cGxvYWRQaG90b1RvU2Nhbjogc3RyaW5nID0gJ0NsaWNrIG9yIGRyb3AgYSBwaWN0dXJlIHRvIHNjYW4nO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgQ29sb3Igd2hlZWwgdmlldyAodXNlZCBieSBzY3JlZW4gcmVhZGVycykgKi9cbiAgc3dpdGNoVG9QaWNrZXJWaWV3OiBzdHJpbmcgPSAnQ2hvb3NlIGNvbG9yJztcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlIENvbG9yIHdoZWVsIHZpZXcgKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpICovXG4gIHN3aXRjaFRvQXJtb25pZXNWaWV3OiBzdHJpbmcgPSAnQ2hvb3NlIGFybW9uaWUnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgQ29sb3Igd2hlZWwgdmlldyAodXNlZCBieSBzY3JlZW4gcmVhZGVycykgKi9cbiAgc3dpdGNoVG9QYWxldHRlVmlldzogc3RyaW5nID0gJ0Nob29zZSBmcm9tIHBhbGV0dGUnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgQ29sb3Igd2hlZWwgdmlldyAodXNlZCBieSBzY3JlZW4gcmVhZGVycykgKi9cbiAgc3dpdGNoVG9TY2FuVmlldzogc3RyaW5nID0gJ0Nob29zZSBmcm9tIGEgcGljdHVyZSc7XG5cbiAgLyoqIEEgbGFiZWwgZm9yIHRoZSBidXR0b24gdXNlZCB0byBvcGVuIHRoZSBjb2xvciBwaWNrZXIgcG9wdXAgKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBvcGVuQ29sb3JQaWNrZXJMYWJlbDogc3RyaW5nID0gJ09wZW4gQ29sb3IgUGlja2VyJztcbn1cbiJdfQ==