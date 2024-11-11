export async function getCountryByTimezone(gmtOffset, currentCountry) {

    try {
        const apiKey = process.env.TIMEZONEDB_API_KEY;

        const response = await fetch(`${process.env.TIMEZONEDB_API_URL}/list-time-zone?key=${apiKey}&format=json`);
        const data = await response.json();

        const filteredCountries = [...new Set(data.zones.filter(zone => {
            if (zone.countryName === 'Portugal' && gmtOffset === -3600) {
                zone.countryName = 'Açores';
            }

            return zone.countryName !== currentCountry
                && zone.gmtOffset === +gmtOffset
        }))];

        return filteredCountries[Math.floor(Math.random() * filteredCountries.length)];
    } catch (error) {
        console.log({ error: `${error}, Failed to fetch timezone data` });
    }
}
