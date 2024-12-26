import {noRadioCountries} from "@/app/utils/noRadioCountries.utils";
import {Country} from "@/app/types/ContextType";

export async function getCountryByTimezone(gmtOffset: number, currentCountry: string) {

    try {
        const apiKey = process.env.TIMEZONEDB_API_KEY;

        const response = await fetch(`${process.env.TIMEZONEDB_API_URL}/list-time-zone?key=${apiKey}&format=json`);
        const data = await response.json();

        const filteredCountries = [...new Set(data.zones.filter((zone: Country) => {

            if (zone.countryCode === 'PT' && gmtOffset === -3600) {
                zone.countryName = 'Açores';
            }
            if (zone.countryCode === 'PS') {
                zone.countryName = 'Palestine'
            }
            if (zone.countryName === 'Cabo Verde') {
                zone.countryName = 'Cape Verde'
            }
            if (zone.countryName === 'Ivory Coast') {
                zone.countryName = "Côte d'Ivoire";
            }
            if (zone.countryName === 'Saint Pierre and Miquelon') {
                zone.countryName = "Saint-Pierre et Miquelon";
            }
            if (zone.countryName === 'Turkey') {
                zone.countryName = 'Türkiye'
            }

            return zone.countryName !== currentCountry
                && zone.gmtOffset === +gmtOffset
                && !noRadioCountries.includes(zone.countryCode)
        }))];

        return filteredCountries[Math.floor(Math.random() * filteredCountries.length)];
    } catch (error) {
        console.log({ error: `${error}, Failed to fetch timezone data` });
    }
}
