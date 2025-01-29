const notas=[10,6.5,8,7.5];

let somaNOtas=0;

for(let nota of notas){
    somaNOtas+= nota;
    
}
const media= somaNOtas/notas.length;
console.log(`A media das notas é ${media}`);

const lista = [1, 2, 3, 4, 5];
let soma = 0;
 
for (let elemento of lista) {
 soma += elemento;
}
 
console.log(soma) //15

