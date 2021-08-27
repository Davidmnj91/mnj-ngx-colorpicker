(self["webpackChunkmnj_ngx_colorpicker"] = self["webpackChunkmnj_ngx_colorpicker"] || []).push([["main"],{

/***/ 301:
/*!******************************************************************!*\
  !*** ./dist/mnj-ngx-colorpicker/fesm2015/mnj-ngx-colorpicker.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseColorpickerView": () => (/* binding */ BaseColorpickerView),
/* harmony export */   "BaseSelector": () => (/* binding */ BaseSelector),
/* harmony export */   "CSS_COLOR_NAMES": () => (/* binding */ CSS_COLOR_NAMES),
/* harmony export */   "ColorAdapter": () => (/* binding */ ColorAdapter),
/* harmony export */   "ColorPickerView": () => (/* binding */ ColorPickerView),
/* harmony export */   "DEFAULT_COLOR": () => (/* binding */ DEFAULT_COLOR),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY": () => (/* binding */ MNJ_COLORPICKER_SCROLL_STRATEGY),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MNJ_COLORPICKER_VALIDATORS": () => (/* binding */ MNJ_COLORPICKER_VALIDATORS),
/* harmony export */   "MNJ_COLORPICKER_VALUE_ACCESSOR": () => (/* binding */ MNJ_COLORPICKER_VALUE_ACCESSOR),
/* harmony export */   "MNJ_COLOR_CONFIG_PROVIDER": () => (/* binding */ MNJ_COLOR_CONFIG_PROVIDER),
/* harmony export */   "MNJ_DEFAULT_COLOR_CONFIG_FACTORY": () => (/* binding */ MNJ_DEFAULT_COLOR_CONFIG_FACTORY),
/* harmony export */   "MnjAlphaSelector": () => (/* binding */ MnjAlphaSelector),
/* harmony export */   "MnjArmoniesPickerView": () => (/* binding */ MnjArmoniesPickerView),
/* harmony export */   "MnjChromePickerView": () => (/* binding */ MnjChromePickerView),
/* harmony export */   "MnjColorPanel": () => (/* binding */ MnjColorPanel),
/* harmony export */   "MnjColorPanelHeader": () => (/* binding */ MnjColorPanelHeader),
/* harmony export */   "MnjColorpicker": () => (/* binding */ MnjColorpicker),
/* harmony export */   "MnjColorpickerContent": () => (/* binding */ MnjColorpickerContent),
/* harmony export */   "MnjColorpickerInput": () => (/* binding */ MnjColorpickerInput),
/* harmony export */   "MnjColorpickerInputEvent": () => (/* binding */ MnjColorpickerInputEvent),
/* harmony export */   "MnjColorpickerModule": () => (/* binding */ MnjColorpickerModule),
/* harmony export */   "MnjColorpickerToggle": () => (/* binding */ MnjColorpickerToggle),
/* harmony export */   "MnjColorpickerToggleIcon": () => (/* binding */ MnjColorpickerToggleIcon),
/* harmony export */   "MnjGridSelector": () => (/* binding */ MnjGridSelector),
/* harmony export */   "MnjHueSelector": () => (/* binding */ MnjHueSelector),
/* harmony export */   "MnjInputSelector": () => (/* binding */ MnjInputSelector),
/* harmony export */   "MnjPalettePickerView": () => (/* binding */ MnjPalettePickerView),
/* harmony export */   "MnjPipetteSelector": () => (/* binding */ MnjPipetteSelector),
/* harmony export */   "MnjPreviewSwatch": () => (/* binding */ MnjPreviewSwatch),
/* harmony export */   "MnjSaturationSelector": () => (/* binding */ MnjSaturationSelector),
/* harmony export */   "MnjScanPickerView": () => (/* binding */ MnjScanPickerView),
/* harmony export */   "activeCapturingEventOptions": () => (/* binding */ activeCapturingEventOptions),
/* harmony export */   "activeEventListenerOptions": () => (/* binding */ activeEventListenerOptions),
/* harmony export */   "analogous": () => (/* binding */ analogous),
/* harmony export */   "calculateShades": () => (/* binding */ calculateShades),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "cmykToRgb": () => (/* binding */ cmykToRgb),
/* harmony export */   "complementary": () => (/* binding */ complementary),
/* harmony export */   "fromCmyk": () => (/* binding */ fromCmyk),
/* harmony export */   "fromHex": () => (/* binding */ fromHex),
/* harmony export */   "fromHsl": () => (/* binding */ fromHsl),
/* harmony export */   "fromHsv": () => (/* binding */ fromHsv),
/* harmony export */   "fromHwb": () => (/* binding */ fromHwb),
/* harmony export */   "fromRgb": () => (/* binding */ fromRgb),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "getColorShade": () => (/* binding */ getColorShade),
/* harmony export */   "getContainerSize": () => (/* binding */ getContainerSize),
/* harmony export */   "getPointerPositionFromEvent": () => (/* binding */ getPointerPositionFromEvent),
/* harmony export */   "getPointerPositionInContainer": () => (/* binding */ getPointerPositionInContainer),
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "hslToHsv": () => (/* binding */ hslToHsv),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "hsvToHsl": () => (/* binding */ hsvToHsl),
/* harmony export */   "hsvToHwb": () => (/* binding */ hsvToHwb),
/* harmony export */   "hsvToRgb": () => (/* binding */ hsvToRgb),
/* harmony export */   "hwbToHsv": () => (/* binding */ hwbToHsv),
/* harmony export */   "hwbToRgb": () => (/* binding */ hwbToRgb),
/* harmony export */   "isSamePosition": () => (/* binding */ isSamePosition),
/* harmony export */   "mnjColorpickerAnimations": () => (/* binding */ mnjColorpickerAnimations),
/* harmony export */   "passiveEventListenerOptions": () => (/* binding */ passiveEventListenerOptions),
/* harmony export */   "rgbToCmyk": () => (/* binding */ rgbToCmyk),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "rgbToHsl": () => (/* binding */ rgbToHsl),
/* harmony export */   "rgbToHsv": () => (/* binding */ rgbToHsv),
/* harmony export */   "rgbToHwb": () => (/* binding */ rgbToHwb),
/* harmony export */   "saturate": () => (/* binding */ saturate),
/* harmony export */   "shade": () => (/* binding */ shade),
/* harmony export */   "spinColor": () => (/* binding */ spinColor),
/* harmony export */   "splitComplementary": () => (/* binding */ splitComplementary),
/* harmony export */   "square": () => (/* binding */ square),
/* harmony export */   "tetradic": () => (/* binding */ tetradic),
/* harmony export */   "triadic": () => (/* binding */ triadic)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 9919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/portal */ 912);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 2529);



























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
function fromHsl({ hue, saturation, lightness }, alpha = 1) {
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
function fromString(colorString) {
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
/**
 * Adds lightness to the color.
 * Amount is counted as a value betweeen -1 and 1, but accepts values between -100 and 100
 * @param amount The number of lightness to add
 * @param color The color to be modified
 */
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
/** Returns the amount of darkness of a given color in a scale of [50, 100, 200, ..., 900] */
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
        return fromString(colorString);
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
            return fromString(value);
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
ColorAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorAdapter, factory: ColorAdapter.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
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
const MNJ_COLOR_CONFIG_PROVIDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mnj-color-default-options', {
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
        this.activeColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
ColorPickerView.ɵfac = function ColorPickerView_Factory(t) { return new (t || ColorPickerView)(); };
ColorPickerView.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ColorPickerView });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], null, null); })();
class BaseColorpickerView {
    constructor(_colorAdapter) {
        this._colorAdapter = _colorAdapter;
        this.activeColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
BaseColorpickerView.ɵfac = function BaseColorpickerView_Factory(t) { return new (t || BaseColorpickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter)); };
BaseColorpickerView.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseColorpickerView, inputs: { activeColor: "activeColor", selected: "selected" }, outputs: { activeColorChange: "activeColorChange" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseColorpickerView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: ColorAdapter }]; }, { activeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activeColorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

function MnjGridSelector_li_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r3.thumbSize());
} }
function MnjGridSelector_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjGridSelector_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectColor(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MnjGridSelector_li_1_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.cellSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r0.cssColor(cell_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", cell_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", i_r2 === ctx_r0._selectedIndex ? 0 : -1)("aria-label", cell_r1.title)("aria-selected", i_r2 === ctx_r0._selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === ctx_r0._selectedIndex);
} }
class MnjGridSelector {
    constructor(colorAdapter, _elementRef, _changeDetectorRef) {
        this.colorAdapter = colorAdapter;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.colorSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);
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
    selectColor(index) {
        const { color } = this.grid[index];
        this.color = color;
        // Manually set due to duplicates in some palettes like CSS Colors
        this._selectedIndex = index;
        this.colorSelected.emit(color);
    }
    _handleKeydownEvent(event) {
        const grid = this.grid;
        const oldActiveIndex = this._selectedIndex;
        let activeIndex = oldActiveIndex;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW:
                activeIndex--;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW:
                activeIndex++;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW:
                activeIndex -= this.columns;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW:
                activeIndex += this.columns;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_UP:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.HOME:
                activeIndex = 0;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_DOWN:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.END:
                activeIndex = grid.length - 1;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.SPACE:
                event.preventDefault();
                this.selectColor(activeIndex);
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
MnjGridSelector.ɵfac = function MnjGridSelector_Factory(t) { return new (t || MnjGridSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MnjGridSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjGridSelector, selectors: [["mnj-grid-selector"]], hostAttrs: ["role", "grid", 1, "mnj-grid-selector"], hostBindings: function MnjGridSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MnjGridSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", paletteGeneratorFn: "paletteGeneratorFn", columns: "columns" }, outputs: { colorSelected: "colorSelected" }, exportAs: ["mnjGridSelector"], decls: 2, vars: 3, consts: [[1, "mnj-grid-selector__row"], ["class", "mnj-grid-selector__row--cell", 3, "title", "background", "style", "click", 4, "ngFor", "ngForOf"], [1, "mnj-grid-selector__row--cell", 3, "title", "click"], ["class", "mnj-colorpicker-selector__thumb", 3, "style", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjGridSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MnjGridSelector_li_1_Template, 2, 9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.gridStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".mnj-grid-selector{display:block;margin:2px 0 12px}.mnj-grid-selector__row{display:grid;justify-content:space-evenly;list-style:none;margin:0}.mnj-grid-selector__row--cell{align-items:center;border-radius:100%;cursor:pointer;display:flex;justify-content:center}.mnj-grid-selector__row--cell:hover,.mnj-grid-selector__row--cell:focus{outline:none;transform:scale(1.5);z-index:1}.mnj-grid-selector .mnj-colorpicker-selector__thumb{position:relative;transform:none}.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner{position:relative}.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner:after{border:none;position:relative}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjGridSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-grid-selector',
                templateUrl: 'grid-selector.html',
                styleUrls: ['grid-selector.scss'],
                exportAs: 'mnjGridSelector',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                host: {
                    class: 'mnj-grid-selector',
                    role: 'grid',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], paletteGeneratorFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], colorSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
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
MnjArmoniesPickerView.ɵfac = function MnjArmoniesPickerView_Factory(t) { return new (t || MnjArmoniesPickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter)); };
MnjArmoniesPickerView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjArmoniesPickerView, selectors: [["mnj-armonies-picker-view"]], hostAttrs: [1, "mnj-armonies-picker-view"], exportAs: ["mnjArmoniesPickerView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: ColorPickerView, useExisting: MnjArmoniesPickerView }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 20, consts: [[3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjArmoniesPickerView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Complementary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_2_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Split Complementary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_5_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_6_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Analogous:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_9_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_10_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Triadic:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_13_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_14_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tetradic:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_17_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_18_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_19_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.complementaryPaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous1PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous2PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic1PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic2PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic1PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic2PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic3PaletteFn);
    } }, directives: [MnjGridSelector], styles: [".mnj-armonies-picker-view{display:flex;flex-flow:column}.mnj-armonies-picker-view label{margin-bottom:10px;margin-top:10px}.mnj-armonies-picker-view .mnj-grid-selector__row--cell{height:20px;width:20px}.mnj-armonies-picker-view .mnj-grid-selector__thumb{height:16px;width:16px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjArmoniesPickerView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-armonies-picker-view',
                exportAs: 'mnjArmoniesPickerView',
                templateUrl: 'armonies-view.html',
                styleUrls: ['armonies-view.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
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
    const { top, left, right, bottom, width, height } = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(container).getBoundingClientRect();
    return { top, left, right, bottom, width, height };
}
function getPointerPositionInContainer(pointer, container) {
    const pointerXToContainerX = (pointer.x - container.left) / container.width;
    const pointerYToContainerY = (pointer.y - container.top) / container.height;
    return { x: clamp(0, 1, pointerXToContainerX), y: clamp(0, 1, pointerYToContainerY) };
}
/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.normalizePassiveListenerOptions)({ passive: true });
/** Options that can be used to bind an active event listener. */
const activeEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.normalizePassiveListenerOptions)({ passive: false });
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.normalizePassiveListenerOptions)({
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
        const sliderElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this._elementRef);
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
BaseSelector.ɵfac = function BaseSelector_Factory(t) { return new (t || BaseSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality)); };
BaseSelector.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseSelector, inputs: { color: "color" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
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
        this.satChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW:
                newLightness++;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW:
                newSaturation += isRtl ? 1 : -1;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW:
                newLightness--;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW:
                newSaturation += isRtl ? -1 : +1;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_UP:
                newLightness = newLightness - 10;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_DOWN:
                newLightness = newLightness + 10;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.HOME:
                newSaturation = 0;
                newLightness = 0;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.END:
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
MnjSaturationSelector.ɵfac = function MnjSaturationSelector_Factory(t) { return new (t || MnjSaturationSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality)); };
MnjSaturationSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjSaturationSelector, selectors: [["mnj-saturation-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-saturation-selector"], hostVars: 3, hostBindings: function MnjSaturationSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MnjSaturationSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mnj-saturation-selector--rtl", ctx._isRtl());
    } }, outputs: { satChange: "satChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: BaseSelector, useExisting: MnjSaturationSelector }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 3, consts: [[1, "mnj-saturation-selector__mask"], [1, "mnj-saturation-selector__mask--fill", 3, "ngStyle"], [1, "mnj-saturation-selector__mask--saturation"], [1, "mnj-saturation-selector__mask--value"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner", 3, "ngStyle"]], template: function MnjSaturationSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.satBackgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.satThumbPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.satThumbBackgroundColor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: [".mnj-saturation-selector{min-height:80px}.mnj-saturation-selector__mask{border-radius:2px;height:100%;overflow:hidden;position:relative;width:100%}.mnj-saturation-selector__mask--fill,.mnj-saturation-selector__mask--saturation,.mnj-saturation-selector__mask--value{position:absolute;width:100%;height:100%}.mnj-saturation-selector__mask--saturation{background-image:linear-gradient(to right,#fff,rgba(0,0,0,0))}.mnj-saturation-selector__mask--value{background-image:linear-gradient(to top,#000,rgba(0,0,0,0))}.mnj-saturation-selector__mask--rtl .mnj-saturation-selector__mask--saturation{background-image:linear-gradient(to left,#fff,rgba(0,0,0,0))}\n", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid currentColor;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid currentColor;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid currentColor;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjSaturationSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-saturation-selector',
                templateUrl: 'sat-selector.html',
                styleUrls: ['sat-selector.scss', '../base-selector.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjSaturationSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-saturation-selector',
                    '[class.mnj-saturation-selector--rtl]': '_isRtl()',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality }]; }, { satChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
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
        this.hueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW:
                newHue = newHue + (isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW:
                newHue = newHue + (isRtl ? -1 : +1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.HOME:
                newHue = 0;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.END:
                newHue = 359;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_UP:
                newHue = newHue + (isRtl ? 60 : -60);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_DOWN:
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
MnjHueSelector.ɵfac = function MnjHueSelector_Factory(t) { return new (t || MnjHueSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality)); };
MnjHueSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjHueSelector, selectors: [["mnj-hue-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-hue-selector"], hostVars: 1, hostBindings: function MnjHueSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MnjHueSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0);
    } }, outputs: { hueChange: "hueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: BaseSelector, useExisting: MnjHueSelector }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjHueSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.hueThumbPos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: [".mnj-hue-selector{background:linear-gradient(to right,red,yellow,lime,aqua,blue,fuchsia,red)}\n", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid currentColor;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid currentColor;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid currentColor;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjHueSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-hue-selector',
                templateUrl: 'hue-selector.html',
                styleUrls: ['hue-selector.scss', '../base-selector.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjHueSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-hue-selector',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality }]; }, { hueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
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
MnjPreviewSwatch.ɵfac = function MnjPreviewSwatch_Factory(t) { return new (t || MnjPreviewSwatch)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter)); };
MnjPreviewSwatch.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjPreviewSwatch, selectors: [["mnj-preview-swatch"]], hostAttrs: [1, "mnj-preview-swatch"], inputs: { color: "color" }, decls: 3, vars: 2, consts: [[1, "swatch__container"], [1, "swatch__container--alpha-layer"], [1, "swatch__container--color-layer"]], template: function MnjPreviewSwatch_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.cssBackground);
    } }, styles: [".mnj-preview-swatch .swatch__container{border-radius:50%;width:24px;height:24px;cursor:default}.mnj-preview-swatch .swatch__container--color-layer,.mnj-preview-swatch .swatch__container--alpha-layer{border-radius:50%;width:24px;height:24px}.mnj-preview-swatch .swatch__container--alpha-layer{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=) repeat;background-position:left top}.mnj-preview-swatch .swatch__container--color-layer{transform:translateY(-24px)}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjPreviewSwatch, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-preview-swatch',
                templateUrl: 'preview-swatch.html',
                styleUrls: ['preview-swatch.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                host: {
                    class: 'mnj-preview-swatch',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

const _c0$2 = ["colorInput"];
class MnjInputSelector {
    constructor(colorAdapter) {
        this.colorAdapter = colorAdapter;
        this._colorFormat = 'HEX';
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW:
                this.previousFormat();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW:
                this.nextFormat();
                break;
            default:
                return;
        }
    }
}
MnjInputSelector.ɵfac = function MnjInputSelector_Factory(t) { return new (t || MnjInputSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter)); };
MnjInputSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjInputSelector, selectors: [["mnj-input-selector"]], viewQuery: function MnjInputSelector_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0$2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.colorInput = _t.first);
    } }, hostAttrs: [1, "mnj-input-selector"], hostBindings: function MnjInputSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MnjInputSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", colorFormat: "colorFormat" }, outputs: { inputChange: "inputChange" }, decls: 6, vars: 1, consts: [[1, "mnj-input-selector__container"], ["type", "text", "autocorrect", "off", "autocomplete", "off", "spellcheck", "false", "aria-label", "Color code", 1, "color-input", 3, "value", "change"], ["colorInput", ""], [1, "mnj-input-selector__container__switch-buttons"], [1, "switch-buttons--prev", 3, "click"], [1, "switch-buttons--next", 3, "click"]], template: function MnjInputSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MnjInputSelector_Template_input_change_1_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjInputSelector_Template_span_click_4_listener() { return ctx.previousFormat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjInputSelector_Template_span_click_5_listener() { return ctx.nextFormat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.colorString);
    } }, styles: [".mnj-input-selector{width:100%}.mnj-input-selector__container{display:flex;grid-gap:5px}.mnj-input-selector__container .color-input{border:none;border-bottom:1px solid currentColor;flex:1 0 auto;font-size:inherit;height:24px;padding:6px 8px;text-transform:uppercase}.mnj-input-selector__container .color-input:focus{border-bottom:1px solid currentColor;outline:none}.mnj-input-selector__container__switch-buttons{display:flex;flex-flow:column nowrap;justify-content:center}.mnj-input-selector__container__switch-buttons .switch-buttons--prev,.mnj-input-selector__container__switch-buttons .switch-buttons--next{position:relative;width:10px;height:10px}.mnj-input-selector__container__switch-buttons .switch-buttons--prev:after,.mnj-input-selector__container__switch-buttons .switch-buttons--next:after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--prev,[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--next{transform:rotate(180deg)}.mnj-input-selector__container__switch-buttons .switch-buttons--prev:after{border-left-width:2px;transform:translateY(4px) rotate(45deg)}.mnj-input-selector__container__switch-buttons .switch-buttons--next:after{border-right-width:2px;transform:translateY(4px) rotate(135deg)}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjInputSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-input-selector',
                templateUrl: 'input-selector.html',
                styleUrls: ['input-selector.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                host: {
                    class: 'mnj-input-selector',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], colorFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], inputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], colorInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
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
        this.alphaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW:
                newAlpha = newAlpha + (isRtl ? 0.01 : -0.01);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW:
                newAlpha = newAlpha + (isRtl ? -0.01 : 0.01);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.HOME:
                newAlpha = 0;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.END:
                newAlpha = 1;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_UP:
                newAlpha = newAlpha + (isRtl ? 0.1 : -0.1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_DOWN:
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
MnjAlphaSelector.ɵfac = function MnjAlphaSelector_Factory(t) { return new (t || MnjAlphaSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality)); };
MnjAlphaSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjAlphaSelector, selectors: [["mnj-alpha-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-alpha-selector"], hostVars: 1, hostBindings: function MnjAlphaSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MnjAlphaSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0);
    } }, outputs: { alphaChange: "alphaChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: BaseSelector, useExisting: MnjAlphaSelector }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[1, "mnj-alpha-selector__gradient", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjAlphaSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.gradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.alphaThumbPos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: [".mnj-alpha-selector{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=) repeat left center}.mnj-alpha-selector__gradient{height:100%;border-radius:2px}\n", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid currentColor;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid currentColor;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid currentColor;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjAlphaSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-alpha-selector',
                templateUrl: 'alpha-selector.html',
                styleUrls: ['alpha-selector.scss', '../base-selector.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjAlphaSelector }],
                host: {
                    class: 'mnj-colorpicker-selector mnj-alpha-selector',
                    '[attr.tabindex]': '0',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality }]; }, { alphaChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

function MnjChromePickerView_mnj_alpha_selector_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnj-alpha-selector", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("alphaChange", function MnjChromePickerView_mnj_alpha_selector_3_Template_mnj_alpha_selector_alphaChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.changeColor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.activeColor);
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
MnjChromePickerView.ɵfac = function MnjChromePickerView_Factory(t) { return new (t || MnjChromePickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter)); };
MnjChromePickerView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjChromePickerView, selectors: [["mnj-chrome-picker-view"]], hostAttrs: [1, "mnj-chrome-picker-view"], inputs: { showAlpha: "showAlpha", displayFormat: "displayFormat" }, exportAs: ["mnjChromePickerView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: ColorPickerView, useExisting: MnjChromePickerView }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [["cdkFocusInitial", "", 3, "color", "paletteGeneratorFn", "colorSelected"], [3, "color", "satChange"], [3, "color", "hueChange"], [3, "color", "alphaChange", 4, "ngIf"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color", "colorFormat", "inputChange"], [3, "color", "alphaChange"]], template: function MnjChromePickerView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjChromePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mnj-saturation-selector", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("satChange", function MnjChromePickerView_Template_mnj_saturation_selector_satChange_1_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mnj-hue-selector", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hueChange", function MnjChromePickerView_Template_mnj_hue_selector_hueChange_2_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MnjChromePickerView_mnj_alpha_selector_3_Template, 1, 1, "mnj-alpha-selector", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mnj-preview-swatch", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mnj-input-selector", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputChange", function MnjChromePickerView_Template_mnj_input_selector_inputChange_6_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.colorShadesFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAlpha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("colorFormat", ctx.displayFormat);
    } }, directives: [MnjGridSelector, MnjSaturationSelector, MnjHueSelector, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, MnjPreviewSwatch, MnjInputSelector, MnjAlphaSelector], styles: [".mnj-chrome-picker-view .controls-container{align-items:center;display:flex}.mnj-chrome-picker-view .controls-container--input{margin-left:15px;flex:1}.mnj-chrome-picker-view{display:flex;flex-direction:column;height:100%}.mnj-chrome-picker-view .mnj-saturation-selector{flex:1 0 auto}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjChromePickerView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-chrome-picker-view',
                exportAs: 'mnjChromePickerView',
                templateUrl: 'chrome-view.html',
                styleUrls: ['chrome-view.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjChromePickerView }],
                host: {
                    class: 'mnj-chrome-picker-view',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, { showAlpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], displayFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class MnjPalettePickerView {
    constructor(_colorAdapter) {
        this._colorAdapter = _colorAdapter;
        this.paletteFn = () => this.palette;
        // tslint:disable-next-line: member-ordering
        this.activeColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
MnjPalettePickerView.ɵfac = function MnjPalettePickerView_Factory(t) { return new (t || MnjPalettePickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter)); };
MnjPalettePickerView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjPalettePickerView, selectors: [["mnj-palette-picker-view"]], hostAttrs: [1, "mnj-palette-picker-view"], inputs: { activeColor: "activeColor", selected: "selected", palette: "palette" }, outputs: { activeColorChange: "activeColorChange" }, exportAs: ["mnjPalettePickerView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: ColorPickerView, useExisting: MnjPalettePickerView }])], decls: 1, vars: 2, consts: [["columns", "6", 3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjPalettePickerView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorSelected", function MnjPalettePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.paletteFn);
    } }, directives: [MnjGridSelector], styles: [".mnj-palette-picker-view{display:block}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjPalettePickerView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-palette-picker-view',
                templateUrl: 'palette-view.html',
                styleUrls: ['palette-view.scss'],
                exportAs: 'mnjPalettePickerView',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjPalettePickerView }],
                host: {
                    class: 'mnj-palette-picker-view',
                },
            }]
    }], function () { return [{ type: ColorAdapter }]; }, { activeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], palette: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activeColorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

