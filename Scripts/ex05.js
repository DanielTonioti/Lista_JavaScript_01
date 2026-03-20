function transform(){
    let Numero=parseInt(prompt("Me fale um número: "));
    if(!isNaN(Numero)){
        let Resto = (Numero%2==0);
        if(Resto){
            Numero+=-1;
            console.log(Numero);
        }else{
            Numero+=-1;
            console.log(Numero);
        }
    }else{
        alert("Insira um valor válido");
    }
}