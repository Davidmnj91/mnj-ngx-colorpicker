import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ColorAdapter } from '../../color/color-adapter';
import { MnjColorpickerIntl } from '../../colorpicker-intl';
import { BaseColorpickerView, ColorPickerView } from '../colorpicker-view';

@Component({
  selector: 'mnj-scan-picker-view',
  exportAs: 'mnjScanPickerView',
  templateUrl: 'scan-view.html',
  styleUrls: ['scan-view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: ColorPickerView, useExisting: MnjScanPickerView }],
  host: {
    class: 'mnj-scan-picker-view',
  },
})
export class MnjScanPickerView extends BaseColorpickerView implements OnDestroy {
  _loadedImage: HTMLImageElement;

  get uploadPhotoToScanLabel() {
    return this._intl.uploadPhotoToScan;
  }

  constructor(
    protected _colorAdapter: ColorAdapter,
    private _intl: MnjColorpickerIntl,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super(_colorAdapter);
  }

  ngOnDestroy() {
    if (this._loadedImage) {
      URL.revokeObjectURL(this._loadedImage.src);
    }
  }

  uploadFile(event: DragEvent | Event) {
    event.preventDefault();
    event.stopPropagation();

    const files =
      event.type === 'drop' ? (<DragEvent>event).dataTransfer.files : (<HTMLInputElement>event.target).files;

    if (files && files.length) {
      const file = files[0];
      if (!file.type.match('image.*')) {
        return;
      }
      const image = new Image();
      image.onload = () => {
        this._loadedImage = image;
        this.changeDetectorRef.markForCheck();
      };
      image.src = URL.createObjectURL(file);
    }
  }

  _allowDrop(event: DragEvent) {
    event.preventDefault();
  }
}
