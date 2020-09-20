import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';

@Component({
  selector: 'mnj-preview-swatch',
  templateUrl: 'preview-swatch.html',
  styleUrls: ['preview-swatch.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mnj-preview-swatch',
  },
})
export class MnjPreviewSwatch {
  @Input()
  get color() {
    return this._color;
  }
  set color(value: Color) {
    if (this.colorAdapter.sameColor(this.color, value)) {
      return;
    }
    this._color = value;
  }
  private _color: Color;

  get cssBackground() {
    return this.colorAdapter.toRgbString(this.color, true);
  }

  constructor(private colorAdapter: ColorAdapter) {}
}
