import {create} from 'zustand';
import {BackgroundImageStore} from "@/app/types/ContextType";
import getBackgroundImage from "@/app/utils/getBackgroundImage.utils";

export const useBackgroundImageStore = create<BackgroundImageStore>((set) => ({
    backgroundImage: {
        data: ''
    },

    setBackgroundImage: (backgroundImage) => {
        set({backgroundImage});
    },
    fetchBackgroundImage: async (country) => {
        try {
            const fetchData = await getBackgroundImage(country);

            if (fetchData) {
                set(state => ({
                    backgroundImage: {
                        data: fetchData.data
                    }
                }));
            }
        } catch (error) {
            console.error('Error fetching radios:', error);
        }
    }
}));