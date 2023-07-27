class complex{
real: number
imag: number
    constructor(real: number,imag: number) {
    this.real = real;
    this.imag = imag;
    }
    abs(){
      return  (this.real * this.real + this.imag * this.imag)
    }
}
let x: any;
let y: any;
function toString(x: complex){
    if(x.imag>=0){
        const z = x.real.toString() + '+' + x.imag.toString() + 'i';
        return z;
    }else{
        const z = x.real.toString() + x.imag.toString() + 'i';
        return z;
    }
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
function div(x: complex,y: complex){
    const k = new complex(y.real,-y.imag);
    const amia = new complex(1/y.abs(),0);
    const kanade = mul(k,amia)
    const z = mul(x,kanade);
    return z;
}
