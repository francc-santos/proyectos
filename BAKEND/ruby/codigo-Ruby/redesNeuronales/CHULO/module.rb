module BAM 

    def matrizPesos(entradas, salidas)

      puts "---------------------------------------------------"
      puts "Los valores con que se calculara la MATRIZ DE PESOS"
      puts "Entrdas #{entradas}"
      puts "Salidas #{salidas}"

      for i in 0..$neuronasE-1
        for j in 0..$neuronasS-1
          sum = 0
          # creo que aqui va e numero de patrones que tiene el arrray.length
          for v in 0..x.count-1
            x_i = x[v][i].to_i
            y_i = y[v][j].to_i
            sum+= x_i * y_i
            puts "calculando el peso #{x_i},#{y_i}"
            puts "esta es la suma saca:#{sum}"
          end 
        end
      end 
      puts "Matriz de pesos"
      matrizW = [] 
      matrizW = sum 
      puts matrizW

    end
  
    def biasCalculus(matrizW)

      puts "----------------------------------"
      puts "Vector que se va a obtener el BIAS"

      w = [[11,11],[12,12],[13,13]]
  
      for i in 0..2
        sum = 0
        for j in 0..1
          sum += w[i][j]
          puts "#{w[i][j]}"
        end 
        puts "aver donde salta"
      end 
      data = []
      data = -sum/2
    
    end
  
    def multiplicacionMatrices(array1,array2)

      puts "-------------------------------------"
      puts "Los vectores que se van a MULTIPLICAR"
      puts array1
      puts array2

      f= [[1,1],[1,1],[1,1]] 
      h= [[2,2,2],[2,2,2]]
      # creando la matriz para guardar el resultado de la multiplicacion de matrices 
      # 2x3 3x1 = 2x1 
      resultado = Array.new(3,0){Array.new(3,0)} 
  
      for i in 0..2
        c=0
        while c < 3
          suma = 0
          for j in 0..1
            suma = suma + f[i][j].to_i * h[j][c].to_i
          end
            resultado[i][c] = suma 
            c = c + 1
        end
      end
      puts resultado  
    
    end
  
    def matrizTraspuesta(array)
  
      puts "---------------------------------"
      puts "La matriz de pesos con la que se va a TRASPONER"
      puts array

      a = [ [1,2,3,4,5],[6,7,8,9,1] ]
      tras = Array.new(5) { Array.new(2) }
  
      for x in 0..1
        for y in 0..4
          tras[y][x] = a[x][y]
        end
      end
      print tras 
       
    end

    def sumaMatrices(array1, array2)
  
      puts "---------------------------------"
      puts "La matriz de pesos con la que se va a TRASPONER"
      puts array

      a = [ [1,2,3,4,5],[6,7,8,9,1] ]
      tras = Array.new(5) { Array.new(2) }
  
      for x in 0..1
        for y in 0..4
          tras[y][x] = a[x][y]
        end
      end
      print tras 
       
    end

end 