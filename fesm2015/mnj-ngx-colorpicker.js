import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, InjectionToken, EventEmitter, ɵɵdefineDirective, Directive, ɵɵdirectiveInject, Input, Output, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵnextContext, ɵɵstyleMap, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtemplate, ɵɵstyleProp, ɵɵproperty, ɵɵattribute, ɵɵadvance, ElementRef, ChangeDetectorRef, ɵɵdefineComponent, Component, ChangeDetectionStrategy, ViewEncapsulation, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵtext, NgZone, Inject, ɵɵclassProp, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵreference, ɵɵtextInterpolate, ɵɵelementContainerStart, ɵɵnamespaceSVG, ɵɵnamespaceHTML, ɵɵelementContainerEnd, forwardRef, ɵɵtextInterpolate1, ɵɵsyntheticHostListener, ɵɵsyntheticHostProperty, ViewContainerRef, Optional, ɵɵhostProperty, ɵɵNgOnChangesFeature, ɵɵinjectAttribute, ɵɵcontentQuery, ɵɵprojectionDef, ɵɵprojection, Attribute, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { coerceNumberProperty, coerceElement, coerceBooleanProperty } from '@angular/cdk/coercion';
import { SPACE, END, PAGE_DOWN, HOME, PAGE_UP, DOWN_ARROW, UP_ARROW, RIGHT_ARROW, LEFT_ARROW, ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { Subject, Subscription, merge, of } from 'rxjs';
import { NgForOf, NgIf, DOCUMENT, NgStyle, NgSwitch, NgSwitchCase, NgClass, CommonModule } from '@angular/common';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Directionality } from '@angular/cdk/bidi';
import { take, filter } from 'rxjs/operators';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, A11yModule } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { mixinColor } from '@angular/material/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';

/** Converts RGB representation to HSL */
function rgbToHsl({ red, green, blue }) {
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
    if (hue < 0)
        hue += 360;
    saturation = Math.round(saturation * 100) || 0;
    lightness = Math.round(lightness * 100) || 0;
    return { hue, saturation, lightness };
}
/** Converts RGB representation to HSV */
function rgbToHsv({ red, green, blue }) {
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
        if (cmax)
            saturation = delta / cmax;
    }
    hue = Math.round(60 * hue) || 0;
    if (hue < 0)
        hue += 360;
    saturation = Math.round(saturation * 100) || 0;
    return { hue, saturation, value };
}
/** Converts RGB representation to HWB */
function rgbToHwb({ red, green, blue }) {
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
function rgbToCmyk({ red, green, blue }) {
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
    }
    else {
        cyan = Math.round(((1 - coercedRed - black) / (1 - black)) * 100);
        magenta = Math.round(((1 - coercedGreen - black) / (1 - black)) * 100);
        yellow = Math.round(((1 - coercedBlue - black) / (1 - black)) * 100);
    }
    black = Math.round(black * 100);
    return { cyan, magenta, yellow, black };
}
/** Converts RGB representation to HEX */
function rgbToHex({ red, green, blue }) {
    // tslint:disable-next-line: no-bitwise
    return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}
