import { NextResponse } from "next/server";
import { buildQueryParams, randomPicture } from "@/app/utils/functions";

export async function GET(
    request: Request,
    { params }: { params: { country: string } }
) {
    const { country } = params;

    const baseURL = process.env.PIXELBAY_PATH;
    const apiKey = process.env.PIXELBAY_API_KEY;
    const queryParams = buildQueryParams({
        key: apiKey,
        q: country,
        image_type: 'photo',
        category: 'places',
    });

    const url = `${baseURL}?${queryParams}`;

    try {
        // Pixabay fetch
        const pixabayResponse = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!pixabayResponse.ok) {
            console.error('Pixabay request failed:', pixabayResponse.statusText);
            throw new Error('Pixabay request failed');
        }

        const { hits } = await pixabayResponse.json();

        if (hits.length === 0) {
            // Unsplash fallback
            const unsplashUrl = `${process.env.UNSPLASH_PATH}/search/photos?page=1&query=${country}&client_id=${process.env.UNSPLASH_CLIENT_ID}`;

            const unsplashResponse = await fetch(unsplashUrl, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!unsplashResponse.ok) {
                console.error('Unsplash request failed:', unsplashResponse.statusText);
                throw new Error('Unsplash request failed');
            }

            const { results } = await unsplashResponse.json();

            if (results.length === 0) {
                return NextResponse.json({ error: 'No images found' }, { status: 404 });
            }

            const data = (await randomPicture(results)).urls.raw;

            return NextResponse.json({ data }, { status: 200 });

        } else {

            const data = (await randomPicture(hits)).largeImageURL;

            return NextResponse.json({ data }, { status: 200 });
        }

    } catch (error) {
        console.error('Image fetch error:', error);
        return NextResponse.json({
            error: 'Failed to fetch image',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}