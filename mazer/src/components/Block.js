import React from 'react';

const outerStyle = {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const Block = ({ color }) => (
    <div style={{ ...outerStyle, background: color }} />
);

export default Block;
