# Color Manipulation Package

This is a simple JavaScript package that provides functions for color manipulation, including converting between RGB and HEX color formats, as well as calculating the contrast ratio between two colors.

## Installation

To install this package, you can use npm:

```bash
npm install color-manipulation
```

## Usage

```javascript
const colorManipulation = require('color-manipulation');

// Convert RGB to HEX
const hexColor = colorManipulation.rgbToHex(255, 0, 0);
console.log(hexColor); // Output: #ff0000

// Convert HEX to RGB
const rgbColor = colorManipulation.hexToRgb('#00ff00');
console.log(rgbColor); // Output: { r: 0, g: 255, b: 0 }

// Calculate contrast ratio between two colors
const contrast = colorManipulation.contrastRatio('#000000', '#ffffff');
console.log(contrast); // Output: 21
```

## API

### `rgbToHex(r, g, b)`

Converts RGB color values to HEX format.

- `r`: Red color value (0-255)
- `g`: Green color value (0-255)
- `b`: Blue color value (0-255)

Returns the HEX color value.

### `hexToRgb(hex)`

Converts HEX color value to RGB format.

- `hex`: HEX color value (e.g., '#rrggbb')

Returns an object containing RGB color values `{ r, g, b }`.

### `contrastRatio(color1, color2)`

Calculates the contrast ratio between two colors.

- `color1`: First color (RGB or HEX)
- `color2`: Second color (RGB or HEX)

Returns the contrast ratio value.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
