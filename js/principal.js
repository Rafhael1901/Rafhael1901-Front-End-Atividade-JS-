var titulo = document.querySelector('h1');
titulo.textContent = 'Aparecida Nutricionista';   
var paulo = document.querySelector('#Paulo');
var peso = paulo.querySelector('.info-peso').textContent;
var altura = paulo.querySelector('.info-altura').textContent;

var imc = peso / (altura * altura);
paulo.querySelector('.info-imc').textContent = imc;

var pacientes = document.querySelectorAll('.paciente');

for(let contador = 0; contador < pacientes.length; contador++){
    var peso = pacientes[contador].querySelector('.info-peso').textContent;
    var altura = pacientes[contador].querySelector('.info-altura').textContent;
    var imc = peso / (altura * altura);
    pacientes[contador].querySelector('.info-imc').textContent = imc;
}
