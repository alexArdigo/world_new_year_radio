'use client'
import React from 'react';
import {useLoadingPageStore} from "@/app/stores/LoadingPageStore";

const LoadingPage = () => {
    const { loadingPage } = useLoadingPageStore()
    if (loadingPage) {
        return (
            <main className="bg-white">
                <div className="flex justify-center text-slate-50">
                    World New Year Radio
                </div>
            </main>
        );
    }

};

export default LoadingPage;