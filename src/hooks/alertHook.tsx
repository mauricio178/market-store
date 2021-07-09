import React, { createContext, useState, useContext } from 'react'

interface AlertContextData {
    turnOffAlert: () => void;
    turnOnAlert: (text: string, time: number) => void;
    activeAlert: boolean;
    textAlert?: string;
}

interface AlertProviderProps {
    children: any;
}

export const AlertContext = createContext(({} as AlertContextData));

function AlertProvider({ children }: AlertProviderProps) {

    const [textAlert, setTextAlert] = useState<string>()
    const [activeAlert, setActiveAlert] = useState<boolean>(false)

    let temp: any;

    function turnOnAlert(text: string, time: number) {
        setTextAlert(text)
        setActiveAlert(true)

        temp = setTimeout(() => {
            setActiveAlert(false)
        }, 5000)
    }

    function turnOffAlert() {
        temp.clearTimeout()
        setActiveAlert(false)
    }

    function stopTemp() {
        temp.clearTimeout();
    }

    return (
        <div>
            <AlertContext.Provider value={{ activeAlert, turnOnAlert, textAlert, turnOffAlert }}>
                {children}
            </AlertContext.Provider>
        </div>
    )
}

function useAlert() {
    const context = useContext(AlertContext)

    return (
        context
    )
}

export { AlertProvider, useAlert }