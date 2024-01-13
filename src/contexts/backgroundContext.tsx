import React, { PropsWithChildren, createContext, useContext, useState } from 'react'

const BackgroundContext = createContext({ color: null, setBackground: null })

export const BackgroundProvider = ({ children }: PropsWithChildren) => {
    const [color, setBackground] = useState(null)


    return <BackgroundContext.Provider value={{ color, setBackground }}>
        {children}
    </BackgroundContext.Provider>
}

export const useBackground = () => useContext(BackgroundContext)
