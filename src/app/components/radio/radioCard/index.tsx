import React from 'react';
import CardBackground from "@/app/components/ui/CardBackground";
import Radio from "@/app/components/radio";


const RadioCard = () => {

    return (
        <div className={'flex flex-col items-center w-4/5 h-64 justify-center'}>
            <CardBackground style={'w-full h-full'} />
            <Radio />
        </div>
    );
};

export default RadioCard;