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
    while (!maze.solved() && steps <= 10000) {
        try {
            const newDirection = directionFlow[direction][index];
            maze.step(newDirection);
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
