// variáveis?
// dados de entrada?
// dados de saida?
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


// clicar em fazer pergunta 
function fazerPergunta() {
  if (inputPergunta.value == "") { // dentro do input tem uma propriedade value
    alert("Digite sua pergunta")
    return // vai parar o código todo
  }
  buttonPerguntar.setAttribute('disabled', true) // depois de identificar a pergunta, ele vai desabilitar o botão

  const pergunta = "<div>" + inputPergunta.value + "</div>" // concatenando para que a pergunta possa aparecer na tela
  const totalRespostas = respostas.length // vendo quantas resposta tenho

  // gerar um número aleatório
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas) // o máximo que ele vai gerar é 0.99(Math.floor(0.99 * 19))

  // os elementos apareceram na tela
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]// numeroAleatorio entra dentro do array de repostas, e por fim concatenamos a pergunta 

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled') // depois dos 3s ele vai remover o atributo 'disabled'

  }, 3000) // ela espera dois argumentos, sendo que o 1° argumento é uma função; 2° é quanto tempo esta função vai ser executada
}