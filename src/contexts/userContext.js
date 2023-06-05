import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({}); // são estados para armazenarem dados de requisições

    // o useEffect tá simulando uma requisição http
    useEffect(() => {
        setData({ name: 'Johan', age: 21 }) // aqui seria passando o objeto que o back-end retorna na requisição
    }, [])

    return (
        <UserContext.Provider value={{ login, setLogin, data, setData }}>
            {children}
        </UserContext.Provider>
    )
}