import PlayPauseShuffle from "@/app/components/playPauseShuffle/page";
import MuteVolume from "@/app/components/muteVolume/page";

const RadioController = () => {

    return (
        <div className={'flex flex-col z-3 w-full justify-evenly items-center'}>
            <PlayPauseShuffle />
            <MuteVolume />
        </div>
    );
};

export default RadioController;