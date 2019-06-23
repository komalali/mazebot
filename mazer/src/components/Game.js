import React from 'react';
import useFetch from 'fetch-suspense';
import Maze from './Maze';

export default function Game() {
    const data = useFetch(
        'https://api.noopschallenge.com/mazebot/random?minSize=10&maxSize=10',
    );
    return <Maze map={data.map} start={data.startingPosition} />;
}
