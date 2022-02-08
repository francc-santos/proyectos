def fibunaci(n):
    if n == 0 :
        return 0
    elif n == 1: 
        return 1
    return fibunaci(n-1)+fibunaci(n-2)

print(fibunaci(10))