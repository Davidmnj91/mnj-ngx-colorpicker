import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {
  analogous,
  calculateShades,
  Color,
  complementary,
  PaletteColor,
  splitComplementary,
  tetradic,
  triadic,
} from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { BaseColorpickerView, ColorPickerView } from '../colorpicker-view';

@Component({
  selector: 'mnj-armonies-picker-view',
  exportAs: 'mnjArmoniesPickerView',
  templateUrl: 'armonies-view.html',
  styleUrls: ['armonies-view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: ColorPickerView, useExisting: MnjArmoniesPickerView }],
  host: {
    class: 'mnj-armonies-picker-view',
  },
})
export class MnjArmoniesPickerView extends BaseColorpickerView {
  constructor(protected _colorAdapter: ColorAdapter) {
    super(_colorAdapter);
  }

  complementaryPaletteFn = (color: Color): PaletteColor[] => {
    const complementaryColor = complementary(color);
    return calculateShades(complementaryColor);
  };

  splitComplementaryPaletteFn = (color: Color): PaletteColor[] => {
    const splitComplementaryColor = splitComplementary(color)[0];
    return calculateShades(splitComplementaryColor);
  };
  splitComplementaryPaletteFn1 = (color: Color): PaletteColor[] => {
    const splitComplementaryColor = splitComplementary(color)[1];
    return calculateShades(splitComplementaryColor);
  };

  analogous1PaletteFn = (color: Color): PaletteColor[] => {
    const analogousColor = analogous(color)[0];
    return calculateShades(analogousColor);
  };
  analogous2PaletteFn = (color: Color): PaletteColor[] => {
    const analogousColor = analogous(color)[1];
    return calculateShades(analogousColor);
  };

  triadic1PaletteFn = (color: Color): PaletteColor[] => {
    const triadicColor = triadic(color)[0];
    return calculateShades(triadicColor);
  };
  triadic2PaletteFn = (color: Color): PaletteColor[] => {
    const triadicColor = triadic(color)[1];
    return calculateShades(triadicColor);
  };
  tetradic1PaletteFn = (color: Color): PaletteColor[] => {
    const tetradicColor = tetradic(color)[0];
    return calculateShades(tetradicColor);
  };
  tetradic2PaletteFn = (color: Color): PaletteColor[] => {
    const tetradicColor = tetradic(color)[1];
    return calculateShades(tetradicColor);
  };
  tetradic3PaletteFn = (color: Color): PaletteColor[] => {
    const tetradicColor = tetradic(color)[2];
    return calculateShades(tetradicColor);
  };
}
