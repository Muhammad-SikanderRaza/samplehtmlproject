
function multiply(func, number1, number2) {
    func(number1 * number2);
}

multiply(console.log, 2, 5);


function add(func, number1, number2) {
    func(number1 + number2);
}

add(console.log, 1007, 9990);

const p = new Promise((res, rej) => {
    res("fail hogaya bhai");
});

p.then((res) => console.log("Then called:", res))
    .catch((rej) => console.log("Catch called:", rej))
    .finally(() => console.log("Promise done!"));