import {createContext} from "react";
import {RadioContextType} from "@/app/types/ContextType";

const contextValue: RadioContextType = {
    radio: {
        radioId: '',
        title: '',
        subtitle: '',
    },
    setRadio: () => {}
};



export const RadioContext = createContext<RadioContextType>(contextValue);

