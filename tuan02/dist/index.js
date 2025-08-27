"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a Promise that returns the string "Hello Async" after 2 seconds.
const asyncHello = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
asyncHello.then((message) => console.log(message));
//# sourceMappingURL=index.js.map