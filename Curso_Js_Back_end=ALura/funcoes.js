//Parámetros/argumentos
// retorno
//sem parámetro
function exibirNomeEstudante(){
    console.log("Lima");
}
exibirNomeEstudante();
//com 1 ou mas parámetros
function exibirInfosEstudante(nome, nota){
    console.log(`O nome é ${nome} e a nota é ${nota}`);
}
exibirInfosEstudante("caroline", 12);
exibirInfosEstudante("Jose", 14);
//usando retorno
function retornaInfosEstudante(idade, altura ){
    return `A idade é ${idade} e tem uma altura de ${altura}`
}
console.log(retornaInfosEstudante("15 anos", "1.68cm"));
console.log(retornaInfosEstudante("14 anos", "1.73cm"));