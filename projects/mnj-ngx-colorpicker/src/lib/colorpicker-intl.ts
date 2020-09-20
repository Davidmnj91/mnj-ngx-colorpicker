import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/** Colorpicker data that requires internationalization. */
@Injectable({ providedIn: 'root' })
export class MnjColorpickerIntl {
  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  readonly changes: Subject<void> = new Subject<void>();

  /** A label for the Color wheel view (used by screen readers) */
  pickerView: string = 'Color Picker';

  /** A label for the Color armonies view (used by screen readers) */
  armoniesView: string = 'Color Armonies';

  /** A label for the Color palette view (used by screen readers) */
  paletteView: string = 'Color Palette';

  /** A label for the Color palette view (used by screen readers) */
  scanView: string = 'Color Scan';

  /** A label for the scan picker view */
  uploadPhotoToScan: string = 'Click or drop a picture to scan';

  /** A label for the Color wheel view (used by screen readers) */
  switchToPickerView: string = 'Choose color';

  /** A label for the Color wheel view (used by screen readers) */
  switchToArmoniesView: string = 'Choose armonie';

  /** A label for the Color wheel view (used by screen readers) */
  switchToPaletteView: string = 'Choose from palette';

  /** A label for the Color wheel view (used by screen readers) */
  switchToScanView: string = 'Choose from a picture';

  /** A label for the button used to open the color picker popup (used by screen readers). */
  openColorPickerLabel: string = 'Open Color Picker';
}
