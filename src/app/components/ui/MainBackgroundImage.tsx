'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import getBackgroundImage from "@/app/utils/getBackgroundImage.utils";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {useCountryStore} from "@/app/stores/CountryStore";
import {useLoadingStore} from "@/app/stores/LoadingStore";

const BackgroundImage = () => {
    const {country: {countryName}} = useCountryStore();
    const [imgURL, setImgURL] = useState<StaticImport | string>('');
    const {loading, setLoading} = useLoadingStore();

    const getBGImage = async (country) => {
        if (!country) return;
        const image = await getBackgroundImage(country);
        setImgURL(image?.data);
    };

    useEffect(() => {
        getBGImage(countryName);
    }, [countryName]);


    return (
        <div style={{position: 'relative', width: '100%', height: '100vh'}}>
            {loading && <Image
                src="/images/HERO_1.png"
                alt="Country image"
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
                className="relative z-0"
            />}
            {!imgURL ? <p>Loading...</p> : <Image
                src={imgURL}
                alt="Country image"
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
                onLoad={() => setLoading(false)}
                className="relative z-0"
            />}
        </div>
    );
};

export default BackgroundImage;