/** Converts an Hex representation to RGB */
function hexToRgb(hex) {
    const isValidHex = /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
    if (!isValidHex) {
        return null;
    }
    const parsedHex = hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));
    return { red: parsedHex[0], green: parsedHex[1] || 0, blue: parsedHex[2] || 0 };
}
/** Converts an HSL representation to RGB */
function hslToRgb({ hue, saturation, lightness }) {
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
    if (h >= 0 && h < 1)
        return { red: c, green: x, blue: m };
    if (h >= 1 && h < 2)
        return { red: x, green: c, blue: m };
    if (h >= 2 && h < 3)
        return { red: m, green: c, blue: x };
    if (h >= 3 && h < 4)
        return { red: m, green: x, blue: c };
    if (h >= 4 && h < 5)
        return { red: x, green: m, blue: c };
    if (h >= 5 && h < 6)
        return { red: c, green: m, blue: x };
}
/** Converts an HSL representation to HSV */
function hslToHsv({ hue, saturation, lightness }) {
    const s = Math.min(saturation / 100, 1);
    const l = Math.min(lightness / 100, 1);
    if (l === 0) {
        return { hue, saturation: 0, value: 0 };
    }
    else {
        const v = l + (s * (1 - Math.abs(2 * l - 1))) / 2;
        return { hue, saturation: Math.round(((2 * (v - l)) / v) * 100), value: Math.round(v * 100) };
    }
}
/** Converts an HSV representation to HSL */
function hsvToHsl({ hue, saturation, value }) {
    const s = saturation / 100;
    const v = value / 100;
    if (v === 0) {
        return { hue, saturation: 0, lightness: 0 };
    }
    else if (s === 0 && v === 1) {
        return { hue, saturation: 0, lightness: 100 };
    }
    else {
        const l = (v * (2 - s)) / 2;
        return { hue, saturation: Math.round(((v * s) / (1 - Math.abs(2 * l - 1))) * 100), lightness: Math.round(l * 100) };
    }
}
/** Converts an HSV representation to RGB */
function hsvToRgb({ hue, saturation, value }) {
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
    if (h >= 0 && h < 1)
        return { red: c, green: X, blue: m };
    if (h >= 1 && h < 2)
        return { red: X, green: c, blue: m };
    if (h >= 2 && h < 3)
        return { red: m, green: c, blue: X };
    if (h >= 3 && h < 4)
        return { red: m, green: X, blue: c };
    if (h >= 4 && h < 5)
        return { red: X, green: m, blue: c };
    if (h >= 5 && h < 6)
        return { red: c, green: m, blue: X };
}
/** Converts an HWB representation to HSV */
function hsvToHwb({ hue, saturation, value }) {
    const coercedSaturation = saturation / 100;
    const coercedValue = value / 100;
    const whiteness = Math.round((1 - coercedSaturation) * coercedValue * 100);
    const blackness = Math.round((1 - coercedValue) * 100);
    return { hue, whiteness, blackness };
}
/** Converts an HWB representation to RGB */
function hwbToRgb({ hue, whiteness, blackness }) {
    const rgb = hslToRgb({ hue: hue, saturation: 1, lightness: 0.5 });
    const tot = whiteness + blackness;
    let resultWhite;
    let resultBlack;
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
function hwbToHsv({ hue, whiteness, blackness }) {
    const coercedWhiteness = whiteness / 100;
    const coercedBlackness = blackness / 100;
    const saturation = Math.round((1 - coercedWhiteness / (1 - coercedBlackness)) * 100);
    const value = Math.round((1 - coercedBlackness) * 100);
    return { hue, saturation, value };
}
/** Converts a CMYK representation to RGB */
function cmykToRgb({ cyan, magenta, yellow, black }) {
    const red = 255 - Math.min(1, cyan * (1 - black) + black) * 255;
    const green = 255 - Math.min(1, magenta * (1 - black) + black) * 255;
    const blue = 255 - Math.min(1, yellow * (1 - black) + black) * 255;
    return { red, green, blue };
}

const CSS_COLOR_NAMES = {
    AliceBlue: '#F0F8FF',
    AntiqueWhite: '#FAEBD7',
    Aqua: '#00FFFF',
    Aquamarine: '#7FFFD4',
    Azure: '#F0FFFF',
    Beige: '#F5F5DC',
    Bisque: '#FFE4C4',
    Black: '#000000',
    BlanchedAlmond: '#FFEBCD',
    Blue: '#0000FF',
    BlueViolet: '#8A2BE2',
    Brown: '#A52A2A',
    BurlyWood: '#DEB887',
    CadetBlue: '#5F9EA0',
    Chartreuse: '#7FFF00',
    Chocolate: '#D2691E',
    Coral: '#FF7F50',
    CornflowerBlue: '#6495ED',
    Cornsilk: '#FFF8DC',
    Crimson: '#DC143C',
    Cyan: '#00FFFF',
    DarkBlue: '#00008B',
    DarkCyan: '#008B8B',
    DarkGoldenRod: '#B8860B',
    DarkGray: '#A9A9A9',
    DarkGreen: '#006400',
    DarkGrey: '#A9A9A9',
    DarkKhaki: '#BDB76B',
    DarkMagenta: '#8B008B',
    DarkOliveGreen: '#556B2F',
    DarkOrchid: '#9932CC',
    DarkRed: '#8B0000',
    DarkSalmon: '#E9967A',
    DarkSeaGreen: '#8FBC8F',
    DarkSlateBlue: '#483D8B',
    DarkSlateGray: '#2F4F4F',
    DarkSlateGrey: '#2F4F4F',
    DarkTurquoise: '#00CED1',
    DarkViolet: '#9400D3',
    Darkorange: '#FF8C00',
    DeepPink: '#FF1493',
    DeepSkyBlue: '#00BFFF',
    DimGray: '#696969',
    DimGrey: '#696969',
    DodgerBlue: '#1E90FF',
    FireBrick: '#B22222',
    FloralWhite: '#FFFAF0',
    ForestGreen: '#228B22',
    Fuchsia: '#FF00FF',
    Gainsboro: '#DCDCDC',
    GhostWhite: '#F8F8FF',
    Gold: '#FFD700',
    GoldenRod: '#DAA520',
    Gray: '#808080',
    Green: '#008000',
    GreenYellow: '#ADFF2F',
    Grey: '#808080',
    HoneyDew: '#F0FFF0',
    HotPink: '#FF69B4',
    IndianRed: '#CD5C5C',
    Indigo: '#4B0082',
    Ivory: '#FFFFF0',
    Khaki: '#F0E68C',
    Lavender: '#E6E6FA',
    LavenderBlush: '#FFF0F5',
    LawnGreen: '#7CFC00',
    LemonChiffon: '#FFFACD',
    LightBlue: '#ADD8E6',
    LightCoral: '#F08080',
    LightCyan: '#E0FFFF',
    LightGoldenRodYellow: '#FAFAD2',
    LightGray: '#D3D3D3',
    LightGreen: '#90EE90',
    LightGrey: '#D3D3D3',
    LightPink: '#FFB6C1',
    LightSalmon: '#FFA07A',
    LightSeaGreen: '#20B2AA',
    LightSkyBlue: '#87CEFA',
    LightSlateGray: '#778899',
    LightSlateGrey: '#778899',
    LightSteelBlue: '#B0C4DE',
    LightYellow: '#FFFFE0',
    Lime: '#00FF00',
    LimeGreen: '#32CD32',
    Linen: '#FAF0E6',
    Magenta: '#FF00FF',
    Maroon: '#800000',
    MediumAquaMarine: '#66CDAA',
    MediumBlue: '#0000CD',
    MediumOrchid: '#BA55D3',
    MediumPurple: '#9370D8',
    MediumSeaGreen: '#3CB371',
    MediumSlateBlue: '#7B68EE',
    MediumSpringGreen: '#00FA9A',
    MediumTurquoise: '#48D1CC',
    MediumVioletRed: '#C71585',
    MidnightBlue: '#191970',
    MintCream: '#F5FFFA',
    MistyRose: '#FFE4E1',
    Moccasin: '#FFE4B5',
    NavajoWhite: '#FFDEAD',
    Navy: '#000080',
    OldLace: '#FDF5E6',
    Olive: '#808000',
    OliveDrab: '#6B8E23',
    Orange: '#FFA500',
    OrangeRed: '#FF4500',
    Orchid: '#DA70D6',
    PaleGoldenRod: '#EEE8AA',
    PaleGreen: '#98FB98',
    PaleTurquoise: '#AFEEEE',
    PaleVioletRed: '#D87093',
    PapayaWhip: '#FFEFD5',
    PeachPuff: '#FFDAB9',
    Peru: '#CD853F',
    Pink: '#FFC0CB',
    Plum: '#DDA0DD',
    PowderBlue: '#B0E0E6',
    Purple: '#800080',
    Red: '#FF0000',
    RosyBrown: '#BC8F8F',
    RoyalBlue: '#4169E1',
    SaddleBrown: '#8B4513',
    Salmon: '#FA8072',
    SandyBrown: '#F4A460',
    SeaGreen: '#2E8B57',
    SeaShell: '#FFF5EE',
    Sienna: '#A0522D',
    Silver: '#C0C0C0',
    SkyBlue: '#87CEEB',
    SlateBlue: '#6A5ACD',
    SlateGray: '#708090',
    SlateGrey: '#708090',
    Snow: '#FFFAFA',
    SpringGreen: '#00FF7F',
    SteelBlue: '#4682B4',
    Tan: '#D2B48C',
    Teal: '#008080',
    Thistle: '#D8BFD8',
    Tomato: '#FF6347',
    Turquoise: '#40E0D0',
    Violet: '#EE82EE',
    Wheat: '#F5DEB3',
    White: '#FFFFFF',
    WhiteSmoke: '#F5F5F5',
    Yellow: '#FFFF00',
    YellowGreen: '#9ACD32',
};

/** Builds a color object from Red, Green, Blue values */
function fromRgb({ red, green, blue }, alpha = 1) {
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
function fromHsl({ hue, saturation: saturation, lightness }, alpha = 1) {
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
function fromHsv({ hue, saturation, value }, alpha = 1) {
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
function fromHwb({ hue, whiteness, blackness }, alpha = 1) {
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
function fromCmyk({ cyan, magenta, yellow, black }, alpha = 1) {
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
function fromHex(hex) {
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
function parseString(colorString) {
    // Regex to extract values inside parenthesis
    const extractColorValuesRegex = /\((.*)\)/;
    // Transforms a string number or percentage into a valid and clamped color number
    const toColorNumber = (value, min, max, allowPercent = true) => {
        let numberValue;
        value = value.replace(' ', '');
        if (value.includes('%') && allowPercent) {
            numberValue = Number(value.replace('%', ''));
        }
        else {
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
function saturate(amount, color) {
    const { hue, saturation, lightness } = color;
    const newSat = saturation + coercePercent(amount);
    return fromHsl({ hue, saturation: clamp(0, 100, newSat), lightness });
}
function shade(amount, color) {
    amount = coercePercent(amount) * 100;
    const delta = 100 - color.lightness === 5 ? 0 : (100 - color.lightness) % 10;
    const newLightness = color.lightness + amount + delta;
    return fromHsl({ hue: color.hue, saturation: color.saturation, lightness: newLightness });
}
/** Calculates the shades of a given color from 5% to 90% of darkness */
function calculateShades(color) {
    const colorShade = getColorShade(color);
    const shades = [];
    const amounts = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    let i = 0;
    while (i < amounts.length) {
        const distance = (colorShade - amounts[i]) / 10;
        const s = {
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
function complementary(color) {
    return spinColor(180, color);
}
/**
 * Returns the split complementary set of a given color excluding itself
 * The split-complementary uses the two colors adjacent to its complement
 * @param color The color to calculate it's split complementary colours
 */
function splitComplementary(color) {
    return [spinColor(60, color), spinColor(210, color)];
}
/**
 * Returns the analogous set of a given color
 * Analogous colours are calculated by spining 1/6 in each direction the color wheel
 * @param color The color to calculate it's analogous
 */
function analogous(color) {
    return [spinColor(30, color), spinColor(-30, color)];
}
/**
 * Returns the triadic set of a given color excluding itself
 * Triadic colours are calculated by spining 1/3 color wheel
 * @param color The color to calculate it's triadic colours
 */
function triadic(color) {
    return [spinColor(120, color), spinColor(-120, color)];
}
/**
 * Returns the tetradic set of a given color excluding itself
 * Tetradic color scheme uses four colors arranged into two complementary pairs
 * @param color The color to calculate it's tetradic colours
 */
function tetradic(color) {
    return [spinColor(30, color), spinColor(180, color), spinColor(210, color)];
}
/**
 * Returns the square set of a given color excluding itself
 * Square colours are calculated by spining 1/4 the color wheel
 * @param color The color to calculate it's square colours
 */
function square(color) {
    return [spinColor(90, color), spinColor(180, color), spinColor(270, color)];
}
function spinColor(deg, color) {
    const { hue, saturation, lightness } = color;
    const rotatedHue = (hue + 360 + deg) % 360;
    return fromHsl({ hue: rotatedHue, saturation, lightness });
}
function getColorShade(color) {
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
function clamp(min, max, value) {
    return Math.max(Math.min(value, max), min);
}
function coercePercent(amount) {
    amount = Math.max(Math.min(amount, 100), -100);
    if (amount < -1 || amount > 1) {
        return Math.trunc(amount) / 100;
    }
    return amount;
}

class ColorAdapter {
    /** Checks if the given object is a complete color representation */
    isColorInstance(color) {
        return (color &&
            color.red !== undefined &&
            color.green !== undefined &&
            color.blue !== undefined &&
            color.hue !== undefined &&
            color.saturation !== undefined &&
            color.lightness !== undefined &&
            color.alpha !== undefined);
    }
    /**
     * Parses a color from a literal
     * @param colorString literal to be converted to color
     */
    parse(colorString) {
        return parseString(colorString);
    }
    /**
     * Returns the given value if given a valid Color or null. Deserializes valid strings
     * into valid Colors and empty string into null. Returns an invalid color for all other values.
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            return parseString(value);
        }
    }
    /** Checks equality between two colors */
    sameColor(first, second) {
        if (first && second) {
            const firstValid = this.isValid(first);
            const secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                const equalAlpha = first.alpha === second.alpha;
                const equalHsl = first.hue === second.hue && first.saturation === second.saturation && first.lightness === second.lightness;
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
    compareColor(first, second) {
        const redMean = (first.red - second.red) / 2;
        const redDelta = first.red - second.red;
        const greenDelta = first.green - second.green;
        const blueDelta = first.blue - second.blue;
        return Math.sqrt((2 + redMean / 256) * Math.pow(redDelta, 2) +
            4 * Math.pow(greenDelta, 2) +
            (2 + (255 - redDelta) / 256) * Math.pow(blueDelta, 2));
    }
    /** Returns the color if valid otherwise null */
    getValidColorOrNull(color) {
        return this.isColorInstance(color) && this.isValid(color) ? color : null;
    }
    /**
     * Checks wether the given color is valid
     * @param color to be validated
     */
    isValid(color) {
        return (color &&
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
            color.alpha >= 0);
    }
    /**
     * Formats a color as a string according to the given format
     * @param color The color to format
     * @param format The format to display the color as a string
     */
    format(color, format, showAlpha = false) {
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
    toRgbString(color, showAlpha = false) {
        const { red, green, blue, alpha } = color;
        return showAlpha ? `rgba(${red}, ${green}, ${blue}, ${alpha})` : `rgb(${red}, ${green}, ${blue})`;
    }
    /** Outputs the HWB/A string representation of a color */
    toHwbString(color, showAlpha = false) {
        const { hue, whiteness, blackness } = rgbToHwb(color);
        return showAlpha
            ? `hwba(${hue}, ${Math.round(whiteness * 100)}%, ${Math.round(blackness * 100)}%, ${color.alpha})`
            : `hwb(${hue}, ${Math.round(whiteness * 100)}%, ${Math.round(blackness * 100)}%)`;
    }
    /** Outputs the HWB/A decimals string representation of a color */
    toHwbStringDecimal(color, showAlpha = false) {
        const { hue, whiteness, blackness } = rgbToHwb(color);
        return showAlpha
            ? `hwba(${hue}, ${whiteness}, ${blackness}, ${color.alpha})`
            : `hwb(${hue}, ${whiteness}, ${blackness})`;
    }
    /** Outputs the HSL/A string representation of a color */
    toHslString(color, showAlpha = false) {
        const { hue, saturation, lightness, alpha } = color;
        return showAlpha
            ? `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
            : `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
    /** Outputs the HSL/A decimals string representation of a color */
    toHslStringDecimal(color, showAlpha = false) {
        const { hue, saturation, lightness, alpha } = color;
        return showAlpha
            ? `hsla(${hue}, ${saturation}%, ${lightness}%, ${color.alpha})`
            : `hsl(${hue}, ${saturation}, ${lightness}, ${color.alpha})`;
    }
    /** Outputs the CMYK string representation of a color */
    toCmykString(color) {
        const { cyan, magenta, yellow, black } = rgbToCmyk(color);
        return `cmyk(${cyan}%, ${magenta}%, ${yellow}%, ${black}%)`;
    }
    /** Outputs the CMYK decimals string representation of a color */
    toCmykStringDecimal(color) {
        const { cyan, magenta, yellow, black } = rgbToCmyk(color);
        return `cmyk(${cyan}, ${magenta}, ${yellow}, ${black})`;
    }
    /** Outputs the HEX/A string representation of a color */
    toHexString(color, showAlpha = false) {
        let code;
        if (showAlpha) {
            code = [color.red, color.green, color.blue, color.alpha * 100]
                .map((x) => {
                const hex = Math.round(x).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
                .join('');
        }
        else {
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
ColorAdapter.ɵfac = function ColorAdapter_Factory(t) { return new (t || ColorAdapter)(); };
ColorAdapter.ɵprov = ɵɵdefineInjectable({ token: ColorAdapter, factory: ColorAdapter.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ColorAdapter, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/** Default color, commonly known as the NO COLOR (Black) */
const DEFAULT_COLOR = {
    red: 0,
    green: 0,
    blue: 0,
    hue: 0,
    saturation: 0,
    lightness: 0,
    alpha: 1,
};
/** @docs-private */
function MNJ_DEFAULT_COLOR_CONFIG_FACTORY() {
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
const MNJ_COLOR_CONFIG_PROVIDER = new InjectionToken('mnj-color-default-options', {
    providedIn: 'root',
    factory: MNJ_DEFAULT_COLOR_CONFIG_FACTORY,
});

/** Pure abstract class due the impossibility to add decorators to interfaces */
class ColorPickerView {
    constructor() {
        /**
         * Emits the color chosen in any view.
         * This doesn't imply a change on the selected color.
         */
        this.activeColorChange = new EventEmitter();
    }
}
ColorPickerView.ɵfac = function ColorPickerView_Factory(t) { return new (t || ColorPickerView)(); };
ColorPickerView.ɵdir = ɵɵdefineDirective({ type: ColorPickerView });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ColorPickerView, [{
        type: Directive
    }], null, null); })();
class BaseColorpickerView {
    constructor(_colorAdapter) {
        this._colorAdapter = _colorAdapter;
        this.activeColorChange = new EventEmitter();
    }
    /**
     * The color to display in this armonies view.
     */
    get activeColor() {
        return this._activeColor;
    }
    set activeColor(value) {
        const oldActiveColor = this._activeColor;
        if (this._colorAdapter.isValid(value) && !this._colorAdapter.sameColor(oldActiveColor, value)) {
            this._activeColor = value;
        }
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        if (this._colorAdapter.sameColor(this.selected, value)) {
            return;
        }
        this._selected = this._colorAdapter.getValidColorOrNull(value);
    }
    changeColor(value) {
        this.activeColor = value;
        this.activeColorChange.emit(this.activeColor);
    }
}
BaseColorpickerView.ɵfac = function BaseColorpickerView_Factory(t) { return new (t || BaseColorpickerView)(ɵɵdirectiveInject(ColorAdapter)); };
BaseColorpickerView.ɵdir = ɵɵdefineDirective({ type: BaseColorpickerView, inputs: { activeColor: "activeColor", selected: "selected" }, outputs: { activeColorChange: "activeColorChange" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseColorpickerView, [{
        type: Directive
    }], function () { return [{ type: ColorAdapter }]; }, { activeColor: [{
            type: Input
        }], selected: [{
            type: Input
        }], activeColorChange: [{
            type: Output
        }] }); })();

function MnjGridSelector_li_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "div", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r2.thumbSize());
} }
function MnjGridSelector_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 2);
    ɵɵlistener("click", function MnjGridSelector_li_1_Template_li_click_0_listener() { ɵɵrestoreView(_r4); const cell_r1 = ctx.$implicit; const ctx_r3 = ɵɵnextContext(); return ctx_r3.selectColor(cell_r1); });
    ɵɵtemplate(1, MnjGridSelector_li_1_div_1_Template, 2, 2, "div", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.cellSize());
    ɵɵstyleProp("background", ctx_r0.cssColor(cell_r1.color));
    ɵɵproperty("title", cell_r1.title);
    ɵɵattribute("tabIndex", cell_r1.active ? 0 : -1)("aria-label", cell_r1.title)("aria-selected", cell_r1.active);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", cell_r1.active);
} }
class MnjGridSelector {
    constructor(colorAdapter, _elementRef, _changeDetectorRef) {
        this.colorAdapter = colorAdapter;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.colorSelected = new EventEmitter();
        this.grid = [];
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this.colorAdapter.sameColor(this.color, value)) {
            return;
        }
        this._color = value;
        this._buildPalette();
    }
    get paletteGeneratorFn() {
        return this._paletteGeneratorFn;
    }
    set paletteGeneratorFn(value) {
        this._paletteGeneratorFn = value;
        this._buildPalette();
    }
    get columns() {
        return this._columns || 10;
    }
    set columns(value) {
        value = coerceNumberProperty(value);
        if (this._columns !== value) {
            this._columns = value;
            this._calculateCellSize();
        }
    }
    cssColor(color) {
        return this.colorAdapter.toRgbString(color);
    }
    cellSize() {
        return { width: `${this._cellSize}px`, height: `${this._cellSize}px` };
    }
    thumbSize() {
        return { width: `${this._thumbSize}px`, height: `${this._thumbSize}px` };
    }
    gridStyle() {
        return {
            gridTemplateColumns: `repeat(${this.columns}, auto)`,
            gridGap: `${0.25 * this._cellSize}px`,
            padding: `${(this._cellSize * 0.25) / 2}px 0px`,
        };
    }
    ngAfterViewInit() {
        this._calculateCellSize();
        this._changeDetectorRef.markForCheck();
    }
    _buildPalette() {
        if (this.paletteGeneratorFn && this.color) {
            this.grid = this.paletteGeneratorFn(this.color);
            this._selectedIndex = this.grid.findIndex((cell) => cell.active);
            this._calculateCellSize();
            this._changeDetectorRef.markForCheck();
        }
    }
    _calculateCellSize() {
        if (this._elementRef) {
            const { width } = this._elementRef.nativeElement.getBoundingClientRect();
            const cells = this.columns + this.columns * 0.25 + 1; // Columns per row + (Columns-1/2) spaces in each size of each Column
            const cellSize = Math.trunc(width / cells);
            this._cellSize = cellSize % 2 === 0 ? cellSize : cellSize - 1;
            const thumbSize = Math.trunc(this._cellSize * 0.67);
            this._thumbSize = thumbSize % 2 === 0 ? thumbSize : thumbSize - 1;
        }
    }
    selectColor(shade) {
        const { color } = shade;
        this.colorSelected.emit(color);
    }
    _handleKeydownEvent(event) {
        const grid = this.grid;
        const oldActiveIndex = this._selectedIndex;
        let activeIndex = oldActiveIndex;
        switch (event.keyCode) {
            case LEFT_ARROW:
                activeIndex--;
                break;
            case RIGHT_ARROW:
                activeIndex++;
                break;
            case UP_ARROW:
                activeIndex -= this.columns;
                break;
            case DOWN_ARROW:
                activeIndex += this.columns;
                break;
            case PAGE_UP:
            case HOME:
                activeIndex = 0;
                break;
            case PAGE_DOWN:
            case END:
                activeIndex = grid.length - 1;
                break;
            case SPACE:
                event.preventDefault();
                this.selectColor(grid[activeIndex]);
                return;
            default:
                return;
        }
        activeIndex = clamp(0, grid.length - 1, activeIndex);
        const cells = Array.from(this._elementRef.nativeElement.querySelectorAll('.mnj-grid-selector__row--cell'));
        if (activeIndex !== this._selectedIndex) {
            cells[activeIndex].focus();
            this._selectedIndex = activeIndex;
        }
    }
}
MnjGridSelector.ɵfac = function MnjGridSelector_Factory(t) { return new (t || MnjGridSelector)(ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
MnjGridSelector.ɵcmp = ɵɵdefineComponent({ type: MnjGridSelector, selectors: [["mnj-grid-selector"]], hostAttrs: ["role", "grid", 1, "mnj-grid-selector"], hostBindings: function MnjGridSelector_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function MnjGridSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", paletteGeneratorFn: "paletteGeneratorFn", columns: "columns" }, outputs: { colorSelected: "colorSelected" }, exportAs: ["mnjGridSelector"], decls: 2, vars: 3, consts: [[1, "mnj-grid-selector__row"], ["class", "mnj-grid-selector__row--cell", 3, "title", "background", "style", "click", 4, "ngFor", "ngForOf"], [1, "mnj-grid-selector__row--cell", 3, "title", "click"], ["class", "mnj-colorpicker-selector__thumb", 3, "style", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjGridSelector_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ul", 0);
        ɵɵtemplate(1, MnjGridSelector_li_1_Template, 2, 9, "li", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleMap(ctx.gridStyle());
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.grid);
    } }, directives: [NgForOf, NgIf], styles: [".mnj-grid-selector{display:block;margin:2px 0 12px}.mnj-grid-selector__row{display:-ms-grid;display:grid;justify-content:space-evenly;list-style:none;margin:0}.mnj-grid-selector__row--cell{align-items:center;border-radius:100%;cursor:pointer;display:flex;justify-content:center}.mnj-grid-selector__row--cell:focus,.mnj-grid-selector__row--cell:hover{outline:none;transform:scale(1.5);z-index:1}.mnj-grid-selector .mnj-colorpicker-selector__thumb{position:relative;transform:none}.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner{position:relative}.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner:after{border:none;position:relative}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjGridSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-grid-selector',
                templateUrl: 'grid-selector.html',
                styleUrls: ['grid-selector.scss'],
                exportAs: 'mnjGridSelector',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'mnj-grid-selector',
                    role: 'grid',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], paletteGeneratorFn: [{
            type: Input
        }], columns: [{
            type: Input
        }], colorSelected: [{
            type: Output
        }] }); })();

class MnjArmoniesPickerView extends BaseColorpickerView {
    constructor(_colorAdapter) {
        super(_colorAdapter);
        this._colorAdapter = _colorAdapter;
        this.complementaryPaletteFn = (color) => {
            const complementaryColor = complementary(color);
            return calculateShades(complementaryColor);
        };
        this.splitComplementaryPaletteFn = (color) => {
            const splitComplementaryColor = splitComplementary(color)[0];
            return calculateShades(splitComplementaryColor);
        };
        this.splitComplementaryPaletteFn1 = (color) => {
            const splitComplementaryColor = splitComplementary(color)[1];
            return calculateShades(splitComplementaryColor);
        };
        this.analogous1PaletteFn = (color) => {
            const analogousColor = analogous(color)[0];
            return calculateShades(analogousColor);
        };
        this.analogous2PaletteFn = (color) => {
            const analogousColor = analogous(color)[1];
            return calculateShades(analogousColor);
        };
        this.triadic1PaletteFn = (color) => {
            const triadicColor = triadic(color)[0];
            return calculateShades(triadicColor);
        };
        this.triadic2PaletteFn = (color) => {
            const triadicColor = triadic(color)[1];
            return calculateShades(triadicColor);
        };
        this.tetradic1PaletteFn = (color) => {
            const tetradicColor = tetradic(color)[0];
            return calculateShades(tetradicColor);
        };
        this.tetradic2PaletteFn = (color) => {
            const tetradicColor = tetradic(color)[1];
            return calculateShades(tetradicColor);
        };
        this.tetradic3PaletteFn = (color) => {
            const tetradicColor = tetradic(color)[2];
            return calculateShades(tetradicColor);
        };
    }
}
MnjArmoniesPickerView.ɵfac = function MnjArmoniesPickerView_Factory(t) { return new (t || MnjArmoniesPickerView)(ɵɵdirectiveInject(ColorAdapter)); };
MnjArmoniesPickerView.ɵcmp = ɵɵdefineComponent({ type: MnjArmoniesPickerView, selectors: [["mnj-armonies-picker-view"]], hostAttrs: [1, "mnj-armonies-picker-view"], exportAs: ["mnjArmoniesPickerView"], features: [ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjArmoniesPickerView }]), ɵɵInheritDefinitionFeature], decls: 20, vars: 20, consts: [[3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjArmoniesPickerView_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "label");
        ɵɵtext(1, "Complementary:");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_2_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(3, "label");
        ɵɵtext(4, "Split Complementary:");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_5_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_6_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(7, "label");
        ɵɵtext(8, "Analogous:");
        ɵɵelementEnd();
        ɵɵelementStart(9, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_9_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(10, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_10_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(11, "label");
        ɵɵtext(12, "Triadic:");
        ɵɵelementEnd();
        ɵɵelementStart(13, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_13_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(14, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_14_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(15, "label");
        ɵɵtext(16, "Tetradic:");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_17_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(18, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_18_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(19, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_19_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.complementaryPaletteFn);
        ɵɵadvance(3);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn1);
        ɵɵadvance(3);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous1PaletteFn);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous2PaletteFn);
        ɵɵadvance(3);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic1PaletteFn);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic2PaletteFn);
        ɵɵadvance(3);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic1PaletteFn);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic2PaletteFn);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic3PaletteFn);
    } }, directives: [MnjGridSelector], styles: [".mnj-armonies-picker-view{display:flex;flex-flow:column}.mnj-armonies-picker-view label{margin-bottom:10px;margin-top:10px}.mnj-armonies-picker-view .mnj-grid-selector__row--cell{height:20px;width:20px}.mnj-armonies-picker-view .mnj-grid-selector__thumb{height:16px;width:16px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjArmoniesPickerView, [{
        type: Component,
        args: [{
                selector: 'mnj-armonies-picker-view',
                exportAs: 'mnjArmoniesPickerView',
                templateUrl: 'armonies-view.html',
                styleUrls: ['armonies-view.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjArmoniesPickerView }],
                host: {
                    class: 'mnj-armonies-picker-view',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, null); })();

// UTILS
function getPointerPositionFromEvent(event) {
    const { clientX: x, clientY: y } = event instanceof MouseEvent ? event : event.touches[0];
    return { x, y };
}
function isSamePosition(point1, point2) {
    if (!point1 || !point2) {
        return false;
    }
    return point1.x === point2.x && point1.y === point2.y;
}
function getContainerSize(container) {
    const { top, left, right, bottom, width, height } = coerceElement(container).getBoundingClientRect();
    return { top, left, right, bottom, width, height };
}
function getPointerPositionInContainer(pointer, container) {
    const pointerXToContainerX = (pointer.x - container.left) / container.width;
    const pointerYToContainerY = (pointer.y - container.top) / container.height;
    return { x: clamp(0, 1, pointerXToContainerX), y: clamp(0, 1, pointerYToContainerY) };
}
/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });
/** Options that can be used to bind an active event listener. */
const activeEventListenerOptions = normalizePassiveListenerOptions({ passive: false });
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = normalizePassiveListenerOptions({
    passive: false,
    capture: true,
});
class BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _dir) {
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this.thumbPosition = { x: 0, y: 0 };
        /** Keeps track of the event listeners that we've bound to the `document`. */
        this._globalListeners = new Map();
        /** Clears out the global event listeners from the `document`. */
        this._clearGlobalListeners = () => {
            this._globalListeners.forEach((config, name) => {
                this._document.removeEventListener(name, config.handler, config.options);
            });
            this._globalListeners.clear();
        };
        /** Handler for the `mousedown`/`touchstart` events. */
        this._pointerDown = (event) => {
            const pointer = getPointerPositionFromEvent(event);
            if (isSamePosition(this.cachedPointerPos, pointer)) {
                return;
            }
            this.cachedContainerSize = getContainerSize(this._elementRef);
            this.cachedPointerPos = pointer;
            this.calculateColorFromPosition(this.cachedContainerSize, pointer);
            const isTouchEvent = event.type.startsWith('touch');
            const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            this._clearGlobalListeners();
            this._globalListeners
                .set(moveEvent, {
                handler: this.pointerMove,
                options: activeCapturingEventOptions,
            })
                .set(upEvent, {
                handler: this._clearGlobalListeners,
                options: true,
            });
            this.addGlobalListeners();
        };
        this.pointerMove = (event) => {
            const pointer = getPointerPositionFromEvent(event);
            if (isSamePosition(this.cachedPointerPos, pointer)) {
                return;
            }
            this.cachedPointerPos = pointer;
            this.calculateColorFromPosition(this.cachedContainerSize, pointer);
        };
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this.colorAdapter.sameColor(this._color, value)) {
            return;
        }
        this._color = value;
        this._setColor(value);
    }
    ngAfterViewInit() {
        this.attachListeners();
        this.cachedContainerSize = getContainerSize(this._elementRef);
        // Force setter after view is initialized
        this._setColor(this.color);
    }
    ngOnDestroy() {
        this._clearGlobalListeners();
    }
    // LISTENERS
    attachListeners() {
        const sliderElement = coerceElement(this._elementRef);
        this._ngZone.runOutsideAngular(() => {
            sliderElement.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
            sliderElement.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        });
    }
    addGlobalListeners() {
        this._ngZone.runOutsideAngular(() => {
            this._globalListeners.forEach((config, name) => {
                this._document.addEventListener(name, config.handler, config.options);
            });
        });
    }
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
}
BaseSelector.ɵfac = function BaseSelector_Factory(t) { return new (t || BaseSelector)(ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality)); };
BaseSelector.ɵdir = ɵɵdefineDirective({ type: BaseSelector, inputs: { color: "color" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseSelector, [{
        type: Directive
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: NgZone }, { type: ElementRef }, { type: Directionality }]; }, { color: [{
            type: Input
        }] }); })();

class MnjSaturationSelector extends BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.satChange = new EventEmitter();
    }
    get satThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: `${this.thumbPosition.y}%` };
    }
    get satBackgroundColor() {
        return { 'background-color': `hsl(${this.color.hue}, 100%, 50%)` };
    }
    get satThumbBackgroundColor() {
        return { 'background-color': this.colorAdapter.format(this.color, 'RGB') };
    }
    _setColor(color) {
        if (this._elementRef) {
            const { saturation, value } = hslToHsv(color);
            let xPosition = clamp(0, 100, saturation);
            const yPosition = clamp(0, 100, 100 - value);
            if (this._isRtl()) {
                xPosition = 100 - xPosition;
            }
            this.thumbPosition = { x: xPosition, y: yPosition };
        }
        this._changeDetectorRef.markForCheck();
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x, y } = getPointerPositionInContainer(pointerPos, container);
            let pointerX = x * 100;
            const pointerY = y * 100;
            if (this._isRtl()) {
                pointerX = 100 - pointerX;
            }
            this.thumbPosition = { x: pointerX, y: pointerY };
            let saturation = Math.round(pointerX) || 0;
            let value = Math.round(100 - pointerY) || 0;
            saturation = clamp(0, 100, saturation);
            value = clamp(0, 100, value);
            const { hue } = this.color;
            const color = fromHsv({ hue, saturation, value });
            this.satChange.emit(color);
        });
    }
    _handleKeydownEvent(event) {
        const { hue, saturation, lightness } = this.color;
        const isRtl = this._isRtl();
        let newSaturation = saturation;
        let newLightness = lightness;
        switch (event.keyCode) {
            case UP_ARROW:
                newLightness++;
                break;
            case LEFT_ARROW:
                newSaturation += isRtl ? 1 : -1;
                break;
            case DOWN_ARROW:
                newLightness--;
                break;
            case RIGHT_ARROW:
                newSaturation += isRtl ? -1 : +1;
                break;
            case PAGE_UP:
                newLightness = newLightness - 10;
                break;
            case PAGE_DOWN:
                newLightness = newLightness + 10;
                break;
            case HOME:
                newSaturation = 0;
                newLightness = 0;
                break;
            case END:
                newSaturation = 100;
                newLightness = 50;
                break;
            default:
                return;
        }
        newSaturation = clamp(0, 100, newSaturation);
        newLightness = clamp(0, 100, newLightness);
        const color = fromHsl({ hue, saturation: newSaturation, lightness: newLightness });
        this.satChange.emit(color);
    }
}
MnjSaturationSelector.ɵfac = function MnjSaturationSelector_Factory(t) { return new (t || MnjSaturationSelector)(ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality)); };
MnjSaturationSelector.ɵcmp = ɵɵdefineComponent({ type: MnjSaturationSelector, selectors: [["mnj-saturation-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-saturation-selector"], hostVars: 3, hostBindings: function MnjSaturationSelector_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function MnjSaturationSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", 0);
        ɵɵclassProp("mnj-saturation-selector--rtl", ctx._isRtl());
    } }, outputs: { satChange: "satChange" }, features: [ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjSaturationSelector }]), ɵɵInheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "mnj-saturation-selector__mask"], [1, "mnj-saturation-selector__mask--fill", 3, "ngStyle"], [1, "mnj-saturation-selector__mask--saturation"], [1, "mnj-saturation-selector__mask--value"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner", 3, "ngStyle"]], template: function MnjSaturationSelector_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelement(2, "div", 2);
        ɵɵelement(3, "div", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 4);
        ɵɵelement(5, "div", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngStyle", ctx.satBackgroundColor);
        ɵɵadvance(3);
        ɵɵproperty("ngStyle", ctx.satThumbPos);
        ɵɵadvance(1);
        ɵɵproperty("ngStyle", ctx.satThumbBackgroundColor);
    } }, directives: [NgStyle], styles: [".mnj-saturation-selector{min-height:80px}.mnj-saturation-selector__mask{border-radius:2px;height:100%;overflow:hidden;position:relative;width:100%}.mnj-saturation-selector__mask--fill,.mnj-saturation-selector__mask--saturation,.mnj-saturation-selector__mask--value{height:100%;position:absolute;width:100%}.mnj-saturation-selector__mask--saturation{background-image:linear-gradient(90deg,#fff,transparent)}.mnj-saturation-selector__mask--value{background-image:linear-gradient(0deg,#000,transparent)}.mnj-saturation-selector__mask--rtl .mnj-saturation-selector__mask--saturation{background-image:linear-gradient(270deg,#fff,transparent)}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjSaturationSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-saturation-selector',
                templateUrl: 'sat-selector.html',
                styleUrls: ['sat-selector.scss', '../base-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjSaturationSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-saturation-selector',
                    '[class.mnj-saturation-selector--rtl]': '_isRtl()',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: NgZone }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: Directionality }]; }, { satChange: [{
            type: Output
        }] }); })();

