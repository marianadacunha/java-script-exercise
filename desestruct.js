const person = {
    name: "Mariana",
    surname: "Marques",
    age: "23",
    profession: "Front-end Developer"
}

console.log(person);

// let name = person.name;
// let surname = person.surname;
// let age = person.age;
// let profession = person.profession;

let { name, surname, age, profession } = person;
console.log(name, surname, age, profession);