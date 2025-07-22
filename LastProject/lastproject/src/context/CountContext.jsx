import { createContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(prev => prev + 1);
    }

    return (
        <CountContext.Provider value={{count, addCount}}>
            {children}
        </CountContext.Provider>
    )
}