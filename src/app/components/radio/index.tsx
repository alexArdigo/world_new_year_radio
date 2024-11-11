import RadioTitle from "@/app/components/radio/radioCard/RadioTitle";
import RadioController from "@/app/components/radio/radioController";
import React from "react";

const Radio = () => {

    return (
        <div className={'flex flex-col absolute w-4/5 '}>
            <RadioTitle />
            <RadioController />
        </div>
    );
};

export default Radio;