import React, { createContext, useState } from 'react';


export const LoaderContext = createContext();
export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading, "hhhhhhhhhhh")
    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderContext;