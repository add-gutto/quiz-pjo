import { chales } from './chale.js';
const perguntas = [
  "Você é uma pessoa muito sociável e carismática?",
  "Você se considera uma pessoa ambiciosa?",
  "Você gosta de festas e multidões ou ambientes movimentados?",
  "Você tenta mostrar que é responsável?",
  "Você prefere trabalhar sozinho?",
  "Você tende a se culpar quando algo dá errado, mesmo que não seja diretamente sua responsabilidade?",
  "Você odeia receber ordens?",
  "Você é tímido(a) na maioria das vezes e se sente desconfortável com muita atenção?",
  "Você prefere encontrar soluções pacíficas em vez de confrontos diretos?",
  "Você é uma pessoa teimosa, raramente mudando sua opinião quando já tomou uma decisão?",
  "Você usa a emoção mais do que a razão ao tomar decisões?",
  "Você gosta de fazer os outros rirem e é uma pessoa naturalmente brincalhona?",
  "Você sente que as pessoas te acham metido(a)?",
  "Você gosta de passar tempo na natureza?",
  "Você sente que não gosta de pedir ajuda, preferindo resolver as coisas por conta própria?",
  "Você prefere não falar sobre seus sentimentos, mantendo-os para si mesmo(a) na maior parte do tempo?",
  "Você tem tendência a agir por impulso?",
  "Você se considera uma pessoa confiante e firme nas suas crenças?",
  "Você gosta de criar coisas e entrar em novos projetos?",
  "Você é um pouco manipulador(a) e sabe como influenciar situações a seu favor?"
]

function CarregarQuiz() {
  const quiz = document.getElementById("quiz");
  const block = document.getElementById("block");

  perguntas.forEach((pergunta, index) => {
    let clone = quiz.content.cloneNode(true);
    let radios = clone.querySelectorAll('input[type="radio"]');
    clone.querySelector('.question').textContent = pergunta;
    radios.forEach(radio => {
      radio.name = `q${index}`;
    });
    block.appendChild(clone);
  });
}

function processarResultado(e) {
  e.preventDefault();

  const respostas = [];

  for (let i = 0; i < perguntas.length; i++) {
    const selecionado = document.querySelector(`input[name="q${i}"]:checked`);
    respostas.push(selecionado ? parseInt(selecionado.value) : null);
  }

  if (respostas.includes(null)) {
    alert("Por favor, responda todas as perguntas antes de continuar.");
    return;
  }

  chales.forEach(chale => chale.calcularChale(respostas));
  chales.sort((c1, c2) => c1.resultado - c2.resultado);
  const semideus = chales[0]

  const block = document.getElementById("block");
  block.innerHTML = "";

  const resultado = document.getElementById("resultado");
  const clone = resultado.content.cloneNode(true);

  clone.querySelector("img.image").src = semideus.image_url;
  clone.querySelector("img.image").alt = semideus.deus;
  clone.querySelector(".group-itens h2").innerHTML = `Semideus do chalé de ${semideus.deus}`;
  clone.querySelector("p.texto-resultado").textContent = semideus.descricao;
  const compat = Math.round((1 - (semideus.resultado / (6 * perguntas.length))) * 100);
  clone.querySelector("h3").textContent = `Compatibilidade: ${compat}%`;
  const containerChales = clone.querySelector(".group-chales");
  chales.slice(1).forEach(chale => {
    const span = document.createElement("span");
    span.textContent = `${chale.deus} (${Math.round((1 - (chale.resultado / (6 * perguntas.length))) * 100)}%)`;
    containerChales.appendChild(span);
  });
  block.appendChild(clone);

  const botao = document.getElementById("botaoQuiz");
  botao.value = "Refazer Quiz";
  botao.type = "button";
  botao.onclick = () => location.reload();

}

window.processarResultado = processarResultado;
window.onload = CarregarQuiz;