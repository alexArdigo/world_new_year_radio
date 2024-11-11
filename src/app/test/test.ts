export default function startCountdownToNextHour() {
    const now = new Date();

    // Calculate the time remaining until the next hour
    const nextHour = new Date();
    nextHour.setHours(now.getHours() + 1, 0, 0, 0); // Set to the next hour at 00 minutes, 00 seconds
    const timeToNextHour = nextHour.getTime() - now.getTime(); // Time in milliseconds

    let totalTime = Math.floor(timeToNextHour / 1000); // Convert to seconds

    const countdown = setInterval(() => {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;


        if (totalTime <= 0) {
            clearInterval(countdown);
            startCountdownToNextHour(); // Restart the countdown for the next hour
        }
        totalTime--;
    }, 1000);
    return countdown
}


