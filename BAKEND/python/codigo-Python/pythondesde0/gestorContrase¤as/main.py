""" Archivo principal en la aplicacion como su nombre lo dice """
import os 
from getpass import getpass ##NO se muestre la contarseña por la consola 
from tabulate import tabulate ##Para mostrar una tabla y vizulaizar los registros de las bases de datos
from Cconexion import *
import Usuario 
import Contrasena 

conexion = conectar()
crear_tabla(conexion)


def inicio():
    os.system('cls')
    comprobar = comprobar_usuario()
    if comprobar == 0 :
        print('Bienvenid, registre su info')
        nombre = input('Ingrese su nombre')
        apellido = input('Ingrese su apeliido')
        contrasena_maestra = getpass('Ingrese su contraseña maestra')   
        resultado = registrar(nombre, apellido, contrasena_maestra)
        if resultado == 'Registro correcto':
            print(f'Bienvenido {nombre}')
            menu()
        else:
            print(resultado)
    else:
        contrasena_maestra = getpass('Ingrese su contraseña maestra:')
        respuesta = comprobar_contrasena(1,contrasena_maestra)
        if len(respuesta) == 0:
            print('Ingresante la contraseña correcta')
        else:
            print('Bienvenido')
            menu()

def menu():
    while True:
        print('Seleccione una de las siguientes opciones')
        print('\t 1- Añadir un a contaraseña')
        print('\t 2- Ver todas las contraseñas')
        print('\t 3- Visualizar una contraseña')
        print('\t 4- Modificar conntraseña')
        print('\t 5- Eliminar contraseña ')
        print('\t 6- Salir')
        opcion  = input('Ingrese una opcion')
        if opcion == '1':
            nueva_contrasena()
        elif opcion == '2':
            print('Visulizando contraseñas')
        elif opcion == '3':
            print('Visulizando una contraseña')
        elif opcion == '4':
            print('MOdificando contraseñas')
        elif opcion == '5':
            print('ELiminando contraseñas')
        elif opcion == '6':
            break
        else: 
            print('NO existe tal opcion')

def nueva_contrasena():
    nombre = input('Ingresa el nombre')
    url = input('Ingre la URL')
    nombre_usuario = input('Ingrese el nombre de usuario')
    contrasena = input('Ingrese la contrasena')
    descripcion = input('Ingrese la descripcion')
    respuesta = Contrasena.registrar(nombre,url,nombre_usuario,contrasena,descripcion)
    print(respuesta)

def mostrar_contasenas():
    datos = Contrasena.mostrar()
    nuevos_datos = []
    headers = ['ID','NOMBRE','URL','USUARIO','CONTRASEÑA','DESCRIPCION']
    for dato in datos:
        convertido = list(dato)
        convertido[4] = '********'
        nuevos_datos.append(convertido)
    tabla = tabulate(nuevos_datos,headers, tablefmt='fancy_grid')
    print('\t\t\tTodas las contraseñas')
    print(tabla)

def buscar_contrasena():
    contrasena_maestra = getpass('Ingrese su contraseña maestra')
    respuesta = Usuario.comprobar_contrasena(1,contrasena_maestra)
    if (len(respuesta))== 0:
        print('Contraseña incorrecta')
    else:
        id = input('Ingrese el id de la contraseña a buscar')
        datos = Contrasena.buscar(id)
        headers = ['ID','NOMBRE','URL','USUARIO','CONTRASEÑA','DESCRIPCION']
        tabla = tabulate(datos,headers, tablefmt='fancy_grid')
        print('\t\t\tTodas las contraseñas')
        print(tabla)

def modificar_contraseña():
    contrasena_maestra = getpass('Ingrese su contraseña maestra')
    respuesta = Usuario.comprobar_contrasena(1,contrasena_maestra)
    if (len(respuesta))== 0:
        print('Contraseña incorrecta')
    else:
        id = input('Ingresa el id de la contraseña a modificar')
        nombre = input('Ingrese el nuevo nombre:')
        url = input('Ingrese el nuevo url')
        nombre_usuario = input('Ingrese el nombre de ususario')
        contrasena = input('Ingrese la nueva contraseña')
        descripcion = input('Ingrese la nueva desripcion')
        respuesta = Contrasena.modificar(id,nombre,url,nombre_usuario,contrasena,descripcion)
        print(respuesta)

def eliminar_contrasena():
    contrasena_maestra = getpass('Ingrese su contraseña maestra')
    respuesta = Usuario.comprobar_contrasena(1,contrasena_maestra)
    if (len(respuesta))== 0:
        print('Contraseña incorrecta')
    else:
        id = input('Ingresa el id de la contrasena a eliminar')
        respuesta = Contrasena.eliminar(id)
        print(respuesta)


inicio()