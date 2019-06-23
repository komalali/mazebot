import React from 'react';
import colors from '../colors';

const outerStyle = {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: `1px solid ${colors.prussianBlue}`,
};

const Block = ({ color }) => (
    <div style={{ ...outerStyle, background: color }} />
);

export default Block;
