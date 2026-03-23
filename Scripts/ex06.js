function verifica(){
    let LetraSolicitacao = String(prompt("Me fale uma letra em minusculo"));
    if(typeof LetraSolicitacao === 'string'){

        if(LetraSolicitacao === 'a' || LetraSolicitacao === 'e' || LetraSolicitacao === 'i' || LetraSolicitacao=== 'o' ||LetraSolicitacao=== 'u'){
            console.log("vogal");
        }else{
            console.log("Consoante");
        }
    }else{
        alert("insira um valor valido");
    }
}