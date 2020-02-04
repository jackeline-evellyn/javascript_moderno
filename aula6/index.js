//Variavel = pode ser modificado ao longo do código

let nome = 'Otávio';
// var outroTipo = 'de definir'; 

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria e em 2012. ');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

let outroNome;
console.log(outroNome); // não vai gerar erro


/*
* Não podemos criar variaveis com palavras reservadas
- ex: if, let, funcion, etc;

* Variaveis precisam ter nomes significativos.
    let n1 = 'Joao'; //errado
    let nomeCliente = 'João';


* Não pode começar o nome de uma variável com um número.
-- inicie a variavel com letra minuscula
-- não deve conter espaços ou traços
        let nome-Cliente; //errado
        let nomeCliente; //camelCase

* As variáveis são Case-sensitive
    --Ou seja: maiusculo e minusculo possuem valores diferente

   */
  let nomecliente =  'Luiz';
  let nomeCliente = 'Otávio';

  console.log(nomecliente, nomeCliente);

/*
  *Não podemos redeclarar variaveis com let
    -- let nomeCliente = 'Joao'; //errado
    -- nomeCliente = 'Otávio';

*/