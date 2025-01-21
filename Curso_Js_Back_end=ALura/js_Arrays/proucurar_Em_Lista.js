const alunos =['Arlindo','Felizardo','Giovanni','Aida','Heitor']

const medias =['9','10','8','5.5','8',]

//Aqui utilizamos o array de dua dimensões
const lista=[alunos,medias]

//Função que exibira o nome e à nota
function exibiNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const i=lista[0].indexOf(aluno);
        const mediaFinal=lista[1][i];
        console.log(`${aluno} tem a media ${mediaFinal}`);
        
    }else{
        console.log("Estudante não encontrado");
        
    }
}
exibiNomeENota('Arlindo');
exibiNomeENota('Giovanni');