import { Grid,Typography} from "@mui/material";
import { useAuthContext } from "../../components/contexts/AuthContext";


export default function PerfilEmpresario(){
    const { userEmpresario } = useAuthContext()
    const empresario = userEmpresario.user[0]
console.log(empresario);


    return(
        <Grid container>

        </Grid>
    )
}