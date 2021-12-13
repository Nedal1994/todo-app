import { React } from 'react'

export const SettingsContext = React.createContext()

export default function settings(props) {
    const state={
        display:false,
        numberOfItems:5,
        sort:'item'
    }

    return (
        <div>
            <SettingsContext.Provider value={state}>
                {props.children}
            </SettingsContext.Provider>
        </div>
    )
}
