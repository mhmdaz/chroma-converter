import { getAlphaHexFromFraction } from './helpers/hex'
import { getRgbHexAndAlpha, getColourName } from './helpers/getColour'
import { extractHsl } from './helpers/extractHsl'
import { rgbToHsl } from './helpers/rgbToHsl'

export function convertColour(colour: string | null) {
  if (!colour) {
    return
  }

  const { type, redHex, greenHex, blueHex, alphaFraction, alphaHex } = getRgbHexAndAlpha(colour)

  const { hueDegree, hueRadian, satPercent, levelPercent } = type.startsWith('hsl')
    ? extractHsl(colour)
    : rgbToHsl(Number(`0x${redHex}`), Number(`0x${greenHex}`), Number(`0x${blueHex}`))

  const hue = hueDegree ? `${hueDegree}deg` : `${hueRadian}rad`

  const hexCode = `#${redHex}${greenHex}${blueHex}`

  return {
    name: type.startsWith('named_') ? colour : getColourName(hexCode),
    decimal: Number(
      `0x${redHex}${greenHex}${blueHex}${alphaHex ?? getAlphaHexFromFraction(alphaFraction)}`,
    ),
    hex: hexCode,
    rgb: `rgb(${Number('0x' + redHex)}, ${Number('0x' + greenHex)}, ${Number('0x' + blueHex)})`,
    rgba: `rgba(${Number('0x' + redHex)}, ${Number('0x' + greenHex)}, ${Number('0x' + blueHex)}, ${alphaFraction ?? 1})`,
    hsl: `hsl(${hue}, ${satPercent.toFixed()}%, ${levelPercent.toFixed()}%)`,
    hsla: `hsla(${hue}, ${satPercent.toFixed()}%, ${levelPercent.toFixed()}%, ${alphaFraction ?? 1})`,
    opacity: alphaFraction ?? 1,
  }
}
