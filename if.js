//var nome = "Maria"

//if (nome === "Mariana") {
//    console.log('Boa! Esse é o seu nome mesmo!');
//    } else if (nome === "Marina"){
//        console.log('Ok, está quase lá...');
//    } else {
//        console.log('Poxa, você não é a Mariana...');
//    }

var nome = "Mariana";

switch (nome) {
    case 'Mariana':
        console.log('Boa!');
        break;
    case 'Marques':
        console.log('Tá, pode ser também!');
        break;
    default: 
        console.log('Não foi dessa vez...')
        break;
}