/** Colorpicker data that requires internationalization. */
class MnjColorpickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
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
MnjColorpickerIntl.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MnjColorpickerIntl, factory: MnjColorpickerIntl.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorpickerIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

const _c0$1 = ["imageCanvas"];
function MnjPipetteSelector_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const swatch_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r2.getPixelBackground(swatch_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mnj-pipette-selector__swatch-container--cell--active", i_r4 === ctx_r2._swatchMiddle);
} }
function MnjPipetteSelector_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MnjPipetteSelector_div_2_div_2_Template, 1, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.swatchGridPos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.swatchGridStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pipetteSwatchPalette);
} }
class MnjPipetteSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef) {
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.pipetteColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);
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
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
        if (this._showPipetteSwatch !== value) {
            this._showPipetteSwatch = value;
            this._changeDetectorRef.detectChanges();
        }
    }
    ngAfterViewInit() {
        this.attachListeners();
        if (this._image) {
            // Paint canvas if there was a pending image that could not be rendered until this momment
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(() => this._paintCanvas());
        }
    }
    ngOnDestroy() {
        this._clearGlobalListeners();
    }
    // LISTENERS
    attachListeners() {
        const sliderElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this._elementRef);
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
            const canvasElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this.canvas);
            const { width: imgWidth, height: imgHeight } = this.image;
            const { width: containerWidth, height: containerHeight } = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this._elementRef).getBoundingClientRect();
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
MnjPipetteSelector.ɵfac = function MnjPipetteSelector_Factory(t) { return new (t || MnjPipetteSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MnjPipetteSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjPipetteSelector, selectors: [["mnj-pipette-selector"]], viewQuery: function MnjPipetteSelector_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0$1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostAttrs: [1, "mnj-pipette-selector"], inputs: { image: "image", swatchCells: "swatchCells" }, outputs: { pipetteColorChange: "pipetteColorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: BaseSelector, useExisting: MnjPipetteSelector }])], decls: 5, vars: 2, consts: [["imageCanvas", ""], ["class", "mnj-pipette-selector__swatch-container", 3, "ngStyle", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"], [1, "mnj-pipette-selector__swatch-container", 3, "ngStyle"], [1, "mnj-pipette-selector__swatch-container__grid", 3, "ngStyle"], ["class", "mnj-pipette-selector__swatch-container--cell", 3, "background", "mnj-pipette-selector__swatch-container--cell--active", 4, "ngFor", "ngForOf"], [1, "mnj-pipette-selector__swatch-container--cell"]], template: function MnjPipetteSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MnjPipetteSelector_div_2_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPipetteSwatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.canvasThumbPos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".mnj-pipette-selector{cursor:pointer;display:block;margin-bottom:12px;position:relative}.mnj-pipette-selector__swatch-container{-webkit-clip-path:circle(49% at 50% 50%);clip-path:circle(49% at 50% 50%);position:absolute;transition:transform .4s cubic-bezier(.25,.8,.25,1);z-index:1}.mnj-pipette-selector__swatch-container__grid{border-right:1px solid black;border-bottom:1px solid black;display:grid}.mnj-pipette-selector__swatch-container--cell{border-left:1px solid black;border-top:1px solid black}.mnj-pipette-selector__swatch-container--cell--active{border:1px solid red;height:11px;width:11px;z-index:1}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjPipetteSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-pipette-selector',
                templateUrl: 'pipette-selector.html',
                styleUrls: ['pipette-selector.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [{ provide: BaseSelector, useExisting: MnjPipetteSelector }],
                host: {
                    class: 'mnj-pipette-selector',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['imageCanvas']
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], swatchCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pipetteColorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

function MnjScanPickerView_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjScanPickerView_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1.click(); })("drop", function MnjScanPickerView_div_0_Template_div_drop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.uploadFile($event); })("dragover", function MnjScanPickerView_div_0_Template_div_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6._allowDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.uploadPhotoToScanLabel);
} }
function MnjScanPickerView_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mnj-pipette-selector", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pipetteColorChange", function MnjScanPickerView_ng_container_3_Template_mnj_pipette_selector_pipetteColorChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changeColor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjScanPickerView_ng_container_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mnj-preview-swatch", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mnj-input-selector", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx_r2._loadedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r2.activeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r2.activeColor);
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
MnjScanPickerView.ɵfac = function MnjScanPickerView_Factory(t) { return new (t || MnjScanPickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MnjColorpickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MnjScanPickerView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjScanPickerView, selectors: [["mnj-scan-picker-view"]], hostAttrs: [1, "mnj-scan-picker-view"], exportAs: ["mnjScanPickerView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: ColorPickerView, useExisting: MnjScanPickerView }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [["class", "upload-control", 3, "click", "drop", "dragover", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "upload-control--fileInput", 3, "change"], ["fileInput", ""], [4, "ngIf"], [1, "upload-control", 3, "click", "drop", "dragover"], [1, "mat-body"], [3, "image", "pipetteColorChange"], ["mat-mini-fab", "", "color", "primary", 1, "upload-control--fab", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color"]], template: function MnjScanPickerView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MnjScanPickerView_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MnjScanPickerView_Template_input_change_1_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MnjScanPickerView_ng_container_3_Template, 9, 3, "ng-container", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._loadedImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._loadedImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, MnjPipetteSelector, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, MnjPreviewSwatch, MnjInputSelector], styles: [".mnj-scan-picker-view .controls-container{align-items:center;display:flex}.mnj-scan-picker-view .controls-container--input{margin-left:15px;flex:1}.mnj-scan-picker-view{display:block;flex-direction:column;height:100%;position:relative}.mnj-scan-picker-view .mnj-pipette-selector{height:calc(100% - 50px)}.mnj-scan-picker-view .upload-control{border:2px dashed currentColor;border-radius:4px;display:flex;align-items:center;height:100%;justify-content:center}.mnj-scan-picker-view .upload-control--fileInput{display:none}.mnj-scan-picker-view .upload-control--fab{position:absolute;right:-8px;top:-8px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjScanPickerView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-scan-picker-view',
                exportAs: 'mnjScanPickerView',
                templateUrl: 'scan-view.html',
                styleUrls: ['scan-view.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [{ provide: ColorPickerView, useExisting: MnjScanPickerView }],
                host: {
                    class: 'mnj-scan-picker-view',
                },
            }]
    }], function () { return [{ type: ColorAdapter }, { type: MnjColorpickerIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, null); })();

function MnjColorPanel_mnj_chrome_picker_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnj-chrome-picker-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeColorChange", function MnjColorPanel_mnj_chrome_picker_view_2_Template_mnj_chrome_picker_view_activeColorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.activeColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColor", ctx_r0.activeColor)("selected", ctx_r0.selected)("displayFormat", ctx_r0.displayFormat)("showAlpha", ctx_r0.showAlpha);
} }
function MnjColorPanel_mnj_armonies_picker_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnj-armonies-picker-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeColorChange", function MnjColorPanel_mnj_armonies_picker_view_3_Template_mnj_armonies_picker_view_activeColorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.activeColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColor", ctx_r1.activeColor)("selected", ctx_r1.selected);
} }
function MnjColorPanel_mnj_palette_picker_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnj-palette-picker-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeColorChange", function MnjColorPanel_mnj_palette_picker_view_4_Template_mnj_palette_picker_view_activeColorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.activeColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColor", ctx_r2.activeColor)("palette", ctx_r2.palette)("selected", ctx_r2.selected);
} }
function MnjColorPanel_mnj_scan_picker_view_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnj-scan-picker-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeColorChange", function MnjColorPanel_mnj_scan_picker_view_5_Template_mnj_scan_picker_view_activeColorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.activeColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColor", ctx_r3.activeColor)("selected", ctx_r3.selected);
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
MnjColorPanelHeader.ɵfac = function MnjColorPanelHeader_Factory(t) { return new (t || MnjColorPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MnjColorpickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MnjColorPanel)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MnjColorPanelHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjColorPanelHeader, selectors: [["mnj-color-panel-header"]], exportAs: ["mnjColorPanelHeader"], decls: 8, vars: 8, consts: [[1, "mnj-color-panel-header"], [1, "mnj-color-panel-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mnj-color-panel-picker-button", 3, "click"], [1, "mnj-color-panel-arrow"], [1, "mnj-color-panel-spacer"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-next-button", 3, "disabled", "click"]], template: function MnjColorPanelHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjColorPanelHeader_Template_button_click_2_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjColorPanelHeader_Template_button_click_6_listener() { return ctx.previousClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjColorPanelHeader_Template_button_click_7_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.pickerViewButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pickerButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mnj-color-panel-invert", ctx.colorPanel.currentView === "scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.CdkAriaLive], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorPanelHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-color-panel-header',
                templateUrl: 'color-panel-header.html',
                exportAs: 'mnjColorPanelHeader',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: MnjColorpickerIntl }, { type: MnjColorPanel, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MnjColorPanel)]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, null); })();
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
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any color is selected. */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
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
    get displayFormat() {
        return this._displayFormat;
    }
    set displayFormat(value) {
        if (value !== this._displayFormat) {
            this._displayFormat = value;
        }
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
        this._showAlpha = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
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
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER:
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
MnjColorPanel.ɵfac = function MnjColorPanel_Factory(t) { return new (t || MnjColorPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MnjColorpickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MNJ_COLOR_CONFIG_PROVIDER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MnjColorPanel.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjColorPanel, selectors: [["mnj-color-panel"]], viewQuery: function MnjColorPanel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ColorPickerView, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.currentPicker = _t.first);
    } }, hostAttrs: [1, "mnj-color-panel"], hostBindings: function MnjColorPanel_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MnjColorPanel_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", startView: "startView", startColor: "startColor", displayFormat: "displayFormat", palette: "palette", showAlpha: "showAlpha", selected: "selected", activeColor: "activeColor" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection" }, exportAs: ["mnjColorPanel"], decls: 9, vars: 6, consts: [["cdkFocusInitial", ""], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mnj-color-panel-content", 3, "ngSwitch"], [3, "activeColor", "selected", "displayFormat", "showAlpha", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "selected", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "palette", "selected", "activeColorChange", 4, "ngSwitchCase"], [1, "mnj-color-panel-footer"], ["mat-button", "", 3, "color", "click"], [3, "activeColor", "selected", "displayFormat", "showAlpha", "activeColorChange"], [3, "activeColor", "selected", "activeColorChange"], [3, "activeColor", "palette", "selected", "activeColorChange"]], template: function MnjColorPanel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mnj-color-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MnjColorPanel_mnj_chrome_picker_view_2_Template, 1, 4, "mnj-chrome-picker-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MnjColorPanel_mnj_armonies_picker_view_3_Template, 1, 2, "mnj-armonies-picker-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MnjColorPanel_mnj_palette_picker_view_4_Template, 1, 3, "mnj-palette-picker-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MnjColorPanel_mnj_scan_picker_view_5_Template, 1, 2, "mnj-scan-picker-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjColorPanel_Template_button_click_7_listener() { return ctx._selectColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.currentView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "armonies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
    } }, directives: [MnjColorPanelHeader, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.CdkMonitorFocus, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, MnjChromePickerView, MnjArmoniesPickerView, MnjPalettePickerView, MnjScanPickerView], styles: [".mnj-color-panel{display:flex;flex-direction:column}.mnj-color-panel-header{padding:9px 16px 0}.mnj-color-panel-content{flex:1 0 0;outline:none;overflow-y:auto;padding:9px 16px}.mnj-color-panel-footer{display:flex;justify-content:flex-end;padding:0 16px 9px}.mnj-color-panel-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mnj-color-panel-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mnj-color-panel-spacer{flex:1 1 auto}.mnj-color-panel-picker-button{min-width:0}.mnj-color-panel-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mnj-color-panel-arrow.mnj-color-panel-invert{transform:rotate(180deg)}[dir=rtl] .mnj-color-panel-arrow{margin:0 5px 0 0}.mnj-color-panel-previous-button,.mnj-color-panel-next-button{position:relative}.mnj-color-panel-previous-button:after,.mnj-color-panel-next-button:after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mnj-color-panel-previous-button,[dir=rtl] .mnj-color-panel-next-button{transform:rotate(180deg)}.mnj-color-panel-previous-button:after{border-left-width:2px;transform:translate(2px) rotate(-45deg)}.mnj-color-panel-next-button:after{border-right-width:2px;transform:translate(-2px) rotate(45deg)}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorPanel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-color-panel',
                templateUrl: 'color-panel.html',
                styleUrls: ['color-panel.scss'],
                exportAs: 'mnjColorPanel',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'mnj-color-panel',
                    '(keydown)': '_handleKeydownEvent($event)',
                },
            }]
    }], function () { return [{ type: MnjColorpickerIntl }, { type: ColorAdapter }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MNJ_COLOR_CONFIG_PROVIDER]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], startColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], displayFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], palette: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showAlpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], currentPicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [ColorPickerView]
        }], activeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Animations used by the colorpicker.
 * @docs-private
 */
const mnjColorpickerAnimations = {
    /** Transforms the height of the colorpicker's panel. */
    transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('transformPanel', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0,
            transform: 'scale(1, 0.8)',
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('void => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1,
            transform: 'scale(1, 1)',
        }))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ opacity: 0 }))),
    ]),
    /** Fades in the content of the panel. */
    fadeInColorPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('fadeInColorPanel', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ opacity: 0 })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ opacity: 1 })),
        // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')),
    ]),
};

/** Used to generate a unique ID for each colorpicker instance. */
let colorpickerUid = 0;
/** Injection token that determines the scroll handling while the color panel is open. */
const MNJ_COLORPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mnj-colorpicker-scroll-strategy');
/** @docs-private */
function MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MNJ_COLORPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.Overlay],
    useFactory: MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MnjColorpickerContent.
/** @docs-private */
class MnjColorpickerContentBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MnjColorpickerContentMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinColor)(MnjColorpickerContentBase);
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
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
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
MnjColorpickerContent.ɵfac = function MnjColorpickerContent_Factory(t) { return new (t || MnjColorpickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MnjColorpickerContent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjColorpickerContent, selectors: [["mnj-colorpicker-content"]], hostAttrs: [1, "mnj-colorpicker-content"], hostVars: 3, hostBindings: function MnjColorpickerContent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MnjColorpickerContent_animation_transformPanel_done_HostBindingHandler() { return ctx._animationDone.next(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mnj-colorpicker-content-touch", ctx.colorpicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["mnjColorpickerContent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 10, consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "color", "displayFormat", "startView", "startColor", "showAlpha", "palette", "selected", "_userSelection"]], template: function MnjColorpickerContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnj-color-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_userSelection", function MnjColorpickerContent_Template_mnj_color_panel__userSelection_0_listener($event) { return ctx._handleUserSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.colorpicker.id)("ngClass", ctx.colorpicker.panelClass)("color", ctx.colorpicker.color)("displayFormat", ctx.colorpicker.displayFormat)("startView", ctx.colorpicker.startView)("startColor", ctx.colorpicker.startColor)("showAlpha", ctx.colorpicker.showAlpha)("palette", ctx.colorpicker.palette)("selected", ctx._getSelected())("@fadeInColorPanel", "enter");
    } }, directives: [MnjColorPanel, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.CdkTrapFocus, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [".mnj-colorpicker-content{display:flex;border-radius:4px;flex-direction:column}.mnj-colorpicker-content .mnj-color-panel{height:400px;width:350px}.mnj-colorpicker-content-touch{display:flex;flex-direction:column;max-height:80vh;overflow:auto;margin:-24px}.mnj-colorpicker-content-touch .mnj-color-panel{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mnj-colorpicker-content-touch .mnj-color-panel{width:64vh;height:80vh}}@media all and (orientation: portrait){.mnj-colorpicker-content-touch .mnj-color-panel{width:80vw;height:100vw}}\n"], encapsulation: 2, data: { animation: [mnjColorpickerAnimations.transformPanel, mnjColorpickerAnimations.fadeInColorPanel] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorpickerContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-colorpicker-content',
                templateUrl: 'colorpicker-content.html',
                styleUrls: ['colorpicker-content.scss'],
                exportAs: 'mnjColorpickerContent',
                inputs: ['color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                animations: [mnjColorpickerAnimations.transformPanel, mnjColorpickerAnimations.fadeInColorPanel],
                host: {
                    class: 'mnj-colorpicker-content',
                    '[@transformPanel]': '_animationState',
                    '(@transformPanel.done)': '_animationDone.next()',
                    '[class.mnj-colorpicker-content-touch]': 'colorpicker.touchUi',
                },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, null); })();
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
        this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
        this._touchUi = false;
        /** Emits when the colorpicker has been opened. */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the colorpicker has been closed. */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._opened = false;
        /** The id for the colorpicker color panel. */
        this.id = `mnj-colorpicker-${colorpickerUid++}`;
        this._validSelected = null;
        /** The element that was focused before the colorpicker was opened. */
        this._focusedElementBeforeOpen = null;
        /** Emits when the colorpicker is disabled. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        /** Emits when the colorpicker formmatting inputs (showAlpha and displayFormat) changes. */
        this._configurationChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        /** Emits new selected color when selected color changes. */
        this._selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this._scrollStrategy = scrollStrategy;
    }
    /** Color palette to use on the colorpicker's color panel. */
    get color() {
        return this._color || (this._colorpickerInput ? this._colorpickerInput.getThemePalette() : undefined);
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
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
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
        this._touchUi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /** Whether the colorpicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this._colorpickerInput ? this._colorpickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
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
        (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value) ? this.open() : this.close();
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
            instance._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(() => this._destroyPopup());
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
        if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
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
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__.ComponentPortal(MnjColorpickerContent, this._viewContainerRef);
        this._destroyPopup();
        this._createPopup();
        this._popupComponentRef = this._popupRef.attach(portal);
        this._forwardContentValues(this._popupComponentRef.instance);
        // Update the position once the calendar has rendered.
        this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(() => {
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
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayConfig({
            positionStrategy: this._setConnectedPositions(positionStrategy),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mnj-colorpicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)((event) => {
            // Closing on alt + up is only valid when there's an input associated with the colorpicker.
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ESCAPE || (this._colorpickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW);
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
            this._setConnectedPositions(this._popupRef.getConfig().positionStrategy);
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
MnjColorpicker.ɵfac = function MnjColorpicker_Factory(t) { return new (t || MnjColorpicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MNJ_COLORPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT, 8)); };
MnjColorpicker.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjColorpicker, selectors: [["mnj-colorpicker"]], inputs: { color: "color", startColor: "startColor", startView: "startView", palette: "palette", showAlpha: "showAlpha", displayFormat: "displayFormat", touchUi: "touchUi", disabled: "disabled", xPosition: "xPosition", yPosition: "yPosition", panelClass: "panelClass", opened: "opened" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["mnjColorpicker"], decls: 0, vars: 0, template: function MnjColorpicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorpicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-colorpicker',
                template: '',
                exportAs: 'mnjColorpicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MNJ_COLORPICKER_SCROLL_STRATEGY]
            }] }, { type: ColorAdapter }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], startColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], palette: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showAlpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], displayFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], touchUi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['opened']
        }], closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['closed']
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/** @docs-private */
const MNJ_COLORPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MnjColorpickerInput),
    multi: true,
};
/** @docs-private */
const MNJ_COLORPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MnjColorpickerInput),
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
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.colorInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the value changes (either due to user input or programmatic change). */
        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the internal state has changed */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this._onTouched = () => { };
        this._cvaOnChange = () => { };
        this._validatorOnChange = () => { };
        this._colorpickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
        this._colorpickerConfigurationSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
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
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
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
        const isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW;
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
MnjColorpickerInput.ɵfac = function MnjColorpickerInput_Factory(t) { return new (t || MnjColorpickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MNJ_COLOR_CONFIG_PROVIDER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, 8)); };
MnjColorpickerInput.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MnjColorpickerInput, selectors: [["input", "mnjColorpicker", ""]], hostAttrs: ["aria-haspopup", "_colorpicker ? \"dialog\" : null"], hostVars: 2, hostBindings: function MnjColorpickerInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MnjColorpickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MnjColorpickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MnjColorpickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MnjColorpickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-owns", (ctx._colorpicker == null ? null : ctx._colorpicker.opened) && ctx._colorpicker.id || null);
    } }, inputs: { mnjColorpicker: "mnjColorpicker", value: "value", disabled: "disabled" }, outputs: { colorChange: "colorChange", colorInput: "colorInput" }, exportAs: ["mnjColorpickerInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MNJ_COLORPICKER_VALUE_ACCESSOR,
            MNJ_COLORPICKER_VALIDATORS,
            { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorpickerInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[mnjColorpicker]',
                exportAs: 'mnjColorpickerInput',
                providers: [
                    MNJ_COLORPICKER_VALUE_ACCESSOR,
                    MNJ_COLORPICKER_VALIDATORS,
                    { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
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
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: ColorAdapter }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MNJ_COLOR_CONFIG_PROVIDER]
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { mnjColorpicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], colorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], colorInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

const _c0 = ["button"];
function MnjColorpickerToggle__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = [[["", "mnjColorpickerToggleIcon", ""]]];
const _c2 = ["[mnjColorpickerToggleIcon]"];
/** Can be used to override the icon of a `matColorpickerToggle`. */
class MnjColorpickerToggleIcon {
}
MnjColorpickerToggleIcon.ɵfac = function MnjColorpickerToggleIcon_Factory(t) { return new (t || MnjColorpickerToggleIcon)(); };
MnjColorpickerToggleIcon.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MnjColorpickerToggleIcon, selectors: [["", "mnjColorpickerToggleIcon", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorpickerToggleIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mnjColorpickerToggleIcon]',
            }]
    }], null, null); })();
