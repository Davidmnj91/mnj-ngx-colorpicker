import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ColorFormat, fromHsl, PaletteColor, fromString } from 'mnj-ngx-colorpicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  _colorFormats: ColorFormat[] = ['HEX', 'RGB', 'HSL', 'HWB', 'CMYK'];
  _pickerViews = ['picker', 'armonies', 'palette', 'scan'];

  themeColorControl = new FormControl('primary');
  colorFormatControl = new FormControl('HEX');
  startViewControl = new FormControl('picker');
  showAlphaControl = new FormControl(false);
  customPaletteControl = new FormControl(false);
  touchUiControl = new FormControl(false);
  disabledControl = new FormControl(false);
  startColorControl = new FormControl(fromString('black'));
  colorControl = new FormControl();

  colorpickerForm = new FormGroup({
    themeColor: this.themeColorControl,
    colorFormat: this.colorFormatControl,
    startView: this.startViewControl,
    showAlpha: this.showAlphaControl,
    customPalette: this.customPaletteControl,
    touchUi: this.touchUiControl,
    disabled: this.disabledControl,
    startColor: this.startColorControl,
    color: this.colorControl,
  });

  customPalette: PaletteColor[] = [];

  set theme(value: 'light-theme' | 'dark-theme') {
    if (value !== this._theme) {
      this._applyTheme(value);
      this._theme = value;
    }
  }

  private _theme: 'light-theme' | 'dark-theme';

  constructor(@Inject(DOCUMENT) private document: Document, private _overlayContainer: OverlayContainer) {
    this.changePalette();
  }

  ngAfterViewInit(): void {
    this.theme = 'light-theme';
  }

  changePalette(): void {
    this.customPalette = [];

    let i = 100;
    while (i >= 0) {
      const c = {
        title: `dark ${100 - i}%`,
        color: fromHsl({ hue: 0, saturation: 0, lightness: i }),
        active: false,
      };
      this.customPalette.push(c);
      i--;
    }
  }

  _applyTheme(theme: 'light-theme' | 'dark-theme'): void {
    this.document.body.classList.remove(this._theme);
    this._overlayContainer.getContainerElement().classList.remove(this._theme);
    this.document.body.classList.add(`${theme}`);
    this._overlayContainer.getContainerElement().classList.add(`${theme}`);
  }
}
