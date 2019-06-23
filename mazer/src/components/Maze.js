import React, { useReducer } from 'react';
import useKey from 'react-use/lib/useKey';
import Grid from './Grid';

const mazeReducer = (state, action) => {
    const directionMap = {
        moveRight: {
            code: 'E',
            position: [1, 0],
        },
        moveLeft: {
            code: 'W',
            position: [-1, 0],
        },
        moveUp: {
            code: 'N',
            position: [0, -1],
        },
        moveDown: {
            code: 'S',
            position: [0, 1],
        },
    };
    const size = state.map.length;
    switch (action.type) {
        case 'moveRight':
        case 'moveDown':
        case 'moveLeft':
        case 'moveUp':
            const minIndex = 0;
            const maxIndex = size - 1;
            console.log(state);
            const xValue =
                state.position[0] + directionMap[action.type].position[0];
            const yValue =
                state.position[1] + directionMap[action.type].position[1];
            if (xValue < minIndex || xValue > maxIndex) {
                // throw new Error(`Invalid x value: ${xValue}`);
                return state;
            }
            if (yValue < minIndex || yValue > maxIndex) {
                // throw new Error(`Invalid y value: ${yValue}`);
                return state;
            }

            const newPosition = [xValue, yValue];
            const newMap = [...state.map];
            const newCell = newMap[yValue][xValue];

            if (newCell === 'X') {
                // throw new Error('You crashed into a wall');
                return state;
            }

            newMap[yValue][xValue] = ['A', 'B'].includes(newCell)
                ? newCell
                : 'A';

            return {
                map: newMap,
                position: newPosition,
                steps: state.steps + 1,
                solution: `${state.solution}${directionMap[action.type].code}`,
                solved: newCell === 'B',
            };
        default:
            return;
    }
};

const Maze = props => {
    const initialState = {
        map: props.map,
        position: props.start,
        steps: 0,
        solution: '',
        solved: false,
    };

    const [state, dispatch] = useReducer(mazeReducer, initialState);

    const up = () => dispatch({ type: 'moveUp' });
    const down = () => dispatch({ type: 'moveDown' });
    const right = () => dispatch({ type: 'moveRight' });
    const left = () => dispatch({ type: 'moveLeft' });

    useKey('ArrowUp', up);
    useKey('ArrowDown', down);
    useKey('ArrowRight', right);
    useKey('ArrowLeft', left);
    return <Grid grid={state.map} />;
};

export default Maze;
