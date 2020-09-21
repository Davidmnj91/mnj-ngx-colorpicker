import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  DOWN_ARROW,
  END,
  HOME,
  LEFT_ARROW,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
} from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { clamp, Color, PaletteColor } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';

@Component({
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
})
export class MnjGridSelector implements AfterViewInit {
  @Input()
  get color(): Color {
    return this._color;
  }
  set color(value: Color) {
    if (this.colorAdapter.sameColor(this.color, value)) {
      return;
    }
    this._color = value;
    this._buildPalette();
  }
  private _color: Color;

  @Input()
  get paletteGeneratorFn(): (color: Color) => PaletteColor[] {
    return this._paletteGeneratorFn;
  }
  set paletteGeneratorFn(value: (color: Color) => PaletteColor[]) {
    this._paletteGeneratorFn = value;
    this._buildPalette();
  }
  private _paletteGeneratorFn: (color: Color) => PaletteColor[];

  @Input()
  get columns(): number {
    return this._columns || 10;
  }

  set columns(value: number) {
    value = coerceNumberProperty(value);
    if (this._columns !== value) {
      this._columns = value;
      this._calculateCellSize();
    }
  }

  private _columns: number;

  @Output()
  public colorSelected = new EventEmitter<Color>();

  grid: PaletteColor[] = [];

  _selectedIndex: number;

  cssColor(color: Color) {
    return this.colorAdapter.toRgbString(color);
  }

  cellSize() {
    return { width: `${this._cellSize}px`, height: `${this._cellSize}px` };
  }

  private _cellSize: number;

  thumbSize() {
    return { width: `${this._thumbSize}px`, height: `${this._thumbSize}px` };
  }

  private _thumbSize: number;

  gridStyle() {
    return {
      gridTemplateColumns: `repeat(${this.columns}, auto)`,
      gridGap: `${0.25 * this._cellSize}px`,
      padding: `${(this._cellSize * 0.25) / 2}px 0px`,
    };
  }

  constructor(
    private colorAdapter: ColorAdapter,
    private _elementRef: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._calculateCellSize();
    this._changeDetectorRef.markForCheck();
  }

  _buildPalette(): void {
    if (this.paletteGeneratorFn && this.color) {
      this.grid = this.paletteGeneratorFn(this.color);
      this._selectedIndex = this.grid.findIndex((cell) => cell.active);

      this._calculateCellSize();

      this._changeDetectorRef.markForCheck();
    }
  }

  _calculateCellSize(): void {
    if (this._elementRef) {
      const { width } = this._elementRef.nativeElement.getBoundingClientRect();
      const cells = this.columns + this.columns * 0.25 + 1; // Columns per row + (Columns-1/2) spaces in each size of each Column
      const cellSize = Math.trunc(width / cells);
      this._cellSize = cellSize % 2 === 0 ? cellSize : cellSize - 1;

      const thumbSize = Math.trunc(this._cellSize * 0.67);
      this._thumbSize = thumbSize % 2 === 0 ? thumbSize : thumbSize - 1;
    }
  }

  selectColor(index: number): void {
    const { color } = this.grid[index];
    this.color = color;
    // Manually set due to duplicates in some palettes like CSS Colors
    this._selectedIndex = index;
    this.colorSelected.emit(color);
  }

  _handleKeydownEvent(event: KeyboardEvent): void {
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
        this.selectColor(activeIndex);
        return;
      default:
        return;
    }

    activeIndex = clamp(0, grid.length - 1, activeIndex);
    const cells: HTMLElement[] = Array.from(
      this._elementRef.nativeElement.querySelectorAll('.mnj-grid-selector__row--cell')
    );
    if (activeIndex !== this._selectedIndex) {
      cells[activeIndex].focus();
      this._selectedIndex = activeIndex;
    }
  }
}
