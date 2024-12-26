//covertendo string para inteiro:


function converterParaInteiro(valorString) {
    return parseInt(valorString);
}

let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro);

// Calculadora


function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero.";
    }
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return adicao(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            return "Operação inválida.";
    }
}

let resultado = calculadora('soma', 5, 3);
console.log(resultado); 


// numero par ou impar 

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}


let numero = 7;
let resultadoParOuImpar = verificarParOuImpar(numero);
console.log(resultadoParOuImpar); 


// temperatura

function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  
    } else {
        return "Escala inválida";
    }
}

let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit); 