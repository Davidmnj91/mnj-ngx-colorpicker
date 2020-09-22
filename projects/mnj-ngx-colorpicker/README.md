# MnjNgxColorpicker

Simple and powerfull colorpicker component & color library ready to use with angular material.

## Quick Links

[Demo](https://davidmnj91.github.io/mnj-ngx-colorpicker/) | [Stackblitz](https://stackblitz.com/github/davidmnj91/mnj-ngx-colorpicker)

## Building the library

```bash
npm install
npm run build
```

## Running the demo

```bash
npm install
npm run start
```

## Usage

#### Import into your module

```javascript
import { MnjColorPickerModule } from 'mnj-ngx-color-picker';

@NgModule({
  ...
  imports: [
    ...
    MnjColorPickerModule
  ]
})
```

#### Add to your custom theme

```scss
@import '~@angular/material/theming';
@import '~mnj-ngx-colorpicker/colorpicker-theme.scss';

@include mat-core();

$candy-app-primary: mat-palette($mat-indigo);
$candy-app-accent: mat-palette($mat-pink, A200, A100, A400);

$candy-app-warn: mat-palette($mat-red);

$candy-app-theme: mat-light-theme(
  (
    color: (
      primary: $candy-app-primary,
      accent: $candy-app-accent,
      warn: $candy-app-warn,
    ),
  )
);

@include angular-material-theme($candy-app-theme);
@include mnj-colorpicker-theme($candy-app-theme);
```

[See more about angular material theming](https://material.angular.io/guide/theming)

#### Use it in your HTML template

```html
<mat-form-field>
  <input matInput [mnjColorpicker]="colorpicker" />
  <mnj-colorpicker-toggle matSuffix [for]="colorpicker"></mnj-colorpicker-toggle>
  <mnj-colorpicker #colorpicker></mnj-colorpicker>
</mat-form-field>
```

##### Available inputs for colorpicker

```javascript
    showAlpha: boolean // Wether or not to show the alpha slider in the picker
    displayFormat: ColorFormat // The string representation to show in the input of the selected color (HEX, RGB/A, HSL/A, HWB/A, CMYK)
    startColor: Color // The default color to be preselected when the picker is open
    palette: PaletteColor[] // A custom palette to be shown in the palette view
    touchUI: boolean // Wheter the picker should be shown in a popup optimized for touch screens
    startView: MnjColorPanelView // The first view to be shown when picker opens
    color: Color // Theme color for the colorpicker internal themig, by default it will take the form field color
    disabled: boolean // Whether the picker should be in disabled state
    xPosition: 'start' | 'end' // Horizontal position of the popup from the input
    yPosition: 'above' | 'below' // Vertical position of the popup from the input
    panelClass: string | string[] // Class names to be added to the colorpanel for customized look and feel
    opened: boolean // Whether the picker should be show opened as default
```

##### Available methods for colorpicker

```javascript
open(); // Opens the picker
close(); // Close the picker
select((color: Color)); // Selects the given color
```

##### Available events from colorpicker

```javascript
opened(
  // Notifies when the picker has been opened
  closed
); // Notifies when the picker has been closed
```

#### Configure the provider

If you want to configure default values for the colorpicker you can do via provider configuration:

```javascript
import { MnjColorPickerModule, MNJ_COLOR_CONFIG_PROVIDER, fromString } from 'mnj-ngx-color-picker';

@NgModule({
  ...
  imports: [
    ...
    MnjColorPickerModule
  ],
  providers: [
      {provide: MNJ_COLOR_CONFIG_PROVIDER, useValue: {
        showAlpha: true,
        defaultColor: fromString('red'),
        displayFormat: 'CMYK'
      }}
  ]
})
```

##### Available configuration properties are

```javascript
    showAlpha: boolean // Default value false
    defaultColor: Color // Default value is black,
    displayFormat: ColorFormat // Default value is HEX,
    defaultPalette: PaletteColor[] // Default value is CSS Colors
```

### Color Library

The included color library provides a Color abstraction and some usefull methods to modify and translate colors

#### Methods

##### Parse Methods

```javascript
fromRgb({ red: number, green: number, blue: number }, (alpha: number)); // Creates a Color object form the given rgb representation
fromHsl({ hue: number, saturation: number, lightness: number }, (alpha: number)); // Creates a Color object form the given hsl representation
fromHsv({ hue: number, saturation: number, value: number }, (alpha: number)); // Creates a Color object form the given hsv representation
fromHwb({ hue: number, whiteness: number, blackness: number }, (alpha: number)); // Creates a Color object form the given hwb representation
fromCmyk({ cyan: number, magenta: number, yellow: number, black: number }, (alpha: number)); // Creates a Color object form the given cmyk representation
fromHex((hex: string)); // Creates a Color object form the given hex/a string representation #fff, #ffff, #ffffff #ffffff64 (64 indicates the alpha in base 16 from 0 to 100)
fromString((color: string)); // Creates a Color object from any of the above formats plus any color name of the CSS colors*
```

\*[Css Colors](https://developer.mozilla.org/es/docs/Web/CSS/color_value)

##### Modification Methods

All the methods works in an immutable way, so the passed color parameter does not get affected at all

```javascript
//Amount is counted as a value betweeen -1 and 1, but accepts values between -100 and 100
saturate((amount: number), (color: Color)); // Modify the grey amount of the given color
shade((amount: number), (color: Color)); // Modify the lightness of the given color
calculateShades((color: Color)); // Calculates all the shades of the given color in a range of [50, 100, 200, ..., 900] percent of darkness
complementary((color: Color)); // Returns the oposite color in the color wheel of the given color
splitComplementary((color: Color)); // Returns the oposite's complementary colours in the color wheel of the given color
analogous((color: Color)); // Returns the adyacent color pair in the color wheel of the given color
triadic((color: Color)); // Returns the pair of color that are at 120º in the color wheel from the given color
tetradic((color: Color)); // Returns the right complementary, the analogous and the analogous right complementary in the color wheel from the given color
square((color: Color)); // Returns the three colours that are at 90º in the color wheel from the given color
spinColor((deg: number), (color: Color)); // Will change the hue of the color by spining deg amount in the color wheel
getColorShade((color: Color)); // Returns the amount of darkness of the given color in a scale of [50, 100, 200, ..., 900]
```