class MnjColorpickerToggle {
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
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
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
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
        const colorpickerStateChanged = this.colorpicker ? this.colorpicker._stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        const inputStateChanged = this.colorpicker && this.colorpicker._colorpickerInput ? this.colorpicker._colorpickerInput._stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        const colorpickerToggled = this.colorpicker
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(this.colorpicker.openedStream, this.colorpicker.closedStream)
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        this._stateChanges.unsubscribe();
        this._stateChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(this._intl.changes, colorpickerStateChanged, inputStateChanged, colorpickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MnjColorpickerToggle.ɵfac = function MnjColorpickerToggle_Factory(t) { return new (t || MnjColorpickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MnjColorpickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex')); };
MnjColorpickerToggle.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnjColorpickerToggle, selectors: [["mnj-colorpicker-toggle"]], contentQueries: function MnjColorpickerToggle_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MnjColorpickerToggleIcon, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MnjColorpickerToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mnj-colorpicker-toggle"], hostVars: 8, hostBindings: function MnjColorpickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MnjColorpickerToggle_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("data-mnj-color-panel", ctx.colorpicker ? ctx.colorpicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mnj-colorpicker-toggle-active", ctx.colorpicker && ctx.colorpicker.opened)("mnj-accent", ctx.colorpicker && ctx.colorpicker.color === "accent")("mnj-warn", ctx.colorpicker && ctx.colorpicker.color === "warn");
    } }, inputs: { colorpicker: ["for", "colorpicker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["mnjColorpickerToggle"], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mnj-colorpicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mnj-colorpicker-toggle-default-icon"], ["d", "M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"]], template: function MnjColorpickerToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MnjColorpickerToggle_Template_button_click_0_listener($event) { return ctx._open($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MnjColorpickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.colorpicker ? "dialog" : null)("aria-label", ctx._intl.openColorPickerLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._customIcon);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mnj-colorpicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mnj-colorpicker-toggle-default-icon{margin:auto}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorpickerToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mnj-colorpicker-toggle',
                templateUrl: 'colorpicker-toggle.html',
                styleUrls: ['colorpicker-toggle.scss'],
                exportAs: 'mnjColorpickerToggle',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
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
    }], function () { return [{ type: MnjColorpickerIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }]; }, { colorpicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['for']
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MnjColorpickerToggleIcon]
        }], _button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['button']
        }] }); })();

class MnjColorpickerModule {
}
MnjColorpickerModule.ɵfac = function MnjColorpickerModule_Factory(t) { return new (t || MnjColorpickerModule)(); };
MnjColorpickerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MnjColorpickerModule });
MnjColorpickerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MnjColorpickerIntl, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.CdkScrollableModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnjColorpickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule],
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
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.CdkScrollableModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MnjColorpickerModule, { declarations: [MnjColorpickerToggle,
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
        MnjScanPickerView], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule], exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.CdkScrollableModule,
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

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 3215:
/*!***********************************************!*\
  !*** ./projects/app/src/app/app.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var mnj_ngx_colorpicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mnj-ngx-colorpicker */ 301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _mnj_ngx_colorpicker_src_lib_colorpicker_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mnj-ngx-colorpicker/src/lib/colorpicker-input */ 7518);
/* harmony import */ var _mnj_ngx_colorpicker_src_lib_colorpicker_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mnj-ngx-colorpicker/src/lib/colorpicker-toggle */ 3541);
/* harmony import */ var _mnj_ngx_colorpicker_src_lib_colorpicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mnj-ngx-colorpicker/src/lib/colorpicker */ 5309);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 2220);























function AppComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const format_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", format_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](format_r5);
} }
function AppComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const view_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", view_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r6);
} }
class AppComponent {
    constructor(document, _overlayContainer, _breakpointObserver) {
        this.document = document;
        this._overlayContainer = _overlayContainer;
        this._breakpointObserver = _breakpointObserver;
        this._colorFormats = ['HEX', 'RGB', 'HSL', 'HWB', 'CMYK'];
        this._pickerViews = ['picker', 'armonies', 'palette', 'scan'];
        this.themeColorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('primary');
        this.colorFormatControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('HEX');
        this.startViewControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('picker');
        this.showAlphaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false);
        this.customPaletteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false);
        this.touchUiControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false);
        this.disabledControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false);
        this.startColorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl((0,mnj_ngx_colorpicker__WEBPACK_IMPORTED_MODULE_5__.fromString)('black'));
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.colorpickerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
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
        this.customPalette = [];
        this.changePalette();
        this._breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.Breakpoints.Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.Breakpoints.XSmall])
            .subscribe((result) => {
            this.touchUiControl.setValue(result.matches);
        });
    }
    set theme(value) {
        if (value !== this._theme) {
            this._applyTheme(value);
            this._theme = value;
        }
    }
    ngAfterViewInit() {
        this.theme = 'light-theme';
    }
    changePalette() {
        this.customPalette = [];
        let i = 100;
        while (i >= 0) {
            const c = {
                title: `dark ${100 - i}%`,
                color: (0,mnj_ngx_colorpicker__WEBPACK_IMPORTED_MODULE_5__.fromHsl)({ hue: 0, saturation: 0, lightness: i }),
                active: false,
            };
            this.customPalette.push(c);
            i--;
        }
    }
    _applyTheme(theme) {
        this.document.body.classList.remove(this._theme);
        this._overlayContainer.getContainerElement().classList.remove(this._theme);
        this.document.body.classList.add(`${theme}`);
        this._overlayContainer.getContainerElement().classList.add(`${theme}`);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.BreakpointObserver)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 81, vars: 28, consts: [["color", "primary", 1, "header", "mat-elevation-z6"], ["mat-toolbar-row", "", 1, "header__nav"], [1, "header__nav--title"], [1, "header__nav--spacer"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"], ["themeMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", "href", "https://github.com/Davidmnj91/mnj-ngx-colorpicker", 1, "header__nav--github-button"], ["height", "32", "viewBox", "0 0 16 16", "version", "1.1", "width", "32", "aria-hidden", "true"], ["fill-rule", "evenodd", "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"], [1, "main"], [1, "example-card", "mat-elevation-z6"], ["fxLayout", "column wrap", "fxLayoutGap", "15px", 3, "formGroup"], [1, "example-h4"], [1, "example-section"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "formControl", "mnjColorpicker"], ["matSuffix", "", 3, "for"], ["startColorPicker", ""], [1, "mat-h3"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["fxLayout", "row", "fxLayoutGap", "15px"], [3, "checked", "change"], [3, "color"], [3, "color", "startView", "showAlpha", "displayFormat", "startColor", "palette", "touchUi"], ["defaultPicker", ""], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "MNJ NGX Colorpicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { return ctx.theme = "light-theme"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Light Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.theme = "dark-theme"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Dark Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Popup Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Configuration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Color Format:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AppComponent_mat_option_33_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Start View:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, AppComponent_mat_option_38_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Start color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "mnj-colorpicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "mnj-colorpicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Theme color: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-radio-group", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-radio-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-radio-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Picker options: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Show Alpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Custom Palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Touch UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-checkbox", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AppComponent_Template_mat_checkbox_change_66_listener() { return ctx.colorControl.disabled ? ctx.colorControl.enable() : ctx.colorControl.disable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Pick a Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "mnj-colorpicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "mnj-colorpicker", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.colorpickerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.colorFormatControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx._colorFormats);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.startViewControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx._pickerViews);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.startColorControl)("mnjColorpicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.themeColorControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.showAlphaControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.customPaletteControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.touchUiControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.colorControl.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.themeColorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.colorControl)("mnjColorpicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.themeColorControl.value)("startView", ctx.startViewControl.value)("showAlpha", ctx.showAlphaControl.value)("displayFormat", ctx.colorFormatControl.value)("startColor", ctx.startColorControl.value)("palette", ctx.customPaletteControl.value ? ctx.customPalette : null)("touchUi", ctx.touchUiControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Result: ", ctx.colorpickerForm.get("color").value ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 26, ctx.colorpickerForm.get("color").value) : "", "");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _mnj_ngx_colorpicker_src_lib_colorpicker_input__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerInput, _mnj_ngx_colorpicker_src_lib_colorpicker_toggle__WEBPACK_IMPORTED_MODULE_1__.MnjColorpickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _mnj_ngx_colorpicker_src_lib_colorpicker__WEBPACK_IMPORTED_MODULE_2__.MnjColorpicker, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.header__nav[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  flex: 1 0 100%;\n}\n\n.header__nav--title[_ngcontent-%COMP%] {\n  font-size: 400 16px/28px;\n}\n\n.header__nav--spacer[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n\n.header__nav--github-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.main[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDSTtFQUNFLHdCQUFBO0FBQ047O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBSU07RUFDRSxpQkFBQTtBQUZSOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUpGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBmbGV4OiAxIDAgMTAwJTtcblxuICAgICYtLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNDAwIDE2cHgvMjhweDtcbiAgICB9XG5cbiAgICAmLS1zcGFjZXIge1xuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgfVxuXG4gICAgJi0tZ2l0aHViLWJ1dHRvbiB7XG4gICAgICBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5tYWluIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ 1329:
/*!********************************************!*\
  !*** ./projects/app/src/app/app.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 8662);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _mnj_ngx_colorpicker_src_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mnj-ngx-colorpicker/src/lib */ 1019);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 3215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
            _mnj_ngx_colorpicker_src_lib__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _mnj_ngx_colorpicker_src_lib__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerModule] }); })();


/***/ }),

/***/ 8040:
/*!******************************************************!*\
  !*** ./projects/app/src/environments/environment.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4986:
/*!**********************************!*\
  !*** ./projects/app/src/main.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 1329);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8040);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 1033:
/*!*************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/color-panel.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjColorPanelHeader": () => (/* binding */ MnjColorPanelHeader),
/* harmony export */   "MnjColorPanel": () => (/* binding */ MnjColorPanel)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _color_color_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color/color-config */ 1949);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ 99);
/* harmony import */ var _colorpicker_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorpicker-intl */ 1733);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color/color-adapter */ 7842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _views_chrome_chrome_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/chrome/chrome-view */ 8242);
/* harmony import */ var _views_armonies_armonies_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/armonies/armonies-view */ 3);
/* harmony import */ var _views_palette_palette_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/palette/palette-view */ 7638);
/* harmony import */ var _views_scan_scan_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/scan/scan-view */ 1755);
















function MnjColorPanel_mnj_chrome_picker_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mnj-chrome-picker-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeColorChange", function MnjColorPanel_mnj_chrome_picker_view_2_Template_mnj_chrome_picker_view_activeColorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.activeColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("activeColor", ctx_r0.activeColor)("selected", ctx_r0.selected)("displayFormat", ctx_r0.displayFormat)("showAlpha", ctx_r0.showAlpha);
} }
function MnjColorPanel_mnj_armonies_picker_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mnj-armonies-picker-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeColorChange", function MnjColorPanel_mnj_armonies_picker_view_3_Template_mnj_armonies_picker_view_activeColorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.activeColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("activeColor", ctx_r1.activeColor)("selected", ctx_r1.selected);
} }
function MnjColorPanel_mnj_palette_picker_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mnj-palette-picker-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeColorChange", function MnjColorPanel_mnj_palette_picker_view_4_Template_mnj_palette_picker_view_activeColorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.activeColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("activeColor", ctx_r2.activeColor)("palette", ctx_r2.palette)("selected", ctx_r2.selected);
} }
function MnjColorPanel_mnj_scan_picker_view_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mnj-scan-picker-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeColorChange", function MnjColorPanel_mnj_scan_picker_view_5_Template_mnj_scan_picker_view_activeColorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r10.activeColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("activeColor", ctx_r3.activeColor)("selected", ctx_r3.selected);
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
MnjColorPanelHeader.ɵfac = function MnjColorPanelHeader_Factory(t) { return new (t || MnjColorPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_colorpicker_intl__WEBPACK_IMPORTED_MODULE_2__.MnjColorpickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(() => MnjColorPanel)), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
MnjColorPanelHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MnjColorPanelHeader, selectors: [["mnj-color-panel-header"]], exportAs: ["mnjColorPanelHeader"], decls: 8, vars: 8, consts: [[1, "mnj-color-panel-header"], [1, "mnj-color-panel-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mnj-color-panel-picker-button", 3, "click"], [1, "mnj-color-panel-arrow"], [1, "mnj-color-panel-spacer"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-next-button", 3, "disabled", "click"]], template: function MnjColorPanelHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MnjColorPanelHeader_Template_button_click_2_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MnjColorPanelHeader_Template_button_click_6_listener() { return ctx.previousClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MnjColorPanelHeader_Template_button_click_7_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", ctx.pickerViewButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.pickerButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mnj-color-panel-invert", ctx.colorPanel.currentView === "scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkAriaLive], encapsulation: 2, changeDetection: 0 });
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
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        /** Emits when any color is selected. */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
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
    get displayFormat() {
        return this._displayFormat;
    }
    set displayFormat(value) {
        if (value !== this._displayFormat) {
            this._displayFormat = value;
        }
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
        this._showAlpha = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__.coerceBooleanProperty)(value);
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
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.ENTER:
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
MnjColorPanel.ɵfac = function MnjColorPanel_Factory(t) { return new (t || MnjColorPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_colorpicker_intl__WEBPACK_IMPORTED_MODULE_2__.MnjColorpickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_3__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_color_color_config__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLOR_CONFIG_PROVIDER), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
MnjColorPanel.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MnjColorPanel, selectors: [["mnj-color-panel"]], viewQuery: function MnjColorPanel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_views__WEBPACK_IMPORTED_MODULE_1__.ColorPickerView, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.currentPicker = _t.first);
    } }, hostAttrs: [1, "mnj-color-panel"], hostBindings: function MnjColorPanel_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function MnjColorPanel_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", startView: "startView", startColor: "startColor", displayFormat: "displayFormat", palette: "palette", showAlpha: "showAlpha", selected: "selected", activeColor: "activeColor" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection" }, exportAs: ["mnjColorPanel"], decls: 9, vars: 6, consts: [["cdkFocusInitial", ""], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mnj-color-panel-content", 3, "ngSwitch"], [3, "activeColor", "selected", "displayFormat", "showAlpha", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "selected", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "palette", "selected", "activeColorChange", 4, "ngSwitchCase"], [1, "mnj-color-panel-footer"], ["mat-button", "", 3, "color", "click"], [3, "activeColor", "selected", "displayFormat", "showAlpha", "activeColorChange"], [3, "activeColor", "selected", "activeColorChange"], [3, "activeColor", "palette", "selected", "activeColorChange"]], template: function MnjColorPanel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mnj-color-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MnjColorPanel_mnj_chrome_picker_view_2_Template, 1, 4, "mnj-chrome-picker-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MnjColorPanel_mnj_armonies_picker_view_3_Template, 1, 2, "mnj-armonies-picker-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MnjColorPanel_mnj_palette_picker_view_4_Template, 1, 3, "mnj-palette-picker-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MnjColorPanel_mnj_scan_picker_view_5_Template, 1, 2, "mnj-scan-picker-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MnjColorPanel_Template_button_click_7_listener() { return ctx._selectColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.currentView);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "armonies");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.color);
    } }, directives: [MnjColorPanelHeader, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkMonitorFocus, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _views_chrome_chrome_view__WEBPACK_IMPORTED_MODULE_4__.MnjChromePickerView, _views_armonies_armonies_view__WEBPACK_IMPORTED_MODULE_5__.MnjArmoniesPickerView, _views_palette_palette_view__WEBPACK_IMPORTED_MODULE_6__.MnjPalettePickerView, _views_scan_scan_view__WEBPACK_IMPORTED_MODULE_7__.MnjScanPickerView], styles: [".mnj-color-panel {\n  display: flex;\n  flex-direction: column;\n}\n\n.mnj-color-panel-header {\n  padding: 9px 16px 0 16px;\n}\n\n.mnj-color-panel-content {\n  flex: 1 0 0;\n  outline: none;\n  overflow-y: auto;\n  padding: 9px 16px;\n}\n\n.mnj-color-panel-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 16px 9px;\n}\n\n.mnj-color-panel-controls {\n  display: flex;\n  margin: 5% calc(33% / 7 - 16px);\n}\n\n.mnj-color-panel-controls .mat-icon-button:hover .mat-button-focus-overlay {\n  opacity: 0.04;\n}\n\n.mnj-color-panel-spacer {\n  flex: 1 1 auto;\n}\n\n.mnj-color-panel-picker-button {\n  min-width: 0;\n}\n\n.mnj-color-panel-arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top-width: 5px;\n  border-top-style: solid;\n  margin: 0 0 0 5px;\n  vertical-align: middle;\n}\n\n.mnj-color-panel-arrow.mnj-color-panel-invert {\n  transform: rotate(180deg);\n}\n\n[dir=rtl] .mnj-color-panel-arrow {\n  margin: 0 5px 0 0;\n}\n\n.mnj-color-panel-previous-button,\n.mnj-color-panel-next-button {\n  position: relative;\n}\n\n.mnj-color-panel-previous-button::after,\n.mnj-color-panel-next-button::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  margin: 15.5px;\n  border: 0 solid currentColor;\n  border-top-width: 2px;\n}\n\n[dir=rtl] .mnj-color-panel-previous-button,\n[dir=rtl] .mnj-color-panel-next-button {\n  transform: rotate(180deg);\n}\n\n.mnj-color-panel-previous-button::after {\n  border-left-width: 2px;\n  transform: translateX(2px) rotate(-45deg);\n}\n\n.mnj-color-panel-next-button::after {\n  border-right-width: 2px;\n  transform: translateX(-2px) rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLXBhbmVsLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS9fbGF5b3V0LWNvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSx3QkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FBbkJGOztBQXFCRTtFQUNFLGFBQUE7QUFuQko7O0FBdUJBO0VBQ0UsY0FBQTtBQXBCRjs7QUF1QkE7RUFDRSxZQUFBO0FBcEJGOztBQXVCQTtFQUNFLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EscUJBdEQyQjtFQXVEM0IsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBcEJGOztBQXNCRTtFQUNFLHlCQUFBO0FBcEJKOztBQXVCRTtFQUNFLGlCQUFBO0FBckJKOztBQXlCQTs7RUFFRSxrQkFBQTtBQXRCRjs7QUF3QkU7O0VDakZBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFRCtFRSxXQUFBO0VBQ0EsY0F0RW9DO0VBdUVwQyw0QkFBQTtFQUNBLHFCQXpFMEM7QUF3RDlDOztBQW9CRTs7RUFDRSx5QkFBQTtBQWpCSjs7QUFxQkE7RUFDRSxzQkFsRjRDO0VBbUY1Qyx5Q0FqRm9DO0FBK0R0Qzs7QUFxQkE7RUFDRSx1QkF2RjRDO0VBd0Y1Qyx5Q0FyRm9DO0FBbUV0QyIsImZpbGUiOiJjb2xvci1wYW5lbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnfkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvbGF5b3V0LWNvbW1vbicgYXMgbWF0O1xuXG4kbW5qLWNvbG9yLXBhbmVsLXBhZGRpbmcteTogOXB4ICFkZWZhdWx0O1xuJG1uai1jb2xvci1wYW5lbC1wYWRkaW5nLXg6IDE2cHggIWRlZmF1bHQ7XG4kbW5qLWNvbG9yLXBhbmVsLWNvbnRyb2xzLXZlcnRpY2FsLXBhZGRpbmc6IDUlO1xuXG4vLyBXZSB1c2UgdGhlIHNhbWUgcGFkZGluZyBhcyB0aGUgbW9udGggLyB5ZWFyIGxhYmVsLCBidXQgc3VidHJhY3QgMTZweCBzaW5jZSB0aGVyZSBpcyBwYWRkaW5nXG4vLyBiZXR3ZWVuIHRoZSBlZGdlIG9mIHRoZSBidXR0b24gYW5kIHRoZSB0ZXh0LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgYnV0dG9uIHRleHQgbGluZXMgdXAgd2l0aFxuLy8gdGhlIG1vbnRoIC8geWVhciBsYWJlbCB0ZXh0LlxuJG1uai1jb2xvci1wYW5lbC1jb250cm9scy1zaWRlLW1hcmdpbjogY2FsYygzMyUgLyA3IC0gMTZweCk7XG5cbiRtbmotY29sb3ItcGFuZWwtYXJyb3ctc2l6ZTogNXB4ICFkZWZhdWx0O1xuXG4vLyBWYWx1ZXMgY2hvc2VuIHRvIGFwcHJveGltYXRlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vaWNvbnMvI2ljX25hdmlnYXRlX2JlZm9yZSBhbmRcbi8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vaWNvbnMvI2ljX25hdmlnYXRlX25leHQgYXMgY2xvc2VseSBhcyBwb3NzaWJsZS5cbiRtbmotY29sb3ItcGFuZWwtcHJldi1uZXh0LWljb24tYm9yZGVyLXdpZHRoOiAycHg7XG4kbW5qLWNvbG9yLXBhbmVsLXByZXYtbmV4dC1pY29uLW1hcmdpbjogMTUuNXB4O1xuJG1uai1jb2xvci1wYW5lbC1wcmV2LWljb24tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlKC00NWRlZyk7XG4kbW5qLWNvbG9yLXBhbmVsLW5leHQtaWNvbi10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCkgcm90YXRlKDQ1ZGVnKTtcblxuLm1uai1jb2xvci1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tbmotY29sb3ItcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogJG1uai1jb2xvci1wYW5lbC1wYWRkaW5nLXkgJG1uai1jb2xvci1wYW5lbC1wYWRkaW5nLXggMCAkbW5qLWNvbG9yLXBhbmVsLXBhZGRpbmcteDtcbn1cblxuLm1uai1jb2xvci1wYW5lbC1jb250ZW50IHtcbiAgZmxleDogMSAwIDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6ICRtbmotY29sb3ItcGFuZWwtcGFkZGluZy15ICRtbmotY29sb3ItcGFuZWwtcGFkZGluZy14O1xufVxuXG4ubW5qLWNvbG9yLXBhbmVsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAgJG1uai1jb2xvci1wYW5lbC1wYWRkaW5nLXggJG1uai1jb2xvci1wYW5lbC1wYWRkaW5nLXk7XG59XG5cbi5tbmotY29sb3ItcGFuZWwtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46ICRtbmotY29sb3ItcGFuZWwtY29udHJvbHMtdmVydGljYWwtcGFkZGluZyAkbW5qLWNvbG9yLXBhbmVsLWNvbnRyb2xzLXNpZGUtbWFyZ2luO1xuXG4gIC5tYXQtaWNvbi1idXR0b246aG92ZXIgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMC4wNDtcbiAgfVxufVxuXG4ubW5qLWNvbG9yLXBhbmVsLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubW5qLWNvbG9yLXBhbmVsLXBpY2tlci1idXR0b24ge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5tbmotY29sb3ItcGFuZWwtYXJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAkbW5qLWNvbG9yLXBhbmVsLWFycm93LXNpemUgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogJG1uai1jb2xvci1wYW5lbC1hcnJvdy1zaXplIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLXdpZHRoOiAkbW5qLWNvbG9yLXBhbmVsLWFycm93LXNpemU7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBtYXJnaW46IDAgMCAwICRtbmotY29sb3ItcGFuZWwtYXJyb3ctc2l6ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAmLm1uai1jb2xvci1wYW5lbC1pbnZlcnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cblxuICBbZGlyPSdydGwnXSAmIHtcbiAgICBtYXJnaW46IDAgJG1uai1jb2xvci1wYW5lbC1hcnJvdy1zaXplIDAgMDtcbiAgfVxufVxuXG4ubW5qLWNvbG9yLXBhbmVsLXByZXZpb3VzLWJ1dHRvbixcbi5tbmotY29sb3ItcGFuZWwtbmV4dC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIEBpbmNsdWRlIG1hdC5maWxsKCk7XG4gICAgY29udGVudDogJyc7XG4gICAgbWFyZ2luOiAkbW5qLWNvbG9yLXBhbmVsLXByZXYtbmV4dC1pY29uLW1hcmdpbjtcbiAgICBib3JkZXI6IDAgc29saWQgY3VycmVudENvbG9yO1xuICAgIGJvcmRlci10b3Atd2lkdGg6ICRtbmotY29sb3ItcGFuZWwtcHJldi1uZXh0LWljb24tYm9yZGVyLXdpZHRoO1xuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuXG4ubW5qLWNvbG9yLXBhbmVsLXByZXZpb3VzLWJ1dHRvbjo6YWZ0ZXIge1xuICBib3JkZXItbGVmdC13aWR0aDogJG1uai1jb2xvci1wYW5lbC1wcmV2LW5leHQtaWNvbi1ib3JkZXItd2lkdGg7XG4gIHRyYW5zZm9ybTogJG1uai1jb2xvci1wYW5lbC1wcmV2LWljb24tdHJhbnNmb3JtO1xufVxuXG4ubW5qLWNvbG9yLXBhbmVsLW5leHQtYnV0dG9uOjphZnRlciB7XG4gIGJvcmRlci1yaWdodC13aWR0aDogJG1uai1jb2xvci1wYW5lbC1wcmV2LW5leHQtaWNvbi1ib3JkZXItd2lkdGg7XG4gIHRyYW5zZm9ybTogJG1uai1jb2xvci1wYW5lbC1uZXh0LWljb24tdHJhbnNmb3JtO1xufVxuIiwiLy8gVGhpcyBtaXhpbiBlbnN1cmVzIGFuIGVsZW1lbnQgc3BhbnMgdG8gZmlsbCB0aGUgbmVhcmVzdCBhbmNlc3RvciB3aXRoIGRlZmluZWQgcG9zaXRpb25pbmcuXG5AbWl4aW4gZmlsbCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 7842:
/*!*********************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/color/color-adapter.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorAdapter": () => (/* binding */ ColorAdapter)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ 5067);
/* harmony import */ var _color_conversions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-conversions */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



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
        return (0,_color__WEBPACK_IMPORTED_MODULE_0__.fromString)(colorString);
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
            return (0,_color__WEBPACK_IMPORTED_MODULE_0__.fromString)(value);
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
        const { hue, whiteness, blackness } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_1__.rgbToHwb)(color);
        return showAlpha
            ? `hwba(${hue}, ${Math.round(whiteness * 100)}%, ${Math.round(blackness * 100)}%, ${color.alpha})`
            : `hwb(${hue}, ${Math.round(whiteness * 100)}%, ${Math.round(blackness * 100)}%)`;
    }
    /** Outputs the HWB/A decimals string representation of a color */
    toHwbStringDecimal(color, showAlpha = false) {
        const { hue, whiteness, blackness } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_1__.rgbToHwb)(color);
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
        const { cyan, magenta, yellow, black } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_1__.rgbToCmyk)(color);
        return `cmyk(${cyan}%, ${magenta}%, ${yellow}%, ${black}%)`;
    }
    /** Outputs the CMYK decimals string representation of a color */
    toCmykStringDecimal(color) {
        const { cyan, magenta, yellow, black } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_1__.rgbToCmyk)(color);
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
ColorAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ColorAdapter, factory: ColorAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1949:
/*!********************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/color/color-config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_COLOR": () => (/* binding */ DEFAULT_COLOR),
/* harmony export */   "MNJ_DEFAULT_COLOR_CONFIG_FACTORY": () => (/* binding */ MNJ_DEFAULT_COLOR_CONFIG_FACTORY),
/* harmony export */   "MNJ_COLOR_CONFIG_PROVIDER": () => (/* binding */ MNJ_COLOR_CONFIG_PROVIDER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ 5067);
/* harmony import */ var _color_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-spaces */ 6390);



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
        defaultPalette: Object.keys(_color_spaces__WEBPACK_IMPORTED_MODULE_1__.CSS_COLOR_NAMES).map((c) => ({
            title: c,
            color: (0,_color__WEBPACK_IMPORTED_MODULE_0__.fromHex)(_color_spaces__WEBPACK_IMPORTED_MODULE_1__.CSS_COLOR_NAMES[c]),
            active: false,
        })),
    };
}
/** Injection token to be used to override the default options for color module. */
const MNJ_COLOR_CONFIG_PROVIDER = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mnj-color-default-options', {
    providedIn: 'root',
    factory: MNJ_DEFAULT_COLOR_CONFIG_FACTORY,
});


