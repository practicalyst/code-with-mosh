const Logger = require('./logger');
const logger = new Logger();

logger.on('logging', (arg) => {
    console.log(arg);
});

logger.log('testing');