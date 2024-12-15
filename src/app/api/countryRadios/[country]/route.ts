import {NextResponse} from "next/server";
import {Radio} from "@/app/types/ContextType";
import getRadioInfo from "@/app/utils/getRadioInfo.utils";
import getRadio from "@/app/utils/getRadio.utils";
import getZoneID from "@/app/utils/getZoneID.utils";

export const GET = async (
    request: Request,
    { params }: { params: { country: string } }) => {
    try {

        const {country} = params;
        const {countryName, zoneName} = await JSON.parse(country);


        const radioData = await getRadioInfo(countryName);

        if (!radioData) {
            const zoneID = await getZoneID(zoneName)

            const radio = await getRadio(zoneID);

            const filteredData = radio
                .filter(({page}) => page.type === 'channel' && !page.title.includes('Sertanejo' || 'Sertaneja'))
                .map(({page}) => {

                    const { title, country, place: cityName, url } = page;
                    const radioId = url.split('/').pop();
                    const subtitle = `${cityName.title}, ${country.title}`

                    return {
                        radioId,
                        title,
                        subtitle
                    }
                });

            const radioDataZone: Radio = filteredData[Math.floor(Math.random() * filteredData.length)];

            return NextResponse.json({radioDataZone}, {status: 200});
        }



        return NextResponse.json({radioData}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: `${error}, Internal Server Error`}, {status: 500});
    }
}