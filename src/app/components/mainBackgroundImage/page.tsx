import React from 'react';
import Image from "next/image";


const BackgroundImage = () => {
    const image = '/images/HERO_1.png'


    return (
        <div>
            <Image
                src={image}
                width={0}
                height={0}
                objectFit='cover'
                objectPosition='center'
                layout='fill'
                className={'relative z-0'}
                alt="Picture of the author"
            />
        </div>
    );
};

export default BackgroundImage;