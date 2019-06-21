const log = require('./log');

function step(maze, direction) {
    maze.step(direction);
    log.info(
        `
        Step: ${direction}. 
        Current position: ${maze.current}.
        Current solution: ${maze.solution}.
        Path: ${JSON.stringify(maze.path)}.
        Map: ${maze.printMap()}`,
    );
}

function escape(maze) {
    step(maze, 'E');
    step(maze, 'E');
    step(maze, 'N');
    step(maze, 'N');
    return maze.solution;
}

module.exports = escape;
