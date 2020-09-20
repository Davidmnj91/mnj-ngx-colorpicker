import { CMYK, HSL, HSV, HWB, RGB } from './color-spaces';
export interface Color {
    red: number;
    green: number;
    blue: number;
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
}
export interface PaletteColor {
    title: string;
    color: Color;
    active: boolean;
}
/** Builds a color object from Red, Green, Blue values */
export declare function fromRgb({ red, green, blue }: RGB, alpha?: number): Color;
/** Builds color object from Hue, Saturation, Lightness values */
export declare function fromHsl({ hue, saturation: saturation, lightness }: HSL, alpha?: number): Color;
/** Builds color object from Hue, Saturation, Value values */
export declare function fromHsv({ hue, saturation, value }: HSV, alpha?: number): Color;
/** Builds color object from Hue, Saturation, Value values */
export declare function fromHwb({ hue, whiteness, blackness }: HWB, alpha?: number): Color;
/** Builds color object from Cyan, Magenta, Yellow and Black values */
export declare function fromCmyk({ cyan, magenta, yellow, black }: CMYK, alpha?: number): Color;
/** Builds color object from Hex string value */
export declare function fromHex(hex: string): Color;
export declare function parseString(colorString: string): Color | null;
/**
 * Adds saturation to the color.
 * Amount is counted as a value betweeen -1 and 1, but accepts values between -100 and 100
 * @param amount The number of saturation to add
 * @param color The color to be modified
 */
export declare function saturate(amount: number, color: Color): Color;
export declare function shade(amount: number, color: Color): Color;
/** Calculates the shades of a given color from 5% to 90% of darkness */
export declare function calculateShades(color: Color): Array<{
    title: string;
    color: Color;
    active: boolean;
}>;
/**
 * Returns the complementary of a given color
 * Complementary color is calculated by spining 180deg in the color wheel
 * @param color The color to calculate it's complementary
 */
export declare function complementary(color: Color): Color;
/**
 * Returns the split complementary set of a given color excluding itself
 * The split-complementary uses the two colors adjacent to its complement
 * @param color The color to calculate it's split complementary colours
 */
export declare function splitComplementary(color: Color): [Color, Color];
/**
 * Returns the analogous set of a given color
 * Analogous colours are calculated by spining 1/6 in each direction the color wheel
 * @param color The color to calculate it's analogous
 */
export declare function analogous(color: Color): [Color, Color];
/**
 * Returns the triadic set of a given color excluding itself
 * Triadic colours are calculated by spining 1/3 color wheel
 * @param color The color to calculate it's triadic colours
 */
export declare function triadic(color: Color): [Color, Color];
/**
 * Returns the tetradic set of a given color excluding itself
 * Tetradic color scheme uses four colors arranged into two complementary pairs
 * @param color The color to calculate it's tetradic colours
 */
export declare function tetradic(color: Color): [Color, Color, Color];
/**
 * Returns the square set of a given color excluding itself
 * Square colours are calculated by spining 1/4 the color wheel
 * @param color The color to calculate it's square colours
 */
export declare function square(color: Color): [Color, Color, Color];
export declare function spinColor(deg: number, color: Color): Color;
export declare function getColorShade(color: Color): number;
export declare function clamp(min: number, max: number, value: number): number;
