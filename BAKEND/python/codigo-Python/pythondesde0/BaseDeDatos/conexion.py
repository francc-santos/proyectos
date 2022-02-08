import sqlite3
from sqlite3 import Error
from sqlite3.dbapi2 import Cursor


def conectar():
    try:
        conexion = sqlite3.connect('database.db')
        print('Se ha conectado a la base de datos correctamente')
        return conexion
    except Error:
        print('Ocurrio un error en la conexion de sql lite')

# para crear una tabla debe de haber antes una conexion
def crear_tabla(conexion):
    #cursor, permiete ejecutar ciertas sentencias sql crear tablas, insertar datos , borrar datos , etc 
    cursor = conexion.cursor()
    sentencia_sql = 'CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, apellido TEXT NOT NULL)'
    cursor.execute(sentencia_sql)
    conexion.commit()
    conexion.close()


def insertar(conexion, datos):
    cursor = conexion.cursor()
    sentencia_sql = 'INSERT INTO usuario(nombre,apellido) VALUES(?,?)'
    cursor.execute(sentencia_sql,datos)
    print('Se insertaron los datos de manera correcta')
    conexion.commit()
    conexion.close


def insertar_varios(conexion, datos):
    cursor = conexion.cursor()
    sentencia_sql = 'INSERT INTO usuario(nombre,apellido) VALUES(?,?)'
    cursor.executemany(sentencia_sql,datos)
    print('Se insertaron los datos de manera correcta')
    conexion.commit()
    conexion.close

def consultar(conexion):
    cursor = conexion.cursor()
    sentencia_sql = 'SELECT * FROM usuario'
    cursor.execute(sentencia_sql)
    datos = cursor.fetchall()
    conexion.close()
    return datos

def consultar_por_id(conexion,id):
    cursor = conexion.cursor()
    sentencia_sql = 'SELECT * FROM usuario WHERE id=?'
    cursor.execute(sentencia_sql,(id,))
    datos = cursor.fetchall()
    conexion.close()
    return datos

def actualizar(conexion,id,nombre,apellido):
    cursor = conexion.cursor()
    sentencia_sql = 'UPDATE usuario SET nombre = ?, apellido = ? WHERE id = ?'
    cursor.execute(sentencia_sql,(nombre,apellido,id))
    conexion.commit()
    conexion.close()

def eliminar(conexion,id):
    cursor = conexion.cursor()
    sentencia_sql = 'DELETE FROM usuario WHERE id = ?'
    cursor.execute(sentencia_sql,(id,))
    conexion.commit()
    conexion.close()



""" conexion = conectar()
crear_tabla(conexion)
"""

conexion = conectar()
""" datos = [('fran','santos'),('io','lou'),('os','kenia')]
insertar_varios(conexion,datos) """

""" datos = consultar(conexion)
    for dato in datos:
    print(dato[1]+' '+dato[2]) """


""" datos = consultar_por_id(conexion,5)
print(datos)
if len(datos) > 0:
    # esto porque regresa un arreglo de tuplas entonces el valor del nombre se encuntra entre el 0 y el 1 y el valor del apellido del 0 al 2
    print(datos[0][1]+' '+datos[0][2])
else:
    print('No se encontro ese usuario')
"""

""" actualizar(conexion,3,'hola','mundo')
"""
eliminar(conexion,1)
