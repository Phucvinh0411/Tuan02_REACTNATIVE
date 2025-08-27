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

// console.log("cau2");

// cau2().then((num) => console.log(num));


// cau 3 Write a function that rejects a Promise with the error "Something went wrong" after 1second.
function cau3(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Cau 3: Something went wrong"));
    }, 1000);
  });
}

// cau3().catch((err)=> console.log(err));


//cau4 Use .then() and .catch() to handle a Promise that returns a random number.
const cau4 = new Promise<number>((resolve, reject) => {
  const randomNum = Math.random();
  if (randomNum > 0.5) {
    resolve(randomNum);
  } else {
    reject(new Error("Cau 4: Errol cau4"));
  }
});

cau4
  .then((num) => console.log("Cau 4: Random number is", num))
  .catch((err) => console.log(err.message));


// cau5 Create a function simulateTask(time) that returns a Promise resolving with "Taskdone" after time ms.
function simulateTask(time: number): Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Taskdone");
        }, time);
    });
}

// simulateTask(1500).then((mess)=> console.log(mess));

// cau 6 Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const promise1 = simulateTask(1000);
const promise2 = simulateTask(2000);
const promise3 = simulateTask(1500);
Promise.all([promise1, promise2, promise3]).then((results) => {
//   console.log("Cau 6: All tasks done", results);
});


// cau 7 Use Promise.race() to return whichever Promise resolves first.
const cau7P1= new Promise((resolve, reject)=>{
    setTimeout(resolve, 500, "Task 1 finished");
});
const cau7P2= new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, "Task 2 finished");
});
Promise.race([cau7P1, cau7P2])
  .then((result) => {
    console.log("Cau 7: First finished task:", result);
  })
  .catch((err) => {
    console.log("Cau 7: Error:", err.message);
  });

//   cau8 Create a Promise chain: square the number 2, then double it, then add 5.
const cau8= Promise.resolve(2)
        .then((num) => num * num)
        .then((num) => num * 2)
        .then((num) => num + 5)
        .then((result) => {
        console.log("Cau 8: Final result is", result);
        });


// cau9 Write a Promise that reads an array after 1 second and filters even numbers.
const cau9= new Promise<number[]>((resolve)=>{
    setTimeout(()=>{
        resolve([1,2,3,4,5,6,7,8,9,10]);
    }, 1000);
}).then((arr)=>{
    return arr.filter(num => num % 2 === 0);
}).then((evenNums)=>{
    console.log("Cau 9: Even numbers are", evenNums);
});
