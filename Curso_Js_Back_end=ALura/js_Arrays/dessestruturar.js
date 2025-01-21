const alunos =['Arlindo','Felizardo','Giovanni','Aida','Heitor']

const medias =['9','10','8','5.5','8',]

//Aqui utilizamos o array de dua dimensões
const lista=[alunos,medias]

//Função que exibira o nome e à nota
function exibiNomeENota(aluno){
    const [alunos,medias]=lista;
    //o .includes é para verificar se array contem um elemento e retornar o mesmo
    if(lista[0].includes(aluno)){
        //indexof retorna o indice selecinado no array
        const i=alunos.indexOf(aluno);
        const mediaFinal=medias[i];
        console.log(`${aluno} tem a media ${mediaFinal}`);
        
    }else{
        console.log("Estudante não encontrado");
        
    }
}
exibiNomeENota('Arlindo');
exibiNomeENota('Giovanni');
