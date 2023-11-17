// pending
// fulfilled
// went wrong? -> rejected state

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(1);
    reject(new Error('message'));
  }, 2000);
  //reject(new Error('message'));
});

// result is the resolve
p.then((result) => console.log("Result: ", result)).catch(err => console.log('Deu erro:', err.message));
