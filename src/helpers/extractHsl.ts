import { REG_EXP_MATCH } from '../regExpMatches.js'

interface Hsla {
  hueDegree: number
  hueRadian?: number
  satPercent: number
  levelPercent: number
  alphaFraction?: number
}

export function extractHsl(colour: string): Hsla {
  if (REG_EXP_MATCH['HSL_COMA'].test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
    } = REG_EXP_MATCH['HSL_COMA'].exec(colour) || []

    return {
      hueDegree: Number(hueDegree),
      hueRadian: Number(hueRadian),
      satPercent: satPercent ? Number(satPercent) : Number(satFraction) * 100,
      levelPercent: levelPercent ? Number(levelPercent) : Number(levelFraction) * 100,
    }
  } else if (REG_EXP_MATCH['HSL_SPACE'].test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
    } = REG_EXP_MATCH['HSL_SPACE'].exec(colour) || []

    return {
      hueDegree: Number(hueDegree),
      hueRadian: Number(hueRadian),
      satPercent: satPercent ? Number(satPercent) : Number(satFraction) * 100,
      levelPercent: levelPercent ? Number(levelPercent) : Number(levelFraction) * 100,
    }
  } else if (REG_EXP_MATCH['HSLA_COMA'].test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
      7: alphaFraction,
    } = REG_EXP_MATCH['HSLA_COMA'].exec(colour) || []

    return {
      hueDegree: Number(hueDegree),
      hueRadian: Number(hueRadian),
      satPercent: satPercent ? Number(satPercent) : Number(satFraction) * 100,
      levelPercent: levelPercent ? Number(levelPercent) : Number(levelFraction) * 100,
    }
  } else if (REG_EXP_MATCH['HSLA_SPACE'].test(colour)) {
    const {
      1: hueDegree,
      2: hueRadian,
      3: satPercent,
      4: satFraction,
      5: levelPercent,
      6: levelFraction,
      7: alphaFraction,
    } = REG_EXP_MATCH['HSLA_SPACE'].exec(colour) || []

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
