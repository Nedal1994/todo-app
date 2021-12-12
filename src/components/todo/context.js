import React from 'react'
import { useState } from 'react'

export const ThemeContext = React.createContext() 

export default function context(props) {
    const state ={
        itemsPage:2,
        sort:'hard',
        showComplete:true
    }
    return (
        <div>
            <ThemeContext.Provider value={state}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}
