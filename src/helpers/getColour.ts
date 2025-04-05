import untypedNamedColours from '../assets/namedColours.json' with { type: 'json' }
import { REG_EXP_MATCH } from '../regExpMatches'
import { getAlphaFractionFromHex, numberTo2Hex } from './hex'
import { hslToRgb } from './hslToRgb'

interface NamedColours {
  [index: string]: string
}

const namedColours = untypedNamedColours as {
  basic: NamedColours
  extended: NamedColours
}

interface Rgba {
  type: string
  redHex: string
  greenHex: string
  blueHex: string
  alphaFraction?: number
  alphaHex?: string
}

export function getRgbHexAndAlpha(colour: string): Rgba {
  if (!isNaN(Number(colour))) {
    const {
      1: redHex,
      2: greenHex,
      3: blueHex,
      4: alphaHex,
    } = REG_EXP_MATCH['HEX_8'].exec(Number(colour).toString(16).padStart(8, '0')) || []

    return {
      type: 'decimal',
      redHex,
      greenHex,
      blueHex,
      alphaHex,
      alphaFraction: getAlphaFractionFromHex(alphaHex),
    }
  } else if (REG_EXP_MATCH['HEX_6'].test(colour)) {
    const { 1: redHex, 2: greenHex, 3: blueHex } = REG_EXP_MATCH['HEX_6'].exec(colour) || []

    return {
      type: 'hex',
      redHex,
      greenHex,
      blueHex,
    }
  } else if (REG_EXP_MATCH['HEX_3'].test(colour)) {
    const { 1: redHex, 2: greenHex, 3: blueHex } = REG_EXP_MATCH['HEX_3'].exec(colour) || []

    return {
      type: 'hex',
      redHex: `${redHex}${redHex}`,
      greenHex: `${greenHex}${greenHex}`,
      blueHex: `${blueHex}${blueHex}`,
    }
  } else if (REG_EXP_MATCH['RGB_COMA'].test(colour)) {
    const { 1: red, 2: green, 3: blue } = REG_EXP_MATCH['RGB_COMA'].exec(colour) || []

    return {
      type: 'rgb',
      redHex: numberTo2Hex(red),
      greenHex: numberTo2Hex(green),
      blueHex: numberTo2Hex(blue),
    }
  } else if (REG_EXP_MATCH['RGB_SPACE'].test(colour)) {
    const { 1: red, 2: green, 3: blue } = REG_EXP_MATCH['RGB_SPACE'].exec(colour) || []

    return {
      type: 'rgb_space',
      redHex: numberTo2Hex(red),
      greenHex: numberTo2Hex(green),
      blueHex: numberTo2Hex(blue),
    }
  } else if (REG_EXP_MATCH['RGBA_COMA'].test(colour)) {
    const {
      1: red,
      2: green,
      3: blue,
      4: alphaFraction,
    } = REG_EXP_MATCH['RGBA_COMA'].exec(colour) || []

    return {
      type: 'rgba',
      redHex: numberTo2Hex(red),
      greenHex: numberTo2Hex(green),
      blueHex: numberTo2Hex(blue),
      alphaFraction: Number(alphaFraction),
    }
  } else if (REG_EXP_MATCH['RGBA_SPACE'].test(colour)) {
    const {
      1: red,
      2: green,
      3: blue,
      4: alphaFraction,
    } = REG_EXP_MATCH['RGBA_SPACE'].exec(colour) || []

    return {
      type: 'rgba_space',
      redHex: numberTo2Hex(red),
      greenHex: numberTo2Hex(green),
      blueHex: numberTo2Hex(blue),
      alphaFraction: Number(alphaFraction),
    }
  } else if (REG_EXP_MATCH['HSL_COMA'].test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: levelPercent,
    } = REG_EXP_MATCH['HSL_COMA'].exec(colour) || []

    return hslToRgb(
      hueDegree ? 'hsl_deg' : 'hsl_rad',
      hueDegree ? Number(hueDegree) : (Number(hueRadian) / Math.PI) * 180,
      Number(satPercent) / 100,
      Number(levelPercent) / 100,
    )
  } else if (REG_EXP_MATCH['HSL_SPACE'].test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: levelPercent,
    } = REG_EXP_MATCH['HSL_SPACE'].exec(colour) || []

    return hslToRgb(
      hueDegree ? 'hsl_deg_space' : 'hsl_rad_space',
      hueDegree ? Number(hueDegree) : (Number(hueRadian) / Math.PI) * 180,
      Number(satPercent) / 100,
      Number(levelPercent) / 100,
    )
  } else if (REG_EXP_MATCH['HSLA_COMA'].test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: levelPercent,
      5: alphaFraction,
    } = REG_EXP_MATCH['HSLA_COMA'].exec(colour) || []

    return hslToRgb(
      hueDegree ? 'hsla_deg' : 'hsla_rad',
      hueDegree ? Number(hueDegree) : (Number(hueRadian) / Math.PI) * 180,
      Number(satPercent) / 100,
      Number(levelPercent) / 100,
      Number(alphaFraction),
    )
  } else if (REG_EXP_MATCH['HSLA_SPACE'].test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: levelPercent,
      5: alphaFraction,
    } = REG_EXP_MATCH['HSLA_SPACE'].exec(colour) || []

    return hslToRgb(
      hueDegree ? 'hsla_deg_space' : 'hsla_rad_space',
      hueDegree ? Number(hueDegree) : (Number(hueRadian) / Math.PI) * 180,
      Number(satPercent) / 100,
      Number(levelPercent) / 100,
      Number(alphaFraction),
    )
  } else if (Object.keys(namedColours.basic).includes(colour.toLowerCase())) {
    const {
      1: redHex,
      2: greenHex,
      3: blueHex,
    } = REG_EXP_MATCH['HEX_6'].exec(namedColours.basic[colour.toLowerCase()]) || []

    return {
      type: 'named_basic',
      redHex,
      greenHex,
      blueHex,
    }
  } else if (Object.keys(namedColours.extended).includes(colour.toLowerCase())) {
    const {
      1: redHex,
      2: greenHex,
      3: blueHex,
    } = REG_EXP_MATCH['HEX_6'].exec(namedColours.extended[colour.toLowerCase()]) || []

    return {
      type: 'named_extended',
      redHex,
      greenHex,
      blueHex,
    }
  }

  return {
    type: 'missing',
    redHex: '00',
    greenHex: '00',
    blueHex: '00',
    alphaFraction: 0,
  }
}

export function getColourName(hexCode: string) {
  return (
    Object.keys(namedColours.basic).find((key) => namedColours.basic[key] === hexCode) ||
    Object.keys(namedColours.extended).find((key) => namedColours.extended[key] === hexCode)
  )
}
