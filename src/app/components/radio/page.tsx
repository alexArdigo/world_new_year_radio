import RadioTitle from "@/app/components/radioTitle/page";
import RadioController from "@/app/components/radioController/page";
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