const mazebot = require('./src/mazebot');
const escape = require('./src/escape');
const log = require('./src/log');

(async () => {
    try {
        const maze = await mazebot.random();
        const solution = escape(maze);
        console.log(solution);
    } catch (err) {
        log.error(err);
    }
})();
