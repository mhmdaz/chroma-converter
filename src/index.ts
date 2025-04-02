import namedColours from './assets/namedColours.json'

interface NamedColours {
  [index: string]: string
}

interface Rgba {
  type: string
  redHex: string
  greenHex: string
  blueHex: string
  alphaFraction?: number
  alphaHex?: string
}

interface Hsla {
  hueDegree: number
  hueRadian?: number
  satPercent: number
  levelPercent: number
  alphaFraction?: number
}

const REG_EXP_HEX = '[a-f\\d]'
const REG_EXP_0_TO_255 = '0*((?:1?\\d{1,2})|(?:2[0-4]\\d)|(?:25[0-5]))'
const REG_EXP_0_TO_1_FRACTION = '0*((?:0?(?:\\.\\d+)?)|(?:1(?:\\.0+)?))'
const REG_EXP_0_TO_100_PERCENT = '0*(\\d{1,2}|100)\\%'
const REG_EXP_0_TO_359_DEG = '0*((?:[12]?\\d{1,2})|(?:3[0-5]\\d))(?:deg)?'
const REG_EXP_0_TO_2_PI_RAD = '0*(\\d+|(?:\\d*\\.\\d+))(?:rad)'
const REG_EXP_COMA_OR_SPACE_SEPARATOR = '\\s*[,\\s]\\s*'
const REG_EXP_COMA_SEPARATOR = '\\s*[,]\\s*'
const REG_EXP_SPACE_SEPARATOR = '\\s*[\\s]\\s*'
const REG_EXP_SLASH_SEPARATOR = '\\s*[\\/]\\s*'

const REG_EXP_8_HEX_MATCH = new RegExp(
  `^\\#(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})$`,
  'i',
)
const REG_EXP_6_HEX_MATCH = new RegExp(
  `^\\#(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})$`,
  'i',
)
const REG_EXP_3_HEX_MATCH = new RegExp(`^\\#(${REG_EXP_HEX})(${REG_EXP_HEX})(${REG_EXP_HEX})$`, 'i')
const REG_EXP_RGB_COMA_MATCH = new RegExp(
  `^rgb\\(\\s*${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_255}\\s*\\)$`,
  'i',
)
const REG_EXP_RGB_SPACE_MATCH = new RegExp(
  `^rgb\\(\\s*${REG_EXP_0_TO_255}${REG_EXP_SPACE_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_SPACE_SEPARATOR}${REG_EXP_0_TO_255}\\s*\\)$`,
  'i',
)
const REG_EXP_RGBA_COMA_MATCH = new RegExp(
  `^rgba\\(\\s*${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_1_FRACTION}\\s*\\)$`,
  'i',
)
const REG_EXP_RGBA_SPACE_MATCH = new RegExp(
  `^rgba\\(\\s*${REG_EXP_0_TO_255}${REG_EXP_SPACE_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_SPACE_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_SLASH_SEPARATOR}${REG_EXP_0_TO_1_FRACTION}\\s*\\)$`,
  'i',
)
const REG_EXP_HSL_COMA_MATCH = new RegExp(
  `^hsl\\(\\s*(?:${REG_EXP_0_TO_359_DEG}|${REG_EXP_0_TO_2_PI_RAD})${REG_EXP_COMA_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_COMA_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))\\s*\\)$`,
  'i',
)
const REG_EXP_HSL_SPACE_MATCH = new RegExp(
  `^hsl\\(\\s*(?:${REG_EXP_0_TO_359_DEG}|${REG_EXP_0_TO_2_PI_RAD})${REG_EXP_SPACE_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_SPACE_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))\\s*\\)$`,
  'i',
)
const REG_EXP_HSLA_COMA_MATCH = new RegExp(
  `^hsla\\(\\s*(?:${REG_EXP_0_TO_359_DEG}|${REG_EXP_0_TO_2_PI_RAD})${REG_EXP_COMA_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_COMA_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_1_FRACTION}\\s*\\)$`,
  'i',
)
const REG_EXP_HSLA_SPACE_MATCH = new RegExp(
  `^hsla\\(\\s*(?:${REG_EXP_0_TO_359_DEG}|${REG_EXP_0_TO_2_PI_RAD})${REG_EXP_SPACE_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_SPACE_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_SLASH_SEPARATOR}${REG_EXP_0_TO_1_FRACTION}\\s*\\)$`,
  'i',
)

const typedNamedColours = namedColours as {
  basic: NamedColours
  extended: NamedColours
}

