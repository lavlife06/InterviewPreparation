// // 1) OLA
// // const sum = (a) => {
// //     let sumcount = a;
// //     function helper(b) {
// //         if (b) {
// //             sumcount += b;
// //             return helper;
// //         } else {
// //             return sumcount;
// //         }
// //     }
// //     return helper;
// // };

// // const sum = (a) => (b) => b ? sum(a + b) : a;

// // let result = sum(5)(10)(15)(15)(15)();
// // console.log(result);

// // 2) MICROSOFT...

// let user = {
//     name: "lav senghani",
//     address: {
//         personal: {
//             city: "Surat",
//             area: "Jahangirpura",
//         },
//         office: {
//             city: "Los Angeles",
//             area: {
//                 landmark: "Sattra Gali",
//             },
//         },
//     },
//     number: 7990192369,
// };

// let output = {
//     user_name: "lav senghani",
//     user_address_personal_city: "Surat",
//     user_address_personal_area: "Jahangirpura",
//     user_address_office_city: "Los Angeles",
//     user_address_office_area_landmark: "Sattra Gali",
//     user_number: 7990192369,
// };

// Solution
const magic = (obj) => {
    let finalObj = {};
    const helper = (newobj, newkey) => {
        for (let key in newobj) {
            if (typeof newobj[key] === "object") {
                helper(newobj[key], newkey + "_" + key);
            } else {
                finalObj[newkey + "_" + key] = newobj[key];
            }
        }
    };

    helper(obj, "user");
    return finalObj;
};
console.log(magic(user));

// const str = "(()(()))";
// //  output 6
// //  rules  () = 1 , ()() = 1 + 1 = 2, (()) = ()*2 = 1*2 = 2
// // explanation > ((1)((2)))*2

// // Solution
// const recursiveFunc = () => {
//     let result;
//     let stack = [];
//     let helperarr = [0, 0, 0, 0, 0, 0, 0, 0];

//     const helper = (start, end) => {};

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == ")") {
//             console.log(stack.length, i, helperarr);
//             helperarr[stack.length - 1] = i;
//             stack.pop();
//         } else {
//             stack.push("(");
//         }
//     }
//     console.log([helperarr, stack]);
//     return [helperarr, stack];
// };

// recursiveFunc();
