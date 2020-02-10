//Operadores Aritméticos, de Atribuição e Incremento

/*
    Ariméticos 
    +  -> Adição e Concatenação
     - / * -> substração, divisão e multiplicação
     ** -> potenciação
     % -> Resto da divisão
*/


/*
    Precedencia dos operadores aritméticos:
    ()
    **
    * / %
    + -
*/

const num1 = 5;
const num2 = 5 ;
const num3 = '5';
const num4 = 3 ;

console.log(num1 + num2); //adição
console.log(num1 + num3); //concatenação

console.log(num1 ** num2); //5^5
console.log(num1 % num4); //resto da divisão

//alterando a precedencia dos operadores
console.log((num1 + num2) * num4);


/*
    Operadores de incremento
    ++
    Operador de decremento 
    --
    só pode realizar em let, const dará erro
*/
let contador = 1;
contador++;
contador++; //pos
++contador; //pre

console.log(contador++); //4 
//primeiro exibe seu valor, depois incrementa

console.log(++contador); //6
//primeiro incrementa, depois mostra o valor

console.log(--contador); // operador de decremento


/*
    Operadores atribuição
*/

const passo = 5;
contador = 0;
contador = contador + passo;
console.log(contador); 

contador += passo;
console.log(contador);

contador *= 10;
console.log(contador);

const number1 = 10;
const number2 = parseInt('5'); //converte para inteiro

console.log(number1 + number2);

/*Conversões parseInt, parseFloat, Number (o javascript verifica o que é)*/

const number3 = Number('5.2');
const number4 = parseFloat('5.5');

console.log(typeof number4);
console.log(typeof number3);