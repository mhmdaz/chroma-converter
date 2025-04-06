export function normaliseNumber(numString: string | number) {
  const num = Number(numString)

  return num < 0 ? 0 : num < 255 ? num : 255
}

export function normaliseFraction(fractionString: string | number) {
  const fraction = Number(fractionString)

  return fraction < 0 ? 0 : fraction < 1 ? fraction : 1
}

export function normaliseDegree(degreeString: string | number) {
  const degree = Number(degreeString) % 360

  return degree < 0 ? degree + 360 : degree
}
