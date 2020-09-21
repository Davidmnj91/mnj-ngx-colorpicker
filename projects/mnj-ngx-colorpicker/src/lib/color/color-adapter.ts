import { Injectable } from '@angular/core';
import { Color, fromString } from './color';
import { rgbToCmyk, rgbToHwb } from './color-conversions';
import { ColorFormat } from './color-spaces';

@Injectable({ providedIn: 'root' })
export class ColorAdapter {
  /** Checks if the given object is a complete color representation */
  isColorInstance(color: Color) {
    return (
      color &&
      color.red !== undefined &&
      color.green !== undefined &&
      color.blue !== undefined &&
      color.hue !== undefined &&
      color.saturation !== undefined &&
      color.lightness !== undefined &&
      color.alpha !== undefined
    );
  }

  /**
   * Parses a color from a literal
   * @param colorString literal to be converted to color
   */
  parse(colorString: string): Color {
    return fromString(colorString);
  }

  /**
   * Returns the given value if given a valid Color or null. Deserializes valid strings
   * into valid Colors and empty string into null. Returns an invalid color for all other values.
   */
  deserialize(value: any): Color | null {
    if (typeof value === 'string') {
      if (!value) {
        return null;
      }
      return fromString(value);
    }
  }

  /** Checks equality between two colors */
  sameColor(first: Color, second: Color) {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);

      if (firstValid && secondValid) {
        const equalAlpha = first.alpha === second.alpha;
        const equalHsl =
          first.hue === second.hue && first.saturation === second.saturation && first.lightness === second.lightness;
        return equalAlpha && equalHsl && !this.compareColor(first, second);
      }
      return firstValid === secondValid;
    }
    return first === second;
  }

  /**
   * Compares two colors based on the Euclidean distance of the sRGB color space.
   * @param first The first color to compare.
   * @param second The second color to compare.
   * @returns 0 if the colors are equal, a number less than 0 if the first color is earlier,
   *     a number greater than 0 if the first color is later.
   */
  compareColor(first: Color, second: Color): number {
    const redMean = (first.red - second.red) / 2;
    const redDelta = first.red - second.red;
    const greenDelta = first.green - second.green;
    const blueDelta = first.blue - second.blue;
    return Math.sqrt(
      (2 + redMean / 256) * Math.pow(redDelta, 2) +
        4 * Math.pow(greenDelta, 2) +
        (2 + (255 - redDelta) / 256) * Math.pow(blueDelta, 2)
    );
  }

  /** Returns the color if valid otherwise null */
  getValidColorOrNull(color: Color): Color | null {
    return this.isColorInstance(color) && this.isValid(color) ? color : null;
  }

  /**
   * Checks wether the given color is valid
   * @param color to be validated
   */
  isValid(color: Color) {
    return (
      color &&
      color.red <= 255 &&
      color.red >= 0 &&
      color.green <= 255 &&
      color.green >= 0 &&
      color.blue <= 255 &&
      color.blue >= 0 &&
      color.hue < 360 &&
      color.hue >= 0 &&
      color.saturation <= 100 &&
      color.saturation >= 0 &&
      color.lightness <= 100 &&
      color.lightness >= 0 &&
      color.alpha <= 1 &&
      color.alpha >= 0
    );
  }

  /**
   * Formats a color as a string according to the given format
   * @param color The color to format
   * @param format The format to display the color as a string
   */
  format(color: Color, format: ColorFormat, showAlpha = false): string {
    switch (format) {
      case 'HEX':
        return this.toHexString(color, showAlpha);
      case 'RGB':
        return this.toRgbString(color, showAlpha);
      case 'HSL':
        return this.toHslString(color, showAlpha);
      case 'HWB':
        return this.toHwbString(color, showAlpha);
      case 'CMYK':
        return this.toCmykString(color);
    }
  }

  /** Outputs the RGB/A string representation of a color */
  toRgbString(color: Color, showAlpha = false): string {
    const { red, green, blue, alpha } = color;
    return showAlpha ? `rgba(${red}, ${green}, ${blue}, ${alpha})` : `rgb(${red}, ${green}, ${blue})`;
  }

  /** Outputs the HWB/A string representation of a color */
  toHwbString(color: Color, showAlpha = false): string {
    const { hue, whiteness, blackness } = rgbToHwb(color);
    return showAlpha
      ? `hwba(${hue}, ${Math.round(whiteness * 100)}%, ${Math.round(blackness * 100)}%, ${color.alpha})`
      : `hwb(${hue}, ${Math.round(whiteness * 100)}%, ${Math.round(blackness * 100)}%)`;
  }

  /** Outputs the HWB/A decimals string representation of a color */
  toHwbStringDecimal(color: Color, showAlpha = false): string {
    const { hue, whiteness, blackness } = rgbToHwb(color);
    return showAlpha
      ? `hwba(${hue}, ${whiteness}, ${blackness}, ${color.alpha})`
      : `hwb(${hue}, ${whiteness}, ${blackness})`;
  }

  /** Outputs the HSL/A string representation of a color */
  toHslString(color: Color, showAlpha = false): string {
    const { hue, saturation, lightness, alpha } = color;
    return showAlpha
      ? `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
      : `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  /** Outputs the HSL/A decimals string representation of a color */
  toHslStringDecimal(color: Color, showAlpha = false): string {
    const { hue, saturation, lightness, alpha } = color;
    return showAlpha
      ? `hsla(${hue}, ${saturation}%, ${lightness}%, ${color.alpha})`
      : `hsl(${hue}, ${saturation}, ${lightness}, ${color.alpha})`;
  }

  /** Outputs the CMYK string representation of a color */
  toCmykString(color: Color): string {
    const { cyan, magenta, yellow, black } = rgbToCmyk(color);
    return `cmyk(${cyan}%, ${magenta}%, ${yellow}%, ${black}%)`;
  }

  /** Outputs the CMYK decimals string representation of a color */
  toCmykStringDecimal(color: Color): string {
    const { cyan, magenta, yellow, black } = rgbToCmyk(color);
    return `cmyk(${cyan}, ${magenta}, ${yellow}, ${black})`;
  }

  /** Outputs the HEX/A string representation of a color */
  toHexString(color: Color, showAlpha = false): string {
    let code: string;
    if (showAlpha) {
      code = [color.red, color.green, color.blue, color.alpha * 100]
        .map((x) => {
          const hex = Math.round(x).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('');
    } else {
      code = [color.red, color.green, color.blue]
        .map((x) => {
          const hex = Math.round(x).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('');
    }
    return `#${code}`;
  }
}
