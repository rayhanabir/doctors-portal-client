import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background:`url(${bg})`
}
const verticalCenter = {
    display:"flex",
    alignItems:"center",
    height:400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={{...verticalCenter,textAlign:'left'}} item xs={12} md={6}>
            <Box>
            <Typography variant='h3'>
                Your New Smile <br />
                Starts Here

            </Typography>
            <Typography variant='h6' sx={{fontSize:14, my:4, color:'gray', fontWeight:300}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora similique praesentium, libero debitis deleniti.

            </Typography>
            <Button variant="contained">Get Appointment</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter} >
            <img style={{width:350}} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;