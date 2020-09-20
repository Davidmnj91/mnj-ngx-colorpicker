import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { Color, PaletteColor } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import * as i0 from "@angular/core";
export declare class MnjGridSelector implements AfterViewInit {
    private colorAdapter;
    private _elementRef;
    private _changeDetectorRef;
    get color(): Color;
    set color(value: Color);
    private _color;
    get paletteGeneratorFn(): (color: Color) => PaletteColor[];
    set paletteGeneratorFn(value: (color: Color) => PaletteColor[]);
    private _paletteGeneratorFn;
    get columns(): number;
    set columns(value: number);
    private _columns;
    colorSelected: EventEmitter<Color>;
    grid: PaletteColor[];
    private _selectedIndex;
    cssColor(color: Color): string;
    cellSize(): {
        width: string;
        height: string;
    };
    private _cellSize;
    thumbSize(): {
        width: string;
        height: string;
    };
    private _thumbSize;
    gridStyle(): {
        gridTemplateColumns: string;
        gridGap: string;
        padding: string;
    };
    constructor(colorAdapter: ColorAdapter, _elementRef: ElementRef<HTMLElement>, _changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    _buildPalette(): void;
    _calculateCellSize(): void;
    selectColor(shade: PaletteColor): void;
    _handleKeydownEvent(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MnjGridSelector, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MnjGridSelector, "mnj-grid-selector", ["mnjGridSelector"], { "color": "color"; "paletteGeneratorFn": "paletteGeneratorFn"; "columns": "columns"; }, { "colorSelected": "colorSelected"; }, never, never>;
}
