import { createContext, useState } from "react";

export const FormContext = createContext()

export const FormContextProvider = ({ children }) => {

    const [formContext, setFormContext] = useState(false);

    const value = { formContext , setFormContext };

    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    )
}