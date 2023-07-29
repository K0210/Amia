class dual_number(ob):
  real: float
  imag: float
  def __init__(self, real: float, imag: float):
    self.real = real
    self.imag = imag
  def con(self):
    z = dual_number(self.real, -self.imag)
    return z
  def toString(self):
    if self.imag >= 0:
        z = str(self.real) + '+' + str(self.imag) + 'ε'
        return z
     else:
        z = str(self.real) + str(self.imag) + 'ε';
        return z;
def add(x: dual_number, y: dual_number):
    real = x.real + y.real
    imag = x.imag + y.imag
    z = dual_number(real, imag)
    return z
def sub(x: dual_number, y: dual_number):
    real = x.real - y.real
    imag = x.imag - y.imag
    z = dual_number(real, imag)
    return z
def mul(x: dual_number, y: dual_number):
    real = x.real * y.real
    imag = x.real * y.imag + x.imag * y.real
    z = dual_number(real, imag)
    return z
def div(x: dual_number, y: dual_number):
    k = y.con()
    amia = dual_number(y.real * y.real, 0)
    z = mul(x, mul(k,amia))
    return z
