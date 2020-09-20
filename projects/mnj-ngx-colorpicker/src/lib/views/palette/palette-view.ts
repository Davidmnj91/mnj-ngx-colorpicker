import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Color, PaletteColor } from '../../color';
import { ColorAdapter } from '../../color/color-adapter';
import { ColorPickerView } from '../colorpicker-view';

@Component({
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
})
export class MnjPalettePickerView implements ColorPickerView {
  @Input()
  get activeColor(): Color {
    return this._activeColor;
  }
  set activeColor(value: Color) {
    const oldActiveColor = this._activeColor;
    if (this._colorAdapter.isValid(value) && !this._colorAdapter.sameColor(oldActiveColor, value)) {
      this._activeColor = value;
      this._selectColorInPalette();
    }
  }
  private _activeColor: Color;

  @Input()
  get selected(): Color {
    return this._selected;
  }

  set selected(value: Color) {
    if (this._colorAdapter.sameColor(this.selected, value)) {
      return;
    }
    this._selected = this._colorAdapter.getValidColorOrNull(value);
    this._selectColorInPalette();
  }
  _selected: Color;

  @Input()
  get palette(): PaletteColor[] {
    return this._palette;
  }
  set palette(value: PaletteColor[]) {
    this._palette = value;
    this._selectColorInPalette();
  }
  private _palette: PaletteColor[];

  paletteFn = () => this.palette;

  // tslint:disable-next-line: member-ordering
  @Output() readonly activeColorChange = new EventEmitter<Color>();

  constructor(protected _colorAdapter: ColorAdapter) {}

  changeColor(value: Color) {
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
