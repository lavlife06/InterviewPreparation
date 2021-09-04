class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.#usersList.push({ name, age });
    }
    #usersList = []; // # makes it private

    getInfo() {
        return { name: this.name, age: this.age };
    }

    registerUser(name, age) {
        this.#usersList.push({ name, age });
    }

    getUsersInfo() {
        return this.#usersList;
    }

    static login() {
        // now this is priovate property and also it now only be accessible by User.login only
        console.log("U are logged in from User class");
    }
}
// console.log(lav.usersList); // undefined

class subAdmin extends User {
    constructor(name, age) {
        super(name, age);
    }
    // static getAdminInfo() {
    //     console.log(super.login());
    //     console.log("Your admin info logged here");
    // }
    getAdminInfo() {
        console.log("Your admin info logged here");
    }
    // console.log(subAdmin.getAdminInfo());// now this will work because super can be called on private but extended method call should also be private
}

const lav = new User("lav", 21);
const lavSubAdmin = new subAdmin("karan", 23); // not providing name, age which is needed according to User

// console.log(lav.login(), "login"); // error
// console.log(User.login(), "login"); // clg - U are logged in from User class
