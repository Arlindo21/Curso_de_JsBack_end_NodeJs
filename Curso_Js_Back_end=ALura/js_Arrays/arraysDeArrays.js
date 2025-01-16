/**Crie uma lista com os seguintes nomes de estudantes: 
'João', 'Juliana', 'Caio', 'Ana'

Crie uma lista com as seguintes médias: 
10, 8, 7.5, 9 

Crie uma lista que contém as duas listas acima. */

const alunos=['João', 'Juliana', 'Caio', 'Ana'];

const media=[10, 3, 7.5, 9];
// arrays dentro de um array
const lista=[alunos,media];
console.log(lista);

//identificando alunos e notas[]
console.log(`A ${lista[0][1]} obteve á nota de ${lista[1][1]} valores.`);

