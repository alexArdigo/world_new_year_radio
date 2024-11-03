import React from 'react';

const CardBackground = ({style}) => {

    return (
        <div
            className={`bg-black ${style} p-2 rounded-md opacity-70 relative z-2 blur-xs`}
        >
        </div>
    );
};

export default CardBackground;