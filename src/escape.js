const log = require('./log');

function step(maze, direction) {
    maze.step(direction);
    log.info(
        `
        Step: ${direction}. 
        Current position: ${maze.current}.
        Path: ${JSON.stringify(maze.path)}.`,
    );
}

function escape(maze) {
    const directionFlow = {
        N: ['E', 'N', 'W', 'S'],
        E: ['S', 'E', 'N', 'W'],
        S: ['W', 'S', 'E', 'N'],
        W: ['N', 'W', 'S', 'E'],
    };
    let direction = 'N';
    let steps = 0;
    let index = 0;
    while (!maze.solved() && steps <= 100) {
        try {
            const newDirection = directionFlow[direction][index];
            step(maze, newDirection);
            direction = newDirection;
            steps += 1;
            index = 0;
        } catch (err) {
            index += 1
        }
    }
    return maze.solution();
}

module.exports = escape;
