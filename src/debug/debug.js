var a = "Hello";

function hello(){
    let b = "Hello world";
    const c = "HELLO WORLD";
    if(true){
        let d = "¡HELLO WORLD!";
        debugger
    }
}

hello();

const moneyBox2 = (coins) => {
    debugger;
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger;
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox2 = moneyBox2();
myMoneyBox2(4);
myMoneyBox2(6);
myMoneyBox2(20);
