# Se deben de insertar pares de entradas y salidas, que en BAM
# es bidireccional lo que quiere decir que debo de probar 
# que la salida dé la entrada y la entrada dé la salida 


=begin
ENTRADAS 

Entradas : neuronas que en la entrada deben de tener el  mismo size 
y en la salida tambien deben de tener la misma medida, pero  entre si los patrones 

- El numero de patrones deben de ser iguales en pares, los de entrada y salida 

- el numero de neurones en los patrones de entrada deben de ser los mismos 

- el numero de neuronas en los patrnes de salida deben de ser los mismos 
=end


=begin 
CAULCULOS 

MATRIZ DE PESOS  
Tengo que iterar sobre cada patron y sus valores de salida para cada valor de la entrada

X[0[1,2,3],1[4,5,6],2[7,8,9]]     
Y[0[11,12],1[13,14],2[15,16]]

00,00[1*11] + 10,10[4*13] + 20,20[7*15]
00,01[1*12] + 10,11[4*14] + 20,21[7*16]

01,00[2*11] + 11,10[5*13] + 21,20[8*15]
01,01[2*12] + 11,11[5*14] + 21,21[8*16]

02,00[3*11] + 12,10[6*13] + 22,20[9*15]
02,01[3*12] + 12,11[6*14] + 22,21[9*16]

- Con los dos priemros for selecciono la posicion en todo el arreglo y con el tercer for selecciono la posicion del patron 
- es decir voy a recorrer recorrer los ptrones en la posicion i,j y deues se va a aumentar j hasta terminar los posiciones posibles  

MATRIZ TRASPUESTAS 
En esta rede si o si se debe de trasponer una matriz para poder conmprobar la salia o la enrada
- debemos verificar que la matriz se pude multiplicar 
- para tasponerla es colocar la filas donde las columnas 


CONVERGENCIA 

-multiplicar la matriz de pesos con los patrones , es las filas por las columnas y cada fila por cada columna es una posicion del nuevo vector.
- convergio si la la salida de esta mutiplicacaion coincide con el vector de saida correspondiente al vector de entrada


LAM 
BIAS 
Se debe de sumar los valores de las filas y multiplicar por -1/2 cada valor del nuevo vector 

=end

=begin 
      a = [ [5,6,3],[4,2,0],[6,1,3] ]
      b = [ [50,16,37],[45,12,8],[6,10,3] ] 

      c = Array.new(3) { Array.new(3) }
  
      for x in 0..2
        for y in 0..2
          c[x][y] = a[x][y].to_i + b[x][y].to_i
        end
      end
      print c
=end





=begin 
$neuronasE = 0 
$neuronasS = 0
$patrones  = 0

until $neuronasE !=0
    # Se establece el numero de neuronas para los patrones de entrada 
    puts " -------------------------------------------------------------"
    puts " Ingrese el numero de neuronas de ENTRADA que tendra la red : "
    puts " -------------------------------------------------------------"
    $neuronasE = gets.chomp.to_i.abs    
    puts $neuronasE == 0 ? "DEBE INTRODUCIR NUEROS ENTEROS POSITIVOS\n\n" : "EL NUMERO DE NEURONAS QUE CONTENDRA EL PATRON de entrada ES : #{$neuronasE} \n\n"
end



#Arreglo general donde se guargan como arreglos los patrones que ingrase el usuario 

 entradas = []
 insertar = 0

#Bucle de insercion de patrones que es infinito 

until insertar == 's'
    
    puts "-----------------------------------------------------"
    puts "Ingresando los patrones de ENTRADA"
    puts "-----------------------------------------------------"
    puts "Ingrese los elementos del vector; ejemplo: 1,1,-1,1 "
    vector = gets.chomp
    # linea que verifica que os patrones contienen el 1 y -1 devuelve true si si  
    puts ""
    puts "ayuda +++++++++++++++++++"
    puts "LA REPUESTA A SI INCLUYE LOS CARACTERES ESPECIFICADOS "   
    puts vector.include? "1" || "-1"
    puts "ayuda +++++++++++++++++++"
    puts ""
    # linea que verifica que os patrones contienen el 1 y -1 si o aborta el lujo del prongrama
    if !(vector.include? "1" || "-1")
        puts "Los numeros ingresados son diferentes de 1 ó -1 vuelve a intentarlo"
        abort
    end 

    # separando los elementos por la coma 
    elementos = vector.split(',')
    
    puts ""
    puts "ayuda +++++++++++++++++++"
    puts "E NUMERO DE ELEMENTOS QUE SE AGREGARON POR EL USUARIO SON: #{elementos.length} Y EL NUMERO DE NEURONAS ESPEFICICADO ES  #{$neuronasE}"
    puts "ayuda +++++++++++++++++++"
    puts ""
    
    # verifiacar que el nnumeor de neuronas ingresado por el usuario coincide con el numero de neuronas establecidas, si no aborta el prongrama
    if elementos.length != $neuronasE.to_i
        puts "El numero de neuronas ingresadas es diferente a las neuronas que se habia espeficicado"
        abort
    end 
    
    puts ""
    puts "ayuda +++++++++++++++++++"
    puts "+++ESTOS SON LOS ELEMENTOS  #{elementos} Y SU TIPO #{elementos.class}"
    puts "ayuda +++++++++++++++++++"
    puts ""
    
    # se insertan los numeros del usuario en un agrreglo 
    datos = [] 
    for i in elementos
        num = i.to_i
        datos.push(num) 
    end

    puts ""
    puts "ayuda +++++++++++++++++++"
    puts "EL ARREGLO DE STRING SE CAMBIA A UNO DE NUMEROS Y QUEDA: #{datos} Y ESTE ES EL TIPO: #{datos.class} "
    puts "ayuda +++++++++++++++++++"
    puts ""
    
    # se crea un arreglo de arreglos 
    entradas = entradas.push(datos)
    
    puts ""
    puts "ayuda +++++++++++++++++++"
    puts "EL ARREGLO DE ARREGLOS #{entradas}"
    puts "ayuda +++++++++++++++++++"
    puts ""
    
    puts " Quiere ingresar otro vector ?:[s/n] "
    insertar = gets.chomp.downcase

    # Se dentendra la insercion de patrones cuando la respuesta del usuario es dierente de "s" rompera deciclo while 
    if insertar != 's'
      break
    end

