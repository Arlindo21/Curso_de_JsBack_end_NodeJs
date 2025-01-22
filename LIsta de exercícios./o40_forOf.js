//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
function imprime(arr){
    for(let elemento of arr){
        console.log(elemento); // Imprime cada elemento do array
}
}


const meuArray = ['a', 'b', 'c'];
imprime(meuArray);
//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const compras=['Arroz','açucar','Banana',]

function listacompras(arr){
    for(let i =0;i<arr.length;i++)
        console.log(`O INdece ${i}, elemento ${arr[i]}`);
        
}
listacompras(compras)