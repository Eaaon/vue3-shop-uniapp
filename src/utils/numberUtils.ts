const filters = {
  toFix(value: string) {
    return parseFloat(value).toFixed(0)//此处0为取整数
  },
  toFix1(value: string) {
    return parseFloat(value).toFixed(1)//此处1为保留一位小数
  },
  toFix2(value: string) {
    return parseFloat(value).toFixed(2)//此处2为保留两位小数
  },
  getIntegerPart(value:any) {
    return Math.floor(value)
  },
  extractDecimal(value: any) {
    var val = Math.floor(Number(value) * 100) % 100
    if(val === 0){
      return "00"
    }else if(val<10){
      return "0" + val
    }else{
      return val
    }
  },
}

export default filters