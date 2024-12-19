const Clubes=["Barcelona","Real Madrid","AC MILAN","FC Porto"];
//undefined
Clubes.map(function(nome){
    return nome.length;
});
[1,2,3];
console.log(Clubes)
//usando arrowfunction
const Clubes2=["Barcelona","Real Madrid","AC MILAN","FC Porto"];
Clubes.map(nome1=>nome1);
[1,2,3];
console.log(Clubes)