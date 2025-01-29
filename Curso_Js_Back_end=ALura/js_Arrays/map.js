const notas=[10,6.5,8,7.5];

//Forma Classica
let notasActualizadas1= notas.map(function(nota){
    return nota +1;
})
console.log(notasActualizadas1);

//Usando arrow function e operador ternário.

const notasActualizadas = notas.map((nota) => nota + 1 >= 10 ? 10: nota+1
);


console.log(notasActualizadas);





   

