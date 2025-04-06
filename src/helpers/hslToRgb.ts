import { numberTo2Hex } from './hex.js'

export function hslToRgb(
  type: string,
  hueDegree: number,
  satFraction: number,
  levelFraction: number,
  alphaFraction: number = 1,
) {
  const c = (1 - Math.abs(2 * levelFraction - 1)) * satFraction
  const m = levelFraction - c / 2

  const { red_, green_, blue_ } = getRgbFraction(hueDegree % 360, c)

  return {
    type,
    redHex: numberTo2Hex(((red_ + m) * 255).toFixed()),
    greenHex: numberTo2Hex(((green_ + m) * 255).toFixed()),
    blueHex: numberTo2Hex(((blue_ + m) * 255).toFixed()),
    alphaFraction,
  }
}

function getRgbFraction(hueDegree: number, c: number) {
  const x = c * (1 - Math.abs(((hueDegree / 60) % 2) - 1))

  if (0 <= hueDegree && hueDegree < 60) {
    return { red_: c, green_: x, blue_: 0 }
  } else if (60 <= hueDegree && hueDegree < 120) {
    return { red_: x, green_: c, blue_: 0 }
  } else if (120 <= hueDegree && hueDegree < 180) {
    return { red_: 0, green_: c, blue_: x }
  } else if (180 <= hueDegree && hueDegree < 240) {
    return { red_: 0, green_: x, blue_: c }
  } else if (240 <= hueDegree && hueDegree < 300) {
    return { red_: x, green_: 0, blue_: c }
  } else if (300 <= hueDegree && hueDegree < 360) {
    return { red_: c, green_: 0, blue_: x }
  }

  return { red_: 0, green_: 0, blue_: 0 }
}
