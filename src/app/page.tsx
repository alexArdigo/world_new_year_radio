'use client'
import BackgroundImage from "@/app/components/mainBackgroundImage/page";
import { Zen_Kaku_Gothic_New } from '@next/font/google';
import MainContent from "@/app/components/mainContent/page";
// Call the font loader in the module scope and store it in a constant
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin']
});

export default function Home() {
    return (
        <main className={zenKakuGothicNew.className}>
            <div className="flex justify-center text-slate-50">
                <BackgroundImage />
                <MainContent />
            </div>
        </main>
    );
}
