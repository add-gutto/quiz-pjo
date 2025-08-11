import { chales } from './chale.js';

const perguntas = [
  "Você gosta de aprender coisas novas",
  "Você se considera um bom líder",
  "Você costuma usar o humor como mecanismo de defesa",
  "Você sente necessidade de ouvir a opinião de outras pessoas",
  "Você tem dificuldade em admitir seus erros",
  "Você gosta de estar no controle",
  "Você se considera uma pessoa centrada nos seus objetivos",
  "Você gosta de ambientes agitados",
  "Você é uma pessoa rancorosa",
  "Você costuma se concentrar profundamente nas coisas que estuda",
  "Você consegue discutir diversos assuntos com facilidade",
  "Você é uma pessoa vaidosa",
  "Você se recarrega quando está com outras pessoas",
  "Você é uma pessoa impulsiva",
  "Você é uma pessoa dramática",
  "Você se considera manipuladora",
  "Você se adapta bem em situações sociais e se enturma com facilidade",
  "Você gosta de se expressar através da arte",
  "Você tem dificuldade em confiar nos outros",
  "Você gosta de ajudar pessoas e animais",
  "Você é uma pessoa protetora",
  "Você é mais racional do que emocional",
  "Você se considera uma pessoa esperta",
  "Você tem dificuldade em demonstrar seus sentimentos",
  "Você se incomoda em parecer vulnerável",
  "Você gosta de adrenalina e esportes radicais",
  "Você se considera muito competitiva",
  "Você é vista como uma pessoa muito teimosa",
  "Você costuma se culpar por tudo, mesmo quando não tem controle sobre a situação",
  "Você prefere trabalhar sozinha",
  "Você odeia falar sobre seus sentimentos",
  "Você é a “faz tudo” do seu grupo de amigos",
  "Você gosta de ser o centro das atenções",
  "Você é inimiga do fim",
  "Você gosta de sair para festas",
  "Você é uma pessoa criativa",
  "Você tende a priorizar apenas seus próprios interesses",
  "Você é uma pessoa orgulhosa",
  "Você tem traços egocêntricos",
  "Você se considera mais uma pessoa séria do que amigável",
  "Você se envolve com frequência em ideias malucas e arriscadas",
  "Você é leal aos seus grupos",
  "Você se considera uma pacifista",
  "Você sabe agir sob pressão",
  "Você é uma pessoa de pavio curto",
  "Você é despreocupada com a vida",
  "Você costuma guardar ressentimentos e explodir depois",
  "Você é uma pessoa tagarela",
  "Você é ambiciosa",
  "Você é uma pessoa indecisa",
  "Você odeia depender dos outros",
  "Você se cobra muito",
  "Você se considera uma pessoa vingativa",
  "Você sente que depende do álcool com frequência",
  "Quando criança, você era extrovertida"
];



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