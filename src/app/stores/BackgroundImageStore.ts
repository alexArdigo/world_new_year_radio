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
            const fetchData = await getBackgroundImage(country, false);

            if (fetchData) {
                set(() => ({
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