
export default async function getZoneID(zoneName: string) {
    try {
        const zone = zoneName.split('/').pop();

        const response = await fetch(`${process.env.RADIO_GARDEN_PATH}/search?q=${zone}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            return console.log('Radio station not found');
        }
        const {hits: {hits: data}} = await response.json();

        return data[0]._source.url.split('/').pop();
    } catch (error) {
        console.log({error: `${error}, Failed to fetch zone id`});
    }
}