end
=end

=begin 

def matrizPesos(entradas, salidas, neuronasE, neuronasS)
      data = [] 
      puts "---------------------------------------------------"
      puts "Los valores con los que se calculara la MATRIZ DE PESOS"
      puts "Entradas #{entradas}"
      puts "Salidas #{salidas}"
      puts "Neuronas de entrada #{neuronasE}"
      puts "Neuronas de entrada #{neuronasS}"
      puts 

      for i in 0..3
        fila = []
        for j in 0..3
          sum = 0
          # creo que aqui va e numero de patrones que tiene el arrray.length
          for v in 0..entradas.count-1
            x_i = entradas[v][i].to_i
            y_i = salidas[v][j].to_i
            sum += x_i * y_i
            puts "calculando el peso #{x_i} * #{y_i}"
            puts "La multiplicacion es igua a #{sum}"
          end
          puts "--------------------------------"
          fila.push(sum)
        end
        puts "++++++++++++++++++++++++++++++++++++++++++"
        data = data.push(fila)
      end 
      puts "Matriz de pesos" 
      print fila 
      puts
      print data
      puts 
end

entradas = [[1,0,1,0],[0,1,0,1]]
salidas = [[0,1,0,1],[1,0,1,0]]

matrizPesos(entradas, salidas,2,3)

=end


}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}


# require './1'

# data = [[11,11],[12,12],[13,13]]

# bias = bam.biasCalculus(data)

# puts "Este es el dato que obtenemos del calculo del bias "
# print bias
# puts 
# puts "siendo llamado desde otro archivo "  


probar = 's'
while probar == 's'
  a = [ [1,1,1],[2,2,2],[3,3,3] ]
  num = 0

  for i in 0..a.count-1
    puts 
    print "#{i+1}.- #{a[i]}"
    puts 
  end

  puts 
  print "Elige el numero del vector: "
  num = gets.chomp.to_i.abs 
  puts 
  print a[num-1]
  puts 

  puts " Quiere ingresar otro vector ?:[s/n] "
  probar = gets.chomp.downcase
end



}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}






require './Operaciones'

=begin 
# loop para poder probrar la asociacion 
eleccion = 's'
until eleccion == 'n'
  op = 0
  $neuronasE = 2
  print "1.- Convergencia con patrones de la red \n2.- Convergencia con vectores de prueba \n3.- Salir  \n"
  puts "Elige una opcion: " 
  op = gets.chomp.to_i.abs

  case op
