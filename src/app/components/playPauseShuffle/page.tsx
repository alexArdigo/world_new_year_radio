'use client';

import Image from 'next/image';
import {useEffect, useRef, useState} from "react";
import {playPauseAction} from "@/app/actions";

const PlayPauseShuffle = () => {
    const ICON_SIZE = 30;
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const channelId = 'pHZhV0Oe'; // Replace with your channel ID
        const fetchStreamUrl = async () => {
            try {
                // Fetch the audio stream
                const response = await fetch(`https://radio.garden/api/ara/content/listen/${channelId}/channel.mp3`, {
                    method: 'GET',
                    headers: {
                        'Accept': '*/*',
                    },
                });

                // Check if the response is OK
                if (response.ok) {
                    // Use response.url directly
                    const audioUrl = response.url; // Use this URL to play audio

                    // Create the audio object
                    audioRef.current = new Audio(audioUrl);
                    audioRef.current.crossOrigin = 'anonymous'; // Set CORS policy

                    // Clean up function to pause the audio
                    return () => {
                        if (audioRef.current) {
                            audioRef.current.pause();
                            audioRef.current = null;
                        }
                    };
                } else {
                    console.error('Failed to fetch stream:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error fetching stream URL:', error);
            }
        };

        fetchStreamUrl();

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);
    const handlePlayPause = async () => {
        console.log(audioRef);
        const playingState = await playPauseAction(isPlaying)
        isPlaying ? audioRef.current.pause() : audioRef.current?.play();

        setIsPlaying(playingState);

    };
    const shuffle = () => {
        console.log('clicked');
    };

    return (
        <div className={'flex z-3 w-1/3 justify-between pb-8 relative'}>
            <div className={'flex absolute w-full justify-evenly items-center'}>
                <div style={{width: ICON_SIZE, height: ICON_SIZE}}>
                    {isPlaying ? (
                            <Image
                                src="/icons/pause.svg"
                                width={ICON_SIZE}
                                height={ICON_SIZE}
                                alt="Pause"
                                onClick={() => handlePlayPause()}
                            />
                        )
                        : (
                            <Image
                                src="/icons/play.svg"
                                width={ICON_SIZE}
                                height={ICON_SIZE}
                                alt="Play"
                                onClick={() => handlePlayPause()}
                            />
                        )
                    }
                </div>
                <div style={{width: ICON_SIZE, height: ICON_SIZE}}>
                    <Image
                        src="/icons/shuffle.svg"
                        width={ICON_SIZE}
                        height={ICON_SIZE}
                        alt="Shuffle"
                        onClick={() => shuffle()}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlayPauseShuffle;