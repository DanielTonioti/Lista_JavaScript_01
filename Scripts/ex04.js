function ordenacao(){
    const numeros = [];
    for (let i=0; i<4; i++){
        let numero = psseFloat(prompt("Digite um número: "));
        if (!isNaN(numero)){
            numeros.push(numero);
        }else{
            alert("Por favor, digite um número válido!");
            i--;
        }
    }
    function insertionSort() {
    for (let i = 1; i < vetor.length; i++) {
        let chave = vetor[i];
        let j = i - 1;
        while (j >= 0 && vetor[j] < chave) { 
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = chave;
    }
    return vetor;
}
    const numerosOrdenados = insertionSort(numeros);
    alert("A ordem decrescente é: " + numerosOrdenados);
}