export function colorToDecimal(colour: string | null) {
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

export function convertColor(colour: string | null) {
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

function getRgbHexAndAlpha(colour: string): Rgba {
  if (!isNaN(Number(colour))) {
    const {
      1: redHex,
      2: greenHex,
      3: blueHex,
      4: alphaHex,
    } = REG_EXP_8_HEX_MATCH.exec(Number(colour).toString(16).padStart(8, '0')) || []

    return {
      type: 'decimal',
      redHex,
      greenHex,
      blueHex,
      alphaHex,
      alphaFraction: getAlphaFractionFromHex(alphaHex),
    }
  } else if (REG_EXP_6_HEX_MATCH.test(colour)) {
    const { 1: redHex, 2: greenHex, 3: blueHex } = REG_EXP_6_HEX_MATCH.exec(colour) || []

    return { type: 'hex', redHex, greenHex, blueHex }
  } else if (REG_EXP_3_HEX_MATCH.test(colour)) {
    const { 1: redHex, 2: greenHex, 3: blueHex } = REG_EXP_3_HEX_MATCH.exec(colour) || []

    return {
      type: 'hex',
      redHex: `${redHex}${redHex}`,
      greenHex: `${greenHex}${greenHex}`,
      blueHex: `${blueHex}${blueHex}`,
    }
  } else if (REG_EXP_RGB_COMA_MATCH.test(colour)) {
    const { 1: red, 2: green, 3: blue } = REG_EXP_RGB_COMA_MATCH.exec(colour) || []

    return {
      type: 'rgb',
      redHex: numberTo2Hex(red),
      greenHex: numberTo2Hex(green),
      blueHex: numberTo2Hex(blue),
    }
  } else if (REG_EXP_RGB_SPACE_MATCH.test(colour)) {
    const { 1: red, 2: green, 3: blue } = REG_EXP_RGB_SPACE_MATCH.exec(colour) || []

    return {
      type: 'rgb_space',
      redHex: numberTo2Hex(red),
      greenHex: numberTo2Hex(green),
      blueHex: numberTo2Hex(blue),
    }
  } else if (REG_EXP_RGBA_COMA_MATCH.test(colour)) {
    const {
      1: red,
      2: green,
      3: blue,
      4: alphaFraction,
    } = REG_EXP_RGBA_COMA_MATCH.exec(colour) || []

    return {
      type: 'rgba',
      redHex: numberTo2Hex(red),
      greenHex: numberTo2Hex(green),
      blueHex: numberTo2Hex(blue),
      alphaFraction: Number(alphaFraction),
    }
  } else if (REG_EXP_RGBA_SPACE_MATCH.test(colour)) {
    const {
      1: red,
      2: green,
      3: blue,
      4: alphaFraction,
    } = REG_EXP_RGBA_SPACE_MATCH.exec(colour) || []

    return {
      type: 'rgba_space',
      redHex: numberTo2Hex(red),
      greenHex: numberTo2Hex(green),
      blueHex: numberTo2Hex(blue),
      alphaFraction: Number(alphaFraction),
    }
  } else if (REG_EXP_HSL_COMA_MATCH.test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
    } = REG_EXP_HSL_COMA_MATCH.exec(colour) || []

    return hslToRgb(
      hueDegree ? 'hsl_deg' : 'hsl_rad',
      hueDegree ? Number(hueDegree) : (Number(hueRadian) / Math.PI) * 180,
      satFraction ? Number(satFraction) : Number(satPercent) / 100,
      levelFraction ? Number(levelFraction) : Number(levelPercent) / 100,
    )
  } else if (REG_EXP_HSL_SPACE_MATCH.test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
    } = REG_EXP_HSL_SPACE_MATCH.exec(colour) || []

    return hslToRgb(
      hueDegree ? 'hsl_deg_space' : 'hsl_rad_space',
      hueDegree ? Number(hueDegree) : (Number(hueRadian) / Math.PI) * 180,
      satFraction ? Number(satFraction) : Number(satPercent) / 100,
      levelFraction ? Number(levelFraction) : Number(levelPercent) / 100,
    )
  } else if (REG_EXP_HSLA_COMA_MATCH.test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
      7: alphaFraction,
    } = REG_EXP_HSLA_COMA_MATCH.exec(colour) || []

    return hslToRgb(
      hueDegree ? 'hsla_deg' : 'hsla_rad',
      hueDegree ? Number(hueDegree) : (Number(hueRadian) / Math.PI) * 180,
      satFraction ? Number(satFraction) : Number(satPercent) / 100,
      levelFraction ? Number(levelFraction) : Number(levelPercent) / 100,
      Number(alphaFraction),
    )
  } else if (REG_EXP_HSLA_SPACE_MATCH.test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
      7: alphaFraction,
    } = REG_EXP_HSLA_SPACE_MATCH.exec(colour) || []

    return hslToRgb(
      hueDegree ? 'hsla_deg_space' : 'hsla_rad_space',
      hueDegree ? Number(hueDegree) : (Number(hueRadian) / Math.PI) * 180,
      satFraction ? Number(satFraction) : Number(satPercent) / 100,
      levelFraction ? Number(levelFraction) : Number(levelPercent) / 100,
      Number(alphaFraction),
    )
  } else if (Object.keys(typedNamedColours.basic).includes(colour.toLowerCase())) {
    const {
      1: redHex,
      2: greenHex,
      3: blueHex,
    } = REG_EXP_6_HEX_MATCH.exec(typedNamedColours.basic[colour.toLowerCase()]) || []

    return { type: 'named_basic', redHex, greenHex, blueHex }
  } else if (Object.keys(typedNamedColours.extended).includes(colour.toLowerCase())) {
    const {
      1: redHex,
      2: greenHex,
      3: blueHex,
    } = REG_EXP_6_HEX_MATCH.exec(typedNamedColours.extended[colour.toLowerCase()]) || []

    return { type: 'named_extended', redHex, greenHex, blueHex }
  }

  return { type: 'missing', redHex: '00', greenHex: '00', blueHex: '00', alphaFraction: 0 }
}

