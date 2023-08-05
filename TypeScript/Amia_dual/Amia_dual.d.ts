export declare class dual_number {
    real: number;
    imag: number;
    constructor(real: number, imag: number);
    con(): dual_number;
    toString(): string;
}
declare let x: any;
declare let y: any;
export declare function add(x: dual_number, y: dual_number): dual_number;
export declare function sub(x: dual_number, y: dual_number): dual_number;
export declare function mul(x: dual_number, y: dual_number): dual_number;
export declare function div(x: dual_number, y: dual_number): dual_number;
