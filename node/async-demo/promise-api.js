const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operartion 3...");
    reject(new Error('Something happened...'));
  }, 2000);
});

// If any of promises is rejects, Promise.all is considered rejected aswell
Promise.all([p1, p2]).then((result) => console.log(result));

Promise.all([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error: ", err.message));
