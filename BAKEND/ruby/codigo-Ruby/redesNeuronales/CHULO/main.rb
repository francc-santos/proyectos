#require './BAM'a
#Variables globales 
$neuronasE = 0 
$neuronasS = 0
$patrones  = 0

until $neuronasE !=0
    # Se establece el numero de neuronas para los patrones de entrada 
    puts " -------------------------------------------------------------"
    print "Ingrese el numero de neuronas de ENTRADA que tendra la red : "
    $neuronasE = gets.chomp.to_i.abs    
    puts $neuronasE == 0 ? "DEBE INTRODUCIR NUEROS ENTEROS POSITIVOS\n\n" : "EL NUMERO DE NEURONAS QUE CONTENDRA EL PATRON de entrada ES : #{$neuronasE} \n\n"
end

until $neuronasS !=0
    # Se establece el numero de neuronas para los patrones de salida
    puts "-------------------------------------------------------------" 
    print "Ingrese el numero de neuronas de SALIDA que tendra la red : "
    $neuronasS = gets.chomp.to_i.abs    
    puts $neuronasS == 0 ? "DEBE INTRODUCIR NUEROS ENTEROS POSITIVOS\n\n" : "EL NUMERO DE NEURONAS QUE CONTENDRA EL PATRON de salida ES : #{$neuronasS} \n\n"
end


#Arreglo general donde se guargan como arreglos los patrones que ingrase el usuario 
 entradas = []
 insertar = 0

#Bucle de insercion de patrones que es infinito 
 until insertar == 123
    
    puts "-----------------------------------------------------"
    puts "INGRESANDO LOS PATRONES DE entrada"
    puts "Ingrese los elementos del vector; ejemplo: 1,1,-1,1 "
    vector = gets.chomp
    puts vector.include? "1" || "-1"

    if !(vector.include? "1" || "-1")
        puts "Los numeros ingresados son diferentes de 1 ó -1 vuelve a intentarlo"
        abort
    end 

    elementos = vector.split(',')

    puts elementos.length
    puts $neuronasE

    if elementos.length != $neuronasE.to_i
        puts "El numero de neuronas ingresadas es diferente a las neuronas que se habia espeficicado"
        abort
    end 
    
    puts "ESTOS SON LOS  #{elementos} Y SU TIPO #{elementos.class}"

    datos = [] 
    for i in elementos
        num = i.to_i
        datos.push(num) 
    end

    puts "Este arreglo es el que se va a mandar a el calculo de la matriz de pesos #{datos} y este es su tipo #{datos.class} "
    
    entradas = entradas.push(datos)
    puts "EL ARREGLO DE ARREGLOS #{entradas}"

    puts " Quiere ingresar otro vector ?:[s/n] "
    insertar = gets.chomp.downcase

    # Se dentendra la insercion de patrones cuando la respuesta del usuario es dierente de "s" rompera deciclo while  
    if insertar != 's'
      break
    end
end


#Arreglo general donde se guargan como arreglos los patrones que ingrase el usuario 
salidas = []
insertar = 0

#Bucle de insercion de patrones que es infinito 
until insertar == 123
    puts "-----------------------------------------------------"
    puts "INGRSANDO LOS PATRONES DE salida"
    puts "Ingrese los elementos del vector; ejemplo: 1,1,-1,1 "
    vector = gets.chomp
    puts vector.include? "1" || "-1"

    if !(vector.include? "1" || "-1")
        puts "Los numeros ingresados son diferentes de 1 ó -1 vuelve a intentarlo"
        abort
    end 

    elementos = vector.split(',')

    puts elementos.length
    puts $neuronasS

    if elementos.length != $neuronasS.to_i
        puts "El numero de neuronas ingresadas es diferente a las neuronas que se habia espeficicado"
        abort
    end 
   
    puts "ESTOS SON LOS  #{elementos} Y SU TIPO #{elementos.class}"

    datos = [] 
    for i in elementos
        num = i.to_i
        datos.push(num) 
    end

    puts "Este arreglo es el que se va a mandar a el calculo de la matriz de pesos #{datos} y este es su tipo #{datos.class} "
   
    salidas = salidas.push(datos)
    puts "EL ARREGLO DE ARREGLOS #{salidas}"

    puts " Quiere ingresar otro vector ?:[s/n] "
    insertar = gets.chomp.downcase

    # Se dentendra la insercion de patrones cuando la respuesta del usuario es dierente de "s" rompera deciclo while  
    if insertar != 's'
      break
    end
end

gets()
