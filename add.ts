class complex{
real: number
imag: number
    constructor(real: number,imag: number) {
    this.real = real
    this.imag = imag
    }
}
const a = new complex(1,2)
const b = new complex(3,4)
let x: any
let y: any
function toString(x: complex){
const z = x.real.toString() + '+' + x.imag.toString() + 'i'
    return z
}
function add(x: complex,y: complex){
var real = x.real + y.real
var imag = x.imag + y.imag
const z = real.toString() + '+' + imag.toString() + 'i'
return z
}
console.log(add(a,b))
