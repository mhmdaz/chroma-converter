interface Hsla {
  hueDegree: number
  hueRadian?: number
  satPercent: number
  levelPercent: number
  alphaFraction?: number
}

export function rgbToHsl(
  red: number,
  green: number,
  blue: number,
  alphaFraction: number = 1,
): Hsla {
  const red_ = red / 255
  const green_ = green / 255
  const blue_ = blue / 255

  const C_max = Math.max(red_, green_, blue_)
  const C_min = Math.min(red_, green_, blue_)
  const C_diff = C_max - C_min

  const levelFraction = (C_max + C_min) / 2

  const satFraction = C_diff / (1 - Math.abs(2 * levelFraction - 1))

  const hueDegree_ = getHueDegreeFromRgbFraction(red_, green_, blue_, C_max, C_diff)

  const hueDegree = hueDegree_ < 0 ? hueDegree_ + 360 : hueDegree_

  return {
    hueDegree,
    satPercent: satFraction * 100,
    levelPercent: levelFraction * 100,
    alphaFraction,
  }
}

function getHueDegreeFromRgbFraction(
  red_: number,
  green_: number,
  blue_: number,
  C_max: number,
  C_diff: number,
) {
  if (C_diff == 0) {
    return 0
  } else if (C_max == red_) {
    return 60 * (((green_ - blue_) / C_diff) % 6)
  } else if (C_max == green_) {
    return 60 * ((blue_ - red_) / C_diff + 2)
  } else if (C_max == blue_) {
    return 60 * ((red_ - green_) / C_diff + 4)
  }

  return 0
}
