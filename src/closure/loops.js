const anotherFunc = () => {
    for(var i = 0; i < 10; i++){ // si lo hacemos con var siempre nos mostrará 10, ya que accede al último valor, es por eso mismo que es mejor con let
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunc();