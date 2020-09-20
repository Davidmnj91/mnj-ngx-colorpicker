import { CMYK, HSL, HSV, HWB, RGB } from './color-spaces';

/** Converts RGB representation to HSL */
export function rgbToHsl({ red, green, blue }: RGB): HSL {
  const coercedRed = red / 255;
  const coercedGreen = green / 255;
  const coercedBlue = blue / 255;

  const cmax = Math.max(coercedRed, coercedGreen, coercedBlue);
  const cmin = Math.min(coercedRed, coercedGreen, coercedBlue);
  const delta = cmax - cmin;

  let hue = 0;
  let saturation = 0;
  let lightness = (cmax + cmin) / 2;

  if (delta) {
    switch (cmax) {
      case coercedRed: {
        hue = (coercedGreen - coercedBlue) / delta;
        break;
      }
      case coercedGreen: {
        hue = 2 + (coercedBlue - coercedRed) / delta;
        break;
      }
      case coercedBlue: {
        hue = 4 + (coercedRed - coercedGreen) / delta;
        break;
      }
    }
    saturation = delta / (1 - Math.abs(2 * lightness - 1));
  }

  hue = Math.round(60 * hue);
  if (hue < 0) hue += 360;
  saturation = Math.round(saturation * 100) || 0;
  lightness = Math.round(lightness * 100) || 0;

  return { hue, saturation, lightness };
}

/** Converts RGB representation to HSV */
export function rgbToHsv({ red, green, blue }: RGB): HSV {
  const coercedRed = red / 255;
  const coercedGreen = green / 255;
  const coercedBlue = blue / 255;

  const cmax = Math.max(coercedRed, coercedGreen, coercedBlue);
  const cmin = Math.min(coercedRed, coercedGreen, coercedBlue);
  const delta = cmax - cmin;
  const value = Math.round(cmax * 100) || 0;

  let hue = 0;
  let saturation = 0;

  if (delta) {
    switch (cmax) {
      case coercedRed:
        hue = (coercedGreen - coercedBlue) / delta;
        break;
      case coercedGreen:
        hue = 2 + (coercedBlue - coercedRed) / delta;
        break;
      case coercedBlue:
        hue = 4 + (coercedRed - coercedGreen) / delta;
        break;
    }
    if (cmax) saturation = delta / cmax;
  }

  hue = Math.round(60 * hue) || 0;
  if (hue < 0) hue += 360;
  saturation = Math.round(saturation * 100) || 0;

  return { hue, saturation, value };
}

/** Converts RGB representation to HWB */
export function rgbToHwb({ red, green, blue }: RGB): HWB {
  const { hue, saturation, value } = rgbToHsv({ red, green, blue });
  const coercedRed = red / 255;
  const coercedGreen = green / 255;
  const coercedBlue = blue / 255;

  const cmax = Math.max(coercedRed, coercedGreen, coercedBlue);
  const cmin = Math.min(coercedRed, coercedGreen, coercedBlue);

  const whiteness = Math.round(cmin * 100) / 100;
  const blackness = Math.round((1 - cmax) * 100) / 100;

  return { hue, whiteness, blackness };
}

/** Converts RGB representation to CMYK */
export function rgbToCmyk({ red, green, blue }: RGB): CMYK {
  let cyan, magenta, yellow, black;
  const coercedRed = red / 255;
  const coercedGreen = green / 255;
  const coercedBlue = blue / 255;
  const max = Math.max(coercedRed, coercedGreen, coercedBlue);
  black = 1 - max;
  if (black === 1) {
    cyan = 0;
    magenta = 0;
    yellow = 0;
  } else {
    cyan = Math.round(((1 - coercedRed - black) / (1 - black)) * 100);
    magenta = Math.round(((1 - coercedGreen - black) / (1 - black)) * 100);
    yellow = Math.round(((1 - coercedBlue - black) / (1 - black)) * 100);
  }
  black = Math.round(black * 100);
  return { cyan, magenta, yellow, black };
}

/** Converts RGB representation to HEX */
export function rgbToHex({ red, green, blue }: RGB): string {
  // tslint:disable-next-line: no-bitwise
  return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}

/** Converts an Hex representation to RGB */
export function hexToRgb(hex: string): RGB | null {
  const isValidHex = /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
  if (!isValidHex) {
    return null;
  }

  const parsedHex: number[] = hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

  return { red: parsedHex[0], green: parsedHex[1] || 0, blue: parsedHex[2] || 0 };
}

