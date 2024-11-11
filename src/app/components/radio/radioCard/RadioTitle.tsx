import {useContext} from "react";
import {CountryContext} from "@/app/providers/CountryContext";

const RadioTitle = () => {
    const useCountryContext = () => useContext(CountryContext);
    const { country: {countryName}} = useCountryContext()
    const radio = 'J1 Radio Gold'
    const city = 'Tokyo'

    return (
        <div className={'flex flex-col z-3 w-full h-32 items-center justify-center'}>
            <h3>{radio}</h3>
            <p className={'text-2xl'}>{city}, {countryName}</p>
        </div>
    );
};

export default RadioTitle;