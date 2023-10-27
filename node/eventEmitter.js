const EventEmitter = require("events");
const emmiter = new EventEmitter();

emmiter.on('messageLogged', (arg) => {
  console.log("Listened message ====> ", arg);
});

emmiter.on('authorizedLogin', (arg) => {
    console.log('User logged: ', arg);
})

emmiter.emit('messageLogged', { id: 1, url: "https://www.youtube.com" });
emmiter.emit('authorizedLogin', {
    id: 1,
    username: 'practicalyst',
    email: 'prac@prac.com',
    token: 'token-token-token'
});