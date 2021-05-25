const toBinary = (decimal) => Number(Number(decimal).toString(2))
const binaryRegex = /^[0-1][0-1]*$/

const calculateGrayCode = (decimal) => {
    let value =  Number(decimal)
    return Number(value ^ (value >> 1))
}

const calculateDecimalFromGray = (gray) => {
    let grayCode = Number(gray)
    let accum = 0
    while (grayCode) {
        accum ^= grayCode
        grayCode >>= 1
    }
    return accum
}

export {
    toBinary,
    binaryRegex,
    calculateGrayCode,
    calculateDecimalFromGray,
}