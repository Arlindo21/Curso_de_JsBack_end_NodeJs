//Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
const maiorDeIdade=(idade)=>{
    if(idade>=18){
        return `Ele é maior de idade com ${idade} anos.`;
    }else{
        return`Ele é menor de idade com ${idade} anos. `;
    }
    }
    console.log(maiorDeIdade(12));
    console.log(maiorDeIdade(19 ));
