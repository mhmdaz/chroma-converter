import { normaliseNumber } from './normalisers.js'

export function getAlphaHexFromFraction(alphaFraction: number = 1) {
  return numberTo2Hex((alphaFraction * 255).toFixed())
}

export function getAlphaFractionFromHex(alphaHex: string = '00') {
  return Number(`0x${alphaHex}`) / 255
}

export function numberTo2Hex(num: string | number) {
  return normaliseNumber(num).toString(16).padStart(2, '0')
}
