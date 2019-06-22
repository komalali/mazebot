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
    const directionFlow = {
        E: 'S',
        S: 'W',
        W: 'N',
        N: 'E',
    };
    let direction = 'E';
    let steps = 0;
    while (maze.solved !== true && steps <= 10) {
        try {
            step(maze, direction);
            steps += 1;
        } catch (err) {
            direction = directionFlow[direction];
        }
    }
    return maze.solution;
}

module.exports = escape;
