function contagem(){
    if(confirm("Deseja iniciar a contagem?")){
        for(let i=10; i>0;i--){
            alert(i);
        }
        alert("Lançamento realizado");
    }else{
        alert("Lançamento encerrado");
    }
}