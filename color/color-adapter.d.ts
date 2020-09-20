import { Color } from './color';
import { ColorFormat } from './color-spaces';
import * as i0 from "@angular/core";
export declare class ColorAdapter {
    /** Checks if the given object is a complete color representation */
    isColorInstance(color: Color): boolean;
    /**
     * Parses a color from a literal
     * @param colorString literal to be converted to color
     */
    parse(colorString: string): Color;
    /**
     * Returns the given value if given a valid Color or null. Deserializes valid strings
     * into valid Colors and empty string into null. Returns an invalid color for all other values.
     */
    deserialize(value: any): Color | null;
    /** Checks equality between two colors */
    sameColor(first: Color, second: Color): boolean;
    /**
     * Compares two colors based on the Euclidean distance of the sRGB color space.
     * @param first The first color to compare.
     * @param second The second color to compare.
     * @returns 0 if the colors are equal, a number less than 0 if the first color is earlier,
     *     a number greater than 0 if the first color is later.
     */
    compareColor(first: Color, second: Color): number;
    /** Returns the color if valid otherwise null */
    getValidColorOrNull(color: Color): Color | null;
    /**
     * Checks wether the given color is valid
     * @param color to be validated
     */
    isValid(color: Color): boolean;
    /**
     * Formats a color as a string according to the given format
     * @param color The color to format
     * @param format The format to display the color as a string
     */
    format(color: Color, format: ColorFormat, showAlpha?: boolean): string;
    /** Outputs the RGB/A string representation of a color */
    toRgbString(color: Color, showAlpha?: boolean): string;
    /** Outputs the HWB/A string representation of a color */
    toHwbString(color: Color, showAlpha?: boolean): string;
    /** Outputs the HWB/A decimals string representation of a color */
    toHwbStringDecimal(color: Color, showAlpha?: boolean): string;
    /** Outputs the HSL/A string representation of a color */
    toHslString(color: Color, showAlpha?: boolean): string;
    /** Outputs the HSL/A decimals string representation of a color */
    toHslStringDecimal(color: Color, showAlpha?: boolean): string;
    /** Outputs the CMYK string representation of a color */
    toCmykString(color: Color): string;
    /** Outputs the CMYK decimals string representation of a color */
    toCmykStringDecimal(color: Color): string;
    /** Outputs the HEX/A string representation of a color */
    toHexString(color: Color, showAlpha?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDef<ColorAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDef<ColorAdapter>;
}
