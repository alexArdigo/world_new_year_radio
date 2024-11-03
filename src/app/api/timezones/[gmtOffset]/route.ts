import { NextResponse } from 'next/server';
//import {config} from "dotenv";


export async function GET(
    request: Request,
    { params }: { params: { gmtOffset: number } }
) {


    const gmtOffset = params.gmtOffset;

    if (!gmtOffset) {
        return NextResponse.json({ error: 'GMT offset is required' }, { status: 400 });
    }

    try {
        const apiKey = process.env.TIMEZONEDB_API_KEY;

        const response = await fetch(`${process.env.TIMEZONEDB_API_URL}/list-time-zone?key=${apiKey}&format=json`);
        const data = await response.json();

        const filteredCountries = data.zones.filter(zone => zone.gmtOffset === +gmtOffset);
        console.log(filteredCountries);
        return NextResponse.json(filteredCountries, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `${error}, Failed to fetch timezone data` }, { status: 500 });
    }
}
