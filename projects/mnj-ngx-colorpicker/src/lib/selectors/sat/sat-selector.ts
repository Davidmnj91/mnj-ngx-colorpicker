import { Directionality } from '@angular/cdk/bidi';
import { DOWN_ARROW, END, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  NgZone,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { clamp, Color, fromHsl, fromHsv } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { hslToHsv } from '../../color/color-conversions';
import { BaseSelector, Container, getPointerPositionInContainer, Point } from '../base-selector';

@Component({
  selector: 'mnj-saturation-selector',
  templateUrl: 'sat-selector.html',
  styleUrls: ['sat-selector.scss', '../base-selector.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: BaseSelector, useExisting: MnjSaturationSelector }],
  host: {
    class: 'mnj-colorpicker-selector mnj-saturation-selector',
    '[class.mnj-saturation-selector--rtl]': '_isRtl()',
    '[attr.tabindex]': '0',
    '(keydown)': '_handleKeydownEvent($event)',
  },
})
export class MnjSaturationSelector extends BaseSelector {
  @Output()
  public satChange = new EventEmitter<Color>();

  get satThumbPos() {
    return { left: `${this.thumbPosition.x}%`, top: `${this.thumbPosition.y}%` };
  }

  get satBackgroundColor() {
    return { 'background-color': `hsl(${this.color.hue}, 100%, 50%)` };
  }

  get satThumbBackgroundColor() {
    return { 'background-color': this.colorAdapter.format(this.color, 'RGB') };
  }

  constructor(
    protected colorAdapter: ColorAdapter,
    @Inject(DOCUMENT) protected _document: Document,
    protected _ngZone: NgZone,
    protected _elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef,
    protected _dir: Directionality
  ) {
    super(colorAdapter, _document, _ngZone, _elementRef, _dir);
  }

  _setColor(color: Color) {
    if (this._elementRef) {
      const { saturation, value } = hslToHsv(color);

      let xPosition = clamp(0, 100, saturation);
      const yPosition = clamp(0, 100, 100 - value);

      if (this._isRtl()) {
        xPosition = 100 - xPosition;
      }

      this.thumbPosition = { x: xPosition, y: yPosition };
    }
    this._changeDetectorRef.markForCheck();
  }

  calculateColorFromPosition(container: Container, pointerPos: Point) {
    this._ngZone.run(() => {
      const { x, y } = getPointerPositionInContainer(pointerPos, container);

      let pointerX = x * 100;
      const pointerY = y * 100;

      if (this._isRtl()) {
        pointerX = 100 - pointerX;
      }

      this.thumbPosition = { x: pointerX, y: pointerY };

      let saturation = Math.round(pointerX) || 0;
      let value = Math.round(100 - pointerY) || 0;
      saturation = clamp(0, 100, saturation);
      value = clamp(0, 100, value);

      const { hue } = this.color;
      const color = fromHsv({ hue, saturation, value });

      this.satChange.emit(color);
    });
  }

  _handleKeydownEvent(event: KeyboardEvent) {
    const { hue, saturation, lightness } = this.color;
    const isRtl = this._isRtl();

    let newSaturation = saturation;
    let newLightness = lightness;

    switch (event.keyCode) {
      case UP_ARROW:
        newLightness++;
        break;
      case LEFT_ARROW:
        newSaturation += isRtl ? 1 : -1;
        break;
      case DOWN_ARROW:
        newLightness--;
        break;
      case RIGHT_ARROW:
        newSaturation += isRtl ? -1 : +1;
        break;
      case PAGE_UP:
        newLightness = newLightness - 10;
        break;
      case PAGE_DOWN:
        newLightness = newLightness + 10;
        break;
      case HOME:
        newSaturation = 0;
        newLightness = 0;
        break;
      case END:
        newSaturation = 100;
        newLightness = 50;
        break;
      default:
        return;
    }

    newSaturation = clamp(0, 100, newSaturation);
    newLightness = clamp(0, 100, newLightness);
    const color = fromHsl({ hue, saturation: newSaturation, lightness: newLightness });
    this.satChange.emit(color);
  }
}
