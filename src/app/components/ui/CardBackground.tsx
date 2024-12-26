import React from 'react';

const CardBackground = ({style}: { style: string }) => {

    return (
        <div
            className={`bg-black ${style} p-2 rounded-md opacity-70 relative z-2`}
        >
        </div>
    );
};

export default CardBackground;