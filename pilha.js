var elementos = [];
var topo = -1;
const max = 10;

function push(numero) {
    if (topo < max) {
        topo = topo + 1;
        elementos[topo] = numero;
    }
    else {
        console.log("A pilha está cheia");
    }
}

function pop() {
    if (topo != -1) {
        let numero = elementos[topo];
        topo = topo -1;
        return numero;        
    }
    else {
        console.log("A pilha está vazia");
    }
}

function vazia() {
    return topo == -1;
}

//     10 / 2
//      0   5 / 2 
//          1   2 / 2
//              0   1 / 2
//                  1   0

var numeroDecimal = 10;
var resto;

console.log("Vamos empilhar");
while (numeroDecimal != 0) {
    resto = parseInt(numeroDecimal % 2);
    push(resto);
    console.log(resto);
    numeroDecimal = parseInt(numeroDecimal / 2);
}

console.log("Vamos DESempilhar");
while(!vazia()) {
    console.log(pop());
}