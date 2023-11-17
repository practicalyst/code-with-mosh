const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading user from database.");
      resolve({ id, github: "@practicalyst" });
    }, 2000);
  });
};

const getRepo = (repo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Repositorios da conta: " + repo);
      resolve(["code-with-mosh", "banco-de-dados", "aeds2"]);
    }, 2000);
  });
};

// const user = getUser(10);
// user.then(user => console.log(user));

getUser(10)
  .then((user) => getRepo(user.github))
  .then((repo) => console.log(repo))
  .catch((err) => console.log("Error", err.message));

console.log("Before");
console.log("After");
