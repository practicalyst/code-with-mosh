const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("Reading user from database.");
    callback({ id: id, github: "@practicalyst" });
  }, 5000);
};

const getRepo = (repo, callback) => {
  setTimeout(() => {
    console.log("Repositorios da conta: " + repo);
    callback(["code-with-mosh", "banco-de-dados", "aeds2"]);
  }, 2000);
};

console.log("Before");
getUser(10, (user) => {
  console.log(user);
  getRepo(user.github, (repo) => {
    console.log(repo);
  });
});
console.log("After");
