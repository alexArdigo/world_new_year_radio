'use client';

import { createContext, useContext } from "react";
import { CountryContextType } from "@/app/types/ContextType";
import { useCountryStore } from "@/app/stores/CountryStore";

// Create the CountryContext with no default value.
export const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Custom hook to use CountryContext safely
export const useCountryContext = () => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error('useCountryContext must be used within a CountryProvider');
    }
    return context;
};

// Provider component
export const CountryProvider = ({ children }: { children: React.ReactNode }) => {
    const country = useCountryStore((state) => state.country);
    const setCountry = useCountryStore((state) => state.setCountry);

    return (
        <CountryContext.Provider value={{ country, setCountry }}>
            {children}
        </CountryContext.Provider>
    );
};