/** Converts an HSL representation to RGB */
export function hslToRgb({ hue, saturation, lightness }: HSL) {
  const sat = saturation / 100;
  const light = lightness / 100;
  let c = sat * (1 - Math.abs(2 * light - 1));
  const h = hue / 60;
  let x = c * (1 - Math.abs((h % 2) - 1));
  let m = light - c / 2;
  const precision = 255;

  c = Math.round((c + m) * precision) || 0;
  x = Math.round((x + m) * precision) || 0;
  m = Math.round(m * precision) || 0;

  if (h >= 0 && h < 1) return { red: c, green: x, blue: m };
  if (h >= 1 && h < 2) return { red: x, green: c, blue: m };
  if (h >= 2 && h < 3) return { red: m, green: c, blue: x };
  if (h >= 3 && h < 4) return { red: m, green: x, blue: c };
  if (h >= 4 && h < 5) return { red: x, green: m, blue: c };
  if (h >= 5 && h < 6) return { red: c, green: m, blue: x };
}

/** Converts an HSL representation to HSV */
export function hslToHsv({ hue, saturation, lightness }: HSL): HSV {
  const s = Math.min(saturation / 100, 1);
  const l = Math.min(lightness / 100, 1);
  if (l === 0) {
    return { hue, saturation: 0, value: 0 };
  } else {
    const v = l + (s * (1 - Math.abs(2 * l - 1))) / 2;
    return { hue, saturation: Math.round(((2 * (v - l)) / v) * 100), value: Math.round(v * 100) };
  }
}

/** Converts an HSV representation to HSL */
export function hsvToHsl({ hue, saturation, value }: HSV): HSL {
  const s = saturation / 100;
  const v = value / 100;
  if (v === 0) {
    return { hue, saturation: 0, lightness: 0 };
  } else if (s === 0 && v === 1) {
    return { hue, saturation: 0, lightness: 100 };
  } else {
    const l = (v * (2 - s)) / 2;
    return { hue, saturation: Math.round(((v * s) / (1 - Math.abs(2 * l - 1))) * 100), lightness: Math.round(l * 100) };
  }
}

/** Converts an HSV representation to RGB */
export function hsvToRgb({ hue, saturation, value }: HSV): RGB {
  const sat = saturation / 100;
  const val = value / 100;
  let c = sat * val;
  const h = hue / 60;
  let X = c * (1 - Math.abs((h % 2) - 1));
  let m = val - c;
  const precision = 255;

  c = Math.round((c + m) * precision) || 0;
  X = Math.round((X + m) * precision) || 0;
  m = Math.round(m * precision) || 0;

  if (h >= 0 && h < 1) return { red: c, green: X, blue: m };
  if (h >= 1 && h < 2) return { red: X, green: c, blue: m };
  if (h >= 2 && h < 3) return { red: m, green: c, blue: X };
  if (h >= 3 && h < 4) return { red: m, green: X, blue: c };
  if (h >= 4 && h < 5) return { red: X, green: m, blue: c };
  if (h >= 5 && h < 6) return { red: c, green: m, blue: X };
}

/** Converts an HWB representation to HSV */
export function hsvToHwb({ hue, saturation, value }: HSV): HWB {
  const coercedSaturation = saturation / 100;
  const coercedValue = value / 100;

  const whiteness = Math.round((1 - coercedSaturation) * coercedValue * 100);
  const blackness = Math.round((1 - coercedValue) * 100);

  return { hue, whiteness, blackness };
}

/** Converts an HWB representation to RGB */
export function hwbToRgb({ hue, whiteness, blackness }: HWB): RGB {
  const rgb = hslToRgb({ hue: hue, saturation: 1, lightness: 0.5 });

  const tot = whiteness + blackness;
  let resultWhite: number;
  let resultBlack: number;
  if (tot > 1) {
    resultWhite = Number((whiteness / tot).toFixed(2));
    resultBlack = Number((blackness / tot).toFixed(2));
  }
  const adjustRgb = (c, w, b) => {
    return ((c / 255) * (1 - w - b) + w) * 255;
  };
  return {
    red: adjustRgb(rgb.red, resultWhite, resultBlack),
    green: adjustRgb(rgb.green, resultWhite, resultBlack),
    blue: adjustRgb(rgb.blue, resultWhite, resultBlack),
  };
}

/** Converts an HWB representation to HSV */
export function hwbToHsv({ hue, whiteness, blackness }: HWB): HSV {
  const coercedWhiteness = whiteness / 100;
  const coercedBlackness = blackness / 100;

  const saturation = Math.round((1 - coercedWhiteness / (1 - coercedBlackness)) * 100);
  const value = Math.round((1 - coercedBlackness) * 100);

  return { hue, saturation, value };
}

/** Converts a CMYK representation to RGB */
export function cmykToRgb({ cyan, magenta, yellow, black }: CMYK): RGB {
  const red = 255 - Math.min(1, cyan * (1 - black) + black) * 255;
  const green = 255 - Math.min(1, magenta * (1 - black) + black) * 255;
  const blue = 255 - Math.min(1, yellow * (1 - black) + black) * 255;
  return { red, green, blue };
}
