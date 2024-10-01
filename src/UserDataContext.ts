import { createContext } from 'react';

interface ContextType {
    dataUser : string,
    setUser? : (param:string) => void
}

const defaultValue:ContextType={
    dataUser : "",
    setUser: undefined
}

export const UserDataContext = createContext<ContextType>(defaultValue);