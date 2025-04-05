import { getAlphaHexFromFraction } from './helpers/hex'
import { getRgbHexAndAlpha } from './helpers/getColour'

export function colourToDecimal(colour: string | null) {
  if (!colour) {
    return
  }

  if (!isNaN(Number(colour))) {
    return Number(colour)
  }

  const { type, redHex, greenHex, blueHex, alphaFraction, alphaHex } = getRgbHexAndAlpha(colour)

  return Number(
    `0x${redHex}${greenHex}${blueHex}${alphaHex ?? getAlphaHexFromFraction(alphaFraction)}`,
  )
}
