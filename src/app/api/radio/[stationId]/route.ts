export async function GET(
    request: Request,
    { params }: { params: { stationId: string } }
) {
    try {
        const stationId = params.stationId;
        const response = await fetch(
            `https://radio.garden/api/ara/content/listen/${stationId}/channel.mp3`,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            }
        );

        if (!response.ok) {
            return Response.json(
                { error: 'Radio station not found' },
                { status: response.status }
            );
        }

        // Instead of loading the entire stream, we'll pipe it through
        const { readable, writable } = new TransformStream();
        await response.body?.pipeTo(writable);

        return new Response(readable, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'Transfer-Encoding': 'chunked',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache',
                'Access-Control-Allow-Origin': '*'
            }
        });

    } catch (error) {
        console.error('Error fetching radio stream:', error);
        return Response.json(
            { error: 'Failed to fetch radio stream' },
            { status: 500 }
        );
    }
}