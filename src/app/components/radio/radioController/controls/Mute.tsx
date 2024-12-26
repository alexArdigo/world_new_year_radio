import Image from 'next/image';
import {MuteProps} from "@/app/types/ContextType";

const Mute = ({audioRef, isMuted, setIsMuted}: MuteProps) => {
    const ICON_SIZE = 25;
    const ICON_PADDING = 50;

    const handleMute = async () => {
        if (!audioRef.current) return;

        setIsMuted(prevMuted => !prevMuted);
        audioRef.current.muted = !audioRef.current.muted;
    };

    return (
        <div className={`flex w-3/5 h-14 relative`}>
            <div style={{
                width: ICON_PADDING,
                height: ICON_PADDING,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: '0%',
            }}>
                {isMuted ? (
                    <Image
                        src="/icons/volume-off-solid.svg"
                        width={ICON_SIZE}
                        height={ICON_SIZE}
                        alt="Mute"
                        onClick={handleMute}
                        style={{width: ICON_SIZE, height: '100%'}}
                    />
                ) : (
                    <Image
                        src="/icons/volume-high-solid.svg"
                        width={ICON_SIZE}
                        height={ICON_SIZE}
                        alt="Unmute"
                        onClick={handleMute}
                        style={{width: ICON_SIZE, height: '100%'}}
                    />
                )}

            </div>
        </div>
    );
};

export default Mute;