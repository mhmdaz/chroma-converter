import { getAlphaHexFromFraction } from './helpers/hex.js'
import { getRgbHexAndAlpha, getColourName } from './helpers/getColour.js'
import { rgbToHsl } from './helpers/rgbToHsl.js'

export function convertColour(colour: string | null) {
  if (!colour) {
    return
  }

  const { type, redHex, greenHex, blueHex, alphaFraction, alphaHex } = getRgbHexAndAlpha(colour)

  const { hueDegree, satPercent, levelPercent } = rgbToHsl(
    Number(`0x${redHex}`),
    Number(`0x${greenHex}`),
    Number(`0x${blueHex}`),
  )

  const hexCode = `#${redHex}${greenHex}${blueHex}`

  return {
    name: type.startsWith('named_') ? colour : getColourName(hexCode),
    decimal: Number(
      `0x${redHex}${greenHex}${blueHex}${alphaHex ?? getAlphaHexFromFraction(alphaFraction)}`,
    ),
    hex: hexCode,
    rgb: `rgb(${Number('0x' + redHex)}, ${Number('0x' + greenHex)}, ${Number('0x' + blueHex)})`,
    rgba: `rgba(${Number('0x' + redHex)}, ${Number('0x' + greenHex)}, ${Number('0x' + blueHex)}, ${alphaFraction ?? 1})`,
    hsl: `hsl(${hueDegree}deg, ${satPercent.toFixed()}%, ${levelPercent.toFixed()}%)`,
    hsla: `hsla(${hueDegree}deg, ${satPercent.toFixed()}%, ${levelPercent.toFixed()}%, ${alphaFraction ?? 1})`,
    opacity: alphaFraction ?? 1,
  }
}
