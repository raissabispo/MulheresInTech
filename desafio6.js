// Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo(){
    console.log("Olá Mundo!")
}
olaMundo();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaNome(nome){
    console.log(`Olá ${nome}`)
}

olaNome("Raissa")

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroNumero(numero){
    console.log( numero * 2 )
}

dobroNumero(4)

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(numero1, numero2, numero3){
    console.log((numero1 + numero2 + numero3 )/3)
}

media(3, 7, 6)

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero4, numero5){
    if (numero4 > numero5){
        console.log(`O Maior número é o número${numero4}`)
    } else{
        console.log(`O Maior número é o número ${numero5}`)
    }
}

maiorNumero(5,6)

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicacao(numeroDobro){
    console.log(numeroDobro * numeroDobro)
}
multiplicacao(7)