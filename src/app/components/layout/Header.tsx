import CountryNameDisplay from "@/app/components/common/CountryNameDisplay";
import Loading from "@/app/components/ui/loading";
import Shuffle from "@/app/components/common/Shuffle";
import {useCountryStore} from "@/app/stores/CountryStore";
import {HeaderProps} from "@/app/types/ContextType";


const Header = ({fetchCountries}: HeaderProps) => {
    const { country} = useCountryStore()
    const { countryNameTranslated } = country

    return (
        <header className={'flex flex-col z-3 w-full h-full items-center mb-14'} style={{ textShadow: '0 2px 2px rgb(3, 3, 3)' }}>
            <div className={'flex h-24 items-start '}>
                {!countryNameTranslated ?
                    <Loading/>
                    : <div className={'flex items-start'}>
                        <CountryNameDisplay
                            countryName={countryNameTranslated}
                    />
                        <Shuffle fetch={fetchCountries} width={50} country={country} />
                    </div>
                }
            </div>
            <h2 className={'pr-5'}>dá as boas-vindas a 2025 em</h2>

        </header>
    );
};

export default Header;
