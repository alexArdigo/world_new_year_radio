
import React from 'react';
import CountdownTimer from "@/app/components/countdown/CountdownTimer";
import CardBackground from "@/app/components/ui/CardBackground";

const CountdownCard = () => {

    return (
        <div className={'flex justify-center w-full mb-6 overflow-hidden'}>
            <CardBackground style="w-72 h-36"/>
            <CountdownTimer />

        </div>
    );
};

export default CountdownCard;