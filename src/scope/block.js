// CON VAR, LET Y CONST
const fruits = () => {
    if (true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log("2: " + fruits2);
        console.log("3: " + fruits3);
    }
    console.log("1: " + fruits1);
    /* console.log("2: " + fruits2);
    console.log("3: " + fruits3); */
}
fruits();

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

const anotherFunc = () => {
    for(let i = 0; i < 10; i++){ // si lo hacemos con var siempre nos mostrará 10, ya que accede al último valor, es por eso mismo que es mejor con let
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunc();