let counter = 0;
const getData = () => {
  console.log('i am rendered', counter++, 'times');
};

const doSomeMagic = (fn, timer) => {
  let flag = true;

  return (...args) => {
    let context = this;

    if (flag) {
      fn.apply(context, args);

      flag = false;

      setTimeout(() => {
        flag = true;
      }, timer);
    }
    // else {
    //   return;
    // }
  };
};

const betterFunc = doSomeMagic(getData, 500);

window.addEventListener('resize', betterFunc);
