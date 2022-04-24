// async function a() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
// a(); // 5, 5 times
// async function a() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
// a(); // correct
// async function a() {
//   for (var i = 0; i < 5; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, 1000);
//     }
//     close(i);
//   }
// }
// a(); // correct
// async function a() {
//   setTimeout(() => {
//     console.log('inside');
//   }, 0);
//   console.log('outside');
// }
// a(); // out first and then inner

//  Data  privacy
// function Counter() {
//   let count = 0;

//   this.increment = () => {
//     count++;
//     console.log(count);
//   };

//   this.decrement = () => {
//     count--;
//     console.log(count);
//   };
// }

// const counter1 = new Counter();
// counter1.increment();
// counter1.increment();
// counter1.decrement();

function ClickCounter() {
  let count = 0;
  document.getElementById('clickme').addEventListener('click', function () {
    console.log(++count);
  });
}
ClickCounter();
