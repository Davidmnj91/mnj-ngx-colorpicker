import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { calculateShades, Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { ColorFormat } from '../../color/color-spaces';
import { BaseColorpickerView, ColorPickerView } from '../colorpicker-view';

@Component({
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
})
export class MnjChromePickerView extends BaseColorpickerView {
  @Input() showAlpha: boolean;

  @Input() displayFormat: ColorFormat;

  colorShadesFn = (color: Color) => {
    return calculateShades(color);
  };

  constructor(protected _colorAdapter: ColorAdapter) {
    super(_colorAdapter);
  }
}
