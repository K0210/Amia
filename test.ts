class complex{
  real: number
  imag: number
    constructor(real: number, imag:number) {
    this.imag = real
    this.imag = imag
    }
}
const a = new complex(1,2)
const b = new complex(3,4)
var real = a.real + b.real
var imag = a.imag + b.imag
const c = real.toString() + '+' + imag.toString() + 'i'
console.log(c)
