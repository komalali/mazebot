import React from 'react';
import colors from '../colors';

const outerStyle = {
    width: 40,
    height: 40,
    background: colors.paleAqua,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const innerStyle = {
    width: 20,
    height: 20,
    background: colors.fireEngineRed,
    borderRadius: 3,
};

const Racer = () => (
    <div style={outerStyle}>
        <div style={innerStyle} />
    </div>
);

export default Racer;
