const helloWorld = () => {
    const hello = "Hello world";
    console.log(hello);
}

helloWorld();
console.log(hello);

var scope = "i am global"

const functionScope = () => {
    var scope = "I'm just a local"; // aquí scope es un valor local, esto es Ámbito Léxico (no reasigna ni toma la variable global);
    const func = () => {
        return scope; // por ende aquí muestra el valor más cercano
    }
    console.log(func())
}

functionScope();
console.log(scope); // aquí muestra el valor global ya que es el más próximo debido a que no puede acceder a la función 