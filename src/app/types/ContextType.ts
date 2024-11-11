import React from "react";

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


export type Radio = {
    radioId: string;
    title: string;
    subtitle: string;
};

export type RadioContextType = {
    radio: Radio;
    setRadio: React.Dispatch<React.SetStateAction<Radio>>;
}