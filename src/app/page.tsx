
import BackgroundImage from "@/app/components/ui/MainBackgroundImage";
import MainContent from "@/app/components/layout/MainContent";
import './globals.css';

export default function Home() {
    return (
        <main >
            <div className="flex justify-center text-slate-50">
                <BackgroundImage />
                <MainContent />
            </div>
        </main>
    );
}
