import { Injectable } from '@angular/core';
import { parseString } from './color';
import { rgbToCmyk, rgbToHwb } from './color-conversions';
import * as i0 from "@angular/core";
export class ColorAdapter {
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
ColorAdapter.ɵprov = i0.ɵɵdefineInjectable({ token: ColorAdapter, factory: ColorAdapter.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ColorAdapter, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21uai1uZ3gtY29sb3JwaWNrZXIvc3JjL2xpYi9jb2xvci9jb2xvci1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUkxRCxNQUFNLE9BQU8sWUFBWTtJQUN2QixvRUFBb0U7SUFDcEUsZUFBZSxDQUFDLEtBQVk7UUFDMUIsT0FBTyxDQUNMLEtBQUs7WUFDTCxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFDdkIsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUztZQUN4QixLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFDdkIsS0FBSyxDQUFDLFVBQVUsS0FBSyxTQUFTO1lBQzlCLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUztZQUM3QixLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsV0FBbUI7UUFDdkIsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELHlDQUF5QztJQUN6QyxTQUFTLENBQUMsS0FBWSxFQUFF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QyxFQUFFLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzVDLENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7aUJBQ3hDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNULE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDNUMsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7O3dFQTlMVSxZQUFZO29EQUFaLFlBQVksV0FBWixZQUFZLG1CQURDLE1BQU07a0RBQ25CLFlBQVk7Y0FEeEIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yLCBwYXJzZVN0cmluZyB9IGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgcmdiVG9DbXlrLCByZ2JUb0h3YiB9IGZyb20gJy4vY29sb3ItY29udmVyc2lvbnMnO1xuaW1wb3J0IHsgQ29sb3JGb3JtYXQgfSBmcm9tICcuL2NvbG9yLXNwYWNlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29sb3JBZGFwdGVyIHtcbiAgLyoqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgY29tcGxldGUgY29sb3IgcmVwcmVzZW50YXRpb24gKi9cbiAgaXNDb2xvckluc3RhbmNlKGNvbG9yOiBDb2xvcikge1xuICAgIHJldHVybiAoXG4gICAgICBjb2xvciAmJlxuICAgICAgY29sb3IucmVkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbG9yLmdyZWVuICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbG9yLmJsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgY29sb3IuaHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbG9yLnNhdHVyYXRpb24gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgY29sb3IubGlnaHRuZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhIGNvbG9yIGZyb20gYSBsaXRlcmFsXG4gICAqIEBwYXJhbSBjb2xvclN0cmluZyBsaXRlcmFsIHRvIGJlIGNvbnZlcnRlZCB0byBjb2xvclxuICAgKi9cbiAgcGFyc2UoY29sb3JTdHJpbmc6IHN0cmluZyk6IENvbG9yIHtcbiAgICByZXR1cm4gcGFyc2VTdHJpbmcoY29sb3JTdHJpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGlmIGdpdmVuIGEgdmFsaWQgQ29sb3Igb3IgbnVsbC4gRGVzZXJpYWxpemVzIHZhbGlkIHN0cmluZ3NcbiAgICogaW50byB2YWxpZCBDb2xvcnMgYW5kIGVtcHR5IHN0cmluZyBpbnRvIG51bGwuIFJldHVybnMgYW4gaW52YWxpZCBjb2xvciBmb3IgYWxsIG90aGVyIHZhbHVlcy5cbiAgICovXG4gIGRlc2VyaWFsaXplKHZhbHVlOiBhbnkpOiBDb2xvciB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2hlY2tzIGVxdWFsaXR5IGJldHdlZW4gdHdvIGNvbG9ycyAqL1xuICBzYW1lQ29sb3IoZmlyc3Q6IENvbG9yLCBzZWNvbmQ6IENvbG9yKSB7XG4gICAgaWYgKGZpcnN0ICYmIHNlY29uZCkge1xuICAgICAgY29uc3QgZmlyc3RWYWxpZCA9IHRoaXMuaXNWYWxpZChmaXJzdCk7XG4gICAgICBjb25zdCBzZWNvbmRWYWxpZCA9IHRoaXMuaXNWYWxpZChzZWNvbmQpO1xuXG4gICAgICBpZiAoZmlyc3RWYWxpZCAmJiBzZWNvbmRWYWxpZCkge1xuICAgICAgICBjb25zdCBlcXVhbEFscGhhID0gZmlyc3QuYWxwaGEgPT09IHNlY29uZC5hbHBoYTtcbiAgICAgICAgY29uc3QgZXF1YWxIc2wgPVxuICAgICAgICAgIGZpcnN0Lmh1ZSA9PT0gc2Vjb25kLmh1ZSAmJiBmaXJzdC5zYXR1cmF0aW9uID09PSBzZWNvbmQuc2F0dXJhdGlvbiAmJiBmaXJzdC5saWdodG5lc3MgPT09IHNlY29uZC5saWdodG5lc3M7XG4gICAgICAgIHJldHVybiBlcXVhbEFscGhhICYmIGVxdWFsSHNsICYmICF0aGlzLmNvbXBhcmVDb2xvcihmaXJzdCwgc2Vjb25kKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaXJzdFZhbGlkID09PSBzZWNvbmRWYWxpZDtcbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZXMgdHdvIGNvbG9ycyBiYXNlZCBvbiB0aGUgRXVjbGlkZWFuIGRpc3RhbmNlIG9mIHRoZSBzUkdCIGNvbG9yIHNwYWNlLlxuICAgKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IGNvbG9yIHRvIGNvbXBhcmUuXG4gICAqIEBwYXJhbSBzZWNvbmQgVGhlIHNlY29uZCBjb2xvciB0byBjb21wYXJlLlxuICAgKiBAcmV0dXJucyAwIGlmIHRoZSBjb2xvcnMgYXJlIGVxdWFsLCBhIG51bWJlciBsZXNzIHRoYW4gMCBpZiB0aGUgZmlyc3QgY29sb3IgaXMgZWFybGllcixcbiAgICogICAgIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwIGlmIHRoZSBmaXJzdCBjb2xvciBpcyBsYXRlci5cbiAgICovXG4gIGNvbXBhcmVDb2xvcihmaXJzdDogQ29sb3IsIHNlY29uZDogQ29sb3IpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlZE1lYW4gPSAoZmlyc3QucmVkIC0gc2Vjb25kLnJlZCkgLyAyO1xuICAgIGNvbnN0IHJlZERlbHRhID0gZmlyc3QucmVkIC0gc2Vjb25kLnJlZDtcbiAgICBjb25zdCBncmVlbkRlbHRhID0gZmlyc3QuZ3JlZW4gLSBzZWNvbmQuZ3JlZW47XG4gICAgY29uc3QgYmx1ZURlbHRhID0gZmlyc3QuYmx1ZSAtIHNlY29uZC5ibHVlO1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAoMiArIHJlZE1lYW4gLyAyNTYpICogTWF0aC5wb3cocmVkRGVsdGEsIDIpICtcbiAgICAgICAgNCAqIE1hdGgucG93KGdyZWVuRGVsdGEsIDIpICtcbiAgICAgICAgKDIgKyAoMjU1IC0gcmVkRGVsdGEpIC8gMjU2KSAqIE1hdGgucG93KGJsdWVEZWx0YSwgMilcbiAgICApO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGNvbG9yIGlmIHZhbGlkIG90aGVyd2lzZSBudWxsICovXG4gIGdldFZhbGlkQ29sb3JPck51bGwoY29sb3I6IENvbG9yKTogQ29sb3IgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbG9ySW5zdGFuY2UoY29sb3IpICYmIHRoaXMuaXNWYWxpZChjb2xvcikgPyBjb2xvciA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdldGhlciB0aGUgZ2l2ZW4gY29sb3IgaXMgdmFsaWRcbiAgICogQHBhcmFtIGNvbG9yIHRvIGJlIHZhbGlkYXRlZFxuICAgKi9cbiAgaXNWYWxpZChjb2xvcjogQ29sb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29sb3IgJiZcbiAgICAgIGNvbG9yLnJlZCA8PSAyNTUgJiZcbiAgICAgIGNvbG9yLnJlZCA+PSAwICYmXG4gICAgICBjb2xvci5ncmVlbiA8PSAyNTUgJiZcbiAgICAgIGNvbG9yLmdyZWVuID49IDAgJiZcbiAgICAgIGNvbG9yLmJsdWUgPD0gMjU1ICYmXG4gICAgICBjb2xvci5ibHVlID49IDAgJiZcbiAgICAgIGNvbG9yLmh1ZSA8IDM2MCAmJlxuICAgICAgY29sb3IuaHVlID49IDAgJiZcbiAgICAgIGNvbG9yLnNhdHVyYXRpb24gPD0gMTAwICYmXG4gICAgICBjb2xvci5zYXR1cmF0aW9uID49IDAgJiZcbiAgICAgIGNvbG9yLmxpZ2h0bmVzcyA8PSAxMDAgJiZcbiAgICAgIGNvbG9yLmxpZ2h0bmVzcyA+PSAwICYmXG4gICAgICBjb2xvci5hbHBoYSA8PSAxICYmXG4gICAgICBjb2xvci5hbHBoYSA+PSAwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXRzIGEgY29sb3IgYXMgYSBzdHJpbmcgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBmb3JtYXRcbiAgICogQHBhcmFtIGNvbG9yIFRoZSBjb2xvciB0byBmb3JtYXRcbiAgICogQHBhcmFtIGZvcm1hdCBUaGUgZm9ybWF0IHRvIGRpc3BsYXkgdGhlIGNvbG9yIGFzIGEgc3RyaW5nXG4gICAqL1xuICBmb3JtYXQoY29sb3I6IENvbG9yLCBmb3JtYXQ6IENvbG9yRm9ybWF0LCBzaG93QWxwaGEgPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgJ0hFWCc6XG4gICAgICAgIHJldHVybiB0aGlzLnRvSGV4U3RyaW5nKGNvbG9yLCBzaG93QWxwaGEpO1xuICAgICAgY2FzZSAnUkdCJzpcbiAgICAgICAgcmV0dXJuIHRoaXMudG9SZ2JTdHJpbmcoY29sb3IsIHNob3dBbHBoYSk7XG4gICAgICBjYXNlICdIU0wnOlxuICAgICAgICByZXR1cm4gdGhpcy50b0hzbFN0cmluZyhjb2xvciwgc2hvd0FscGhhKTtcbiAgICAgIGNhc2UgJ0hXQic6XG4gICAgICAgIHJldHVybiB0aGlzLnRvSHdiU3RyaW5nKGNvbG9yLCBzaG93QWxwaGEpO1xuICAgICAgY2FzZSAnQ01ZSyc6XG4gICAgICAgIHJldHVybiB0aGlzLnRvQ215a1N0cmluZyhjb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqIE91dHB1dHMgdGhlIFJHQi9BIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yICovXG4gIHRvUmdiU3RyaW5nKGNvbG9yOiBDb2xvciwgc2hvd0FscGhhID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgfSA9IGNvbG9yO1xuICAgIHJldHVybiBzaG93QWxwaGEgPyBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAke2FscGhhfSlgIDogYHJnYigke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9KWA7XG4gIH1cblxuICAvKiogT3V0cHV0cyB0aGUgSFdCL0Egc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgY29sb3IgKi9cbiAgdG9Id2JTdHJpbmcoY29sb3I6IENvbG9yLCBzaG93QWxwaGEgPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBodWUsIHdoaXRlbmVzcywgYmxhY2tuZXNzIH0gPSByZ2JUb0h3Yihjb2xvcik7XG4gICAgcmV0dXJuIHNob3dBbHBoYVxuICAgICAgPyBgaHdiYSgke2h1ZX0sICR7TWF0aC5yb3VuZCh3aGl0ZW5lc3MgKiAxMDApfSUsICR7TWF0aC5yb3VuZChibGFja25lc3MgKiAxMDApfSUsICR7Y29sb3IuYWxwaGF9KWBcbiAgICAgIDogYGh3Yigke2h1ZX0sICR7TWF0aC5yb3VuZCh3aGl0ZW5lc3MgKiAxMDApfSUsICR7TWF0aC5yb3VuZChibGFja25lc3MgKiAxMDApfSUpYDtcbiAgfVxuXG4gIC8qKiBPdXRwdXRzIHRoZSBIV0IvQSBkZWNpbWFscyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvciAqL1xuICB0b0h3YlN0cmluZ0RlY2ltYWwoY29sb3I6IENvbG9yLCBzaG93QWxwaGEgPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBodWUsIHdoaXRlbmVzcywgYmxhY2tuZXNzIH0gPSByZ2JUb0h3Yihjb2xvcik7XG4gICAgcmV0dXJuIHNob3dBbHBoYVxuICAgICAgPyBgaHdiYSgke2h1ZX0sICR7d2hpdGVuZXNzfSwgJHtibGFja25lc3N9LCAke2NvbG9yLmFscGhhfSlgXG4gICAgICA6IGBod2IoJHtodWV9LCAke3doaXRlbmVzc30sICR7YmxhY2tuZXNzfSlgO1xuICB9XG5cbiAgLyoqIE91dHB1dHMgdGhlIEhTTC9BIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yICovXG4gIHRvSHNsU3RyaW5nKGNvbG9yOiBDb2xvciwgc2hvd0FscGhhID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhIH0gPSBjb2xvcjtcbiAgICByZXR1cm4gc2hvd0FscGhhXG4gICAgICA/IGBoc2xhKCR7aHVlfSwgJHtzYXR1cmF0aW9ufSUsICR7bGlnaHRuZXNzfSUsICR7YWxwaGF9KWBcbiAgICAgIDogYGhzbCgke2h1ZX0sICR7c2F0dXJhdGlvbn0lLCAke2xpZ2h0bmVzc30lKWA7XG4gIH1cblxuICAvKiogT3V0cHV0cyB0aGUgSFNML0EgZGVjaW1hbHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgY29sb3IgKi9cbiAgdG9Ic2xTdHJpbmdEZWNpbWFsKGNvbG9yOiBDb2xvciwgc2hvd0FscGhhID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhIH0gPSBjb2xvcjtcbiAgICByZXR1cm4gc2hvd0FscGhhXG4gICAgICA/IGBoc2xhKCR7aHVlfSwgJHtzYXR1cmF0aW9ufSUsICR7bGlnaHRuZXNzfSUsICR7Y29sb3IuYWxwaGF9KWBcbiAgICAgIDogYGhzbCgke2h1ZX0sICR7c2F0dXJhdGlvbn0sICR7bGlnaHRuZXNzfSwgJHtjb2xvci5hbHBoYX0pYDtcbiAgfVxuXG4gIC8qKiBPdXRwdXRzIHRoZSBDTVlLIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yICovXG4gIHRvQ215a1N0cmluZyhjb2xvcjogQ29sb3IpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgY3lhbiwgbWFnZW50YSwgeWVsbG93LCBibGFjayB9ID0gcmdiVG9DbXlrKGNvbG9yKTtcbiAgICByZXR1cm4gYGNteWsoJHtjeWFufSUsICR7bWFnZW50YX0lLCAke3llbGxvd30lLCAke2JsYWNrfSUpYDtcbiAgfVxuXG4gIC8qKiBPdXRwdXRzIHRoZSBDTVlLIGRlY2ltYWxzIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yICovXG4gIHRvQ215a1N0cmluZ0RlY2ltYWwoY29sb3I6IENvbG9yKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IGN5YW4sIG1hZ2VudGEsIHllbGxvdywgYmxhY2sgfSA9IHJnYlRvQ215ayhjb2xvcik7XG4gICAgcmV0dXJuIGBjbXlrKCR7Y3lhbn0sICR7bWFnZW50YX0sICR7eWVsbG93fSwgJHtibGFja30pYDtcbiAgfVxuXG4gIC8qKiBPdXRwdXRzIHRoZSBIRVgvQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvciAqL1xuICB0b0hleFN0cmluZyhjb2xvcjogQ29sb3IsIHNob3dBbHBoYSA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgIGlmIChzaG93QWxwaGEpIHtcbiAgICAgIGNvZGUgPSBbY29sb3IucmVkLCBjb2xvci5ncmVlbiwgY29sb3IuYmx1ZSwgY29sb3IuYWxwaGEgKiAxMDBdXG4gICAgICAgIC5tYXAoKHgpID0+IHtcbiAgICAgICAgICBjb25zdCBoZXggPSBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2RlID0gW2NvbG9yLnJlZCwgY29sb3IuZ3JlZW4sIGNvbG9yLmJsdWVdXG4gICAgICAgIC5tYXAoKHgpID0+IHtcbiAgICAgICAgICBjb25zdCBoZXggPSBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICByZXR1cm4gYCMke2NvZGV9YDtcbiAgfVxufVxuIl19