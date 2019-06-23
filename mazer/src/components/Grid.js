import React from 'react';
import Block from './Block';
import Racer from './Racer';
import Trail from './Trail';
import colors from '../colors';

const rowStyle = {
    display: 'flex',
};

const Row = ({ row }) => (
    <div style={rowStyle}>
        {row.map(block => {
            switch (block) {
                case 'X':
                    return <Block color={colors.metallicSeaweed} />;
                case ' ':
                    return <Block color={colors.paleAqua} />;
                case 'B':
                    return <Block color={colors.pastelRed} />;
                case 'A':
                    return <Racer />;
                case '.':
                    return <Trail />;
                default:
                    return <Block color={colors.metallicSeaweed} />;
            }
        })}
    </div>
);

const Grid = ({ grid }) => {
    return (
        <div
            style={{
                width: 410,
                height: 410,
                background: colors.prussianBlue,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
            }}
        >
            {grid.map(row => (
                <Row row={row} />
            ))}
        </div>
    );
};

export default Grid;