/***/ }),

/***/ 228:
/*!*************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/color/color-conversions.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgbToHsl": () => (/* binding */ rgbToHsl),
/* harmony export */   "rgbToHsv": () => (/* binding */ rgbToHsv),
/* harmony export */   "rgbToHwb": () => (/* binding */ rgbToHwb),
/* harmony export */   "rgbToCmyk": () => (/* binding */ rgbToCmyk),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "hslToHsv": () => (/* binding */ hslToHsv),
/* harmony export */   "hsvToHsl": () => (/* binding */ hsvToHsl),
/* harmony export */   "hsvToRgb": () => (/* binding */ hsvToRgb),
/* harmony export */   "hsvToHwb": () => (/* binding */ hsvToHwb),
/* harmony export */   "hwbToRgb": () => (/* binding */ hwbToRgb),
/* harmony export */   "hwbToHsv": () => (/* binding */ hwbToHsv),
/* harmony export */   "cmykToRgb": () => (/* binding */ cmykToRgb)
/* harmony export */ });
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


/***/ }),

/***/ 6390:
/*!********************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/color/color-spaces.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS_COLOR_NAMES": () => (/* binding */ CSS_COLOR_NAMES)
/* harmony export */ });
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


/***/ }),

/***/ 5067:
/*!*************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/color/color.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromRgb": () => (/* binding */ fromRgb),
/* harmony export */   "fromHsl": () => (/* binding */ fromHsl),
/* harmony export */   "fromHsv": () => (/* binding */ fromHsv),
/* harmony export */   "fromHwb": () => (/* binding */ fromHwb),
/* harmony export */   "fromCmyk": () => (/* binding */ fromCmyk),
/* harmony export */   "fromHex": () => (/* binding */ fromHex),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "saturate": () => (/* binding */ saturate),
/* harmony export */   "shade": () => (/* binding */ shade),
/* harmony export */   "calculateShades": () => (/* binding */ calculateShades),
/* harmony export */   "complementary": () => (/* binding */ complementary),
/* harmony export */   "splitComplementary": () => (/* binding */ splitComplementary),
/* harmony export */   "analogous": () => (/* binding */ analogous),
/* harmony export */   "triadic": () => (/* binding */ triadic),
/* harmony export */   "tetradic": () => (/* binding */ tetradic),
/* harmony export */   "square": () => (/* binding */ square),
/* harmony export */   "spinColor": () => (/* binding */ spinColor),
/* harmony export */   "getColorShade": () => (/* binding */ getColorShade),
/* harmony export */   "clamp": () => (/* binding */ clamp)
/* harmony export */ });
/* harmony import */ var _color_conversions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-conversions */ 228);
/* harmony import */ var _color_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-spaces */ 6390);


/** Builds a color object from Red, Green, Blue values */
function fromRgb({ red, green, blue }, alpha = 1) {
    const coercedRed = clamp(0, 255, red);
    const coercedGreen = clamp(0, 255, green);
    const coercedBlue = clamp(0, 255, blue);
    const { hue, saturation: saturation, lightness } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)({
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
function fromHsl({ hue, saturation, lightness }, alpha = 1) {
    const coercedHue = clamp(0, 359, hue);
    const coercedSat = clamp(0, 100, saturation);
    const coercedLightness = clamp(0, 100, lightness);
    const { red, green, blue } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.hslToRgb)({ hue: coercedHue, saturation: coercedSat, lightness: coercedLightness });
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
    const { red, green, blue } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.hsvToRgb)({ hue: coercedHue, saturation: coercedSat, value: coercedValue });
    const { hue: hslHue, saturation: hslSat, lightness: hslLightness } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.hsvToHsl)({
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
    const rgb = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.hwbToRgb)({ hue: coercedHue, whiteness: coercedWhiteness, blackness: coercedBlackness });
    const hsl = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(rgb);
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
    const { red, green, blue } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.cmykToRgb)({
        cyan: coercedCyan,
        magenta: coercedMagenta,
        yellow: coercedYellow,
        black: coercedBlack,
    });
    const { hue, saturation, lightness } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)({ red, green, blue });
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
    const { hue, saturation, lightness } = (0,_color_conversions__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)({ red, green, blue });
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
function fromString(colorString) {
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
    const cssColorName = Object.keys(_color_spaces__WEBPACK_IMPORTED_MODULE_1__.CSS_COLOR_NAMES).find((c) => c.toLowerCase() === colorString.toLowerCase());
    if (cssColorName) {
        return fromHex(_color_spaces__WEBPACK_IMPORTED_MODULE_1__.CSS_COLOR_NAMES[cssColorName]);
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
/**
 * Adds lightness to the color.
 * Amount is counted as a value betweeen -1 and 1, but accepts values between -100 and 100
 * @param amount The number of lightness to add
 * @param color The color to be modified
 */
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
/** Returns the amount of darkness of a given color in a scale of [50, 100, 200, ..., 900] */
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


/***/ }),

/***/ 8000:
/*!*************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/color/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "analogous": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.analogous),
/* harmony export */   "calculateShades": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.calculateShades),
/* harmony export */   "clamp": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   "complementary": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.complementary),
/* harmony export */   "fromCmyk": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromCmyk),
/* harmony export */   "fromHex": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromHex),
/* harmony export */   "fromHsl": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromHsl),
/* harmony export */   "fromHsv": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromHsv),
/* harmony export */   "fromHwb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromHwb),
/* harmony export */   "fromRgb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromRgb),
/* harmony export */   "fromString": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromString),
/* harmony export */   "getColorShade": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.getColorShade),
/* harmony export */   "saturate": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.saturate),
/* harmony export */   "shade": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.shade),
/* harmony export */   "spinColor": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.spinColor),
/* harmony export */   "splitComplementary": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.splitComplementary),
/* harmony export */   "square": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.square),
/* harmony export */   "tetradic": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.tetradic),
/* harmony export */   "triadic": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.triadic),
/* harmony export */   "ColorAdapter": () => (/* reexport safe */ _color_adapter__WEBPACK_IMPORTED_MODULE_1__.ColorAdapter),
/* harmony export */   "DEFAULT_COLOR": () => (/* reexport safe */ _color_config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_COLOR),
/* harmony export */   "MNJ_COLOR_CONFIG_PROVIDER": () => (/* reexport safe */ _color_config__WEBPACK_IMPORTED_MODULE_2__.MNJ_COLOR_CONFIG_PROVIDER),
/* harmony export */   "MNJ_DEFAULT_COLOR_CONFIG_FACTORY": () => (/* reexport safe */ _color_config__WEBPACK_IMPORTED_MODULE_2__.MNJ_DEFAULT_COLOR_CONFIG_FACTORY),
/* harmony export */   "cmykToRgb": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.cmykToRgb),
/* harmony export */   "hexToRgb": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.hexToRgb),
/* harmony export */   "hslToHsv": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.hslToHsv),
/* harmony export */   "hslToRgb": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.hslToRgb),
/* harmony export */   "hsvToHsl": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.hsvToHsl),
/* harmony export */   "hsvToHwb": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.hsvToHwb),
/* harmony export */   "hsvToRgb": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.hsvToRgb),
/* harmony export */   "hwbToHsv": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.hwbToHsv),
/* harmony export */   "hwbToRgb": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.hwbToRgb),
/* harmony export */   "rgbToCmyk": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.rgbToCmyk),
/* harmony export */   "rgbToHex": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.rgbToHex),
/* harmony export */   "rgbToHsl": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.rgbToHsl),
/* harmony export */   "rgbToHsv": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.rgbToHsv),
/* harmony export */   "rgbToHwb": () => (/* reexport safe */ _color_conversions__WEBPACK_IMPORTED_MODULE_3__.rgbToHwb),
/* harmony export */   "CSS_COLOR_NAMES": () => (/* reexport safe */ _color_spaces__WEBPACK_IMPORTED_MODULE_4__.CSS_COLOR_NAMES)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ 5067);
/* harmony import */ var _color_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-adapter */ 7842);
/* harmony import */ var _color_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-config */ 1949);
/* harmony import */ var _color_conversions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-conversions */ 228);
/* harmony import */ var _color_spaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-spaces */ 6390);







/***/ }),

/***/ 8757:
/*!************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/colorpicker-animations.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mnjColorpickerAnimations": () => (/* binding */ mnjColorpickerAnimations)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7175);

/**
 * Animations used by the colorpicker.
 * @docs-private
 */
const mnjColorpickerAnimations = {
    /** Transforms the height of the colorpicker's panel. */
    transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('transformPanel', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(1, 0.8)',
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(1, 1)',
        }))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))),
    ]),
    /** Fades in the content of the panel. */
    fadeInColorPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInColorPanel', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 })),
        // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')),
    ]),
};


/***/ }),

/***/ 7518:
/*!*******************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/colorpicker-input.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MNJ_COLORPICKER_VALUE_ACCESSOR": () => (/* binding */ MNJ_COLORPICKER_VALUE_ACCESSOR),
/* harmony export */   "MNJ_COLORPICKER_VALIDATORS": () => (/* binding */ MNJ_COLORPICKER_VALIDATORS),
/* harmony export */   "MnjColorpickerInputEvent": () => (/* binding */ MnjColorpickerInputEvent),
/* harmony export */   "MnjColorpickerInput": () => (/* binding */ MnjColorpickerInput)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var _color_color_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color/color-config */ 1949);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color/color-adapter */ 7842);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);










/** @docs-private */
const MNJ_COLORPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => MnjColorpickerInput),
    multi: true,
};
/** @docs-private */
const MNJ_COLORPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => MnjColorpickerInput),
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
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.colorInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Emits when the value changes (either due to user input or programmatic change). */
        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Emits when the internal state has changed */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this._onTouched = () => { };
        this._cvaOnChange = () => { };
        this._validatorOnChange = () => { };
        this._colorpickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        this._colorpickerConfigurationSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
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
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
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
        const isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW;
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
MnjColorpickerInput.ɵfac = function MnjColorpickerInput_Factory(t) { return new (t || MnjColorpickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_1__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_color_color_config__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLOR_CONFIG_PROVIDER), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, 8)); };
MnjColorpickerInput.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MnjColorpickerInput, selectors: [["input", "mnjColorpicker", ""]], hostAttrs: ["aria-haspopup", "_colorpicker ? \"dialog\" : null"], hostVars: 2, hostBindings: function MnjColorpickerInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function MnjColorpickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MnjColorpickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MnjColorpickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MnjColorpickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-owns", (ctx._colorpicker == null ? null : ctx._colorpicker.opened) && ctx._colorpicker.id || null);
    } }, inputs: { mnjColorpicker: "mnjColorpicker", value: "value", disabled: "disabled" }, outputs: { colorChange: "colorChange", colorInput: "colorInput" }, exportAs: ["mnjColorpickerInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            MNJ_COLORPICKER_VALUE_ACCESSOR,
            MNJ_COLORPICKER_VALIDATORS,
            { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 1733:
/*!******************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/colorpicker-intl.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjColorpickerIntl": () => (/* binding */ MnjColorpickerIntl)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


/** Colorpicker data that requires internationalization. */
class MnjColorpickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
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
MnjColorpickerIntl.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MnjColorpickerIntl, factory: MnjColorpickerIntl.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3541:
/*!********************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/colorpicker-toggle.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjColorpickerToggleIcon": () => (/* binding */ MnjColorpickerToggleIcon),
/* harmony export */   "MnjColorpickerToggle": () => (/* binding */ MnjColorpickerToggle)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _colorpicker_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorpicker-intl */ 1733);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);






const _c0 = ["button"];
function MnjColorpickerToggle__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = [[["", "mnjColorpickerToggleIcon", ""]]];
const _c2 = ["[mnjColorpickerToggleIcon]"];
/** Can be used to override the icon of a `matColorpickerToggle`. */
class MnjColorpickerToggleIcon {
}
MnjColorpickerToggleIcon.ɵfac = function MnjColorpickerToggleIcon_Factory(t) { return new (t || MnjColorpickerToggleIcon)(); };
MnjColorpickerToggleIcon.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MnjColorpickerToggleIcon, selectors: [["", "mnjColorpickerToggleIcon", ""]] });
class MnjColorpickerToggle {
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
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
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
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
        const colorpickerStateChanged = this.colorpicker ? this.colorpicker._stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
        const inputStateChanged = this.colorpicker && this.colorpicker._colorpickerInput ? this.colorpicker._colorpickerInput._stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
        const colorpickerToggled = this.colorpicker
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this.colorpicker.openedStream, this.colorpicker.closedStream)
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
        this._stateChanges.unsubscribe();
        this._stateChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this._intl.changes, colorpickerStateChanged, inputStateChanged, colorpickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MnjColorpickerToggle.ɵfac = function MnjColorpickerToggle_Factory(t) { return new (t || MnjColorpickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_colorpicker_intl__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex')); };
MnjColorpickerToggle.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MnjColorpickerToggle, selectors: [["mnj-colorpicker-toggle"]], contentQueries: function MnjColorpickerToggle_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MnjColorpickerToggleIcon, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MnjColorpickerToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mnj-colorpicker-toggle"], hostVars: 8, hostBindings: function MnjColorpickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MnjColorpickerToggle_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("data-mnj-color-panel", ctx.colorpicker ? ctx.colorpicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mnj-colorpicker-toggle-active", ctx.colorpicker && ctx.colorpicker.opened)("mnj-accent", ctx.colorpicker && ctx.colorpicker.color === "accent")("mnj-warn", ctx.colorpicker && ctx.colorpicker.color === "warn");
    } }, inputs: { colorpicker: ["for", "colorpicker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["mnjColorpickerToggle"], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mnj-colorpicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mnj-colorpicker-toggle-default-icon"], ["d", "M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"]], template: function MnjColorpickerToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MnjColorpickerToggle_Template_button_click_0_listener($event) { return ctx._open($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MnjColorpickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-haspopup", ctx.colorpicker ? "dialog" : null)("aria-label", ctx._intl.openColorPickerLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._customIcon);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,\n.mat-form-field-appearance-legacy .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon {\n  width: 1em;\n}\n\n.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,\n.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon {\n  display: block;\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mnj-colorpicker-toggle-default-icon,\n.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mnj-colorpicker-toggle-default-icon {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9ycGlja2VyLXRvZ2dsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJOztFQUNFLFVBQUE7QUFETjs7QUFTSTs7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFMTjs7QUFRSTs7RUFDRSxZQUFBO0FBTE4iLCJmaWxlIjoiY29sb3JwaWNrZXItdG9nZ2xlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAubW5qLWNvbG9ycGlja2VyLXRvZ2dsZS1kZWZhdWx0LWljb24ge1xuICAgICAgd2lkdGg6IDFlbTtcbiAgICB9XG4gIH1cbn1cblxuLm1hdC1mb3JtLWZpZWxkOm5vdCgubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kpIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgLm1uai1jb2xvcnBpY2tlci10b2dnbGUtZGVmYXVsdC1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB9XG5cbiAgICAubWF0LWljb24tYnV0dG9uIC5tbmotY29sb3JwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvbiB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 8625:
/*!********************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/colorpicker.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjColorpickerModule": () => (/* binding */ MnjColorpickerModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ 912);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _color_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-panel */ 1033);
/* harmony import */ var _colorpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorpicker */ 5309);
/* harmony import */ var _colorpicker_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorpicker-input */ 7518);
/* harmony import */ var _colorpicker_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorpicker-intl */ 1733);
/* harmony import */ var _colorpicker_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorpicker-toggle */ 3541);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ 2295);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views */ 99);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
















