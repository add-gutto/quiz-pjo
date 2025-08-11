export class Chale {

    constructor(deus, descricao, resultados, image_url) {
        this.deus = deus;
        this.descricao = descricao;
        this.resultados = resultados
        this.image_url = image_url;
        this.resultado = null;
    }

    calcularChale(respostas) {
        let soma = 0;
        for (let i = 0; i < this.resultados.length; i++) {
            let nota = Math.abs(this.resultados[i] - respostas[i]);
            soma += nota;
        }
        this.resultado = soma;
    }
}

export const chales = [
    new Chale("Zeus",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [2, 1, 2, 3, 1, 1, 1, 4, 5, 2, 4, 3, 3, 3, 3, 5, 4, 6, 4, 3, 3, 3, 3, 2, 3, 3, 2, 1, 4, 3, 4, 2, 3, 4, 4, 4, 2, 1, 3, 3, 3, 4, 3, 3, 2, 6, 2, 6, 1, 6, 2, 2, 4, 2, 4], "MEDIA/Zeus.jpeg"),
    new Chale("Poseidon",
        "Controlam água, respiram debaixo d’água, se comunicam com criaturas marinhas e têm poder sobre terremotos.",
        [5, 4, 2, 2, 4, 2, 5, 3, 5, 6, 4, 4, 2, 1, 5, 6, 1, 5, 6, 2, 1, 6, 6, 5, 2, 3, 5, 1, 1, 7, 4, 4, 3, 4, 3, 5, 7, 3, 7, 6, 1, 1, 3, 5, 3, 6, 6, 2, 5, 6, 1, 1, 6, 4, 3], "MEDIA/Poseidon.jpeg"),
    new Chale("Demeter",
        "Manipulam plantas, controlam o crescimento da vegetação e podem causar fome ou fertilidade no solo.",
        [3, 7, 6, 3, 6, 5, 5, 7, 1, 5, 3, 3, 2, 6, 5, 6, 2, 4, 5, 1, 1, 5, 5, 6, 5, 7, 5, 7, 3, 6, 6, 3, 4, 6, 4, 3, 7, 5, 7, 6, 7, 1, 1, 5, 7, 5, 3, 3, 5, 3, 5, 3, 3, 5, 5], "MEDIA/Demeter.jpeg"),
    new Chale("Ares",
        "Força física ampliada, instinto de combate, resistência excepcional e fúria de batalha que os torna mais poderosos lutando.",
        [3, 2, 4, 4, 1, 1, 3, 3, 2, 4, 5, 5, 4, 2, 3, 3, 5, 3, 3, 4, 2, 4, 2, 2, 1, 1, 1, 2, 2, 4, 3, 4, 2, 2, 3, 6, 3, 1, 2, 3, 2, 2, 7, 2, 1, 4, 4, 3, 2, 5, 3, 3, 1, 4, 5], "MEDIA/Ares.jpeg"),
    new Chale("Atena",
        "Inteligência estratégica, raciocínio lógico, habilidades táticas e talento nato para artes manuais e planejamento de guerra.",
        [1, 3, 6, 2, 1, 2, 1, 5, 3, 1, 1, 3, 4, 5, 6, 4, 4, 2, 2, 2, 2, 3, 1, 4, 1, 4, 1, 3, 4, 4, 3, 2, 4, 5, 4, 2, 4, 3, 4, 2, 3, 4, 4, 1, 3, 7, 4, 4, 3, 6, 2, 1, 4, 2, 4], "MEDIA/Atena.jpeg"),
    new Chale("Apolo",
        "Excelência com arco e flecha, habilidades de cura, manipulação da luz e talento artístico.",
        [2, 5, 5, 5, 3, 5, 4, 1, 6, 2, 1, 2, 1, 2, 2, 3, 1, 1, 6, 1, 4, 7, 2, 7, 6, 2, 3, 4, 5, 5, 6, 3, 1, 2, 2, 1, 5, 5, 4, 7, 4, 3, 4, 3, 6, 3, 6, 1, 4, 5, 6, 4, 5, 4, 1], "MEDIA/Apolo.jpeg"),
    new Chale("Hefesto",
        "Resistência ao fogo, habilidades mecânicas e tecnológicas, capacidade de forjar armas e manipular metal.",
        [1, 4, 1, 5, 5, 6, 2, 5, 3, 2, 6, 6, 6, 5, 4, 5, 6, 2, 3, 3, 3, 2, 5, 5, 3, 3, 4, 6, 1, 1, 2, 1, 6, 5, 6, 1, 1, 4, 3, 4, 2, 2, 2, 6, 5, 5, 2, 5, 5, 4, 3, 4, 5, 5, 6], "MEDIA/Hefesto.jpeg"),
    new Chale("Afrodite",
        "Beleza sobrenatural, persuasão encantadora (charme), empatia emocional e, às vezes, manipulação de desejos.",
        [4, 3, 5, 3, 2, 3, 4, 2, 5, 3, 2, 1, 2, 4, 2, 1, 1, 3, 4, 3, 5, 5, 2, 6, 3, 5, 3, 2, 3, 5, 5, 5, 1, 3, 2, 4, 5, 2, 5, 5, 5, 5, 2, 4, 4, 3, 5, 1, 1, 1, 6, 4, 2, 3, 2], "MEDIA/Afrodite.jpeg"),
    new Chale("Hermes",
        "Grande agilidade, raciocínio rápido, talento para furtividade e, ocasionalmente, habilidades relacionadas a viagens e fronteiras.",
        [4, 2, 1, 6, 4, 6, 5, 2, 2, 4, 3, 5, 1, 1, 3, 2, 3, 2, 5, 5, 7, 2, 1, 3, 2, 2, 2, 3, 6, 6, 2, 6, 2, 2, 2, 1, 2, 4, 2, 7, 1, 5, 5, 4, 4, 2, 3, 2, 3, 7, 4, 3, 3, 2, 2], "MEDIA/Hermes.jpeg"),
    new Chale("Dionisio",
        "Manipulação de vinhas e plantas, indução de loucura ou êxtase e resistência a toxinas.",
        [5, 5, 2, 7, 2, 3, 4, 1, 4, 6, 2, 4, 3, 4, 1, 3, 2, 1, 2, 5, 6, 1, 3, 2, 2, 2, 6, 3, 6, 1, 2, 4, 2, 1, 1, 2, 1, 1, 1, 5, 1, 2, 6, 3, 3, 1, 7, 2, 4, 7, 1, 5, 2, 1, 1], "MEDIA/Dionisio.jpeg"),
    new Chale("Hades",
        "Controle sobre sombras, mortos e minerais preciosos; podem invocar esqueletos e acessar o poder do submundo.",
        [2, 6, 3, 2, 1, 4, 3, 6, 1, 1, 5, 4, 5, 6, 4, 4, 7, 6, 1, 4, 2, 3, 4, 1, 1, 5, 4, 2, 1, 2, 1, 5, 6, 7, 6, 3, 4, 2, 5, 2, 7, 3, 3, 2, 2, 7, 1, 6, 3, 2, 1, 2, 1, 3, 1], "MEDIA/Hades.jpeg"),

]