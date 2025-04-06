# Niram

A javascript library to convert between various css colour formats.

## Installation

Install `niram` using any of the command below

- `yarn add niram`
- `npm install niram`

## Usage

To convert colours:

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

To validate colours:

```
import { validateColor } from 'niram'

const isColorValid = validateColor('hwb(120deg 0% 50% / 1)')

console.log(isColorValid)

// Outputs: true
```

## Supported Formats

Following are the supported colour formats (given with example)

- **Colour Keywords** - `green`
- **HEX** - `#008000` or `#0f0`
- **RGB** - `rgb(0, 128, 0)` or `rgb(0 128 0)`
- **RGBA** - `rgba(0, 128, 0, 1)` or `rgba(0 128 0 / 1)`
- **HSL**<sup>\*</sup> - `hsl(120deg, 100%, 25%)` or `hsl(120deg 100% 25%)`
- **HSLA**<sup>\*</sup> - `hsla(120deg, 100%, 25%, 1)` or `hsla(120deg 100% 25% / 1)`

- **HWB**<sup>\*#</sup> - `hwb(120deg 0% 50% / 1)`
- **LAB**<sup>#</sup> - `lab(46 -51 49 / 1)`
- **LCH**<sup>#</sup> - `lch(46% 67 134 / 1)`

**\*** You can also use `rad` instead of `deg`

**\#** Support is only available for **Validation**

## Unsupported Formats

Following are currently unsupported for **conversion**, but support will be added soon.

- `hwb()`
- `lab()`
- `lch()`
