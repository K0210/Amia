export class dual_number{
real: number
imag: number
    constructor(real: number, imag: number){
    this.real = real;
    this.imag = imag;
    }
    con(){
    const z: dual_number = new dual_number(this.real, -this.imag);
    return z;
    }
    toString(){
        if(this.imag >= 0){
            const z: string = this.real.toString() + '+' + this.imag.toString() + 'ε';
            return z;
        }
        else{
            const z: string = this.real.toString() + this.imag.toString() + 'ε';
            return z;
        }
    }
}
export function add(x: dual_number, y: dual_number): dual_number{
    const real = x.real + y.real;
    const imag = x.imag + y.imag;
    const z = new dual_number(real, imag);
    return z;
}
export function sub(x: dual_number, y: dual_number): dual_number{
    const real = x.real - y.real;
    const imag = x.imag - y.imag;
    const z = new dual_number(real, imag);
    return z;
}
export function mul(x: dual_number, y: dual_number): dual_number{
    const real = x.real * y.real;
    const imag = x.real * y.imag + x.imag * y.real;
    const z = new dual_number(real, imag);
    return z;
}
export function div(x: dual_number, y: dual_number): dual_number{
    const k: dual_number = y.con();
    const amia = new dual_number(y.real * y.real, 0);
    const z:dual_number = mul(x, mul(k,amia));
    return z;
}
