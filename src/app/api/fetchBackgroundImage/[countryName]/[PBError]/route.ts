import {NextResponse} from "next/server";
import {buildQueryParams, getImageUrl, randomPicture} from "@/app/utils/functions";
import {UnsplashResult} from "@/app/types/ContextType";

export async function GET(
    request: Request,
    {params}: { params: { countryName: string, PBError: string } }
) {

    const {countryName, PBError} = params;
    const hasPBError = PBError === 'true';

    const baseURL = process.env.PIXELBAY_PATH;
    const apiKey = process.env.PIXELBAY_API_KEY;
    const queryParams = buildQueryParams({
        key: apiKey,
        q: countryName,
        image_type: 'photo',
        category: 'places',
    });

    const url = `${baseURL}?${queryParams}`;
    let hits;
    try {
        // Pixabay fetch

        if (!hasPBError) {
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

            hits = (await pixabayResponse.json())?.hits ?? [];

        }
        if (!hits?.length || hasPBError) {
            // Unsplash fallback
            const unsplashUrl = `${process.env.UNSPLASH_PATH}/search/photos?page=1&query=${countryName}&client_id=${process.env.UNSPLASH_CLIENT_ID}`;

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

            const { results }: { results: UnsplashResult[] } = await unsplashResponse.json();

            if (results.length === 0) {
                return NextResponse.json({ error: 'No images found' }, { status: 404 });
            }

            const data = getImageUrl(randomPicture(results)); // Get Unsplash image URL
            return NextResponse.json({ data }, { status: 200 });
        } else {
            const data = getImageUrl(randomPicture(hits)); // Get Pixabay image URL
            return NextResponse.json({ data }, { status: 200 });
        }


    } catch (error) {
        console.error('Image fetch error:', error);
        return NextResponse.json({
            error: 'Failed to fetch image',
            details: error instanceof Error ? error.message : String(error)
        }, {status: 500});
    }
}