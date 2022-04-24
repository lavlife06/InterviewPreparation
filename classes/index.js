// //  1
// const elfAttackObj = {
//   attack() {
//     console.log('attack style - ' + this.weapon);
//   },
// };
// //  without create we were returning object and that is why it was called factory function
// const elfFunction = (name, weapon) => {
//   //  inheritance
//   const elf = Object.create(elfAttackObj);
//   elf.name = name;
//   elf.weapon = weapon;
//   return elf;
// };

// const lav = elfFunction('karan', 'fire');
// lav.attack();

// //  2
// ///////////////////         NOTE        ///////////////////////
// //  1 - only because of constructor we are able to access evry methoda of obejcts/arrays/functioncs

// //  constructor
// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// Elf.prototype.attack = function () {
//   console.log('attack style - ', this.weapon);
// };

// //  confusing parts

// Elf.prototype.build = function () {
//   // this points to Elf
//   // console.log(this, 'this');
//   // function building() {
//   //   // this points to global
//   //   // console.log(this, 'this');
//   //   console.log('build by - ', this.name);
//   // }
//   // building();

//   // 1
//   // building.bind(this)();

//   // //  2
//   // const self = this;
//   // function building() {
//   //   // this points to global
//   //   // console.log(this, 'this');
//   //   console.log('build by - ', self.name);
//   // }
//   // building();

//   //  3
//   const building = () => {
//     // this points to global
//     // console.log(this, 'this');
//     console.log('build by - ', this.name);
//   };
//   building();
// };

// const lavelf = new Elf('karan', 'fire');
// // console.log(lavelf.__proto__, 'proto'); // {attack:...,constructot:Elf}
// // console.log(Elf.prototype, 'prototype'); // {attack:...,constructot:Elf}
// // console.log(lavelf.prototype, 'prototype'); // undefinedf beacuse prototypes are of contructor only
// // lavelf.attack();
// lavelf.build();

//  3
////////////            NOTE
//  1   -    attack not aaded to constructor because we are creating constructor every time but attack function is same and that is the reason we dont want to create it in constructor
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    console.log('attack style - ', this.weapon);
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

const lav = new Elf('karan', 'fire', 'firestyle');
lav.attack();
