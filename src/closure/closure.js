const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log("MoneyBox $" + saveCoins);
}

moneyBox(5);
moneyBox(10); // no da 15

const moneyBox2 = (coins) => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox2 = moneyBox2();
myMoneyBox2(4);
myMoneyBox2(6);
myMoneyBox2(20);
