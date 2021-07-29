// const multiply = (x, y) => {
//     console.log(x * y);
// };

// const multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

const multiply = (x) => {
    return function (y) {
        console.log(x * y);
    };
};

const multiplyByTwo = multiply(2);
multiplyByTwo(3);
