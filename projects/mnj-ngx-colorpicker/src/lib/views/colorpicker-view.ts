import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '../color/color';
import { ColorAdapter } from '../color/color-adapter';

/** Pure abstract class due the impossibility to add decorators to interfaces */
@Directive()
export abstract class ColorPickerView {
  /**
   * The current active color. This determines which color is
   * highlighted when using keyboard navigation.
   */
  activeColor: Color;

  /** The currently selected color. */
  selected: Color;

  /**
   * Emits the color chosen in any view.
   * This doesn't imply a change on the selected color.
   */
  readonly activeColorChange = new EventEmitter<Color>();
}

@Directive()
export abstract class BaseColorpickerView implements ColorPickerView {
  /**
   * The color to display in this armonies view.
   */
  @Input()
  get activeColor(): Color {
    return this._activeColor;
  }
  set activeColor(value: Color) {
    const oldActiveColor = this._activeColor;
    if (this._colorAdapter.isValid(value) && !this._colorAdapter.sameColor(oldActiveColor, value)) {
      this._activeColor = value;
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
  }
  _selected: Color;

  @Output() readonly activeColorChange = new EventEmitter<Color>();

  constructor(protected _colorAdapter: ColorAdapter) {}

  changeColor(value: Color) {
    this.activeColor = value;
    this.activeColorChange.emit(this.activeColor);
  }
}
