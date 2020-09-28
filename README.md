# Algoritmos de ordenação

Aplicação feita em python e react para ler arquivos csv e ordenar de acordo com os principaiis métodos.

## Index
+ [Instalação](#installation)
+ [Algoritmos de ordenação](#algorithms)


## Instlação<a name="installation"></a>
### Front-end
Verifique se você tem [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) já instalados.

1. Clonar ou baixar o repositório

	```
	$ git clone https://github.com/thallis-andre/Sorting-Algorithms.git
	$ cd upload-front
	```
2. Instalar dependências

	```
	$ npm install
	```
5. Iniciando a aplicação

	```
	$ npm start
	```
Sua aplicação executará em [localhost:3000](http://localhost:3000/).

### Back-end
Verifique se você tem [Python](https://www.python.org/) e [Pip](https://pypi.org/project/pip/) já instalados.

1. Clonar ou baixar o repositório

	```
	$ git clone https://github.com/thallis-andre/Sorting-Algorithms.git
	$ cd upload-back
	```
2. Instalar dependências

	```
	$ pip install flask flask-jsonpify flask-sqlalchemy flask-restful flask_cors
	```
5. Iniciando a aplicação

	```
	$ python server.py
	```

## Algoritmos de ordenação<a name="algorithms"></a>
### Quicksort
O quicksort adota a estratégia de divisão e conquista. A estratégia consiste em rearranjar as chaves de modo que as chaves "menores" precedam as chaves "maiores". Em seguida o quicksort ordena as duas sublistas de chaves menores e maiores recursivamente até que a lista completa se encontre ordenada. 
Os passos são:

1. Escolha um elemento da lista, denominado pivô;

2. Particiona: rearranje a lista de forma que todos os elementos anteriores ao pivô sejam menores que ele, e todos os elementos posteriores ao pivô sejam maiores que ele. Ao fim do processo o pivô estará em sua posição final e haverá duas sub listas não ordenadas. Essa operação é denominada partição;

3. Recursivamente ordene a sub lista dos elementos menores e a sub lista dos elementos maiores;

<div style="text-align:center">
  <img src="./public/Quicksort.gif" width="300" height="180" />
</div>

### Merge sort
A idéia básica do Merge Sort é criar uma sequência ordenada a partir de duas outras também ordenadas. Para isso, o algoritmo Merge Sort divide a sequência original em pares de dados, agrupa estes pares na ordem desejada; depois as agrupa as sequências de pares já ordenados, formando uma nova sequência ordenada de quatro elementos, e assim por diante, até ter toda a sequência ordenada.
Os passos são:

1. Dividir: Dividir os dados em subsequências pequenas.
Este passo é realizado recursivamente, iniciando com a divisão do vetor de n elementos em duas metades, cada uma das metades é novamente dividida em duas novas metades e assim por diante, até que não seja mais possível a divisão (ou seja, sobrem n vetores com um elemento cada).

2. Conquistar: Classificar as duas metades recursivamente aplicando o merge sort.

3. Combinar: Juntar as duas metades em um único conjunto já classificado.
Para completar a ordenação do vetor original de n elementos, faz-se o merge ou a fusão dos sub-vetores já ordenados.

<div style="text-align:center">
  <img src="./public/Merge-sort.gif" width="300" height="180" />
</div>


### Insertion sort
Esse método começa a analisar o vetor a partir da segunda posição. A partir dessa posição cada elemento é inserido
na partição inicial em sua posição correta.
A inserção do elemento da posição correta é efetuada movendo-se os itens com chaves
maiores/menores para a direita e então inserindo-o na posição que ficou vazia. 
Neste processo de alternar comparações e movimentação de registros existem duas situações que podem
causar o término do processo, a primeira é quando um item com chave menor que o item em
consideração é encontrado e a segunda situação é quando o final da seqüência destino é
atingida (à esquerda).

<div style="text-align:center">
  <img src="./public/Insertion-sort.gif" width="300" height="180" />
</div>

### Selection sort
Este método é um dos mais simples que existe, a sua proposta consiste em a cada
iteração localizar o elemento de menor ou maior valor do array e inseri-lo na posição correta da
nova lista que será retornada. Na execução o array é dividido em duas partes, uma contendo os
elementos já ordenados e outra contendo os elementos ainda não ordenados. No início, a parte
ordenada está vazia e a desordenada contém todos os elementos, no final do processo a parte
ordenada apresentará (n-1) elementos e a desordenada terá um elemento.

<div style="text-align:center">
  <img src="./public/Selection-sort.gif"/>
</div>

