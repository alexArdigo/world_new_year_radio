import React from 'react';
import CountryNameDisplay from "@/app/components/common/CountryNameDisplay";
import Loading from "@/app/components/ui/loading";
import Shuffle from "@/app/components/common/Shuffle";
import {useCountryStore} from "@/app/stores/CountryStore";
import {useBackgroundImageStore} from "@/app/stores/BackgroundImageStore";

const Header = ({fetchCountries}) => {
    const { country: { countryName}} = useCountryStore()
    const currentImage: string | undefined = useBackgroundImageStore.getState?.().backgroundImage.data;

    return (
        <header className={'flex flex-col z-3 w-full h-full items-center mb-14'} style={{ textShadow: '0 2px 2px rgb(3, 3, 3)' }}>
            <div className={'flex h-24 items-start '}>
                {!countryName ?
                    <Loading/>
                    : <div className={'flex items-start'}>
                        <CountryNameDisplay
                            countryName={countryName}
                    />
                        <Shuffle fetch={fetchCountries} width={50}/>
                    </div>
                }
            </div>
            <h2 className={'pr-5'}>dá as boas-vindas a 2025 em</h2>

        </header>
    );
};

export default Header;