class MnjHueSelector extends BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.hueChange = new EventEmitter();
    }
    get hueThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: '50%' };
    }
    _setColor(color) {
        if (this._elementRef) {
            const hue = color.hue || 0;
            let xPosition = clamp(0, 100, (hue / 360) * 100);
            if (this._isRtl()) {
                xPosition = 100 - xPosition;
            }
            this.thumbPosition = { x: xPosition, y: 50 };
        }
        this._changeDetectorRef.markForCheck();
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x: pointerToContainerX } = getPointerPositionInContainer(pointerPos, container);
            let pointerX = Math.round(pointerToContainerX * 100);
            if (this._isRtl()) {
                pointerX = 100 - pointerX;
            }
            this.thumbPosition = { x: pointerX, y: 50 };
            let hue = Math.round(pointerToContainerX * 360);
            hue = clamp(0, 359, hue);
            const { saturation, lightness } = this.color;
            const color = fromHsl({ hue, saturation, lightness });
            this.hueChange.emit(color);
        });
    }
    _handleKeydownEvent(event) {
        const { hue: oldHue, saturation, lightness, alpha } = this.color;
        const isRtl = this._isRtl();
        let newHue = oldHue;
        switch (event.keyCode) {
            case UP_ARROW:
            case LEFT_ARROW:
                newHue = newHue + (isRtl ? 1 : -1);
                break;
            case DOWN_ARROW:
            case RIGHT_ARROW:
                newHue = newHue + (isRtl ? -1 : +1);
                break;
            case HOME:
                newHue = 0;
                break;
            case END:
                newHue = 359;
                break;
            case PAGE_UP:
                newHue = newHue + (isRtl ? 60 : -60);
                break;
            case PAGE_DOWN:
                newHue = newHue + (isRtl ? -60 : +60);
                break;
            default:
                return;
        }
        newHue = (newHue + 360) % 360;
        const color = fromHsl({ hue: newHue, saturation, lightness }, alpha);
        this.hueChange.emit(color);
    }
}
MnjHueSelector.ɵfac = function MnjHueSelector_Factory(t) { return new (t || MnjHueSelector)(ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality)); };
MnjHueSelector.ɵcmp = ɵɵdefineComponent({ type: MnjHueSelector, selectors: [["mnj-hue-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-hue-selector"], hostVars: 1, hostBindings: function MnjHueSelector_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function MnjHueSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", 0);
    } }, outputs: { hueChange: "hueChange" }, features: [ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjHueSelector }]), ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjHueSelector_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.hueThumbPos);
    } }, directives: [NgStyle], styles: [".mnj-hue-selector{background:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjHueSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-hue-selector',
                templateUrl: 'hue-selector.html',
                styleUrls: ['hue-selector.scss', '../base-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjHueSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-hue-selector',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: NgZone }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: Directionality }]; }, { hueChange: [{
            type: Output
        }] }); })();

