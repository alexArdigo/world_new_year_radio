import BackgroundImage from "@/app/components/ui/MainBackgroundImage";
import MainContent from "@/app/components/layout/MainContent";
import './globals.css';
import LoadingPage from "@/app/components/ui/LoadingPage";
import { Suspense } from 'react'

export default function Home() {

    return (
        <main>
            <div className="flex justify-center text-slate-50">
                <Suspense fallback={<LoadingPage />}>
                    <BackgroundImage/>
                    <MainContent/>
                </Suspense>


            </div>
        </main>
    );
}
