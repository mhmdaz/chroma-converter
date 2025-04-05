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

export const REG_EXP_MATCH = {
  HEX_8: new RegExp(
    `^\\#(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})$`,
    'i',
  ),
  HEX_6: new RegExp(`^\\#(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})(${REG_EXP_HEX}{2})$`, 'i'),
  HEX_3: new RegExp(`^\\#(${REG_EXP_HEX})(${REG_EXP_HEX})(${REG_EXP_HEX})$`, 'i'),
  RGB_COMA: new RegExp(
    `^rgb\\(\\s*${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_255}\\s*\\)$`,
    'i',
  ),
  RGB_SPACE: new RegExp(
    `^rgb\\(\\s*${REG_EXP_0_TO_255}${REG_EXP_SPACE_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_SPACE_SEPARATOR}${REG_EXP_0_TO_255}\\s*\\)$`,
    'i',
  ),
  RGBA_COMA: new RegExp(
    `^rgba\\(\\s*${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_1_FRACTION}\\s*\\)$`,
    'i',
  ),
  RGBA_SPACE: new RegExp(
    `^rgba\\(\\s*${REG_EXP_0_TO_255}${REG_EXP_SPACE_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_SPACE_SEPARATOR}${REG_EXP_0_TO_255}${REG_EXP_SLASH_SEPARATOR}${REG_EXP_0_TO_1_FRACTION}\\s*\\)$`,
    'i',
  ),
  HSL_COMA: new RegExp(
    `^hsl\\(\\s*(?:${REG_EXP_0_TO_359_DEG}|${REG_EXP_0_TO_2_PI_RAD})${REG_EXP_COMA_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_COMA_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))\\s*\\)$`,
    'i',
  ),
  HSL_SPACE: new RegExp(
    `^hsl\\(\\s*(?:${REG_EXP_0_TO_359_DEG}|${REG_EXP_0_TO_2_PI_RAD})${REG_EXP_SPACE_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_SPACE_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))\\s*\\)$`,
    'i',
  ),
  HSLA_COMA: new RegExp(
    `^hsla\\(\\s*(?:${REG_EXP_0_TO_359_DEG}|${REG_EXP_0_TO_2_PI_RAD})${REG_EXP_COMA_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_COMA_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_COMA_SEPARATOR}${REG_EXP_0_TO_1_FRACTION}\\s*\\)$`,
    'i',
  ),
  HSLA_SPACE: new RegExp(
    `^hsla\\(\\s*(?:${REG_EXP_0_TO_359_DEG}|${REG_EXP_0_TO_2_PI_RAD})${REG_EXP_SPACE_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_SPACE_SEPARATOR}(?:(?:${REG_EXP_0_TO_100_PERCENT})|(?:${REG_EXP_0_TO_1_FRACTION}))${REG_EXP_SLASH_SEPARATOR}${REG_EXP_0_TO_1_FRACTION}\\s*\\)$`,
    'i',
  ),
}
