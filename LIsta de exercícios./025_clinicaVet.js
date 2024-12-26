//Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
let clinica=[];
clinica.push("Cacharro");
clinica.push("Gato");
clinica.push("cavalo");
console.log("Temos trÊs animais na lista de espera ",clinica);
clinica.pop();
console.log("O primeiro animal já foi atendido ficaram 2 ", clinica);
clinica.pop();
console.log("O segundo animal já foi atendido ficou apenas 1 ", clinica);
clinica.pop();
clinica.push("Estamos encerando")
console.log("Todos animais foram atendidos ", clinica);