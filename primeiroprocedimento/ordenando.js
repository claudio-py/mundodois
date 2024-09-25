    /* a) Função swap, com o objetivo de trocar os valores de duas posições de
um vetor, tendo como parâmetros de entrada o vetor e as posições
*/
    const swap = (vetor,index1,index2) => {
         let temp = vetor[index1];
         vetor[index1] = vetor[index2];
         vetor[index2] = temp;
      return vetor;
    }



    /*b) Função shuffle, com o objetivo de embaralhar os elementos de um
vetor, tendo como parâmetros de entrada o vetor e a quantidade de trocas*/
    const shuffle = (vetor, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        let index1 = Math.floor(Math.random() * vetor.length);
        let index2 = Math.floor(Math.random() * vetor.length);
        
        let temp = vetor[index1];
        vetor[index1] = vetor[index2];
        vetor[index2] = temp;
    }
    return vetor;
}



    /*c) Função bubble_sort, para ordenar um vetor de inteiros com o algoritmo
Bubble Sort, tendo como parâmetro de entrada o vetor de inteiros
*/
    const bubbleSort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }
      console.log('bubblesort')
    return vetor;
}



  /*
    d) Função selection_sort, para ordenar um vetor de inteiros utilizando o
algoritmo Selection Sort, tendo como parâmetro de entrada o vetor de
valores inteiros*/
const selectionSort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            let temp = vetor[i];
            vetor[i] = vetor[minIndex];
            vetor[minIndex] = temp;
        }
    }
      console.log('selectionsort')
    return vetor;
}

    /*f) Função particionamento, de apoio a quick_sort, tendo como
parâmetros o vetor, posição inicial, posição final e valor do pivot */
const particionamento = (vetor, low, high) => {
    let pivot = high; // Use the last element as the pivot
    let pivotValue = vetor[pivot];
    [vetor[pivot], vetor[high]] = [vetor[high], vetor[pivot]];
    let storeIndex = low;

    for (let i = low; i < high; i++) {
        if (vetor[i] <= pivotValue) {
            [vetor[i], vetor[storeIndex]] = [vetor[storeIndex], vetor[i]];
            storeIndex++;
        }
    }
    [vetor[storeIndex], vetor[high]] = [vetor[high], vetor[storeIndex]];
    return storeIndex;
}

    /*e) Função quick_sort, para ordenar um vetor de inteiros com o algoritmo
Quick Sort, recursivo, tendo como parâmetros o vetor, posição inicial e
posição final*/
const quickSort = (vetor, low, high) => {
    if (low < high) {
        let pi = particionamento(vetor, low, high);
        
        quickSort(vetor, low, pi - 1);
        quickSort(vetor, pi + 1, high);
    }
      console.log('quicksort')
    return vetor;
}
