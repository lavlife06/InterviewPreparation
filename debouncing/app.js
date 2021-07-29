let counter = 0;
const getData = () => {
    console.log("i am rendered", counter++, "times");
};

const doSomeMagic = (fn, timer) => {
    let settimeout;
    return () => {
        let context = this;
        let args = arguments;
        clearTimeout(settimeout);
        settimeout = setTimeout(() => {
            getData.apply(context, args);
        }, timer);
    };
};

const betterFunc = doSomeMagic(getData, 300);
