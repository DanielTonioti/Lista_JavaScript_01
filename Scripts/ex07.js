function picole() {
    let sabor = prompt(`
        Sabores disponíveis:
        -(a) Chocolate
        -(b) Morango
        -(c) Creme
        -(d) Manga
        -(e) Melancia
        -(f) Vanilla
        -(g) Céu Azul
        -(h) Brownie
        -(i) Hawaiano
        Digite o código do picolé: `);

    if (typeof sabor === 'string') {
        switch (sabor.toLowerCase()) {
            case 'a':
                alert("R$ 1,50");
                break;
            case 'b':
                alert("R$ 2,50");
                break;
            case 'c':
                alert("R$ 2,50");
                break;
            case 'd':
                alert("R$ 3,20");
                break;
            case 'e':
                alert("R$ 3,40");
                break;
            case 'f':
                alert("R$ 3,00");
                break;
            case 'g':
                alert("R$ 3,60");
                break;
            case 'h':
                alert("R$ 4,00");
                break;
            case 'i':
                alert("R$ 5,00");
                break;
            default:
                alert("Sabor de picolé não reconhecido.");
        }
    } else {
        alert("Por favor, digite um sabor válido.");
    }
}