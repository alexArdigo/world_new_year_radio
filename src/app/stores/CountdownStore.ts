import { create } from 'zustand'
import {CountdownContext} from "@/app/types/ContextType";

export const useCountdownStore = create<CountdownContext>((set) => ({
    countdown: 0,
    setCountdown: (countdown) => {
        set({ countdown });
    }
}));