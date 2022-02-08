# recursion hacia atras
def tasaBancaria(inversion,periodo):
    if periodo == 1:
        return inversion*1.05
    return 1.05*tasaBancaria(inversion,periodo-1)

print(tasaBancaria(10000,30))

# recursion hacia atras 
def tasaBancaria2(inversion,anio,periodo):
    if anio == periodo:
        return inversion
    return tasaBancaria2(inversion*1.05,anio+1,periodo)


print(tasaBancaria2(10000,0,30))