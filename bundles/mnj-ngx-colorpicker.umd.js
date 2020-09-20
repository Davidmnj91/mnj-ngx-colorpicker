(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('rxjs'), require('@angular/common'), require('@angular/cdk/platform'), require('@angular/cdk/bidi'), require('rxjs/operators'), require('@angular/material/button'), require('@angular/cdk/a11y'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/material/core'), require('@angular/animations'), require('@angular/material/dialog'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/form-field'), require('@angular/cdk/scrolling'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('mnj-ngx-colorpicker', ['exports', '@angular/core', '@angular/cdk/coercion', '@angular/cdk/keycodes', 'rxjs', '@angular/common', '@angular/cdk/platform', '@angular/cdk/bidi', 'rxjs/operators', '@angular/material/button', '@angular/cdk/a11y', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/material/core', '@angular/animations', '@angular/material/dialog', '@angular/forms', '@angular/material/input', '@angular/material/form-field', '@angular/cdk/scrolling', '@angular/material/icon'], factory) :
    (global = global || self, factory(global['mnj-ngx-colorpicker'] = {}, global.ng.core, global.ng.cdk.coercion, global.ng.cdk.keycodes, global.rxjs, global.ng.common, global.ng.cdk.platform, global.ng.cdk.bidi, global.rxjs.operators, global.ng.material.button, global.ng.cdk.a11y, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.material.core, global.ng.animations, global.ng.material.dialog, global.ng.forms, global.ng.material.input, global.ng.material.formField, global.ng.cdk.scrolling, global.ng.material.icon));
}(this, (function (exports, i0, coercion, keycodes, rxjs, i3, platform, i2, operators, i2$1, i3$1, i5, portal, core, animations, i4, forms, input, i2$2, scrolling, icon) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /** Converts RGB representation to HSL */
    function rgbToHsl(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue;
        var coercedRed = red / 255;
        var coercedGreen = green / 255;
        var coercedBlue = blue / 255;
        var cmax = Math.max(coercedRed, coercedGreen, coercedBlue);
        var cmin = Math.min(coercedRed, coercedGreen, coercedBlue);
        var delta = cmax - cmin;
        var hue = 0;
        var saturation = 0;
        var lightness = (cmax + cmin) / 2;
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
        return { hue: hue, saturation: saturation, lightness: lightness };
    }
    /** Converts RGB representation to HSV */
    function rgbToHsv(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue;
        var coercedRed = red / 255;
        var coercedGreen = green / 255;
        var coercedBlue = blue / 255;
        var cmax = Math.max(coercedRed, coercedGreen, coercedBlue);
        var cmin = Math.min(coercedRed, coercedGreen, coercedBlue);
        var delta = cmax - cmin;
        var value = Math.round(cmax * 100) || 0;
        var hue = 0;
        var saturation = 0;
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
        return { hue: hue, saturation: saturation, value: value };
    }
    /** Converts RGB representation to HWB */
    function rgbToHwb(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue;
        var _b = rgbToHsv({ red: red, green: green, blue: blue }), hue = _b.hue, saturation = _b.saturation, value = _b.value;
        var coercedRed = red / 255;
        var coercedGreen = green / 255;
        var coercedBlue = blue / 255;
        var cmax = Math.max(coercedRed, coercedGreen, coercedBlue);
        var cmin = Math.min(coercedRed, coercedGreen, coercedBlue);
        var whiteness = Math.round(cmin * 100) / 100;
        var blackness = Math.round((1 - cmax) * 100) / 100;
        return { hue: hue, whiteness: whiteness, blackness: blackness };
    }
    /** Converts RGB representation to CMYK */
    function rgbToCmyk(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue;
        var cyan, magenta, yellow, black;
        var coercedRed = red / 255;
        var coercedGreen = green / 255;
        var coercedBlue = blue / 255;
        var max = Math.max(coercedRed, coercedGreen, coercedBlue);
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
        return { cyan: cyan, magenta: magenta, yellow: yellow, black: black };
    }
    /** Converts RGB representation to HEX */
    function rgbToHex(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue;
        // tslint:disable-next-line: no-bitwise
        return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    }
    /** Converts an Hex representation to RGB */
    function hexToRgb(hex) {
        var isValidHex = /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
        if (!isValidHex) {
            return null;
        }
        var parsedHex = hex
            .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (_, r, g, b) { return '#' + r + r + g + g + b + b; })
            .substring(1)
            .match(/.{2}/g)
            .map(function (x) { return parseInt(x, 16); });
        return { red: parsedHex[0], green: parsedHex[1] || 0, blue: parsedHex[2] || 0 };
    }
    /** Converts an HSL representation to RGB */
    function hslToRgb(_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness;
        var sat = saturation / 100;
        var light = lightness / 100;
        var c = sat * (1 - Math.abs(2 * light - 1));
        var h = hue / 60;
        var x = c * (1 - Math.abs((h % 2) - 1));
        var m = light - c / 2;
        var precision = 255;
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
    function hslToHsv(_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness;
        var s = Math.min(saturation / 100, 1);
        var l = Math.min(lightness / 100, 1);
        if (l === 0) {
            return { hue: hue, saturation: 0, value: 0 };
        }
        else {
            var v = l + (s * (1 - Math.abs(2 * l - 1))) / 2;
            return { hue: hue, saturation: Math.round(((2 * (v - l)) / v) * 100), value: Math.round(v * 100) };
        }
    }
    /** Converts an HSV representation to HSL */
    function hsvToHsl(_a) {
        var hue = _a.hue, saturation = _a.saturation, value = _a.value;
        var s = saturation / 100;
        var v = value / 100;
        if (v === 0) {
            return { hue: hue, saturation: 0, lightness: 0 };
        }
        else if (s === 0 && v === 1) {
            return { hue: hue, saturation: 0, lightness: 100 };
        }
        else {
            var l = (v * (2 - s)) / 2;
            return { hue: hue, saturation: Math.round(((v * s) / (1 - Math.abs(2 * l - 1))) * 100), lightness: Math.round(l * 100) };
        }
    }
    /** Converts an HSV representation to RGB */
    function hsvToRgb(_a) {
        var hue = _a.hue, saturation = _a.saturation, value = _a.value;
        var sat = saturation / 100;
        var val = value / 100;
        var c = sat * val;
        var h = hue / 60;
        var X = c * (1 - Math.abs((h % 2) - 1));
        var m = val - c;
        var precision = 255;
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
    function hsvToHwb(_a) {
        var hue = _a.hue, saturation = _a.saturation, value = _a.value;
        var coercedSaturation = saturation / 100;
        var coercedValue = value / 100;
        var whiteness = Math.round((1 - coercedSaturation) * coercedValue * 100);
        var blackness = Math.round((1 - coercedValue) * 100);
        return { hue: hue, whiteness: whiteness, blackness: blackness };
    }
    /** Converts an HWB representation to RGB */
    function hwbToRgb(_a) {
        var hue = _a.hue, whiteness = _a.whiteness, blackness = _a.blackness;
        var rgb = hslToRgb({ hue: hue, saturation: 1, lightness: 0.5 });
        var tot = whiteness + blackness;
        var resultWhite;
        var resultBlack;
        if (tot > 1) {
            resultWhite = Number((whiteness / tot).toFixed(2));
            resultBlack = Number((blackness / tot).toFixed(2));
        }
        var adjustRgb = function (c, w, b) {
            return ((c / 255) * (1 - w - b) + w) * 255;
        };
        return {
            red: adjustRgb(rgb.red, resultWhite, resultBlack),
            green: adjustRgb(rgb.green, resultWhite, resultBlack),
            blue: adjustRgb(rgb.blue, resultWhite, resultBlack),
        };
    }
    /** Converts an HWB representation to HSV */
    function hwbToHsv(_a) {
        var hue = _a.hue, whiteness = _a.whiteness, blackness = _a.blackness;
        var coercedWhiteness = whiteness / 100;
        var coercedBlackness = blackness / 100;
        var saturation = Math.round((1 - coercedWhiteness / (1 - coercedBlackness)) * 100);
        var value = Math.round((1 - coercedBlackness) * 100);
        return { hue: hue, saturation: saturation, value: value };
    }
    /** Converts a CMYK representation to RGB */
    function cmykToRgb(_a) {
        var cyan = _a.cyan, magenta = _a.magenta, yellow = _a.yellow, black = _a.black;
        var red = 255 - Math.min(1, cyan * (1 - black) + black) * 255;
        var green = 255 - Math.min(1, magenta * (1 - black) + black) * 255;
        var blue = 255 - Math.min(1, yellow * (1 - black) + black) * 255;
        return { red: red, green: green, blue: blue };
    }

    var CSS_COLOR_NAMES = {
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
    function fromRgb(_a, alpha) {
        var red = _a.red, green = _a.green, blue = _a.blue;
        if (alpha === void 0) { alpha = 1; }
        var coercedRed = clamp(0, 255, red);
        var coercedGreen = clamp(0, 255, green);
        var coercedBlue = clamp(0, 255, blue);
        var _b = rgbToHsl({
            red: coercedRed,
            green: coercedGreen,
            blue: coercedBlue,
        }), hue = _b.hue, saturation = _b.saturation, lightness = _b.lightness;
        return {
            red: coercedRed,
            green: coercedGreen,
            blue: coercedBlue,
            hue: hue,
            saturation: saturation,
            lightness: lightness,
            alpha: alpha,
        };
    }
    /** Builds color object from Hue, Saturation, Lightness values */
    function fromHsl(_a, alpha) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness;
        if (alpha === void 0) { alpha = 1; }
        var coercedHue = clamp(0, 359, hue);
        var coercedSat = clamp(0, 100, saturation);
        var coercedLightness = clamp(0, 100, lightness);
        var _b = hslToRgb({ hue: coercedHue, saturation: coercedSat, lightness: coercedLightness }), red = _b.red, green = _b.green, blue = _b.blue;
        return {
            red: red,
            green: green,
            blue: blue,
            hue: coercedHue,
            saturation: coercedSat,
            lightness: coercedLightness,
            alpha: alpha,
        };
    }
    /** Builds color object from Hue, Saturation, Value values */
    function fromHsv(_a, alpha) {
        var hue = _a.hue, saturation = _a.saturation, value = _a.value;
        if (alpha === void 0) { alpha = 1; }
        var coercedHue = clamp(0, 359, hue);
        var coercedSat = clamp(0, 100, saturation);
        var coercedValue = clamp(0, 100, value);
        var _b = hsvToRgb({ hue: coercedHue, saturation: coercedSat, value: coercedValue }), red = _b.red, green = _b.green, blue = _b.blue;
        var _c = hsvToHsl({
            hue: coercedHue,
            saturation: coercedSat,
            value: coercedValue,
        }), hslHue = _c.hue, hslSat = _c.saturation, hslLightness = _c.lightness;
        return {
            red: red,
            green: green,
            blue: blue,
            hue: hslHue,
            saturation: hslSat,
            lightness: hslLightness,
            alpha: alpha,
        };
    }
    /** Builds color object from Hue, Saturation, Value values */
    function fromHwb(_a, alpha) {
        var hue = _a.hue, whiteness = _a.whiteness, blackness = _a.blackness;
        if (alpha === void 0) { alpha = 1; }
        var coercedHue = clamp(0, 359, hue);
        var coercedWhiteness = clamp(0, 100, whiteness);
        var coercedBlackness = clamp(0, 100, blackness);
        var rgb = hwbToRgb({ hue: coercedHue, whiteness: coercedWhiteness, blackness: coercedBlackness });
        var hsl = rgbToHsl(rgb);
        return {
            red: rgb.red,
            green: rgb.green,
            blue: rgb.blue,
            hue: coercedHue,
            saturation: hsl.saturation,
            lightness: hsl.lightness,
            alpha: alpha,
        };
    }
    /** Builds color object from Cyan, Magenta, Yellow and Black values */
    function fromCmyk(_a, alpha) {
        var cyan = _a.cyan, magenta = _a.magenta, yellow = _a.yellow, black = _a.black;
        if (alpha === void 0) { alpha = 1; }
        var coercedCyan = clamp(0, 100, cyan);
        var coercedMagenta = clamp(0, 100, magenta);
        var coercedYellow = clamp(0, 100, yellow);
        var coercedBlack = clamp(0, 100, black);
        var _b = cmykToRgb({
            cyan: coercedCyan,
            magenta: coercedMagenta,
            yellow: coercedYellow,
            black: coercedBlack,
        }), red = _b.red, green = _b.green, blue = _b.blue;
        var _c = rgbToHsl({ red: red, green: green, blue: blue }), hue = _c.hue, saturation = _c.saturation, lightness = _c.lightness;
        return {
            red: red,
            green: green,
            blue: blue,
            hue: hue,
            saturation: saturation,
            lightness: lightness,
            alpha: alpha,
        };
    }
    /** Builds color object from Hex string value */
    function fromHex(hex) {
        var isValidHex = /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
        if (!isValidHex) {
            return null;
        }
        var _a = __read(hex
            .replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i, function (_, r, g, b, a) { return '#' + r + r + g + g + b + b + a + a; })
            .substring(1)
            .match(/.{2}/g)
            .map(function (x) { return parseInt(x, 16); }), 4), red = _a[0], green = _a[1], blue = _a[2], _b = _a[3], alpha = _b === void 0 ? 100 : _b;
        var _c = rgbToHsl({ red: red, green: green, blue: blue }), hue = _c.hue, saturation = _c.saturation, lightness = _c.lightness;
        return {
            red: red,
            green: green,
            blue: blue,
            hue: hue,
            saturation: saturation,
            lightness: lightness,
            alpha: alpha / 100,
        };
    }
    function parseString(colorString) {
        // Regex to extract values inside parenthesis
        var extractColorValuesRegex = /\((.*)\)/;
        // Transforms a string number or percentage into a valid and clamped color number
        var toColorNumber = function (value, min, max, allowPercent) {
            if (allowPercent === void 0) { allowPercent = true; }
            var numberValue;
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
            var colorMatch = colorString.match(extractColorValuesRegex);
            if (!colorMatch) {
                return;
            }
            var colorArray = colorMatch[1].split(',');
            if (colorArray.length < 3 || colorArray.length > 4) {
                return;
            }
            var _a = __read(colorArray.map(function (x, i) { return toColorNumber(x, 0, i < 3 ? 255 : 1, false); }), 4), red = _a[0], green = _a[1], blue = _a[2], _b = _a[3], alpha = _b === void 0 ? 1 : _b;
            return fromRgb({ red: red, green: green, blue: blue }, alpha);
        }
        if (colorString.startsWith('hsl')) {
            var colorMatch = colorString.match(extractColorValuesRegex);
            if (!colorMatch) {
                return;
            }
            var colorArray = colorMatch[1].split(',');
            if (colorArray.length < 3 || colorArray.length > 4) {
                return;
            }
            var _c = __read(colorArray, 4), hueString = _c[0], satString = _c[1], lightnessString = _c[2], _d = _c[3], alphaString = _d === void 0 ? '1' : _d;
            var hue = toColorNumber(hueString, 0, 359, false);
            var sat = toColorNumber(satString, 0, 100);
            var lightness = toColorNumber(lightnessString, 0, 100);
            var alpha = toColorNumber(alphaString, 0, 1);
            return fromHsl({ hue: hue, saturation: sat, lightness: lightness }, alpha);
        }
        if (colorString.startsWith('hsv')) {
            var colorMatch = colorString.match(extractColorValuesRegex);
            if (!colorMatch) {
                return;
            }
            var colorArray = colorMatch[1].split(',');
            if (colorArray.length < 3 || colorArray.length > 4) {
                return;
            }
            var _e = __read(colorArray, 4), hueString = _e[0], satString = _e[1], valueString = _e[2], _f = _e[3], alphaString = _f === void 0 ? '1' : _f;
            var hue = toColorNumber(hueString, 0, 359, false);
            var sat = toColorNumber(satString, 0, 100);
            var value = toColorNumber(valueString, 0, 100);
            var alpha = toColorNumber(alphaString, 0, 1);
            return fromHsv({ hue: hue, saturation: sat, value: value }, alpha);
        }
        if (colorString.startsWith('hwb')) {
            var colorMatch = colorString.match(extractColorValuesRegex);
            if (!colorMatch) {
                return;
            }
            var colorArray = colorMatch[1].split(',');
            if (colorArray.length < 3 || colorArray.length > 4) {
                return;
            }
            var _g = __read(colorArray, 4), hueString = _g[0], whitenessString = _g[1], blacknessString = _g[2], _h = _g[3], alphaString = _h === void 0 ? '1' : _h;
            var hue = toColorNumber(hueString, 0, 359, false);
            var whiteness = toColorNumber(whitenessString, 0, 100);
            var blackness = toColorNumber(blacknessString, 0, 100);
            var alpha = toColorNumber(alphaString, 0, 1);
            return fromHwb({ hue: hue, whiteness: whiteness, blackness: blackness }, alpha);
        }
        if (colorString.startsWith('cmyk')) {
            var colorMatch = colorString.match(extractColorValuesRegex);
            if (!colorMatch) {
                return;
            }
            var colorArray = colorMatch[1].split(',');
            if (colorArray.length < 4 || colorArray.length > 5) {
                return;
            }
            var _j = __read(colorArray, 5), cyanString = _j[0], magentaString = _j[1], yellowString = _j[2], blackString = _j[3], _k = _j[4], alphaString = _k === void 0 ? '1' : _k;
            var cyan = toColorNumber(cyanString, 0, 100);
            var magenta = toColorNumber(magentaString, 0, 100);
            var yellow = toColorNumber(yellowString, 0, 100);
            var black = toColorNumber(blackString, 0, 100);
            var alpha = toColorNumber(alphaString, 0, 1);
            return fromCmyk({ cyan: cyan, magenta: magenta, yellow: yellow, black: black }, alpha);
        }
        var color = fromHex(colorString);
        if (color) {
            return color;
        }
        var cssColorName = Object.keys(CSS_COLOR_NAMES).find(function (c) { return c.toLowerCase() === colorString.toLowerCase(); });
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
        var hue = color.hue, saturation = color.saturation, lightness = color.lightness;
        var newSat = saturation + coercePercent(amount);
        return fromHsl({ hue: hue, saturation: clamp(0, 100, newSat), lightness: lightness });
    }
    function shade(amount, color) {
        amount = coercePercent(amount) * 100;
        var delta = 100 - color.lightness === 5 ? 0 : (100 - color.lightness) % 10;
        var newLightness = color.lightness + amount + delta;
        return fromHsl({ hue: color.hue, saturation: color.saturation, lightness: newLightness });
    }
    /** Calculates the shades of a given color from 5% to 90% of darkness */
    function calculateShades(color) {
        var colorShade = getColorShade(color);
        var shades = [];
        var amounts = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
        var i = 0;
        while (i < amounts.length) {
            var distance = (colorShade - amounts[i]) / 10;
            var s = {
                title: "" + amounts[i],
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
        var hue = color.hue, saturation = color.saturation, lightness = color.lightness;
        var rotatedHue = (hue + 360 + deg) % 360;
        return fromHsl({ hue: rotatedHue, saturation: saturation, lightness: lightness });
    }
    function getColorShade(color) {
        var lightness = color.lightness;
        var colorShade = 100 - lightness;
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

    var ColorAdapter = /** @class */ (function () {
        function ColorAdapter() {
        }
        /** Checks if the given object is a complete color representation */
        ColorAdapter.prototype.isColorInstance = function (color) {
            return (color &&
                color.red !== undefined &&
                color.green !== undefined &&
                color.blue !== undefined &&
                color.hue !== undefined &&
                color.saturation !== undefined &&
                color.lightness !== undefined &&
                color.alpha !== undefined);
        };
        /**
         * Parses a color from a literal
         * @param colorString literal to be converted to color
         */
        ColorAdapter.prototype.parse = function (colorString) {
            return parseString(colorString);
        };
        /**
         * Returns the given value if given a valid Color or null. Deserializes valid strings
         * into valid Colors and empty string into null. Returns an invalid color for all other values.
         */
        ColorAdapter.prototype.deserialize = function (value) {
            if (typeof value === 'string') {
                if (!value) {
                    return null;
                }
                return parseString(value);
            }
        };
        /** Checks equality between two colors */
        ColorAdapter.prototype.sameColor = function (first, second) {
            if (first && second) {
                var firstValid = this.isValid(first);
                var secondValid = this.isValid(second);
                if (firstValid && secondValid) {
                    var equalAlpha = first.alpha === second.alpha;
                    var equalHsl = first.hue === second.hue && first.saturation === second.saturation && first.lightness === second.lightness;
                    return equalAlpha && equalHsl && !this.compareColor(first, second);
                }
                return firstValid === secondValid;
            }
            return first === second;
        };
        /**
         * Compares two colors based on the Euclidean distance of the sRGB color space.
         * @param first The first color to compare.
         * @param second The second color to compare.
         * @returns 0 if the colors are equal, a number less than 0 if the first color is earlier,
         *     a number greater than 0 if the first color is later.
         */
        ColorAdapter.prototype.compareColor = function (first, second) {
            var redMean = (first.red - second.red) / 2;
            var redDelta = first.red - second.red;
            var greenDelta = first.green - second.green;
            var blueDelta = first.blue - second.blue;
            return Math.sqrt((2 + redMean / 256) * Math.pow(redDelta, 2) +
                4 * Math.pow(greenDelta, 2) +
                (2 + (255 - redDelta) / 256) * Math.pow(blueDelta, 2));
        };
        /** Returns the color if valid otherwise null */
        ColorAdapter.prototype.getValidColorOrNull = function (color) {
            return this.isColorInstance(color) && this.isValid(color) ? color : null;
        };
        /**
         * Checks wether the given color is valid
         * @param color to be validated
         */
        ColorAdapter.prototype.isValid = function (color) {
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
        };
        /**
         * Formats a color as a string according to the given format
         * @param color The color to format
         * @param format The format to display the color as a string
         */
        ColorAdapter.prototype.format = function (color, format, showAlpha) {
            if (showAlpha === void 0) { showAlpha = false; }
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
        };
        /** Outputs the RGB/A string representation of a color */
        ColorAdapter.prototype.toRgbString = function (color, showAlpha) {
            if (showAlpha === void 0) { showAlpha = false; }
            var red = color.red, green = color.green, blue = color.blue, alpha = color.alpha;
            return showAlpha ? "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")" : "rgb(" + red + ", " + green + ", " + blue + ")";
        };
        /** Outputs the HWB/A string representation of a color */
        ColorAdapter.prototype.toHwbString = function (color, showAlpha) {
            if (showAlpha === void 0) { showAlpha = false; }
            var _a = rgbToHwb(color), hue = _a.hue, whiteness = _a.whiteness, blackness = _a.blackness;
            return showAlpha
                ? "hwba(" + hue + ", " + Math.round(whiteness * 100) + "%, " + Math.round(blackness * 100) + "%, " + color.alpha + ")"
                : "hwb(" + hue + ", " + Math.round(whiteness * 100) + "%, " + Math.round(blackness * 100) + "%)";
        };
        /** Outputs the HWB/A decimals string representation of a color */
        ColorAdapter.prototype.toHwbStringDecimal = function (color, showAlpha) {
            if (showAlpha === void 0) { showAlpha = false; }
            var _a = rgbToHwb(color), hue = _a.hue, whiteness = _a.whiteness, blackness = _a.blackness;
            return showAlpha
                ? "hwba(" + hue + ", " + whiteness + ", " + blackness + ", " + color.alpha + ")"
                : "hwb(" + hue + ", " + whiteness + ", " + blackness + ")";
        };
        /** Outputs the HSL/A string representation of a color */
        ColorAdapter.prototype.toHslString = function (color, showAlpha) {
            if (showAlpha === void 0) { showAlpha = false; }
            var hue = color.hue, saturation = color.saturation, lightness = color.lightness, alpha = color.alpha;
            return showAlpha
                ? "hsla(" + hue + ", " + saturation + "%, " + lightness + "%, " + alpha + ")"
                : "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
        };
        /** Outputs the HSL/A decimals string representation of a color */
        ColorAdapter.prototype.toHslStringDecimal = function (color, showAlpha) {
            if (showAlpha === void 0) { showAlpha = false; }
            var hue = color.hue, saturation = color.saturation, lightness = color.lightness, alpha = color.alpha;
            return showAlpha
                ? "hsla(" + hue + ", " + saturation + "%, " + lightness + "%, " + color.alpha + ")"
                : "hsl(" + hue + ", " + saturation + ", " + lightness + ", " + color.alpha + ")";
        };
        /** Outputs the CMYK string representation of a color */
        ColorAdapter.prototype.toCmykString = function (color) {
            var _a = rgbToCmyk(color), cyan = _a.cyan, magenta = _a.magenta, yellow = _a.yellow, black = _a.black;
            return "cmyk(" + cyan + "%, " + magenta + "%, " + yellow + "%, " + black + "%)";
        };
        /** Outputs the CMYK decimals string representation of a color */
        ColorAdapter.prototype.toCmykStringDecimal = function (color) {
            var _a = rgbToCmyk(color), cyan = _a.cyan, magenta = _a.magenta, yellow = _a.yellow, black = _a.black;
            return "cmyk(" + cyan + ", " + magenta + ", " + yellow + ", " + black + ")";
        };
        /** Outputs the HEX/A string representation of a color */
        ColorAdapter.prototype.toHexString = function (color, showAlpha) {
            if (showAlpha === void 0) { showAlpha = false; }
            var code;
            if (showAlpha) {
                code = [color.red, color.green, color.blue, color.alpha * 100]
                    .map(function (x) {
                    var hex = Math.round(x).toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                })
                    .join('');
            }
            else {
                code = [color.red, color.green, color.blue]
                    .map(function (x) {
                    var hex = Math.round(x).toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                })
                    .join('');
            }
            return "#" + code;
        };
        return ColorAdapter;
    }());
    ColorAdapter.ɵfac = function ColorAdapter_Factory(t) { return new (t || ColorAdapter)(); };
    ColorAdapter.ɵprov = i0.ɵɵdefineInjectable({ token: ColorAdapter, factory: ColorAdapter.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ColorAdapter, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], null, null);
    })();

    /** Default color, commonly known as the NO COLOR (Black) */
    var DEFAULT_COLOR = {
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
            defaultPalette: Object.keys(CSS_COLOR_NAMES).map(function (c) { return ({
                title: c,
                color: fromHex(CSS_COLOR_NAMES[c]),
                active: false,
            }); }),
        };
    }
    /** Injection token to be used to override the default options for color module. */
    var MNJ_COLOR_CONFIG_PROVIDER = new i0.InjectionToken('mnj-color-default-options', {
        providedIn: 'root',
        factory: MNJ_DEFAULT_COLOR_CONFIG_FACTORY,
    });

    /** Pure abstract class due the impossibility to add decorators to interfaces */
    var ColorPickerView = /** @class */ (function () {
        function ColorPickerView() {
            /**
             * Emits the color chosen in any view.
             * This doesn't imply a change on the selected color.
             */
            this.activeColorChange = new i0.EventEmitter();
        }
        return ColorPickerView;
    }());
    ColorPickerView.ɵfac = function ColorPickerView_Factory(t) { return new (t || ColorPickerView)(); };
    ColorPickerView.ɵdir = i0.ɵɵdefineDirective({ type: ColorPickerView });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ColorPickerView, [{
                type: i0.Directive
            }], null, null);
    })();
    var BaseColorpickerView = /** @class */ (function () {
        function BaseColorpickerView(_colorAdapter) {
            this._colorAdapter = _colorAdapter;
            this.activeColorChange = new i0.EventEmitter();
        }
        Object.defineProperty(BaseColorpickerView.prototype, "activeColor", {
            /**
             * The color to display in this armonies view.
             */
            get: function () {
                return this._activeColor;
            },
            set: function (value) {
                var oldActiveColor = this._activeColor;
                if (this._colorAdapter.isValid(value) && !this._colorAdapter.sameColor(oldActiveColor, value)) {
                    this._activeColor = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseColorpickerView.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (value) {
                if (this._colorAdapter.sameColor(this.selected, value)) {
                    return;
                }
                this._selected = this._colorAdapter.getValidColorOrNull(value);
            },
            enumerable: false,
            configurable: true
        });
        BaseColorpickerView.prototype.changeColor = function (value) {
            this.activeColor = value;
            this.activeColorChange.emit(this.activeColor);
        };
        return BaseColorpickerView;
    }());
    BaseColorpickerView.ɵfac = function BaseColorpickerView_Factory(t) { return new (t || BaseColorpickerView)(i0.ɵɵdirectiveInject(ColorAdapter)); };
    BaseColorpickerView.ɵdir = i0.ɵɵdefineDirective({ type: BaseColorpickerView, inputs: { activeColor: "activeColor", selected: "selected" }, outputs: { activeColorChange: "activeColorChange" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BaseColorpickerView, [{
                type: i0.Directive
            }], function () { return [{ type: ColorAdapter }]; }, { activeColor: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], activeColorChange: [{
                    type: i0.Output
                }] });
    })();

    function MnjGridSelector_li_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵelement(1, "div", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵstyleMap(ctx_r2.thumbSize());
        }
    }
    function MnjGridSelector_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 2);
            i0.ɵɵlistener("click", function MnjGridSelector_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r4_1); var cell_r1 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.selectColor(cell_r1); });
            i0.ɵɵtemplate(1, MnjGridSelector_li_1_div_1_Template, 2, 2, "div", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var cell_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleMap(ctx_r0.cellSize());
            i0.ɵɵstyleProp("background", ctx_r0.cssColor(cell_r1.color));
            i0.ɵɵproperty("title", cell_r1.title);
            i0.ɵɵattribute("tabIndex", cell_r1.active ? 0 : -1)("aria-label", cell_r1.title)("aria-selected", cell_r1.active);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", cell_r1.active);
        }
    }
    var MnjGridSelector = /** @class */ (function () {
        function MnjGridSelector(colorAdapter, _elementRef, _changeDetectorRef) {
            this.colorAdapter = colorAdapter;
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this.colorSelected = new i0.EventEmitter();
            this.grid = [];
        }
        Object.defineProperty(MnjGridSelector.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                if (this.colorAdapter.sameColor(this.color, value)) {
                    return;
                }
                this._color = value;
                this._buildPalette();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjGridSelector.prototype, "paletteGeneratorFn", {
            get: function () {
                return this._paletteGeneratorFn;
            },
            set: function (value) {
                this._paletteGeneratorFn = value;
                this._buildPalette();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjGridSelector.prototype, "columns", {
            get: function () {
                return this._columns || 10;
            },
            set: function (value) {
                value = coercion.coerceNumberProperty(value);
                if (this._columns !== value) {
                    this._columns = value;
                    this._calculateCellSize();
                }
            },
            enumerable: false,
            configurable: true
        });
        MnjGridSelector.prototype.cssColor = function (color) {
            return this.colorAdapter.toRgbString(color);
        };
        MnjGridSelector.prototype.cellSize = function () {
            return { width: this._cellSize + "px", height: this._cellSize + "px" };
        };
        MnjGridSelector.prototype.thumbSize = function () {
            return { width: this._thumbSize + "px", height: this._thumbSize + "px" };
        };
        MnjGridSelector.prototype.gridStyle = function () {
            return {
                gridTemplateColumns: "repeat(" + this.columns + ", auto)",
                gridGap: 0.25 * this._cellSize + "px",
                padding: (this._cellSize * 0.25) / 2 + "px 0px",
            };
        };
        MnjGridSelector.prototype.ngAfterViewInit = function () {
            this._calculateCellSize();
            this._changeDetectorRef.markForCheck();
        };
        MnjGridSelector.prototype._buildPalette = function () {
            if (this.paletteGeneratorFn && this.color) {
                this.grid = this.paletteGeneratorFn(this.color);
                this._selectedIndex = this.grid.findIndex(function (cell) { return cell.active; });
                this._calculateCellSize();
                this._changeDetectorRef.markForCheck();
            }
        };
        MnjGridSelector.prototype._calculateCellSize = function () {
            if (this._elementRef) {
                var width = this._elementRef.nativeElement.getBoundingClientRect().width;
                var cells = this.columns + this.columns * 0.25 + 1; // Columns per row + (Columns-1/2) spaces in each size of each Column
                var cellSize = Math.trunc(width / cells);
                this._cellSize = cellSize % 2 === 0 ? cellSize : cellSize - 1;
                var thumbSize = Math.trunc(this._cellSize * 0.67);
                this._thumbSize = thumbSize % 2 === 0 ? thumbSize : thumbSize - 1;
            }
        };
        MnjGridSelector.prototype.selectColor = function (shade) {
            var color = shade.color;
            this.colorSelected.emit(color);
        };
        MnjGridSelector.prototype._handleKeydownEvent = function (event) {
            var grid = this.grid;
            var oldActiveIndex = this._selectedIndex;
            var activeIndex = oldActiveIndex;
            switch (event.keyCode) {
                case keycodes.LEFT_ARROW:
                    activeIndex--;
                    break;
                case keycodes.RIGHT_ARROW:
                    activeIndex++;
                    break;
                case keycodes.UP_ARROW:
                    activeIndex -= this.columns;
                    break;
                case keycodes.DOWN_ARROW:
                    activeIndex += this.columns;
                    break;
                case keycodes.PAGE_UP:
                case keycodes.HOME:
                    activeIndex = 0;
                    break;
                case keycodes.PAGE_DOWN:
                case keycodes.END:
                    activeIndex = grid.length - 1;
                    break;
                case keycodes.SPACE:
                    event.preventDefault();
                    this.selectColor(grid[activeIndex]);
                    return;
                default:
                    return;
            }
            activeIndex = clamp(0, grid.length - 1, activeIndex);
            var cells = Array.from(this._elementRef.nativeElement.querySelectorAll('.mnj-grid-selector__row--cell'));
            if (activeIndex !== this._selectedIndex) {
                cells[activeIndex].focus();
                this._selectedIndex = activeIndex;
            }
        };
        return MnjGridSelector;
    }());
    MnjGridSelector.ɵfac = function MnjGridSelector_Factory(t) { return new (t || MnjGridSelector)(i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MnjGridSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjGridSelector, selectors: [["mnj-grid-selector"]], hostAttrs: ["role", "grid", 1, "mnj-grid-selector"], hostBindings: function MnjGridSelector_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function MnjGridSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
            }
        }, inputs: { color: "color", paletteGeneratorFn: "paletteGeneratorFn", columns: "columns" }, outputs: { colorSelected: "colorSelected" }, exportAs: ["mnjGridSelector"], decls: 2, vars: 3, consts: [[1, "mnj-grid-selector__row"], ["class", "mnj-grid-selector__row--cell", 3, "title", "background", "style", "click", 4, "ngFor", "ngForOf"], [1, "mnj-grid-selector__row--cell", 3, "title", "click"], ["class", "mnj-colorpicker-selector__thumb", 3, "style", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjGridSelector_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ul", 0);
                i0.ɵɵtemplate(1, MnjGridSelector_li_1_Template, 2, 9, "li", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵstyleMap(ctx.gridStyle());
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.grid);
            }
        }, directives: [i3.NgForOf, i3.NgIf], styles: [".mnj-grid-selector{display:block;margin:2px 0 12px}.mnj-grid-selector__row{display:-ms-grid;display:grid;justify-content:space-evenly;list-style:none;margin:0}.mnj-grid-selector__row--cell{align-items:center;border-radius:100%;cursor:pointer;display:flex;justify-content:center}.mnj-grid-selector__row--cell:focus,.mnj-grid-selector__row--cell:hover{outline:none;transform:scale(1.5);z-index:1}.mnj-grid-selector .mnj-colorpicker-selector__thumb{position:relative;transform:none}.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner{position:relative}.mnj-grid-selector .mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__inner:after{border:none;position:relative}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjGridSelector, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-grid-selector',
                        templateUrl: 'grid-selector.html',
                        styleUrls: ['grid-selector.scss'],
                        exportAs: 'mnjGridSelector',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            class: 'mnj-grid-selector',
                            role: 'grid',
                            '(keydown)': '_handleKeydownEvent($event)',
                        },
                    }]
            }], function () { return [{ type: ColorAdapter }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { color: [{
                    type: i0.Input
                }], paletteGeneratorFn: [{
                    type: i0.Input
                }], columns: [{
                    type: i0.Input
                }], colorSelected: [{
                    type: i0.Output
                }] });
    })();

    var MnjArmoniesPickerView = /** @class */ (function (_super) {
        __extends(MnjArmoniesPickerView, _super);
        function MnjArmoniesPickerView(_colorAdapter) {
            var _this = _super.call(this, _colorAdapter) || this;
            _this._colorAdapter = _colorAdapter;
            _this.complementaryPaletteFn = function (color) {
                var complementaryColor = complementary(color);
                return calculateShades(complementaryColor);
            };
            _this.splitComplementaryPaletteFn = function (color) {
                var splitComplementaryColor = splitComplementary(color)[0];
                return calculateShades(splitComplementaryColor);
            };
            _this.splitComplementaryPaletteFn1 = function (color) {
                var splitComplementaryColor = splitComplementary(color)[1];
                return calculateShades(splitComplementaryColor);
            };
            _this.analogous1PaletteFn = function (color) {
                var analogousColor = analogous(color)[0];
                return calculateShades(analogousColor);
            };
            _this.analogous2PaletteFn = function (color) {
                var analogousColor = analogous(color)[1];
                return calculateShades(analogousColor);
            };
            _this.triadic1PaletteFn = function (color) {
                var triadicColor = triadic(color)[0];
                return calculateShades(triadicColor);
            };
            _this.triadic2PaletteFn = function (color) {
                var triadicColor = triadic(color)[1];
                return calculateShades(triadicColor);
            };
            _this.tetradic1PaletteFn = function (color) {
                var tetradicColor = tetradic(color)[0];
                return calculateShades(tetradicColor);
            };
            _this.tetradic2PaletteFn = function (color) {
                var tetradicColor = tetradic(color)[1];
                return calculateShades(tetradicColor);
            };
            _this.tetradic3PaletteFn = function (color) {
                var tetradicColor = tetradic(color)[2];
                return calculateShades(tetradicColor);
            };
            return _this;
        }
        return MnjArmoniesPickerView;
    }(BaseColorpickerView));
    MnjArmoniesPickerView.ɵfac = function MnjArmoniesPickerView_Factory(t) { return new (t || MnjArmoniesPickerView)(i0.ɵɵdirectiveInject(ColorAdapter)); };
    MnjArmoniesPickerView.ɵcmp = i0.ɵɵdefineComponent({ type: MnjArmoniesPickerView, selectors: [["mnj-armonies-picker-view"]], hostAttrs: [1, "mnj-armonies-picker-view"], exportAs: ["mnjArmoniesPickerView"], features: [i0.ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjArmoniesPickerView }]), i0.ɵɵInheritDefinitionFeature], decls: 20, vars: 20, consts: [[3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjArmoniesPickerView_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "label");
                i0.ɵɵtext(1, "Complementary:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_2_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "label");
                i0.ɵɵtext(4, "Split Complementary:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_5_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_6_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "label");
                i0.ɵɵtext(8, "Analogous:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_9_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_10_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "label");
                i0.ɵɵtext(12, "Triadic:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_13_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_14_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "label");
                i0.ɵɵtext(16, "Tetradic:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_17_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_18_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjArmoniesPickerView_Template_mnj_grid_selector_colorSelected_19_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.complementaryPaletteFn);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.splitComplementaryPaletteFn1);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous1PaletteFn);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.analogous2PaletteFn);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic1PaletteFn);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.triadic2PaletteFn);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic1PaletteFn);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic2PaletteFn);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.tetradic3PaletteFn);
            }
        }, directives: [MnjGridSelector], styles: [".mnj-armonies-picker-view{display:flex;flex-flow:column}.mnj-armonies-picker-view label{margin-bottom:10px;margin-top:10px}.mnj-armonies-picker-view .mnj-grid-selector__row--cell{height:20px;width:20px}.mnj-armonies-picker-view .mnj-grid-selector__thumb{height:16px;width:16px}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjArmoniesPickerView, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-armonies-picker-view',
                        exportAs: 'mnjArmoniesPickerView',
                        templateUrl: 'armonies-view.html',
                        styleUrls: ['armonies-view.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [{ provide: ColorPickerView, useExisting: MnjArmoniesPickerView }],
                        host: {
                            class: 'mnj-armonies-picker-view',
                        },
                    }]
            }], function () { return [{ type: ColorAdapter }]; }, null);
    })();

    // UTILS
    function getPointerPositionFromEvent(event) {
        var _a = event instanceof MouseEvent ? event : event.touches[0], x = _a.clientX, y = _a.clientY;
        return { x: x, y: y };
    }
    function isSamePosition(point1, point2) {
        if (!point1 || !point2) {
            return false;
        }
        return point1.x === point2.x && point1.y === point2.y;
    }
    function getContainerSize(container) {
        var _a = coercion.coerceElement(container).getBoundingClientRect(), top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom, width = _a.width, height = _a.height;
        return { top: top, left: left, right: right, bottom: bottom, width: width, height: height };
    }
    function getPointerPositionInContainer(pointer, container) {
        var pointerXToContainerX = (pointer.x - container.left) / container.width;
        var pointerYToContainerY = (pointer.y - container.top) / container.height;
        return { x: clamp(0, 1, pointerXToContainerX), y: clamp(0, 1, pointerYToContainerY) };
    }
    /** Options that can be used to bind a passive event listener. */
    var passiveEventListenerOptions = platform.normalizePassiveListenerOptions({ passive: true });
    /** Options that can be used to bind an active event listener. */
    var activeEventListenerOptions = platform.normalizePassiveListenerOptions({ passive: false });
    /** Event options that can be used to bind an active, capturing event. */
    var activeCapturingEventOptions = platform.normalizePassiveListenerOptions({
        passive: false,
        capture: true,
    });
    var BaseSelector = /** @class */ (function () {
        function BaseSelector(colorAdapter, _document, _ngZone, _elementRef, _dir) {
            var _this = this;
            this.colorAdapter = colorAdapter;
            this._document = _document;
            this._ngZone = _ngZone;
            this._elementRef = _elementRef;
            this._dir = _dir;
            this.thumbPosition = { x: 0, y: 0 };
            /** Keeps track of the event listeners that we've bound to the `document`. */
            this._globalListeners = new Map();
            /** Clears out the global event listeners from the `document`. */
            this._clearGlobalListeners = function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.removeEventListener(name, config.handler, config.options);
                });
                _this._globalListeners.clear();
            };
            /** Handler for the `mousedown`/`touchstart` events. */
            this._pointerDown = function (event) {
                var pointer = getPointerPositionFromEvent(event);
                if (isSamePosition(_this.cachedPointerPos, pointer)) {
                    return;
                }
                _this.cachedContainerSize = getContainerSize(_this._elementRef);
                _this.cachedPointerPos = pointer;
                _this.calculateColorFromPosition(_this.cachedContainerSize, pointer);
                var isTouchEvent = event.type.startsWith('touch');
                var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
                var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
                _this._clearGlobalListeners();
                _this._globalListeners
                    .set(moveEvent, {
                    handler: _this.pointerMove,
                    options: activeCapturingEventOptions,
                })
                    .set(upEvent, {
                    handler: _this._clearGlobalListeners,
                    options: true,
                });
                _this.addGlobalListeners();
            };
            this.pointerMove = function (event) {
                var pointer = getPointerPositionFromEvent(event);
                if (isSamePosition(_this.cachedPointerPos, pointer)) {
                    return;
                }
                _this.cachedPointerPos = pointer;
                _this.calculateColorFromPosition(_this.cachedContainerSize, pointer);
            };
        }
        Object.defineProperty(BaseSelector.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                if (this.colorAdapter.sameColor(this._color, value)) {
                    return;
                }
                this._color = value;
                this._setColor(value);
            },
            enumerable: false,
            configurable: true
        });
        BaseSelector.prototype.ngAfterViewInit = function () {
            this.attachListeners();
            this.cachedContainerSize = getContainerSize(this._elementRef);
            // Force setter after view is initialized
            this._setColor(this.color);
        };
        BaseSelector.prototype.ngOnDestroy = function () {
            this._clearGlobalListeners();
        };
        // LISTENERS
        BaseSelector.prototype.attachListeners = function () {
            var _this = this;
            var sliderElement = coercion.coerceElement(this._elementRef);
            this._ngZone.runOutsideAngular(function () {
                sliderElement.addEventListener('mousedown', _this._pointerDown, activeEventListenerOptions);
                sliderElement.addEventListener('touchstart', _this._pointerDown, passiveEventListenerOptions);
            });
        };
        BaseSelector.prototype.addGlobalListeners = function () {
            var _this = this;
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        };
        BaseSelector.prototype._isRtl = function () {
            return this._dir && this._dir.value === 'rtl';
        };
        return BaseSelector;
    }());
    BaseSelector.ɵfac = function BaseSelector_Factory(t) { return new (t || BaseSelector)(i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(i3.DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Directionality)); };
    BaseSelector.ɵdir = i0.ɵɵdefineDirective({ type: BaseSelector, inputs: { color: "color" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BaseSelector, [{
                type: i0.Directive
            }], function () {
            return [{ type: ColorAdapter }, { type: Document, decorators: [{
                            type: i0.Inject,
                            args: [i3.DOCUMENT]
                        }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i2.Directionality }];
        }, { color: [{
                    type: i0.Input
                }] });
    })();

    var MnjSaturationSelector = /** @class */ (function (_super) {
        __extends(MnjSaturationSelector, _super);
        function MnjSaturationSelector(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
            var _this = _super.call(this, colorAdapter, _document, _ngZone, _elementRef, _dir) || this;
            _this.colorAdapter = colorAdapter;
            _this._document = _document;
            _this._ngZone = _ngZone;
            _this._elementRef = _elementRef;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._dir = _dir;
            _this.satChange = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(MnjSaturationSelector.prototype, "satThumbPos", {
            get: function () {
                return { left: this.thumbPosition.x + "%", top: this.thumbPosition.y + "%" };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjSaturationSelector.prototype, "satBackgroundColor", {
            get: function () {
                return { 'background-color': "hsl(" + this.color.hue + ", 100%, 50%)" };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjSaturationSelector.prototype, "satThumbBackgroundColor", {
            get: function () {
                return { 'background-color': this.colorAdapter.format(this.color, 'RGB') };
            },
            enumerable: false,
            configurable: true
        });
        MnjSaturationSelector.prototype._setColor = function (color) {
            if (this._elementRef) {
                var _a = hslToHsv(color), saturation = _a.saturation, value = _a.value;
                var xPosition = clamp(0, 100, saturation);
                var yPosition = clamp(0, 100, 100 - value);
                if (this._isRtl()) {
                    xPosition = 100 - xPosition;
                }
                this.thumbPosition = { x: xPosition, y: yPosition };
            }
            this._changeDetectorRef.markForCheck();
        };
        MnjSaturationSelector.prototype.calculateColorFromPosition = function (container, pointerPos) {
            var _this = this;
            this._ngZone.run(function () {
                var _a = getPointerPositionInContainer(pointerPos, container), x = _a.x, y = _a.y;
                var pointerX = x * 100;
                var pointerY = y * 100;
                if (_this._isRtl()) {
                    pointerX = 100 - pointerX;
                }
                _this.thumbPosition = { x: pointerX, y: pointerY };
                var saturation = Math.round(pointerX) || 0;
                var value = Math.round(100 - pointerY) || 0;
                saturation = clamp(0, 100, saturation);
                value = clamp(0, 100, value);
                var hue = _this.color.hue;
                var color = fromHsv({ hue: hue, saturation: saturation, value: value });
                _this.satChange.emit(color);
            });
        };
        MnjSaturationSelector.prototype._handleKeydownEvent = function (event) {
            var _a = this.color, hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness;
            var isRtl = this._isRtl();
            var newSaturation = saturation;
            var newLightness = lightness;
            switch (event.keyCode) {
                case keycodes.UP_ARROW:
                    newLightness++;
                    break;
                case keycodes.LEFT_ARROW:
                    newSaturation += isRtl ? 1 : -1;
                    break;
                case keycodes.DOWN_ARROW:
                    newLightness--;
                    break;
                case keycodes.RIGHT_ARROW:
                    newSaturation += isRtl ? -1 : +1;
                    break;
                case keycodes.PAGE_UP:
                    newLightness = newLightness - 10;
                    break;
                case keycodes.PAGE_DOWN:
                    newLightness = newLightness + 10;
                    break;
                case keycodes.HOME:
                    newSaturation = 0;
                    newLightness = 0;
                    break;
                case keycodes.END:
                    newSaturation = 100;
                    newLightness = 50;
                    break;
                default:
                    return;
            }
            newSaturation = clamp(0, 100, newSaturation);
            newLightness = clamp(0, 100, newLightness);
            var color = fromHsl({ hue: hue, saturation: newSaturation, lightness: newLightness });
            this.satChange.emit(color);
        };
        return MnjSaturationSelector;
    }(BaseSelector));
    MnjSaturationSelector.ɵfac = function MnjSaturationSelector_Factory(t) { return new (t || MnjSaturationSelector)(i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(i3.DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality)); };
    MnjSaturationSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjSaturationSelector, selectors: [["mnj-saturation-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-saturation-selector"], hostVars: 3, hostBindings: function MnjSaturationSelector_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function MnjSaturationSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
            }
            if (rf & 2) {
                i0.ɵɵattribute("tabindex", 0);
                i0.ɵɵclassProp("mnj-saturation-selector--rtl", ctx._isRtl());
            }
        }, outputs: { satChange: "satChange" }, features: [i0.ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjSaturationSelector }]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "mnj-saturation-selector__mask"], [1, "mnj-saturation-selector__mask--fill", 3, "ngStyle"], [1, "mnj-saturation-selector__mask--saturation"], [1, "mnj-saturation-selector__mask--value"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner", 3, "ngStyle"]], template: function MnjSaturationSelector_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelement(2, "div", 2);
                i0.ɵɵelement(3, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelement(5, "div", 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngStyle", ctx.satBackgroundColor);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngStyle", ctx.satThumbPos);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngStyle", ctx.satThumbBackgroundColor);
            }
        }, directives: [i3.NgStyle], styles: [".mnj-saturation-selector{min-height:80px}.mnj-saturation-selector__mask{border-radius:2px;height:100%;overflow:hidden;position:relative;width:100%}.mnj-saturation-selector__mask--fill,.mnj-saturation-selector__mask--saturation,.mnj-saturation-selector__mask--value{height:100%;position:absolute;width:100%}.mnj-saturation-selector__mask--saturation{background-image:linear-gradient(90deg,#fff,transparent)}.mnj-saturation-selector__mask--value{background-image:linear-gradient(0deg,#000,transparent)}.mnj-saturation-selector__mask--rtl .mnj-saturation-selector__mask--saturation{background-image:linear-gradient(270deg,#fff,transparent)}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjSaturationSelector, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-saturation-selector',
                        templateUrl: 'sat-selector.html',
                        styleUrls: ['sat-selector.scss', '../base-selector.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [{ provide: BaseSelector, useExisting: MnjSaturationSelector }],
                        host: {
                            class: 'mnj-colorpicker-selector mnj-saturation-selector',
                            '[class.mnj-saturation-selector--rtl]': '_isRtl()',
                            '[attr.tabindex]': '0',
                            '(keydown)': '_handleKeydownEvent($event)',
                        },
                    }]
            }], function () {
            return [{ type: ColorAdapter }, { type: Document, decorators: [{
                            type: i0.Inject,
                            args: [i3.DOCUMENT]
                        }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality }];
        }, { satChange: [{
                    type: i0.Output
                }] });
    })();

    var MnjHueSelector = /** @class */ (function (_super) {
        __extends(MnjHueSelector, _super);
        function MnjHueSelector(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
            var _this = _super.call(this, colorAdapter, _document, _ngZone, _elementRef, _dir) || this;
            _this.colorAdapter = colorAdapter;
            _this._document = _document;
            _this._ngZone = _ngZone;
            _this._elementRef = _elementRef;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._dir = _dir;
            _this.hueChange = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(MnjHueSelector.prototype, "hueThumbPos", {
            get: function () {
                return { left: this.thumbPosition.x + "%", top: '50%' };
            },
            enumerable: false,
            configurable: true
        });
        MnjHueSelector.prototype._setColor = function (color) {
            if (this._elementRef) {
                var hue = color.hue || 0;
                var xPosition = clamp(0, 100, (hue / 360) * 100);
                if (this._isRtl()) {
                    xPosition = 100 - xPosition;
                }
                this.thumbPosition = { x: xPosition, y: 50 };
            }
            this._changeDetectorRef.markForCheck();
        };
        MnjHueSelector.prototype.calculateColorFromPosition = function (container, pointerPos) {
            var _this = this;
            this._ngZone.run(function () {
                var pointerToContainerX = getPointerPositionInContainer(pointerPos, container).x;
                var pointerX = Math.round(pointerToContainerX * 100);
                if (_this._isRtl()) {
                    pointerX = 100 - pointerX;
                }
                _this.thumbPosition = { x: pointerX, y: 50 };
                var hue = Math.round(pointerToContainerX * 360);
                hue = clamp(0, 359, hue);
                var _a = _this.color, saturation = _a.saturation, lightness = _a.lightness;
                var color = fromHsl({ hue: hue, saturation: saturation, lightness: lightness });
                _this.hueChange.emit(color);
            });
        };
        MnjHueSelector.prototype._handleKeydownEvent = function (event) {
            var _a = this.color, oldHue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha = _a.alpha;
            var isRtl = this._isRtl();
            var newHue = oldHue;
            switch (event.keyCode) {
                case keycodes.UP_ARROW:
                case keycodes.LEFT_ARROW:
                    newHue = newHue + (isRtl ? 1 : -1);
                    break;
                case keycodes.DOWN_ARROW:
                case keycodes.RIGHT_ARROW:
                    newHue = newHue + (isRtl ? -1 : +1);
                    break;
                case keycodes.HOME:
                    newHue = 0;
                    break;
                case keycodes.END:
                    newHue = 359;
                    break;
                case keycodes.PAGE_UP:
                    newHue = newHue + (isRtl ? 60 : -60);
                    break;
                case keycodes.PAGE_DOWN:
                    newHue = newHue + (isRtl ? -60 : +60);
                    break;
                default:
                    return;
            }
            newHue = (newHue + 360) % 360;
            var color = fromHsl({ hue: newHue, saturation: saturation, lightness: lightness }, alpha);
            this.hueChange.emit(color);
        };
        return MnjHueSelector;
    }(BaseSelector));
    MnjHueSelector.ɵfac = function MnjHueSelector_Factory(t) { return new (t || MnjHueSelector)(i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(i3.DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality)); };
    MnjHueSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjHueSelector, selectors: [["mnj-hue-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-hue-selector"], hostVars: 1, hostBindings: function MnjHueSelector_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function MnjHueSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
            }
            if (rf & 2) {
                i0.ɵɵattribute("tabindex", 0);
            }
        }, outputs: { hueChange: "hueChange" }, features: [i0.ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjHueSelector }]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjHueSelector_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngStyle", ctx.hueThumbPos);
            }
        }, directives: [i3.NgStyle], styles: [".mnj-hue-selector{background:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjHueSelector, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-hue-selector',
                        templateUrl: 'hue-selector.html',
                        styleUrls: ['hue-selector.scss', '../base-selector.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [{ provide: BaseSelector, useExisting: MnjHueSelector }],
                        host: {
                            class: 'mnj-colorpicker-selector mnj-hue-selector',
                            '[attr.tabindex]': '0',
                            '(keydown)': '_handleKeydownEvent($event)',
                        },
                    }]
            }], function () {
            return [{ type: ColorAdapter }, { type: Document, decorators: [{
                            type: i0.Inject,
                            args: [i3.DOCUMENT]
                        }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality }];
        }, { hueChange: [{
                    type: i0.Output
                }] });
    })();

    var MnjPreviewSwatch = /** @class */ (function () {
        function MnjPreviewSwatch(colorAdapter) {
            this.colorAdapter = colorAdapter;
        }
        Object.defineProperty(MnjPreviewSwatch.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                if (this.colorAdapter.sameColor(this.color, value)) {
                    return;
                }
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjPreviewSwatch.prototype, "cssBackground", {
            get: function () {
                return this.colorAdapter.toRgbString(this.color, true);
            },
            enumerable: false,
            configurable: true
        });
        return MnjPreviewSwatch;
    }());
    MnjPreviewSwatch.ɵfac = function MnjPreviewSwatch_Factory(t) { return new (t || MnjPreviewSwatch)(i0.ɵɵdirectiveInject(ColorAdapter)); };
    MnjPreviewSwatch.ɵcmp = i0.ɵɵdefineComponent({ type: MnjPreviewSwatch, selectors: [["mnj-preview-swatch"]], hostAttrs: [1, "mnj-preview-swatch"], inputs: { color: "color" }, decls: 3, vars: 2, consts: [[1, "swatch__container"], [1, "swatch__container--alpha-layer"], [1, "swatch__container--color-layer"]], template: function MnjPreviewSwatch_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelement(2, "div", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵstyleProp("background", ctx.cssBackground);
            }
        }, styles: [".mnj-preview-swatch .swatch__container{cursor:default}.mnj-preview-swatch .swatch__container,.mnj-preview-swatch .swatch__container--alpha-layer,.mnj-preview-swatch .swatch__container--color-layer{border-radius:50%;height:24px;width:24px}.mnj-preview-swatch .swatch__container--alpha-layer{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=\") repeat;background-position:0 0}.mnj-preview-swatch .swatch__container--color-layer{transform:translateY(-24px)}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjPreviewSwatch, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-preview-swatch',
                        templateUrl: 'preview-swatch.html',
                        styleUrls: ['preview-swatch.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            class: 'mnj-preview-swatch',
                        },
                    }]
            }], function () { return [{ type: ColorAdapter }]; }, { color: [{
                    type: i0.Input
                }] });
    })();

    var _c0 = ["colorInput"];
    var MnjInputSelector = /** @class */ (function () {
        function MnjInputSelector(colorAdapter) {
            this.colorAdapter = colorAdapter;
            this._colorFormat = 'HEX';
            this.inputChange = new i0.EventEmitter();
            this._formats = ['HEX', 'RGB', 'HSL', 'HWB', 'CMYK'];
            this._selectedIndex = 0;
        }
        Object.defineProperty(MnjInputSelector.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                if (this.colorAdapter.sameColor(this.color, value)) {
                    return;
                }
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjInputSelector.prototype, "colorFormat", {
            set: function (value) {
                if (value !== this._colorFormat) {
                    this._colorFormat = value;
                    this._selectedIndex = this._formats.indexOf(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjInputSelector.prototype, "colorString", {
            get: function () {
                return this.colorAdapter.format(this.color, this._colorFormat, this.color.alpha !== 1);
            },
            enumerable: false,
            configurable: true
        });
        MnjInputSelector.prototype.changeColor = function (event) {
            var colorString = event.target.value;
            var color = this.colorAdapter.parse(colorString);
            if (this.colorAdapter.isValid(color)) {
                this.inputChange.emit(color);
            }
        };
        MnjInputSelector.prototype.nextFormat = function () {
            this._selectedIndex = (this._selectedIndex + this._formats.length + 1) % this._formats.length;
            this.colorFormat = this._formats[this._selectedIndex];
        };
        MnjInputSelector.prototype.previousFormat = function () {
            this._selectedIndex = (this._selectedIndex + this._formats.length - 1) % this._formats.length;
            this.colorFormat = this._formats[this._selectedIndex];
        };
        MnjInputSelector.prototype._handleKeydownEvent = function (event) {
            switch (event.keyCode) {
                case keycodes.UP_ARROW:
                case keycodes.LEFT_ARROW:
                    this.previousFormat();
                    break;
                case keycodes.DOWN_ARROW:
                case keycodes.RIGHT_ARROW:
                    this.nextFormat();
                    break;
                default:
                    return;
            }
        };
        return MnjInputSelector;
    }());
    MnjInputSelector.ɵfac = function MnjInputSelector_Factory(t) { return new (t || MnjInputSelector)(i0.ɵɵdirectiveInject(ColorAdapter)); };
    MnjInputSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjInputSelector, selectors: [["mnj-input-selector"]], viewQuery: function MnjInputSelector_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.colorInput = _t.first);
            }
        }, hostAttrs: [1, "mnj-input-selector"], hostBindings: function MnjInputSelector_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function MnjInputSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
            }
        }, inputs: { color: "color", colorFormat: "colorFormat" }, outputs: { inputChange: "inputChange" }, decls: 6, vars: 1, consts: [[1, "mnj-input-selector__container"], ["type", "text", "autocorrect", "off", "autocomplete", "off", "spellcheck", "false", "aria-label", "Color code", 1, "color-input", 3, "value", "change"], ["colorInput", ""], [1, "mnj-input-selector__container__switch-buttons"], [1, "switch-buttons--prev", 3, "click"], [1, "switch-buttons--next", 3, "click"]], template: function MnjInputSelector_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "input", 1, 2);
                i0.ɵɵlistener("change", function MnjInputSelector_Template_input_change_1_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "span", 4);
                i0.ɵɵlistener("click", function MnjInputSelector_Template_span_click_4_listener() { return ctx.previousFormat(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "span", 5);
                i0.ɵɵlistener("click", function MnjInputSelector_Template_span_click_5_listener() { return ctx.nextFormat(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("value", ctx.colorString);
            }
        }, styles: [".mnj-input-selector{width:100%}.mnj-input-selector__container{display:flex;grid-gap:5px}.mnj-input-selector__container .color-input{border:none;border-bottom:1px solid;flex:1 0 auto;font-size:inherit;height:24px;padding:6px 8px;text-transform:uppercase}.mnj-input-selector__container .color-input:focus{border-bottom:1px solid;outline:none}.mnj-input-selector__container__switch-buttons{display:flex;flex-flow:column nowrap}.mnj-input-selector__container__switch-buttons .switch-buttons--next,.mnj-input-selector__container__switch-buttons .switch-buttons--prev{height:10px;position:relative;width:10px}.mnj-input-selector__container__switch-buttons .switch-buttons--next:after,.mnj-input-selector__container__switch-buttons .switch-buttons--prev:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0}[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--next,[dir=rtl] .mnj-input-selector__container__switch-buttons .switch-buttons--prev{transform:rotate(180deg)}.mnj-input-selector__container__switch-buttons .switch-buttons--prev:after{border-left-width:2px;transform:translateY(4px) rotate(45deg)}.mnj-input-selector__container__switch-buttons .switch-buttons--next:after{border-right-width:2px;transform:translateY(4px) rotate(135deg)}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjInputSelector, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-input-selector',
                        templateUrl: 'input-selector.html',
                        styleUrls: ['input-selector.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            class: 'mnj-input-selector',
                            '(keydown)': '_handleKeydownEvent($event)',
                        },
                    }]
            }], function () { return [{ type: ColorAdapter }]; }, { color: [{
                    type: i0.Input
                }], colorFormat: [{
                    type: i0.Input
                }], inputChange: [{
                    type: i0.Output
                }], colorInput: [{
                    type: i0.ViewChild,
                    args: ['colorInput']
                }] });
    })();

    var MnjAlphaSelector = /** @class */ (function (_super) {
        __extends(MnjAlphaSelector, _super);
        function MnjAlphaSelector(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef, _dir) {
            var _this = _super.call(this, colorAdapter, _document, _ngZone, _elementRef, _dir) || this;
            _this.colorAdapter = colorAdapter;
            _this._document = _document;
            _this._ngZone = _ngZone;
            _this._elementRef = _elementRef;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._dir = _dir;
            _this.alphaChange = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(MnjAlphaSelector.prototype, "alphaThumbPos", {
            get: function () {
                return { left: this.thumbPosition.x + "%", top: '50%' };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjAlphaSelector.prototype, "gradient", {
            get: function () {
                var _a = this.color, red = _a.red, green = _a.green, blue = _a.blue;
                var direction = this._isRtl() ? 'to left' : 'to right';
                return {
                    backgroundImage: "linear-gradient(" + direction + ", rgba(" + red + ", " + green + ", " + blue + ", 0) 0%, rgb(" + red + ", " + green + ", " + blue + ") 100%)",
                };
            },
            enumerable: false,
            configurable: true
        });
        MnjAlphaSelector.prototype._setColor = function (color) {
            if (this._elementRef) {
                var alpha = color.alpha * 100;
                var xPosition = clamp(0, 100, alpha);
                if (this._isRtl()) {
                    xPosition = 100 - xPosition;
                }
                this.thumbPosition = { x: xPosition, y: 50 };
            }
            this._changeDetectorRef.markForCheck();
        };
        MnjAlphaSelector.prototype.calculateColorFromPosition = function (container, pointerPos) {
            var _this = this;
            this._ngZone.run(function () {
                var pointerToContainerX = getPointerPositionInContainer(pointerPos, container).x;
                var pointerX = Math.round(pointerToContainerX * 100);
                if (_this._isRtl()) {
                    pointerX = 100 - pointerX;
                }
                _this.thumbPosition = { x: pointerX, y: 50 };
                var alpha = Math.round(pointerX) / 100;
                var color = Object.assign({}, _this.color);
                color.alpha = alpha;
                _this.alphaChange.emit(color);
            });
        };
        MnjAlphaSelector.prototype._handleKeydownEvent = function (event) {
            var oldAlpha = this.color.alpha;
            var isRtl = this._isRtl();
            var newAlpha = oldAlpha;
            switch (event.keyCode) {
                case keycodes.UP_ARROW:
                case keycodes.LEFT_ARROW:
                    newAlpha = newAlpha + (isRtl ? 0.01 : -0.01);
                    break;
                case keycodes.DOWN_ARROW:
                case keycodes.RIGHT_ARROW:
                    newAlpha = newAlpha + (isRtl ? -0.01 : 0.01);
                    break;
                case keycodes.HOME:
                    newAlpha = 0;
                    break;
                case keycodes.END:
                    newAlpha = 1;
                    break;
                case keycodes.PAGE_UP:
                    newAlpha = newAlpha + (isRtl ? 0.1 : -0.1);
                    break;
                case keycodes.PAGE_DOWN:
                    newAlpha = newAlpha + (isRtl ? -0.1 : 0.1);
                    break;
                default:
                    return;
            }
            newAlpha = clamp(0, 1, newAlpha);
            var color = Object.assign(Object.assign({}, this.color), { alpha: newAlpha });
            this.alphaChange.emit(color);
        };
        return MnjAlphaSelector;
    }(BaseSelector));
    MnjAlphaSelector.ɵfac = function MnjAlphaSelector_Factory(t) { return new (t || MnjAlphaSelector)(i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(i3.DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality)); };
    MnjAlphaSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjAlphaSelector, selectors: [["mnj-alpha-selector"]], hostAttrs: [1, "mnj-colorpicker-selector", "mnj-alpha-selector"], hostVars: 1, hostBindings: function MnjAlphaSelector_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function MnjAlphaSelector_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
            }
            if (rf & 2) {
                i0.ɵɵattribute("tabindex", 0);
            }
        }, outputs: { alphaChange: "alphaChange" }, features: [i0.ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjAlphaSelector }]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "mnj-alpha-selector__gradient", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"]], template: function MnjAlphaSelector_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelement(2, "div", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngStyle", ctx.gradient);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngStyle", ctx.alphaThumbPos);
            }
        }, directives: [i3.NgStyle], styles: [".mnj-alpha-selector{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2PcvXv3TAYk4Orqmo7MZ6SDAmT7QGx0KxlprwAAw9kbMStVZ6AAAAAASUVORK5CYII=\") repeat 0}.mnj-alpha-selector__gradient{border-radius:2px;height:100%}", ".mnj-colorpicker-selector{border-radius:2px;cursor:pointer;display:block;height:8px;margin:2px 0 12px;position:relative}.mnj-colorpicker-selector:focus{outline:none}.mnj-colorpicker-selector__thumb{border:2px solid;border-radius:100%;box-sizing:border-box;height:18px;pointer-events:none;position:absolute;transform:translate(-50%,-50%);width:18px}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner{border:2px solid;border-radius:100%;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;top:0;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);width:100%}.mnj-colorpicker-selector__thumb .mnj-colorpicker-selector__thumb__inner:after{border:1px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjAlphaSelector, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-alpha-selector',
                        templateUrl: 'alpha-selector.html',
                        styleUrls: ['alpha-selector.scss', '../base-selector.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [{ provide: BaseSelector, useExisting: MnjAlphaSelector }],
                        host: {
                            class: 'mnj-colorpicker-selector mnj-alpha-selector',
                            '[attr.tabindex]': '0',
                            '(keydown)': '_handleKeydownEvent($event)',
                        },
                    }]
            }], function () {
            return [{ type: ColorAdapter }, { type: Document, decorators: [{
                            type: i0.Inject,
                            args: [i3.DOCUMENT]
                        }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality }];
        }, { alphaChange: [{
                    type: i0.Output
                }] });
    })();

    function MnjChromePickerView_mnj_alpha_selector_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mnj-alpha-selector", 7);
            i0.ɵɵlistener("alphaChange", function MnjChromePickerView_mnj_alpha_selector_3_Template_mnj_alpha_selector_alphaChange_0_listener($event) { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.changeColor($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("color", ctx_r0.activeColor);
        }
    }
    var MnjChromePickerView = /** @class */ (function (_super) {
        __extends(MnjChromePickerView, _super);
        function MnjChromePickerView(_colorAdapter) {
            var _this = _super.call(this, _colorAdapter) || this;
            _this._colorAdapter = _colorAdapter;
            _this.colorShadesFn = function (color) {
                return calculateShades(color);
            };
            return _this;
        }
        return MnjChromePickerView;
    }(BaseColorpickerView));
    MnjChromePickerView.ɵfac = function MnjChromePickerView_Factory(t) { return new (t || MnjChromePickerView)(i0.ɵɵdirectiveInject(ColorAdapter)); };
    MnjChromePickerView.ɵcmp = i0.ɵɵdefineComponent({ type: MnjChromePickerView, selectors: [["mnj-chrome-picker-view"]], hostAttrs: [1, "mnj-chrome-picker-view"], inputs: { showAlpha: "showAlpha" }, exportAs: ["mnjChromePickerView"], features: [i0.ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjChromePickerView }]), i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 7, consts: [["cdkFocusInitial", "", 3, "color", "paletteGeneratorFn", "colorSelected"], [3, "color", "satChange"], [3, "color", "hueChange"], [3, "color", "alphaChange", 4, "ngIf"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color", "inputChange"], [3, "color", "alphaChange"]], template: function MnjChromePickerView_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjChromePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(1, "mnj-saturation-selector", 1);
                i0.ɵɵlistener("satChange", function MnjChromePickerView_Template_mnj_saturation_selector_satChange_1_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mnj-hue-selector", 2);
                i0.ɵɵlistener("hueChange", function MnjChromePickerView_Template_mnj_hue_selector_hueChange_2_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, MnjChromePickerView_mnj_alpha_selector_3_Template, 1, 1, "mnj-alpha-selector", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelement(5, "mnj-preview-swatch", 5);
                i0.ɵɵelementStart(6, "mnj-input-selector", 6);
                i0.ɵɵlistener("inputChange", function MnjChromePickerView_Template_mnj_input_selector_inputChange_6_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.colorShadesFn);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.activeColor);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.activeColor);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showAlpha);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("color", ctx.activeColor);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.activeColor);
            }
        }, directives: [MnjGridSelector, MnjSaturationSelector, MnjHueSelector, i3.NgIf, MnjPreviewSwatch, MnjInputSelector, MnjAlphaSelector], styles: [".mnj-chrome-picker-view .controls-container{display:flex}.mnj-chrome-picker-view .controls-container--input{flex:1;margin-left:15px}.mnj-chrome-picker-view{display:flex;flex-direction:column;height:100%}.mnj-chrome-picker-view .mnj-saturation-selector{flex:1 0 auto}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjChromePickerView, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-chrome-picker-view',
                        exportAs: 'mnjChromePickerView',
                        templateUrl: 'chrome-view.html',
                        styleUrls: ['chrome-view.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [{ provide: ColorPickerView, useExisting: MnjChromePickerView }],
                        host: {
                            class: 'mnj-chrome-picker-view',
                        },
                    }]
            }], function () { return [{ type: ColorAdapter }]; }, { showAlpha: [{
                    type: i0.Input
                }] });
    })();

    var MnjPalettePickerView = /** @class */ (function () {
        function MnjPalettePickerView(_colorAdapter) {
            var _this = this;
            this._colorAdapter = _colorAdapter;
            this.paletteFn = function () { return _this.palette; };
            // tslint:disable-next-line: member-ordering
            this.activeColorChange = new i0.EventEmitter();
        }
        Object.defineProperty(MnjPalettePickerView.prototype, "activeColor", {
            get: function () {
                return this._activeColor;
            },
            set: function (value) {
                var oldActiveColor = this._activeColor;
                if (this._colorAdapter.isValid(value) && !this._colorAdapter.sameColor(oldActiveColor, value)) {
                    this._activeColor = value;
                    this._selectColorInPalette();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjPalettePickerView.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (value) {
                if (this._colorAdapter.sameColor(this.selected, value)) {
                    return;
                }
                this._selected = this._colorAdapter.getValidColorOrNull(value);
                this._selectColorInPalette();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjPalettePickerView.prototype, "palette", {
            get: function () {
                return this._palette;
            },
            set: function (value) {
                this._palette = value;
                this._selectColorInPalette();
            },
            enumerable: false,
            configurable: true
        });
        MnjPalettePickerView.prototype.changeColor = function (value) {
            this.activeColor = value;
            this.activeColorChange.emit(this.activeColor);
        };
        MnjPalettePickerView.prototype._selectColorInPalette = function () {
            var _this = this;
            if (!this.palette || !this.activeColor) {
                return;
            }
            var defaultSelected = this.palette.findIndex(function (p) { return p.active === true; });
            if (defaultSelected >= 0) {
                this._palette[defaultSelected].active = false;
            }
            var matchIndex = this.palette.findIndex(function (p) { return _this._colorAdapter.sameColor(p.color, _this.activeColor); });
            // If no match select the first one for keyboard accesibility
            matchIndex = Math.max(0, matchIndex);
            this._palette[matchIndex].active = true;
        };
        return MnjPalettePickerView;
    }());
    MnjPalettePickerView.ɵfac = function MnjPalettePickerView_Factory(t) { return new (t || MnjPalettePickerView)(i0.ɵɵdirectiveInject(ColorAdapter)); };
    MnjPalettePickerView.ɵcmp = i0.ɵɵdefineComponent({ type: MnjPalettePickerView, selectors: [["mnj-palette-picker-view"]], hostAttrs: [1, "mnj-palette-picker-view"], inputs: { activeColor: "activeColor", selected: "selected", palette: "palette" }, outputs: { activeColorChange: "activeColorChange" }, exportAs: ["mnjPalettePickerView"], features: [i0.ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjPalettePickerView }])], decls: 1, vars: 2, consts: [["columns", "6", 3, "color", "paletteGeneratorFn", "colorSelected"]], template: function MnjPalettePickerView_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mnj-grid-selector", 0);
                i0.ɵɵlistener("colorSelected", function MnjPalettePickerView_Template_mnj_grid_selector_colorSelected_0_listener($event) { return ctx.changeColor($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("color", ctx.activeColor)("paletteGeneratorFn", ctx.paletteFn);
            }
        }, directives: [MnjGridSelector], styles: [".mnj-palette-picker-view{display:block}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjPalettePickerView, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-palette-picker-view',
                        templateUrl: 'palette-view.html',
                        styleUrls: ['palette-view.scss'],
                        exportAs: 'mnjPalettePickerView',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [{ provide: ColorPickerView, useExisting: MnjPalettePickerView }],
                        host: {
                            class: 'mnj-palette-picker-view',
                        },
                    }]
            }], function () { return [{ type: ColorAdapter }]; }, { activeColor: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], palette: [{
                    type: i0.Input
                }], activeColorChange: [{
                    type: i0.Output
                }] });
    })();

    /** Colorpicker data that requires internationalization. */
    var MnjColorpickerIntl = /** @class */ (function () {
        function MnjColorpickerIntl() {
            /**
             * Stream that emits whenever the labels here are changed. Use this to notify
             * components if the labels have changed after initialization.
             */
            this.changes = new rxjs.Subject();
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
        return MnjColorpickerIntl;
    }());
    MnjColorpickerIntl.ɵfac = function MnjColorpickerIntl_Factory(t) { return new (t || MnjColorpickerIntl)(); };
    MnjColorpickerIntl.ɵprov = i0.ɵɵdefineInjectable({ token: MnjColorpickerIntl, factory: MnjColorpickerIntl.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorpickerIntl, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], null, null);
    })();

    var _c0$1 = ["imageCanvas"];
    function MnjPipetteSelector_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 7);
        }
        if (rf & 2) {
            var swatch_r3 = ctx.$implicit;
            var i_r4 = ctx.index;
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵstyleProp("background", ctx_r2.getPixelBackground(swatch_r3));
            i0.ɵɵclassProp("mnj-pipette-selector__swatch-container--cell--active", i_r4 === ctx_r2._swatchMiddle);
        }
    }
    function MnjPipetteSelector_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵelementStart(1, "div", 5);
            i0.ɵɵtemplate(2, MnjPipetteSelector_div_2_div_2_Template, 1, 4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", ctx_r1.swatchGridPos);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx_r1.swatchGridStyle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.pipetteSwatchPalette);
        }
    }
    var MnjPipetteSelector = /** @class */ (function () {
        function MnjPipetteSelector(colorAdapter, _document, _ngZone, _elementRef, _changeDetectorRef) {
            var _this = this;
            this.colorAdapter = colorAdapter;
            this._document = _document;
            this._ngZone = _ngZone;
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this.pipetteColorChange = new i0.EventEmitter();
            this._showPipetteSwatch = false;
            this.thumbPosition = { x: 0, y: 0 };
            this.swatchPosition = 'bottom-right';
            /** Keeps track of the event listeners that we've bound to the `document`. */
            this._globalListeners = new Map();
            this.pipetteSwatchPalette = [];
            /** Clears out the global event listeners from the `document`. */
            this._clearGlobalListeners = function () {
                _this.showPipetteSwatch = false;
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.removeEventListener(name, config.handler, config.options);
                });
                _this._globalListeners.clear();
            };
            /** Handler for the `mousedown`/`touchstart` events. */
            this._pointerDown = function (event) {
                var pointer = getPointerPositionFromEvent(event);
                if (isSamePosition(_this.cachedPointerPos, pointer)) {
                    return;
                }
                _this.cachedContainerSize = getContainerSize(_this._elementRef);
                _this.calculateColorFromPosition(_this.cachedContainerSize, pointer);
                var isTouchEvent = event.type.startsWith('touch');
                var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
                var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
                _this._clearGlobalListeners();
                _this._globalListeners
                    .set(moveEvent, {
                    handler: _this.pointerMove,
                    options: activeCapturingEventOptions,
                })
                    .set(upEvent, {
                    handler: _this._clearGlobalListeners,
                    options: true,
                });
                _this.showPipetteSwatch = true;
                _this.addGlobalListeners();
            };
            this.pointerMove = function (event) {
                var pointer = getPointerPositionFromEvent(event);
                if (isSamePosition(_this.cachedPointerPos, pointer)) {
                    return;
                }
                _this.calculateColorFromPosition(_this.cachedContainerSize, pointer);
            };
            this.swatchCells = 9;
        }
        Object.defineProperty(MnjPipetteSelector.prototype, "image", {
            get: function () {
                return this._image;
            },
            set: function (value) {
                this._image = value;
                this._paintCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjPipetteSelector.prototype, "swatchCells", {
            set: function (value) {
                value = coercion.coerceNumberProperty(value);
                value = value % 2 === 1 ? value : value - 1;
                if (value !== this._swatchCells) {
                    this._swatchCells = value;
                    this._swatchMiddle = Math.floor(Math.pow(value, 2) / 2);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjPipetteSelector.prototype, "canvasThumbPos", {
            get: function () {
                return { left: this.thumbPosition.x + "%", top: this.thumbPosition.y + "%" };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjPipetteSelector.prototype, "swatchGridStyle", {
            get: function () {
                return {
                    gridTemplateColumns: "repeat(" + this._swatchCells + ", 10px)",
                    gridTemplateRows: "repeat(" + this._swatchCells + ", 10px)",
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjPipetteSelector.prototype, "swatchGridPos", {
            get: function () {
                var delta = (this._swatchCells * 4) / 3;
                var translate;
                switch (this.swatchPosition) {
                    case 'bottom-right': {
                        translate = delta + "%, " + delta + "%";
                        break;
                    }
                    case 'top-right': {
                        translate = delta + "%, " + (-100 - delta) + "%";
                        break;
                    }
                    case 'top-left': {
                        translate = -100 - delta + "%, " + (-100 - delta) + "%";
                        break;
                    }
                    case 'bottom-left': {
                        translate = -100 - delta + "%, " + delta + "%";
                        break;
                    }
                }
                return {
                    left: this.thumbPosition.x + "%",
                    top: this.thumbPosition.y + "%",
                    transform: "translate(" + translate + ")",
                    width: this._swatchCells * 10 + 1 + "px",
                };
            },
            enumerable: false,
            configurable: true
        });
        MnjPipetteSelector.prototype.getPixelBackground = function (pixel) {
            return "rgba(" + pixel.red + ", " + pixel.green + ", " + pixel.blue + ", " + pixel.alpha + ")";
        };
        Object.defineProperty(MnjPipetteSelector.prototype, "showPipetteSwatch", {
            get: function () {
                return this._showPipetteSwatch && !!this.image;
            },
            set: function (value) {
                value = coercion.coerceBooleanProperty(value);
                if (this._showPipetteSwatch !== value) {
                    this._showPipetteSwatch = value;
                    this._changeDetectorRef.detectChanges();
                }
            },
            enumerable: false,
            configurable: true
        });
        MnjPipetteSelector.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.attachListeners();
            if (this._image) {
                // Paint canvas if there was a pending image that could not be rendered until this momment
                this._ngZone.onStable.pipe(operators.take(1)).subscribe(function () { return _this._paintCanvas(); });
            }
        };
        MnjPipetteSelector.prototype.ngOnDestroy = function () {
            this._clearGlobalListeners();
        };
        // LISTENERS
        MnjPipetteSelector.prototype.attachListeners = function () {
            var _this = this;
            var sliderElement = coercion.coerceElement(this._elementRef);
            this._ngZone.runOutsideAngular(function () {
                sliderElement.addEventListener('mousedown', _this._pointerDown, activeEventListenerOptions);
                sliderElement.addEventListener('touchstart', _this._pointerDown, passiveEventListenerOptions);
            });
        };
        MnjPipetteSelector.prototype.addGlobalListeners = function () {
            var _this = this;
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        };
        MnjPipetteSelector.prototype._paintCanvas = function () {
            if (this.image && this.canvas) {
                var canvasElement = coercion.coerceElement(this.canvas);
                var _a = this.image, imgWidth = _a.width, imgHeight = _a.height;
                var _b = coercion.coerceElement(this._elementRef).getBoundingClientRect(), containerWidth = _b.width, containerHeight = _b.height;
                var ctx = canvasElement.getContext('2d');
                ctx.clearRect(0, 0, canvasElement.height, canvasElement.width);
                var canvasWidth = Math.floor(containerWidth);
                var canvasHeight = Math.floor(containerHeight);
                var _c = this._fitImage(canvasWidth, canvasHeight, imgWidth, imgHeight), offsetX = _c.offsetX, offsetY = _c.offsetY, width = _c.width, height = _c.height;
                canvasElement.width = canvasWidth;
                canvasElement.height = canvasHeight;
                ctx.drawImage(this.image, offsetX, offsetY, width, height);
                this._changeDetectorRef.markForCheck();
            }
        };
        MnjPipetteSelector.prototype.calculateColorFromPosition = function (container, pointerPos) {
            var _this = this;
            this._ngZone.run(function () {
                var _a = getPointerPositionInContainer(pointerPos, container), x = _a.x, y = _a.y;
                var pointerX = x * 100;
                var pointerY = y * 100;
                _this.thumbPosition = { x: pointerX, y: pointerY };
                _this.swatchPosition = _this._getSwatchPosition(pointerPos, container);
                var leftPos = pointerPos.x - container.left;
                var topPos = pointerPos.y - container.top;
                var ctx = _this.canvas.nativeElement.getContext('2d');
                var negativeOffset = _this._swatchCells / 2 - 1;
                var pixels = ctx.getImageData(leftPos - negativeOffset, topPos - negativeOffset, _this._swatchCells, _this._swatchCells);
                _this.pipetteSwatchPalette = [];
                for (var i = 0; i < pixels.data.length; i += 4) {
                    _this.pipetteSwatchPalette.push({
                        red: pixels.data[i],
                        green: pixels.data[i + 1],
                        blue: pixels.data[i + 2],
                        alpha: pixels.data[i + 3] / 255,
                    });
                }
                var _b = _this.pipetteSwatchPalette[_this._swatchMiddle], red = _b.red, green = _b.green, blue = _b.blue, alpha = _b.alpha;
                var color = fromRgb({ red: red, green: green, blue: blue }, alpha);
                _this.pipetteColorChange.emit(color);
                _this._changeDetectorRef.markForCheck();
            });
        };
        /** Centers and resize given children container into the parent container */
        MnjPipetteSelector.prototype._fitImage = function (parentWidth, parentHeight, childWidth, childHeight, scale, offsetX, offsetY) {
            if (scale === void 0) { scale = 1; }
            if (offsetX === void 0) { offsetX = 0.5; }
            if (offsetY === void 0) { offsetY = 0.5; }
            var childRatio = childWidth / childHeight;
            var parentRatio = parentWidth / parentHeight;
            var width = parentWidth * scale;
            var height = parentHeight * scale;
            if (childRatio > parentRatio) {
                height = width / childRatio;
            }
            else {
                width = height * childRatio;
            }
            return {
                width: width,
                height: height,
                offsetX: (parentWidth - width) * offsetX,
                offsetY: (parentHeight - height) * offsetY,
            };
        };
        MnjPipetteSelector.prototype._getSwatchPosition = function (pointerPos, container) {
            var x = pointerPos.x, y = pointerPos.y;
            var right = container.right, bottom = container.bottom;
            var swatchRight = x + 10 * this._swatchCells + 1; // 10 pixels per cell plus 1px border
            var swatchBottom = y + 10 * this._swatchCells + 1; // 10 pixels per cells plus 1px border
            var topOrBottom = swatchBottom > bottom;
            var leftOrRight = swatchRight > right;
            if (!topOrBottom && !leftOrRight)
                return 'bottom-right';
            if (topOrBottom && leftOrRight)
                return 'top-left';
            if (topOrBottom && !leftOrRight)
                return 'top-right';
            if (!topOrBottom && leftOrRight)
                return 'bottom-left';
        };
        return MnjPipetteSelector;
    }());
    MnjPipetteSelector.ɵfac = function MnjPipetteSelector_Factory(t) { return new (t || MnjPipetteSelector)(i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(i3.DOCUMENT), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MnjPipetteSelector.ɵcmp = i0.ɵɵdefineComponent({ type: MnjPipetteSelector, selectors: [["mnj-pipette-selector"]], viewQuery: function MnjPipetteSelector_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
            }
        }, hostAttrs: [1, "mnj-pipette-selector"], inputs: { image: "image", swatchCells: "swatchCells" }, outputs: { pipetteColorChange: "pipetteColorChange" }, features: [i0.ɵɵProvidersFeature([{ provide: BaseSelector, useExisting: MnjPipetteSelector }])], decls: 5, vars: 2, consts: [["imageCanvas", ""], ["class", "mnj-pipette-selector__swatch-container", 3, "ngStyle", 4, "ngIf"], [1, "mnj-colorpicker-selector__thumb", 3, "ngStyle"], [1, "mnj-colorpicker-selector__thumb__inner"], [1, "mnj-pipette-selector__swatch-container", 3, "ngStyle"], [1, "mnj-pipette-selector__swatch-container__grid", 3, "ngStyle"], ["class", "mnj-pipette-selector__swatch-container--cell", 3, "background", "mnj-pipette-selector__swatch-container--cell--active", 4, "ngFor", "ngForOf"], [1, "mnj-pipette-selector__swatch-container--cell"]], template: function MnjPipetteSelector_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "canvas", null, 0);
                i0.ɵɵtemplate(2, MnjPipetteSelector_div_2_Template, 3, 3, "div", 1);
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵelement(4, "div", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.showPipetteSwatch);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngStyle", ctx.canvasThumbPos);
            }
        }, directives: [i3.NgIf, i3.NgStyle, i3.NgForOf], styles: [".mnj-pipette-selector{cursor:pointer;display:block;margin-bottom:12px;position:relative}.mnj-pipette-selector__swatch-container{-webkit-clip-path:circle(49% at 50% 50%);clip-path:circle(49% at 50% 50%);position:absolute;transition:transform .4s cubic-bezier(.25,.8,.25,1);z-index:1}.mnj-pipette-selector__swatch-container__grid{border-bottom:1px solid #000;border-right:1px solid #000;display:-ms-grid;display:grid}.mnj-pipette-selector__swatch-container--cell{border-left:1px solid #000;border-top:1px solid #000}.mnj-pipette-selector__swatch-container--cell--active{border:1px solid red;height:11px;width:11px;z-index:1}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjPipetteSelector, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-pipette-selector',
                        templateUrl: 'pipette-selector.html',
                        styleUrls: ['pipette-selector.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [{ provide: BaseSelector, useExisting: MnjPipetteSelector }],
                        host: {
                            class: 'mnj-pipette-selector',
                        },
                    }]
            }], function () {
            return [{ type: ColorAdapter }, { type: Document, decorators: [{
                            type: i0.Inject,
                            args: [i3.DOCUMENT]
                        }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }];
        }, { canvas: [{
                    type: i0.ViewChild,
                    args: ['imageCanvas']
                }], image: [{
                    type: i0.Input
                }], swatchCells: [{
                    type: i0.Input
                }], pipetteColorChange: [{
                    type: i0.Output
                }] });
    })();

    function MnjScanPickerView_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵlistener("click", function MnjScanPickerView_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4_1); i0.ɵɵnextContext(); var _r1 = i0.ɵɵreference(2); return _r1.click(); })("drop", function MnjScanPickerView_div_0_Template_div_drop_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.uploadFile($event); })("dragover", function MnjScanPickerView_div_0_Template_div_dragover_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6._allowDrop($event); });
            i0.ɵɵelementStart(1, "span", 5);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.uploadPhotoToScanLabel);
        }
    }
    function MnjScanPickerView_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "mnj-pipette-selector", 6);
            i0.ɵɵlistener("pipetteColorChange", function MnjScanPickerView_ng_container_3_Template_mnj_pipette_selector_pipetteColorChange_1_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.changeColor($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 7);
            i0.ɵɵlistener("click", function MnjScanPickerView_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8_1); i0.ɵɵnextContext(); var _r1 = i0.ɵɵreference(2); return _r1.click(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 8);
            i0.ɵɵelement(4, "path", 9);
            i0.ɵɵelement(5, "path", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "div", 11);
            i0.ɵɵelement(7, "mnj-preview-swatch", 12);
            i0.ɵɵelement(8, "mnj-input-selector", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("image", ctx_r2._loadedImage);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("color", ctx_r2.activeColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("color", ctx_r2.activeColor);
        }
    }
    var MnjScanPickerView = /** @class */ (function (_super) {
        __extends(MnjScanPickerView, _super);
        function MnjScanPickerView(_colorAdapter, _intl, changeDetectorRef) {
            var _this = _super.call(this, _colorAdapter) || this;
            _this._colorAdapter = _colorAdapter;
            _this._intl = _intl;
            _this.changeDetectorRef = changeDetectorRef;
            return _this;
        }
        Object.defineProperty(MnjScanPickerView.prototype, "uploadPhotoToScanLabel", {
            get: function () {
                return this._intl.uploadPhotoToScan;
            },
            enumerable: false,
            configurable: true
        });
        MnjScanPickerView.prototype.ngOnDestroy = function () {
            if (this._loadedImage) {
                URL.revokeObjectURL(this._loadedImage.src);
            }
        };
        MnjScanPickerView.prototype.uploadFile = function (event) {
            var _this = this;
            event.preventDefault();
            event.stopPropagation();
            var files = event.type === 'drop' ? event.dataTransfer.files : event.target.files;
            if (files && files.length) {
                var file = files[0];
                if (!file.type.match('image.*')) {
                    return;
                }
                var image_1 = new Image();
                image_1.onload = function () {
                    _this._loadedImage = image_1;
                    _this.changeDetectorRef.markForCheck();
                };
                image_1.src = URL.createObjectURL(file);
            }
        };
        MnjScanPickerView.prototype._allowDrop = function (event) {
            event.preventDefault();
        };
        return MnjScanPickerView;
    }(BaseColorpickerView));
    MnjScanPickerView.ɵfac = function MnjScanPickerView_Factory(t) { return new (t || MnjScanPickerView)(i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(MnjColorpickerIntl), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MnjScanPickerView.ɵcmp = i0.ɵɵdefineComponent({ type: MnjScanPickerView, selectors: [["mnj-scan-picker-view"]], hostAttrs: [1, "mnj-scan-picker-view"], exportAs: ["mnjScanPickerView"], features: [i0.ɵɵProvidersFeature([{ provide: ColorPickerView, useExisting: MnjScanPickerView }]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [["class", "upload-control", 3, "click", "drop", "dragover", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "upload-control--fileInput", 3, "change"], ["fileInput", ""], [4, "ngIf"], [1, "upload-control", 3, "click", "drop", "dragover"], [1, "mat-body"], [3, "image", "pipetteColorChange"], ["mat-mini-fab", "", "color", "primary", 1, "upload-control--fab", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"], [1, "controls-container"], [3, "color"], [1, "controls-container--input", 3, "color"]], template: function MnjScanPickerView_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MnjScanPickerView_div_0_Template, 3, 1, "div", 0);
                i0.ɵɵelementStart(1, "input", 1, 2);
                i0.ɵɵlistener("change", function MnjScanPickerView_Template_input_change_1_listener($event) { return ctx.uploadFile($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, MnjScanPickerView_ng_container_3_Template, 9, 3, "ng-container", 3);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx._loadedImage);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx._loadedImage);
            }
        }, directives: [i3.NgIf, MnjPipetteSelector, i2$1.MatButton, MnjPreviewSwatch, MnjInputSelector], styles: [".mnj-scan-picker-view .controls-container{display:flex}.mnj-scan-picker-view .controls-container--input{flex:1;margin-left:15px}.mnj-scan-picker-view{display:block;flex-direction:column;height:100%;position:relative}.mnj-scan-picker-view .mnj-pipette-selector{height:calc(100% - 40px)}.mnj-scan-picker-view .upload-control{align-items:center;border:2px dashed;border-radius:4px;display:flex;height:100%;justify-content:center}.mnj-scan-picker-view .upload-control--fileInput{display:none}.mnj-scan-picker-view .upload-control--fab{position:absolute;right:-8px;top:-8px}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjScanPickerView, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-scan-picker-view',
                        exportAs: 'mnjScanPickerView',
                        templateUrl: 'scan-view.html',
                        styleUrls: ['scan-view.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [{ provide: ColorPickerView, useExisting: MnjScanPickerView }],
                        host: {
                            class: 'mnj-scan-picker-view',
                        },
                    }]
            }], function () { return [{ type: ColorAdapter }, { type: MnjColorpickerIntl }, { type: i0.ChangeDetectorRef }]; }, null);
    })();

    function MnjColorPanel_mnj_chrome_picker_view_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mnj-chrome-picker-view", 7);
            i0.ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_chrome_picker_view_2_Template_mnj_chrome_picker_view_activeColorChange_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.activeColor = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("activeColor", ctx_r0.activeColor)("selected", ctx_r0.selected)("showAlpha", ctx_r0.showAlpha);
        }
    }
    function MnjColorPanel_mnj_armonies_picker_view_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mnj-armonies-picker-view", 8);
            i0.ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_armonies_picker_view_3_Template_mnj_armonies_picker_view_activeColorChange_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.activeColor = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("activeColor", ctx_r1.activeColor)("selected", ctx_r1.selected);
        }
    }
    function MnjColorPanel_mnj_palette_picker_view_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mnj-palette-picker-view", 9);
            i0.ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_palette_picker_view_4_Template_mnj_palette_picker_view_activeColorChange_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.activeColor = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("activeColor", ctx_r2.activeColor)("palette", ctx_r2.palette)("selected", ctx_r2.selected);
        }
    }
    function MnjColorPanel_mnj_scan_picker_view_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mnj-scan-picker-view", 8);
            i0.ɵɵlistener("activeColorChange", function MnjColorPanel_mnj_scan_picker_view_5_Template_mnj_scan_picker_view_activeColorChange_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.activeColor = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("activeColor", ctx_r3.activeColor)("selected", ctx_r3.selected);
        }
    }
    /** Default header for MnjColorPanel */
    var MnjColorPanelHeader = /** @class */ (function () {
        function MnjColorPanelHeader(_intl, colorPanel, changeDetectorRef) {
            this._intl = _intl;
            this.colorPanel = colorPanel;
            this._views = ['picker', 'armonies', 'palette', 'scan'];
            this.colorPanel.stateChanges.subscribe(function () { return changeDetectorRef.markForCheck(); });
        }
        Object.defineProperty(MnjColorPanelHeader.prototype, "pickerButtonText", {
            /** The label for the current color panel view. */
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorPanelHeader.prototype, "pickerViewButtonLabel", {
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorPanelHeader.prototype, "prevButtonLabel", {
            /** The label for the previous button. */
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorPanelHeader.prototype, "nextButtonLabel", {
            /** The label for the next button. */
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        /** Handles user clicks on the previous button. */
        MnjColorPanelHeader.prototype.previousClicked = function () {
            var _this = this;
            var index = this._views.findIndex(function (v) { return v === _this.colorPanel.currentView; });
            index = (index + 4 - 1) % 4;
            this.colorPanel.currentView = this._views[index];
        };
        /** Handles user clicks on the next button. */
        MnjColorPanelHeader.prototype.nextClicked = function () {
            var _this = this;
            var index = this._views.findIndex(function (v) { return v === _this.colorPanel.currentView; });
            index = (index + 4 + 1) % 4;
            this.colorPanel.currentView = this._views[index];
        };
        /** Whether the previous period button is enabled. */
        MnjColorPanelHeader.prototype.previousEnabled = function () {
            return this.colorPanel.currentView !== 'picker';
        };
        /** Whether the next period button is enabled. */
        MnjColorPanelHeader.prototype.nextEnabled = function () {
            return this.colorPanel.currentView !== 'scan';
        };
        return MnjColorPanelHeader;
    }());
    MnjColorPanelHeader.ɵfac = function MnjColorPanelHeader_Factory(t) { return new (t || MnjColorPanelHeader)(i0.ɵɵdirectiveInject(MnjColorpickerIntl), i0.ɵɵdirectiveInject(i0.forwardRef(function () { return MnjColorPanel; })), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MnjColorPanelHeader.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorPanelHeader, selectors: [["mnj-color-panel-header"]], exportAs: ["mnjColorPanelHeader"], decls: 8, vars: 8, consts: [[1, "mnj-color-panel-header"], [1, "mnj-color-panel-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mnj-color-panel-picker-button", 3, "click"], [1, "mnj-color-panel-arrow"], [1, "mnj-color-panel-spacer"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mnj-color-panel-next-button", 3, "disabled", "click"]], template: function MnjColorPanelHeader_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "button", 2);
                i0.ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_2_listener() { return ctx.nextClicked(); });
                i0.ɵɵtext(3);
                i0.ɵɵelement(4, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(5, "div", 4);
                i0.ɵɵelementStart(6, "button", 5);
                i0.ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_6_listener() { return ctx.previousClicked(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "button", 6);
                i0.ɵɵlistener("click", function MnjColorPanelHeader_Template_button_click_7_listener() { return ctx.nextClicked(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵattribute("aria-label", ctx.pickerViewButtonLabel);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.pickerButtonText, " ");
                i0.ɵɵadvance(1);
                i0.ɵɵclassProp("mnj-color-panel-invert", ctx.colorPanel.currentView === "scan");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("disabled", !ctx.previousEnabled());
                i0.ɵɵattribute("aria-label", ctx.prevButtonLabel);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("disabled", !ctx.nextEnabled());
                i0.ɵɵattribute("aria-label", ctx.nextButtonLabel);
            }
        }, directives: [i2$1.MatButton, i3$1.CdkAriaLive], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorPanelHeader, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-color-panel-header',
                        templateUrl: 'color-panel-header.html',
                        exportAs: 'mnjColorPanelHeader',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: MnjColorpickerIntl }, { type: MnjColorPanel, decorators: [{
                            type: i0.Inject,
                            args: [i0.forwardRef(function () { return MnjColorPanel; })]
                        }] }, { type: i0.ChangeDetectorRef }];
        }, null);
    })();
    /**
     * A color panel that is used as part of the colorpicker.
     * @docs-private
     */
    var MnjColorPanel = /** @class */ (function () {
        function MnjColorPanel(_intl, _colorAdapter, _config, _changeDetectorRef) {
            var _this = this;
            this._colorAdapter = _colorAdapter;
            this._config = _config;
            this._changeDetectorRef = _changeDetectorRef;
            /** Emits when the currently selected color changes. */
            this.selectedChange = new i0.EventEmitter();
            /** Emits when any color is selected. */
            this._userSelection = new i0.EventEmitter();
            /**
             * Emits whenever there is a state change that the header may need to respond to.
             */
            this.stateChanges = new rxjs.Subject();
            this._intlChanges = _intl.changes.subscribe(function () {
                _changeDetectorRef.markForCheck();
                _this.stateChanges.next();
            });
        }
        Object.defineProperty(MnjColorPanel.prototype, "startColor", {
            /** The color to start focused on the picker. */
            get: function () {
                return this._startColor;
            },
            set: function (value) {
                this._startColor = this._colorAdapter.getValidColorOrNull(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorPanel.prototype, "palette", {
            get: function () {
                return this._palette || this._config.defaultPalette;
            },
            set: function (value) {
                this._palette = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorPanel.prototype, "showAlpha", {
            get: function () {
                return this._showAlpha || this._config.showAlpha;
            },
            set: function (value) {
                this._showAlpha = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorPanel.prototype, "selected", {
            /** The currently selected color. */
            get: function () {
                return this._selected;
            },
            set: function (value) {
                this._selected = this._colorAdapter.getValidColorOrNull(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorPanel.prototype, "activeColor", {
            /**
             * The current active color. This determines which time period is shown and which color is
             * highlighted when using keyboard navigation.
             */
            get: function () {
                return this._activeColor;
            },
            set: function (value) {
                this._activeColor = value;
                this.stateChanges.next();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorPanel.prototype, "currentView", {
            /** Whether the color panel is in month view. */
            get: function () {
                return this._currentView;
            },
            set: function (value) {
                this._currentView = value;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        MnjColorPanel.prototype.ngAfterContentInit = function () {
            // Assign to the private property since we don't want to move focus on init.
            this._currentView = this.startView || 'picker';
            this.activeColor = this.selected || this.startColor || this._config.defaultColor;
        };
        MnjColorPanel.prototype.ngOnDestroy = function () {
            this._intlChanges.unsubscribe();
            this.stateChanges.complete();
        };
        /** Makes the active view color the selected one. */
        MnjColorPanel.prototype._selectColor = function () {
            var color = this._getCurrentViewComponent().activeColor;
            if (!this._colorAdapter.sameColor(color, this.selected)) {
                this.selectedChange.emit(color);
            }
            this._userSelection.emit(color);
        };
        MnjColorPanel.prototype._handleKeydownEvent = function (event) {
            switch (event.keyCode) {
                case keycodes.ENTER:
                    this._selectColor();
                    return;
                default:
                    return;
            }
        };
        /** Returns the component instance that corresponds to the current color panel view. */
        MnjColorPanel.prototype._getCurrentViewComponent = function () {
            return this.currentPicker;
        };
        return MnjColorPanel;
    }());
    MnjColorPanel.ɵfac = function MnjColorPanel_Factory(t) { return new (t || MnjColorPanel)(i0.ɵɵdirectiveInject(MnjColorpickerIntl), i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(MNJ_COLOR_CONFIG_PROVIDER), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MnjColorPanel.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorPanel, selectors: [["mnj-color-panel"]], viewQuery: function MnjColorPanel_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(ColorPickerView, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.currentPicker = _t.first);
            }
        }, hostAttrs: [1, "mnj-color-panel"], hostBindings: function MnjColorPanel_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function MnjColorPanel_keydown_HostBindingHandler($event) { return ctx._handleKeydownEvent($event); });
            }
        }, inputs: { color: "color", startView: "startView", startColor: "startColor", palette: "palette", showAlpha: "showAlpha", selected: "selected", activeColor: "activeColor" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection" }, exportAs: ["mnjColorPanel"], decls: 9, vars: 6, consts: [["cdkFocusInitial", ""], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mnj-color-panel-content", 3, "ngSwitch"], [3, "activeColor", "selected", "showAlpha", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "selected", "activeColorChange", 4, "ngSwitchCase"], [3, "activeColor", "palette", "selected", "activeColorChange", 4, "ngSwitchCase"], [1, "mnj-color-panel-footer"], ["mat-button", "", 3, "color", "click"], [3, "activeColor", "selected", "showAlpha", "activeColorChange"], [3, "activeColor", "selected", "activeColorChange"], [3, "activeColor", "palette", "selected", "activeColorChange"]], template: function MnjColorPanel_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mnj-color-panel-header", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtemplate(2, MnjColorPanel_mnj_chrome_picker_view_2_Template, 1, 3, "mnj-chrome-picker-view", 2);
                i0.ɵɵtemplate(3, MnjColorPanel_mnj_armonies_picker_view_3_Template, 1, 2, "mnj-armonies-picker-view", 3);
                i0.ɵɵtemplate(4, MnjColorPanel_mnj_palette_picker_view_4_Template, 1, 3, "mnj-palette-picker-view", 4);
                i0.ɵɵtemplate(5, MnjColorPanel_mnj_scan_picker_view_5_Template, 1, 2, "mnj-scan-picker-view", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 5);
                i0.ɵɵelementStart(7, "button", 6);
                i0.ɵɵlistener("click", function MnjColorPanel_Template_button_click_7_listener() { return ctx._selectColor(); });
                i0.ɵɵtext(8, "Save");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitch", ctx.currentView);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "picker");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "armonies");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "palette");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "scan");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("color", ctx.color);
            }
        }, directives: [MnjColorPanelHeader, i3$1.CdkMonitorFocus, i3.NgSwitch, i3.NgSwitchCase, i2$1.MatButton, MnjChromePickerView, MnjArmoniesPickerView, MnjPalettePickerView, MnjScanPickerView], styles: [".mnj-color-panel{display:flex;flex-direction:column}.mnj-color-panel-header{padding:9px 16px 0}.mnj-color-panel-content{flex:1 0 0;outline:none;overflow-y:auto;padding:9px 16px}.mnj-color-panel-footer{display:flex;justify-content:flex-end;padding:0 16px 9px}.mnj-color-panel-controls{display:flex;margin:5% calc(4.71429% - 16px)}.mnj-color-panel-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mnj-color-panel-spacer{flex:1 1 auto}.mnj-color-panel-picker-button{min-width:0}.mnj-color-panel-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-top-style:solid;border-top-width:5px;display:inline-block;height:0;margin:0 0 0 5px;vertical-align:middle;width:0}.mnj-color-panel-arrow.mnj-color-panel-invert{transform:rotate(180deg)}[dir=rtl] .mnj-color-panel-arrow{margin:0 5px 0 0}.mnj-color-panel-next-button,.mnj-color-panel-previous-button{position:relative}.mnj-color-panel-next-button:after,.mnj-color-panel-previous-button:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;margin:15.5px;position:absolute;right:0;top:0}[dir=rtl] .mnj-color-panel-next-button,[dir=rtl] .mnj-color-panel-previous-button{transform:rotate(180deg)}.mnj-color-panel-previous-button:after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mnj-color-panel-next-button:after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorPanel, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-color-panel',
                        templateUrl: 'color-panel.html',
                        styleUrls: ['color-panel.scss'],
                        exportAs: 'mnjColorPanel',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            class: 'mnj-color-panel',
                            '(keydown)': '_handleKeydownEvent($event)',
                        },
                    }]
            }], function () {
            return [{ type: MnjColorpickerIntl }, { type: ColorAdapter }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [MNJ_COLOR_CONFIG_PROVIDER]
                        }] }, { type: i0.ChangeDetectorRef }];
        }, { color: [{
                    type: i0.Input
                }], startView: [{
                    type: i0.Input
                }], startColor: [{
                    type: i0.Input
                }], palette: [{
                    type: i0.Input
                }], showAlpha: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], selectedChange: [{
                    type: i0.Output
                }], _userSelection: [{
                    type: i0.Output
                }], currentPicker: [{
                    type: i0.ViewChild,
                    args: [ColorPickerView]
                }], activeColor: [{
                    type: i0.Input
                }] });
    })();

    /**
     * Animations used by the colorpicker.
     * @docs-private
     */
    var mnjColorpickerAnimations = {
        /** Transforms the height of the colorpicker's panel. */
        transformPanel: animations.trigger('transformPanel', [
            animations.state('void', animations.style({
                opacity: 0,
                transform: 'scale(1, 0.8)',
            })),
            animations.transition('void => enter', animations.animate('120ms cubic-bezier(0, 0, 0.2, 1)', animations.style({
                opacity: 1,
                transform: 'scale(1, 1)',
            }))),
            animations.transition('* => void', animations.animate('100ms linear', animations.style({ opacity: 0 }))),
        ]),
        /** Fades in the content of the panel. */
        fadeInColorPanel: animations.trigger('fadeInColorPanel', [
            animations.state('void', animations.style({ opacity: 0 })),
            animations.state('enter', animations.style({ opacity: 1 })),
            // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
            // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
            animations.transition('void => *', animations.animate('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')),
        ]),
    };

    /** Used to generate a unique ID for each colorpicker instance. */
    var colorpickerUid = 0;
    /** Injection token that determines the scroll handling while the color panel is open. */
    var MNJ_COLORPICKER_SCROLL_STRATEGY = new i0.InjectionToken('mnj-colorpicker-scroll-strategy');
    /** @docs-private */
    function MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () { return overlay.scrollStrategies.reposition(); };
    }
    /** @docs-private */
    var MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MNJ_COLORPICKER_SCROLL_STRATEGY,
        deps: [i5.Overlay],
        useFactory: MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY,
    };
    // Boilerplate for applying mixins to MnjColorpickerContent.
    /** @docs-private */
    var MnjColorpickerContentBase = /** @class */ (function () {
        function MnjColorpickerContentBase(_elementRef) {
            this._elementRef = _elementRef;
        }
        return MnjColorpickerContentBase;
    }());
    var _MnjColorpickerContentMixinBase = core.mixinColor(MnjColorpickerContentBase);
    /**
     * Component used as the content for the colorpicker dialog and popup. We use this instead of using
     * MatCalendar directly as the content so we can control the initial focus. This also gives us a
     * place to put additional features of the popup that are not part of the color panel itself in the
     * future. (e.g. confirmation buttons).
     * @docs-private
     */
    var MnjColorpickerContent = /** @class */ (function (_super) {
        __extends(MnjColorpickerContent, _super);
        function MnjColorpickerContent(elementRef, _changeDetectorRef) {
            var _this = _super.call(this, elementRef) || this;
            _this._changeDetectorRef = _changeDetectorRef;
            /** Current state of the animation. */
            _this._animationState = 'enter';
            /** Emits when an animation has finished. */
            _this._animationDone = new rxjs.Subject();
            _this._subscriptions = new rxjs.Subscription();
            return _this;
        }
        MnjColorpickerContent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._subscriptions.add(this.colorpicker._stateChanges.subscribe(function () {
                _this._changeDetectorRef.markForCheck();
            }));
        };
        MnjColorpickerContent.prototype.ngOnDestroy = function () {
            this._subscriptions.unsubscribe();
            this._animationDone.complete();
        };
        MnjColorpickerContent.prototype._handleUserSelection = function (value) {
            this.colorpicker.select(value);
            this.colorpicker.close();
        };
        MnjColorpickerContent.prototype._startExitAnimation = function () {
            this._animationState = 'void';
            this._changeDetectorRef.markForCheck();
        };
        MnjColorpickerContent.prototype._getSelected = function () {
            return this.colorpicker._selectedColor;
        };
        return MnjColorpickerContent;
    }(_MnjColorpickerContentMixinBase));
    MnjColorpickerContent.ɵfac = function MnjColorpickerContent_Factory(t) { return new (t || MnjColorpickerContent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MnjColorpickerContent.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorpickerContent, selectors: [["mnj-colorpicker-content"]], hostAttrs: [1, "mnj-colorpicker-content"], hostVars: 3, hostBindings: function MnjColorpickerContent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵsyntheticHostListener("@transformPanel.done", function MnjColorpickerContent_animation_transformPanel_done_HostBindingHandler() { return ctx._animationDone.next(); });
            }
            if (rf & 2) {
                i0.ɵɵsyntheticHostProperty("@transformPanel", ctx._animationState);
                i0.ɵɵclassProp("mnj-colorpicker-content-touch", ctx.colorpicker.touchUi);
            }
        }, inputs: { color: "color" }, exportAs: ["mnjColorpickerContent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 9, consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "color", "startView", "startColor", "showAlpha", "palette", "selected", "_userSelection"]], template: function MnjColorpickerContent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mnj-color-panel", 0);
                i0.ɵɵlistener("_userSelection", function MnjColorpickerContent_Template_mnj_color_panel__userSelection_0_listener($event) { return ctx._handleUserSelection($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("id", ctx.colorpicker.id)("ngClass", ctx.colorpicker.panelClass)("color", ctx.colorpicker.color)("startView", ctx.colorpicker.startView)("startColor", ctx.colorpicker.startColor)("showAlpha", ctx.colorpicker.showAlpha)("palette", ctx.colorpicker.palette)("selected", ctx._getSelected())("@fadeInColorPanel", "enter");
            }
        }, directives: [MnjColorPanel, i3$1.CdkTrapFocus, i3.NgClass], styles: [".mnj-colorpicker-content{border-radius:4px;display:flex;flex-direction:column}.mnj-colorpicker-content .mnj-color-panel{height:400px;width:350px}.mnj-colorpicker-content-touch{display:flex;flex-direction:column;margin:-24px;max-height:80vh;overflow:auto}.mnj-colorpicker-content-touch .mnj-color-panel{max-height:788px;max-width:750px;min-height:312px;min-width:250px}@media (orientation:landscape){.mnj-colorpicker-content-touch .mnj-color-panel{height:80vh;width:64vh}}@media (orientation:portrait){.mnj-colorpicker-content-touch .mnj-color-panel{height:100vw;width:80vw}}"], encapsulation: 2, data: { animation: [
                mnjColorpickerAnimations.transformPanel,
                mnjColorpickerAnimations.fadeInColorPanel,
            ] }, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorpickerContent, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-colorpicker-content',
                        templateUrl: 'colorpicker-content.html',
                        styleUrls: ['colorpicker-content.scss'],
                        exportAs: 'mnjColorpickerContent',
                        inputs: ['color'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
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
            }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null);
    })();
    // Use a component instead of a directive here so the user can use implicit
    // template reference variables (e.g. #d vs #d="mnjColorpicker"). We can change this to a directive
    // if angular adds support for `exportAs: '$implicit'` on directives.
    /** Component responsible for managing the colorpicker popup/dialog. */
    var MnjColorpicker = /** @class */ (function () {
        function MnjColorpicker(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _colorAdapter, _dir, _document) {
            this._dialog = _dialog;
            this._overlay = _overlay;
            this._ngZone = _ngZone;
            this._viewContainerRef = _viewContainerRef;
            this._colorAdapter = _colorAdapter;
            this._dir = _dir;
            this._document = _document;
            /** Subscription to value changes in the associated input element. */
            this._inputStateChanges = rxjs.Subscription.EMPTY;
            this._touchUi = false;
            /** Emits when the colorpicker has been opened. */
            this.openedStream = new i0.EventEmitter();
            /** Emits when the colorpicker has been closed. */
            this.closedStream = new i0.EventEmitter();
            this._opened = false;
            /** The id for the colorpicker color panel. */
            this.id = "mnj-colorpicker-" + colorpickerUid++;
            this._validSelected = null;
            /** The element that was focused before the colorpicker was opened. */
            this._focusedElementBeforeOpen = null;
            /** Emits when the colorpicker is disabled. */
            this._stateChanges = new rxjs.Subject();
            /** Emits when the colorpicker formmatting inputs (showAlpha and displayFormat) changes. */
            this._configurationChanges = new rxjs.Subject();
            /** Emits new selected color when selected color changes. */
            this._selectedChanged = new rxjs.Subject();
            this._scrollStrategy = scrollStrategy;
        }
        Object.defineProperty(MnjColorpicker.prototype, "color", {
            /** Color palette to use on the colorpicker's color panel. */
            get: function () {
                return (this._color ||
                    (this._colorpickerInput
                        ? this._colorpickerInput.getThemePalette()
                        : undefined));
            },
            set: function (value) {
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "startColor", {
            get: function () {
                return this._startColor;
            },
            set: function (value) {
                if (this._colorAdapter.isValid(value)) {
                    this._startColor = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "showAlpha", {
            get: function () {
                return this._showAlpha;
            },
            set: function (value) {
                value = coercion.coerceBooleanProperty(value);
                if (value !== this._showAlpha) {
                    this._showAlpha = value;
                    this._configurationChanges.next(undefined);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "displayFormat", {
            get: function () {
                return this._displayFormat;
            },
            set: function (value) {
                if (value !== this._displayFormat) {
                    this._displayFormat = value;
                    this._configurationChanges.next(undefined);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "touchUi", {
            /**
             * Whether the color panel UI is in touch mode. In touch mode the color panel opens in a dialog rather
             * than a popup and elements have more padding to allow for bigger touch targets.
             */
            get: function () {
                return this._touchUi;
            },
            set: function (value) {
                this._touchUi = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "disabled", {
            /** Whether the colorpicker pop-up should be disabled. */
            get: function () {
                return this._disabled === undefined && this._colorpickerInput
                    ? this._colorpickerInput.disabled
                    : !!this._disabled;
            },
            set: function (value) {
                var newValue = coercion.coerceBooleanProperty(value);
                if (newValue !== this._disabled) {
                    this._disabled = newValue;
                    this._stateChanges.next(newValue);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "xPosition", {
            /** Preferred position of the colorpicker in the X axis. */
            get: function () {
                return this._xPosition || 'start';
            },
            set: function (value) {
                var isFirstChange = !this._xPosition;
                this._xPosition = value;
                if (isFirstChange) {
                    this._updatePopupPositions();
                }
                this._stateChanges.next(undefined);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "yPosition", {
            /** Preferred position of the colorpicker in the Y axis. */
            get: function () {
                return this._yPosition || 'below';
            },
            set: function (value) {
                var isFirstChange = !this._xPosition;
                this._yPosition = value;
                if (isFirstChange) {
                    this._updatePopupPositions();
                }
                this._stateChanges.next(undefined);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "opened", {
            /** Whether the color panel is open. */
            get: function () {
                return this._opened;
            },
            set: function (value) {
                coercion.coerceBooleanProperty(value) ? this.open() : this.close();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpicker.prototype, "_selectedColor", {
            /** The currently selected color. */
            get: function () {
                return this._validSelected;
            },
            set: function (value) {
                this._validSelected = value;
            },
            enumerable: false,
            configurable: true
        });
        MnjColorpicker.prototype.ngOnDestroy = function () {
            this._destroyPopup();
            this.close();
            this._inputStateChanges.unsubscribe();
            this._selectedChanged.complete();
            this._stateChanges.complete();
        };
        /** Selects the given color */
        MnjColorpicker.prototype.select = function (color) {
            var oldValue = this._selectedColor;
            this._selectedColor = color;
            if (!this._colorAdapter.sameColor(oldValue, this._selectedColor)) {
                this._selectedChanged.next(color);
            }
            this._stateChanges.next();
        };
        /**
         * Register an input with this colorpicker.
         * @param input The colorpicker input to register with this colorpicker.
         */
        MnjColorpicker.prototype._registerInput = function (input) {
            var _this = this;
            if (this._colorpickerInput) {
                throw Error('A MnjColorpicker can only be associated with a single input.');
            }
            this._inputStateChanges.unsubscribe();
            this._colorpickerInput = input;
            this._inputStateChanges = this._colorpickerInput._stateChanges.subscribe(function () {
                _this._stateChanges.next();
                _this.select(_this._colorpickerInput.value);
            });
        };
        /** Open the color panel. */
        MnjColorpicker.prototype.open = function () {
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
        };
        /** Close the color panel. */
        MnjColorpicker.prototype.close = function () {
            var _this = this;
            if (!this._opened) {
                return;
            }
            if (this._popupComponentRef && this._popupRef) {
                var instance = this._popupComponentRef.instance;
                instance._startExitAnimation();
                instance._animationDone
                    .pipe(operators.take(1))
                    .subscribe(function () { return _this._destroyPopup(); });
            }
            if (this._dialogRef) {
                this._dialogRef.close();
                this._dialogRef = null;
            }
            var completeClose = function () {
                // The `_opened` could've been reset already if
                // we got two events in quick succession.
                if (_this._opened) {
                    _this._opened = false;
                    _this.closedStream.emit();
                    _this._focusedElementBeforeOpen = null;
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
        };
        /** Open the color panel as a dialog. */
        MnjColorpicker.prototype._openAsDialog = function () {
            var _this = this;
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
            this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
            this._dialogRef.componentInstance.colorpicker = this;
            this._setTheme();
        };
        /** Open the color panel as a popup. */
        MnjColorpicker.prototype._openAsPopup = function () {
            var _this = this;
            var portal$1 = new portal.ComponentPortal(MnjColorpickerContent, this._viewContainerRef);
            this._destroyPopup();
            this._createPopup();
            this._popupComponentRef = this._popupRef.attach(portal$1);
            this._forwardContentValues(this._popupComponentRef.instance);
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.pipe(operators.take(1)).subscribe(function () {
                _this._popupRef.updatePosition();
            });
        };
        /** Forwards relevant values from the colorpicker to the colorpicker content inside the overlay. */
        MnjColorpicker.prototype._forwardContentValues = function (instance) {
            instance.colorpicker = this;
            instance.color = this.color;
        };
        /** Create the popup. */
        MnjColorpicker.prototype._createPopup = function () {
            var _this = this;
            var positionStrategy = this._overlay
                .position()
                .flexibleConnectedTo(this._colorpickerInput.getConnectedOverlayOrigin())
                .withTransformOriginOn('.mnj-colorpicker-content')
                .withFlexibleDimensions(false)
                .withViewportMargin(8)
                .withLockedPosition();
            var overlayConfig = new i5.OverlayConfig({
                positionStrategy: this._setConnectedPositions(positionStrategy),
                hasBackdrop: true,
                backdropClass: 'mat-overlay-transparent-backdrop',
                direction: this._dir,
                scrollStrategy: this._scrollStrategy(),
                panelClass: 'mnj-colorpicker-popup',
            });
            this._popupRef = this._overlay.create(overlayConfig);
            this._popupRef.overlayElement.setAttribute('role', 'dialog');
            rxjs.merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(operators.filter(function (event) {
                // Closing on alt + up is only valid when there's an input associated with the colorpicker.
                return (event.keyCode === keycodes.ESCAPE ||
                    (_this._colorpickerInput &&
                        event.altKey &&
                        event.keyCode === keycodes.UP_ARROW));
            }))).subscribe(function (event) {
                if (event) {
                    event.preventDefault();
                }
                _this.close();
            });
        };
        /** Sets the positions of the colorpicker in dropdown mode based on the current configuration. */
        MnjColorpicker.prototype._setConnectedPositions = function (strategy) {
            var primaryX = this.xPosition === 'end' ? 'end' : 'start';
            var secondaryX = primaryX === 'start' ? 'end' : 'start';
            var primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
            var secondaryY = primaryY === 'top' ? 'bottom' : 'top';
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
        };
        MnjColorpicker.prototype._updatePopupPositions = function () {
            if (this._popupRef) {
                this._setConnectedPositions(this._popupRef.getConfig()
                    .positionStrategy);
                if (this.opened) {
                    this._popupRef.updatePosition();
                }
            }
        };
        /** Destroys the current popup overlay. */
        MnjColorpicker.prototype._destroyPopup = function () {
            if (this._popupRef) {
                this._popupRef.dispose();
                this._popupRef = this._popupComponentRef = null;
            }
        };
        /** Passes the current theme color along to the color panel overlay. */
        MnjColorpicker.prototype._setTheme = function () {
            var color = this.color;
            if (this._popupComponentRef) {
                this._popupComponentRef.instance.color = color;
            }
            if (this._dialogRef) {
                this._dialogRef.componentInstance.color = color;
            }
        };
        return MnjColorpicker;
    }());
    MnjColorpicker.ɵfac = function MnjColorpicker_Factory(t) { return new (t || MnjColorpicker)(i0.ɵɵdirectiveInject(i4.MatDialog), i0.ɵɵdirectiveInject(i5.Overlay), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(MNJ_COLORPICKER_SCROLL_STRATEGY), i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.DOCUMENT, 8)); };
    MnjColorpicker.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorpicker, selectors: [["mnj-colorpicker"]], inputs: { color: "color", startColor: "startColor", startView: "startView", palette: "palette", showAlpha: "showAlpha", displayFormat: "displayFormat", touchUi: "touchUi", disabled: "disabled", xPosition: "xPosition", yPosition: "yPosition", panelClass: "panelClass", opened: "opened" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["mnjColorpicker"], decls: 0, vars: 0, template: function MnjColorpicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorpicker, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-colorpicker',
                        template: '',
                        exportAs: 'mnjColorpicker',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () {
            return [{ type: i4.MatDialog }, { type: i5.Overlay }, { type: i0.NgZone }, { type: i0.ViewContainerRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [MNJ_COLORPICKER_SCROLL_STRATEGY]
                        }] }, { type: ColorAdapter }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [i3.DOCUMENT]
                        }] }];
        }, { color: [{
                    type: i0.Input
                }], startColor: [{
                    type: i0.Input
                }], startView: [{
                    type: i0.Input
                }], palette: [{
                    type: i0.Input
                }], showAlpha: [{
                    type: i0.Input
                }], displayFormat: [{
                    type: i0.Input
                }], touchUi: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], xPosition: [{
                    type: i0.Input
                }], yPosition: [{
                    type: i0.Input
                }], panelClass: [{
                    type: i0.Input
                }], openedStream: [{
                    type: i0.Output,
                    args: ['opened']
                }], closedStream: [{
                    type: i0.Output,
                    args: ['closed']
                }], opened: [{
                    type: i0.Input
                }] });
    })();

    /** @docs-private */
    var MNJ_COLORPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return MnjColorpickerInput; }),
        multi: true,
    };
    /** @docs-private */
    var MNJ_COLORPICKER_VALIDATORS = {
        provide: forms.NG_VALIDATORS,
        useExisting: i0.forwardRef(function () { return MnjColorpickerInput; }),
        multi: true,
    };
    /**
     * An event used for colorpicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use MnjColorpickerInputEvent instead.
     */
    var MnjColorpickerInputEvent = /** @class */ (function () {
        function MnjColorpickerInputEvent(
        /** Reference to the colorpicker input component that emitted the event. */
        target, 
        /** Reference to the native input element associated with the colorpicker input. */
        targetElement) {
            this.target = target;
            this.targetElement = targetElement;
            this.value = this.target.value;
        }
        return MnjColorpickerInputEvent;
    }());
    /** Directive used to connect an input to a MnjColorpicker. */
    var MnjColorpickerInput = /** @class */ (function () {
        function MnjColorpickerInput(_elementRef, _colorAdapter, _config, _formField) {
            var _this = this;
            this._elementRef = _elementRef;
            this._colorAdapter = _colorAdapter;
            this._config = _config;
            this._formField = _formField;
            this._value = null;
            /** Emits when a `change` event is fired on this `<input>`. */
            this.colorChange = new i0.EventEmitter();
            /** Emits when an `input` event is fired on this `<input>`. */
            this.colorInput = new i0.EventEmitter();
            /** Emits when the value changes (either due to user input or programmatic change). */
            this._valueChange = new i0.EventEmitter();
            /** Emits when the internal state has changed */
            this._stateChanges = new rxjs.Subject();
            this._onTouched = function () { };
            this._cvaOnChange = function () { };
            this._validatorOnChange = function () { };
            this._colorpickerSubscription = rxjs.Subscription.EMPTY;
            this._colorpickerConfigurationSubscription = rxjs.Subscription.EMPTY;
            this._localeSubscription = rxjs.Subscription.EMPTY;
            /** The form control validator for whether the input parses. */
            this._parseValidator = function () {
                return _this._lastValueValid ? null : { mnjColorpickerParse: { text: _this._elementRef.nativeElement.value } };
            };
            /** The combined form control validator for this input. */
            this._validator = this._parseValidator;
            /** Whether the last value set on the input was valid. */
            this._lastValueValid = false;
        }
        Object.defineProperty(MnjColorpickerInput.prototype, "mnjColorpicker", {
            /** The colorpicker that this input is associated with. */
            set: function (value) {
                var _this = this;
                if (!value) {
                    return;
                }
                this._colorpicker = value;
                this._colorpicker._registerInput(this);
                this._colorpickerSubscription.unsubscribe();
                this._colorpickerSubscription = this._colorpicker._selectedChanged.subscribe(function (selected) {
                    _this.value = selected;
                    _this._cvaOnChange(selected);
                    _this._onTouched();
                    _this.colorInput.emit(new MnjColorpickerInputEvent(_this, _this._elementRef.nativeElement));
                    _this.colorChange.emit(new MnjColorpickerInputEvent(_this, _this._elementRef.nativeElement));
                });
                this._colorpickerConfigurationSubscription = this._colorpicker._configurationChanges.subscribe(function (_) { return _this._formatValue(_this.value); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpickerInput.prototype, "value", {
            /** The value of the input. */
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._lastValueValid = !value || this._colorAdapter.isValid(value);
                value = this._colorAdapter.getValidColorOrNull(value);
                var oldColor = this.value;
                this._value = value;
                this._formatValue(value);
                if (!this._colorAdapter.sameColor(oldColor, value)) {
                    this._valueChange.emit(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpickerInput.prototype, "disabled", {
            /** Whether the colorpicker-input is disabled. */
            get: function () {
                return !!this._disabled;
            },
            set: function (value) {
                var newValue = coercion.coerceBooleanProperty(value);
                var element = this._elementRef.nativeElement;
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
            },
            enumerable: false,
            configurable: true
        });
        MnjColorpickerInput.prototype.ngOnChanges = function () {
            this._stateChanges.next(undefined);
        };
        MnjColorpickerInput.prototype.ngOnDestroy = function () {
            this._colorpickerSubscription.unsubscribe();
            this._colorpickerConfigurationSubscription.unsubscribe();
            this._localeSubscription.unsubscribe();
            this._valueChange.complete();
            this._stateChanges.complete();
        };
        /** @docs-private */
        MnjColorpickerInput.prototype.registerOnValidatorChange = function (fn) {
            this._validatorOnChange = fn;
        };
        /** @docs-private */
        MnjColorpickerInput.prototype.validate = function (c) {
            return this._validator ? this._validator(c) : null;
        };
        // Implemented as part of ControlValueAccessor.
        MnjColorpickerInput.prototype.writeValue = function (value) {
            this.value = value;
        };
        // Implemented as part of ControlValueAccessor.
        MnjColorpickerInput.prototype.registerOnChange = function (fn) {
            this._cvaOnChange = fn;
        };
        // Implemented as part of ControlValueAccessor.
        MnjColorpickerInput.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        // Implemented as part of ControlValueAccessor.
        MnjColorpickerInput.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        MnjColorpickerInput.prototype._onKeydown = function (event) {
            var isAltDownArrow = event.altKey && event.keyCode === keycodes.DOWN_ARROW;
            if (this._colorpicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
                this._openPopup();
                event.preventDefault();
            }
        };
        MnjColorpickerInput.prototype._onInput = function (value) {
            var lastValueWasValid = this._lastValueValid;
            var color = this._colorAdapter.parse(value);
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
        };
        MnjColorpickerInput.prototype._onChange = function () {
            this.colorChange.emit(new MnjColorpickerInputEvent(this, this._elementRef.nativeElement));
        };
        /**
         * Gets the element that the colorpicker popup should be connected to.
         * @return The element to connect the popup to.
         */
        MnjColorpickerInput.prototype.getConnectedOverlayOrigin = function () {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
        };
        /** Returns the palette used by the input's form field, if any. */
        MnjColorpickerInput.prototype.getThemePalette = function () {
            return this._formField ? this._formField.color : undefined;
        };
        /** Gets the value at which the calendar should start. */
        MnjColorpickerInput.prototype.getStartValue = function () {
            return this.value;
        };
        /** Opens the associated colorpicker. */
        MnjColorpickerInput.prototype._openPopup = function () {
            if (this._colorpicker) {
                this._colorpicker.open();
            }
        };
        /** Handles blur events on the input. */
        MnjColorpickerInput.prototype._onBlur = function () {
            // Reformat the input only if we have a valid value.
            if (this.value) {
                this._formatValue(this.value);
            }
            this._onTouched();
            this._stateChanges.next();
        };
        /** Formats a value and sets it on the input element. */
        MnjColorpickerInput.prototype._formatValue = function (value) {
            var showAlpha = (this._colorpicker && this._colorpicker.showAlpha) || this._config.showAlpha;
            var displayFormat = (this._colorpicker && this._colorpicker.displayFormat) || this._config.displayFormat;
            this._elementRef.nativeElement.value = value ? this._colorAdapter.format(value, displayFormat, showAlpha) : '';
        };
        return MnjColorpickerInput;
    }());
    MnjColorpickerInput.ɵfac = function MnjColorpickerInput_Factory(t) { return new (t || MnjColorpickerInput)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(ColorAdapter), i0.ɵɵdirectiveInject(MNJ_COLOR_CONFIG_PROVIDER), i0.ɵɵdirectiveInject(i2$2.MatFormField, 8)); };
    MnjColorpickerInput.ɵdir = i0.ɵɵdefineDirective({ type: MnjColorpickerInput, selectors: [["input", "mnjColorpicker", ""]], hostAttrs: ["aria-haspopup", "_colorpicker ? \"dialog\" : null"], hostVars: 2, hostBindings: function MnjColorpickerInput_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("input", function MnjColorpickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MnjColorpickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MnjColorpickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MnjColorpickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
            }
            if (rf & 2) {
                i0.ɵɵhostProperty("disabled", ctx.disabled);
                i0.ɵɵattribute("aria-owns", (ctx._colorpicker == null ? null : ctx._colorpicker.opened) && ctx._colorpicker.id || null);
            }
        }, inputs: { mnjColorpicker: "mnjColorpicker", value: "value", disabled: "disabled" }, outputs: { colorChange: "colorChange", colorInput: "colorInput" }, exportAs: ["mnjColorpickerInput"], features: [i0.ɵɵProvidersFeature([
                MNJ_COLORPICKER_VALUE_ACCESSOR,
                MNJ_COLORPICKER_VALIDATORS,
                { provide: input.MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
            ]), i0.ɵɵNgOnChangesFeature] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorpickerInput, [{
                type: i0.Directive,
                args: [{
                        selector: 'input[mnjColorpicker]',
                        exportAs: 'mnjColorpickerInput',
                        providers: [
                            MNJ_COLORPICKER_VALUE_ACCESSOR,
                            MNJ_COLORPICKER_VALIDATORS,
                            { provide: input.MAT_INPUT_VALUE_ACCESSOR, useExisting: MnjColorpickerInput },
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
            }], function () {
            return [{ type: i0.ElementRef }, { type: ColorAdapter }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [MNJ_COLOR_CONFIG_PROVIDER]
                        }] }, { type: i2$2.MatFormField, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { mnjColorpicker: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], colorChange: [{
                    type: i0.Output
                }], colorInput: [{
                    type: i0.Output
                }] });
    })();

    var _c0$2 = ["button"];
    function MnjColorpickerToggle__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 3);
            i0.ɵɵelement(1, "path", 4);
            i0.ɵɵelementEnd();
        }
    }
    var _c1 = [[["", "mnjColorpickerToggleIcon", ""]]];
    var _c2 = ["[mnjColorpickerToggleIcon]"];
    /** Can be used to override the icon of a `matColorpickerToggle`. */
    var MnjColorpickerToggleIcon = /** @class */ (function () {
        function MnjColorpickerToggleIcon() {
        }
        return MnjColorpickerToggleIcon;
    }());
    MnjColorpickerToggleIcon.ɵfac = function MnjColorpickerToggleIcon_Factory(t) { return new (t || MnjColorpickerToggleIcon)(); };
    MnjColorpickerToggleIcon.ɵdir = i0.ɵɵdefineDirective({ type: MnjColorpickerToggleIcon, selectors: [["", "mnjColorpickerToggleIcon", ""]] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorpickerToggleIcon, [{
                type: i0.Directive,
                args: [{
                        selector: '[mnjColorpickerToggleIcon]',
                    }]
            }], null, null);
    })();
    var MnjColorpickerToggle = /** @class */ (function () {
        function MnjColorpickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
            this._intl = _intl;
            this._changeDetectorRef = _changeDetectorRef;
            this._stateChanges = rxjs.Subscription.EMPTY;
            var parsedTabIndex = Number(defaultTabIndex);
            this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
        }
        Object.defineProperty(MnjColorpickerToggle.prototype, "colorpicker", {
            /** Colorpicker instance that the button will toggle. */
            get: function () {
                return this._colorpicker;
            },
            set: function (value) {
                this._colorpicker = value;
                this._watchStateChanges();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MnjColorpickerToggle.prototype, "disabled", {
            /** Whether the toggle button is disabled. */
            get: function () {
                if (this._disabled === undefined && this.colorpicker) {
                    return this.colorpicker.disabled;
                }
                return !!this._disabled;
            },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        MnjColorpickerToggle.prototype.ngOnDestroy = function () {
            this._stateChanges.unsubscribe();
        };
        MnjColorpickerToggle.prototype.ngAfterContentInit = function () {
            this._watchStateChanges();
        };
        MnjColorpickerToggle.prototype._open = function (event) {
            if (this.colorpicker && !this.disabled) {
                this.colorpicker.open();
                event.stopPropagation();
            }
        };
        MnjColorpickerToggle.prototype._watchStateChanges = function () {
            var _this = this;
            var colorpickerStateChanged = this.colorpicker ? this.colorpicker._stateChanges : rxjs.of();
            var inputStateChanged = this.colorpicker && this.colorpicker._colorpickerInput ? this.colorpicker._colorpickerInput._stateChanges : rxjs.of();
            var colorpickerToggled = this.colorpicker
                ? rxjs.merge(this.colorpicker.openedStream, this.colorpicker.closedStream)
                : rxjs.of();
            this._stateChanges.unsubscribe();
            this._stateChanges = rxjs.merge(this._intl.changes, colorpickerStateChanged, inputStateChanged, colorpickerToggled).subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        };
        return MnjColorpickerToggle;
    }());
    MnjColorpickerToggle.ɵfac = function MnjColorpickerToggle_Factory(t) { return new (t || MnjColorpickerToggle)(i0.ɵɵdirectiveInject(MnjColorpickerIntl), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵinjectAttribute('tabindex')); };
    MnjColorpickerToggle.ɵcmp = i0.ɵɵdefineComponent({ type: MnjColorpickerToggle, selectors: [["mnj-colorpicker-toggle"]], contentQueries: function MnjColorpickerToggle_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MnjColorpickerToggleIcon, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._customIcon = _t.first);
            }
        }, viewQuery: function MnjColorpickerToggle_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._button = _t.first);
            }
        }, hostAttrs: [1, "mnj-colorpicker-toggle"], hostVars: 8, hostBindings: function MnjColorpickerToggle_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("focus", function MnjColorpickerToggle_focus_HostBindingHandler() { return ctx._button.focus(); });
            }
            if (rf & 2) {
                i0.ɵɵattribute("tabindex", ctx.disabled ? null : -1)("data-mnj-color-panel", ctx.colorpicker ? ctx.colorpicker.id : null);
                i0.ɵɵclassProp("mnj-colorpicker-toggle-active", ctx.colorpicker && ctx.colorpicker.opened)("mnj-accent", ctx.colorpicker && ctx.colorpicker.color === "accent")("mnj-warn", ctx.colorpicker && ctx.colorpicker.color === "warn");
            }
        }, inputs: { colorpicker: ["for", "colorpicker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["mnjColorpickerToggle"], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mnj-colorpicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mnj-colorpicker-toggle-default-icon"], ["d", "M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"]], template: function MnjColorpickerToggle_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c1);
                i0.ɵɵelementStart(0, "button", 0, 1);
                i0.ɵɵlistener("click", function MnjColorpickerToggle_Template_button_click_0_listener($event) { return ctx._open($event); });
                i0.ɵɵtemplate(2, MnjColorpickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
                i0.ɵɵprojection(3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
                i0.ɵɵattribute("aria-haspopup", ctx.colorpicker ? "dialog" : null)("aria-label", ctx._intl.openColorPickerLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", !ctx._customIcon);
            }
        }, directives: [i2$1.MatButton, i3.NgIf], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mnj-colorpicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mnj-colorpicker-toggle-default-icon{display:block;height:1.5em;width:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mnj-colorpicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mnj-colorpicker-toggle-default-icon{margin:auto}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorpickerToggle, [{
                type: i0.Component,
                args: [{
                        selector: 'mnj-colorpicker-toggle',
                        templateUrl: 'colorpicker-toggle.html',
                        styleUrls: ['colorpicker-toggle.scss'],
                        exportAs: 'mnjColorpickerToggle',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
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
            }], function () {
            return [{ type: MnjColorpickerIntl }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                            type: i0.Attribute,
                            args: ['tabindex']
                        }] }];
        }, { colorpicker: [{
                    type: i0.Input,
                    args: ['for']
                }], tabIndex: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], disableRipple: [{
                    type: i0.Input
                }], _customIcon: [{
                    type: i0.ContentChild,
                    args: [MnjColorpickerToggleIcon]
                }], _button: [{
                    type: i0.ViewChild,
                    args: ['button']
                }] });
    })();

    var MnjColorpickerModule = /** @class */ (function () {
        function MnjColorpickerModule() {
        }
        return MnjColorpickerModule;
    }());
    MnjColorpickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: MnjColorpickerModule });
    MnjColorpickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MnjColorpickerModule_Factory(t) { return new (t || MnjColorpickerModule)(); }, providers: [MnjColorpickerIntl, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[i3.CommonModule, i2$1.MatButtonModule, icon.MatIconModule, portal.PortalModule, i3$1.A11yModule, i5.OverlayModule, i4.MatDialogModule], scrolling.CdkScrollableModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MnjColorpickerModule, { declarations: [MnjColorpickerToggle,
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
                MnjScanPickerView], imports: [i3.CommonModule, i2$1.MatButtonModule, icon.MatIconModule, portal.PortalModule, i3$1.A11yModule, i5.OverlayModule, i4.MatDialogModule], exports: [scrolling.CdkScrollableModule,
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
                MnjScanPickerView] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MnjColorpickerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i3.CommonModule, i2$1.MatButtonModule, icon.MatIconModule, portal.PortalModule, i3$1.A11yModule, i5.OverlayModule, i4.MatDialogModule],
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
                            scrolling.CdkScrollableModule,
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
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BaseColorpickerView = BaseColorpickerView;
    exports.BaseSelector = BaseSelector;
    exports.CSS_COLOR_NAMES = CSS_COLOR_NAMES;
    exports.ColorAdapter = ColorAdapter;
    exports.ColorPickerView = ColorPickerView;
    exports.DEFAULT_COLOR = DEFAULT_COLOR;
    exports.MNJ_COLORPICKER_SCROLL_STRATEGY = MNJ_COLORPICKER_SCROLL_STRATEGY;
    exports.MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY = MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY;
    exports.MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
    exports.MNJ_COLORPICKER_VALIDATORS = MNJ_COLORPICKER_VALIDATORS;
    exports.MNJ_COLORPICKER_VALUE_ACCESSOR = MNJ_COLORPICKER_VALUE_ACCESSOR;
    exports.MNJ_COLOR_CONFIG_PROVIDER = MNJ_COLOR_CONFIG_PROVIDER;
    exports.MNJ_DEFAULT_COLOR_CONFIG_FACTORY = MNJ_DEFAULT_COLOR_CONFIG_FACTORY;
    exports.MnjAlphaSelector = MnjAlphaSelector;
    exports.MnjArmoniesPickerView = MnjArmoniesPickerView;
    exports.MnjChromePickerView = MnjChromePickerView;
    exports.MnjColorPanel = MnjColorPanel;
    exports.MnjColorPanelHeader = MnjColorPanelHeader;
    exports.MnjColorpicker = MnjColorpicker;
    exports.MnjColorpickerContent = MnjColorpickerContent;
    exports.MnjColorpickerInput = MnjColorpickerInput;
    exports.MnjColorpickerInputEvent = MnjColorpickerInputEvent;
    exports.MnjColorpickerModule = MnjColorpickerModule;
    exports.MnjColorpickerToggle = MnjColorpickerToggle;
    exports.MnjColorpickerToggleIcon = MnjColorpickerToggleIcon;
    exports.MnjGridSelector = MnjGridSelector;
    exports.MnjHueSelector = MnjHueSelector;
    exports.MnjInputSelector = MnjInputSelector;
    exports.MnjPalettePickerView = MnjPalettePickerView;
    exports.MnjPipetteSelector = MnjPipetteSelector;
    exports.MnjPreviewSwatch = MnjPreviewSwatch;
    exports.MnjSaturationSelector = MnjSaturationSelector;
    exports.MnjScanPickerView = MnjScanPickerView;
    exports.activeCapturingEventOptions = activeCapturingEventOptions;
    exports.activeEventListenerOptions = activeEventListenerOptions;
    exports.analogous = analogous;
    exports.calculateShades = calculateShades;
    exports.clamp = clamp;
    exports.cmykToRgb = cmykToRgb;
    exports.complementary = complementary;
    exports.fromCmyk = fromCmyk;
    exports.fromHex = fromHex;
    exports.fromHsl = fromHsl;
    exports.fromHsv = fromHsv;
    exports.fromHwb = fromHwb;
    exports.fromRgb = fromRgb;
    exports.getColorShade = getColorShade;
    exports.getContainerSize = getContainerSize;
    exports.getPointerPositionFromEvent = getPointerPositionFromEvent;
    exports.getPointerPositionInContainer = getPointerPositionInContainer;
    exports.hexToRgb = hexToRgb;
    exports.hslToHsv = hslToHsv;
    exports.hslToRgb = hslToRgb;
    exports.hsvToHsl = hsvToHsl;
    exports.hsvToHwb = hsvToHwb;
    exports.hsvToRgb = hsvToRgb;
    exports.hwbToHsv = hwbToHsv;
    exports.hwbToRgb = hwbToRgb;
    exports.isSamePosition = isSamePosition;
    exports.mnjColorpickerAnimations = mnjColorpickerAnimations;
    exports.parseString = parseString;
    exports.passiveEventListenerOptions = passiveEventListenerOptions;
    exports.rgbToCmyk = rgbToCmyk;
    exports.rgbToHex = rgbToHex;
    exports.rgbToHsl = rgbToHsl;
    exports.rgbToHsv = rgbToHsv;
    exports.rgbToHwb = rgbToHwb;
    exports.saturate = saturate;
    exports.shade = shade;
    exports.spinColor = spinColor;
    exports.splitComplementary = splitComplementary;
    exports.square = square;
    exports.tetradic = tetradic;
    exports.triadic = triadic;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mnj-ngx-colorpicker.umd.js.map
