# Sumário
- [Introdução](#introdu%C3%A7%C3%A3o)
- [CSS](#css) 
- [Box Model](#box-model)
- [O que é?](#o-que-%C3%A9)
- [Por que js?](#por-que-js)
- [Sintaxe](#sintaxe)
- [Executando javascript](#executando-javascript)
- [Como funciona o js](#como-funciona-o-js)
---

# Introdução

É um  projeto que desenvolvi junto com o educador <a href="https://github.com/maykbrito">Mayk Brito</a> da <a href="https://github.com/Rocketseat">Rocketseat</a>, ao qual anotei vários pontos importantes durante o desenvolvimento. O projeto se trata de previsões, basta fazer uma pergunta que aplicação irá te responder. <a href="https://joao-paul0.github.io/maratona-explorer/">Clique aqui</a> para conferir.

# CSS

- Apresentação visual para o cliente
- Estilos para o HTML
- Cascading Style Sheets
  - Folha de Estilo em Cascata

```MarkDown
- Seletor
- Propriedade e Valor

# Conceitos
- Cascata
- Especificidade
- Box Model
```

---

# Box Model

- Tudo são caixas
- Caixas possuem determinadas propriedades, veja

---

![image](https://user-images.githubusercontent.com/80062650/174197622-9f6ff057-2274-4bbe-8bea-b6b380892470.png)

---

## **O que é?**

- Linguagem de programação

Interpretada e executada pelos navegadores

- A inteligência da tríade

HTML é a estrutura, CSS é beleza e JS é a inteligência

- Não é JAVA

Apesar do nome ser semelhante, são linguagens diferentes

---

## **Por que JS?**

- Aplicativos

Para WEB, Desktop (Electron) e Mobile (React Native)

- Empresas famosas

Instagram, Google, Netflix, TikTok …

- Moderna e Viva

Comunidade e linguagem que cresce cada vez mais

---

## **Sintaxe**

É presente em toda linguagem e é importante para a comunicação

```jsx
const mensagem = "Bom te ver aqui! ";

alert(mensagem + 10 * 100 + " abraços");

// Bom te ver aqui! 1000 abraços
```

---

## **Executando JavaScript**

- De maneira imediata

→ No Browser a partir da ferramenta `DevTools` apertando o atalho `F12` no seu teclado

→ Plataformas online (codepen.io, fronteditor.dev)

- Arquivos no computador (exemplo abaixo)

```html
<!-- em um arquvio index.html -->

<!-- executa o javascript direto no .html -->

<script>
  alert("Olá!");
</script>

<!-- importa um arquivo .js no seu .html -->

<script *src*="./script.js"></script>
```

---

## Como funciona o JS

  ```JS
  // 1. Variáveis
  let estaChovendo = true
  const meuNome = "Joao"

  // 2. Tipos de Dados
  //String
  // ""
  // ''

  // Number
  // 12 - Integer (+ -)
  // 3.2 - Float (+ -)

  // Boolean
  // true ou false
  const maiorDeDezoito = false

  // undefined = indefinido

  // 3. Operadores
  // Atribuição (ex: =)
  // atribui valor
  let n1 = 12
  let n2 = 3
  console.log(n1 + n2) // 15

  // Ariméticos (ex: * / + -)
  // cálculos matemáticos simples
  console.log(12 / 2) // 6

  // Concatenação de String (+)
  console.log("23" + 4) // 234
  // Comparação (ex: > < == )
  // transforma a expressão em true ou false
  const maiorQue = 1 > 2 // false
  const igualA = 1 == 1 // true

  // 4. Condicional (if/else)
  const idade = 17
  const maiorDeDezoito = idade >= 18

  if(maiorDeDezoito) {
    alert("Pode tirar carteira de motorista")
  } else {
    alert("Não pode tirar")
  }

  // 5. Estruturas de dados
  // Array - Vetor - Lista
  // Array -----       0     1    2  3
  const temperaturas [23.3, 32.2, 1, 5]
  console.log(temperaturas[1]) // 32.2

  // Object
  const pessoa = {
    nome: "Lucas",
    idade: 38,
    filhos: ["K", "E", "J", "L", "G"]
  }

  // console.log(pessoa.filhos[2])

  // 6. Function
  // 1. Criação
  function nomeDaFuncao() {
    console.log('código dentro da função')
  }

  // 2. Execução
  nomeDaFuncao()

  // Parâmetros
  function soma(a, b) {
    console.log(a + b)
  }
  soma(2, 2)
  soma(10, 10)

  // Retorno
  function soma(a, b) {
    return a + b
  }

  const multiplica = soma(2, 2) * 4
  console.log(multiplica) // 16

  // 7. Extensões da linguagem (ex.: Math, Date ...)

  Math.random() // vai gerar um número randomico entre 0 e 1
  Math.floor(1.2) // vai redondar qualquer número quebrado para baixo
  Math.ceil(1.2) // vai redondar qualquer número quebrado para cima
  Math.PI // mostra o número do PI

  // 8. DOM - Document Object Model

  // window
  window.alert("alerta")
  // document
  document.write("texto")
  // manipular elementos
  document.documentElement.style.background = "black"
  ```
