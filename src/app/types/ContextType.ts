import React from "react";

// country types

export type Country = {
    countryCode: string;
    countryName: string;
    zoneName: string;
    gmtOffset: number;
    timestamp: number
}

export type CountryContextType = {
    country: Country;
    setCountry: React.Dispatch<React.SetStateAction<Country>>;
}

export interface CountryStore {
    country: Country;
    setCountry: (country: Country) => void;
    fetchCountries: () => Promise<void>;
}
// radio types

export type Radio = {
    radioId: string;
    title: string;
    subtitle: string;
};

export type RadioContextType = {
    radio: Radio;
    setRadio: React.Dispatch<React.SetStateAction<Radio>>;
}

export interface RadioStore {
    radio: Radio;
    setRadio: (radio: Radio) => void;
    fetchRadios: () => Promise<void>;
}

// Background image types

export type BackgroundImage = {
    data: string;
}

export type BackgroundImageContextType = {
    backgroundImage: BackgroundImage;
    setBackgroundImage: React.Dispatch<React.SetStateAction<BackgroundImage>>;
}

export interface BackgroundImageStore {
    backgroundImage: BackgroundImage;
    setBackgroundImage: (backgroundImage: BackgroundImage) => void;
    fetchBackgroundImage: (country) => Promise<void>;
}

// Loading types

export interface LoadingContext {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

// Modal

export type Modal = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}