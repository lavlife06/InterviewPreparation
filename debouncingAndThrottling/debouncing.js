let counter = 0;
const getData = () => {
    console.log("i am rendered", counter++, "times");
};

const doSomeMagic = (fn, timer) => {
    let settimeout;
    return (...args) => {
        let context = this;
        clearTimeout(settimeout);
        settimeout = setTimeout(() => {
            fn.apply(context, args);
        }, timer);
    };
};

const betterFunc = doSomeMagic(getData, 300);
