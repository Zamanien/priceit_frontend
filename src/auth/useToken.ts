import { useState } from "react";


export const useToken = () =>{
    const[ token, setTokenInternal ] = useState(() => {
        return localStorage.getItem('access_token');
    });

    const setToken = (newToken:string) => {
        localStorage.setItem('access_token', newToken)
        setTokenInternal(newToken)       
    }
    
    return [token, setToken] as const
}
