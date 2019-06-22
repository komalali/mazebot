const mazebot = require('./src/mazebot');
const escape = require('./src/escape');
const log = require('./src/log');

(async () => {
    try {
        const maze = await mazebot.random();
        const solution = escape(maze);
        console.log('Solution', solution);
        console.log(maze.printMap());
    } catch (err) {
        log.error(err);
    }
})();
