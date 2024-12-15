'use client';

import {createContext, useContext} from "react";
import {CountryContextType} from "@/app/types/ContextType";
import {useCountryStore} from "@/app/stores/CountryStore";

const contextValue: CountryContextType = {
    country: {
        countryCode: '',
        countryName: '',
        zoneName: '',
        gmtOffset: 0,
        timestamp: 0
    },
    setCountry: (country) => {
    }
};

export const CountryContext = createContext<CountryContextType>(contextValue);

export const useCountryContext = () => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error('useCountryContext must be used within a CountryProvider');
    }
    return context;
};

export const CountryProvider = ({children}: { children: React.ReactNode }) => {
    const {country, setCountry} = useCountryStore();

    return (
        <CountryContext.Provider value={{country, setCountry}}>
            {children}
        </CountryContext.Provider>
    );
};