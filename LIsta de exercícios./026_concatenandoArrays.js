function juntarArrays() {

    const marcaCar=["Toyota","Hyundai","Mitsubishi"];
    const modeloCar=["LandCruiser Prado","Santa fé","L200 Triton"]
    //usando o metodo concat
    let juntar= marcaCar.concat(modeloCar);
    console.log(juntar)
    //usanda o metodo array dentro de um array
    let unirArray=[marcaCar,modeloCar];
    console.log(unirArray);

    
}
juntarArrays();