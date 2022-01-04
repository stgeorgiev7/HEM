import { createContext, useState } from "react";

export const AppContext = createContext(); // suzdawame context, w razli4nite komponenti go dostypwame s useContext() hook

export default function AppContextProvider({children}) { 
    const [context, setContext] = useState({
        refresh: () => {},
        rooms: [],
        devices: [],
        thermostats: [],
        properties: [],
        scenes: []
    });

    return(
        <AppContext.Provider value={{context}}>
            {children}
        </AppContext.Provider>
    )
};