import { NextRequest, NextResponse } from 'next/server';
import { TranslationServiceClient } from '@google-cloud/translate';
import {countryLanguages} from "@/app/utils/languageCodes.utils";

const client = new TranslationServiceClient({
    credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_CONTENT || '{}'),
});

export async function POST(request: NextRequest) {
    const { text, target } = await request.json();
    const projectId = process.env.GOOGLE_PROJECT_ID!;
    const location = 'global'; // Can be region-specific, e.g., 'us-central1'


    const targetLanguage = countryLanguages[target as keyof typeof countryLanguages] ?? 'pt-PT';

    const translateRequest  = {
        parent: `projects/${projectId}/locations/${location}`,
        contents: [text],
        sourceLanguageCode: 'en',
        targetLanguageCode: targetLanguage,
    };

    if (!text || !target) {
        return NextResponse.json({ error: 'Text and target are required' }, { status: 400 }) ?? text;
    }

    try {
        const [translation] = await client.translateText(translateRequest );

        const translationText = translation?.translations?.[0]?.translatedText ?? '';
        return NextResponse.json({ translationText });
    } catch (error) {
        console.error('Error translating:', error);
        return NextResponse.json({ translationText: text });
    }
}