function extractHsl(colour: string): Hsla {
  if (REG_EXP_HSL_COMA_MATCH.test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
    } = REG_EXP_HSL_COMA_MATCH.exec(colour) || []

    return {
      hueDegree: Number(hueDegree),
      hueRadian: Number(hueRadian),
      satPercent: satPercent ? Number(satPercent) : Number(satFraction) * 100,
      levelPercent: levelPercent ? Number(levelPercent) : Number(levelFraction) * 100,
    }
  } else if (REG_EXP_HSL_SPACE_MATCH.test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
    } = REG_EXP_HSL_SPACE_MATCH.exec(colour) || []

    return {
      hueDegree: Number(hueDegree),
      hueRadian: Number(hueRadian),
      satPercent: satPercent ? Number(satPercent) : Number(satFraction) * 100,
      levelPercent: levelPercent ? Number(levelPercent) : Number(levelFraction) * 100,
    }
  } else if (REG_EXP_HSLA_COMA_MATCH.test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
      7: alphaFraction,
    } = REG_EXP_HSLA_COMA_MATCH.exec(colour) || []

    return {
      hueDegree: Number(hueDegree),
      hueRadian: Number(hueRadian),
      satPercent: satPercent ? Number(satPercent) : Number(satFraction) * 100,
      levelPercent: levelPercent ? Number(levelPercent) : Number(levelFraction) * 100,
    }
  } else if (REG_EXP_HSLA_SPACE_MATCH.test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
      7: alphaFraction,
    } = REG_EXP_HSLA_SPACE_MATCH.exec(colour) || []

    return {
      hueDegree: Number(hueDegree),
      hueRadian: Number(hueRadian),
      satPercent: satPercent ? Number(satPercent) : Number(satFraction) * 100,
      levelPercent: levelPercent ? Number(levelPercent) : Number(levelFraction) * 100,
    }
  }

  return {
    hueDegree: 0,
    hueRadian: 0,
    satPercent: 0,
    levelPercent: 0,
  }
}

function hslToRgb(
  type: string,
  hueDegree: number,
  satFraction: number,
  levelFraction: number,
  alphaFraction: number = 1,
) {
  const c = (1 - Math.abs(2 * levelFraction - 1)) * satFraction
  const x = c * (1 - Math.abs(((hueDegree / 60) % 2) - 1))
  const m = levelFraction - c / 2

  const { red_, green_, blue_ } = getRgbFraction(hueDegree, c, x)

  return {
    type,
    redHex: numberTo2Hex(((red_ + m) * 255).toFixed()),
    greenHex: numberTo2Hex(((green_ + m) * 255).toFixed()),
    blueHex: numberTo2Hex(((blue_ + m) * 255).toFixed()),
    alphaFraction,
  }
}

function getRgbFraction(hueDegree: number, c: number, x: number) {
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

function rgbToHsl(red: number, green: number, blue: number, alphaFraction: number = 1): Hsla {
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

function getColourName(hexCode: string) {
  return (
    Object.keys(typedNamedColours.basic).find((key) => typedNamedColours.basic[key] === hexCode) ||
    Object.keys(typedNamedColours.extended).find(
      (key) => typedNamedColours.extended[key] === hexCode,
    )
  )
}

function getAlphaHexFromFraction(alphaFraction: number = 1) {
  return numberTo2Hex((alphaFraction * 255).toFixed())
}

function getAlphaFractionFromHex(alphaHex: string = '00') {
  return Number(`0x${alphaHex}`) / 255
}

function numberTo2Hex(c: string | number) {
  const num = Number(c) < 0 ? 0 : Number(c) < 255 ? Number(c) : 255

  return num.toString(16).padStart(2, '0')
}
