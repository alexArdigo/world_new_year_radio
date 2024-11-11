'use client';

import React, {useEffect, useState} from 'react';
import Header from "@/app/components/layout/Header";
import CountdownCard from "@/app/components/countdown/CountdownCard";
import RadioCard from "@/app/components/radio/radioCard";
import {CountryContext} from "@/app/providers/CountryContext";
import {Country, Radio} from "@/app/types/ContextType";
import {RadioContext} from "@/app/providers/RadioContext";

const MainContent = () => {
    const [country, setCountry] = useState<Country>({
        countryName: '',
        countryCode: '',
        zoneName: '',
        gmtOffset: 0,
        timestamp: 0
    });
    const [radio, setRadio] = useState<Radio>({
        radioId: '',
        title: '',
        subtitle: '',
    });

    const fetchCountry = async () => {
        //await new Promise(resolve => setTimeout(resolve, 3000));
        const fetchData = await fetch(`/api/fetchCountry/${country ? country : 'initial'}`);
        if (!fetchData.ok) {
            throw new Error(fetchData.statusText);
        }
        const {data} = await fetchData.json();

        setCountry(data);
        fetchRadios(data.countryName);
    };

    const fetchRadios = async (countryName) => {
        const fetchData = await fetch(`/api/countryRadios/${countryName}`);


        if (!fetchData.ok) {
            throw new Error(fetchData.statusText);
        }
        const {radioData} = await fetchData.json();
        setRadio(radioData);
    };

    useEffect(() => {
        fetchCountry();
    }, []);

    return (
        <div
            className={'flex items-center flex-col absolute top-32'}
        >
            <Header fetchCountry={fetchCountry}/>
            <CountryContext.Provider value={{country, setCountry}}>
                <CountdownCard/>
            </CountryContext.Provider>
            <RadioContext.Provider value={{radio, setRadio}}>
                <RadioCard/>
            </RadioContext.Provider>


        </div>
    );
};

export default MainContent;