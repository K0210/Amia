declare class dual_number {
    real: number;
    imag: number;
    constructor(real: number, imag: number);
    con(): dual_number;
    toString(): string;
}
declare let x: any;
declare let y: any;
declare function add(x: dual_number, y: dual_number): dual_number;
declare function sub(x: dual_number, y: dual_number): dual_number;
declare function mul(x: dual_number, y: dual_number): dual_number;
declare function div(x: dual_number, y: dual_number): dual_number;
