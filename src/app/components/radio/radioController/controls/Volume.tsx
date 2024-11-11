import {useState} from "react";

const Volume = ({audioRef, setIsMuted}) => {
    const ICON_PADDING = 50;
    const [volume, setVolume] = useState(1);

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume; // Update the volume of the audio
        if (newVolume === 0) {
            setIsMuted(true); // If volume is 0, set muted state to true
        } else {
            setIsMuted(false); // If volume is greater than 0, set muted state to false
        }
    };

    return (
        <div className={`flex w-full h-14 relative`}>
            <div style={{
                width: '170px',
                height: ICON_PADDING,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: '5%',
            }}>
                <input
                    type={"range"}
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    style={{width: '170px'}}
                    className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer
                            accent-white
                            focus:outline-none focus:ring-2 focus:accent-white

                            [&::-webkit-slider-thumb]:appearance-none
                            [&::-webkit-slider-thumb]:w-5
                            [&::-webkit-slider-thumb]:h-5
                            [&::-webkit-slider-thumb]:bg-white
                            [&::-webkit-slider-thumb]:rounded-full
                            [&::-webkit-slider-thumb]:cursor-pointer
                            hover:[&::-webkit-slider-thumb]:bg-white

                            [&::-moz-range-thumb]:appearance-none
                            [&::-moz-range-thumb]:border-0
                            [&::-moz-range-thumb]:w-5
                            [&::-moz-range-thumb]:h-5
                            [&::-moz-range-thumb]:bg-white
                            [&::-moz-range-thumb]:rounded-full
                            [&::-moz-range-thumb]:cursor-pointer
                            hover:[&::-moz-range-thumb]:bg-white

                            [&::-moz-range-progress]:bg-blue-600
                            [&::-moz-range-progress]:rounded-lg"
                />
            </div>
        </div>
    );
};

export default Volume;