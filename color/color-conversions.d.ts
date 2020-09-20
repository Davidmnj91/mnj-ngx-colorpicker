import { CMYK, HSL, HSV, HWB, RGB } from './color-spaces';
/** Converts RGB representation to HSL */
export declare function rgbToHsl({ red, green, blue }: RGB): HSL;
/** Converts RGB representation to HSV */
export declare function rgbToHsv({ red, green, blue }: RGB): HSV;
/** Converts RGB representation to HWB */
export declare function rgbToHwb({ red, green, blue }: RGB): HWB;
/** Converts RGB representation to CMYK */
export declare function rgbToCmyk({ red, green, blue }: RGB): CMYK;
/** Converts RGB representation to HEX */
export declare function rgbToHex({ red, green, blue }: RGB): string;
/** Converts an Hex representation to RGB */
export declare function hexToRgb(hex: string): RGB | null;
/** Converts an HSL representation to RGB */
export declare function hslToRgb({ hue, saturation, lightness }: HSL): {
    red: number;
    green: number;
    blue: number;
};
/** Converts an HSL representation to HSV */
export declare function hslToHsv({ hue, saturation, lightness }: HSL): HSV;
/** Converts an HSV representation to HSL */
export declare function hsvToHsl({ hue, saturation, value }: HSV): HSL;
/** Converts an HSV representation to RGB */
export declare function hsvToRgb({ hue, saturation, value }: HSV): RGB;
/** Converts an HWB representation to HSV */
export declare function hsvToHwb({ hue, saturation, value }: HSV): HWB;
/** Converts an HWB representation to RGB */
export declare function hwbToRgb({ hue, whiteness, blackness }: HWB): RGB;
/** Converts an HWB representation to HSV */
export declare function hwbToHsv({ hue, whiteness, blackness }: HWB): HSV;
/** Converts a CMYK representation to RGB */
export declare function cmykToRgb({ cyan, magenta, yellow, black }: CMYK): RGB;
