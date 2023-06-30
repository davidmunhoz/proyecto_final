import {useState} from "react"
import { Grid, TextField, Typography, Button } from '@mui/material';


export default function Register(){
const [body, setBody] = useState({name:"", email:"", password:""});



function onSubmit(e){
    e.preventDefault()
    console.log(body)
}


function handleChange(e){

}

    return(
        <form onSubmit={onSubmit}>
<Grid container>
    <Grid item xs={12}>
        <Typography variant='h3'>REGISTER ACCOUNT</Typography>
    </Grid>

    <Grid item xs={12}>
        <TextField label="Name" type='name' name="name" fullWidth 
        value={body.name} onChange={handleChange}/>
    </Grid>

    <Grid item xs={12}>
    <TextField label="Email" type='email'  name="email" fullWidth
     value={body.email} onChange={handleChange}/>
    </Grid>

    <Grid item xs={12}>
    <TextField label="Password" type='password' name="password" fullWidth
     value={body.password} onChange={handleChange}/>
    </Grid>

    <Grid item xs={12}>
        <Button variant='contained' type="submit" fullWidth>Register</Button>
    </Grid>
</Grid>
</form>
    )
}