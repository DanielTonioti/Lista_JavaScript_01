function FolhaPagamentoVar(){
    let NomeFuncionario = prompt("Qual seu Nome?");
    let SalarioBruto = parseFloat(prompt("Qual seu Salario Bruto?"));
    if (!isNaN(SalarioBruto)){
        if(SalarioBruto<1000){
            alert("Seu nome é: " + NomeFuncionario
        + "\nSeu salario bruto é: " + (SalarioBruto)
        + "\nO valor do desconto da sua folha é: " + (SalarioBruto*(8/100))
        + "\nSeu salário líquido é: " + (SalarioBruto-(SalarioBruto*(8/100))));
        }else if(1000.01<SalarioBruto && SalarioBruto<1500){
            alert("Seu nome é: " + NomeFuncionario
        + "\nSeu salario bruto é: " + (SalarioBruto)
        + "\nO valor do desconto da sua folha é: " + (SalarioBruto*(8.5/100))
        + "\nSeu salário líquido é: " + (SalarioBruto-(SalarioBruto*(8.5/100))));
        }else{
            alert("Seu nome é: " + NomeFuncionario
        + "\nSeu salario bruto é: " + (SalarioBruto)
        + "\nO valor do desconto da sua folha é: " + (SalarioBruto*(9/100))
        + "\nSeu salário líquido é: " + (SalarioBruto-(SalarioBruto*(9/100))));
        }
    }else{
        alert("Insira um valor válido");
    }
}