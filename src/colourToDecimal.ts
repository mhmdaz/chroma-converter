import { getAlphaHexFromFraction } from './helpers/hex.js'
import { getRgbHexAndAlpha } from './helpers/getColour.js'

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