class MnjColorpickerModule {
}
MnjColorpickerModule.ɵfac = function MnjColorpickerModule_Factory(t) { return new (t || MnjColorpickerModule)(); };
MnjColorpickerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MnjColorpickerModule });
MnjColorpickerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_colorpicker_intl__WEBPACK_IMPORTED_MODULE_3__.MnjColorpickerIntl, _colorpicker__WEBPACK_IMPORTED_MODULE_1__.MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkScrollableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MnjColorpickerModule, { declarations: [_colorpicker_toggle__WEBPACK_IMPORTED_MODULE_4__.MnjColorpickerToggle,
        _colorpicker_toggle__WEBPACK_IMPORTED_MODULE_4__.MnjColorpickerToggleIcon,
        _colorpicker__WEBPACK_IMPORTED_MODULE_1__.MnjColorpicker,
        _colorpicker__WEBPACK_IMPORTED_MODULE_1__.MnjColorpickerContent,
        _colorpicker_input__WEBPACK_IMPORTED_MODULE_2__.MnjColorpickerInput,
        _color_panel__WEBPACK_IMPORTED_MODULE_0__.MnjColorPanel,
        _color_panel__WEBPACK_IMPORTED_MODULE_0__.MnjColorPanelHeader,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjAlphaSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjHueSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjSaturationSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjInputSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjGridSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjPipetteSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjPreviewSwatch,
        _views__WEBPACK_IMPORTED_MODULE_6__.MnjChromePickerView,
        _views__WEBPACK_IMPORTED_MODULE_6__.MnjPalettePickerView,
        _views__WEBPACK_IMPORTED_MODULE_6__.MnjArmoniesPickerView,
        _views__WEBPACK_IMPORTED_MODULE_6__.MnjScanPickerView], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule], exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkScrollableModule,
        _colorpicker_toggle__WEBPACK_IMPORTED_MODULE_4__.MnjColorpickerToggle,
        _colorpicker_toggle__WEBPACK_IMPORTED_MODULE_4__.MnjColorpickerToggleIcon,
        _colorpicker__WEBPACK_IMPORTED_MODULE_1__.MnjColorpicker,
        _colorpicker__WEBPACK_IMPORTED_MODULE_1__.MnjColorpickerContent,
        _colorpicker_input__WEBPACK_IMPORTED_MODULE_2__.MnjColorpickerInput,
        _color_panel__WEBPACK_IMPORTED_MODULE_0__.MnjColorPanel,
        _color_panel__WEBPACK_IMPORTED_MODULE_0__.MnjColorPanelHeader,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjAlphaSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjHueSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjSaturationSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjInputSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjGridSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjPipetteSelector,
        _selectors__WEBPACK_IMPORTED_MODULE_5__.MnjPreviewSwatch,
        _views__WEBPACK_IMPORTED_MODULE_6__.MnjChromePickerView,
        _views__WEBPACK_IMPORTED_MODULE_6__.MnjPalettePickerView,
        _views__WEBPACK_IMPORTED_MODULE_6__.MnjArmoniesPickerView,
        _views__WEBPACK_IMPORTED_MODULE_6__.MnjScanPickerView] }); })();


/***/ }),

/***/ 5309:
/*!*************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/colorpicker.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY": () => (/* binding */ MNJ_COLORPICKER_SCROLL_STRATEGY),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MnjColorpickerContent": () => (/* binding */ MnjColorpickerContent),
/* harmony export */   "MnjColorpicker": () => (/* binding */ MnjColorpicker)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _colorpicker_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorpicker-animations */ 8757);
/* harmony import */ var _color_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-panel */ 1033);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color/color-adapter */ 7842);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);


















/** Used to generate a unique ID for each colorpicker instance. */
let colorpickerUid = 0;
/** Injection token that determines the scroll handling while the color panel is open. */
const MNJ_COLORPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('mnj-colorpicker-scroll-strategy');
/** @docs-private */
function MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MNJ_COLORPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay],
    useFactory: MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MnjColorpickerContent.
/** @docs-private */
class MnjColorpickerContentBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MnjColorpickerContentMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinColor)(MnjColorpickerContentBase);
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
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
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
MnjColorpickerContent.ɵfac = function MnjColorpickerContent_Factory(t) { return new (t || MnjColorpickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
MnjColorpickerContent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MnjColorpickerContent, selectors: [["mnj-colorpicker-content"]], hostAttrs: [1, "mnj-colorpicker-content"], hostVars: 3, hostBindings: function MnjColorpickerContent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MnjColorpickerContent_animation_transformPanel_done_HostBindingHandler() { return ctx._animationDone.next(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mnj-colorpicker-content-touch", ctx.colorpicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["mnjColorpickerContent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 10, consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "color", "displayFormat", "startView", "startColor", "showAlpha", "palette", "selected", "_userSelection"]], template: function MnjColorpickerContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mnj-color-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("_userSelection", function MnjColorpickerContent_Template_mnj_color_panel__userSelection_0_listener($event) { return ctx._handleUserSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.colorpicker.id)("ngClass", ctx.colorpicker.panelClass)("color", ctx.colorpicker.color)("displayFormat", ctx.colorpicker.displayFormat)("startView", ctx.colorpicker.startView)("startColor", ctx.colorpicker.startColor)("showAlpha", ctx.colorpicker.showAlpha)("palette", ctx.colorpicker.palette)("selected", ctx._getSelected())("@fadeInColorPanel", "enter");
    } }, directives: [_color_panel__WEBPACK_IMPORTED_MODULE_1__.MnjColorPanel, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.CdkTrapFocus, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass], styles: [".mnj-colorpicker-content {\n  display: flex;\n  border-radius: 4px;\n  flex-direction: column;\n}\n.mnj-colorpicker-content .mnj-color-panel {\n  height: 400px;\n  width: 350px;\n}\n.mnj-colorpicker-content-touch {\n  display: flex;\n  flex-direction: column;\n  max-height: 80vh;\n  overflow: auto;\n  margin: -24px;\n}\n.mnj-colorpicker-content-touch .mnj-color-panel {\n  min-width: 250px;\n  min-height: 312px;\n  max-width: 750px;\n  max-height: 788px;\n}\n@media all and (orientation: landscape) {\n  .mnj-colorpicker-content-touch .mnj-color-panel {\n    width: 64vh;\n    height: 80vh;\n  }\n}\n@media all and (orientation: portrait) {\n  .mnj-colorpicker-content-touch .mnj-color-panel {\n    width: 80vw;\n    height: 100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9ycGlja2VyLWNvbnRlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBWEY7QUFhRTtFQUNFLGFBakJ1QztFQWtCdkMsWUFuQnNDO0FBUTFDO0FBZUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBYkY7QUFlRTtFQUNFLGdCQXpCOEI7RUEwQjlCLGlCQXpCK0I7RUEwQi9CLGdCQXpCOEI7RUEwQjlCLGlCQXpCK0I7QUFZbkM7QUFpQkE7RUFDRTtJQUNFLFdBdENvQztJQXVDcEMsWUF0Q3FDO0VBd0J2QztBQUNGO0FBaUJBO0VBQ0U7SUFDRSxXQTNDbUM7SUE0Q25DLGFBM0NvQztFQTRCdEM7QUFDRiIsImZpbGUiOiJjb2xvcnBpY2tlci1jb250ZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW5qLWNvbG9ycGlja2VyLW5vbi10b3VjaC1jb250ZW50LXdpZHRoOiAzNTBweDtcbiRtbmotY29sb3JwaWNrZXItbm9uLXRvdWNoLWNvbnRlbnQtaGVpZ2h0OiA0MDBweDtcblxuJG1uai1jb2xvcnBpY2tlci10b3VjaC1sYW5kc2NhcGUtd2lkdGg6IDY0dmg7XG4kbW5qLWNvbG9ycGlja2VyLXRvdWNoLWxhbmRzY2FwZS1oZWlnaHQ6IDgwdmg7XG4kbW5qLWNvbG9ycGlja2VyLXRvdWNoLXBvcnRyYWl0LXdpZHRoOiA4MHZ3O1xuJG1uai1jb2xvcnBpY2tlci10b3VjaC1wb3J0cmFpdC1oZWlnaHQ6IDEwMHZ3O1xuJG1uai1jb2xvcnBpY2tlci10b3VjaC1taW4td2lkdGg6IDI1MHB4O1xuJG1uai1jb2xvcnBpY2tlci10b3VjaC1taW4taGVpZ2h0OiAzMTJweDtcbiRtbmotY29sb3JwaWNrZXItdG91Y2gtbWF4LXdpZHRoOiA3NTBweDtcbiRtbmotY29sb3JwaWNrZXItdG91Y2gtbWF4LWhlaWdodDogNzg4cHg7XG5cbi5tbmotY29sb3JwaWNrZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAubW5qLWNvbG9yLXBhbmVsIHtcbiAgICBoZWlnaHQ6ICRtbmotY29sb3JwaWNrZXItbm9uLXRvdWNoLWNvbnRlbnQtaGVpZ2h0O1xuICAgIHdpZHRoOiAkbW5qLWNvbG9ycGlja2VyLW5vbi10b3VjaC1jb250ZW50LXdpZHRoO1xuICB9XG59XG5cbi5tbmotY29sb3JwaWNrZXItY29udGVudC10b3VjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vIG1ha2Ugc3VyZSB0aGUgZGlhbG9nIHNjcm9sbHMgcmF0aGVyIHRoYW4gYmVpbmcgY3JvcHBlZCBvbiBsdWRpY3JvdXNseSBzbWFsbCBzY3JlZW5zXG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW46IC0yNHB4O1xuXG4gIC5tbmotY29sb3ItcGFuZWwge1xuICAgIG1pbi13aWR0aDogJG1uai1jb2xvcnBpY2tlci10b3VjaC1taW4td2lkdGg7XG4gICAgbWluLWhlaWdodDogJG1uai1jb2xvcnBpY2tlci10b3VjaC1taW4taGVpZ2h0O1xuICAgIG1heC13aWR0aDogJG1uai1jb2xvcnBpY2tlci10b3VjaC1tYXgtd2lkdGg7XG4gICAgbWF4LWhlaWdodDogJG1uai1jb2xvcnBpY2tlci10b3VjaC1tYXgtaGVpZ2h0O1xuICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5tbmotY29sb3JwaWNrZXItY29udGVudC10b3VjaCAubW5qLWNvbG9yLXBhbmVsIHtcbiAgICB3aWR0aDogJG1uai1jb2xvcnBpY2tlci10b3VjaC1sYW5kc2NhcGUtd2lkdGg7XG4gICAgaGVpZ2h0OiAkbW5qLWNvbG9ycGlja2VyLXRvdWNoLWxhbmRzY2FwZS1oZWlnaHQ7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubW5qLWNvbG9ycGlja2VyLWNvbnRlbnQtdG91Y2ggLm1uai1jb2xvci1wYW5lbCB7XG4gICAgd2lkdGg6ICRtbmotY29sb3JwaWNrZXItdG91Y2gtcG9ydHJhaXQtd2lkdGg7XG4gICAgaGVpZ2h0OiAkbW5qLWNvbG9ycGlja2VyLXRvdWNoLXBvcnRyYWl0LWhlaWdodDtcbiAgfVxufVxuIl19 */"], encapsulation: 2, data: { animation: [_colorpicker_animations__WEBPACK_IMPORTED_MODULE_0__.mnjColorpickerAnimations.transformPanel, _colorpicker_animations__WEBPACK_IMPORTED_MODULE_0__.mnjColorpickerAnimations.fadeInColorPanel] }, changeDetection: 0 });
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
        this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        this._touchUi = false;
        /** Emits when the colorpicker has been opened. */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Emits when the colorpicker has been closed. */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this._opened = false;
        /** The id for the colorpicker color panel. */
        this.id = `mnj-colorpicker-${colorpickerUid++}`;
        this._validSelected = null;
        /** The element that was focused before the colorpicker was opened. */
        this._focusedElementBeforeOpen = null;
        /** Emits when the colorpicker is disabled. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        /** Emits when the colorpicker formmatting inputs (showAlpha and displayFormat) changes. */
        this._configurationChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        /** Emits new selected color when selected color changes. */
        this._selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this._scrollStrategy = scrollStrategy;
    }
    /** Color palette to use on the colorpicker's color panel. */
    get color() {
        return this._color || (this._colorpickerInput ? this._colorpickerInput.getThemePalette() : undefined);
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
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(value);
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
        this._touchUi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(value);
    }
    /** Whether the colorpicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this._colorpickerInput ? this._colorpickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(value);
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
        (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(value) ? this.open() : this.close();
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
            instance._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => this._destroyPopup());
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
        if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
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
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.ComponentPortal(MnjColorpickerContent, this._viewContainerRef);
        this._destroyPopup();
        this._createPopup();
        this._popupComponentRef = this._popupRef.attach(portal);
        this._forwardContentValues(this._popupComponentRef.instance);
        // Update the position once the calendar has rendered.
        this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
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
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayConfig({
            positionStrategy: this._setConnectedPositions(positionStrategy),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mnj-colorpicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)((event) => {
            // Closing on alt + up is only valid when there's an input associated with the colorpicker.
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.ESCAPE || (this._colorpickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.UP_ARROW);
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
            this._setConnectedPositions(this._popupRef.getConfig().positionStrategy);
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
MnjColorpicker.ɵfac = function MnjColorpicker_Factory(t) { return new (t || MnjColorpicker)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MNJ_COLORPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_2__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT, 8)); };
MnjColorpicker.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MnjColorpicker, selectors: [["mnj-colorpicker"]], inputs: { color: "color", startColor: "startColor", startView: "startView", palette: "palette", showAlpha: "showAlpha", displayFormat: "displayFormat", touchUi: "touchUi", disabled: "disabled", xPosition: "xPosition", yPosition: "yPosition", panelClass: "panelClass", opened: "opened" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["mnjColorpicker"], decls: 0, vars: 0, template: function MnjColorpicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1019:
/*!*******************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseColorpickerView": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.BaseColorpickerView),
/* harmony export */   "BaseSelector": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.BaseSelector),
/* harmony export */   "CSS_COLOR_NAMES": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.CSS_COLOR_NAMES),
/* harmony export */   "ColorAdapter": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ColorAdapter),
/* harmony export */   "ColorPickerView": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ColorPickerView),
/* harmony export */   "DEFAULT_COLOR": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_COLOR),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLORPICKER_SCROLL_STRATEGY),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MNJ_COLORPICKER_VALIDATORS": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLORPICKER_VALIDATORS),
/* harmony export */   "MNJ_COLORPICKER_VALUE_ACCESSOR": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLORPICKER_VALUE_ACCESSOR),
/* harmony export */   "MNJ_COLOR_CONFIG_PROVIDER": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLOR_CONFIG_PROVIDER),
/* harmony export */   "MNJ_DEFAULT_COLOR_CONFIG_FACTORY": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MNJ_DEFAULT_COLOR_CONFIG_FACTORY),
/* harmony export */   "MnjAlphaSelector": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjAlphaSelector),
/* harmony export */   "MnjArmoniesPickerView": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjArmoniesPickerView),
/* harmony export */   "MnjChromePickerView": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjChromePickerView),
/* harmony export */   "MnjColorPanel": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorPanel),
/* harmony export */   "MnjColorPanelHeader": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorPanelHeader),
/* harmony export */   "MnjColorpicker": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorpicker),
/* harmony export */   "MnjColorpickerContent": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerContent),
/* harmony export */   "MnjColorpickerInput": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerInput),
/* harmony export */   "MnjColorpickerInputEvent": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerInputEvent),
/* harmony export */   "MnjColorpickerModule": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerModule),
/* harmony export */   "MnjColorpickerToggle": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerToggle),
/* harmony export */   "MnjColorpickerToggleIcon": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjColorpickerToggleIcon),
/* harmony export */   "MnjGridSelector": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjGridSelector),
/* harmony export */   "MnjHueSelector": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjHueSelector),
/* harmony export */   "MnjInputSelector": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjInputSelector),
/* harmony export */   "MnjPalettePickerView": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjPalettePickerView),
/* harmony export */   "MnjPipetteSelector": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjPipetteSelector),
/* harmony export */   "MnjPreviewSwatch": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjPreviewSwatch),
/* harmony export */   "MnjSaturationSelector": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjSaturationSelector),
/* harmony export */   "MnjScanPickerView": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MnjScanPickerView),
/* harmony export */   "activeCapturingEventOptions": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.activeCapturingEventOptions),
/* harmony export */   "activeEventListenerOptions": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.activeEventListenerOptions),
/* harmony export */   "analogous": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.analogous),
/* harmony export */   "calculateShades": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.calculateShades),
/* harmony export */   "clamp": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   "cmykToRgb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.cmykToRgb),
/* harmony export */   "complementary": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.complementary),
/* harmony export */   "fromCmyk": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.fromCmyk),
/* harmony export */   "fromHex": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.fromHex),
/* harmony export */   "fromHsl": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.fromHsl),
/* harmony export */   "fromHsv": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.fromHsv),
/* harmony export */   "fromHwb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.fromHwb),
/* harmony export */   "fromRgb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.fromRgb),
/* harmony export */   "fromString": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.fromString),
/* harmony export */   "getColorShade": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.getColorShade),
/* harmony export */   "getContainerSize": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.getContainerSize),
/* harmony export */   "getPointerPositionFromEvent": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.getPointerPositionFromEvent),
/* harmony export */   "getPointerPositionInContainer": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.getPointerPositionInContainer),
/* harmony export */   "hexToRgb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.hexToRgb),
/* harmony export */   "hslToHsv": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.hslToHsv),
/* harmony export */   "hslToRgb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.hslToRgb),
/* harmony export */   "hsvToHsl": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.hsvToHsl),
/* harmony export */   "hsvToHwb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.hsvToHwb),
/* harmony export */   "hsvToRgb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.hsvToRgb),
/* harmony export */   "hwbToHsv": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.hwbToHsv),
/* harmony export */   "hwbToRgb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.hwbToRgb),
/* harmony export */   "isSamePosition": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.isSamePosition),
/* harmony export */   "mnjColorpickerAnimations": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.mnjColorpickerAnimations),
/* harmony export */   "passiveEventListenerOptions": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.passiveEventListenerOptions),
/* harmony export */   "rgbToCmyk": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.rgbToCmyk),
/* harmony export */   "rgbToHex": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.rgbToHex),
/* harmony export */   "rgbToHsl": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl),
/* harmony export */   "rgbToHsv": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv),
/* harmony export */   "rgbToHwb": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.rgbToHwb),
/* harmony export */   "saturate": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.saturate),
/* harmony export */   "shade": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.shade),
/* harmony export */   "spinColor": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.spinColor),
/* harmony export */   "splitComplementary": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.splitComplementary),
/* harmony export */   "square": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.square),
/* harmony export */   "tetradic": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.tetradic),
/* harmony export */   "triadic": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.triadic)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 1289);



/***/ }),

