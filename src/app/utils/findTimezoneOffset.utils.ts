export default async function findTimezoneOffset() {
    const offsetsWith11PM = [];
    const now = await new Date();

    // List of all time zones (from IANA Time Zone Database)
    const timeZones = Intl.supportedValuesOf("timeZone");

    for (const timeZone of timeZones) {
        const timeInZone = new Intl.DateTimeFormat("en-US", {
            timeZone,
            hour: "numeric",
            hour12: false // Use 24-hour format
        }).format(now);

        if (timeInZone === "23") {
            // Get the offset in minutes and convert it to seconds
            const offsetInMinutes = await now.toLocaleString("en-US", { timeZone, timeZoneName: "longOffset" })
                .match(/GMT([+-]\d{2}):(\d{2})/)

            if (offsetInMinutes) {
                const hours = parseInt(offsetInMinutes[1], 10);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const minutes = parseInt(offsetInMinutes[2], 10);
                const totalOffsetInSeconds = (hours * 60 + minutes) * 60; // Convert to seconds

                offsetsWith11PM.push(totalOffsetInSeconds);
            } else {
                offsetsWith11PM.push(0);
            }

        }
    }

    return offsetsWith11PM[0];
}

