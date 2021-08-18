const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
}

fruits();

const anotherFunc = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2; // así no se puede, sin embargo con y = 2 si se puede, sin el "let"
    console.log("x es: " + x);
    console.log("y es: " + y);
}

anotherFunc();