/***/ 1289:
/*!************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/public-api.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS_COLOR_NAMES": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.CSS_COLOR_NAMES),
/* harmony export */   "ColorAdapter": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.ColorAdapter),
/* harmony export */   "DEFAULT_COLOR": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_COLOR),
/* harmony export */   "MNJ_COLOR_CONFIG_PROVIDER": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.MNJ_COLOR_CONFIG_PROVIDER),
/* harmony export */   "MNJ_DEFAULT_COLOR_CONFIG_FACTORY": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.MNJ_DEFAULT_COLOR_CONFIG_FACTORY),
/* harmony export */   "analogous": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.analogous),
/* harmony export */   "calculateShades": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.calculateShades),
/* harmony export */   "clamp": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   "cmykToRgb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.cmykToRgb),
/* harmony export */   "complementary": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.complementary),
/* harmony export */   "fromCmyk": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromCmyk),
/* harmony export */   "fromHex": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromHex),
/* harmony export */   "fromHsl": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromHsl),
/* harmony export */   "fromHsv": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromHsv),
/* harmony export */   "fromHwb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromHwb),
/* harmony export */   "fromRgb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromRgb),
/* harmony export */   "fromString": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.fromString),
/* harmony export */   "getColorShade": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.getColorShade),
/* harmony export */   "hexToRgb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.hexToRgb),
/* harmony export */   "hslToHsv": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.hslToHsv),
/* harmony export */   "hslToRgb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.hslToRgb),
/* harmony export */   "hsvToHsl": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.hsvToHsl),
/* harmony export */   "hsvToHwb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.hsvToHwb),
/* harmony export */   "hsvToRgb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.hsvToRgb),
/* harmony export */   "hwbToHsv": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.hwbToHsv),
/* harmony export */   "hwbToRgb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.hwbToRgb),
/* harmony export */   "rgbToCmyk": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.rgbToCmyk),
/* harmony export */   "rgbToHex": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.rgbToHex),
/* harmony export */   "rgbToHsl": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl),
/* harmony export */   "rgbToHsv": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv),
/* harmony export */   "rgbToHwb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.rgbToHwb),
/* harmony export */   "saturate": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.saturate),
/* harmony export */   "shade": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.shade),
/* harmony export */   "spinColor": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.spinColor),
/* harmony export */   "splitComplementary": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.splitComplementary),
/* harmony export */   "square": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.square),
/* harmony export */   "tetradic": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.tetradic),
/* harmony export */   "triadic": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_0__.triadic),
/* harmony export */   "MnjColorPanel": () => (/* reexport safe */ _color_panel__WEBPACK_IMPORTED_MODULE_1__.MnjColorPanel),
/* harmony export */   "MnjColorPanelHeader": () => (/* reexport safe */ _color_panel__WEBPACK_IMPORTED_MODULE_1__.MnjColorPanelHeader),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY": () => (/* reexport safe */ _colorpicker__WEBPACK_IMPORTED_MODULE_2__.MNJ_COLORPICKER_SCROLL_STRATEGY),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY": () => (/* reexport safe */ _colorpicker__WEBPACK_IMPORTED_MODULE_2__.MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* reexport safe */ _colorpicker__WEBPACK_IMPORTED_MODULE_2__.MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MnjColorpicker": () => (/* reexport safe */ _colorpicker__WEBPACK_IMPORTED_MODULE_2__.MnjColorpicker),
/* harmony export */   "MnjColorpickerContent": () => (/* reexport safe */ _colorpicker__WEBPACK_IMPORTED_MODULE_2__.MnjColorpickerContent),
/* harmony export */   "mnjColorpickerAnimations": () => (/* reexport safe */ _colorpicker_animations__WEBPACK_IMPORTED_MODULE_3__.mnjColorpickerAnimations),
/* harmony export */   "MNJ_COLORPICKER_VALIDATORS": () => (/* reexport safe */ _colorpicker_input__WEBPACK_IMPORTED_MODULE_4__.MNJ_COLORPICKER_VALIDATORS),
/* harmony export */   "MNJ_COLORPICKER_VALUE_ACCESSOR": () => (/* reexport safe */ _colorpicker_input__WEBPACK_IMPORTED_MODULE_4__.MNJ_COLORPICKER_VALUE_ACCESSOR),
/* harmony export */   "MnjColorpickerInput": () => (/* reexport safe */ _colorpicker_input__WEBPACK_IMPORTED_MODULE_4__.MnjColorpickerInput),
/* harmony export */   "MnjColorpickerInputEvent": () => (/* reexport safe */ _colorpicker_input__WEBPACK_IMPORTED_MODULE_4__.MnjColorpickerInputEvent),
/* harmony export */   "MnjColorpickerToggle": () => (/* reexport safe */ _colorpicker_toggle__WEBPACK_IMPORTED_MODULE_5__.MnjColorpickerToggle),
/* harmony export */   "MnjColorpickerToggleIcon": () => (/* reexport safe */ _colorpicker_toggle__WEBPACK_IMPORTED_MODULE_5__.MnjColorpickerToggleIcon),
/* harmony export */   "MnjColorpickerModule": () => (/* reexport safe */ _colorpicker_module__WEBPACK_IMPORTED_MODULE_6__.MnjColorpickerModule),
/* harmony export */   "BaseSelector": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.BaseSelector),
/* harmony export */   "MnjAlphaSelector": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.MnjAlphaSelector),
/* harmony export */   "MnjGridSelector": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.MnjGridSelector),
/* harmony export */   "MnjHueSelector": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.MnjHueSelector),
/* harmony export */   "MnjInputSelector": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.MnjInputSelector),
/* harmony export */   "MnjPipetteSelector": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.MnjPipetteSelector),
/* harmony export */   "MnjPreviewSwatch": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.MnjPreviewSwatch),
/* harmony export */   "MnjSaturationSelector": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.MnjSaturationSelector),
/* harmony export */   "activeCapturingEventOptions": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.activeCapturingEventOptions),
/* harmony export */   "activeEventListenerOptions": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.activeEventListenerOptions),
/* harmony export */   "getContainerSize": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.getContainerSize),
/* harmony export */   "getPointerPositionFromEvent": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.getPointerPositionFromEvent),
/* harmony export */   "getPointerPositionInContainer": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.getPointerPositionInContainer),
/* harmony export */   "isSamePosition": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.isSamePosition),
/* harmony export */   "passiveEventListenerOptions": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_7__.passiveEventListenerOptions),
/* harmony export */   "BaseColorpickerView": () => (/* reexport safe */ _views__WEBPACK_IMPORTED_MODULE_8__.BaseColorpickerView),
/* harmony export */   "ColorPickerView": () => (/* reexport safe */ _views__WEBPACK_IMPORTED_MODULE_8__.ColorPickerView),
/* harmony export */   "MnjArmoniesPickerView": () => (/* reexport safe */ _views__WEBPACK_IMPORTED_MODULE_8__.MnjArmoniesPickerView),
/* harmony export */   "MnjChromePickerView": () => (/* reexport safe */ _views__WEBPACK_IMPORTED_MODULE_8__.MnjChromePickerView),
/* harmony export */   "MnjPalettePickerView": () => (/* reexport safe */ _views__WEBPACK_IMPORTED_MODULE_8__.MnjPalettePickerView),
/* harmony export */   "MnjScanPickerView": () => (/* reexport safe */ _views__WEBPACK_IMPORTED_MODULE_8__.MnjScanPickerView)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ 8000);
/* harmony import */ var _color_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-panel */ 1033);
/* harmony import */ var _colorpicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorpicker */ 5309);
/* harmony import */ var _colorpicker_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorpicker-animations */ 8757);
/* harmony import */ var _colorpicker_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorpicker-input */ 7518);
/* harmony import */ var _colorpicker_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorpicker-toggle */ 3541);
/* harmony import */ var _colorpicker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colorpicker.module */ 8625);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectors */ 2295);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views */ 99);











/***/ }),

/***/ 6723:
/*!********************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/alpha/alpha-selector.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjAlphaSelector": () => (/* binding */ MnjAlphaSelector)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color */ 5067);
/* harmony import */ var _base_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-selector */ 6191);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);









class MnjAlphaSelector extends _base_selector__WEBPACK_IMPORTED_MODULE_1__.BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.alphaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
            let xPosition = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 100, alpha);
            if (this._isRtl()) {
                xPosition = 100 - xPosition;
            }
            this.thumbPosition = { x: xPosition, y: 50 };
        }
        this._changeDetectorRef.markForCheck();
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x: pointerToContainerX } = (0,_base_selector__WEBPACK_IMPORTED_MODULE_1__.getPointerPositionInContainer)(pointerPos, container);
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
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.UP_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.LEFT_ARROW:
                newAlpha = newAlpha + (isRtl ? 0.01 : -0.01);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.DOWN_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.RIGHT_ARROW:
                newAlpha = newAlpha + (isRtl ? -0.01 : 0.01);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.HOME:
                newAlpha = 0;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.END:
                newAlpha = 1;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_UP:
                newAlpha = newAlpha + (isRtl ? 0.1 : -0.1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_DOWN:
                newAlpha = newAlpha + (isRtl ? -0.1 : 0.1);
                break;
            default:
                return;
        }
        newAlpha = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, newAlpha);
        const color = Object.assign(Object.assign({}, this.color), { alpha: newAlpha });
        this.alphaChange.emit(color);
    }
}
MnjAlphaSelector.ɵfac = function MnjAlphaSelector_Factory(t) { return new (t || MnjAlphaSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_2__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality)); };
MnjAlphaSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MnjAlphaSelector, selectors: [["mnj-alpha-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-alpha-selector"], hostVars: 1, hostBindings: function MnjAlphaSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MnjAlphaSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", 0);
    } }, outputs: { alphaChange: "alphaChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _base_selector__WEBPACK_IMPORTED_MODULE_1__.BaseSelector, useExisting: MnjAlphaSelector }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[1, "mnj-alpha-selector__gradient", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjAlphaSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.gradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.alphaThumbPos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle], styles: [".mnj-alpha-selector {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=\") repeat left center;\n}\n.mnj-alpha-selector__gradient {\n  height: 100%;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFscGhhLXNlbGVjdG9yLnNjc3MiLCIuLi9fc2VsZWN0b3ItY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx3TEFBQTtBQURGO0FBSUU7RUFDRSxZQUFBO0VBQ0Esa0JDSjJCO0FERS9CIiwiZmlsZSI6ImFscGhhLXNlbGVjdG9yLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zZWxlY3Rvci1jb21tb24nO1xuXG4ubW5qLWFscGhhLXNlbGVjdG9yIHtcbiAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBSTBsRVFWUW9VMlBjdlh2M1RBWWs0T3JxbW83TVo2U0RBbVQ3UUd4MEt4bHByd0FBdzlrYk1TdFZaNkFBQUFBQVNVVk9SSzVDWUlJPScpXG4gICAgcmVwZWF0IGxlZnQgY2VudGVyO1xuXG4gICZfX2dyYWRpZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogJGJhc2UtY29udGFpbmVyLWJvcmRlci1yYWRpdXM7XG4gIH1cbn1cbiIsIiRiYXNlLWNvbnRhaW5lci1oZWlnaHQ6IDhweDtcbiRiYXNlLWNvbnRhaW5lci10aHVtYi1zaXplOiAxOHB4O1xuJGJhc2UtY29udGFpbmVyLW1hcmdpbi10b3A6IDJweDtcbiRiYXNlLWNvbnRhaW5lci1tYXJnaW4tYm90dG9tOiAxMnB4O1xuJGJhc2UtY29udGFpbmVyLWJvcmRlci1yYWRpdXM6IDJweDtcbiJdfQ== */", ".mnj-colorpicker-selector {\n  border-radius: 2px;\n  cursor: pointer;\n  display: block;\n  height: 8px;\n  margin: 2px 0 12px;\n  position: relative;\n}\n.mnj-colorpicker-selector:focus {\n  outline: none;\n}\n.mnj-colorpicker-selector__thumb {\n  border: 2px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  height: 18px;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  width: 18px;\n}\n.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner {\n  border: 2px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: box-shadow 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner::after {\n  border: 1px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Utc2VsZWN0b3Iuc2NzcyIsIl9zZWxlY3Rvci1jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQ0M2QjtFREE3QixlQUFBO0VBQ0EsY0FBQTtFQUNBLFdDTnNCO0VET3RCLGtCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBS0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQ2xCMEI7RURtQjFCLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdDdEIwQjtBRG9CNUI7QUFJRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDZEQUFBO0VBQ0EsV0FBQTtBQUZKO0FBSUk7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBRk4iLCJmaWxlIjoiYmFzZS1zZWxlY3Rvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2VsZWN0b3ItY29tbW9uJztcblxuLm1uai1jb2xvcnBpY2tlci1zZWxlY3RvciB7XG4gIGJvcmRlci1yYWRpdXM6IHNlbGVjdG9yLWNvbW1vbi4kYmFzZS1jb250YWluZXItYm9yZGVyLXJhZGl1cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLWhlaWdodDtcbiAgbWFyZ2luOiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLW1hcmdpbi10b3AgMCBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLW1hcmdpbi1ib3R0b207XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5tbmotY29sb3JwaWNrZXItc2VsZWN0b3JfX3RodW1iIHtcbiAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IHNlbGVjdG9yLWNvbW1vbi4kYmFzZS1jb250YWluZXItdGh1bWItc2l6ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLXRodW1iLXNpemU7XG5cbiAgLm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9fdGh1bWJfX2lubmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIkYmFzZS1jb250YWluZXItaGVpZ2h0OiA4cHg7XG4kYmFzZS1jb250YWluZXItdGh1bWItc2l6ZTogMThweDtcbiRiYXNlLWNvbnRhaW5lci1tYXJnaW4tdG9wOiAycHg7XG4kYmFzZS1jb250YWluZXItbWFyZ2luLWJvdHRvbTogMTJweDtcbiRiYXNlLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzOiAycHg7XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 6191:
/*!*************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/base-selector.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPointerPositionFromEvent": () => (/* binding */ getPointerPositionFromEvent),
/* harmony export */   "isSamePosition": () => (/* binding */ isSamePosition),
/* harmony export */   "getContainerSize": () => (/* binding */ getContainerSize),
/* harmony export */   "getPointerPositionInContainer": () => (/* binding */ getPointerPositionInContainer),
/* harmony export */   "passiveEventListenerOptions": () => (/* binding */ passiveEventListenerOptions),
/* harmony export */   "activeEventListenerOptions": () => (/* binding */ activeEventListenerOptions),
/* harmony export */   "activeCapturingEventOptions": () => (/* binding */ activeCapturingEventOptions),
/* harmony export */   "BaseSelector": () => (/* binding */ BaseSelector)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color/color */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color/color-adapter */ 7842);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);







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
    const { top, left, right, bottom, width, height } = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(container).getBoundingClientRect();
    return { top, left, right, bottom, width, height };
}
function getPointerPositionInContainer(pointer, container) {
    const pointerXToContainerX = (pointer.x - container.left) / container.width;
    const pointerYToContainerY = (pointer.y - container.top) / container.height;
    return { x: (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, pointerXToContainerX), y: (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, pointerYToContainerY) };
}
/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.normalizePassiveListenerOptions)({ passive: true });
/** Options that can be used to bind an active event listener. */
const activeEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.normalizePassiveListenerOptions)({ passive: false });
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.normalizePassiveListenerOptions)({
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
        const sliderElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(this._elementRef);
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
BaseSelector.ɵfac = function BaseSelector_Factory(t) { return new (t || BaseSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_1__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality)); };
BaseSelector.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: BaseSelector, inputs: { color: "color" } });


/***/ }),

/***/ 7198:
/*!******************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/grid/grid-selector.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjGridSelector": () => (/* binding */ MnjGridSelector)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color */ 5067);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);







function MnjGridSelector_li_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx_r3.thumbSize());
} }
function MnjGridSelector_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MnjGridSelector_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.selectColor(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MnjGridSelector_li_1_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx_r0.cellSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx_r0.cssColor(cell_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", cell_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabIndex", i_r2 === ctx_r0._selectedIndex ? 0 : -1)("aria-label", cell_r1.title)("aria-selected", i_r2 === ctx_r0._selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 === ctx_r0._selectedIndex);
} }
class MnjGridSelector {
    constructor(colorAdapter, _elementRef, _changeDetectorRef) {
        this.colorAdapter = colorAdapter;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.colorSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
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
    selectColor(index) {
        const { color } = this.grid[index];
        this.color = color;
        // Manually set due to duplicates in some palettes like CSS Colors
        this._selectedIndex = index;
        this.colorSelected.emit(color);
    }
    _handleKeydownEvent(event) {
        const grid = this.grid;
        const oldActiveIndex = this._selectedIndex;
        let activeIndex = oldActiveIndex;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.LEFT_ARROW:
                activeIndex--;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.RIGHT_ARROW:
                activeIndex++;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.UP_ARROW:
                activeIndex -= this.columns;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.DOWN_ARROW:
                activeIndex += this.columns;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_UP:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.HOME:
                activeIndex = 0;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_DOWN:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.END:
                activeIndex = grid.length - 1;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.SPACE:
                event.preventDefault();
                this.selectColor(activeIndex);
                return;
            default:
                return;
        }
        activeIndex = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, grid.length - 1, activeIndex);
        const cells = Array.from(this._elementRef.nativeElement.querySelectorAll('.mnj-grid-selector__row--cell'));
        if (activeIndex !== this._selectedIndex) {
            cells[activeIndex].focus();
            this._selectedIndex = activeIndex;
        }
    }
}
MnjGridSelector.ɵfac = function MnjGridSelector_Factory(t) { return new (t || MnjGridSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_1__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
MnjGridSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MnjGridSelector, selectors: [["mnj-grid-selector"]], hostAttrs: ["role", "grid", 1, "mnj-grid-selector"], hostBindings: function MnjGridSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MnjGridSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", paletteGeneratorFn: "paletteGeneratorFn", columns: "columns" }, outputs: { colorSelected: "colorSelected" }, exportAs: ["mnjGridSelector"], decls: 2, vars: 3, consts: [[1, "mnj-grid-selector__row"], ["class", "mnj-grid-selector__row--cell", 3, "title", "background", "style", "click", 4, "ngFor", "ngForOf"], [1, "mnj-grid-selector__row--cell", 3, "title", "click"], ["class", "mnj-colorpicker-selector__thumb", 3, "style", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjGridSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MnjGridSelector_li_1_Template, 2, 9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx.gridStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.grid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".mnj-grid-selector {\n  display: block;\n  margin: 2px 0 12px;\n}\n.mnj-grid-selector__row {\n  display: grid;\n  justify-content: space-evenly;\n  list-style: none;\n  margin: 0;\n}\n.mnj-grid-selector__row--cell {\n  align-items: center;\n  border-radius: 100%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n}\n.mnj-grid-selector__row--cell:hover, .mnj-grid-selector__row--cell:focus {\n  outline: none;\n  transform: scale(1.5);\n  z-index: 1;\n}\n.mnj-grid-selector .mnj-colorpicker-selector__thumb {\n  position: relative;\n  transform: none;\n}\n.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner {\n  position: relative;\n}\n.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner::after {\n  border: none;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VsZWN0b3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQWJGO0FBZUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFiSjtBQWVJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFiTjtBQWVNO0VBRUUsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQWRSO0FBbUJFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBakJKO0FBbUJJO0VBQ0Usa0JBQUE7QUFqQk47QUFtQk07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFqQlIiLCJmaWxlIjoiZ3JpZC1zZWxlY3Rvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1hdGgnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4uL3NlbGVjdG9yLWNvbW1vbic7XG5cbiRtbmotZ3JpZC1zZWxlY3Rvci1jZWxsLXNpemU6IDI0cHg7XG4kbW5qLWdyaWQtc2VsZWN0b3Itc2NhbGU6IDEuNTtcbi8vIE5lY2VzYXJ5IHNwYWNlIGZvciB0aGUgY2VsbHMgdG8gbm90IGJlaW5nIGN1dCBieSBjb250YWluZXIgd2hlbiBzY2FsZWQ7XG4kbW5qLWdyaWQtc2VsZWN0b3Itc3BhY2U6IG1hdGguZGl2KFxuICAkbW5qLWdyaWQtc2VsZWN0b3ItY2VsbC1zaXplICogJG1uai1ncmlkLXNlbGVjdG9yLXNjYWxlIC0gJG1uai1ncmlkLXNlbGVjdG9yLWNlbGwtc2l6ZSxcbiAgMlxuKTtcblxuLm1uai1ncmlkLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogc2VsZWN0b3ItY29tbW9uLiRiYXNlLWNvbnRhaW5lci1tYXJnaW4tdG9wIDAgc2VsZWN0b3ItY29tbW9uLiRiYXNlLWNvbnRhaW5lci1tYXJnaW4tYm90dG9tO1xuXG4gICZfX3JvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcblxuICAgICYtLWNlbGwge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgkbW5qLWdyaWQtc2VsZWN0b3Itc2NhbGUpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tbmotY29sb3JwaWNrZXItc2VsZWN0b3JfX3RodW1iIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuXG4gICAgLm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9faW5uZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 2314:
/*!****************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/hue/hue-selector.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjHueSelector": () => (/* binding */ MnjHueSelector)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color */ 5067);
/* harmony import */ var _base_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-selector */ 6191);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);









class MnjHueSelector extends _base_selector__WEBPACK_IMPORTED_MODULE_1__.BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.hueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    get hueThumbPos() {
        return { left: `${this.thumbPosition.x}%`, top: '50%' };
    }
    _setColor(color) {
        if (this._elementRef) {
            const hue = color.hue || 0;
            let xPosition = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 100, (hue / 360) * 100);
            if (this._isRtl()) {
                xPosition = 100 - xPosition;
            }
            this.thumbPosition = { x: xPosition, y: 50 };
        }
        this._changeDetectorRef.markForCheck();
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x: pointerToContainerX } = (0,_base_selector__WEBPACK_IMPORTED_MODULE_1__.getPointerPositionInContainer)(pointerPos, container);
            let pointerX = Math.round(pointerToContainerX * 100);
            if (this._isRtl()) {
                pointerX = 100 - pointerX;
            }
            this.thumbPosition = { x: pointerX, y: 50 };
            let hue = Math.round(pointerToContainerX * 360);
            hue = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 359, hue);
            const { saturation, lightness } = this.color;
            const color = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.fromHsl)({ hue, saturation, lightness });
            this.hueChange.emit(color);
        });
    }
    _handleKeydownEvent(event) {
        const { hue: oldHue, saturation, lightness, alpha } = this.color;
        const isRtl = this._isRtl();
        let newHue = oldHue;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.UP_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.LEFT_ARROW:
                newHue = newHue + (isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.DOWN_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.RIGHT_ARROW:
                newHue = newHue + (isRtl ? -1 : +1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.HOME:
                newHue = 0;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.END:
                newHue = 359;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_UP:
                newHue = newHue + (isRtl ? 60 : -60);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_DOWN:
                newHue = newHue + (isRtl ? -60 : +60);
                break;
            default:
                return;
        }
        newHue = (newHue + 360) % 360;
        const color = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.fromHsl)({ hue: newHue, saturation, lightness }, alpha);
        this.hueChange.emit(color);
    }
}
MnjHueSelector.ɵfac = function MnjHueSelector_Factory(t) { return new (t || MnjHueSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_2__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality)); };
MnjHueSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MnjHueSelector, selectors: [["mnj-hue-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-hue-selector"], hostVars: 1, hostBindings: function MnjHueSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MnjHueSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", 0);
    } }, outputs: { hueChange: "hueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _base_selector__WEBPACK_IMPORTED_MODULE_1__.BaseSelector, useExisting: MnjHueSelector }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjHueSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.hueThumbPos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle], styles: [".mnj-hue-selector {\n  background: linear-gradient(to right, red, yellow, lime, aqua, blue, fuchsia, red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZS1zZWxlY3Rvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0ZBQUE7QUFDRiIsImZpbGUiOiJodWUtc2VsZWN0b3Iuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tbmotaHVlLXNlbGVjdG9yIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZWQsIHllbGxvdywgbGltZSwgYXF1YSwgYmx1ZSwgZnVjaHNpYSwgcmVkKTtcbn1cbiJdfQ== */", ".mnj-colorpicker-selector {\n  border-radius: 2px;\n  cursor: pointer;\n  display: block;\n  height: 8px;\n  margin: 2px 0 12px;\n  position: relative;\n}\n.mnj-colorpicker-selector:focus {\n  outline: none;\n}\n.mnj-colorpicker-selector__thumb {\n  border: 2px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  height: 18px;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  width: 18px;\n}\n.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner {\n  border: 2px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: box-shadow 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner::after {\n  border: 1px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Utc2VsZWN0b3Iuc2NzcyIsIl9zZWxlY3Rvci1jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQ0M2QjtFREE3QixlQUFBO0VBQ0EsY0FBQTtFQUNBLFdDTnNCO0VET3RCLGtCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBS0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQ2xCMEI7RURtQjFCLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdDdEIwQjtBRG9CNUI7QUFJRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDZEQUFBO0VBQ0EsV0FBQTtBQUZKO0FBSUk7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBRk4iLCJmaWxlIjoiYmFzZS1zZWxlY3Rvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2VsZWN0b3ItY29tbW9uJztcblxuLm1uai1jb2xvcnBpY2tlci1zZWxlY3RvciB7XG4gIGJvcmRlci1yYWRpdXM6IHNlbGVjdG9yLWNvbW1vbi4kYmFzZS1jb250YWluZXItYm9yZGVyLXJhZGl1cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLWhlaWdodDtcbiAgbWFyZ2luOiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLW1hcmdpbi10b3AgMCBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLW1hcmdpbi1ib3R0b207XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5tbmotY29sb3JwaWNrZXItc2VsZWN0b3JfX3RodW1iIHtcbiAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IHNlbGVjdG9yLWNvbW1vbi4kYmFzZS1jb250YWluZXItdGh1bWItc2l6ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLXRodW1iLXNpemU7XG5cbiAgLm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9fdGh1bWJfX2lubmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIkYmFzZS1jb250YWluZXItaGVpZ2h0OiA4cHg7XG4kYmFzZS1jb250YWluZXItdGh1bWItc2l6ZTogMThweDtcbiRiYXNlLWNvbnRhaW5lci1tYXJnaW4tdG9wOiAycHg7XG4kYmFzZS1jb250YWluZXItbWFyZ2luLWJvdHRvbTogMTJweDtcbiRiYXNlLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzOiAycHg7XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 2295:
/*!*****************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjAlphaSelector": () => (/* reexport safe */ _alpha_alpha_selector__WEBPACK_IMPORTED_MODULE_0__.MnjAlphaSelector),
/* harmony export */   "BaseSelector": () => (/* reexport safe */ _base_selector__WEBPACK_IMPORTED_MODULE_1__.BaseSelector),
/* harmony export */   "activeCapturingEventOptions": () => (/* reexport safe */ _base_selector__WEBPACK_IMPORTED_MODULE_1__.activeCapturingEventOptions),
/* harmony export */   "activeEventListenerOptions": () => (/* reexport safe */ _base_selector__WEBPACK_IMPORTED_MODULE_1__.activeEventListenerOptions),
/* harmony export */   "getContainerSize": () => (/* reexport safe */ _base_selector__WEBPACK_IMPORTED_MODULE_1__.getContainerSize),
/* harmony export */   "getPointerPositionFromEvent": () => (/* reexport safe */ _base_selector__WEBPACK_IMPORTED_MODULE_1__.getPointerPositionFromEvent),
/* harmony export */   "getPointerPositionInContainer": () => (/* reexport safe */ _base_selector__WEBPACK_IMPORTED_MODULE_1__.getPointerPositionInContainer),
/* harmony export */   "isSamePosition": () => (/* reexport safe */ _base_selector__WEBPACK_IMPORTED_MODULE_1__.isSamePosition),
/* harmony export */   "passiveEventListenerOptions": () => (/* reexport safe */ _base_selector__WEBPACK_IMPORTED_MODULE_1__.passiveEventListenerOptions),
/* harmony export */   "MnjGridSelector": () => (/* reexport safe */ _grid_grid_selector__WEBPACK_IMPORTED_MODULE_2__.MnjGridSelector),
/* harmony export */   "MnjHueSelector": () => (/* reexport safe */ _hue_hue_selector__WEBPACK_IMPORTED_MODULE_3__.MnjHueSelector),
/* harmony export */   "MnjInputSelector": () => (/* reexport safe */ _input_input_selector__WEBPACK_IMPORTED_MODULE_4__.MnjInputSelector),
/* harmony export */   "MnjPipetteSelector": () => (/* reexport safe */ _pipette_pipette_selector__WEBPACK_IMPORTED_MODULE_5__.MnjPipetteSelector),
/* harmony export */   "MnjPreviewSwatch": () => (/* reexport safe */ _preview_swatch_preview_swatch__WEBPACK_IMPORTED_MODULE_6__.MnjPreviewSwatch),
/* harmony export */   "MnjSaturationSelector": () => (/* reexport safe */ _sat_sat_selector__WEBPACK_IMPORTED_MODULE_7__.MnjSaturationSelector)
/* harmony export */ });
/* harmony import */ var _alpha_alpha_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alpha/alpha-selector */ 6723);
/* harmony import */ var _base_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-selector */ 6191);
/* harmony import */ var _grid_grid_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid-selector */ 7198);
/* harmony import */ var _hue_hue_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hue/hue-selector */ 2314);
/* harmony import */ var _input_input_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input-selector */ 3294);
/* harmony import */ var _pipette_pipette_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipette/pipette-selector */ 9083);
/* harmony import */ var _preview_swatch_preview_swatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-swatch/preview-swatch */ 213);
/* harmony import */ var _sat_sat_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sat/sat-selector */ 1433);










