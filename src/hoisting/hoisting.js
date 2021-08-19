// es como si aquí existiera un var a;
a = 2;
var a;
console.log(a); // 2;

// sin embargo en este otro ejemplo

console.log(a); // undefined
var a = 2;

// ahora con funciones

function nameOfDog(name){
    console.log(name);
}

nameOfDog("Elmo"); // da "Elmo";

// y ahora la función después

nameOfDog("Elmo"); // da "Elmo";

function nameOfDog(name){
    console.log(name);
}