class MnjPreviewSwatch {
    constructor(colorAdapter) {
        this.colorAdapter = colorAdapter;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this.colorAdapter.sameColor(this.color, value)) {
            return;
        }
        this._color = value;
    }
    get cssBackground() {
        return this.colorAdapter.toRgbString(this.color, true);
    }
}
MnjPreviewSwatch.ɵfac = function MnjPreviewSwatch_Factory(t) { return new (t || MnjPreviewSwatch)(ɵɵdirectiveInject(ColorAdapter)); };
MnjPreviewSwatch.ɵcmp = ɵɵdefineComponent({ type: MnjPreviewSwatch, selectors: [["mnj-preview-swatch"]], hostAttrs: [1, "mnj-preview-swatch"], inputs: { color: "color" }, decls: 3, vars: 2, consts: [[1, "swatch__container"], [1, "swatch__container--alpha-layer"], [1, "swatch__container--color-layer"]], template: function MnjPreviewSwatch_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelement(2, "div", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵstyleProp("background", ctx.cssBackground);
    } }, styles: [".mnj-preview-swatch .swatch__container{cursor:default}.mnj-preview-swatch .swatch__container,.mnj-preview-swatch .swatch__container--alpha-layer,.mnj-preview-swatch .swatch__container--color-layer{border-radius:50%;height:24px;width:24px}.mnj-preview-swatch .swatch__container--alpha-layer{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=\") repeat;background-position:0 0}.mnj-preview-swatch .swatch__container--color-layer{transform:translateY(-24px)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjPreviewSwatch, [{
        type: Component,
        args: [{
                selector: 'mnj-preview-swatch',
                templateUrl: 'preview-swatch.html',
                styleUrls: ['preview-swatch.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'mnj-preview-swatch',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, { color: [{
            type: Input
        }] }); })();

const _c0 = ["colorInput"];
class MnjInputSelector {
    constructor(colorAdapter) {
        this.colorAdapter = colorAdapter;
        this._colorFormat = 'HEX';
        this.inputChange = new EventEmitter();
        this._formats = ['HEX', 'RGB', 'HSL', 'HWB', 'CMYK'];
        this._selectedIndex = 0;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this.colorAdapter.sameColor(this.color, value)) {
            return;
        }
        this._color = value;
    }
    set colorFormat(value) {
        if (value !== this._colorFormat) {
            this._colorFormat = value;
            this._selectedIndex = this._formats.indexOf(value);
        }
    }
    get colorString() {
        return this.colorAdapter.format(this.color, this._colorFormat, this.color.alpha !== 1);
    }
    changeColor(event) {
        const colorString = event.target.value;
        const color = this.colorAdapter.parse(colorString);
        if (this.colorAdapter.isValid(color)) {
            this.inputChange.emit(color);
        }
    }
    nextFormat() {
        this._selectedIndex = (this._selectedIndex + this._formats.length + 1) % this._formats.length;
        this.colorFormat = this._formats[this._selectedIndex];
    }
    previousFormat() {
        this._selectedIndex = (this._selectedIndex + this._formats.length - 1) % this._formats.length;
        this.colorFormat = this._formats[this._selectedIndex];
    }
    _handleKeydownEvent(event) {
        switch (event.keyCode) {
            case UP_ARROW:
            case LEFT_ARROW:
                this.previousFormat();
                break;
            case DOWN_ARROW:
            case RIGHT_ARROW:
                this.nextFormat();
                break;
            default:
                return;
        }
    }
}
MnjInputSelector.ɵfac = function MnjInputSelector_Factory(t) { return new (t || MnjInputSelector)(ɵɵdirectiveInject(ColorAdapter)); };
MnjInputSelector.ɵcmp = ɵɵdefineComponent({ type: MnjInputSelector, selectors: [["mnj-input-selector"]], viewQuery: function MnjInputSelector_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.colorInput = _t.first);
    } }, hostAttrs: [1, "mnj-input-selector"], hostBindings: function MnjInputSelector_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function MnjInputSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", colorFormat: "colorFormat" }, outputs: { inputChange: "inputChange" }, decls: 6, vars: 1, consts: [[1, "mnj-input-selector__container"], ["type", "text", "autocorrect", "off", "autocomplete", "off", "spellcheck", "false", "aria-label", "Color code", 1, "color-input", 3, "value", "change"], ["colorInput", ""], [1, "mnj-input-selector__container__switch-buttons"], [1, "switch-buttons--prev", 3, "click"], [1, "switch-buttons--next", 3, "click"]], template: function MnjInputSelector_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "input", 1, 2);
        ɵɵlistener("change", function MnjInputSelector_Template_input_change_1_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "span", 4);
        ɵɵlistener("click", function MnjInputSelector_Template_span_click_4_listener() { return ctx.previousFormat(); });
        ɵɵelementEnd();
        ɵɵelementStart(5, "span", 5);
        ɵɵlistener("click", function MnjInputSelector_Template_span_click_5_listener() { return ctx.nextFormat(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("value", ctx.colorString);
    } }, styles: [".mnj-input-selector{width:100%}.mnj-input-selector__container{display:flex;grid-gap:5px}.mnj-input-selector__container .color-input{border:none;border-bottom:1px solid;flex:1 0 auto;font-size:inherit;height:24px;padding:6px 8px;text-transform:uppercase}.mnj-input-selector__container .color-input:focus{border-bottom:1px solid;outline:none}.mnj-input-selector__container__switch-buttons{display:flex;flex-flow:column nowrap}.mnj-input-selector__container__switch-buttons .switch-buttons--next,.mnj-input-selector__container__switch-buttons .switch-buttons--prev{height:10px;position:relative;width:10px}.mnj-input-selector__container__switch-buttons .switch-buttons--next:after,.mnj-input-selector__container__switch-buttons .switch-buttons--prev:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0}[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--next,[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--prev{transform:rotate(180deg)}.mnj-input-selector__container__switch-buttons .switch-buttons--prev:after{border-left-width:2px;transform:translateY(4px) rotate(45deg)}.mnj-input-selector__container__switch-buttons .switch-buttons--next:after{border-right-width:2px;transform:translateY(4px) rotate(135deg)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjInputSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-input-selector',
                templateUrl: 'input-selector.html',
                styleUrls: ['input-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'mnj-input-selector',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, { color: [{
            type: Input
        }], colorFormat: [{
            type: Input
        }], inputChange: [{
            type: Output
        }], colorInput: [{
            type: ViewChild,
            args: ['colorInput']
        }] }); })();

class MnjAlphaSelector extends BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.alphaChange = new EventEmitter();
    }
    get alphaThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: '50%' };
    }
    get gradient() {
        const { red, green, blue } = this.color;
        const direction = this._isRtl() ? 'to left' : 'to right';
        return {
            backgroundImage: `linear-gradient(${direction}, rgba(${red}, ${green}, ${blue}, 0) 0%, rgb(${red}, ${green}, ${blue}) 100%)`,
        };
    }
    _setColor(color) {
        if (this._elementRef) {
            const alpha = color.alpha * 100;
            let xPosition = clamp(0, 100, alpha);
            if (this._isRtl()) {
                xPosition = 100 - xPosition;
            }
            this.thumbPosition = { x: xPosition, y: 50 };
        }
        this._changeDetectorRef.markForCheck();
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x: pointerToContainerX } = getPointerPositionInContainer(pointerPos, container);
            let pointerX = Math.round(pointerToContainerX * 100);
            if (this._isRtl()) {
                pointerX = 100 - pointerX;
            }
            this.thumbPosition = { x: pointerX, y: 50 };
            const alpha = Math.round(pointerX) / 100;
            const color = Object.assign({}, this.color);
            color.alpha = alpha;
            this.alphaChange.emit(color);
        });
    }
    _handleKeydownEvent(event) {
        const { alpha: oldAlpha } = this.color;
        const isRtl = this._isRtl();
        let newAlpha = oldAlpha;
        switch (event.keyCode) {
            case UP_ARROW:
            case LEFT_ARROW:
                newAlpha = newAlpha + (isRtl ? 0.01 : -0.01);
                break;
            case DOWN_ARROW:
            case RIGHT_ARROW:
                newAlpha = newAlpha + (isRtl ? -0.01 : 0.01);
                break;
            case HOME:
                newAlpha = 0;
                break;
            case END:
                newAlpha = 1;
                break;
            case PAGE_UP:
                newAlpha = newAlpha + (isRtl ? 0.1 : -0.1);
                break;
            case PAGE_DOWN:
                newAlpha = newAlpha + (isRtl ? -0.1 : 0.1);
                break;
            default:
                return;
        }
        newAlpha = clamp(0, 1, newAlpha);
        const color = Object.assign(Object.assign({}, this.color), { alpha: newAlpha });
        this.alphaChange.emit(color);
    }
}
MnjAlphaSelector.ɵfac = function MnjAlphaSelector_Factory(t) { return new (t || MnjAlphaSelector)(ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality)); };
MnjAlphaSelector.ɵcmp = ɵɵdefineComponent({ type: MnjAlphaSelector, selectors: [["mnj-alpha-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-alpha-selector"], hostVars: 1, hostBindings: function MnjAlphaSelector_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function MnjAlphaSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", 0);
    } }, outputs: { alphaChange: "alphaChange" }, features: [ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjAlphaSelector }]), ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "mnj-alpha-selector__gradient", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjAlphaSelector_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelement(2, "div", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.gradient);
        ɵɵadvance(1);
        ɵɵproperty("ngStyle", ctx.alphaThumbPos);
    } }, directives: [NgStyle], styles: [".mnj-alpha-selector{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=\") repeat 0}.mnj-alpha-selector__gradient{border-radius:2px;height:100%}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjAlphaSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-alpha-selector',
                templateUrl: 'alpha-selector.html',
                styleUrls: ['alpha-selector.scss', '../base-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjAlphaSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-alpha-selector',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: NgZone }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: Directionality }]; }, { alphaChange: [{
            type: Output
        }] }); })();

function MnjChromePickerView_mnj_alpha_selector_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mnj-alpha-selector", 7);
    ɵɵlistener("alphaChange", function MnjChromePickerView_mnj_alpha_selector_3_Template_mnj_alpha_selector_alphaChange_0_listener($event) { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.changeColor($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r0.activeColor);
} }
class MnjChromePickerView extends BaseColorpickerView {
    constructor(_colorAdapter) {
        super(_colorAdapter);
        this._colorAdapter = _colorAdapter;
        this.colorShadesFn = (color) => {
            return calculateShades(color);
        };
    }
}
MnjChromePickerView.ɵfac = function MnjChromePickerView_Factory(t) { return new (t || MnjChromePickerView)(ɵɵdirectiveInject(ColorAdapter)); };
MnjChromePickerView.ɵcmp = ɵɵdefineComponent({ type: MnjChromePickerView, selectors: [["mnj-chrome-picker-view"]], hostAttrs: [1, "mnj-chrome-picker-view"], inputs: { showAlpha: "showAlpha" }, exportAs: ["mnjChromePickerView"], features: [ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjChromePickerView }]), ɵɵInheritDefinitionFeature], decls: 7, vars: 7, consts: [["cdkFocusInitial", "", 3, "color", "paletteGeneratorFn", "colorSelected"], [3, "color", "satChange"], [3, "color", "hueChange"], [3, "color", "alphaChange", 4, "ngIf"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color", "inputChange"], [3, "color", "alphaChange"]], template: function MnjChromePickerView_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjChromePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(1, "mnj-saturation-selector", 1);
        ɵɵlistener("satChange", function MnjChromePickerView_Template_mnj_saturation_selector_satChange_1_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementStart(2, "mnj-hue-selector", 2);
        ɵɵlistener("hueChange", function MnjChromePickerView_Template_mnj_hue_selector_hueChange_2_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵtemplate(3, MnjChromePickerView_mnj_alpha_selector_3_Template, 1, 1, "mnj-alpha-selector", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelement(5, "mnj-preview-swatch", 5);
        ɵɵelementStart(6, "mnj-input-selector", 6);
        ɵɵlistener("inputChange", function MnjChromePickerView_Template_mnj_input_selector_inputChange_6_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.colorShadesFn);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.activeColor);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.activeColor);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showAlpha);
        ɵɵadvance(2);
        ɵɵproperty("color", ctx.activeColor);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.activeColor);
    } }, directives: [MnjGridSelector, MnjSaturationSelector, MnjHueSelector, NgIf, MnjPreviewSwatch, MnjInputSelector, MnjAlphaSelector], styles: [".mnj-chrome-picker-view .controls-container{display:flex}.mnj-chrome-picker-view .controls-container--input{flex:1;margin-left:15px}.mnj-chrome-picker-view{display:flex;flex-direction:column;height:100%}.mnj-chrome-picker-view .mnj-saturation-selector{flex:1 0 auto}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjChromePickerView, [{
        type: Component,
        args: [{
                selector: 'mnj-chrome-picker-view',
                exportAs: 'mnjChromePickerView',
                templateUrl: 'chrome-view.html',
                styleUrls: ['chrome-view.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjChromePickerView }],
                host: {
                    class: 'mnj-chrome-picker-view',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, { showAlpha: [{
            type: Input
        }] }); })();

class MnjPalettePickerView {
    constructor(_colorAdapter) {
        this._colorAdapter = _colorAdapter;
        this.paletteFn = () => this.palette;
        // tslint:disable-next-line: member-ordering
        this.activeColorChange = new EventEmitter();
    }
    get activeColor() {
        return this._activeColor;
    }
    set activeColor(value) {
        const oldActiveColor = this._activeColor;
        if (this._colorAdapter.isValid(value) && !this._colorAdapter.sameColor(oldActiveColor, value)) {
            this._activeColor = value;
            this._selectColorInPalette();
        }
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        if (this._colorAdapter.sameColor(this.selected, value)) {
            return;
        }
        this._selected = this._colorAdapter.getValidColorOrNull(value);
        this._selectColorInPalette();
    }
    get palette() {
        return this._palette;
    }
    set palette(value) {
        this._palette = value;
        this._selectColorInPalette();
    }
    changeColor(value) {
        this.activeColor = value;
        this.activeColorChange.emit(this.activeColor);
    }
    _selectColorInPalette() {
        if (!this.palette || !this.activeColor) {
            return;
        }
        const defaultSelected = this.palette.findIndex((p) => p.active === true);
        if (defaultSelected >= 0) {
            this._palette[defaultSelected].active = false;
        }
        let matchIndex = this.palette.findIndex((p) => this._colorAdapter.sameColor(p.color, this.activeColor));
        // If no match select the first one for keyboard accesibility
        matchIndex = Math.max(0, matchIndex);
        this._palette[matchIndex].active = true;
    }
}
MnjPalettePickerView.ɵfac = function MnjPalettePickerView_Factory(t) { return new (t || MnjPalettePickerView)(ɵɵdirectiveInject(ColorAdapter)); };
MnjPalettePickerView.ɵcmp = ɵɵdefineComponent({ type: MnjPalettePickerView, selectors: [["mnj-palette-picker-view"]], hostAttrs: [1, "mnj-palette-picker-view"], inputs: { activeColor: "activeColor", selected: "selected", palette: "palette" }, outputs: { activeColorChange: "activeColorChange" }, exportAs: ["mnjPalettePickerView"], features: [ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjPalettePickerView }])], decls: 1, vars: 2, consts: [["columns", "6", 3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjPalettePickerView_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mnj-grid-selector", 0);
        ɵɵlistener("colorSelected", function MnjPalettePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.paletteFn);
    } }, directives: [MnjGridSelector], styles: [".mnj-palette-picker-view{display:block}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjPalettePickerView, [{
        type: Component,
        args: [{
                selector: 'mnj-palette-picker-view',
                templateUrl: 'palette-view.html',
                styleUrls: ['palette-view.scss'],
                exportAs: 'mnjPalettePickerView',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjPalettePickerView }],
                host: {
                    class: 'mnj-palette-picker-view',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, { activeColor: [{
            type: Input
        }], selected: [{
            type: Input
        }], palette: [{
            type: Input
        }], activeColorChange: [{
            type: Output
        }] }); })();

