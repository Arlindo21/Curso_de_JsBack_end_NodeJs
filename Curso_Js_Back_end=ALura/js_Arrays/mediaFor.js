const notas=[10,6.5,8,7.5];

let somaNOtas=0;

for(let i=0;i< notas.length; i++){
    somaNOtas+= notas[i]
    
}
const media= somaNOtas/notas.length;

console.log(`A media das notas é ${media}`);