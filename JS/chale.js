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
        [2, 1, 2, 3, 1, 1, 1, 4, 5, 2, 4, 3, 3, 3, 3, 5, 4, 6, 4, 3, 3, 3, 3, 2, 3, 3, 2, 1, 4, 3, 4, 2, 3, 4, 4, 4, 2, 1, 3, 3, 3, 4, 3, 3, 2, 6, 2, 6, 1, 6, 2, 2, 4, 2, 4], "MEDIA/Zeus.webp"),
    new Chale("Poseidon",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [5, 4, 2, 2, 4, 2, 5, 3, 5, 6, 4, 4, 2, 1, 5, 6, 1, 5, 6, 2, 1, 6, 6, 5, 2, 3, 5, 1, 1, 7, 4, 4, 2, 4, 3, 5, 7, 3, 7, 6, 1, 1, 3, 5, 3, 6, 6, 2, 5, 6, 1, 1, 6, 4, 3], "MEDIA/Zeus.webp"),
    new Chale("Demeter",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [3, 7, 6, 3, 6, 5, 5, 7, 1, 5, 3, 3, 2, 6, 5, 6, 2, 4, 5, 1, 1, 5, 5, 6, 5, 7, 5, 7, 3, 6, 6, 3, 4, 6, 4, 3, 7, 5, 7, 6, 7, 1, 1, 5, 7, 5, 3, 3, 5, 3, 5, 3, 3, 5, 5], "MEDIA/Zeus.webp"),
    new Chale("Ares",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [3, 2, 4, 4, 1, 1, 3, 3, 2, 4, 5, 5, 4, 2, 3, 3, 5, 3, 3, 4, 2, 4, 2, 2, 1, 1, 1, 2, 2, 4, 3, 4, 2, 2, 3, 6, 3, 1, 2, 3, 2, 2, 7, 2, 1, 4, 4, 3, 2, 5, 3, 3, 1, 4, 5], "MEDIA/Zeus.webp"),
    new Chale("Atena",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [1, 3, 6, 2, 1, 2, 1, 5, 3, 1, 1, 3, 4, 5, 6, 4, 4, 2, 2, 2, 2, 3, 1, 4, 1, 4, 1, 3, 4, 4, 3, 2, 4, 5, 4, 2, 4, 3, 4, 2, 3, 4, 4, 1, 3, 7, 4, 4, 3, 6, 2, 1, 4, 2, 4], "MEDIA/Zeus.webp"),
    new Chale("Apolo",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [2, 5, 5, 5, 3, 5, 4, 1, 6, 2, 1, 2, 1, 2, 2, 3, 1, 1, 6, 1, 4, 7, 2, 7, 6, 2, 3, 4, 5, 5, 6, 3, 1, 2, 2, 1, 5, 5, 4, 7, 4, 3, 4, 3, 6, 3, 6, 1, 4, 5, 6, 4, 5, 4, 1], "MEDIA/Zeus.webp"),
    new Chale("Hefesto",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [2, 1, 2, 3, 1, 1, 1, 4, 5, 2, 4, 3, 3, 3, 3, 5, 4, 6, 4, 3, 3, 3, 3, 2, 3, 3, 2, 1, 4, 3, 4, 2, 3, 4, 4, 4, 2, 1, 3, 3, 3, 4, 3, 3, 2, 6, 2, 6, 1, 6, 2, 2, 4, 2, 4], "MEDIA/Zeus.webp"),
    new Chale("Afrodite",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [2, 1, 2, 3, 1, 1, 1, 4, 5, 2, 4, 3, 3, 3, 3, 5, 4, 6, 4, 3, 3, 3, 3, 2, 3, 3, 2, 1, 4, 3, 4, 2, 3, 4, 4, 4, 2, 1, 3, 3, 3, 4, 3, 3, 2, 6, 2, 6, 1, 6, 2, 2, 4, 2, 4], "MEDIA/Zeus.webp"),
    new Chale("Hermes",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [2, 1, 2, 3, 1, 1, 1, 4, 5, 2, 4, 3, 3, 3, 3, 5, 4, 6, 4, 3, 3, 3, 3, 2, 3, 3, 2, 1, 4, 3, 4, 2, 3, 4, 4, 4, 2, 1, 3, 3, 3, 4, 3, 3, 2, 6, 2, 6, 1, 6, 2, 2, 4, 2, 4], "MEDIA/Zeus.webp"),
    new Chale("Dionisio",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [2, 1, 2, 3, 1, 1, 1, 4, 5, 2, 4, 3, 3, 3, 3, 5, 4, 6, 4, 3, 3, 3, 3, 2, 3, 3, 2, 1, 4, 3, 4, 2, 3, 4, 4, 4, 2, 1, 3, 3, 3, 4, 3, 3, 2, 6, 2, 6, 1, 6, 2, 2, 4, 2, 4], "MEDIA/Zeus.webp"),
    new Chale("Hades",
        "Líderes naturais, fortes e carismáticos. Podem controlar o clima, especialmente raios e trovões, e têm uma presença imponente.",
        [2, 1, 2, 3, 1, 1, 1, 4, 5, 2, 4, 3, 3, 3, 3, 5, 4, 6, 4, 3, 3, 3, 3, 2, 3, 3, 2, 1, 4, 3, 4, 2, 3, 4, 4, 4, 2, 1, 3, 3, 3, 4, 3, 3, 2, 6, 2, 6, 1, 6, 2, 2, 4, 2, 4], "MEDIA/Zeus.webp"),

]