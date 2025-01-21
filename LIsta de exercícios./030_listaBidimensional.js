/**    rie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

Dicas:

    comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
    você pode resolver usando um for dentro de outro for.
 */
//vamo começar com um array vazio
let matriz=[];
let inicio=1;
//Utilizamos 2 laços de repetição for e for 
for(let i = 0; i <3; i++){

    let linha =[];
    //segundo laço de repetição
    for(let j = 0; j <3; j++){
        linha.push(inicio++)
    }
matriz.push(linha)
}
console.log('Matriz de dua dimensões: ');
console.log(matriz);
matriz.forEach(row => console.log(row));

//Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

//Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
matriz[2][1] = 21;
console.log('Matriz após adição de elemento:', matriz);
matriz.forEach(row => console.log(row));


