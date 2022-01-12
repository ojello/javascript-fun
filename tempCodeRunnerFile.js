

function getFee(isSenior) {
    return (isSenior ? '5.00' : '25.00');
}

console.log(getFee(true));
// expected output: 5.00

console.log(getFee(false));
// expected output: 25.00

console.log(getFee(null));
// expected output: 26.00
