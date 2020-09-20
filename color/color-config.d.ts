import { InjectionToken } from '@angular/core';
import { Color, PaletteColor } from './color';
import { ColorFormat } from './color-spaces';
/** Default color, commonly known as the NO COLOR (Black) */
export declare const DEFAULT_COLOR: Color;
/** Default color module options that can be overridden. */
export interface MnjColorConfig {
    showAlpha: boolean;
    defaultColor: Color;
    displayFormat: ColorFormat;
    defaultPalette: PaletteColor[];
}
/** @docs-private */
export declare function MNJ_DEFAULT_COLOR_CONFIG_FACTORY(): MnjColorConfig;
/** Injection token to be used to override the default options for color module. */
export declare const MNJ_COLOR_CONFIG_PROVIDER: InjectionToken<MnjColorConfig>;
