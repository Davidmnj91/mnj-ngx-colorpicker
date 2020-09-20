import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Color } from '../../color/color';
import { ColorAdapter } from '../../color/color-adapter';
import { ColorFormat } from '../../color/color-spaces';

@Component({
  selector: 'mnj-input-selector',
  templateUrl: 'input-selector.html',
  styleUrls: ['input-selector.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mnj-input-selector',
    '(keydown)': '_handleKeydownEvent($event)',
  },
})
export class MnjInputSelector {
  @Input()
  get color(): Color {
    return this._color;
  }
  set color(value: Color) {
    if (this.colorAdapter.sameColor(this.color, value)) {
      return;
    }
    this._color = value;
  }

  private _color: Color;

  @Input()
  set colorFormat(value: ColorFormat) {
    if (value !== this._colorFormat) {
      this._colorFormat = value;
      this._selectedIndex = this._formats.indexOf(value);
    }
  }

  private _colorFormat: ColorFormat = 'HEX';

  @Output() inputChange = new EventEmitter<Color>();

  @ViewChild('colorInput') colorInput: ElementRef<HTMLInputElement>;

  get colorString() {
    return this.colorAdapter.format(this.color, this._colorFormat, this.color.alpha !== 1);
  }

  private _formats: ColorFormat[] = ['HEX', 'RGB', 'HSL', 'HWB', 'CMYK'];
  private _selectedIndex = 0;

  constructor(public colorAdapter: ColorAdapter) {}

  changeColor(event: Event) {
    const colorString = (<HTMLInputElement>event.target).value;
    const color = this.colorAdapter.parse(colorString);
    if (this.colorAdapter.isValid(color)) {
      this.inputChange.emit(color);
    }
  }

  nextFormat() {
    this._selectedIndex = (this._selectedIndex + this._formats.length + 1) % this._formats.length;
    this.colorFormat = this._formats[this._selectedIndex];
  }

  previousFormat() {
    this._selectedIndex = (this._selectedIndex + this._formats.length - 1) % this._formats.length;
    this.colorFormat = this._formats[this._selectedIndex];
  }

  _handleKeydownEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case UP_ARROW:
      case LEFT_ARROW:
        this.previousFormat();
        break;
      case DOWN_ARROW:
      case RIGHT_ARROW:
        this.nextFormat();
        break;
      default:
        return;
    }
  }
}
