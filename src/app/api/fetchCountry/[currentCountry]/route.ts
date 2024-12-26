import findTimezoneOffset from "@/app/utils/findTimezoneOffset.utils";
import {getCountryByTimezone} from "@/app/utils/getCountryByTimezone.utils";
import {NextResponse} from "next/server";
import {Country} from "@/app/types/ContextType";

export async function GET(
    request: Request,
    context: { params: { currentCountry: string } }
) {
    const { params } = context;
    const { currentCountry } = params;

    try {
        const gmtOffset = await findTimezoneOffset();
        const data: Country = await getCountryByTimezone(gmtOffset, currentCountry);

        /*const data: Country = {
            countryCode: 'TR',
            countryName: 'Turkey',
            zoneName: 'Europe/Istanbul',
            gmtOffset: 10800,
            timestamp: 1721114400
        };*/


        return NextResponse.json({data}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: `${error}, Internal Server Error`}, {status: 500});
    }
}