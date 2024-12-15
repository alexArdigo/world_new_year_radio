import { create } from 'zustand'
import {LoadingContext} from "@/app/types/ContextType";

export const useLoadingStore = create<LoadingContext>((set) => ({
    loading: true,
    setLoading: (loading) => {
        set({ loading });
    }
}));