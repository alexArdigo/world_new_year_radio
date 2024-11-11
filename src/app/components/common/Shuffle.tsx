'use client';

import Image from 'next/image';

const Shuffle = ({fetch, width}) => {
    const ICON_SIZE = 30;
    const ICON_PADDING = 50;
    const ABSOLUTE_PADDING = '15%';


    return (
            <div className={`flex ${width} h-14 relative`}>
                <div style={{
                    width: ICON_PADDING,
                    height: ICON_PADDING,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: ABSOLUTE_PADDING,
                }}>
                    <Image
                        src="/icons/shuffle.svg"
                        alt="Shuffle"
                        width={ICON_SIZE}
                        height={ICON_SIZE}
                        onClick={fetch}
                        style={{width: ICON_SIZE, height: '100%'}}
                    />
                </div>
        </div>
    );
};

export default Shuffle;
