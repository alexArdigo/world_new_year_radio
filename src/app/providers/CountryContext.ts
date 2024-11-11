'use client';

import {createContext} from "react";
import {CountryContextType} from "@/app/types/ContextType";

const contextValue: CountryContextType = {
    country:  {
        countryCode: '',
        countryName: '',
        zoneName: '',
        gmtOffset: 0,
        timestamp: 0
    },
    setCountry: (country) => {}
}

export const CountryContext = createContext<CountryContextType>(contextValue);

