//As principais diferenças entre Var e Let
//ECMAScript = padronização do JavaScript pela empresa ecma

 var nome = 'Luiz';
 var nome = 'Otávio';
 console.log(nome);
 //uma das principais diferenças é que pelo var é possível redeclarar uma variavel

 /*
 nome = 'Luiz'; //não faça isso
 irá criar uma variavel global e irá influeciar outras partes do sistema
 */

 let sobrenome = 'Silva';
//  nao é possivel redeclarar usando let
// let
 sobrenome = 'Evellyn';
 console.log(sobrenome);
