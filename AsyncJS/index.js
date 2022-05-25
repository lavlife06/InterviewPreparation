// //                  PROMISE
// const promise = new Promise((res, rej) => {
//   if (false) {
//     res('hello i am resolved');
//   } else {
//     rej('hello i am rejected');
//   }
// });

// promise
//   .then((res) => {
//     console.log(res, 'in then');
//   })
//   .catch((err) => {
//     console.log(err, 'in catch');
//   });

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdee.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

//  It takes array of promises
Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err.message, 'particular error');
        throw Error('Ops!!');
      });
  }),
)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.log('some err', err));
// GET https://jsonplaceholder.typicode.om/users net::ERR_NAME_NOT_RESOLVED

//  Failed to fetch particular error
//  some err Error: Ops!!
//     at index.js:31:15
//     at async Promise.all (index 0)

// const getData = async () => {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map((url) => fetch(url).then((res) => res.json())),
//     );
//     console.log(users, posts, albums, 'data');
//   } catch (err) {
//     console.log('oops!', err.message);
//   } finally {
//     console.log('finally called');
//   }
// };
// getData();

// const getDataNewWay = async () => {
//   try {
//     const allpromises = urls.map((url) => fetch(url));

//     for await (let request of allpromises) {
//       const data = await request.json();
//       console.log(data, 'data');
//     }
//   } catch (err) {
//     console.log('oops!', err.message);
//   } finally {
//     console.log('finally called');
//   }
// };
// getDataNewWay();

// //                  trycatch/thencatch  practice
// const getUsers = async () => {
//   const url = 'https://jsonplaceholder.typicode.com/uss';

//   try {
//     const res = await fetch(url);
//     console.log(res.status);
//     if (res.status === 404) {
//       // this will go in catch of try not in catch of thencatch
//       throw Error();
//     }
//     const response = await res.json();
//     return response;
//     // console.log(response, 'data');
//   } catch (err) {
//     // server error like doesnt exist, .com error
//     console.log('err in', err);
//     // this will go in catch of thencatch
//     throw Error();
//   }
// };
const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const res = await fetch(url);
  console.log(res.status);
  if (res.status === 404) {
    // this will go in catch of thencatch
    throw Error('opps');
  }
  const response = await res.json();
  return response;
};
// getUsers()
//   .then((res) => {
//     console.log(res, 'data');
//   })
//   .catch((err) => {
//     console.log('err out', err.message);
//   });

const promise1 = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
};
const promise2 = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

// Promise.all([promise1, promise2])
//   .then((result) => {
//     console.log(result, 'result');
//   })
//   .catch((err) => {
//     console.log(err, 'err');
//   });

// const mypromiseall = async function (arrOfPromises) {
//   const arr = [];
//   arrOfPromises.forEach(async (element) => {
//     const res = await element();
//     arr.push(res);
//   });
//   return arr;
// };

// const mypromiseall = (promisearr) => {
//   const arr = [];
//   let promiseResolvesCount = 0;

//   return new Promise((resolve, rej) => {
//     promisearr.forEach((element, index) => {
//       element()
//         .then((res) => {
//           promiseResolvesCount += 1;
//           arr[index] = res;
//           console.log(promiseResolvesCount, 'promiseResolvesCount', arr.length);
//           if (promiseResolvesCount === arr.length) {
//             resolve(arr);
//           }
//         })
//         .catch((err) => {
//           rej(err.message);
//         });
//     });
//   });
// };

// mypromiseall([promise1, promise2])
//   .then((result) => {
//     console.log(result, 'result');
//   })
//   .catch((err) => {
//     console.log(err, 'err');
//   });

const callApiAfter5SecondLogic = (arr, func) => {
  let flag = true;
  let currIndex = 0;
  let timer;
  const checkFetchData = (index) => {
    if (flag) {
      func(arr[index])
        .then((res) => {
          console.log(res, 'res');
          flag = true;
        })
        .catch((err) => {
          flag = true;
        });
      flag = false;
      currIndex++;
    }
  };

  return () => {
    timer = setInterval(() => {
      if (timer && arr.length === currIndex) {
        clearInterval(timer);
      } else {
        checkFetchData(currIndex);
      }
    }, 1000);

    checkFetchData(currIndex);
  };
};

const getCarsInfo = (carid) => {
  return new Promise((res, rej) => {
    const randomnumber = Math.floor(Math.random() * 10);
    console.log(randomnumber, 'randomnumber');
    setTimeout(() => {
      res(carid);
    }, [randomnumber * 1000]);
  });
};

const getCarDetailsNewWay = callApiAfter5SecondLogic(['car1', 'car2', 'car3', 'car4'], getCarsInfo);
// getCarDetailsNewWay();
