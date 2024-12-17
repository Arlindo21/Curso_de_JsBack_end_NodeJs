//Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

const idadeMin = 18;
const idadeUsuario = 21;

if (idadeUsuario >= idadeMin) {
    console.log('Você pode comprar o ingresso. AProveite a noite!');
} else {
    console.log(' Não é permitido a entrada de menor . ');
}