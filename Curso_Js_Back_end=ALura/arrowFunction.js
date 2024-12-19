const estudanteReprovou=(notafinal, faltas)=>{
    if(notafinal<7 && faltas >4){

        return true;
    }else{
        return false;
    }

}
const exibirNome=(nome)=>nome;
console.log(exibirNome("lima"));

console.log(estudanteReprovou(6,5));
console.log(estudanteReprovou(10,2));