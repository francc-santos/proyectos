def recursivoMult(a,b):
    if b==0:
        return 0
    elif b==1: 
        return a
    else:
        return a + recursivoMult(a,b-1)


print(recursivoMult(0,9))