/** Colorpicker data that requires internationalization. */
class MnjColorpickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** A label for the Color wheel view (used by screen readers) */
        this.pickerView = 'Color Picker';
        /** A label for the Color armonies view (used by screen readers) */
        this.armoniesView = 'Color Armonies';
        /** A label for the Color palette view (used by screen readers) */
        this.paletteView = 'Color Palette';
        /** A label for the Color palette view (used by screen readers) */
        this.scanView = 'Color Scan';
        /** A label for the scan picker view */
        this.uploadPhotoToScan = 'Click or drop a picture to scan';
        /** A label for the Color wheel view (used by screen readers) */
        this.switchToPickerView = 'Choose color';
        /** A label for the Color wheel view (used by screen readers) */
        this.switchToArmoniesView = 'Choose armonie';
        /** A label for the Color wheel view (used by screen readers) */
        this.switchToPaletteView = 'Choose from palette';
        /** A label for the Color wheel view (used by screen readers) */
        this.switchToScanView = 'Choose from a picture';
        /** A label for the button used to open the color picker popup (used by screen readers). */
        this.openColorPickerLabel = 'Open Color Picker';
    }
}
MnjColorpickerIntl.ɵfac = function MnjColorpickerIntl_Factory(t) { return new (t || MnjColorpickerIntl)(); };
MnjColorpickerIntl.ɵprov = ɵɵdefineInjectable({ token: MnjColorpickerIntl, factory: MnjColorpickerIntl.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorpickerIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

const _c0$1 = ["imageCanvas"];
function MnjPipetteSelector_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const swatch_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("background", ctx_r2.getPixelBackground(swatch_r3));
    ɵɵclassProp("mnj-pipette-selector__swatch-container--cell--active", i_r4 === ctx_r2._swatchMiddle);
} }
function MnjPipetteSelector_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "div", 5);
    ɵɵtemplate(2, MnjPipetteSelector_div_2_div_2_Template, 1, 4, "div", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.swatchGridPos);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r1.swatchGridStyle);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.pipetteSwatchPalette);
} }
class MnjPipetteSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef) {
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.pipetteColorChange = new EventEmitter();
        this._showPipetteSwatch = false;
        this.thumbPosition = { x: 0, y: 0 };
        this.swatchPosition = 'bottom-right';
        /** Keeps track of the event listeners that we've bound to the `document`. */
        this._globalListeners = new Map();
        this.pipetteSwatchPalette = [];
        /** Clears out the global event listeners from the `document`. */
        this._clearGlobalListeners = () => {
            this.showPipetteSwatch = false;
            this._globalListeners.forEach((config, name) => {
                this._document.removeEventListener(name, config.handler, config.options);
            });
            this._globalListeners.clear();
        };
        /** Handler for the `mousedown`/`touchstart` events. */
        this._pointerDown = (event) => {
            const pointer = getPointerPositionFromEvent(event);
            if (isSamePosition(this.cachedPointerPos, pointer)) {
                return;
            }
            this.cachedContainerSize = getContainerSize(this._elementRef);
            this.calculateColorFromPosition(this.cachedContainerSize, pointer);
            const isTouchEvent = event.type.startsWith('touch');
            const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            this._clearGlobalListeners();
            this._globalListeners
                .set(moveEvent, {
                handler: this.pointerMove,
                options: activeCapturingEventOptions,
            })
                .set(upEvent, {
                handler: this._clearGlobalListeners,
                options: true,
            });
            this.showPipetteSwatch = true;
            this.addGlobalListeners();
        };
        this.pointerMove = (event) => {
            const pointer = getPointerPositionFromEvent(event);
            if (isSamePosition(this.cachedPointerPos, pointer)) {
                return;
            }
            this.calculateColorFromPosition(this.cachedContainerSize, pointer);
        };
        this.swatchCells = 9;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
        this._paintCanvas();
    }
    set swatchCells(value) {
        value = coerceNumberProperty(value);
        value = value % 2 === 1 ? value : value - 1;
        if (value !== this._swatchCells) {
            this._swatchCells = value;
            this._swatchMiddle = Math.floor(Math.pow(value, 2) / 2);
        }
    }
    get canvasThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: `${this.thumbPosition.y}%` };
    }
    get swatchGridStyle() {
        return {
            gridTemplateColumns: `repeat(${this._swatchCells}, 10px)`,
            gridTemplateRows: `repeat(${this._swatchCells}, 10px)`,
        };
    }
    get swatchGridPos() {
        const delta = (this._swatchCells * 4) / 3;
        let translate;
        switch (this.swatchPosition) {
            case 'bottom-right': {
                translate = `${delta}%, ${delta}%`;
                break;
            }
            case 'top-right': {
                translate = `${delta}%, ${-100 - delta}%`;
                break;
            }
            case 'top-left': {
                translate = `${-100 - delta}%, ${-100 - delta}%`;
                break;
            }
            case 'bottom-left': {
                translate = `${-100 - delta}%, ${delta}%`;
                break;
            }
        }
        return {
            left: `${this.thumbPosition.x}%`,
            top: `${this.thumbPosition.y}%`,
            transform: `translate(${translate})`,
            width: `${this._swatchCells * 10 + 1}px`,
        };
    }
    getPixelBackground(pixel) {
        return `rgba(${pixel.red}, ${pixel.green}, ${pixel.blue}, ${pixel.alpha})`;
    }
    get showPipetteSwatch() {
        return this._showPipetteSwatch && !!this.image;
    }
    set showPipetteSwatch(value) {
        value = coerceBooleanProperty(value);
        if (this._showPipetteSwatch !== value) {
            this._showPipetteSwatch = value;
            this._changeDetectorRef.detectChanges();
        }
    }
    ngAfterViewInit() {
        this.attachListeners();
        if (this._image) {
            // Paint canvas if there was a pending image that could not be rendered until this momment
            this._ngZone.onStable.pipe(take(1)).subscribe(() => this._paintCanvas());
        }
    }
    ngOnDestroy() {
        this._clearGlobalListeners();
    }
    // LISTENERS
    attachListeners() {
        const sliderElement = coerceElement(this._elementRef);
        this._ngZone.runOutsideAngular(() => {
            sliderElement.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
            sliderElement.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        });
    }
    addGlobalListeners() {
        this._ngZone.runOutsideAngular(() => {
            this._globalListeners.forEach((config, name) => {
                this._document.addEventListener(name, config.handler, config.options);
            });
        });
    }
    _paintCanvas() {
        if (this.image && this.canvas) {
            const canvasElement = coerceElement(this.canvas);
            const { width: imgWidth, height: imgHeight } = this.image;
            const { width: containerWidth, height: containerHeight } = coerceElement(this._elementRef).getBoundingClientRect();
            const ctx = canvasElement.getContext('2d');
            ctx.clearRect(0, 0, canvasElement.height, canvasElement.width);
            const canvasWidth = Math.floor(containerWidth);
            const canvasHeight = Math.floor(containerHeight);
            const { offsetX, offsetY, width, height } = this._fitImage(canvasWidth, canvasHeight, imgWidth, imgHeight);
            canvasElement.width = canvasWidth;
            canvasElement.height = canvasHeight;
            ctx.drawImage(this.image, offsetX, offsetY, width, height);
            this._changeDetectorRef.markForCheck();
        }
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x, y } = getPointerPositionInContainer(pointerPos, container);
            const pointerX = x * 100;
            const pointerY = y * 100;
            this.thumbPosition = { x: pointerX, y: pointerY };
            this.swatchPosition = this._getSwatchPosition(pointerPos, container);
            const leftPos = pointerPos.x - container.left;
            const topPos = pointerPos.y - container.top;
            const ctx = this.canvas.nativeElement.getContext('2d');
            const negativeOffset = this._swatchCells / 2 - 1;
            const pixels = ctx.getImageData(leftPos - negativeOffset, topPos - negativeOffset, this._swatchCells, this._swatchCells);
            this.pipetteSwatchPalette = [];
            for (let i = 0; i < pixels.data.length; i += 4) {
                this.pipetteSwatchPalette.push({
                    red: pixels.data[i],
                    green: pixels.data[i + 1],
                    blue: pixels.data[i + 2],
                    alpha: pixels.data[i + 3] / 255,
                });
            }
            const { red, green, blue, alpha } = this.pipetteSwatchPalette[this._swatchMiddle];
            const color = fromRgb({ red, green, blue }, alpha);
            this.pipetteColorChange.emit(color);
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Centers and resize given children container into the parent container */
    _fitImage(parentWidth, parentHeight, childWidth, childHeight, scale = 1, offsetX = 0.5, offsetY = 0.5) {
        const childRatio = childWidth / childHeight;
        const parentRatio = parentWidth / parentHeight;
        let width = parentWidth * scale;
        let height = parentHeight * scale;
        if (childRatio > parentRatio) {
            height = width / childRatio;
        }
        else {
            width = height * childRatio;
        }
        return {
            width,
            height,
            offsetX: (parentWidth - width) * offsetX,
            offsetY: (parentHeight - height) * offsetY,
        };
    }
    _getSwatchPosition(pointerPos, container) {
        const { x, y } = pointerPos;
        const { right, bottom } = container;
        const swatchRight = x + 10 * this._swatchCells + 1; // 10 pixels per cell plus 1px border
        const swatchBottom = y + 10 * this._swatchCells + 1; // 10 pixels per cells plus 1px border
        const topOrBottom = swatchBottom > bottom;
        const leftOrRight = swatchRight > right;
        if (!topOrBottom && !leftOrRight)
            return 'bottom-right';
        if (topOrBottom && leftOrRight)
            return 'top-left';
        if (topOrBottom && !leftOrRight)
            return 'top-right';
        if (!topOrBottom && leftOrRight)
            return 'bottom-left';
    }
}
MnjPipetteSelector.ɵfac = function MnjPipetteSelector_Factory(t) { return new (t || MnjPipetteSelector)(ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
MnjPipetteSelector.ɵcmp = ɵɵdefineComponent({ type: MnjPipetteSelector, selectors: [["mnj-pipette-selector"]], viewQuery: function MnjPipetteSelector_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.canvas = _t.first);
    } }, hostAttrs: [1, "mnj-pipette-selector"], inputs: { image: "image", swatchCells: "swatchCells" }, outputs: { pipetteColorChange: "pipetteColorChange" }, features: [ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjPipetteSelector }])], decls: 5, vars: 2, consts: [["imageCanvas", ""], ["class", "mnj-pipette-selector__swatch-container", 3, "ngStyle", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"], [1, "mnj-pipette-selector__swatch-container", 3, "ngStyle"], [1, "mnj-pipette-selector__swatch-container__grid", 3, "ngStyle"], ["class", "mnj-pipette-selector__swatch-container--cell", 3, "background", "mnj-pipette-selector__swatch-container--cell--active", 4, "ngFor", "ngForOf"], [1, "mnj-pipette-selector__swatch-container--cell"]], template: function MnjPipetteSelector_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "canvas", null, 0);
        ɵɵtemplate(2, MnjPipetteSelector_div_2_Template, 3, 3, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵelement(4, "div", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.showPipetteSwatch);
        ɵɵadvance(1);
        ɵɵproperty("ngStyle", ctx.canvasThumbPos);
    } }, directives: [NgIf, NgStyle, NgForOf], styles: [".mnj-pipette-selector{cursor:pointer;display:block;margin-bottom:12px;position:relative}.mnj-pipette-selector__swatch-container{-webkit-clip-path:circle(49% at 50% 50%);clip-path:circle(49% at 50% 50%);position:absolute;transition:transform .4s cubic-bezier(.25,.8,.25,1);z-index:1}.mnj-pipette-selector__swatch-container__grid{border-bottom:1px solid #000;border-right:1px solid #000;display:-ms-grid;display:grid}.mnj-pipette-selector__swatch-container--cell{border-left:1px solid #000;border-top:1px solid #000}.mnj-pipette-selector__swatch-container--cell--active{border:1px solid red;height:11px;width:11px;z-index:1}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjPipetteSelector, [{
        type: Component,
        args: [{
                selector: 'mnj-pipette-selector',
                templateUrl: 'pipette-selector.html',
                styleUrls: ['pipette-selector.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjPipetteSelector }],
                host: {
                    class: 'mnj-pipette-selector',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: NgZone }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { canvas: [{
            type: ViewChild,
            args: ['imageCanvas']
        }], image: [{
            type: Input
        }], swatchCells: [{
            type: Input
        }], pipetteColorChange: [{
            type: Output
        }] }); })();

function MnjScanPickerView_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function MnjScanPickerView_div_0_Template_div_click_0_listener() { ɵɵrestoreView(_r4); ɵɵnextContext(); const _r1 = ɵɵreference(2); return _r1.click(); })("drop", function MnjScanPickerView_div_0_Template_div_drop_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5.uploadFile($event); })("dragover", function MnjScanPickerView_div_0_Template_div_dragover_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r6 = ɵɵnextContext(); return ctx_r6._allowDrop($event); });
    ɵɵelementStart(1, "span", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.uploadPhotoToScanLabel);
} }
function MnjScanPickerView_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mnj-pipette-selector", 6);
    ɵɵlistener("pipetteColorChange", function MnjScanPickerView_ng_container_3_Template_mnj_pipette_selector_pipetteColorChange_1_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.changeColor($event); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 7);
    ɵɵlistener("click", function MnjScanPickerView_ng_container_3_Template_button_click_2_listener() { ɵɵrestoreView(_r8); ɵɵnextContext(); const _r1 = ɵɵreference(2); return _r1.click(); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 8);
    ɵɵelement(4, "path", 9);
    ɵɵelement(5, "path", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(6, "div", 11);
    ɵɵelement(7, "mnj-preview-swatch", 12);
    ɵɵelement(8, "mnj-input-selector", 13);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("image", ctx_r2._loadedImage);
    ɵɵadvance(6);
    ɵɵproperty("color", ctx_r2.activeColor);
    ɵɵadvance(1);
    ɵɵproperty("color", ctx_r2.activeColor);
} }
class MnjScanPickerView extends BaseColorpickerView {
    constructor(_colorAdapter, _intl, changeDetectorRef) {
        super(_colorAdapter);
        this._colorAdapter = _colorAdapter;
        this._intl = _intl;
        this.changeDetectorRef = changeDetectorRef;
    }
    get uploadPhotoToScanLabel() {
        return this._intl.uploadPhotoToScan;
    }
    ngOnDestroy() {
        if (this._loadedImage) {
            URL.revokeObjectURL(this._loadedImage.src);
        }
    }
    uploadFile(event) {
        event.preventDefault();
        event.stopPropagation();
        const files = event.type === 'drop' ? event.dataTransfer.files : event.target.files;
        if (files && files.length) {
            const file = files[0];
            if (!file.type.match('image.*')) {
                return;
            }
            const image = new Image();
            image.onload = () => {
                this._loadedImage = image;
                this.changeDetectorRef.markForCheck();
            };
            image.src = URL.createObjectURL(file);
        }
    }
    _allowDrop(event) {
        event.preventDefault();
    }
}
MnjScanPickerView.ɵfac = function MnjScanPickerView_Factory(t) { return new (t || MnjScanPickerView)(ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(MnjColorpickerIntl), ɵɵdirectiveInject(ChangeDetectorRef)); };
MnjScanPickerView.ɵcmp = ɵɵdefineComponent({ type: MnjScanPickerView, selectors: [["mnj-scan-picker-view"]], hostAttrs: [1, "mnj-scan-picker-view"], exportAs: ["mnjScanPickerView"], features: [ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjScanPickerView }]), ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [["class", "upload-control", 3, "click", "drop", "dragover", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "upload-control--fileInput", 3, "change"], ["fileInput", ""], [4, "ngIf"], [1, "upload-control", 3, "click", "drop", "dragover"], [1, "mat-body"], [3, "image", "pipetteColorChange"], ["mat-mini-fab", "", "color", "primary", 1, "upload-control--fab", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color"]], template: function MnjScanPickerView_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, MnjScanPickerView_div_0_Template, 3, 1, "div", 0);
        ɵɵelementStart(1, "input", 1, 2);
        ɵɵlistener("change", function MnjScanPickerView_Template_input_change_1_listener($event) { return ctx.uploadFile($event); });
        ɵɵelementEnd();
        ɵɵtemplate(3, MnjScanPickerView_ng_container_3_Template, 9, 3, "ng-container", 3);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx._loadedImage);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx._loadedImage);
    } }, directives: [NgIf, MnjPipetteSelector, MatButton, MnjPreviewSwatch, MnjInputSelector], styles: [".mnj-scan-picker-view .controls-container{display:flex}.mnj-scan-picker-view .controls-container--input{flex:1;margin-left:15px}.mnj-scan-picker-view{display:block;flex-direction:column;height:100%;position:relative}.mnj-scan-picker-view .mnj-pipette-selector{height:calc(100% - 40px)}.mnj-scan-picker-view .upload-control{align-items:center;border:2px dashed;border-radius:4px;display:flex;height:100%;justify-content:center}.mnj-scan-picker-view .upload-control--fileInput{display:none}.mnj-scan-picker-view .upload-control--fab{position:absolute;right:-8px;top:-8px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjScanPickerView, [{
        type: Component,
        args: [{
                selector: 'mnj-scan-picker-view',
                exportAs: 'mnjScanPickerView',
                templateUrl: 'scan-view.html',
                styleUrls: ['scan-view.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjScanPickerView }],
                host: {
                    class: 'mnj-scan-picker-view',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: MnjColorpickerIntl }, { type: ChangeDetectorRef }]; }, null); })();

