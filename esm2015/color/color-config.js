import { InjectionToken } from '@angular/core';
import { fromHex } from './color';
import { CSS_COLOR_NAMES } from './color-spaces';
/** Default color, commonly known as the NO COLOR (Black) */
export const DEFAULT_COLOR = {
    red: 0,
    green: 0,
    blue: 0,
    hue: 0,
    saturation: 0,
    lightness: 0,
    alpha: 1,
};
/** @docs-private */
export function MNJ_DEFAULT_COLOR_CONFIG_FACTORY() {
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
export const MNJ_COLOR_CONFIG_PROVIDER = new InjectionToken('mnj-color-default-options', {
    providedIn: 'root',
    factory: MNJ_DEFAULT_COLOR_CONFIG_FACTORY,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL2NvbG9yL2NvbG9yLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBUyxPQUFPLEVBQWdCLE1BQU0sU0FBUyxDQUFDO0FBQ3ZELE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCw0REFBNEQ7QUFDNUQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFVO0lBQ2xDLEdBQUcsRUFBRSxDQUFDO0lBQ04sS0FBSyxFQUFFLENBQUM7SUFDUixJQUFJLEVBQUUsQ0FBQztJQUNQLEdBQUcsRUFBRSxDQUFDO0lBQ04sVUFBVSxFQUFFLENBQUM7SUFDYixTQUFTLEVBQUUsQ0FBQztJQUNaLEtBQUssRUFBRSxDQUFDO0NBQ1QsQ0FBQztBQVVGLG9CQUFvQjtBQUNwQixNQUFNLFVBQVUsZ0NBQWdDO0lBQzlDLE9BQU87UUFDTCxTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUsYUFBYTtRQUMzQixhQUFhLEVBQUUsS0FBSztRQUNwQixjQUFjLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkQsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQztLQUNKLENBQUM7QUFDSixDQUFDO0FBRUQsbUZBQW1GO0FBQ25GLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLElBQUksY0FBYyxDQUFpQiwyQkFBMkIsRUFBRTtJQUN2RyxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsZ0NBQWdDO0NBQzFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciwgZnJvbUhleCwgUGFsZXR0ZUNvbG9yIH0gZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBDb2xvckZvcm1hdCwgQ1NTX0NPTE9SX05BTUVTIH0gZnJvbSAnLi9jb2xvci1zcGFjZXMnO1xuXG4vKiogRGVmYXVsdCBjb2xvciwgY29tbW9ubHkga25vd24gYXMgdGhlIE5PIENPTE9SIChCbGFjaykgKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTE9SOiBDb2xvciA9IHtcbiAgcmVkOiAwLFxuICBncmVlbjogMCxcbiAgYmx1ZTogMCxcbiAgaHVlOiAwLFxuICBzYXR1cmF0aW9uOiAwLFxuICBsaWdodG5lc3M6IDAsXG4gIGFscGhhOiAxLFxufTtcblxuLyoqIERlZmF1bHQgY29sb3IgbW9kdWxlIG9wdGlvbnMgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW5qQ29sb3JDb25maWcge1xuICBzaG93QWxwaGE6IGJvb2xlYW47XG4gIGRlZmF1bHRDb2xvcjogQ29sb3I7XG4gIGRpc3BsYXlGb3JtYXQ6IENvbG9yRm9ybWF0O1xuICBkZWZhdWx0UGFsZXR0ZTogUGFsZXR0ZUNvbG9yW107XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTU5KX0RFRkFVTFRfQ09MT1JfQ09ORklHX0ZBQ1RPUlkoKTogTW5qQ29sb3JDb25maWcge1xuICByZXR1cm4ge1xuICAgIHNob3dBbHBoYTogZmFsc2UsXG4gICAgZGVmYXVsdENvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgIGRpc3BsYXlGb3JtYXQ6ICdIRVgnLFxuICAgIGRlZmF1bHRQYWxldHRlOiBPYmplY3Qua2V5cyhDU1NfQ09MT1JfTkFNRVMpLm1hcCgoYykgPT4gKHtcbiAgICAgIHRpdGxlOiBjLFxuICAgICAgY29sb3I6IGZyb21IZXgoQ1NTX0NPTE9SX05BTUVTW2NdKSxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfSkpLFxuICB9O1xufVxuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRvIGJlIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgY29sb3IgbW9kdWxlLiAqL1xuZXhwb3J0IGNvbnN0IE1OSl9DT0xPUl9DT05GSUdfUFJPVklERVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48TW5qQ29sb3JDb25maWc+KCdtbmotY29sb3ItZGVmYXVsdC1vcHRpb25zJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IE1OSl9ERUZBVUxUX0NPTE9SX0NPTkZJR19GQUNUT1JZLFxufSk7XG4iXX0=