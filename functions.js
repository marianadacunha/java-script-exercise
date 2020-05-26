function soma(operadorA , operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}
    
function bemVindo(nomeAqui) {
    console.log("Hey! You're " + nomeAqui + ", right?")
}

var resultadoDaSoma = soma(1 , 2);
console.log(resultadoDaSoma)

var resultadoDaSoma2 = soma(20 , 40);
console.log(resultadoDaSoma2)

bemVindo("Mariana")