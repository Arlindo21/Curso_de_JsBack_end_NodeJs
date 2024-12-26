// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
const nome=[];
nome[1]="Giovanni";
nome[3]="Arlindo";
nome[7]="Aida";
console.log(nome);
console.log(nome.length);

//Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
let valor=[10,22,23,29,35];
console.log("Sem alteração", valor);
valor[0]=3;
console.log("Com alteração", valor);