

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML =  "Hora do desafio";
// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function clicarBotao(){
    console.log("O botão foi clicado")
}
// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function clicarBotaoAlerta(){
    console.log("O botão alerta foi clicado")
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function clicarBotaoPrompt(){
    let cidade = prompt("Digite o nome de uma cidade do Brasil: ")
    alert(`Estive em ${cidade} e lembrei de você`)
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function clicarBotaoSoma(){
    let num1 = parseInt(prompt("Digite o primeiro numero: "))
    let num2 = parseInt(prompt("Digite o segundo numero: "))

    alert(`O resultado de : ${num1} + ${num2} foi ${num1 + num2}`)
}