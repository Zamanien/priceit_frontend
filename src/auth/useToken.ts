import { useState } from "react";
import {useCookies} from 'react-cookie'

export const useToken = () =>{
    const [, setCookie] = useCookies(['acces_token'])
    const[ token, setTokenInternal ] = useState(() => {
        return localStorage.getItem('access_token');
    });

    const setToken = (newToken:string) => {
        localStorage.setItem('access_token', newToken)
        setTokenInternal(newToken)
        setCookie("acces_token", newToken);
       
    }
    
    return [token, setToken] as const
}