/***/ }),

/***/ 3294:
/*!********************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/input/input-selector.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjInputSelector": () => (/* binding */ MnjInputSelector)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);




const _c0 = ["colorInput"];
class MnjInputSelector {
    constructor(colorAdapter) {
        this.colorAdapter = colorAdapter;
        this._colorFormat = 'HEX';
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
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
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW:
                this.previousFormat();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW:
                this.nextFormat();
                break;
            default:
                return;
        }
    }
}
MnjInputSelector.ɵfac = function MnjInputSelector_Factory(t) { return new (t || MnjInputSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_0__.ColorAdapter)); };
MnjInputSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MnjInputSelector, selectors: [["mnj-input-selector"]], viewQuery: function MnjInputSelector_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.colorInput = _t.first);
    } }, hostAttrs: [1, "mnj-input-selector"], hostBindings: function MnjInputSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MnjInputSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } }, inputs: { color: "color", colorFormat: "colorFormat" }, outputs: { inputChange: "inputChange" }, decls: 6, vars: 1, consts: [[1, "mnj-input-selector__container"], ["type", "text", "autocorrect", "off", "autocomplete", "off", "spellcheck", "false", "aria-label", "Color code", 1, "color-input", 3, "value", "change"], ["colorInput", ""], [1, "mnj-input-selector__container__switch-buttons"], [1, "switch-buttons--prev", 3, "click"], [1, "switch-buttons--next", 3, "click"]], template: function MnjInputSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MnjInputSelector_Template_input_change_1_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MnjInputSelector_Template_span_click_4_listener() { return ctx.previousFormat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MnjInputSelector_Template_span_click_5_listener() { return ctx.nextFormat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.colorString);
    } }, styles: [".mnj-input-selector {\n  width: 100%;\n}\n.mnj-input-selector__container {\n  display: flex;\n  grid-gap: 5px;\n}\n.mnj-input-selector__container .color-input {\n  border: none;\n  border-bottom: 1px solid currentColor;\n  flex: 1 0 auto;\n  font-size: inherit;\n  height: 24px;\n  padding: 6px 8px 6px 8px;\n  text-transform: uppercase;\n}\n.mnj-input-selector__container .color-input:focus {\n  border-bottom: 1px solid currentColor;\n  outline: none;\n}\n.mnj-input-selector__container__switch-buttons {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n}\n.mnj-input-selector__container__switch-buttons .switch-buttons--prev,\n.mnj-input-selector__container__switch-buttons .switch-buttons--next {\n  position: relative;\n  width: 10px;\n  height: 10px;\n}\n.mnj-input-selector__container__switch-buttons .switch-buttons--prev::after,\n.mnj-input-selector__container__switch-buttons .switch-buttons--next::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  border: 0 solid currentColor;\n  border-top-width: 2px;\n}\n[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--prev,\n[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--next {\n  transform: rotate(180deg);\n}\n.mnj-input-selector__container__switch-buttons .switch-buttons--prev::after {\n  border-left-width: 2px;\n  transform: translateY(4px) rotate(45deg);\n}\n.mnj-input-selector__container__switch-buttons .switch-buttons--next::after {\n  border-right-width: 2px;\n  transform: translateY(4px) rotate(135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LXNlbGVjdG9yLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS9fbGF5b3V0LWNvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsV0FBQTtBQUxGO0FBT0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUxKO0FBT0k7RUFDRSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQUxOO0FBT007RUFDRSxxQ0FBQTtFQUNBLGFBQUE7QUFMUjtBQVNJO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUFQTjtBQVNNOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQUjtBQVNROztFQ3JDTixNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RURtQ1EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBekNvQztBQXVDOUM7QUFLUTs7RUFDRSx5QkFBQTtBQUZWO0FBS007RUFDRSxzQkFqRHNDO0VBa0R0Qyx3Q0FqRDhCO0FBOEN0QztBQU1NO0VBQ0UsdUJBdERzQztFQXVEdEMseUNBckQ4QjtBQWlEdEMiLCJmaWxlIjoiaW5wdXQtc2VsZWN0b3Iuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL2xheW91dC1jb21tb24nO1xuXG4kbW5qLWNvbG9yLXBhbmVsLXByZXYtbmV4dC1pY29uLWJvcmRlci13aWR0aDogMnB4O1xuJG1uai1jb2xvci1wYW5lbC1wcmV2LWljb24tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCkgcm90YXRlKDQ1ZGVnKTtcbiRtbmotY29sb3ItcGFuZWwtbmV4dC1pY29uLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpIHJvdGF0ZSgxMzVkZWcpO1xuXG4ubW5qLWlucHV0LXNlbGVjdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtZ2FwOiA1cHg7XG5cbiAgICAuY29sb3ItaW5wdXQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgcGFkZGluZzogNnB4IDhweCA2cHggOHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAuc3dpdGNoLWJ1dHRvbnMtLXByZXYsXG4gICAgICAuc3dpdGNoLWJ1dHRvbnMtLW5leHQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIEBpbmNsdWRlIG1hdC1maWxsO1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogJG1uai1jb2xvci1wYW5lbC1wcmV2LW5leHQtaWNvbi1ib3JkZXItd2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBbZGlyPSdydGwnXSAmIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3dpdGNoLWJ1dHRvbnMtLXByZXY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6ICRtbmotY29sb3ItcGFuZWwtcHJldi1uZXh0LWljb24tYm9yZGVyLXdpZHRoO1xuICAgICAgICB0cmFuc2Zvcm06ICRtbmotY29sb3ItcGFuZWwtcHJldi1pY29uLXRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgLnN3aXRjaC1idXR0b25zLS1uZXh0OjphZnRlciB7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJG1uai1jb2xvci1wYW5lbC1wcmV2LW5leHQtaWNvbi1ib3JkZXItd2lkdGg7XG4gICAgICAgIHRyYW5zZm9ybTogJG1uai1jb2xvci1wYW5lbC1uZXh0LWljb24tdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhpcyBtaXhpbiBlbnN1cmVzIGFuIGVsZW1lbnQgc3BhbnMgdG8gZmlsbCB0aGUgbmVhcmVzdCBhbmNlc3RvciB3aXRoIGRlZmluZWQgcG9zaXRpb25pbmcuXG5AbWl4aW4gZmlsbCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 9083:
/*!************************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/pipette/pipette-selector.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjPipetteSelector": () => (/* binding */ MnjPipetteSelector)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color */ 5067);
/* harmony import */ var _base_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-selector */ 6191);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);









const _c0 = ["imageCanvas"];
function MnjPipetteSelector_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const swatch_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx_r2.getPixelBackground(swatch_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mnj-pipette-selector__swatch-container--cell--active", i_r4 === ctx_r2._swatchMiddle);
} }
function MnjPipetteSelector_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MnjPipetteSelector_div_2_div_2_Template, 1, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.swatchGridPos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.swatchGridStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.pipetteSwatchPalette);
} }
class MnjPipetteSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef) {
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.pipetteColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
            const pointer = (0,_base_selector__WEBPACK_IMPORTED_MODULE_1__.getPointerPositionFromEvent)(event);
            if ((0,_base_selector__WEBPACK_IMPORTED_MODULE_1__.isSamePosition)(this.cachedPointerPos, pointer)) {
                return;
            }
            this.cachedContainerSize = (0,_base_selector__WEBPACK_IMPORTED_MODULE_1__.getContainerSize)(this._elementRef);
            this.calculateColorFromPosition(this.cachedContainerSize, pointer);
            const isTouchEvent = event.type.startsWith('touch');
            const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            this._clearGlobalListeners();
            this._globalListeners
                .set(moveEvent, {
                handler: this.pointerMove,
                options: _base_selector__WEBPACK_IMPORTED_MODULE_1__.activeCapturingEventOptions,
            })
                .set(upEvent, {
                handler: this._clearGlobalListeners,
                options: true,
            });
            this.showPipetteSwatch = true;
            this.addGlobalListeners();
        };
        this.pointerMove = (event) => {
            const pointer = (0,_base_selector__WEBPACK_IMPORTED_MODULE_1__.getPointerPositionFromEvent)(event);
            if ((0,_base_selector__WEBPACK_IMPORTED_MODULE_1__.isSamePosition)(this.cachedPointerPos, pointer)) {
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
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(value);
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
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
        if (this._showPipetteSwatch !== value) {
            this._showPipetteSwatch = value;
            this._changeDetectorRef.detectChanges();
        }
    }
    ngAfterViewInit() {
        this.attachListeners();
        if (this._image) {
            // Paint canvas if there was a pending image that could not be rendered until this momment
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => this._paintCanvas());
        }
    }
    ngOnDestroy() {
        this._clearGlobalListeners();
    }
    // LISTENERS
    attachListeners() {
        const sliderElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(this._elementRef);
        this._ngZone.runOutsideAngular(() => {
            sliderElement.addEventListener('mousedown', this._pointerDown, _base_selector__WEBPACK_IMPORTED_MODULE_1__.activeEventListenerOptions);
            sliderElement.addEventListener('touchstart', this._pointerDown, _base_selector__WEBPACK_IMPORTED_MODULE_1__.passiveEventListenerOptions);
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
            const canvasElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(this.canvas);
            const { width: imgWidth, height: imgHeight } = this.image;
            const { width: containerWidth, height: containerHeight } = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(this._elementRef).getBoundingClientRect();
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
            const { x, y } = (0,_base_selector__WEBPACK_IMPORTED_MODULE_1__.getPointerPositionInContainer)(pointerPos, container);
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
            const color = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.fromRgb)({ red, green, blue }, alpha);
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
MnjPipetteSelector.ɵfac = function MnjPipetteSelector_Factory(t) { return new (t || MnjPipetteSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_2__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
MnjPipetteSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MnjPipetteSelector, selectors: [["mnj-pipette-selector"]], viewQuery: function MnjPipetteSelector_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostAttrs: [1, "mnj-pipette-selector"], inputs: { image: "image", swatchCells: "swatchCells" }, outputs: { pipetteColorChange: "pipetteColorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _base_selector__WEBPACK_IMPORTED_MODULE_1__.BaseSelector, useExisting: MnjPipetteSelector }])], decls: 5, vars: 2, consts: [["imageCanvas", ""], ["class", "mnj-pipette-selector__swatch-container", 3, "ngStyle", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"], [1, "mnj-pipette-selector__swatch-container", 3, "ngStyle"], [1, "mnj-pipette-selector__swatch-container__grid", 3, "ngStyle"], ["class", "mnj-pipette-selector__swatch-container--cell", 3, "background", "mnj-pipette-selector__swatch-container--cell--active", 4, "ngFor", "ngForOf"], [1, "mnj-pipette-selector__swatch-container--cell"]], template: function MnjPipetteSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MnjPipetteSelector_div_2_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPipetteSwatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.canvasThumbPos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".mnj-pipette-selector {\n  cursor: pointer;\n  display: block;\n  margin-bottom: 12px;\n  position: relative;\n}\n.mnj-pipette-selector__swatch-container {\n  -webkit-clip-path: circle(49% at 50% 50%);\n          clip-path: circle(49% at 50% 50%);\n  position: absolute;\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 1;\n}\n.mnj-pipette-selector__swatch-container__grid {\n  border-right: 1px solid black;\n  border-bottom: 1px solid black;\n  display: grid;\n}\n.mnj-pipette-selector__swatch-container--cell {\n  border-left: 1px solid black;\n  border-top: 1px solid black;\n}\n.mnj-pipette-selector__swatch-container--cell--active {\n  border: 1px solid red;\n  height: 11px;\n  width: 11px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGV0dGUtc2VsZWN0b3Iuc2NzcyIsIi4uL19zZWxlY3Rvci1jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJDRjZCO0VERzdCLGtCQUFBO0FBREY7QUFHRTtFQUNFLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsVUFBQTtBQURKO0FBR0k7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUROO0FBR0k7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FBRE47QUFHTTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRFIiLCJmaWxlIjoicGlwZXR0ZS1zZWxlY3Rvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc2VsZWN0b3ItY29tbW9uJztcblxuLm1uai1waXBldHRlLXNlbGVjdG9yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogJGJhc2UtY29udGFpbmVyLW1hcmdpbi1ib3R0b207XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmX19zd2F0Y2gtY29udGFpbmVyIHtcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg0OSUgYXQgNTAlIDUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJl9fZ3JpZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgfVxuICAgICYtLWNlbGwge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcblxuICAgICAgJi0tYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgIHdpZHRoOiAxMXB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGJhc2UtY29udGFpbmVyLWhlaWdodDogOHB4O1xuJGJhc2UtY29udGFpbmVyLXRodW1iLXNpemU6IDE4cHg7XG4kYmFzZS1jb250YWluZXItbWFyZ2luLXRvcDogMnB4O1xuJGJhc2UtY29udGFpbmVyLW1hcmdpbi1ib3R0b206IDEycHg7XG4kYmFzZS1jb250YWluZXItYm9yZGVyLXJhZGl1czogMnB4O1xuIl19 */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 213:
/*!*****************************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/preview-swatch/preview-swatch.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjPreviewSwatch": () => (/* binding */ MnjPreviewSwatch)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);


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
MnjPreviewSwatch.ɵfac = function MnjPreviewSwatch_Factory(t) { return new (t || MnjPreviewSwatch)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_0__.ColorAdapter)); };
MnjPreviewSwatch.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MnjPreviewSwatch, selectors: [["mnj-preview-swatch"]], hostAttrs: [1, "mnj-preview-swatch"], inputs: { color: "color" }, decls: 3, vars: 2, consts: [[1, "swatch__container"], [1, "swatch__container--alpha-layer"], [1, "swatch__container--color-layer"]], template: function MnjPreviewSwatch_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.cssBackground);
    } }, styles: [".mnj-preview-swatch .swatch__container {\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  cursor: default;\n}\n.mnj-preview-swatch .swatch__container--color-layer, .mnj-preview-swatch .swatch__container--alpha-layer {\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n}\n.mnj-preview-swatch .swatch__container--alpha-layer {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=\") repeat;\n  background-position: left top;\n}\n.mnj-preview-swatch .swatch__container--color-layer {\n  transform: translateY(-24px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXctc3dhdGNoLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxrQkFBQTtFQUNBLFdBTFU7RUFNVixZQU5VO0VBT1YsZUFBQTtBQUZKO0FBSUk7RUFFRSxrQkFBQTtFQUNBLFdBWlE7RUFhUixZQWJRO0FBVWQ7QUFNSTtFQUNFLDRLQUFBO0VBRUEsNkJBQUE7QUFMTjtBQVFJO0VBQ0UsNEJBQUE7QUFOTiIsImZpbGUiOiJwcmV2aWV3LXN3YXRjaC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHN3YXRjaC1zaXplOiAyNHB4O1xuXG4ubW5qLXByZXZpZXctc3dhdGNoIHtcbiAgLnN3YXRjaF9fY29udGFpbmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6ICRzd2F0Y2gtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzd2F0Y2gtc2l6ZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAmLS1jb2xvci1sYXllcixcbiAgICAmLS1hbHBoYS1sYXllciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogJHN3YXRjaC1zaXplO1xuICAgICAgaGVpZ2h0OiAkc3dhdGNoLXNpemU7XG4gICAgfVxuXG4gICAgJi0tYWxwaGEtbGF5ZXIge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBSTBsRVFWUW9VMlBjdlh2M1RBWWs0T3JxbW83TVo2U0RBbVQ3UUd4MEt4bHByd0FBdzlrYk1TdFZaNkFBQUFBQVNVVk9SSzVDWUlJPScpXG4gICAgICAgIHJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgIH1cblxuICAgICYtLWNvbG9yLWxheWVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJHN3YXRjaC1zaXplKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1433:
/*!****************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/selectors/sat/sat-selector.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjSaturationSelector": () => (/* binding */ MnjSaturationSelector)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color */ 5067);
/* harmony import */ var _color_color_conversions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color/color-conversions */ 228);
/* harmony import */ var _base_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-selector */ 6191);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);










