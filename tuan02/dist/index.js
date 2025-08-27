"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Cau 1 Create a Promise that returns the string "Hello Async" after 2 seconds.
const asyncHello = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
// asyncHello.then((message) => console.log(message));
// cau 2 Write a function that returns a Promise resolving with the number 10 after 1 second.
function cau2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
// console.log("cau2");
// cau2().then((num) => console.log(num));
// cau 3 Write a function that rejects a Promise with the error "Something went wrong" after 1second.
function cau3() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Cau 3: Something went wrong"));
        }, 1000);
    });
}
// cau3().catch((err)=> console.log(err));
//cau4 Use .then() and .catch() to handle a Promise that returns a random number.
const cau4 = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve(randomNum);
    }
    else {
        reject(new Error("Cau 4: Errol cau4"));
    }
});
cau4
    .then((num) => console.log("Cau 4: Random number is", num))
    .catch((err) => console.log(err.message));
// cau5 Create a function simulateTask(time) that returns a Promise resolving with "Taskdone" after time ms.
// function simulateTask(time: number): Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Taskdone");
//         }, time);
//     });
// }
//# sourceMappingURL=index.js.map