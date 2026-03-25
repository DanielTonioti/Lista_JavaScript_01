function operacoes(){
    let numero01= Math.floor(Math.random() * 100);
    let numero02= Math.floor(Math.random() * 100);
    alert("a diferença entre os números é: " + (numero01 - numero02)
    + "\n a soma do dobro da primeira e o triplo da segunda é: " + ((numero01 * 2) + (numero02 * 3))
    + "\na multiplicação entre os números é: " + (numero01 * numero02));
}