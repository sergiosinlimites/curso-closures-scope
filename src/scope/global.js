var hello = "hello";
// esto se puede: var hello = "hello +";
let world = "Hello world";
// esto NO se puede: let world = "Hi";
const helloWorld = "Hello world!";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// algunos de los errores son:

const helloMyWorld = () => {
    globalVar = "Im global";
}

helloMyWorld();
console.log(globalVar + " hehehe");

const anotherWorld = () => {
    var localVar = globalVar = "Im Global"
}

anotherWorld();
console.log(globalVar + "se repitió");