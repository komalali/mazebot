function Maze({ map, start, end }) {
    this.current = start;
    this.path = [start];
    this.map = map;
    this.solution = '';
    this.size = map.length;
    this.solved = false;

    function printMap() {
        const rowStringified = this.map.map(row => row.join(''));
        const mapString = rowStringified.join('\n');
        return `\n${mapString}`;
    }

    function step(direction) {
        const directionMap = {
            E: [1, 0],
            S: [0, 1],
            W: [-1, 0],
            N: [0, -1],
        };
        switch (direction) {
            case 'E':
            case 'S':
            case 'W':
            case 'N':
                const minIndex = 0;
                const maxIndex = this.size - 1;
                const xValue = this.current[0] + directionMap[direction][0];
                const yValue = this.current[1] + directionMap[direction][1];
                if (xValue < minIndex || xValue > maxIndex) {
                    throw new Error(`Invalid x value: ${xValue}`);
                }
                if (yValue < minIndex || yValue > maxIndex) {
                    throw new Error(`Invalid y value: ${yValue}`);
                }

                const newPosition = [xValue, yValue];

                if (this.map[yValue][xValue] === 'X') {
                    throw new Error('You crashed into a wall');
                }
                if (this.map[yValue][xValue] === 'B') {
                    this.solved = true;
                }

                const newMap = [...this.map];
                newMap[yValue][xValue] = '.';
                this.map = newMap;
                this.path.push(newPosition);
                this.current = newPosition;
                this.solution += direction;
                break;
            default:
                throw new Error('Invalid direction');
        }
    }

    return {
        current: this.current,
        path: this.path,
        size: this.size,
        solution: this.solution,
        map: this.map,
        printMap,
        step,
    };
}

module.exports = Maze;
