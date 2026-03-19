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
    for (let i=0; i<4; i++){
        console.log(numeros[i]);
    }
}