function MnjColorPanel_mnj_chrome_picker_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mnj-chrome-picker-view", 7);
    ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_chrome_picker_view_2_Template_mnj_chrome_picker_view_activeColorChange_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.activeColor = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("activeColor", ctx_r0.activeColor)("selected", ctx_r0.selected)("showAlpha", ctx_r0.showAlpha);
} }
function MnjColorPanel_mnj_armonies_picker_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mnj-armonies-picker-view", 8);
    ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_armonies_picker_view_3_Template_mnj_armonies_picker_view_activeColorChange_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.activeColor = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("activeColor", ctx_r1.activeColor)("selected", ctx_r1.selected);
} }
function MnjColorPanel_mnj_palette_picker_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mnj-palette-picker-view", 9);
    ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_palette_picker_view_4_Template_mnj_palette_picker_view_activeColorChange_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.activeColor = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("activeColor", ctx_r2.activeColor)("palette", ctx_r2.palette)("selected", ctx_r2.selected);
} }
function MnjColorPanel_mnj_scan_picker_view_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mnj-scan-picker-view", 8);
    ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_scan_picker_view_5_Template_mnj_scan_picker_view_activeColorChange_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(); return ctx_r10.activeColor = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("activeColor", ctx_r3.activeColor)("selected", ctx_r3.selected);
} }
/** Default header for MnjColorPanel */
class MnjColorPanelHeader {
    constructor(_intl, colorPanel, changeDetectorRef) {
        this._intl = _intl;
        this.colorPanel = colorPanel;
        this._views = ['picker', 'armonies', 'palette', 'scan'];
        this.colorPanel.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** The label for the current color panel view. */
    get pickerButtonText() {
        switch (this.colorPanel.currentView) {
            case 'picker': {
                return this._intl.pickerView;
            }
            case 'armonies': {
                return this._intl.armoniesView;
            }
            case 'palette': {
                return this._intl.paletteView;
            }
            case 'scan': {
                return this._intl.scanView;
            }
        }
    }
    get pickerViewButtonLabel() {
        switch (this.colorPanel.currentView) {
            case 'picker': {
                return this._intl.switchToArmoniesView;
            }
            case 'armonies': {
                return this._intl.switchToPaletteView;
            }
            case 'palette': {
                return this._intl.switchToScanView;
            }
            case 'scan': {
                return this._intl.switchToPickerView;
            }
        }
    }
    /** The label for the previous button. */
    get prevButtonLabel() {
        switch (this.colorPanel.currentView) {
            case 'picker': {
                return this._intl.switchToScanView;
            }
            case 'armonies': {
                return this._intl.switchToPickerView;
            }
            case 'palette': {
                return this._intl.switchToArmoniesView;
            }
            case 'scan': {
                return this._intl.switchToPaletteView;
            }
        }
    }
    /** The label for the next button. */
    get nextButtonLabel() {
        switch (this.colorPanel.currentView) {
            case 'picker': {
                return this._intl.switchToArmoniesView;
            }
            case 'armonies': {
                return this._intl.switchToPaletteView;
            }
            case 'palette': {
                return this._intl.switchToScanView;
            }
            case 'scan': {
                return this._intl.switchToPickerView;
            }
        }
    }
    /** Handles user clicks on the previous button. */
    previousClicked() {
        let index = this._views.findIndex((v) => v === this.colorPanel.currentView);
        index = (index + 4 - 1) % 4;
        this.colorPanel.currentView = this._views[index];
    }
    /** Handles user clicks on the next button. */
    nextClicked() {
        let index = this._views.findIndex((v) => v === this.colorPanel.currentView);
        index = (index + 4 + 1) % 4;
        this.colorPanel.currentView = this._views[index];
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
        return this.colorPanel.currentView !== 'picker';
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
        return this.colorPanel.currentView !== 'scan';
    }
}
MnjColorPanelHeader.ɵfac = function MnjColorPanelHeader_Factory(t) { return new (t || MnjColorPanelHeader)(ɵɵdirectiveInject(MnjColorpickerIntl), ɵɵdirectiveInject(forwardRef(() => MnjColorPanel)), ɵɵdirectiveInject(ChangeDetectorRef)); };
MnjColorPanelHeader.ɵcmp = ɵɵdefineComponent({ type: MnjColorPanelHeader, selectors: [["mnj-color-panel-header"]], exportAs: ["mnjColorPanelHeader"], decls: 8, vars: 8, consts: [[1, "mnj-color-panel-header"], [1, "mnj-color-panel-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mnj-color-panel-picker-button", 3, "click"], [1, "mnj-color-panel-arrow"], [1, "mnj-color-panel-spacer"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-next-button", 3, "disabled", "click"]], template: function MnjColorPanelHeader_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "button", 2);
        ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_2_listener() { return ctx.nextClicked(); });
        ɵɵtext(3);
        ɵɵelement(4, "div", 3);
        ɵɵelementEnd();
        ɵɵelement(5, "div", 4);
        ɵɵelementStart(6, "button", 5);
        ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_6_listener() { return ctx.previousClicked(); });
        ɵɵelementEnd();
        ɵɵelementStart(7, "button", 6);
        ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_7_listener() { return ctx.nextClicked(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵattribute("aria-label", ctx.pickerViewButtonLabel);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.pickerButtonText, " ");
        ɵɵadvance(1);
        ɵɵclassProp("mnj-color-panel-invert", ctx.colorPanel.currentView === "scan");
        ɵɵadvance(2);
        ɵɵproperty("disabled", !ctx.previousEnabled());
        ɵɵattribute("aria-label", ctx.prevButtonLabel);
        ɵɵadvance(1);
        ɵɵproperty("disabled", !ctx.nextEnabled());
        ɵɵattribute("aria-label", ctx.nextButtonLabel);
    } }, directives: [MatButton, CdkAriaLive], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorPanelHeader, [{
        type: Component,
        args: [{
                selector: 'mnj-color-panel-header',
                templateUrl: 'color-panel-header.html',
                exportAs: 'mnjColorPanelHeader',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: MnjColorpickerIntl }, { type: MnjColorPanel, decorators: [{
                type: Inject,
                args: [forwardRef(() => MnjColorPanel)]
            }] }, { type: ChangeDetectorRef }]; }, null); })();
/**
 * A color panel that is used as part of the colorpicker.
 * @docs-private
 */
class MnjColorPanel {
    constructor(_intl, _colorAdapter, _config, _changeDetectorRef) {
        this._colorAdapter = _colorAdapter;
        this._config = _config;
        this._changeDetectorRef = _changeDetectorRef;
        /** Emits when the currently selected color changes. */
        this.selectedChange = new EventEmitter();
        /** Emits when any color is selected. */
        this._userSelection = new EventEmitter();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new Subject();
        this._intlChanges = _intl.changes.subscribe(() => {
            _changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** The color to start focused on the picker. */
    get startColor() {
        return this._startColor;
    }
    set startColor(value) {
        this._startColor = this._colorAdapter.getValidColorOrNull(value);
    }
    get palette() {
        return this._palette || this._config.defaultPalette;
    }
    set palette(value) {
        this._palette = value;
    }
    get showAlpha() {
        return this._showAlpha || this._config.showAlpha;
    }
    set showAlpha(value) {
        this._showAlpha = coerceBooleanProperty(value);
    }
    /** The currently selected color. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = this._colorAdapter.getValidColorOrNull(value);
    }
    /**
     * The current active color. This determines which time period is shown and which color is
     * highlighted when using keyboard navigation.
     */
    get activeColor() {
        return this._activeColor;
    }
    set activeColor(value) {
        this._activeColor = value;
        this.stateChanges.next();
        this._changeDetectorRef.markForCheck();
    }
    /** Whether the color panel is in month view. */
    get currentView() {
        return this._currentView;
    }
    set currentView(value) {
        this._currentView = value;
        this._changeDetectorRef.markForCheck();
    }
    ngAfterContentInit() {
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView || 'picker';
        this.activeColor = this.selected || this.startColor || this._config.defaultColor;
    }
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    }
    /** Makes the active view color the selected one. */
    _selectColor() {
        const color = this._getCurrentViewComponent().activeColor;
        if (!this._colorAdapter.sameColor(color, this.selected)) {
            this.selectedChange.emit(color);
        }
        this._userSelection.emit(color);
    }
    _handleKeydownEvent(event) {
        switch (event.keyCode) {
            case ENTER:
                this._selectColor();
                return;
            default:
                return;
        }
    }
    /** Returns the component instance that corresponds to the current color panel view. */
    _getCurrentViewComponent() {
        return this.currentPicker;
    }
}
MnjColorPanel.ɵfac = function MnjColorPanel_Factory(t) { return new (t || MnjColorPanel)(ɵɵdirectiveInject(MnjColorpickerIntl), ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(MNJ_COLOR_CONFIG_PROVIDER), ɵɵdirectiveInject(ChangeDetectorRef)); };
MnjColorPanel.ɵcmp = ɵɵdefineComponent({ type: MnjColorPanel, selectors: [["mnj-color-panel"]], viewQuery: function MnjColorPanel_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(ColorPickerView, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.currentPicker = _t.first);
    } }, hostAttrs: [1, "mnj-color-panel"], hostBindings: function MnjColorPanel_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function MnjColorPanel_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", startView: "startView", startColor: "startColor", palette: "palette", showAlpha: "showAlpha", selected: "selected", activeColor: "activeColor" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection" }, exportAs: ["mnjColorPanel"], decls: 9, vars: 6, consts: [["cdkFocusInitial", ""], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mnj-color-panel-content", 3, "ngSwitch"], [3, "activeColor", "selected", "showAlpha", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "selected", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "palette", "selected", "activeColorChange", 4, "ngSwitchCase"], [1, "mnj-color-panel-footer"], ["mat-button", "", 3, "color", "click"], [3, "activeColor", "selected", "showAlpha", "activeColorChange"], [3, "activeColor", "selected", "activeColorChange"], [3, "activeColor", "palette", "selected", "activeColorChange"]], template: function MnjColorPanel_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mnj-color-panel-header", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, MnjColorPanel_mnj_chrome_picker_view_2_Template, 1, 3, "mnj-chrome-picker-view", 2);
        ɵɵtemplate(3, MnjColorPanel_mnj_armonies_picker_view_3_Template, 1, 2, "mnj-armonies-picker-view", 3);
        ɵɵtemplate(4, MnjColorPanel_mnj_palette_picker_view_4_Template, 1, 3, "mnj-palette-picker-view", 4);
        ɵɵtemplate(5, MnjColorPanel_mnj_scan_picker_view_5_Template, 1, 2, "mnj-scan-picker-view", 3);
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 5);
        ɵɵelementStart(7, "button", 6);
        ɵɵlistener("click", function MnjColorPanel_Template_button_click_7_listener() { return ctx._selectColor(); });
        ɵɵtext(8, "Save");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.currentView);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "picker");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "armonies");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "palette");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "scan");
        ɵɵadvance(2);
        ɵɵproperty("color", ctx.color);
    } }, directives: [MnjColorPanelHeader, CdkMonitorFocus, NgSwitch, NgSwitchCase, MatButton, MnjChromePickerView, MnjArmoniesPickerView, MnjPalettePickerView, MnjScanPickerView], styles: [".mnj-color-panel{display:flex;flex-direction:column}.mnj-color-panel-header{padding:9px 16px 0}.mnj-color-panel-content{flex:1 0 0;outline:none;overflow-y:auto;padding:9px 16px}.mnj-color-panel-footer{display:flex;justify-content:flex-end;padding:0 16px 9px}.mnj-color-panel-controls{display:flex;margin:5% calc(4.71429% - 16px)}.mnj-color-panel-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mnj-color-panel-spacer{flex:1 1 auto}.mnj-color-panel-picker-button{min-width:0}.mnj-color-panel-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-top-style:solid;border-top-width:5px;display:inline-block;height:0;margin:0 0 0 5px;vertical-align:middle;width:0}.mnj-color-panel-arrow.mnj-color-panel-invert{transform:rotate(180deg)}[dir=rtl] .mnj-color-panel-arrow{margin:0 5px 0 0}.mnj-color-panel-next-button,.mnj-color-panel-previous-button{position:relative}.mnj-color-panel-next-button:after,.mnj-color-panel-previous-button:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;margin:15.5px;position:absolute;right:0;top:0}[dir=rtl] .mnj-color-panel-next-button,[dir=rtl] .mnj-color-panel-previous-button{transform:rotate(180deg)}.mnj-color-panel-previous-button:after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mnj-color-panel-next-button:after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorPanel, [{
        type: Component,
        args: [{
                selector: 'mnj-color-panel',
                templateUrl: 'color-panel.html',
                styleUrls: ['color-panel.scss'],
                exportAs: 'mnjColorPanel',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'mnj-color-panel',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: MnjColorpickerIntl }, { type: ColorAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MNJ_COLOR_CONFIG_PROVIDER]
            }] }, { type: ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], startView: [{
            type: Input
        }], startColor: [{
            type: Input
        }], palette: [{
            type: Input
        }], showAlpha: [{
            type: Input
        }], selected: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], _userSelection: [{
            type: Output
        }], currentPicker: [{
            type: ViewChild,
            args: [ColorPickerView]
        }], activeColor: [{
            type: Input
        }] }); })();

