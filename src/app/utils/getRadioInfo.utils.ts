
export default async function getRadioInfo(country: string, countryNameTranslated: string) {
    console.log('country', country);
    if (country === 'Açores') {
        countryNameTranslated = 'Azores';
    }
    if (country === 'Turkey') {
        country = 'Türkiye';
        countryNameTranslated = 'Türkiye';
    }
    if (country === 'Reunion') {
        countryNameTranslated = 'Réunion';
    }


    try {
        const fullUrl = `${process.env.RADIO_GARDEN_PATH}/search?q=${country}`;

        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        });

        if (!response.ok) {
            return console.log('Radio station not found');
        }

        const {hits: {hits: data}} = await response.json();

        const filteredData = await data.filter(s => {
            return s._source.type === 'channel'
                && s._source.page.country.title.toLowerCase() === country.toLowerCase()
        });

        const randomRadio = filteredData[Math.floor(Math.random() * filteredData.length)];

        return {
            radioId: randomRadio._source.page.url.split('/').pop(),
            title: randomRadio._source.page.title,
            subtitle: `${randomRadio._source.page.subtitle.split(',')[0]}, ${countryNameTranslated}`,
        }

    } catch
        (error)
    {
        console.log({error: `${error}, Failed to fetch country id`});
    }
}