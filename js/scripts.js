//Isso é um comentário de uma linha
/*
 Isso é um comentário de várias linhas
 */

/* console.log('Mensagem enviada pelo console')
console.log('Mensagem enviada pelo console')
console.log('Mensagem enviada pelo console')
console.log('Mensagem enviada pelo console')
 

//Aula sobre variáveis
var latitude = 40.87663;
var longitude = -8.08373;

console.log(latitude)
console.log(longitude)


//Aula Tipos de dados - string

var nome = "João";
var sobrenome = "das Neves";
var cpf = "123.321.213.12";
var telefone = "99889887";
var ddd = "88";
var email = "kleberandrade98@gmail.com";

console.log(nome + ' ' + sobrenome)
console.log('Primeira letra do nome: ' + nome[0])

console.log('Número de caracteres do telefone: ' + telefone.length)

//Aula tipos de dados - numbers

var num1 = 20;
var num2 = 3;
var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;
var media = (num1 + num2) / 2;

console.log(media)
console.log(multiplicacao)

console.log(Math.pow(2,6))

increment = num1;
increment += 5;

console.log(increment)


//tipo de uma variavel

var vtype = 'teste';
console.log(typeof vtype)

var typede;
console.log(typeof typede)*/

//Trabalhando com o DOM

/*var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

console.log(conteudo_caixa)

document.getElementById("caixa_amarela").innerHTML = conteudo_caixa*/

//document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa Amarela' + '</h1>';

// Função

/*function soma(){
    var x = 7;
    var y = 9;
    var soma = x+y;
    console.log(soma)
}

soma()

function soma_args(num1, num2){
    let soma = num1 + num2;
    //console.log(soma)
    return soma;
}

console.log(soma_args(87.4, 37.2))*/

//desafio -> função imc

/*function calc_imc(){
    let peso = document.getElementById("peso").innerHTML;
    let altura = document.getElementById("altura").innerHTML;
    let imc = peso / (altura*altura);    

    return imc;    
}

document.getElementById("imc").innerHTML = calc_imc();*/

function vlr_imc(peso, altura){
    let imc = peso/ (altura * altura)
    return imc;
}

let get_peso = parseFloat(document.getElementById("peso").innerHTML);
let get_altura = parseFloat(document.getElementById("altura").innerHTML);

console.log(typeof get_peso)

let print_imc = vlr_imc(get_peso, get_altura)

document.getElementById("imc").innerHTML = print_imc.toFixed(2)



