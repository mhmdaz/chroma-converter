# Niram

A javascript library to convert between various css colour formats.

## Installation

Install `niram` using any of the command below

- `yarn add niram`
- `npm install niram`

## Usage
```
import { convertColor } from 'niram'

const color = convertColor('hsl(120deg, 100%, 25%)')

console.log(color)
```

Above code will log the converted colour details to console as:

```
{
    "name": "green",
    "decimal": 8388863,
    "hex": "#008000",
    "rgb": "rgb(0, 128, 0)",
    "rgba": "rgba(0, 128, 0, 1)",
    "hsl": "hsl(120deg, 100%, 25%)",
    "hsla": "hsla(120deg, 100%, 25%, 1)",
    "opacity": 1
}
```

## Supported Formats

Following are the supported colour formats (given with example)

- **Colour Keywords** - `green`
- **HEX** - `#008000` or `#0f0`
- **RGB** - `rgb(0, 128, 0)` or `rgb(0 128 0)`
- **RGBA** - `rgba(0, 128, 0, 1)` or `rgba(0 128 0 / 1)`
- **HSL\*** - `hsl(120deg, 100%, 25%)` or `hsl(120deg 100% 25%)`
- **HSLA\*** - `hsla(120deg, 100%, 25%, 1)` or `hsla(120deg 100% 25% / 1)`


**\*** You can also use `rad` instead of `deg` in `hsl()` and `hsla()`

## Unsupported Formats

Following are currently unsupported, but support will be added soon.

- `lab()`
- `lch()`
- `xyz()`
- `hwb()`
