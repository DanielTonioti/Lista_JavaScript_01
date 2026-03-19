function balanco(){
    let ganhoAnual = 0;
    let gastoAnual = 0;
    for(let i=1; i<=12; i++){
        let ganho = parseFloat(prompt("Digite o ganho bruto do mês: "));
        if (isNaN(ganho)){
            alert("Por favor, digite um número válido para o ganho!");
            i--;
            continue;
        }
        let gasto = parseFloat(prompt("Digite os gastos do mês: "));
        if (isNaN(gasto)){
            alert("Por favor, digite um número válido para os gastos!");
            i--;
            continue;
        }
        ganhoAnual += ganho;
        gastoAnual += gasto;
    }
    let balancoAnual = ganhoAnual - gastoAnual;
    if(balancoAnual > 0){
        alert("O balanço anual é positivo: " + balancoAnual);
    }else if(balancoAnual < 0){
        alert("O balanço anual é negativo: " + balancoAnual);
    }else{
        alert("O balanço anual é neutro: " + balancoAnual);
    }
}