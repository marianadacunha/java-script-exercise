class Matematica {
    soma(valorA , valorB) {
        return valorA + valorB;
    }
    subtracao(valorA , valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(30,5);

console.log(resultado);