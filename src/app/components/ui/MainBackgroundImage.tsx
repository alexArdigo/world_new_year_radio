'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import getBackgroundImage from "@/app/utils/getBackgroundImage.utils";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {useCountryStore} from "@/app/stores/CountryStore";
import {useLoadingStore} from "@/app/stores/LoadingStore";
import Shuffle from "@/app/components/common/Shuffle";
import {useLoadingPageStore} from "@/app/stores/LoadingPageStore";

const BackgroundImage = () => {
    const {country: {countryName}} = useCountryStore();
    const [imgURL, setImgURL] = useState<StaticImport | string>('');
    const imgRef = <Image src={imgURL} alt={'test'}/>
    const {loading, setLoading} = useLoadingStore();
    const {loadingPage, setLoadingPage} = useLoadingPageStore();

    const getBGImage = async (country, PBError) => {
        if (!country) return;
        const image = await getBackgroundImage(country, PBError);
        setImgURL(image?.data);
        setLoadingPage(!loadingPage)
    };

    const handlePBError = () => {
        getBGImage(countryName, true)
    }

    useEffect(() => {
        getBGImage(countryName, false);
    }, [countryName]);

    return (
        <div style={{position: 'relative', width: '100%', height: '100vh'}}>
            {loading && <Image
                src="/images/Hero_2.jpeg"
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
                onLoad={() => {

                    setLoading(false)
                }}
                onError={handlePBError}
                className="relative z-0"
            />}

            <div style={{position: 'absolute', top: '0', left: '0', zIndex: '10'}}>
                <Shuffle fetch={getBGImage} country={countryName} width={50}/>
            </div>
        </div>
    );
};

export default BackgroundImage;