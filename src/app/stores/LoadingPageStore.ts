import { create } from 'zustand'
import {LoadingPageContext} from "@/app/types/ContextType";

export const useLoadingPageStore = create<LoadingPageContext>((set) => ({
    loadingPage: true,
    setLoadingPage: (loadingPage) => {
        set((state) => ({
            loadingPage: typeof loadingPage === 'function'
                ? (loadingPage as (prev: boolean) => boolean)(state.loadingPage)
                : loadingPage,
        }));
    },
}));