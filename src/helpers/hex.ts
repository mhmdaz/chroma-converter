export function getAlphaHexFromFraction(alphaFraction: number = 1) {
  return numberTo2Hex((alphaFraction * 255).toFixed())
}

export function getAlphaFractionFromHex(alphaHex: string = '00') {
  return Number(`0x${alphaHex}`) / 255
}

export function numberTo2Hex(c: string | number) {
  const num = Number(c) < 0 ? 0 : Number(c) < 255 ? Number(c) : 255

  return num.toString(16).padStart(2, '0')
}
