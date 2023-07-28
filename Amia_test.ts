class complex{
real: number
imag: number
    constructor(real: number, imag: number){
    this.real = real;
    this.imag = imag;
    }
    abs(){
      return  (Math.sqrt(this.real * this.real + this.imag * this.imag))
    }
    abs2(){
      return  (this.real * this.real + this.imag * this.imag)
    }
    toString(){
        if(this.imag >= 0){
            const z = this.real.toString() + '+' + this.imag.toString() + 'i';
            return z;
        }
        else{
            const z = this.real.toString() + this.imag.toString() + 'i';
            return z;
        }
    }
    con(){
    const z = new complex(this.real, -this.imag);
    return z;
    }
}
let x: any;
let y: any;
function add(x: complex, y: complex){
    const real = x.real + y.real;
    const imag = x.imag + y.imag;
    const z = new complex(real, imag);
    return z;
}
function sub(x: complex, y: complex){
    const real = x.real - y.real;
    const imag = x.imag - y.imag;
    const z = new complex(real, imag);
    return z;
}
function mul(x: complex, y: complex){
    const real = x.real * y.real - x.imag * y.imag;
    const imag = x.real * y.imag + x.imag * y.real;
    const z = new complex(real, imag);
    return z;
}
function div(x: complex, y: complex){
    const k = y.con();
    const amia = new complex(1/y.abs2(), 0);
    const kanade = mul(k, amia)
    const z = mul(x, kanade);
    return z;
}
