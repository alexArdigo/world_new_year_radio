
export async function getNextHour() {
    const now = new Date();
    const nextHour = new Date(now);
    try {
        nextHour.setHours(now.getHours() + 1, 0, 0, 0); // Set to the next hour
        return new Date(nextHour).getTime();

    } catch (error) {
        console.error('Error in API endpoint function:', error);
    }
}