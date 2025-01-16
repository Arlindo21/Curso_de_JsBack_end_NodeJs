const listaEstudante=['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//dividindo a primara sala utilizando o slice
const sala1=listaEstudante.slice(0,10);
console.log("Estes são ALunos da Sala 1=" +sala1);

const sala2=listaEstudante.slice(10,20)
console.log("Estes são ALunos da Sala 2=" +sala2);

//Utilizando a divisão com o comprimento de array com parametros
const sala3=listaEstudante.slice(0,listaEstudante.length/2);

const sala4=listaEstudante.slice(listaEstudante.length/2);
console.log(`\nEstes são os estudantes da sala 1: ${sala1} \n
Estes são os estudantes da sala 2: ${sala2}`);

