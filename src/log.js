const pino = require('pino');
const log = pino({
    prettyPrint: {
        colorize: true,
        translateTime: true,
    },
});

module.exports = log;
