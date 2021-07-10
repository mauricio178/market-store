import React, { createContext, useState, useContext } from 'react'

interface UserMenuContextData {
    turnOffUserMenu: () => void;
    turnOnUserMenu: () => void;
    activeUserMenu: boolean;

}

interface UserMenuProviderProps {
    children: any;
}

export const UserMenuContext = createContext(({} as UserMenuContextData));

function UserMenuProvider({ children }: UserMenuProviderProps) {

    const [activeUserMenu, setActiveUserMenu] = useState<boolean>(false)

    function turnOnUserMenu() {
        setActiveUserMenu(true)
    }

    function turnOffUserMenu() {
        setActiveUserMenu(false)
    }

    return (
        <div>
            <UserMenuContext.Provider value={{ activeUserMenu, turnOnUserMenu, turnOffUserMenu }}>
                {children}
            </UserMenuContext.Provider>
        </div>
    )
}

function useUserMenu() {
    const context = useContext(UserMenuContext)

    return (
        context
    )
}

export { UserMenuProvider, useUserMenu }