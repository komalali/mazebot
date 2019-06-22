const mazebot = require('./src/mazebot');
const escape = require('./src/escape');
const log = require('./src/log');

(async () => {
    try {
        const maze = await mazebot.random();
        const solution = escape(maze);
        const result = await mazebot.checkSolution(maze.url, solution);
        log.info('Result', result);
        log.info('Solution', solution);
        log.info(maze.printMap());
    } catch (err) {
        log.error(err);
    }
})();
