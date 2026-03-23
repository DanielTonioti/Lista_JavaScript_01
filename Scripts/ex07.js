function picole() {
    let sabor = String(prompt(`
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
        Digite o código do picolé: `));

    if (typeof sabor === 'string') {
        switch (sabor.toLowerCase()) {
            case 'chocolate':
                alert("R$ 1,50");
                break;
            case 'morango':
                alert("R$ 2,50");
                break;
            case 'creme':
                alert("R$ 2,50");
                break;
            case 'manga':
                alert("R$ 3,20");
                break;
            case 'melancia':
                alert("R$ 3,40");
                break; 
            case 'vanilla':
                alert("R$ 3,00");
                break;
            case 'céu azul':
                alert("R$ 3,60");
                break;
            case 'brownie':
                alert("R$ 4,00");
                break;
            case 'hawaiano':
                alert("R$ 5,00");
                break;
            default:
                alert("Sabor de picolé não reconhecido.");
        }
    } else {
        alert("Por favor, digite um sabor válido.");
    }
}