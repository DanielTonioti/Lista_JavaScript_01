function soma(){
    let somarNumeros=0;
    let continuar = true;
    while (continuar){
        let numero = parseFloat(prompt("Digite um número para somar: "));
        if (!isNaN(numero)){
            somar+=numero;
            console.log(somar);
        }else{
            alert("Por favor, digite um número válido!");
        }
        continuar=confirm("Deseja adicionar mais um número?");
    }
    alert("A soma dos numeros é: " + somar);
}