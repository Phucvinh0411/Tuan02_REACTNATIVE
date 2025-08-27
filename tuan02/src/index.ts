//Cau 1 Create a Promise that returns the string "Hello Async" after 2 seconds.
const asyncHello = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});
// asyncHello.then((message) => console.log(message));

// cau 2 Write a function that returns a Promise resolving with the number 10 after 1 second.
function cau2(): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

console.log("cau2");

cau2().then((num) => console.log(num));


// cau 3 Write a function that rejects a Promise with the error "Something went wrong" after 1second.
function cau3(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Cau 3: Something went wrong"));
    }, 1000);
  });
}

cau3().catch((err)=> console.log(err));