function ordenacao(){
    const numeros = [];
    for (let i=0; i<4; i++){
        let numero = parseFloat(prompt("Digite um número: "));
        if (!isNaN(numero)){
            numeros.push(numero);
        }else{
            alert("Por favor, digite um número válido!");
            i--;
        }
    }
    function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let chave = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] < chave) { 
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = chave;
    }
    return arr;
}
    const numerosOrdenados = insertionSort(numeros);
    alert("A ordem decrescente é: " + numerosOrdenados);
}