import {createContext, useContext} from "react";
import {RadioContextType} from "@/app/types/ContextType";
import {useRadioStore} from "@/app/stores/RadioStore";

const contextValue: RadioContextType = {
    radio: {
        radioId: '',
        title: '',
        subtitle: '',
    },
    setRadio: () => {
    }
};

const RadioContext = createContext<RadioContextType>(contextValue);
export const useRadioContext = () => {
    const context = useContext(RadioContext);
    if (!context) {
        throw new Error('useRadioContext must be used within a RadioProvider');
    }
    return context;
};

export const RadioProvider = ({children}: { children: React.ReactNode }) => {
    const {radio, setRadio} = useRadioStore();

    return (
        <RadioContext.Provider value={{radio, setRadio}}>
            {children}
        </RadioContext.Provider>
    );
};