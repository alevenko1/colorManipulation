// colorManipulation.js

// Function to convert RGB to HEX
function rgbToHex(r, g, b) {
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(r) + toHex(g) + toHex(b);
  }
  
  // Function to convert HEX to RGB
  function hexToRgb(hex) {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) {
      throw new Error('Invalid HEX color');
    }
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16)
    };
  }
  
  // Function to calculate contrast ratio between two colors
  function contrastRatio(color1, color2) {
    const luminance = (color) => {
      const rgb = typeof color === 'string' ? hexToRgb(color) : color;
      const srgb = (c) => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      };
      const { r, g, b } = rgb;
      return 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
    };
    const luminance1 = luminance(color1);
    const luminance2 = luminance(color2);
    const lighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);
    return (lighter + 0.05) / (darker + 0.05);
  }
  
  // Exporting functions
  module.exports = {
    rgbToHex,
    hexToRgb,
    contrastRatio
  };
  