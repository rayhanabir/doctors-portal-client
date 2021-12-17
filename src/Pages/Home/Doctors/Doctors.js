import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Mrdoctor from '../../../images/doctor-small.png';

const Doctors = () => {
    return (
        <Container sx={{mt:5}}>
            <Typography variant='h6' sx={{my:3}} style={{color: "#46D6D8"}}>
                Doctors
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                   <img style={{width:'300px'}} src={Mrdoctor} alt="" />
                   <Typography>
                        Dr. Caudi <br />
                        +776654993300
                    </Typography> 
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img style={{width:'300px'}} src={Mrdoctor} alt="" /> 
                    <Typography>
                        Dr. Caudi <br />
                        +776654993388
                    </Typography> 
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img style={{width:'300px'}} src={Mrdoctor} alt="" /> 
                    <Typography>
                        Dr. Caudi <br />
                        +776654993333
                    </Typography> 
                </Grid>
            </Grid>
        </Container>
    );
};

export default Doctors;