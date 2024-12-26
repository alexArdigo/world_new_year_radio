'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import getBackgroundImage from "@/app/utils/getBackgroundImage.utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useCountryStore } from "@/app/stores/CountryStore";
import { useLoadingStore } from "@/app/stores/LoadingStore";
import Shuffle from "@/app/components/common/Shuffle";
import { useLoadingPageStore } from "@/app/stores/LoadingPageStore";
import { Country } from "@/app/types/ContextType";

const BackgroundImage = () => {
    const { country } = useCountryStore();
    const [imgURL, setImgURL] = useState<StaticImport | string>('');
    const { loading, setLoading } = useLoadingStore();
    const { setLoadingPage } = useLoadingPageStore();

    // Fetch background image, handle PBError internally
    const getBGImage = useCallback(async (country: Country) => {
        if (!country) return;

        try {
            const image = await getBackgroundImage(country, false);
            if (image?.data) {
                setImgURL(image.data);
                setLoadingPage(prev => !prev);  // Set page loading state
            }
        } catch (error) {
            console.error('Error fetching background image:', error);
            // If an error occurs, try fetching again with PBError as true
            const imageFallback = await getBackgroundImage(country, true);
            if (imageFallback?.data) {
                setImgURL(imageFallback.data);
                setLoadingPage(prev => !prev);  // Set page loading state
            }
        }
    }, [setLoadingPage]);

    // Initial image loading and periodic reload
    useEffect(() => {
        let mounted = true;

        const loadImage = async () => {
            if (mounted) {
                await getBGImage(country);
            }
        };

        loadImage();

        const interval = setInterval(() => {
            if (mounted) {
                loadImage();
            }
        }, 10 * 60 * 1000); // 10 minutes

        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, [getBGImage, country]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {loading && (
                <Image
                    src="/images/Hero_2.jpeg"
                    alt="Country image"
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    className="relative z-0"
                />
            )}
            {!imgURL ? (
                <p>Loading...</p>
            ) : (
                <Image
                    src={imgURL}
                    alt="Country image"
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    onLoad={() => setLoading(false)}
                    className="relative z-0"
                />
            )}

            <div style={{ position: 'absolute', top: '0', left: '0', zIndex: '10' }}>
                <Shuffle fetch={getBGImage} country={country} width={50} />
            </div>
        </div>
    );
};

export default BackgroundImage;
