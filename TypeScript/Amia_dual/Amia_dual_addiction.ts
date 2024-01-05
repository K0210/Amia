import {dual_number} from "./Amia_dual"
let x: any;
let y: any; 
export function cos(x: dual_number){
  const real = Math.cos(x.real);
  const imag = -x.imag * Math.sin(x.real);
  const z = new dual_number(real, imag);
  return z;
}
export function sin(x: dual_number){
  const real = Math.sin(x.real);
  const imag = x.imag * Math.cos(x.real);
  const z = new complex(real, imag);
  return z;
}
export function tan(x: dual_number){
  const real = Math.tan(x.real);
  const imag = x.imag / (Math.cos(x.real) * Math.cos(x.real);
  const z = new complex(real, imag);
  return z;
}
export function exp(x: dual_number){
  const real = Math.exp(x.real);
  const imag = x.imag * Math.exp(x.real);
  const z = new complex(real, imag);
  return z;
}
export function log(x: dual_number, base: number = Math.E){
  const real = Math.log(x.real,　base);
  const imag = (x.imag / x.real) / Math.log(base);
  const z = new complex(real, imag);
  return z;
}  
