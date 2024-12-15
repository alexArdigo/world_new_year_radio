import {NextResponse} from "next/server";

export default async function getRadio(radioID) {

    const response = await fetch(`${process.env.RADIO_GARDEN_PATH}/ara/content/page/${radioID}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        return NextResponse.json('Radio station not found', { status: 404 });
    }
    const { data: { content: data } } = await response.json();

    return data[0].items
}
