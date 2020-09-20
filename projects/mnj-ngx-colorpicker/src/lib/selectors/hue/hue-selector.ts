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
import { clamp, Color, fromHsl } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { BaseSelector, Container, getPointerPositionInContainer, Point } from '../base-selector';

@Component({
  selector: 'mnj-hue-selector',
  templateUrl: 'hue-selector.html',
  styleUrls: ['hue-selector.scss', '../base-selector.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: BaseSelector, useExisting: MnjHueSelector }],
  host: {
    class: 'mnj-colorpicker-selector mnj-hue-selector',
    '[attr.tabindex]': '0',
    '(keydown)': '_handleKeydownEvent($event)',
  },
})
export class MnjHueSelector extends BaseSelector {
  @Output()
  public hueChange = new EventEmitter<Color>();

  get hueThumbPos() {
    return { left: `${this.thumbPosition.x}%`, top: '50%' };
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
      const hue = color.hue || 0;

      let xPosition = clamp(0, 100, (hue / 360) * 100);

      if (this._isRtl()) {
        xPosition = 100 - xPosition;
      }

      this.thumbPosition = { x: xPosition, y: 50 };
    }
    this._changeDetectorRef.markForCheck();
  }

  calculateColorFromPosition(container: Container, pointerPos: Point) {
    this._ngZone.run(() => {
      const { x: pointerToContainerX } = getPointerPositionInContainer(pointerPos, container);

      let pointerX = Math.round(pointerToContainerX * 100);

      if (this._isRtl()) {
        pointerX = 100 - pointerX;
      }

      this.thumbPosition = { x: pointerX, y: 50 };

      let hue = Math.round(pointerToContainerX * 360);
      hue = clamp(0, 359, hue);

      const { saturation, lightness } = this.color;

      const color = fromHsl({ hue, saturation, lightness });

      this.hueChange.emit(color);
    });
  }

  _handleKeydownEvent(event: KeyboardEvent) {
    const { hue: oldHue, saturation, lightness, alpha } = this.color;
    const isRtl = this._isRtl();

    let newHue = oldHue;

    switch (event.keyCode) {
      case UP_ARROW:
      case LEFT_ARROW:
        newHue = newHue + (isRtl ? 1 : -1);
        break;
      case DOWN_ARROW:
      case RIGHT_ARROW:
        newHue = newHue + (isRtl ? -1 : +1);
        break;
      case HOME:
        newHue = 0;
        break;
      case END:
        newHue = 359;
        break;
      case PAGE_UP:
        newHue = newHue + (isRtl ? 60 : -60);
        break;
      case PAGE_DOWN:
        newHue = newHue + (isRtl ? -60 : +60);
        break;
      default:
        return;
    }

    newHue = (newHue + 360) % 360;
    const color = fromHsl({ hue: newHue, saturation, lightness }, alpha);
    this.hueChange.emit(color);
  }
}
