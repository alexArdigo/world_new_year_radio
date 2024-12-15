export default async function getBackgroundImage(country: string) {

    try {
        const response = await fetch(`/api/fetchBackgroundImage/${country}`);

        if (!response.ok) {
            return console.log('Background image not found');
        }
        return await response.json();

    } catch
        (error) {
        console.log({error: `${error}, Failed to fetch country id`});
    }
}