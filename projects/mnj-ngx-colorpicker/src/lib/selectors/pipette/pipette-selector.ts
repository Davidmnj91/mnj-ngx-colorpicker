import { coerceBooleanProperty, coerceElement, coerceNumberProperty } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { take } from 'rxjs/operators';
import { Color, fromRgb } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import {
  activeCapturingEventOptions,
  activeEventListenerOptions,
  BaseSelector,
  Container,
  getContainerSize,
  getPointerPositionFromEvent,
  getPointerPositionInContainer,
  isSamePosition,
  passiveEventListenerOptions,
  Point,
} from '../base-selector';

type SelfPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

@Component({
  selector: 'mnj-pipette-selector',
  templateUrl: 'pipette-selector.html',
  styleUrls: ['pipette-selector.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: BaseSelector, useExisting: MnjPipetteSelector }],
  host: {
    class: 'mnj-pipette-selector',
  },
})
export class MnjPipetteSelector implements AfterViewInit, OnDestroy {
  @ViewChild('imageCanvas') canvas: ElementRef<HTMLCanvasElement>;

  @Input()
  get image(): HTMLImageElement {
    return this._image;
  }

  set image(value: HTMLImageElement) {
    this._image = value;
    this._paintCanvas();
  }

  private _image: HTMLImageElement;

  @Input()
  set swatchCells(value: number) {
    value = coerceNumberProperty(value);
    value = value % 2 === 1 ? value : value - 1;
    if (value !== this._swatchCells) {
      this._swatchCells = value;
      this._swatchMiddle = Math.floor(Math.pow(value, 2) / 2);
    }
  }
  private _swatchCells;
  _swatchMiddle;

  @Output()
  public pipetteColorChange = new EventEmitter<Color>();

  get canvasThumbPos() {
    return { left: `${this.thumbPosition.x}%`, top: `${this.thumbPosition.y}%` };
  }

  get swatchGridStyle() {
    return {
      gridTemplateColumns: `repeat(${this._swatchCells}, 10px)`,
      gridTemplateRows: `repeat(${this._swatchCells}, 10px)`,
    };
  }

  get swatchGridPos() {
    const delta = (this._swatchCells * 4) / 3;
    let translate;
    switch (this.swatchPosition) {
      case 'bottom-right': {
        translate = `${delta}%, ${delta}%`;
        break;
      }
      case 'top-right': {
        translate = `${delta}%, ${-100 - delta}%`;
        break;
      }
      case 'top-left': {
        translate = `${-100 - delta}%, ${-100 - delta}%`;
        break;
      }
      case 'bottom-left': {
        translate = `${-100 - delta}%, ${delta}%`;
        break;
      }
    }
    return {
      left: `${this.thumbPosition.x}%`,
      top: `${this.thumbPosition.y}%`,
      transform: `translate(${translate})`,
      width: `${this._swatchCells * 10 + 1}px`,
    };
  }

  getPixelBackground(pixel) {
    return `rgba(${pixel.red}, ${pixel.green}, ${pixel.blue}, ${pixel.alpha})`;
  }

  get showPipetteSwatch() {
    return this._showPipetteSwatch && !!this.image;
  }

  set showPipetteSwatch(value: boolean) {
    value = coerceBooleanProperty(value);
    if (this._showPipetteSwatch !== value) {
      this._showPipetteSwatch = value;
      this._changeDetectorRef.detectChanges();
    }
  }

  private _showPipetteSwatch = false;

  cachedPointerPos: Point;
  cachedContainerSize: Container;
  thumbPosition: Point = { x: 0, y: 0 };
  swatchPosition: SelfPosition = 'bottom-right';

  /** Keeps track of the event listeners that we've bound to the `document`. */
  private _globalListeners = new Map<
    string,
    {
      handler: (event: Event) => void;
      options?: AddEventListenerOptions | boolean;
    }
  >();

  pipetteSwatchPalette = [];

  constructor(
    protected colorAdapter: ColorAdapter,
    @Inject(DOCUMENT) protected _document: Document,
    protected _ngZone: NgZone,
    protected _elementRef: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.swatchCells = 9;
  }

  ngAfterViewInit() {
    this.attachListeners();
    if (this._image) {
      // Paint canvas if there was a pending image that could not be rendered until this momment
      this._ngZone.onStable.pipe(take(1)).subscribe(() => this._paintCanvas());
    }
  }

  ngOnDestroy(): void {
    this._clearGlobalListeners();
  }

  // LISTENERS
  attachListeners() {
    const sliderElement = coerceElement(this._elementRef);
    this._ngZone.runOutsideAngular(() => {
      sliderElement.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
      sliderElement.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    });
  }

  private addGlobalListeners() {
    this._ngZone.runOutsideAngular(() => {
      this._globalListeners.forEach((config, name) => {
        this._document.addEventListener(name, config.handler, config.options);
      });
    });
  }

  /** Clears out the global event listeners from the `document`. */
  private _clearGlobalListeners = () => {
    this.showPipetteSwatch = false;

    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });

    this._globalListeners.clear();
  };

  /** Handler for the `mousedown`/`touchstart` events. */
  private _pointerDown = (event: MouseEvent | TouchEvent) => {
    const pointer = getPointerPositionFromEvent(event);

    if (isSamePosition(this.cachedPointerPos, pointer)) {
      return;
    }

    this.cachedContainerSize = getContainerSize(this._elementRef);
    this.calculateColorFromPosition(this.cachedContainerSize, pointer);
    const isTouchEvent = event.type.startsWith('touch');
    const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
    const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
    this._clearGlobalListeners();
    this._globalListeners
      .set(moveEvent, {
        handler: this.pointerMove,
        options: activeCapturingEventOptions,
      })
      .set(upEvent, {
        handler: this._clearGlobalListeners,
        options: true,
      });

    this.showPipetteSwatch = true;

    this.addGlobalListeners();
  };

  private pointerMove = (event: MouseEvent | TouchEvent) => {
    const pointer = getPointerPositionFromEvent(event);

    if (isSamePosition(this.cachedPointerPos, pointer)) {
      return;
    }

    this.calculateColorFromPosition(this.cachedContainerSize, pointer);
  };

  _paintCanvas() {
    if (this.image && this.canvas) {
      const canvasElement = coerceElement(this.canvas);
      const { width: imgWidth, height: imgHeight } = this.image;
      const { width: containerWidth, height: containerHeight } = coerceElement(
        this._elementRef
      ).getBoundingClientRect();

      const ctx = canvasElement.getContext('2d');
      ctx.clearRect(0, 0, canvasElement.height, canvasElement.width);

      const canvasWidth = Math.floor(containerWidth);
      const canvasHeight = Math.floor(containerHeight);

      const { offsetX, offsetY, width, height } = this._fitImage(canvasWidth, canvasHeight, imgWidth, imgHeight);

      canvasElement.width = canvasWidth;
      canvasElement.height = canvasHeight;

      ctx.drawImage(this.image, offsetX, offsetY, width, height);

      this._changeDetectorRef.markForCheck();
    }
  }

  calculateColorFromPosition(container: Container, pointerPos: Point) {
    this._ngZone.run(() => {
      const { x, y } = getPointerPositionInContainer(pointerPos, container);

      const pointerX = x * 100;
      const pointerY = y * 100;

      this.thumbPosition = { x: pointerX, y: pointerY };
      this.swatchPosition = this._getSwatchPosition(pointerPos, container);

      const leftPos = pointerPos.x - container.left;
      const topPos = pointerPos.y - container.top;

      const ctx = this.canvas.nativeElement.getContext('2d');
      const negativeOffset = this._swatchCells / 2 - 1;
      const pixels = ctx.getImageData(
        leftPos - negativeOffset,
        topPos - negativeOffset,
        this._swatchCells,
        this._swatchCells
      );

      this.pipetteSwatchPalette = [];
      for (let i = 0; i < pixels.data.length; i += 4) {
        this.pipetteSwatchPalette.push({
          red: pixels.data[i],
          green: pixels.data[i + 1],
          blue: pixels.data[i + 2],
          alpha: pixels.data[i + 3] / 255,
        });
      }

      const { red, green, blue, alpha } = this.pipetteSwatchPalette[this._swatchMiddle];
      const color = fromRgb({ red, green, blue }, alpha);
      this.pipetteColorChange.emit(color);

      this._changeDetectorRef.markForCheck();
    });
  }

  /** Centers and resize given children container into the parent container */
  private _fitImage(parentWidth, parentHeight, childWidth, childHeight, scale = 1, offsetX = 0.5, offsetY = 0.5) {
    const childRatio = childWidth / childHeight;
    const parentRatio = parentWidth / parentHeight;
    let width = parentWidth * scale;
    let height = parentHeight * scale;

    if (childRatio > parentRatio) {
      height = width / childRatio;
    } else {
      width = height * childRatio;
    }

    return {
      width,
      height,
      offsetX: (parentWidth - width) * offsetX,
      offsetY: (parentHeight - height) * offsetY,
    };
  }

  private _getSwatchPosition(
    pointerPos: Point,
    container: Container
  ): 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' {
    const { x, y } = pointerPos;
    const { right, bottom } = container;
    const swatchRight = x + 10 * this._swatchCells + 1; // 10 pixels per cell plus 1px border
    const swatchBottom = y + 10 * this._swatchCells + 1; // 10 pixels per cells plus 1px border

    const topOrBottom = swatchBottom > bottom;
    const leftOrRight = swatchRight > right;

    if (!topOrBottom && !leftOrRight) return 'bottom-right';
    if (topOrBottom && leftOrRight) return 'top-left';
    if (topOrBottom && !leftOrRight) return 'top-right';
    if (!topOrBottom && leftOrRight) return 'bottom-left';
  }
}
