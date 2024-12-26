import {Country} from "@/app/types/ContextType";

export default async function getBackgroundImage(country: Country, PBError: boolean) {
    const { countryName } = country;
    console.log('fetch', `/api/fetchBackgroundImage/${countryName}/${PBError}`);
    try {
        const response = await fetch(`/api/fetchBackgroundImage/${countryName}/${PBError}`);

        if (!response.ok) {
            return console.log('Background image not found');
        }
        return await response.json();

    } catch
        (error) {
        console.log({error: `${error}, Failed to fetch country id`});
    }
}