# opcion para porbra la osociacion de los patronres de entrenamiento de la red
  when 1
    probar = 's'
    # loop para pobra todos los patrones de la red neuronal 
      while probar == 's'
        system("clear")
        a = [ [1,1,1],[2,2,2],[3,3,3] ]
        num = 0

        for i in 0..a.count-1
          print "#{i+1}.- #{a[i]}\n"
        end

        print "Elige el numero del vector: "
        num = gets.chomp.to_i.abs 
        puts 
        print a[num-1]
        puts 
      
        puts "Quieres probar con otro patron de entrenamiento ?:[s/n]\n"
        probar = gets.chomp.downcase

        system("clear")
      end
      # eleccion para cortar el flujo de las opciones del case desde la primera opcion 
      puts "Quieres regresar al MENU [s/n]"
      eleccion = gets.chomp.downcase
    
  # opcion para poder porbar un patron diferente a los que existen en la red
    when 2
      probar = 's'
      while probar == 's'
        system("clear")
        puts "\n-----------------------------------------------------"
        puts "Ingrese los elementos del vector; ejemplo: 1,1,-1,1 "
        vector = gets.chomp
        
        # linea que verifica que os patrones contienen el 1 y -1 si o aborta el lujo del prongrama
        if !(vector.include? "1" || "-1")
          puts "\nLos numeros ingresados son diferentes de 1 ó -1 vuelve a intentarlo"
          abort
        end 

        # separando los elementos por la coma 
        elementos = vector.split(',')
          
        # verifiacar que el numero de neuronas ingresado por el usuario coincide con el numero de neuronas establecidas, si no aborta el prongrama
        if elementos.length != $neuronasE.to_i
          puts "\nEl numero de neuronas ingresadas es diferente a las neuronas que se habia espeficicado"
          abort
        end 

        # se insertan los numeros del usuario en un arreglo 
        datos = [] 
        for i in elementos
          num = i.to_i
          datos.push(num) 
        end
          
        # se inserta los elementos de los patrones a un arreglo 
        puts "datos #{datos}"

        puts " Quieres probar con oto vector ?:[s/n] "
        probar = gets.chomp.downcase

        system("clear")
      end
    # eleccion para cortar el flujo de las opciones del case desde la opcion 2 
      puts "Quieres regresar al MENU [s/n]"
      eleccion = gets.chomp.downcase
  
  # detener la ejecuccion del loop desde el menu 
    when 3
      system("clear")
      abort
  # la opcion no es correct pudedes ingresar de nuevo la opcion 
    else
      puts "Error: capacity has an invalid value (#{op})"
      system("clear")
  end 
end 

=end

# data = [[11,11],[12,12],[13,13]]
# elementos = 0

# puts data.count

# puts data[0].count




# def multiplicacionMatrices(array1,array2)
#   columnasW = numColumnas(array1)
#   filasW = array1.count
#   columnasE = numColumnas(array2)
#   filasE = array2.count  
#   puts "-------------------------------------"
#   puts "Los vectores que se van a MULTIPLICAR"
#   print array1
#   puts
#   print array2
#   puts 

#   puts "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
#     puts columnasW
#     puts filasE

#     puts columnasE
#     puts filasW
#   puts "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  
#   if columnasW != filasE
#     puts "no se puede realizar la multipliacacion"
#     abort
#   end

#   filas = filasW
#   columnas = columnasE
#   # creando la matriz para guardar el resultado de la multiplicacion dematrices 
#   # 2x3 3x1 = 2x1 
#   resultado = Array.new(filas,0){Array.new(columnas,0)} 
  
#   for i in 0..filasW-1
#     c=0
#     while c < columnas
#       suma = 0
#       for j in 0..filasE-1
#         suma = suma + array1[i][j].to_i * array2[j][c].to_i
#       end
#         puts "-----------------------------------------"
#         resultado[i][c] = suma 
#         puts suma
#         print resultado
#         puts
#         c = c + 1
#     end
#     puts "++++++++++++++++++++++++++++++++++++"
#   end
#     puts
#     puts "Resultado de la multiplicacion de matrices"
#     print resultado  
#     puts 
#     return resultado 
# end

#     f= [[1,2],[3,-2],[0,1]] 
#     h= [[-3,-1,2],[5,2,-1]]

#     multiplicacionMatrices(f,h)



# def step(vector)
#   data = []
#   if vector[0].class == "Integer"
#     data = 
#     print 
#   else
#     data = flat(vector)
#   end

#   filasV = data.count
#   puts 
  
  
#   if data.include? -1
#     for i in 0..filasV-1
#       if data[i].to_i<0
#         data[i] = -1
#       else 
#         data[i] = 1
#       end
#     end
#     puts "----------------------"
#     print vector
#     puts
#     return vector

#   else 
#     for i in 0..filasV-1
#       if data[i].to_i<0
#         data[i] = 0
#       else 
#         data[i] = 1
#       end
#     end
#     puts "++++++++++++++++++++++"
#     print data
#     puts
#     return data
#   end
# end 



def traspuestaMatriz(array)
    columnas = numColumnas(array)
    filas = numFilas(array)
    puts "---------------------------------"
    puts "La matriz de pesos con la que se va a TRASPONER"
    print array
    puts

    tras = Array.new(columnas) { Array.new(filas) }
  
    for x in 0..filas-1
      for y in 0..columnas-1
        tras[y][x] = array[x][y]
      end
      puts "----------------------------------"
      print tras
      puts 
    end
    puts 
    puts "El resultado de trasponer la matriz"
    print tras 
    puts 
end



def isFlat(array)
  filasV = numFilas(array)
  columnasV = numColumnas(array)
  if filasV == 1
    return true 
  else 
    return false
  end
end

# vector = [0,2,0,2]
vector = [[0],[2],[0],[2]]

a=isFlat(vector)

puts a

if a
  b = aMatriz(vector)
else
  b = vector 
end


traspuestaMatriz(b)












