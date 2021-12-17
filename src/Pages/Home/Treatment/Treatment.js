import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import treatment from '../../../images/treatment.png';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Treatment = () => {
    return (
    <Container sx={{mt:4}}>
        <Grid container spacing={2}> 
            <Grid item xs={12} md={6}>
                <img style={{width:"500px"}} src={treatment} alt="treatment" />
            </Grid>
            <Grid item xs={12} md={6} style={{display:"flex", alignItems:"center"}}>
                <Box style={{textAlign:"left"}}>
                <Typography variant="h4">
                    Exceptional Dental Care, <br />
                    on Your Terms
                </Typography>
                <Typography variant="h6" sx={{my:3, fontWeight:300}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae ratione ea eum amet facilis tempora explicabo rerum reiciendis rem!
                </Typography>
                <Button variant="contained">
                    Learn More
                </Button>
                </Box>
            </Grid>
        </Grid>

    </Container>

    );
};

export default Treatment;