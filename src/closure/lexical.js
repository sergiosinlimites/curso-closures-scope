const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(++count);
    }
    return displayCount;
}

const myCount = buildCount(2);
myCount(); // output 3
myCount(); // output 4

const myOtherCount = buildCount(10);
myOtherCount(); // 11
myOtherCount(); // 12
myOtherCount(); // 13
