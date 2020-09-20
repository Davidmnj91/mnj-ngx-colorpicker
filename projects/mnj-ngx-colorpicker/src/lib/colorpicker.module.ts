import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MnjColorPanel, MnjColorPanelHeader } from './color-panel';
import { MnjColorpicker, MnjColorpickerContent, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './colorpicker';
import { MnjColorpickerInput } from './colorpicker-input';
import { MnjColorpickerIntl } from './colorpicker-intl';
import { MnjColorpickerToggle, MnjColorpickerToggleIcon } from './colorpicker-toggle';
import {
  MnjAlphaSelector,
  MnjGridSelector,
  MnjHueSelector,
  MnjInputSelector,
  MnjPipetteSelector,
  MnjPreviewSwatch,
  MnjSaturationSelector,
} from './selectors';
import { MnjArmoniesPickerView, MnjChromePickerView, MnjPalettePickerView, MnjScanPickerView } from './views';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, PortalModule, A11yModule, OverlayModule, MatDialogModule],
  declarations: [
    MnjColorpickerToggle,
    MnjColorpickerToggleIcon,
    MnjColorpicker,
    MnjColorpickerContent,
    MnjColorpickerInput,
    MnjColorPanel,
    MnjColorPanelHeader,
    MnjAlphaSelector,
    MnjHueSelector,
    MnjSaturationSelector,
    MnjInputSelector,
    MnjGridSelector,
    MnjPipetteSelector,
    MnjPreviewSwatch,
    MnjChromePickerView,
    MnjPalettePickerView,
    MnjArmoniesPickerView,
    MnjScanPickerView,
  ],
  providers: [MnjColorpickerIntl, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
  exports: [
    CdkScrollableModule,
    MnjColorpickerToggle,
    MnjColorpickerToggleIcon,
    MnjColorpicker,
    MnjColorpickerContent,
    MnjColorpickerInput,
    MnjColorPanel,
    MnjColorPanelHeader,
    MnjAlphaSelector,
    MnjHueSelector,
    MnjSaturationSelector,
    MnjInputSelector,
    MnjGridSelector,
    MnjPipetteSelector,
    MnjPreviewSwatch,
    MnjChromePickerView,
    MnjPalettePickerView,
    MnjArmoniesPickerView,
    MnjScanPickerView,
  ],
})
export class MnjColorpickerModule {}
