
function somar(){
    const numero1 = Number(document.getElementById('numeroUm').value);
    const numero2 = Number(document.getElementById('numeroDois').value);
    
    const soma = numero1 + numero2;
    const mensagem = `A soma de ${numero1} e ${numero2} é ${soma}.`;
    
    alert(mensagem);


}