/**
 * Animations used by the colorpicker.
 * @docs-private
 */
const mnjColorpickerAnimations = {
    /** Transforms the height of the colorpicker's panel. */
    transformPanel: trigger('transformPanel', [
        state('void', style({
            opacity: 0,
            transform: 'scale(1, 0.8)',
        })),
        transition('void => enter', animate('120ms cubic-bezier(0, 0, 0.2, 1)', style({
            opacity: 1,
            transform: 'scale(1, 1)',
        }))),
        transition('* => void', animate('100ms linear', style({ opacity: 0 }))),
    ]),
    /** Fades in the content of the panel. */
    fadeInColorPanel: trigger('fadeInColorPanel', [
        state('void', style({ opacity: 0 })),
        state('enter', style({ opacity: 1 })),
        // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        transition('void => *', animate('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')),
    ]),
};

/** Used to generate a unique ID for each colorpicker instance. */
let colorpickerUid = 0;
/** Injection token that determines the scroll handling while the color panel is open. */
const MNJ_COLORPICKER_SCROLL_STRATEGY = new InjectionToken('mnj-colorpicker-scroll-strategy');
/** @docs-private */
function MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MNJ_COLORPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MnjColorpickerContent.
/** @docs-private */
class MnjColorpickerContentBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MnjColorpickerContentMixinBase = mixinColor(MnjColorpickerContentBase);
/**
 * Component used as the content for the colorpicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the color panel itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
class MnjColorpickerContent extends _MnjColorpickerContentMixinBase {
    constructor(elementRef, _changeDetectorRef) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        /** Current state of the animation. */
        this._animationState = 'enter';
        /** Emits when an animation has finished. */
        this._animationDone = new Subject();
        this._subscriptions = new Subscription();
    }
    ngAfterViewInit() {
        this._subscriptions.add(this.colorpicker._stateChanges.subscribe(() => {
            this._changeDetectorRef.markForCheck();
        }));
    }
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this._animationDone.complete();
    }
    _handleUserSelection(value) {
        this.colorpicker.select(value);
        this.colorpicker.close();
    }
    _startExitAnimation() {
        this._animationState = 'void';
        this._changeDetectorRef.markForCheck();
    }
    _getSelected() {
        return this.colorpicker._selectedColor;
    }
}
MnjColorpickerContent.ɵfac = function MnjColorpickerContent_Factory(t) { return new (t || MnjColorpickerContent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
MnjColorpickerContent.ɵcmp = ɵɵdefineComponent({ type: MnjColorpickerContent, selectors: [["mnj-colorpicker-content"]], hostAttrs: [1, "mnj-colorpicker-content"], hostVars: 3, hostBindings: function MnjColorpickerContent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵsyntheticHostListener("@transformPanel.done", function MnjColorpickerContent_animation_transformPanel_done_HostBindingHandler() { return ctx._animationDone.next(); });
    } if (rf & 2) {
        ɵɵsyntheticHostProperty("@transformPanel", ctx._animationState);
        ɵɵclassProp("mnj-colorpicker-content-touch", ctx.colorpicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["mnjColorpickerContent"], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 9, consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "color", "startView", "startColor", "showAlpha", "palette", "selected", "_userSelection"]], template: function MnjColorpickerContent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mnj-color-panel", 0);
        ɵɵlistener("_userSelection", function MnjColorpickerContent_Template_mnj_color_panel__userSelection_0_listener($event) { return ctx._handleUserSelection($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("id", ctx.colorpicker.id)("ngClass", ctx.colorpicker.panelClass)("color", ctx.colorpicker.color)("startView", ctx.colorpicker.startView)("startColor", ctx.colorpicker.startColor)("showAlpha", ctx.colorpicker.showAlpha)("palette", ctx.colorpicker.palette)("selected", ctx._getSelected())("@fadeInColorPanel", "enter");
    } }, directives: [MnjColorPanel, CdkTrapFocus, NgClass], styles: [".mnj-colorpicker-content{border-radius:4px;display:flex;flex-direction:column}.mnj-colorpicker-content .mnj-color-panel{height:400px;width:350px}.mnj-colorpicker-content-touch{display:flex;flex-direction:column;margin:-24px;max-height:80vh;overflow:auto}.mnj-colorpicker-content-touch .mnj-color-panel{max-height:788px;max-width:750px;min-height:312px;min-width:250px}@media (orientation:landscape){.mnj-colorpicker-content-touch .mnj-color-panel{height:80vh;width:64vh}}@media (orientation:portrait){.mnj-colorpicker-content-touch .mnj-color-panel{height:100vw;width:80vw}}"], encapsulation: 2, data: { animation: [
            mnjColorpickerAnimations.transformPanel,
            mnjColorpickerAnimations.fadeInColorPanel,
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorpickerContent, [{
        type: Component,
        args: [{
                selector: 'mnj-colorpicker-content',
                templateUrl: 'colorpicker-content.html',
                styleUrls: ['colorpicker-content.scss'],
                exportAs: 'mnjColorpickerContent',
                inputs: ['color'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    mnjColorpickerAnimations.transformPanel,
                    mnjColorpickerAnimations.fadeInColorPanel,
                ],
                host: {
                    class: 'mnj-colorpicker-content',
                    '[@transformPanel]': '_animationState',
                    '(@transformPanel.done)': '_animationDone.next()',
                    '[class.mnj-colorpicker-content-touch]': 'colorpicker.touchUi',
                },
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }]; }, null); })();
// Use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="mnjColorpicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the colorpicker popup/dialog. */
class MnjColorpicker {
    constructor(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _colorAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._colorAdapter = _colorAdapter;
        this._dir = _dir;
        this._document = _document;
        /** Subscription to value changes in the associated input element. */
        this._inputStateChanges = Subscription.EMPTY;
        this._touchUi = false;
        /** Emits when the colorpicker has been opened. */
        this.openedStream = new EventEmitter();
        /** Emits when the colorpicker has been closed. */
        this.closedStream = new EventEmitter();
        this._opened = false;
        /** The id for the colorpicker color panel. */
        this.id = `mnj-colorpicker-${colorpickerUid++}`;
        this._validSelected = null;
        /** The element that was focused before the colorpicker was opened. */
        this._focusedElementBeforeOpen = null;
        /** Emits when the colorpicker is disabled. */
        this._stateChanges = new Subject();
        /** Emits when the colorpicker formmatting inputs (showAlpha and displayFormat) changes. */
        this._configurationChanges = new Subject();
        /** Emits new selected color when selected color changes. */
        this._selectedChanged = new Subject();
        this._scrollStrategy = scrollStrategy;
    }
    /** Color palette to use on the colorpicker's color panel. */
    get color() {
        return (this._color ||
            (this._colorpickerInput
                ? this._colorpickerInput.getThemePalette()
                : undefined));
    }
    set color(value) {
        this._color = value;
    }
    get startColor() {
        return this._startColor;
    }
    set startColor(value) {
        if (this._colorAdapter.isValid(value)) {
            this._startColor = value;
        }
    }
    get showAlpha() {
        return this._showAlpha;
    }
    set showAlpha(value) {
        value = coerceBooleanProperty(value);
        if (value !== this._showAlpha) {
            this._showAlpha = value;
            this._configurationChanges.next(undefined);
        }
    }
    get displayFormat() {
        return this._displayFormat;
    }
    set displayFormat(value) {
        if (value !== this._displayFormat) {
            this._displayFormat = value;
            this._configurationChanges.next(undefined);
        }
    }
    /**
     * Whether the color panel UI is in touch mode. In touch mode the color panel opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */
    get touchUi() {
        return this._touchUi;
    }
    set touchUi(value) {
        this._touchUi = coerceBooleanProperty(value);
    }
    /** Whether the colorpicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this._colorpickerInput
            ? this._colorpickerInput.disabled
            : !!this._disabled;
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._stateChanges.next(newValue);
        }
    }
    /** Preferred position of the colorpicker in the X axis. */
    get xPosition() {
        return this._xPosition || 'start';
    }
    set xPosition(value) {
        const isFirstChange = !this._xPosition;
        this._xPosition = value;
        if (isFirstChange) {
            this._updatePopupPositions();
        }
        this._stateChanges.next(undefined);
    }
    /** Preferred position of the colorpicker in the Y axis. */
    get yPosition() {
        return this._yPosition || 'below';
    }
    set yPosition(value) {
        const isFirstChange = !this._xPosition;
        this._yPosition = value;
        if (isFirstChange) {
            this._updatePopupPositions();
        }
        this._stateChanges.next(undefined);
    }
    /** Whether the color panel is open. */
    get opened() {
        return this._opened;
    }
    set opened(value) {
        coerceBooleanProperty(value) ? this.open() : this.close();
    }
    /** The currently selected color. */
    get _selectedColor() {
        return this._validSelected;
    }
    set _selectedColor(value) {
        this._validSelected = value;
    }
    ngOnDestroy() {
        this._destroyPopup();
        this.close();
        this._inputStateChanges.unsubscribe();
        this._selectedChanged.complete();
        this._stateChanges.complete();
    }
    /** Selects the given color */
    select(color) {
        const oldValue = this._selectedColor;
        this._selectedColor = color;
        if (!this._colorAdapter.sameColor(oldValue, this._selectedColor)) {
            this._selectedChanged.next(color);
        }
        this._stateChanges.next();
    }
    /**
     * Register an input with this colorpicker.
     * @param input The colorpicker input to register with this colorpicker.
     */
    _registerInput(input) {
        if (this._colorpickerInput) {
            throw Error('A MnjColorpicker can only be associated with a single input.');
        }
        this._inputStateChanges.unsubscribe();
        this._colorpickerInput = input;
        this._inputStateChanges = this._colorpickerInput._stateChanges.subscribe(() => {
            this._stateChanges.next();
            this.select(this._colorpickerInput.value);
        });
    }
    /** Open the color panel. */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._colorpickerInput) {
            throw Error('Attempted to open an MnjColorpicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    }
    /** Close the color panel. */
    close() {
        if (!this._opened) {
            return;
        }
        if (this._popupComponentRef && this._popupRef) {
            const instance = this._popupComponentRef.instance;
            instance._startExitAnimation();
            instance._animationDone
                .pipe(take(1))
                .subscribe(() => this._destroyPopup());
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        const completeClose = () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        };
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the colorpicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the colorpicker on focus, the user could be stuck with not being
            // able to close the color panel at all. We work around it by making the logic, that marks
            // the colorpicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /** Open the color panel as a dialog. */
    _openAsDialog() {
        // Usually this would be handled by `open` which ensures that we can only have one overlay
        // open at a time, however since we reset the variables in async handlers some overlays
        // may slip through if the user opens and closes multiple times in quick succession (e.g.
        // by holding down the enter key).
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(MnjColorpickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mnj-colorpicker-dialog',
        });
        this._dialogRef.afterClosed().subscribe(() => this.close());
        this._dialogRef.componentInstance.colorpicker = this;
        this._setTheme();
    }
    /** Open the color panel as a popup. */
    _openAsPopup() {
        const portal = new ComponentPortal(MnjColorpickerContent, this._viewContainerRef);
        this._destroyPopup();
        this._createPopup();
        this._popupComponentRef = this._popupRef.attach(portal);
        this._forwardContentValues(this._popupComponentRef.instance);
        // Update the position once the calendar has rendered.
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this._popupRef.updatePosition();
        });
    }
    /** Forwards relevant values from the colorpicker to the colorpicker content inside the overlay. */
    _forwardContentValues(instance) {
        instance.colorpicker = this;
        instance.color = this.color;
    }
    /** Create the popup. */
    _createPopup() {
        const positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(this._colorpickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mnj-colorpicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition();
        const overlayConfig = new OverlayConfig({
            positionStrategy: this._setConnectedPositions(positionStrategy),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mnj-colorpicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(filter((event) => {
            // Closing on alt + up is only valid when there's an input associated with the colorpicker.
            return (event.keyCode === ESCAPE ||
                (this._colorpickerInput &&
                    event.altKey &&
                    event.keyCode === UP_ARROW));
        }))).subscribe((event) => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        });
    }
    /** Sets the positions of the colorpicker in dropdown mode based on the current configuration. */
    _setConnectedPositions(strategy) {
        const primaryX = this.xPosition === 'end' ? 'end' : 'start';
        const secondaryX = primaryX === 'start' ? 'end' : 'start';
        const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
        const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
        return strategy.withPositions([
            {
                originX: primaryX,
                originY: secondaryY,
                overlayX: primaryX,
                overlayY: primaryY,
            },
            {
                originX: primaryX,
                originY: primaryY,
                overlayX: primaryX,
                overlayY: secondaryY,
            },
            {
                originX: secondaryX,
                originY: secondaryY,
                overlayX: secondaryX,
                overlayY: primaryY,
            },
            {
                originX: secondaryX,
                originY: primaryY,
                overlayX: secondaryX,
                overlayY: secondaryY,
            },
        ]);
    }
    _updatePopupPositions() {
        if (this._popupRef) {
            this._setConnectedPositions(this._popupRef.getConfig()
                .positionStrategy);
            if (this.opened) {
                this._popupRef.updatePosition();
            }
        }
    }
    /** Destroys the current popup overlay. */
    _destroyPopup() {
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupRef = this._popupComponentRef = null;
        }
    }
    /** Passes the current theme color along to the color panel overlay. */
    _setTheme() {
        const color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    }
}
MnjColorpicker.ɵfac = function MnjColorpicker_Factory(t) { return new (t || MnjColorpicker)(ɵɵdirectiveInject(MatDialog), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MNJ_COLORPICKER_SCROLL_STRATEGY), ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(DOCUMENT, 8)); };
MnjColorpicker.ɵcmp = ɵɵdefineComponent({ type: MnjColorpicker, selectors: [["mnj-colorpicker"]], inputs: { color: "color", startColor: "startColor", startView: "startView", palette: "palette", showAlpha: "showAlpha", displayFormat: "displayFormat", touchUi: "touchUi", disabled: "disabled", xPosition: "xPosition", yPosition: "yPosition", panelClass: "panelClass", opened: "opened" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["mnjColorpicker"], decls: 0, vars: 0, template: function MnjColorpicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorpicker, [{
        type: Component,
        args: [{
                selector: 'mnj-colorpicker',
                template: '',
                exportAs: 'mnjColorpicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: MatDialog }, { type: Overlay }, { type: NgZone }, { type: ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MNJ_COLORPICKER_SCROLL_STRATEGY]
            }] }, { type: ColorAdapter }, { type: Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { color: [{
            type: Input
        }], startColor: [{
            type: Input
        }], startView: [{
            type: Input
        }], palette: [{
            type: Input
        }], showAlpha: [{
            type: Input
        }], displayFormat: [{
            type: Input
        }], touchUi: [{
            type: Input
        }], disabled: [{
            type: Input
        }], xPosition: [{
            type: Input
        }], yPosition: [{
            type: Input
        }], panelClass: [{
            type: Input
        }], openedStream: [{
            type: Output,
            args: ['opened']
        }], closedStream: [{
            type: Output,
            args: ['closed']
        }], opened: [{
            type: Input
        }] }); })();

/** @docs-private */
const MNJ_COLORPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MnjColorpickerInput),
    multi: true,
};
/** @docs-private */
const MNJ_COLORPICKER_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MnjColorpickerInput),
    multi: true,
};
/**
 * An event used for colorpicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MnjColorpickerInputEvent instead.
 */
