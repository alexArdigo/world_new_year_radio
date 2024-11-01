import React from 'react';
import Header from "@/app/components/header/page";
import CountdownCard from "@/app/components/countdownCard/page";
import RadioCard from "@/app/components/radioCard/page";


const MainContent = () => {

    return (
        <div
            className={'flex items-center flex-col absolute top-40'}
        >
            <Header />
            <CountdownCard />
            <RadioCard />
        </div>
    );
};

export default MainContent;