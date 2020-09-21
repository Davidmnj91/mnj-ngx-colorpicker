import { cmykToRgb, hslToRgb, hsvToHsl, hsvToRgb, hwbToRgb, rgbToHsl } from './color-conversions';
import { CMYK, CSS_COLOR_NAMES, HSL, HSV, HWB, RGB } from './color-spaces';

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
export function fromRgb({ red, green, blue }: RGB, alpha: number = 1): Color {
  const coercedRed = clamp(0, 255, red);
  const coercedGreen = clamp(0, 255, green);
  const coercedBlue = clamp(0, 255, blue);

  const { hue, saturation: saturation, lightness } = rgbToHsl({
    red: coercedRed,
    green: coercedGreen,
    blue: coercedBlue,
  });

  return {
    red: coercedRed,
    green: coercedGreen,
    blue: coercedBlue,
    hue,
    saturation: saturation,
    lightness,
    alpha,
  };
}

/** Builds color object from Hue, Saturation, Lightness values */
export function fromHsl({ hue, saturation, lightness }: HSL, alpha: number = 1): Color {
  const coercedHue = clamp(0, 359, hue);
  const coercedSat = clamp(0, 100, saturation);
  const coercedLightness = clamp(0, 100, lightness);

  const { red, green, blue } = hslToRgb({ hue: coercedHue, saturation: coercedSat, lightness: coercedLightness });

  return {
    red,
    green,
    blue,
    hue: coercedHue,
    saturation: coercedSat,
    lightness: coercedLightness,
    alpha,
  };
}

/** Builds color object from Hue, Saturation, Value values */
export function fromHsv({ hue, saturation, value }: HSV, alpha: number = 1): Color {
  const coercedHue = clamp(0, 359, hue);
  const coercedSat = clamp(0, 100, saturation);
  const coercedValue = clamp(0, 100, value);

  const { red, green, blue } = hsvToRgb({ hue: coercedHue, saturation: coercedSat, value: coercedValue });
  const { hue: hslHue, saturation: hslSat, lightness: hslLightness } = hsvToHsl({
    hue: coercedHue,
    saturation: coercedSat,
    value: coercedValue,
  });

  return {
    red,
    green,
    blue,
    hue: hslHue,
    saturation: hslSat,
    lightness: hslLightness,
    alpha,
  };
}

/** Builds color object from Hue, Saturation, Value values */
export function fromHwb({ hue, whiteness, blackness }: HWB, alpha: number = 1): Color {
  const coercedHue = clamp(0, 359, hue);
  const coercedWhiteness = clamp(0, 100, whiteness);
  const coercedBlackness = clamp(0, 100, blackness);

  const rgb = hwbToRgb({ hue: coercedHue, whiteness: coercedWhiteness, blackness: coercedBlackness });
  const hsl = rgbToHsl(rgb);

  return {
    red: rgb.red,
    green: rgb.green,
    blue: rgb.blue,
    hue: coercedHue,
    saturation: hsl.saturation,
    lightness: hsl.lightness,
    alpha,
  };
}

/** Builds color object from Cyan, Magenta, Yellow and Black values */
export function fromCmyk({ cyan, magenta, yellow, black }: CMYK, alpha: number = 1): Color {
  const coercedCyan = clamp(0, 100, cyan);
  const coercedMagenta = clamp(0, 100, magenta);
  const coercedYellow = clamp(0, 100, yellow);
  const coercedBlack = clamp(0, 100, black);

  const { red, green, blue } = cmykToRgb({
    cyan: coercedCyan,
    magenta: coercedMagenta,
    yellow: coercedYellow,
    black: coercedBlack,
  });
  const { hue, saturation, lightness } = rgbToHsl({ red, green, blue });

  return {
    red,
    green,
    blue,
    hue,
    saturation,
    lightness,
    alpha,
  };
}

/** Builds color object from Hex string value */
export function fromHex(hex: string): Color {
  const isValidHex = /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
  if (!isValidHex) {
    return null;
  }

  const [red, green, blue, alpha = 100] = hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b, a) => '#' + r + r + g + g + b + b + a + a)
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

  const { hue, saturation, lightness } = rgbToHsl({ red, green, blue });

  return {
    red,
    green,
    blue,
    hue,
    saturation,
    lightness,
    alpha: alpha / 100,
  };
}

