import { Directionality } from '@angular/cdk/bidi';
import { coerceElement } from '@angular/cdk/coercion';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Input, NgZone, OnDestroy } from '@angular/core';
import { clamp, Color } from '../color/color';
import { ColorAdapter } from '../color/color-adapter';

export interface Point {
  x: number;
  y: number;
}

export interface Container {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

// UTILS
export function getPointerPositionFromEvent(event: MouseEvent | TouchEvent): Point {
  const { clientX: x, clientY: y } = event instanceof MouseEvent ? <MouseEvent>event : (<TouchEvent>event).touches[0];
  return { x, y };
}

export function isSamePosition(point1: Point, point2: Point) {
  if (!point1 || !point2) {
    return false;
  }
  return point1.x === point2.x && point1.y === point2.y;
}

export function getContainerSize(container: ElementRef | HTMLElement): Container {
  const { top, left, right, bottom, width, height } = coerceElement(container).getBoundingClientRect();
  return { top, left, right, bottom, width, height };
}

export function getPointerPositionInContainer(pointer: Point, container: Container): Point {
  const pointerXToContainerX = (pointer.x - container.left) / container.width;
  const pointerYToContainerY = (pointer.y - container.top) / container.height;
  return { x: clamp(0, 1, pointerXToContainerX), y: clamp(0, 1, pointerYToContainerY) };
}

/** Options that can be used to bind a passive event listener. */
export const passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });

/** Options that can be used to bind an active event listener. */
export const activeEventListenerOptions = normalizePassiveListenerOptions({ passive: false });

/** Event options that can be used to bind an active, capturing event. */
export const activeCapturingEventOptions = normalizePassiveListenerOptions({
  passive: false,
  capture: true,
});

@Directive()
export abstract class BaseSelector implements AfterViewInit, OnDestroy {
  @Input()
  get color(): Color {
    return this._color;
  }
  set color(value: Color) {
    if (this.colorAdapter.sameColor(this._color, value)) {
      return;
    }
    this._color = value;
    this._setColor(value);
  }
  public _color: Color;

  cachedPointerPos: Point;
  cachedContainerSize: Container;
  thumbPosition: Point = { x: 0, y: 0 };

  /** Keeps track of the event listeners that we've bound to the `document`. */
  private _globalListeners = new Map<
    string,
    {
      handler: (event: Event) => void;
      options?: AddEventListenerOptions | boolean;
    }
  >();

  constructor(
    protected colorAdapter: ColorAdapter,
    @Inject(DOCUMENT) protected _document: Document,
    protected _ngZone: NgZone,
    protected _elementRef: ElementRef,
    protected _dir?: Directionality
  ) {}

  ngAfterViewInit() {
    this.attachListeners();
    this.cachedContainerSize = getContainerSize(this._elementRef);
    // Force setter after view is initialized
    this._setColor(this.color);
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
    this.cachedPointerPos = pointer;
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
    this.addGlobalListeners();
  };

  private pointerMove = (event: MouseEvent | TouchEvent) => {
    const pointer = getPointerPositionFromEvent(event);

    if (isSamePosition(this.cachedPointerPos, pointer)) {
      return;
    }

    this.cachedPointerPos = pointer;
    this.calculateColorFromPosition(this.cachedContainerSize, pointer);
  };

  _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }

  abstract calculateColorFromPosition(container: Container, pointerPos: Point);

  abstract _setColor(color: Color);
}
