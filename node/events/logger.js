const EventEmitter = require("events");

let url = "https://www.pingback.com";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("logging", { id: 1, url: url, message: message });
  }
}

module.exports = Logger;
