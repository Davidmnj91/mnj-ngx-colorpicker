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
import { clamp, Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { BaseSelector, Container, getPointerPositionInContainer, Point } from '../base-selector';

@Component({
  selector: 'mnj-alpha-selector',
  templateUrl: 'alpha-selector.html',
  styleUrls: ['alpha-selector.scss', '../base-selector.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: BaseSelector, useExisting: MnjAlphaSelector }],
  host: {
    class: 'mnj-colorpicker-selector mnj-alpha-selector',
    '[attr.tabindex]': '0',
    '(keydown)': '_handleKeydownEvent($event)',
  },
})
export class MnjAlphaSelector extends BaseSelector {
  @Output()
  public alphaChange = new EventEmitter<Color>();

  get alphaThumbPos() {
    return { left: `${this.thumbPosition.x}%`, top: '50%' };
  }

  public get gradient() {
    const { red, green, blue } = this.color;
    const direction = this._isRtl() ? 'to left' : 'to right';
    return {
      backgroundImage: `linear-gradient(${direction}, rgba(${red}, ${green}, ${blue}, 0) 0%, rgb(${red}, ${green}, ${blue}) 100%)`,
    };
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
      const alpha = color.alpha * 100;

      let xPosition = clamp(0, 100, alpha);

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

      const alpha = Math.round(pointerX) / 100;

      const color = { ...this.color };
      color.alpha = alpha;

      this.alphaChange.emit(color);
    });
  }

  _handleKeydownEvent(event: KeyboardEvent) {
    const { alpha: oldAlpha } = this.color;
    const isRtl = this._isRtl();

    let newAlpha = oldAlpha;

    switch (event.keyCode) {
      case UP_ARROW:
      case LEFT_ARROW:
        newAlpha = newAlpha + (isRtl ? 0.01 : -0.01);
        break;
      case DOWN_ARROW:
      case RIGHT_ARROW:
        newAlpha = newAlpha + (isRtl ? -0.01 : 0.01);
        break;
      case HOME:
        newAlpha = 0;
        break;
      case END:
        newAlpha = 1;
        break;
      case PAGE_UP:
        newAlpha = newAlpha + (isRtl ? 0.1 : -0.1);
        break;
      case PAGE_DOWN:
        newAlpha = newAlpha + (isRtl ? -0.1 : 0.1);
        break;
      default:
        return;
    }

    newAlpha = clamp(0, 1, newAlpha);
    const color = { ...this.color, ...{ alpha: newAlpha } };
    this.alphaChange.emit(color);
  }
}
