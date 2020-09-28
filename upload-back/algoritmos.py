import sys
sys.setrecursionlimit(10000)
comparacoes = 0
trocas = 0

# Quicksort
def quickSort(alist):
    global comparacoes
    comparacoes = 0
    global trocas
    trocas = 0
    quickSortHelper(alist, 0, len(alist)-1)
    return {"trocas": trocas, "comparacoes": comparacoes}


def quickSortHelper(alist, first, last):
    global comparacoes
    comparacoes = comparacoes + 1
    if first < last:
        splitpoint = partition(alist, first, last)['rightmark']
        quickSortHelper(alist, first, splitpoint-1)
        quickSortHelper(alist, splitpoint+1, last)


def partition(alist, first, last):

    pivotvalue = alist[first]
    leftmark = first+1
    rightmark = last
    global comparacoes

    done = False
    while not done:
        comparacoes = comparacoes + 1

        while leftmark <= rightmark and alist[leftmark][0] <= pivotvalue[0]:
            leftmark = leftmark + 1
            comparacoes = comparacoes + 1
        comparacoes = comparacoes + 1 #Última comparacao do while

        while alist[rightmark][0] >= pivotvalue[0] and rightmark >= leftmark:
            rightmark = rightmark - 1
            comparacoes = comparacoes + 1
        comparacoes = comparacoes + 1 #Última comparacao do while

        comparacoes = comparacoes + 1
        if rightmark < leftmark:
            done = True
            comparacoes = comparacoes + 1 #Última comparacao do while
        else:
            temp = alist[leftmark]
            alist[leftmark] = alist[rightmark]
            alist[rightmark] = temp
            global trocas
            trocas = trocas + 1


    temp = alist[first]
    alist[first] = alist[rightmark]
    alist[rightmark] = temp
    trocas = trocas + 1

    return {"rightmark": rightmark, "trocas": trocas, "comparacoes": comparacoes}

# Mergesort
def mergeSort(alist):
    global comparacoes
    comparacoes = 0
    global trocas
    trocas = 0

    comparacoes = comparacoes + 1
    if len(alist) > 1:
        mid = len(alist)//2
        lefthalf = alist[:mid]
        righthalf = alist[mid:]

        mergeSort(lefthalf)
        mergeSort(righthalf)

        i = 0
        j = 0
        k = 0
        while i < len(lefthalf) and j < len(righthalf):
            comparacoes = comparacoes + 2 #Comparacao do while e do if
            if lefthalf[i][0] < righthalf[j][0]:
                alist[k] = lefthalf[i]
                trocas = trocas + 1
                i = i+1
            else:
                alist[k] = righthalf[j]
                trocas = trocas + 1
                j = j+1
            k = k+1

        comparacoes = comparacoes + 1 #Última comparacao do while

        while i < len(lefthalf):
            alist[k] = lefthalf[i]
            comparacoes = comparacoes + 1
            trocas = trocas + 1

            i = i+1
            k = k+1
        comparacoes = comparacoes + 1 #Última comparacao do while

        while j < len(righthalf):
            alist[k] = righthalf[j]
            comparacoes = comparacoes + 1
            trocas = trocas + 1

            j = j+1
            k = k+1
        comparacoes = comparacoes + 1 #Última comparacao do while
    return {"trocas": trocas, "comparacoes": comparacoes}
    

# Selectionsort
def selectionSort(lista):
    global comparacoes
    comparacoes = 0
    global trocas
    trocas = 0

    for i in range(0, len(lista)-1):
        eleito = lista[i]
        menor = lista[i + 1]
        pos = i + 1
        for j in range(i+2, len(lista)):
            comparacoes = comparacoes + 1
            if lista[j] < menor:
                menor = lista[j]
                pos = j
        comparacoes = comparacoes + 1
        if menor < eleito:
            lista[i] = lista[pos]
            lista[pos] = eleito
            trocas = trocas + 1

    return {"trocas": trocas, "comparacoes": comparacoes}
    


# Insertionsort
def insertionSort(arr): 
    global comparacoes
    comparacoes = 0
    global trocas
    trocas = 0

    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1

        while j >=0 and key[0] < arr[j][0]:
                comparacoes += 1
                arr[j+1] = arr[j] 
                trocas += 1
                j -= 1
        arr[j+1] = key
        comparacoes = comparacoes + 1

    return {"trocas": trocas, "comparacoes": comparacoes}
    
  
