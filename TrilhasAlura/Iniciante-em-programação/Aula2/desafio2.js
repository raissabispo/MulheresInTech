// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaSemana = prompt("Digite uma dia da semana: ")
  if (diaSemana == "Sábado" || diaSemana == "Domingo"){
    alert("Bom fim de semana")
  }else{
    alert("Boa semana")
  }

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let num = Number(prompt("Digite um número: "))
   if (num >= 0 ){
    alert("O número é positivo")
   } 
   else if(num < 0 ){
    alert("O número é negativo")
   }

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let ponto = Number(prompt("Digite um número: "))
  if (ponto >=100){
    alert("Parabéns, você venceu!")
  }else{
    alert("tente novamente para ganhar")
  }
// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoConta = 100; 
alert(`Seu saldo é de R$${saldoConta}.`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Digite o seu nome: ")
  alert(`Boas vindas. ${nome}`)
