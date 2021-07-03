import React, {createContext} from 'react'
import {useImages} from './useImages'

export const API_CONTEXT = createContext(null)


export const ContextProvider = ({children}) => {

    const {images, setSearch} = useImages()

    const context = {
        images,
        setSearch,
    }
    return (
        <API_CONTEXT.Provider value={context}>
            {children}
        </API_CONTEXT.Provider>
    )
}

