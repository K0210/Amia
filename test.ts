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
function add(x,y){
var real = x.real + y.real
var imag = x.imag + y.imag
const z = real.toString() + '+' + imag.toString() + 'i'
return z
}
console.log(add(a,b))
