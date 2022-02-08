class A:
    n = 0
    def __init__(self):
        print("A")

class B:
    x = 11
    def __init__(self):
        print("B")

class C:
    a = 12
    def __init__(self):
        print("D")

class D(A,B,C):
    y=20
    def __init__(self):
        print("D")

elemento = D()
print(elemento.x)
print(elemento.y)
print(elemento.a)
print(elemento.n)

