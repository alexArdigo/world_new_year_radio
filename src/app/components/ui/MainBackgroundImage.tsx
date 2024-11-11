import React from 'react';
import Image from "next/image";


const BackgroundImage = () => {
    const image = '/images/HERO_1.png'


    return (
        <div style={{position: 'relative', width: '100%', height: '100vh'}}>
            <Image
                src={image}
                alt="Country image"
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
                className="relative z-0"
            />
        </div>
    );
};

export default BackgroundImage;