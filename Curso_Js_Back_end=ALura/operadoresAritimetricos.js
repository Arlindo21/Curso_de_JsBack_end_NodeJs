const notaPrimeiroB1=8;
const notaSegundoB2=6.3;
const notaTerceiroB3=7;
const notaQuartoB4=9.3;
let media = (notaPrimeiroB1+notaSegundoB2+notaTerceiroB3+ notaQuartoB4)/4;
if (media>=7){
    media += media *0.1;

}
console.log(`A media é ${media.toFixed(2)}`);
