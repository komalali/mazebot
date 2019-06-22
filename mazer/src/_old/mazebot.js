const fetch = require('node-fetch');
const Maze = require('./Maze');

async function random() {
    const response = await fetch(
        'https://api.noopschallenge.com/mazebot/random?minSize=10&maxSize=10',
    );
    const responseJson = await response.json();
    return new Maze({
        map: responseJson.map,
        start: responseJson.startingPosition,
        url: responseJson.mazePath,
    });
}

async function checkSolution(mazePath, solution) {
    const url = `https://api.noopschallenge.com${mazePath}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ directions: solution }),
    });
    return await response.json();
}

module.exports = {
    checkSolution,
    random,
};
