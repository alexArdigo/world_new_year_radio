import Image from 'next/image';

const MuteVolume = () => {
    const ICON_SIZE = 30
    return (
        <div className={'flex z-3 w-5/12 justify-evenly'}>

            <Image
                src="/icons/mute.svg"
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt="Picture of the author"
            />
            <input type={"range"}/>

        </div>
    );
};

export default MuteVolume;