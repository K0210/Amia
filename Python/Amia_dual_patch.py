import math as mh
import Amia_dual
def cos(x):
  real = mh.cos(x.real)
  imag = -x.imag * mh.sin(x.real)
  cos = dual_number(real, imag)
  return cos
def sin(x):
  real = mh.sin(x.real)
  imag = x.imag * mh.cos(x.real)
  sin = dual_number(real, imag)
  return sin
def tan(x):
  real = mh.tan(x.real)
  imag = x.imag / (mh.cos(x.real) ** 2)
  tan = dual_number(real, imag)
  return tan
def exp(x):
  real = mh.e ** x.real
  imag = x.imag * mh.e ** x.real
  exp = dual_number(real, imag)
  return exp
def log(x, base = mh.e):
  real = mh.log(x.real, base)
  imag = -x.imag / x.real
  log = dual_number(real, imag)
  return log
