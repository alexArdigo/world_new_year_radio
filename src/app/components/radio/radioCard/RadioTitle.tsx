'use client'

import {useRadioStore} from "@/app/stores/RadioStore";

const RadioTitle = () => {
    const { radio: {title, subtitle} } = useRadioStore();

    return (
        <div className={'flex flex-col z-3 w-full h-32 items-center justify-center'}>
            <h3 className={'text-nowrap'}>{title}</h3>
            <p className={'text-2xl'}>{subtitle}</p>
        </div>
    );
};

export default RadioTitle;