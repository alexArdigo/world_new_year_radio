'use client';

import React, {useContext} from 'react';
import CountryNameDisplay from "@/app/components/common/CountryNameDisplay";
import Loading from "@/app/loading";
import Shuffle from "@/app/components/common/Shuffle";
import {CountryContext} from "@/app/providers/CountryContext";

const Header = ({fetchCountry}) => {
    const useCountryContext = () => useContext(CountryContext);
    const { country} = useCountryContext()

    return (
        <div className={'flex flex-col z-3 w-full h-full items-center mb-14'}>
            <div className={'flex h-24 items-start'}>
                {!country ?
                    <Loading/>
                    : <div className={'flex items-start'}>
                        <CountryNameDisplay
                            countryName={country.countryName}
                    />
                        <Shuffle fetch={fetchCountry} width={50}/>
                    </div>
                }
            </div>
            <h2 className={'pr-5'}>dá as boas-vindas a 2025 em</h2>

        </div>
    );
};

export default Header;