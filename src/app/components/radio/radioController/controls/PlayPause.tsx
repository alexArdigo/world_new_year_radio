'use client';

import Image from 'next/image';
import { playPauseAction } from "@/app/actions";
import {PlayPauseProps} from "@/app/types/ContextType";

const PlayPause = ({audioRef, isPlaying, setIsPlaying}: PlayPauseProps) => {
    const ICON_SIZE = 30;
    const ICON_PADDING = 50;
    const ABSOLUTE_PADDING = '15%';


    const handlePlayPause = async () => {
        if (!audioRef.current) return;

        const playingState = await playPauseAction(isPlaying);
        setIsPlaying(playingState);

        if (playingState) {
            audioRef.current.play().catch(error => console.error("Error playing audio:", error));
        } else {
            audioRef.current.pause();
        }
    };

    return (

            <div className={`flex w-full h-14 relative`}>
                <div style={{
                    width: ICON_PADDING,
                    height: ICON_PADDING,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    right: ABSOLUTE_PADDING,
                }}>
                    {isPlaying ? (
                        <Image
                            src="/icons/pause.svg"
                            alt="Pause"
                            width={ICON_SIZE}
                            height={ICON_SIZE}
                            onClick={handlePlayPause}
                            style={{ width: ICON_SIZE, height: '100%' }}
                        />
                    ) : (
                        <Image
                            src="/icons/play.svg"
                            alt="Play"
                            width={ICON_SIZE}
                            height={ICON_SIZE}
                            onClick={handlePlayPause}
                            style={{ width: ICON_SIZE, height: '100%' }}
                        />
                    )}
                </div>
            </div>
    );
};

export default PlayPause;
