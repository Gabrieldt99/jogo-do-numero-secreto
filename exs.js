//Criar uma função que exibe "Olá, mundo!" no console.

//function olaMundo() {
//  console.log("Olá, mundo!");
//}

//olaMundo(); /

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

//function olaNome(nome) {
//  console.log(`Olá, ${nome}!`)
  
//}

//olaNome("Ana");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

//function dobro(numero) {
//  return numero * 2;
//}

//console.log(dobro(2));

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

//function media(num1, num2, num3) {
// return (num1 + num2 + num3) / 3;
//}

//console.log(media(3, 65, 94));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

/*
function maiorNumero(num1,num2){
  if(num1>num2){
    return num1;
  } else{
    return num2;
  }
}
alert(maiorNumero(522,130));
*/

//Criar uma função que recebe um número como parâmetro 
//e retorna o resultado da multiplicação desse número 
// por ele mesmo.

/*
function multiplicarPorEleMesmo(numero){
  return numero ** 2;
}

console.log(multiplicarPorEleMesmo(3));
*/

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro. peso/(altura x altura)

function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

console.log(calcularIMC(72,1.74))

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero){
  if(numero === 0 || numero === 1){
    return 1;
  } else{
    return numero * fatorial(numero - 1);
  }
}
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarParaReal(valorDolar){
    return valorDolar * 4.8;
}
console.log(converterDolarParaReal(10));

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaPerimetroSalaRetangular(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`A área da sala é ${area}m² e o perímetro é ${perimetro}m.`);
}
areaPerimetroSalaRetangular(5,4);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaPerimetroSalaCircular(raio){
    let area = 3.14 * (raio ** 2);
    let perimetro = 2 * 3.14 * raio;
    console.log(`A área da sala é ${area}m² e o perímetro é ${perimetro}m.`);
}
areaPerimetroSalaCircular(3);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tabuada(5);

//listaGenerica = [];

//Crie uma lista vazia, com o nome listaGenerica.

//listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

//linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

//linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

//ListaDeNomes = ['Ana', 'Gabriel', 'Alice']

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

//console.log(ListaDeNomes[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

//console.log(ListaDeNomes[2]);

