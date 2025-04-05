import untypedNamedColours from './assets/namedColours.json' with { type: 'json' }
import { REG_EXP_MATCH } from './regExpMatches'

interface NamedColours {
  [index: string]: string
}

const namedColours = untypedNamedColours as {
  basic: NamedColours
  extended: NamedColours
}

export function validateColour(colour: string) {
  return (
    REG_EXP_MATCH['HEX_6'].test(colour) ||
    REG_EXP_MATCH['HEX_3'].test(colour) ||
    REG_EXP_MATCH['RGB_COMA'].test(colour) ||
    REG_EXP_MATCH['RGB_SPACE'].test(colour) ||
    REG_EXP_MATCH['RGBA_COMA'].test(colour) ||
    REG_EXP_MATCH['RGBA_SPACE'].test(colour) ||
    REG_EXP_MATCH['HSL_COMA'].test(colour) ||
    REG_EXP_MATCH['HSL_SPACE'].test(colour) ||
    REG_EXP_MATCH['HSLA_COMA'].test(colour) ||
    REG_EXP_MATCH['HSLA_SPACE'].test(colour) ||
    REG_EXP_MATCH['HWB'].test(colour) ||
    REG_EXP_MATCH['LAB'].test(colour) ||
    REG_EXP_MATCH['LCH'].test(colour) ||
    Object.keys(namedColours.basic).includes(colour.toLowerCase()) ||
    Object.keys(namedColours.extended).includes(colour.toLowerCase()) ||
    ['currentColor', 'transparent', 'inherit', 'initial', 'unset'].includes(colour.toLowerCase())
  )
}