export function fromString(colorString: string): Color | null {
  // Regex to extract values inside parenthesis
  const extractColorValuesRegex = /\((.*)\)/;

  // Transforms a string number or percentage into a valid and clamped color number
  const toColorNumber = (value: string, min: number, max: number, allowPercent = true) => {
    let numberValue: number;
    value = value.replace(' ', '');

    if (value.includes('%') && allowPercent) {
      numberValue = Number(value.replace('%', ''));
    } else {
      numberValue = Number(value);
      numberValue = numberValue < 1 && allowPercent ? numberValue * 100 : numberValue;
    }

    return clamp(min, max, numberValue);
  };

  colorString = colorString.toLowerCase().replace(/^\s+|\s+$/g, '');
  if (colorString.startsWith('rgb')) {
    const colorMatch = colorString.match(extractColorValuesRegex);
    if (!colorMatch) {
      return;
    }
    const colorArray = colorMatch[1].split(',');
    if (colorArray.length < 3 || colorArray.length > 4) {
      return;
    }
    const [red, green, blue, alpha = 1] = colorArray.map((x, i) => toColorNumber(x, 0, i < 3 ? 255 : 1, false));

    return fromRgb({ red, green, blue }, alpha);
  }
  if (colorString.startsWith('hsl')) {
    const colorMatch = colorString.match(extractColorValuesRegex);
    if (!colorMatch) {
      return;
    }
    const colorArray = colorMatch[1].split(',');
    if (colorArray.length < 3 || colorArray.length > 4) {
      return;
    }

    const [hueString, satString, lightnessString, alphaString = '1'] = colorArray;
    const hue = toColorNumber(hueString, 0, 359, false);
    const sat = toColorNumber(satString, 0, 100);
    const lightness = toColorNumber(lightnessString, 0, 100);
    const alpha = toColorNumber(alphaString, 0, 1);

    return fromHsl({ hue, saturation: sat, lightness }, alpha);
  }
  if (colorString.startsWith('hsv')) {
    const colorMatch = colorString.match(extractColorValuesRegex);
    if (!colorMatch) {
      return;
    }
    const colorArray = colorMatch[1].split(',');
    if (colorArray.length < 3 || colorArray.length > 4) {
      return;
    }
    const [hueString, satString, valueString, alphaString = '1'] = colorArray;
    const hue = toColorNumber(hueString, 0, 359, false);
    const sat = toColorNumber(satString, 0, 100);
    const value = toColorNumber(valueString, 0, 100);
    const alpha = toColorNumber(alphaString, 0, 1);

    return fromHsv({ hue, saturation: sat, value }, alpha);
  }
  if (colorString.startsWith('hwb')) {
    const colorMatch = colorString.match(extractColorValuesRegex);
    if (!colorMatch) {
      return;
    }
    const colorArray = colorMatch[1].split(',');
    if (colorArray.length < 3 || colorArray.length > 4) {
      return;
    }
    const [hueString, whitenessString, blacknessString, alphaString = '1'] = colorArray;
    const hue = toColorNumber(hueString, 0, 359, false);
    const whiteness = toColorNumber(whitenessString, 0, 100);
    const blackness = toColorNumber(blacknessString, 0, 100);
    const alpha = toColorNumber(alphaString, 0, 1);

    return fromHwb({ hue, whiteness, blackness }, alpha);
  }
  if (colorString.startsWith('cmyk')) {
    const colorMatch = colorString.match(extractColorValuesRegex);
    if (!colorMatch) {
      return;
    }
    const colorArray = colorMatch[1].split(',');
    if (colorArray.length < 4 || colorArray.length > 5) {
      return;
    }
    const [cyanString, magentaString, yellowString, blackString, alphaString = '1'] = colorArray;
    const cyan = toColorNumber(cyanString, 0, 100);
    const magenta = toColorNumber(magentaString, 0, 100);
    const yellow = toColorNumber(yellowString, 0, 100);
    const black = toColorNumber(blackString, 0, 100);
    const alpha = toColorNumber(alphaString, 0, 1);

    return fromCmyk({ cyan, magenta, yellow, black }, alpha);
  }

  const color = fromHex(colorString);
  if (color) {
    return color;
  }
  const cssColorName = Object.keys(CSS_COLOR_NAMES).find((c) => c.toLowerCase() === colorString.toLowerCase());
  if (cssColorName) {
    return fromHex(CSS_COLOR_NAMES[cssColorName]);
  }
  return null;
}

