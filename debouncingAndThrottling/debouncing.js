let counter = 0;
const getData = () => {
  console.log('i am rendered', counter++, 'times');
};

const doSomeMagic = (func, timegap) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, timegap);
  };
};

const betterFunc = doSomeMagic(getData, 300);

//  cases - api calls, scroll event page resize event
