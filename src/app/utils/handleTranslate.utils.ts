export const handleTranslate = ( text: string, target: string, isCountryName: boolean = false ) => {
    const fetchData = async () => {
        const response = await fetch('/api/translate', {
            method: 'POST',
            body: JSON.stringify({ text, target, isCountryName }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            console.log('Network response was not ok');
        }

        const data = await response.json();

        return data.translationText;
    }
    return fetchData();
};