import {NextResponse} from "next/server";
import {Radio} from "@/app/types/ContextType";

export const GET = async (
    request: Request,
    { params }: { params: { country: string } }) => {
    try {
        const { country} = params;

        const response = await fetch(`https://radio.garden/api/search?q=${country}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            return NextResponse.json('Radio station not found', { status: 404 });
        }

        const { hits: { hits: data } } = await response.json();

        const filteredData = data
            .filter(hit => hit._source.type === 'channel')
            .map(hit => {
                const { subtitle, title, url } = hit._source;
                const radioId = url.split('/').pop();
                return {
                    radioId,
                    title,
                    subtitle
                }
            });

        const radioData: Radio = filteredData[Math.floor(Math.random() * filteredData.length)];

        return NextResponse.json({radioData}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: `${error}, Internal Server Error`}, {status: 500});
    }
}