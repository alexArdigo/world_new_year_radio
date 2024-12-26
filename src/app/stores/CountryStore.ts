import { create } from 'zustand'
import {CountryStore} from "@/app/types/ContextType";
import {handleTranslate} from "@/app/utils/handleTranslate.utils";

export const useCountryStore = create<CountryStore>((set) => ({
    country: {
        countryCode: '',
        countryName: '',
        countryNameTranslated: '',
        zoneName: '',
        gmtOffset: 0,
        timestamp: 0
    },

    setCountry: (country) => {
        set({ country });
    },
    fetchCountries: async (country) => {
        try {
            //await new Promise(resolve => setTimeout(resolve, 3000));
            const fetchData = await fetch(`/api/fetchCountry/${country ? country : 'initial'}`);
            if (!fetchData.ok) {
                throw new Error(fetchData.statusText);
            }
            const {data} = await fetchData.json();

            if (data.countryName === 'Turkey') {
                data.countryName = 'Türkiye';
            }

            data.countryNameTranslated = await handleTranslate(data.countryName, 'pt-PT', true);

            set({ country: data })
        } catch (error) {
            console.error('Error fetching radios:', error);
        }
    }
}));