const calcularProduto=function(a, b = 2, c = 1){
    return a * b * c;
    
}
const resultado1=calcularProduto(3);
const resultado2=calcularProduto(2, 4);
const resultado3=calcularProduto(1, 2, 3);
const resultado4=calcularProduto(2, undefined, 5);
console.log("Resultado1:", resultado1);
console.log("Resultado2:", resultado2);
console.log("Resultado3:", resultado3);
console.log("Resultado4:", resultado4);