/**
 * Adds saturation to the color.
 * Amount is counted as a value betweeen -1 and 1, but accepts values between -100 and 100
 * @param amount The number of saturation to add
 * @param color The color to be modified
 */
export function saturate(amount: number, color: Color): Color {
  const { hue, saturation, lightness } = color;
  const newSat = saturation + coercePercent(amount);

  return fromHsl({ hue, saturation: clamp(0, 100, newSat), lightness });
}

/**
 * Adds lightness to the color.
 * Amount is counted as a value betweeen -1 and 1, but accepts values between -100 and 100
 * @param amount The number of lightness to add
 * @param color The color to be modified
 */
export function shade(amount: number, color: Color): Color {
  amount = coercePercent(amount) * 100;

  const delta = 100 - color.lightness === 5 ? 0 : (100 - color.lightness) % 10;
  const newLightness = color.lightness + amount + delta;

  return fromHsl({ hue: color.hue, saturation: color.saturation, lightness: newLightness });
}

/** Calculates the shades of a given color from 5% to 90% of darkness */
export function calculateShades(color: Color): PaletteColor[] {
  const colorShade = getColorShade(color);
  const shades: PaletteColor[] = [];

  const amounts = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  let i = 0;

  while (i < amounts.length) {
    const distance = (colorShade - amounts[i]) / 10;
    const s: { title: string; color: Color; active: boolean } = {
      title: `${amounts[i]}`,
      color: distance ? shade(distance, color) : color,
      active: amounts[i] === colorShade,
    };
    shades.push(s);
    i++;
  }

  return shades;
}

/**
 * Returns the complementary of a given color
 * Complementary color is calculated by spining 180deg in the color wheel
 * @param color The color to calculate it's complementary
 */
export function complementary(color: Color): Color {
  return spinColor(180, color);
}

/**
 * Returns the split complementary set of a given color excluding itself
 * The split-complementary uses the two colors adjacent to its complement
 * @param color The color to calculate it's split complementary colours
 */
export function splitComplementary(color: Color): [Color, Color] {
  return [spinColor(60, color), spinColor(210, color)];
}

/**
 * Returns the analogous set of a given color
 * Analogous colours are calculated by spining 1/6 in each direction the color wheel
 * @param color The color to calculate it's analogous
 */
export function analogous(color: Color): [Color, Color] {
  return [spinColor(30, color), spinColor(-30, color)];
}

/**
 * Returns the triadic set of a given color excluding itself
 * Triadic colours are calculated by spining 1/3 color wheel
 * @param color The color to calculate it's triadic colours
 */
export function triadic(color: Color): [Color, Color] {
  return [spinColor(120, color), spinColor(-120, color)];
}

/**
 * Returns the tetradic set of a given color excluding itself
 * Tetradic color scheme uses four colors arranged into two complementary pairs
 * @param color The color to calculate it's tetradic colours
 */
export function tetradic(color: Color): [Color, Color, Color] {
  return [spinColor(30, color), spinColor(180, color), spinColor(210, color)];
}

/**
 * Returns the square set of a given color excluding itself
 * Square colours are calculated by spining 1/4 the color wheel
 * @param color The color to calculate it's square colours
 */
export function square(color: Color): [Color, Color, Color] {
  return [spinColor(90, color), spinColor(180, color), spinColor(270, color)];
}

export function spinColor(deg: number, color: Color): Color {
  const { hue, saturation, lightness } = color;
  const rotatedHue = (hue + 360 + deg) % 360;
  return fromHsl({ hue: rotatedHue, saturation, lightness });
}

/** Returns the amount of darkness of a given color in a scale of [50, 100, 200, ..., 900] */
export function getColorShade(color: Color): number {
  const { lightness } = color;
  let colorShade = 100 - lightness;
  if (colorShade <= 5) {
    return 50;
  }
  if (colorShade >= 90) {
    return 900;
  }
  colorShade = Math.trunc(colorShade / 10) * 100;
  return colorShade;
}

export function clamp(min: number, max: number, value: number): number {
  return Math.max(Math.min(value, max), min);
}

function coercePercent(amount: number): number {
  amount = Math.max(Math.min(amount, 100), -100);
  if (amount < -1 || amount > 1) {
    return Math.trunc(amount) / 100;
  }
  return amount;
}
