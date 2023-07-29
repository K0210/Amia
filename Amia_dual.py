class dual_number(object):
  real: float
  imag: float
  def __init__(self, real: float, imag: float):
    self.real = real
    self.imag = imag
  def con(self):
    z = dual_number(self.real, -self.imag)
    return z
  def __add__(self, other):
    real = self.real + other.real
    imag = self.imag + other.imag
    z = dual_number(real, imag)
    return z
  def __sub__(self, other):
    real = self.real - other.real
    imag = self.imag - other.imag
    z = dual_number(real, imag)
    return z
  def __mul__(self, other):
    real = self.real * other.real
    imag = self.real * other.imag + self.imag * other.real
    z = dual_number(real, imag)
    return z
  def __div__(self, other):
    k = other.con()
    amia = dual_number(other.real * other.real, 0)
    z = self * mul(k,amia)
    return z
  def toString(self):
    if self.imag >= 0:
        z = str(self.real) + '+' + str(self.imag) + 'ε'
        return z
    else:
        z = str(self.real) + str(self.imag) + 'ε';
        return z;
