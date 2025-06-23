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
        [4, 5, 3, 4, 2, 2, 2, 2, 4, 4, 3, 2, 3, 3, 3, 2, 2, 5, 2, 2], "MEDIA/Zeus.webp")
]