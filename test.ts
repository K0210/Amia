class complex{
real: number
imag: number
    constructor(real: number,imag: number) {
    this.real = real;
    this.imag = imag;
    }
}
let x: any;
let y: any;
function toString(x: complex){
const z = x.real.toString() + '+' + x.imag.toString() + 'i';
return z;
}
function add(x: complex,y: complex){
var real = x.real + y.real;
var imag = x.imag + y.imag;
const z = new complex(real,imag);
return z;
}
function sub(x: complex,y: complex){
var real = x.real - y.real;
var imag = x.imag - y.imag;
const z = new complex(real,imag);
return z;
}
function mul(x: complex,y: complex){
var real = x.real * y.real - x.imag * y.imag;
var imag = x.real * y.imag + x.imag * y.real;
const z = new complex(real,imag);
return z;
}
const a = new complex(1,2);
const b = new complex(3,4);
const c = toString(add(a,b));
console.log(c)