class MnjColorpickerInputEvent {
    constructor(
    /** Reference to the colorpicker input component that emitted the event. */
    target, 
    /** Reference to the native input element associated with the colorpicker input. */
    targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
/** Directive used to connect an input to a MnjColorpicker. */
class MnjColorpickerInput {
    constructor(_elementRef, _colorAdapter, _config, _formField) {
        this._elementRef = _elementRef;
        this._colorAdapter = _colorAdapter;
        this._config = _config;
        this._formField = _formField;
        this._value = null;
        /** Emits when a `change` event is fired on this `<input>`. */
        this.colorChange = new EventEmitter();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.colorInput = new EventEmitter();
        /** Emits when the value changes (either due to user input or programmatic change). */
        this._valueChange = new EventEmitter();
        /** Emits when the internal state has changed */
        this._stateChanges = new Subject();
        this._onTouched = () => { };
        this._cvaOnChange = () => { };
        this._validatorOnChange = () => { };
        this._colorpickerSubscription = Subscription.EMPTY;
        this._colorpickerConfigurationSubscription = Subscription.EMPTY;
        this._localeSubscription = Subscription.EMPTY;
        /** The form control validator for whether the input parses. */
        this._parseValidator = () => {
            return this._lastValueValid ? null : { mnjColorpickerParse: { text: this._elementRef.nativeElement.value } };
        };
        /** The combined form control validator for this input. */
        this._validator = this._parseValidator;
        /** Whether the last value set on the input was valid. */
        this._lastValueValid = false;
    }
    /** The colorpicker that this input is associated with. */
    set mnjColorpicker(value) {
        if (!value) {
            return;
        }
        this._colorpicker = value;
        this._colorpicker._registerInput(this);
        this._colorpickerSubscription.unsubscribe();
        this._colorpickerSubscription = this._colorpicker._selectedChanged.subscribe((selected) => {
            this.value = selected;
            this._cvaOnChange(selected);
            this._onTouched();
            this.colorInput.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
            this.colorChange.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
        });
        this._colorpickerConfigurationSubscription = this._colorpicker._configurationChanges.subscribe((_) => this._formatValue(this.value));
    }
    /** The value of the input. */
    get value() {
        return this._value;
    }
    set value(value) {
        this._lastValueValid = !value || this._colorAdapter.isValid(value);
        value = this._colorAdapter.getValidColorOrNull(value);
        const oldColor = this.value;
        this._value = value;
        this._formatValue(value);
        if (!this._colorAdapter.sameColor(oldColor, value)) {
            this._valueChange.emit(value);
        }
    }
    /** Whether the colorpicker-input is disabled. */
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        const element = this._elementRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this._stateChanges.next(undefined);
        }
        // We need to null check the `blur` method, because it's undefined during SSR.
        if (newValue && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
        }
    }
    ngOnChanges() {
        this._stateChanges.next(undefined);
    }
    ngOnDestroy() {
        this._colorpickerSubscription.unsubscribe();
        this._colorpickerConfigurationSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._stateChanges.complete();
    }
    /** @docs-private */
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    /** @docs-private */
    validate(c) {
        return this._validator ? this._validator(c) : null;
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this.value = value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _onKeydown(event) {
        const isAltDownArrow = event.altKey && event.keyCode === DOWN_ARROW;
        if (this._colorpicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._openPopup();
            event.preventDefault();
        }
    }
    _onInput(value) {
        const lastValueWasValid = this._lastValueValid;
        let color = this._colorAdapter.parse(value);
        this._lastValueValid = this._colorAdapter.isValid(color);
        color = this._colorAdapter.getValidColorOrNull(color);
        if (!this._colorAdapter.sameColor(color, this.value)) {
            this._value = color;
            this._cvaOnChange(color);
            this._valueChange.emit(color);
            this.colorInput.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
        }
        else {
            // Call the CVA change handler for invalid values
            // since this is what marks the control as dirty.
            if (value && !this.value) {
                this._cvaOnChange(color);
            }
            if (lastValueWasValid !== this._lastValueValid) {
                this._validatorOnChange();
            }
        }
    }
    _onChange() {
        this.colorChange.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
    }
    /**
     * Gets the element that the colorpicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Returns the palette used by the input's form field, if any. */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /** Gets the value at which the calendar should start. */
    getStartValue() {
        return this.value;
    }
    /** Opens the associated colorpicker. */
    _openPopup() {
        if (this._colorpicker) {
            this._colorpicker.open();
        }
    }
    /** Handles blur events on the input. */
    _onBlur() {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
        this._stateChanges.next();
    }
    /** Formats a value and sets it on the input element. */
    _formatValue(value) {
        const showAlpha = (this._colorpicker && this._colorpicker.showAlpha) || this._config.showAlpha;
        const displayFormat = (this._colorpicker && this._colorpicker.displayFormat) || this._config.displayFormat;
        this._elementRef.nativeElement.value = value ? this._colorAdapter.format(value, displayFormat, showAlpha) : '';
    }
}
MnjColorpickerInput.ɵfac = function MnjColorpickerInput_Factory(t) { return new (t || MnjColorpickerInput)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ColorAdapter), ɵɵdirectiveInject(MNJ_COLOR_CONFIG_PROVIDER), ɵɵdirectiveInject(MatFormField, 8)); };
MnjColorpickerInput.ɵdir = ɵɵdefineDirective({ type: MnjColorpickerInput, selectors: [["input", "mnjColorpicker", ""]], hostAttrs: ["aria-haspopup", "_colorpicker ? \"dialog\" : null"], hostVars: 2, hostBindings: function MnjColorpickerInput_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function MnjColorpickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MnjColorpickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MnjColorpickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MnjColorpickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        ɵɵhostProperty("disabled", ctx.disabled);
        ɵɵattribute("aria-owns", (ctx._colorpicker == null ? null : ctx._colorpicker.opened) && ctx._colorpicker.id || null);
    } }, inputs: { mnjColorpicker: "mnjColorpicker", value: "value", disabled: "disabled" }, outputs: { colorChange: "colorChange", colorInput: "colorInput" }, exportAs: ["mnjColorpickerInput"], features: [ɵɵProvidersFeature([
            MNJ_COLORPICKER_VALUE_ACCESSOR,
            MNJ_COLORPICKER_VALIDATORS,
            { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
        ]), ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorpickerInput, [{
        type: Directive,
        args: [{
                selector: 'input[mnjColorpicker]',
                exportAs: 'mnjColorpickerInput',
                providers: [
                    MNJ_COLORPICKER_VALUE_ACCESSOR,
                    MNJ_COLORPICKER_VALIDATORS,
                    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
                ],
                host: {
                    'aria-haspopup': '_colorpicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_colorpicker?.opened && _colorpicker.id) || null',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(blur)': '_onBlur()',
                    '(keydown)': '_onKeydown($event)',
                },
            }]
    }], function () { return [{ type: ElementRef }, { type: ColorAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MNJ_COLOR_CONFIG_PROVIDER]
            }] }, { type: MatFormField, decorators: [{
                type: Optional
            }] }]; }, { mnjColorpicker: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], colorChange: [{
            type: Output
        }], colorInput: [{
            type: Output
        }] }); })();

const _c0$2 = ["button"];
function MnjColorpickerToggle__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 3);
    ɵɵelement(1, "path", 4);
    ɵɵelementEnd();
} }
const _c1 = [[["", "mnjColorpickerToggleIcon", ""]]];
const _c2 = ["[mnjColorpickerToggleIcon]"];
/** Can be used to override the icon of a `matColorpickerToggle`. */
class MnjColorpickerToggleIcon {
}
MnjColorpickerToggleIcon.ɵfac = function MnjColorpickerToggleIcon_Factory(t) { return new (t || MnjColorpickerToggleIcon)(); };
MnjColorpickerToggleIcon.ɵdir = ɵɵdefineDirective({ type: MnjColorpickerToggleIcon, selectors: [["", "mnjColorpickerToggleIcon", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorpickerToggleIcon, [{
        type: Directive,
        args: [{
                selector: '[mnjColorpickerToggleIcon]',
            }]
    }], null, null); })();
class MnjColorpickerToggle {
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = Subscription.EMPTY;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    }
    /** Colorpicker instance that the button will toggle. */
    get colorpicker() {
        return this._colorpicker;
    }
    set colorpicker(value) {
        this._colorpicker = value;
        this._watchStateChanges();
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        if (this._disabled === undefined && this.colorpicker) {
            return this.colorpicker.disabled;
        }
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    _open(event) {
        if (this.colorpicker && !this.disabled) {
            this.colorpicker.open();
            event.stopPropagation();
        }
    }
    _watchStateChanges() {
        const colorpickerStateChanged = this.colorpicker ? this.colorpicker._stateChanges : of();
        const inputStateChanged = this.colorpicker && this.colorpicker._colorpickerInput ? this.colorpicker._colorpickerInput._stateChanges : of();
        const colorpickerToggled = this.colorpicker
            ? merge(this.colorpicker.openedStream, this.colorpicker.closedStream)
            : of();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, colorpickerStateChanged, inputStateChanged, colorpickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MnjColorpickerToggle.ɵfac = function MnjColorpickerToggle_Factory(t) { return new (t || MnjColorpickerToggle)(ɵɵdirectiveInject(MnjColorpickerIntl), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵinjectAttribute('tabindex')); };
MnjColorpickerToggle.ɵcmp = ɵɵdefineComponent({ type: MnjColorpickerToggle, selectors: [["mnj-colorpicker-toggle"]], contentQueries: function MnjColorpickerToggle_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MnjColorpickerToggleIcon, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MnjColorpickerToggle_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mnj-colorpicker-toggle"], hostVars: 8, hostBindings: function MnjColorpickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("focus", function MnjColorpickerToggle_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", ctx.disabled ? null : -1)("data-mnj-color-panel", ctx.colorpicker ? ctx.colorpicker.id : null);
        ɵɵclassProp("mnj-colorpicker-toggle-active", ctx.colorpicker && ctx.colorpicker.opened)("mnj-accent", ctx.colorpicker && ctx.colorpicker.color === "accent")("mnj-warn", ctx.colorpicker && ctx.colorpicker.color === "warn");
    } }, inputs: { colorpicker: ["for", "colorpicker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["mnjColorpickerToggle"], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mnj-colorpicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mnj-colorpicker-toggle-default-icon"], ["d", "M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"]], template: function MnjColorpickerToggle_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵelementStart(0, "button", 0, 1);
        ɵɵlistener("click", function MnjColorpickerToggle_Template_button_click_0_listener($event) { return ctx._open($event); });
        ɵɵtemplate(2, MnjColorpickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        ɵɵattribute("aria-haspopup", ctx.colorpicker ? "dialog" : null)("aria-label", ctx._intl.openColorPickerLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx._customIcon);
    } }, directives: [MatButton, NgIf], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon{display:block;height:1.5em;width:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mnj-colorpicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mnj-colorpicker-toggle-default-icon{margin:auto}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorpickerToggle, [{
        type: Component,
        args: [{
                selector: 'mnj-colorpicker-toggle',
                templateUrl: 'colorpicker-toggle.html',
                styleUrls: ['colorpicker-toggle.scss'],
                exportAs: 'mnjColorpickerToggle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'mnj-colorpicker-toggle',
                    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
                    // consumer may have provided, while still being able to receive focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[class.mnj-colorpicker-toggle-active]': 'colorpicker && colorpicker.opened',
                    '[class.mnj-accent]': 'colorpicker && colorpicker.color === "accent"',
                    '[class.mnj-warn]': 'colorpicker && colorpicker.color === "warn"',
                    // Used by the test harness to tie this toggle to its colorpicker.
                    '[attr.data-mnj-color-panel]': 'colorpicker ? colorpicker.id : null',
                    '(focus)': '_button.focus()',
                },
            }]
    }], function () { return [{ type: MnjColorpickerIntl }, { type: ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }]; }, { colorpicker: [{
            type: Input,
            args: ['for']
        }], tabIndex: [{
            type: Input
        }], disabled: [{
            type: Input
        }], disableRipple: [{
            type: Input
        }], _customIcon: [{
            type: ContentChild,
            args: [MnjColorpickerToggleIcon]
        }], _button: [{
            type: ViewChild,
            args: ['button']
        }] }); })();

class MnjColorpickerModule {
}
MnjColorpickerModule.ɵmod = ɵɵdefineNgModule({ type: MnjColorpickerModule });
MnjColorpickerModule.ɵinj = ɵɵdefineInjector({ factory: function MnjColorpickerModule_Factory(t) { return new (t || MnjColorpickerModule)(); }, providers: [MnjColorpickerIntl, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[CommonModule, MatButtonModule, MatIconModule, PortalModule, A11yModule, OverlayModule, MatDialogModule], CdkScrollableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MnjColorpickerModule, { declarations: [MnjColorpickerToggle,
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
        MnjScanPickerView], imports: [CommonModule, MatButtonModule, MatIconModule, PortalModule, A11yModule, OverlayModule, MatDialogModule], exports: [CdkScrollableModule,
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
        MnjScanPickerView] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MnjColorpickerModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BaseColorpickerView, BaseSelector, CSS_COLOR_NAMES, ColorAdapter, ColorPickerView, DEFAULT_COLOR, MNJ_COLORPICKER_SCROLL_STRATEGY, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MNJ_COLORPICKER_VALIDATORS, MNJ_COLORPICKER_VALUE_ACCESSOR, MNJ_COLOR_CONFIG_PROVIDER, MNJ_DEFAULT_COLOR_CONFIG_FACTORY, MnjAlphaSelector, MnjArmoniesPickerView, MnjChromePickerView, MnjColorPanel, MnjColorPanelHeader, MnjColorpicker, MnjColorpickerContent, MnjColorpickerInput, MnjColorpickerInputEvent, MnjColorpickerModule, MnjColorpickerToggle, MnjColorpickerToggleIcon, MnjGridSelector, MnjHueSelector, MnjInputSelector, MnjPalettePickerView, MnjPipetteSelector, MnjPreviewSwatch, MnjSaturationSelector, MnjScanPickerView, activeCapturingEventOptions, activeEventListenerOptions, analogous, calculateShades, clamp, cmykToRgb, complementary, fromCmyk, fromHex, fromHsl, fromHsv, fromHwb, fromRgb, getColorShade, getContainerSize, getPointerPositionFromEvent, getPointerPositionInContainer, hexToRgb, hslToHsv, hslToRgb, hsvToHsl, hsvToHwb, hsvToRgb, hwbToHsv, hwbToRgb, isSamePosition, mnjColorpickerAnimations, parseString, passiveEventListenerOptions, rgbToCmyk, rgbToHex, rgbToHsl, rgbToHsv, rgbToHwb, saturate, shade, spinColor, splitComplementary, square, tetradic, triadic };
//# sourceMappingURL=mnj-ngx-colorpicker.js.map
