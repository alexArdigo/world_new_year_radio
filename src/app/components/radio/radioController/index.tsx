'use client';

import {useEffect, useRef, useState} from "react";
import Shuffle from "@/app/components/common/Shuffle";
import Volume from "@/app/components/radio/radioController/controls/Volume";
import Mute from "@/app/components/radio/radioController/controls/Mute";
import PlayPause from "@/app/components/radio/radioController/controls/PlayPause";
import {useRadioStore} from "@/app/stores/RadioStore";
import {useCountryStore} from "@/app/stores/CountryStore";

const RadioController = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const {radio: {radioId}, fetchRadios} = useRadioStore();
    const {country} = useCountryStore();

    const fetchRadio = () => {
        if (typeof window !== 'undefined' && radioId) {
            audioRef.current = null;
            audioRef.current = new Audio(`${process.env.NEXT_PUBLIC_RADIO_GARDEN_PATH}/ara/content/listen/${radioId}/channel.mp3`);


        }
    };


    useEffect(() => {
        fetchRadio();
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(err => console.log("Autoplay prevented or other error", err));
        }


        return () => {
            if (audioRef.current) {
                audioRef.current?.pause();
                audioRef.current.src = '';
            }
        };
    }, [radioId]);

    return (
        <div className={'flex flex-col z-3 w-full justify-evenly items-center'}>
            <div className={'flex z-3 w-full'}>
                <PlayPause audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                <Shuffle fetch={fetchRadios} country={country} width={'w-full'}/>
            </div>
            <div className={'flex z-3 w-full'}>
                <Mute audioRef={audioRef} isMuted={isMuted} setIsMuted={setIsMuted}/>
                <Volume audioRef={audioRef} setIsMuted={setIsMuted}/>
            </div>
        </div>
    );
};

export default RadioController;