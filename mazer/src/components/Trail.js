import React from 'react';
import colors from '../colors';

const outerStyle = {
    width: 40,
    height: 40,
    background: colors.paleAqua,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: `1px solid ${colors.prussianBlue}`,
};

const innerStyle = {
    width: 12,
    height: 12,
    background: colors.fireEngineRed,
    borderRadius: 2,
};

const Racer = () => (
    <div style={outerStyle}>
        <div style={innerStyle} />
    </div>
);

export default Racer;
