document.querySelector('.grandparent').addEventListener(
  'click',
  function (e) {
    console.log('grandparent clicked');
  },
  true,
); // true === trickling/capturing and false === bubbling and by default its bubbling
document.querySelector('.parent').addEventListener(
  'click',
  function (e) {
    console.log('parent clicked');
  },
  false,
);
document.querySelector('.children').addEventListener(
  'click',
  function (e) {
    e.stopPropagation(); // this will stop further propogation
    console.log('children clicked');
  },
  true,
);
// 1 gparent-children-parent
//   first trickling happens and then bubbling

//  EVENT DELEGATION - it means add less event listeners by giving evnt listeners to parent rahter then chi;ldren
