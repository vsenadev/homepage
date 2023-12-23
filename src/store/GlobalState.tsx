import {createContext, useState} from 'react'

export const GlobalContext = createContext({})

export function RoutesProvider({children}: any) {
    const [pages, setPages] = useState();
    const [asideNews, setAsideNews] = useState();

    return (
        <GlobalContext.Provider value={{ pages, setPages, asideNews, setAsideNews }}>
            {children}
        </GlobalContext.Provider>
    )
}