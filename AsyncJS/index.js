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
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

//  It takes array of promises
// Promise.all(
//   urls.map((url) => {
//     return fetch(url)
//       .then((res) => res.json())
//       .catch((err) => {
//         console.log(err.message, 'particular error');
//         throw Error('Ops!!');
//       });
//   }),
// )
//   .then((results) => {
//     console.log(results[0], results[1], results[2]);
//   })
//   .catch((err) => console.log('some err', err));
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
getUsers()
  .then((res) => {
    console.log(res, 'data');
  })
  .catch((err) => {
    console.log('err out', err.message);
  });
