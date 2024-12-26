'use client';

import {useEffect, useState} from "react";
import {useCountdownStore} from "@/app/stores/CountdownStore";

const CountdownTimer = () => {
    const P_TEXT_XL = 'text-xl';
    const INITIAL_HOUR = new Date().setHours(new Date().getHours() + 1, 0, 0, 0);
    const [nextHour, setNextHour] = useState<number>(INITIAL_HOUR);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const {countdown, setCountdown} = useCountdownStore();

    useEffect(() => {
        const updateCountdown = () => {

            const now = new Date().getTime();

            const remaining = Math.floor((nextHour - now) / 1000);

            if (countdown !== remaining) {
                setCountdown(remaining);
            }

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
    }, [
        nextHour,
        countdown,
        setCountdown
    ]);

    // Format time for display
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const minutes: string = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const seconds: string = String(timeRemaining % 60).padStart(2, '0');

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