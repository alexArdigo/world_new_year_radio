import React from "react";

// country types

export type Country = {
    countryCode: string;
    countryName: string;
    countryNameTranslated: string;
    zoneName: string;
    gmtOffset: number;
    timestamp: number
}

export type CountryContextType = {
    country: Country;
    setCountry: (country: Country) => void;
}

export interface CountryStore {
    country: Country;
    setCountry: (country: Country) => void;
    fetchCountries: (country: Country) => Promise<void>;
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
    setRadio: React.Dispatch<React.SetStateAction<Radio>>;
    fetchRadios: (country: Country) => Promise<void>;
}

// Radio Id types

export interface CountryPage {
    country?: { title: string };
}

export interface Source {
    type: string;
    page?: CountryPage;
}

export interface DataItem {
    _source: Source;
}

// PlayPause types

export interface PlayPauseProps {
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

// Mute types
export interface MuteProps {
    audioRef: React.RefObject<HTMLAudioElement>;
    isMuted: boolean;
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

// Volume types
export interface VolumeProps {
    audioRef: React.RefObject<HTMLAudioElement>;
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

// Page types

export type Page = {
    title: string;
    subtitle: string;
    place: {
        title: string;
    };
    url: string;
    type: string;
}

export interface HeaderProps {
    fetchCountries: CountryStore['fetchCountries']; // Use the fetchCountries function type from CountryStore
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
    fetchBackgroundImage: (country: Country) => Promise<void>;
}

// Pictures API types

export type UnsplashResult = {
    urls: { raw: string };
};

export type PixabayHit = {
    largeImageURL: string;
};

export type PictureList = UnsplashResult[] | PixabayHit[];

// Fetch types

type FetchFunction = ((country: Country) => Promise<void>)

export interface ShuffleProps {
    fetch: FetchFunction;
    country: Country;
    width: number | string;
}

// Loading types

export interface LoadingContext {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

// Loading types

export interface LoadingPageContext {
    loadingPage: boolean;
    setLoadingPage: (loadingPage: boolean | ((prev: boolean) => boolean)) => void;
}

// Coundtdown types

export interface CountdownContext {
    countdown: number;
    setCountdown: (countdown: number) => void;
}

// TimeStamp types

export type TimeStampType = (marker: number) => {
        toOpenModalStart: number,
        countdownStart: number,
        toOpenModalEnd: number,
        toCloseModal: number,
        toFinishCountdown: number,
}

// QueryBuilder types

export interface QueryBuilderProps {
    key: string | undefined,
    q: string,
    image_type: string,
    category: string,
}

