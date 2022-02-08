class Usuario:
    nombre = "algo"
    correo = "algo@algo"
    password = ""

    def __init__(self):
        self.nombre = "algo"

    def cambiarContrasenia(self, contrasenia):
        self.password = contrasenia

pepito = Usuario()
print(pepito.nombre)