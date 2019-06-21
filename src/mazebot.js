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
        end: responseJson.endingPosition,
    });
}

module.exports = {
    random,
};
