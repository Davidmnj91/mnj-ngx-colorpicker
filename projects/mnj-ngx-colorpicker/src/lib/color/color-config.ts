import { InjectionToken } from '@angular/core';
import { Color, fromHex, PaletteColor } from './color';
import { ColorFormat, CSS_COLOR_NAMES } from './color-spaces';

/** Default color, commonly known as the NO COLOR (Black) */
export const DEFAULT_COLOR: Color = {
  red: 0,
  green: 0,
  blue: 0,
  hue: 0,
  saturation: 0,
  lightness: 0,
  alpha: 1,
};

/** Default color module options that can be overridden. */
export interface MnjColorConfig {
  showAlpha: boolean;
  defaultColor: Color;
  displayFormat: ColorFormat;
  defaultPalette: PaletteColor[];
}

/** @docs-private */
export function MNJ_DEFAULT_COLOR_CONFIG_FACTORY(): MnjColorConfig {
  return {
    showAlpha: false,
    defaultColor: DEFAULT_COLOR,
    displayFormat: 'HEX',
    defaultPalette: Object.keys(CSS_COLOR_NAMES).map((c) => ({
      title: c,
      color: fromHex(CSS_COLOR_NAMES[c]),
      active: false,
    })),
  };
}

/** Injection token to be used to override the default options for color module. */
export const MNJ_COLOR_CONFIG_PROVIDER = new InjectionToken<MnjColorConfig>('mnj-color-default-options', {
  providedIn: 'root',
  factory: MNJ_DEFAULT_COLOR_CONFIG_FACTORY,
});
