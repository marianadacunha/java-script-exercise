let isValid = true;

//sem ternário
function verify(isValid) {
    if(isValid) {
        return true;
    } else {
        return false;
    }
}

console.log(verify(isValid));

//com ternário
const result = isValid ? true : false;

let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1;

console.log(numeroResultado)

//arrow function
function soma(x,y) {
    return x + y;
}

const multiplicacao = function(x,y) {
    return x * y;
}

console.log(multiplicacao(5,4))

const dividir = (x,y) => {
    return x / y;
}