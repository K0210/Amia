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
  def __iadd__(self, other):
    self.real = self.real + other.real
    self.imag = self.imag + other.imag
  def __sub__(self, other):
    real = self.real - other.real
    imag = self.imag - other.imag
    z = dual_number(real, imag)
    return z
  def __isub__(self, other):
    self.real = self.real - other.real
    self.imag = self.imag - other.imag
  def __mul__(self, other):
    real = self.real * other.real
    imag = self.real * other.imag + self.imag * other.real
    z = dual_number(real, imag)
    return z
  def __imul__(self, other):
    self.real = self.real * other.real
    self.imag = self.real * other.imag + self.imag * other.real
  def __div__(self, other):
    k = other.con()
    amia = dual_number(other.real * other.real, 0)
    z = self * mul(k,amia)
    return z
  def __idiv__(self, other):
    k = other.con()
    amia = dual_number(other.real * other.real, 0)
    self = self * mul(k,amia)
  def toString(self):
    if self.imag >= 0:
        z = str(self.real) + '+' + str(self.imag) + 'ε'
        return z
    else:
        z = str(self.real) + str(self.imag) + 'ε';
        return z;
