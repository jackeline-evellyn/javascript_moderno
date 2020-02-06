//Constantes, ou variaveis constante
//são similares as variaveis
//não podemos alterar o valor de uma constante

const nome = 'Joao';
console.log(nome);

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

//evoluindo com const consegue recuperar os valores
//let o valor não existe mais


let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado +5;

console.log(resultadoTriplicado );

//para saber qual é o tipo da variavel
console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);

console.log(typeof (primeiroNumero + segundoNumero));