class MnjSaturationSelector extends _base_selector__WEBPACK_IMPORTED_MODULE_2__.BaseSelector {
    constructor(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
        super(colorAdapter, _document, _ngZone, _elementRef, _dir);
        this.colorAdapter = colorAdapter;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.satChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
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
            const { saturation, value } = (0,_color_color_conversions__WEBPACK_IMPORTED_MODULE_1__.hslToHsv)(color);
            let xPosition = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 100, saturation);
            const yPosition = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 100, 100 - value);
            if (this._isRtl()) {
                xPosition = 100 - xPosition;
            }
            this.thumbPosition = { x: xPosition, y: yPosition };
        }
        this._changeDetectorRef.markForCheck();
    }
    calculateColorFromPosition(container, pointerPos) {
        this._ngZone.run(() => {
            const { x, y } = (0,_base_selector__WEBPACK_IMPORTED_MODULE_2__.getPointerPositionInContainer)(pointerPos, container);
            let pointerX = x * 100;
            const pointerY = y * 100;
            if (this._isRtl()) {
                pointerX = 100 - pointerX;
            }
            this.thumbPosition = { x: pointerX, y: pointerY };
            let saturation = Math.round(pointerX) || 0;
            let value = Math.round(100 - pointerY) || 0;
            saturation = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 100, saturation);
            value = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 100, value);
            const { hue } = this.color;
            const color = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.fromHsv)({ hue, saturation, value });
            this.satChange.emit(color);
        });
    }
    _handleKeydownEvent(event) {
        const { hue, saturation, lightness } = this.color;
        const isRtl = this._isRtl();
        let newSaturation = saturation;
        let newLightness = lightness;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.UP_ARROW:
                newLightness++;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.LEFT_ARROW:
                newSaturation += isRtl ? 1 : -1;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.DOWN_ARROW:
                newLightness--;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.RIGHT_ARROW:
                newSaturation += isRtl ? -1 : +1;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.PAGE_UP:
                newLightness = newLightness - 10;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.PAGE_DOWN:
                newLightness = newLightness + 10;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.HOME:
                newSaturation = 0;
                newLightness = 0;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.END:
                newSaturation = 100;
                newLightness = 50;
                break;
            default:
                return;
        }
        newSaturation = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 100, newSaturation);
        newLightness = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 100, newLightness);
        const color = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.fromHsl)({ hue, saturation: newSaturation, lightness: newLightness });
        this.satChange.emit(color);
    }
}
MnjSaturationSelector.ɵfac = function MnjSaturationSelector_Factory(t) { return new (t || MnjSaturationSelector)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_3__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Directionality)); };
MnjSaturationSelector.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MnjSaturationSelector, selectors: [["mnj-saturation-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-saturation-selector"], hostVars: 3, hostBindings: function MnjSaturationSelector_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MnjSaturationSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mnj-saturation-selector--rtl", ctx._isRtl());
    } }, outputs: { satChange: "satChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{ provide: _base_selector__WEBPACK_IMPORTED_MODULE_2__.BaseSelector, useExisting: MnjSaturationSelector }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 3, consts: [[1, "mnj-saturation-selector__mask"], [1, "mnj-saturation-selector__mask--fill", 3, "ngStyle"], [1, "mnj-saturation-selector__mask--saturation"], [1, "mnj-saturation-selector__mask--value"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner", 3, "ngStyle"]], template: function MnjSaturationSelector_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx.satBackgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx.satThumbPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx.satThumbBackgroundColor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], styles: [".mnj-saturation-selector {\n  min-height: 80px;\n}\n.mnj-saturation-selector__mask {\n  border-radius: 2px;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.mnj-saturation-selector__mask--fill, .mnj-saturation-selector__mask--saturation, .mnj-saturation-selector__mask--value {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.mnj-saturation-selector__mask--saturation {\n  background-image: linear-gradient(to right, #fff, rgba(0, 0, 0, 0));\n}\n.mnj-saturation-selector__mask--value {\n  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));\n}\n.mnj-saturation-selector__mask--rtl .mnj-saturation-selector__mask--saturation {\n  background-image: linear-gradient(to left, #fff, rgba(0, 0, 0, 0));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdC1zZWxlY3Rvci5zY3NzIiwiLi4vX3NlbGVjdG9yLWNvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7QUFERjtBQUdFO0VBQ0Usa0JDRjJCO0VERzNCLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURKO0FBR0k7RUFHRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSE47QUFNSTtFQUNFLG1FQUFBO0FBSk47QUFPSTtFQUNFLGlFQUFBO0FBTE47QUFTTTtFQUNFLGtFQUFBO0FBUFIiLCJmaWxlIjoic2F0LXNlbGVjdG9yLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zZWxlY3Rvci1jb21tb24nO1xuXG4ubW5qLXNhdHVyYXRpb24tc2VsZWN0b3Ige1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuXG4gICZfX21hc2sge1xuICAgIGJvcmRlci1yYWRpdXM6ICRiYXNlLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYtLWZpbGwsXG4gICAgJi0tc2F0dXJhdGlvbixcbiAgICAmLS12YWx1ZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmLS1zYXR1cmF0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gICAgfVxuXG4gICAgJi0tdmFsdWUge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMCwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gICAgfVxuXG4gICAgJi0tcnRsIHtcbiAgICAgIC5tbmotc2F0dXJhdGlvbi1zZWxlY3Rvcl9fbWFzay0tc2F0dXJhdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZmLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRiYXNlLWNvbnRhaW5lci1oZWlnaHQ6IDhweDtcbiRiYXNlLWNvbnRhaW5lci10aHVtYi1zaXplOiAxOHB4O1xuJGJhc2UtY29udGFpbmVyLW1hcmdpbi10b3A6IDJweDtcbiRiYXNlLWNvbnRhaW5lci1tYXJnaW4tYm90dG9tOiAxMnB4O1xuJGJhc2UtY29udGFpbmVyLWJvcmRlci1yYWRpdXM6IDJweDtcbiJdfQ== */", ".mnj-colorpicker-selector {\n  border-radius: 2px;\n  cursor: pointer;\n  display: block;\n  height: 8px;\n  margin: 2px 0 12px;\n  position: relative;\n}\n.mnj-colorpicker-selector:focus {\n  outline: none;\n}\n.mnj-colorpicker-selector__thumb {\n  border: 2px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  height: 18px;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  width: 18px;\n}\n.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner {\n  border: 2px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: box-shadow 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner::after {\n  border: 1px solid currentColor;\n  border-radius: 100%;\n  box-sizing: border-box;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Utc2VsZWN0b3Iuc2NzcyIsIl9zZWxlY3Rvci1jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQ0M2QjtFREE3QixlQUFBO0VBQ0EsY0FBQTtFQUNBLFdDTnNCO0VET3RCLGtCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBS0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQ2xCMEI7RURtQjFCLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdDdEIwQjtBRG9CNUI7QUFJRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDZEQUFBO0VBQ0EsV0FBQTtBQUZKO0FBSUk7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBRk4iLCJmaWxlIjoiYmFzZS1zZWxlY3Rvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2VsZWN0b3ItY29tbW9uJztcblxuLm1uai1jb2xvcnBpY2tlci1zZWxlY3RvciB7XG4gIGJvcmRlci1yYWRpdXM6IHNlbGVjdG9yLWNvbW1vbi4kYmFzZS1jb250YWluZXItYm9yZGVyLXJhZGl1cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLWhlaWdodDtcbiAgbWFyZ2luOiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLW1hcmdpbi10b3AgMCBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLW1hcmdpbi1ib3R0b207XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5tbmotY29sb3JwaWNrZXItc2VsZWN0b3JfX3RodW1iIHtcbiAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IHNlbGVjdG9yLWNvbW1vbi4kYmFzZS1jb250YWluZXItdGh1bWItc2l6ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiBzZWxlY3Rvci1jb21tb24uJGJhc2UtY29udGFpbmVyLXRodW1iLXNpemU7XG5cbiAgLm1uai1jb2xvcnBpY2tlci1zZWxlY3Rvcl9fdGh1bWJfX2lubmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIkYmFzZS1jb250YWluZXItaGVpZ2h0OiA4cHg7XG4kYmFzZS1jb250YWluZXItdGh1bWItc2l6ZTogMThweDtcbiRiYXNlLWNvbnRhaW5lci1tYXJnaW4tdG9wOiAycHg7XG4kYmFzZS1jb250YWluZXItbWFyZ2luLWJvdHRvbTogMTJweDtcbiRiYXNlLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzOiAycHg7XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 3:
/*!******************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/views/armonies/armonies-view.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjArmoniesPickerView": () => (/* binding */ MnjArmoniesPickerView)
/* harmony export */ });
/* harmony import */ var _color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color */ 5067);
/* harmony import */ var _colorpicker_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colorpicker-view */ 2533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);
/* harmony import */ var _selectors_grid_grid_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/grid/grid-selector */ 7198);





class MnjArmoniesPickerView extends _colorpicker_view__WEBPACK_IMPORTED_MODULE_1__.BaseColorpickerView {
    constructor(_colorAdapter) {
        super(_colorAdapter);
        this._colorAdapter = _colorAdapter;
        this.complementaryPaletteFn = (color) => {
            const complementaryColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.complementary)(color);
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(complementaryColor);
        };
        this.splitComplementaryPaletteFn = (color) => {
            const splitComplementaryColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.splitComplementary)(color)[0];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(splitComplementaryColor);
        };
        this.splitComplementaryPaletteFn1 = (color) => {
            const splitComplementaryColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.splitComplementary)(color)[1];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(splitComplementaryColor);
        };
        this.analogous1PaletteFn = (color) => {
            const analogousColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.analogous)(color)[0];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(analogousColor);
        };
        this.analogous2PaletteFn = (color) => {
            const analogousColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.analogous)(color)[1];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(analogousColor);
        };
        this.triadic1PaletteFn = (color) => {
            const triadicColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.triadic)(color)[0];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(triadicColor);
        };
        this.triadic2PaletteFn = (color) => {
            const triadicColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.triadic)(color)[1];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(triadicColor);
        };
        this.tetradic1PaletteFn = (color) => {
            const tetradicColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.tetradic)(color)[0];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(tetradicColor);
        };
        this.tetradic2PaletteFn = (color) => {
            const tetradicColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.tetradic)(color)[1];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(tetradicColor);
        };
        this.tetradic3PaletteFn = (color) => {
            const tetradicColor = (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.tetradic)(color)[2];
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(tetradicColor);
        };
    }
}
MnjArmoniesPickerView.ɵfac = function MnjArmoniesPickerView_Factory(t) { return new (t || MnjArmoniesPickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_2__.ColorAdapter)); };
MnjArmoniesPickerView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MnjArmoniesPickerView, selectors: [["mnj-armonies-picker-view"]], hostAttrs: [1, "mnj-armonies-picker-view"], exportAs: ["mnjArmoniesPickerView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{ provide: _colorpicker_view__WEBPACK_IMPORTED_MODULE_1__.ColorPickerView, useExisting: MnjArmoniesPickerView }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 20, consts: [[3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjArmoniesPickerView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Complementary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_2_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Split Complementary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_5_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_6_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Analogous:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_9_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_10_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Triadic:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_13_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_14_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Tetradic:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_17_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_18_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_19_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.complementaryPaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous1PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous2PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic1PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic2PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic1PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic2PaletteFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic3PaletteFn);
    } }, directives: [_selectors_grid_grid_selector__WEBPACK_IMPORTED_MODULE_3__.MnjGridSelector], styles: [".mnj-armonies-picker-view {\n  display: flex;\n  flex-flow: column;\n}\n.mnj-armonies-picker-view label {\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.mnj-armonies-picker-view .mnj-grid-selector__row--cell {\n  height: 20px;\n  width: 20px;\n}\n.mnj-armonies-picker-view .mnj-grid-selector__thumb {\n  height: 16px;\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFybW9uaWVzLXZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFHSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRE47QUFHSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRE4iLCJmaWxlIjoiYXJtb25pZXMtdmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1uai1hcm1vbmllcy1waWNrZXItdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAubW5qLWdyaWQtc2VsZWN0b3Ige1xuICAgICZfX3Jvdy0tY2VsbCB7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gICAgJl9fdGh1bWIge1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 8242:
/*!**************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/views/chrome/chrome-view.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjChromePickerView": () => (/* binding */ MnjChromePickerView)
/* harmony export */ });
/* harmony import */ var _color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color/color */ 5067);
/* harmony import */ var _colorpicker_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colorpicker-view */ 2533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);
/* harmony import */ var _selectors_grid_grid_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/grid/grid-selector */ 7198);
/* harmony import */ var _selectors_sat_sat_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/sat/sat-selector */ 1433);
/* harmony import */ var _selectors_hue_hue_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors/hue/hue-selector */ 2314);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _selectors_preview_swatch_preview_swatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selectors/preview-swatch/preview-swatch */ 213);
/* harmony import */ var _selectors_input_input_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../selectors/input/input-selector */ 3294);
/* harmony import */ var _selectors_alpha_alpha_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectors/alpha/alpha-selector */ 6723);











function MnjChromePickerView_mnj_alpha_selector_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mnj-alpha-selector", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("alphaChange", function MnjChromePickerView_mnj_alpha_selector_3_Template_mnj_alpha_selector_alphaChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r1.changeColor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r0.activeColor);
} }
class MnjChromePickerView extends _colorpicker_view__WEBPACK_IMPORTED_MODULE_1__.BaseColorpickerView {
    constructor(_colorAdapter) {
        super(_colorAdapter);
        this._colorAdapter = _colorAdapter;
        this.colorShadesFn = (color) => {
            return (0,_color_color__WEBPACK_IMPORTED_MODULE_0__.calculateShades)(color);
        };
    }
}
MnjChromePickerView.ɵfac = function MnjChromePickerView_Factory(t) { return new (t || MnjChromePickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_2__.ColorAdapter)); };
MnjChromePickerView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: MnjChromePickerView, selectors: [["mnj-chrome-picker-view"]], hostAttrs: [1, "mnj-chrome-picker-view"], inputs: { showAlpha: "showAlpha", displayFormat: "displayFormat" }, exportAs: ["mnjChromePickerView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{ provide: _colorpicker_view__WEBPACK_IMPORTED_MODULE_1__.ColorPickerView, useExisting: MnjChromePickerView }]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [["cdkFocusInitial", "", 3, "color", "paletteGeneratorFn", "colorSelected"], [3, "color", "satChange"], [3, "color", "hueChange"], [3, "color", "alphaChange", 4, "ngIf"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color", "colorFormat", "inputChange"], [3, "color", "alphaChange"]], template: function MnjChromePickerView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("colorSelected", function MnjChromePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mnj-saturation-selector", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("satChange", function MnjChromePickerView_Template_mnj_saturation_selector_satChange_1_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mnj-hue-selector", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("hueChange", function MnjChromePickerView_Template_mnj_hue_selector_hueChange_2_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, MnjChromePickerView_mnj_alpha_selector_3_Template, 1, 1, "mnj-alpha-selector", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "mnj-preview-swatch", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mnj-input-selector", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputChange", function MnjChromePickerView_Template_mnj_input_selector_inputChange_6_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.colorShadesFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx.activeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx.activeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showAlpha);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx.activeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx.activeColor)("colorFormat", ctx.displayFormat);
    } }, directives: [_selectors_grid_grid_selector__WEBPACK_IMPORTED_MODULE_3__.MnjGridSelector, _selectors_sat_sat_selector__WEBPACK_IMPORTED_MODULE_4__.MnjSaturationSelector, _selectors_hue_hue_selector__WEBPACK_IMPORTED_MODULE_5__.MnjHueSelector, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _selectors_preview_swatch_preview_swatch__WEBPACK_IMPORTED_MODULE_6__.MnjPreviewSwatch, _selectors_input_input_selector__WEBPACK_IMPORTED_MODULE_7__.MnjInputSelector, _selectors_alpha_alpha_selector__WEBPACK_IMPORTED_MODULE_8__.MnjAlphaSelector], styles: [".mnj-chrome-picker-view .controls-container {\n  align-items: center;\n  display: flex;\n}\n.mnj-chrome-picker-view .controls-container--input {\n  margin-left: 15px;\n  flex: 1;\n}\n.mnj-chrome-picker-view {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.mnj-chrome-picker-view .mnj-saturation-selector {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi12aWV3LnNjc3MiLCJjaHJvbWUtdmlldy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0VBQ0EsT0FBQTtBQ0FOO0FBTEE7RUFHRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBTUY7QUFKRTtFQUNFLGNBQUE7QUFNSiIsImZpbGUiOiJjaHJvbWUtdmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWNvbW1vbi12aWV3IHtcbiAgLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJi0taW5wdXQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vY29tbW9uLXZpZXcuc2Nzcyc7XG5cbi5tbmotY2hyb21lLXBpY2tlci12aWV3IHtcbiAgQGV4dGVuZCAlY29tbW9uLXZpZXc7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5tbmotc2F0dXJhdGlvbi1zZWxlY3RvciB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 2533:
/*!************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/views/colorpicker-view.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPickerView": () => (/* binding */ ColorPickerView),
/* harmony export */   "BaseColorpickerView": () => (/* binding */ BaseColorpickerView)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color/color-adapter */ 7842);



/** Pure abstract class due the impossibility to add decorators to interfaces */
class ColorPickerView {
    constructor() {
        /**
         * Emits the color chosen in any view.
         * This doesn't imply a change on the selected color.
         */
        this.activeColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
}
ColorPickerView.ɵfac = function ColorPickerView_Factory(t) { return new (t || ColorPickerView)(); };
ColorPickerView.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ColorPickerView });
class BaseColorpickerView {
    constructor(_colorAdapter) {
        this._colorAdapter = _colorAdapter;
        this.activeColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
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
BaseColorpickerView.ɵfac = function BaseColorpickerView_Factory(t) { return new (t || BaseColorpickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_0__.ColorAdapter)); };
BaseColorpickerView.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BaseColorpickerView, inputs: { activeColor: "activeColor", selected: "selected" }, outputs: { activeColorChange: "activeColorChange" } });


/***/ }),

/***/ 99:
/*!*************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/views/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjArmoniesPickerView": () => (/* reexport safe */ _armonies_armonies_view__WEBPACK_IMPORTED_MODULE_0__.MnjArmoniesPickerView),
/* harmony export */   "MnjChromePickerView": () => (/* reexport safe */ _chrome_chrome_view__WEBPACK_IMPORTED_MODULE_1__.MnjChromePickerView),
/* harmony export */   "BaseColorpickerView": () => (/* reexport safe */ _colorpicker_view__WEBPACK_IMPORTED_MODULE_2__.BaseColorpickerView),
/* harmony export */   "ColorPickerView": () => (/* reexport safe */ _colorpicker_view__WEBPACK_IMPORTED_MODULE_2__.ColorPickerView),
/* harmony export */   "MnjPalettePickerView": () => (/* reexport safe */ _palette_palette_view__WEBPACK_IMPORTED_MODULE_3__.MnjPalettePickerView),
/* harmony export */   "MnjScanPickerView": () => (/* reexport safe */ _scan_scan_view__WEBPACK_IMPORTED_MODULE_4__.MnjScanPickerView)
/* harmony export */ });
/* harmony import */ var _armonies_armonies_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./armonies/armonies-view */ 3);
/* harmony import */ var _chrome_chrome_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrome/chrome-view */ 8242);
/* harmony import */ var _colorpicker_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorpicker-view */ 2533);
/* harmony import */ var _palette_palette_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./palette/palette-view */ 7638);
/* harmony import */ var _scan_scan_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scan/scan-view */ 1755);







/***/ }),

/***/ 7638:
/*!****************************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/views/palette/palette-view.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjPalettePickerView": () => (/* binding */ MnjPalettePickerView)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _colorpicker_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colorpicker-view */ 2533);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);
/* harmony import */ var _selectors_grid_grid_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/grid/grid-selector */ 7198);





class MnjPalettePickerView {
    constructor(_colorAdapter) {
        this._colorAdapter = _colorAdapter;
        this.paletteFn = () => this.palette;
        // tslint:disable-next-line: member-ordering
        this.activeColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
MnjPalettePickerView.ɵfac = function MnjPalettePickerView_Factory(t) { return new (t || MnjPalettePickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_1__.ColorAdapter)); };
MnjPalettePickerView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MnjPalettePickerView, selectors: [["mnj-palette-picker-view"]], hostAttrs: [1, "mnj-palette-picker-view"], inputs: { activeColor: "activeColor", selected: "selected", palette: "palette" }, outputs: { activeColorChange: "activeColorChange" }, exportAs: ["mnjPalettePickerView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _colorpicker_view__WEBPACK_IMPORTED_MODULE_0__.ColorPickerView, useExisting: MnjPalettePickerView }])], decls: 1, vars: 2, consts: [["columns", "6", 3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjPalettePickerView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mnj-grid-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("colorSelected", function MnjPalettePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.activeColor)("paletteGeneratorFn", ctx.paletteFn);
    } }, directives: [_selectors_grid_grid_selector__WEBPACK_IMPORTED_MODULE_2__.MnjGridSelector], styles: [".mnj-palette-picker-view {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbGV0dGUtdmlldy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InBhbGV0dGUtdmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1uai1wYWxldHRlLXBpY2tlci12aWV3IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1755:
/*!**********************************************************************!*\
  !*** ./projects/mnj-ngx-colorpicker/src/lib/views/scan/scan-view.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnjScanPickerView": () => (/* binding */ MnjScanPickerView)
/* harmony export */ });
/* harmony import */ var _colorpicker_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colorpicker-view */ 2533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _color_color_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color/color-adapter */ 7842);
/* harmony import */ var _colorpicker_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../colorpicker-intl */ 1733);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _selectors_pipette_pipette_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/pipette/pipette-selector */ 9083);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _selectors_preview_swatch_preview_swatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/preview-swatch/preview-swatch */ 213);
/* harmony import */ var _selectors_input_input_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors/input/input-selector */ 3294);









function MnjScanPickerView_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MnjScanPickerView_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); return _r1.click(); })("drop", function MnjScanPickerView_div_0_Template_div_drop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.uploadFile($event); })("dragover", function MnjScanPickerView_div_0_Template_div_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6._allowDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.uploadPhotoToScanLabel);
} }
function MnjScanPickerView_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mnj-pipette-selector", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pipetteColorChange", function MnjScanPickerView_ng_container_3_Template_mnj_pipette_selector_pipetteColorChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.changeColor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MnjScanPickerView_ng_container_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mnj-preview-swatch", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "mnj-input-selector", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("image", ctx_r2._loadedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx_r2.activeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx_r2.activeColor);
} }
class MnjScanPickerView extends _colorpicker_view__WEBPACK_IMPORTED_MODULE_0__.BaseColorpickerView {
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
MnjScanPickerView.ɵfac = function MnjScanPickerView_Factory(t) { return new (t || MnjScanPickerView)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_color_color_adapter__WEBPACK_IMPORTED_MODULE_1__.ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_colorpicker_intl__WEBPACK_IMPORTED_MODULE_2__.MnjColorpickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef)); };
MnjScanPickerView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MnjScanPickerView, selectors: [["mnj-scan-picker-view"]], hostAttrs: [1, "mnj-scan-picker-view"], exportAs: ["mnjScanPickerView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{ provide: _colorpicker_view__WEBPACK_IMPORTED_MODULE_0__.ColorPickerView, useExisting: MnjScanPickerView }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [["class", "upload-control", 3, "click", "drop", "dragover", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "upload-control--fileInput", 3, "change"], ["fileInput", ""], [4, "ngIf"], [1, "upload-control", 3, "click", "drop", "dragover"], [1, "mat-body"], [3, "image", "pipetteColorChange"], ["mat-mini-fab", "", "color", "primary", 1, "upload-control--fab", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color"]], template: function MnjScanPickerView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MnjScanPickerView_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MnjScanPickerView_Template_input_change_1_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MnjScanPickerView_ng_container_3_Template, 9, 3, "ng-container", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx._loadedImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._loadedImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _selectors_pipette_pipette_selector__WEBPACK_IMPORTED_MODULE_3__.MnjPipetteSelector, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _selectors_preview_swatch_preview_swatch__WEBPACK_IMPORTED_MODULE_4__.MnjPreviewSwatch, _selectors_input_input_selector__WEBPACK_IMPORTED_MODULE_5__.MnjInputSelector], styles: [".mnj-scan-picker-view .controls-container {\n  align-items: center;\n  display: flex;\n}\n.mnj-scan-picker-view .controls-container--input {\n  margin-left: 15px;\n  flex: 1;\n}\n.mnj-scan-picker-view {\n  display: block;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n.mnj-scan-picker-view .mnj-pipette-selector {\n  height: calc(100% - 50px);\n}\n.mnj-scan-picker-view .upload-control {\n  border: 2px dashed currentColor;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n}\n.mnj-scan-picker-view .upload-control--fileInput {\n  display: none;\n}\n.mnj-scan-picker-view .upload-control--fab {\n  position: absolute;\n  right: -8px;\n  top: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi12aWV3LnNjc3MiLCJzY2FuLXZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUk7RUFDRSxpQkFBQTtFQUNBLE9BQUE7QUNBTjtBQUxBO0VBR0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTUY7QUFKRTtFQUNFLHlCQUFBO0FBTUo7QUFIRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFLSjtBQUhJO0VBQ0UsYUFBQTtBQUtOO0FBRkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSU4iLCJmaWxlIjoic2Nhbi12aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY29tbW9uLXZpZXcge1xuICAuY29udHJvbHMtY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmLS1pbnB1dCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9jb21tb24tdmlldy5zY3NzJztcblxuLm1uai1zY2FuLXBpY2tlci12aWV3IHtcbiAgQGV4dGVuZCAlY29tbW9uLXZpZXc7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5tbmotcGlwZXR0ZS1zZWxlY3RvciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgfVxuXG4gIC51cGxvYWQtY29udHJvbCB7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGN1cnJlbnRDb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICYtLWZpbGVJbnB1dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICYtLWZhYiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLThweDtcbiAgICAgIHRvcDogLThweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 8688:
/*!********************************************************************!*\
  !*** ./projects/app/$_lazy_route_resources/ lazy namespace object ***!
  \********************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8688;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4986)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map