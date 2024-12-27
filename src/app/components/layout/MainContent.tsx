'use client';

import React, { useEffect, useRef } from 'react';
import Header from "@/app/components/layout/Header";
import CountdownCard from "@/app/components/countdown/CountdownCard";
import RadioCard from "@/app/components/radio/radioCard";
import { useCountryStore } from "@/app/stores/CountryStore";
import { useRadioStore } from "@/app/stores/RadioStore";
import { CountryProvider } from "@/app/providers/CountryContext";
import Modal from "@/app/components/common/Modal";

const MainContent = () => {
    const { country, fetchCountries } = useCountryStore(state => state);
    const fetchRadios = useRadioStore(state => state.fetchRadios);
    const initialized = useRef(false);

    // We intentionally want this effect to run only once on mount
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            fetchCountries(country);
        }
    }, []);
    /* eslint-enable react-hooks/exhaustive-deps */
    // Keep the working radio fetch
    useEffect(() => {
        if (country.countryCode) {
            fetchRadios(country);
        }
    }, [country, fetchRadios]);

    return (
        <div className={'flex items-center flex-col absolute top-14'}>
            <CountryProvider>
                <Header fetchCountries={fetchCountries} />
                <CountdownCard />
            </CountryProvider>
            <RadioCard />
            <Modal />
        </div>
    );
};

export default MainContent;