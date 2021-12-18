import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import loginImg from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        e.preventDefault();
        alert('submit data')
    }
    return (
        
            <Container>
                    
                <Grid container spacing={2} style={{display:'flex', alignItems:'center'}}>
                    
                    <Grid item xs={12} md={6}>
                    <Typography variant='h5'>
                        Login
                    </Typography>

                   <form onSubmit={handleLoginSubmit}>
                   <TextField 
                    sx={{width:"75%", m:1}}
                    id="standard-basic" 
                    type= 'email'
                    name='email'
                    label="Email"
                    onChange={handleOnChange}
                    variant="standard" />

                    <TextField 
                    sx={{width:"75%", m:1}}
                    id="standard-basic" 
                    label="Password"
                    name='password'
                    type='password'
                    onChange={handleOnChange}
                    variant="standard" />

                    <Button sx={{width:"75%"}} variant='contained' type="submit">Login</Button>
                    <NavLink to="/register">
                    <Button style={{textDecoration:'none'}} variant="text">New User?Please Register</Button>
                    </NavLink>
                   </form>
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <img style={{width:"100%"}} src={loginImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        
    );
};

export default Login;