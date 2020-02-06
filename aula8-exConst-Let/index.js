/*
    Luiz Miranda tem 30 anos, pesa 84 kg
    tem 1.8 de altura e IMC é 25.925926.

    Luiz nascem em  
*/

const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;

let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - idade;

//Existem 3 formas de imprimir:

//Concatenando com + : Não coloca espaços
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso+ ' kg' );

//Concatenação com , : Coloca espaços
console.log(' tem', alturaEmM ,'de altura e seu IMC é de', indiceMassaCorporal);

//Template string: É uma string que pode colocar a variável dentro
//Fácil formatação e simplificado

console.log(`${nome} nasceu em ${anoNascimento}.`);


