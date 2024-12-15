import { create } from 'zustand'
import {RadioStore} from "@/app/types/ContextType";

export const useRadioStore = create<RadioStore>((set) => ({
    radio: {
        radioId: '',
        title: '',
        subtitle: '',
    },

    setRadio: (radio) => {
        set({ radio });
    },
    fetchRadios: async (country) => {
        try {
            const countryString = encodeURIComponent(JSON.stringify(country));
            const fetchData = await fetch(`/api/countryRadios/${countryString}`);

            if (!fetchData.ok) {
                throw new Error(fetchData.statusText);
            }

            const { radioData, radioDataZone } = await fetchData.json();
            set({ radio: radioData || radioDataZone });
        } catch (error) {
            console.error('Error fetching radios:', error);
        }
    }
}));