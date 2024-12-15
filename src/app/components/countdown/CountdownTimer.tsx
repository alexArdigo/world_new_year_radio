'use client';

import {useEffect, useState} from "react";

const CountdownTimer = () => {
    const P_TEXT_XL = 'text-xl';
    const INITIAL_HOUR = new Date().setHours(new Date().getHours() + 1, 0, 0, 0);
    const [nextHour, setNextHour] = useState<number>(INITIAL_HOUR);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);

    useEffect(() => {
        const updateCountdown = () => {

            const now = new Date().getTime();

            const remaining = Math.floor((nextHour - now) / 1000);
            if (remaining <= 0) {
                const newNextHour = new Date(nextHour);
                newNextHour.setHours(newNextHour.getHours() + 1, 0, 0, 0);
                setNextHour(newNextHour.getTime());

            } else {
                setTimeRemaining(remaining);
            }
        };

        // Set initial countdown value
        updateCountdown();

        const countdownInterval = setInterval(updateCountdown, 1000);

        return () => clearInterval(countdownInterval);
    }, [nextHour]);

    // Format time for display
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
    const seconds = String(timeRemaining % 60).padStart(2, '0');

    return (
        <div className={'flex absolute z-3 w-72 h-36 justify-evenly'}>
            <div className={'flex flex-col justify-center items-center w-14'}>
                <h3>{minutes}</h3>
                <p className={P_TEXT_XL}>min</p>
            </div>
            <div className={'flex flex-col justify-center items-center w-14'}>
                <h3>{seconds}</h3>
                <p className={P_TEXT_XL}>sec</p>
            </div>

        </div>
    );
};

export default CountdownTimer;