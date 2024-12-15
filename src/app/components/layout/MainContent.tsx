'use client';

import React, {useEffect} from 'react';
import Header from "@/app/components/layout/Header";
import CountdownCard from "@/app/components/countdown/CountdownCard";
import RadioCard from "@/app/components/radio/radioCard";
import {useCountryStore} from "@/app/stores/CountryStore";
import {useRadioStore} from "@/app/stores/RadioStore";
import {CountryProvider} from "@/app/providers/CountryContext";
import Modal from "@/app/components/common/Modal";

const MainContent = () => {
    const {country, setCountry, fetchCountries} = useCountryStore(state => state);
    const fetchRadios = useRadioStore(state => state.fetchRadios);

    useEffect(() => {
        const fetchData = async () => {
            await fetchCountries();
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (country.countryCode) {
            fetchRadios(country);
        }
    }, [country]);

    return (
        <div className={'flex items-center flex-col absolute top-32'}>
            <CountryProvider value={{ country, setCountry }}>
                <Header fetchCountries={fetchCountries} />
                <CountdownCard />
            </CountryProvider>
            <RadioCard />
            <Modal />

        </div>
    );
};

export default MainContent;