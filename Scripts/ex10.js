function FolhaPagamento(){
    let NomeFuncionario = prompt("Qual seu Nome?");
    let SalarioBruto = parseFloat(prompt("Qual seu Salario Bruto?"));
    alert("Seu nome é: " + NomeFuncionario
        + "\nSeu salario bruto é: " + (SalarioBruto)
        + "\nO valor do desconto da sua folha é: " + (SalarioBruto*(8/100))
        + "\nSeu salário líquido é: " + (SalarioBruto-(SalarioBruto*(8/100))));
}