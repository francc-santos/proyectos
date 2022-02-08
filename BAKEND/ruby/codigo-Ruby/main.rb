
$neuronas = 0
until $neuronas !=0
    print "Ingrese el numero de neuronas que tendra la red : "
    $neuronas = gets.chomp.to_i.abs    
    puts $neuronas == 0 ? "DEBE INTRODUCIR NUEROS ENTEROS \n\n" : "EL NUMERO DE NEURONAS QUE CONTENDRA EL PATRON ES : #{$neuronas} \n\n"
    
end

entradas = []
insertar = 0
until insertar == 123

    puts "Ingrese los elementos del vector ejemplo: 1,1,-1,1 "
    vector = gets.chomp
    puts vector.include? "1" || "-1"

    if !(vector.include? "1" || "-1")
        puts "Los numeros ingresados son diferentes a 1 o -1 vuelve a intentarlo"
        abort
    end 

    elementos = vector.split(',')
    puts elementos.length
    puts $neuronas

    if elementos.length != $neuronas.to_i
        puts "El numero de neuronas ingresadas es diferente a las neuronas que se habia espeficicado"
        abort
    end 
    
    puts "estos son los #{elementos} y su tipo #{elementos.class}"

    datos = [] 
    for i in elementos
            num = i.to_i
            datos.push(num) 
    end

    puts "Este arreglo es el que se va a mandar a el calculo de la matriz de pesos #{datos} y este es su tipo #{datos.class} "
    
    entradas = entradas.push(datos)
    puts "el arreglo de arreglos #{entradas}"

    puts " Quiere ingresar otro vector ?:[s/n] "
    insertar = gets.chomp.downcase

    if insertar == 'n'
        break
    end
end

puts "Calculo de  la matriz de pesos"

def pesosMatriz (entradas) 
    matriz = entradas
    puts "el numero total de neuronas creo #{$neuronas}"
    m = matriz.length
    operar = []
    puts"El numero de patrones que estan en la matriz es : #{m}"

    matriz.upto($neuronas) do |i|
        matriz.upto($neuronas) do |j|
            sum = 0
            if i != j
                matriz.upto(m) do |p|
                    sum += matriz[m][i].to_i * matriz[m][j].to_i
                end
            end
            data = (1/$neuronas)*(sum)
        end
    end
end

pesosMatriz(entradas)

gets()