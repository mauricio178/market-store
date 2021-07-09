import React, { createContext, useState, useContext } from 'react'

interface AsideBarContextData {
    turnOffAsideBar: () => void;
    turnOnAsideBar: () => void;
    activeSidebar: boolean;

}

interface AsideBarProviderProps {
    children: any;
}

export const AsideBarContext = createContext(({} as AsideBarContextData));

function AsideBarProvider({ children }: AsideBarProviderProps) {

    const [activeSidebar, setActiveSidebar] = useState<boolean>(false)

    function turnOnAsideBar() {
        setActiveSidebar(true)
    }

    function turnOffAsideBar() {
        setActiveSidebar(false)
    }

    return (
        <div>
            <AsideBarContext.Provider value={{ activeSidebar, turnOnAsideBar, turnOffAsideBar }}>
                {children}
            </AsideBarContext.Provider>
        </div>
    )
}

function useAsideBar() {
    const context = useContext(AsideBarContext)

    return (
        context
    )
}

export { AsideBarProvider, useAsideBar }