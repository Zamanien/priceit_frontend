import { useOutletContext } from "react-router-dom";
import { User } from "../../types";
import { Container } from "@mui/material/";
export function Profile(){
    const user:User = useOutletContext();
    return(
        <>
        <Container maxWidth="lg" >
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        </Container>
        
        </>
    )
}