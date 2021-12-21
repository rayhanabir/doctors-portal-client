import { Button, CircularProgress, Container, Grid, Typography, Alert} from '@mui/material';
import React from 'react';
import loginImg from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { NavLink , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading, user, authError, googleSignIn} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        
        newLoginData[field] = value;
        
        setLoginData(newLoginData);
    }

    //google sign in

    const handleGoogleSignIn =()=>{
        googleSignIn(location, history)
    }

    const handleLoginSubmit = e =>{
        e.preventDefault();
        
       if(loginData.password !== loginData.password2){
           alert('password did not match')
           return;
       }
       registerUser(loginData.email, loginData.password, loginData.name, history)

        
        
    }
    return (
            <Container>
                    
                <Grid container spacing={2} style={{display:'flex', alignItems:'center'}}>
                    
                    <Grid item xs={12} md={6}>
                    <Typography variant='h5'>
                        Register
                    </Typography>

                   {!isLoading && 
                   <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    sx={{width:"75%", m:1}}
                    id="standard-basic" 
                    type= 'text'
                    name='name'
                    label="Name"
                    onBlur={handleOnBlur}
                    variant="standard" />

                    <TextField 
                    sx={{width:"75%", m:1}}
                    id="standard-basic" 
                    type= 'email'
                    name='email'
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard" />

                    <TextField 
                    sx={{width:"75%", m:1}}
                    id="standard-basic" 
                    label="Password"
                    name='password'
                    type='password'
                    onBlur={handleOnBlur}
                    variant="standard" />

                    <TextField 
                    sx={{width:"75%", m:1}}
                    id="standard-basic" 
                    label="ReType Your Password"
                    name='password2'
                    type='password'
                    onBlur={handleOnBlur}
                    variant="standard" />

                    <Button sx={{width:"75%"}} variant='contained' type="submit">Create Account</Button>
                    <NavLink to="/login">
                    <Button style={{textDecoration:'none'}} variant="text">Already Login?Please Login</Button>
                    </NavLink>
                   </form>}
                        <div>_____OR______</div>
                   <Button onClick={handleGoogleSignIn} sx={{width:"50%", mt:2}} variant='contained'>Google Sign In</Button>

                   {isLoading && <CircularProgress />}
                   {user?.email &&<Alert severity="success">User Created Succesfully</Alert>}
                   {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>



                    <Grid item xs={12}  md={6}>
                        <img style={{width:"100%"}} src={loginImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Register;