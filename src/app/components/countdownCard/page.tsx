import React from 'react';
import CountdownTimer from "@/app/components/countdownTimer/page";
import CardBackground from "@/app/components/cardBackground/page";


const CountdownCard = () => {

    return (
        <div className={'flex justify-center w-full mb-14 overflow-hidden'}>
            <CardBackground style='w-5/12 h-32' />
            <CountdownTimer />
        </div>
    );
};

export default CountdownCard;