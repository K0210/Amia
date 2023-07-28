declare class complex {
    real: number;
    imag: number;
    constructor(real: number, imag: number);
    abs(): number;
    abs2(): number;
    con(): complex;
    toString(): string;
}
declare let x: any;
declare let y: any;
declare function add(x: complex, y: complex): complex;
declare function sub(x: complex, y: complex): complex;
declare function mul(x: complex, y: complex): complex;
declare function div(x: complex, y: complex): complex;
