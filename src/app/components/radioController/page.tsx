'use client';

import {useEffect, useRef, useState} from "react";
import Shuffle from "@/app/components/radioController/shuffle";
import Volume from "@/app/components/radioController/volume";
import Mute from "@/app/components/radioController/mute";
import PlayPause from "@/app/components/radioController/playPause";

const RadioController = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        // Ensure Audio is only created in the browser environment
        if (typeof window !== 'undefined') {
            audioRef.current = new Audio('https://radio.garden/api/ara/content/listen/zO4zUoXY/channel.mp3');
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = '';
            }
        };
    }, []);

    return (
        <div className={'flex flex-col z-3 w-full justify-evenly items-center'}>
            <div className={'flex z-3 w-full'}>
                <PlayPause audioRef={audioRef}/>
                <Shuffle audioRef={audioRef}/>
            </div>
            <div className={'flex z-3 w-full'}>
                <Mute audioRef={audioRef} isMuted={isMuted} setIsMuted={setIsMuted}/>
                <Volume audioRef={audioRef} setIsMuted={setIsMuted}/>
            </div>
        </div>
    );
};

export default RadioController;