//var numeroSorteado = 10;

//for (var i = 0; i <= 100; i++){
//    if (numeroSorteado === i) {
//    console.log("Parabéns! Seu número foi encontrado!")
//    break;
//    }
//}

// var tabuada = 8;

// for (var i = 0; i <= 10; i ++){
//    console.log("Valor de " + tabuada + " x " + i + " = " + (tabuada * i));
//}

var achou = false;

var numeroSorteado = 12;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
        if (numeroSorteado === possivelValor) {
            achou = true
        } else {
            console.log("Possível valor não corresponde ao número sorteado " + possivelValor);
}
}