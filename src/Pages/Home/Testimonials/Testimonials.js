import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import React from 'react';
import peopleOne from '../../../images/people-1.png';
import peopleTwo from '../../../images/people-2.png';
import peopleThree from '../../../images/people-3.png';

const Testimonials = () => {
    return (
        <Container sx={{mt:3}}>
            <Box sx={{my:5}} style={{textAlign:"left"}}>
                <Typography variant='h6'style={{color:'#46D6D8'}}>
                    TESTIMONIALS
                </Typography>
                <Typography variant='h4'>
                    What's Our Patients <br /> says 
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}> 
                    <Paper sx={{p:2}} elevation={5}>
                        <Typography sx={{fontWeight:300}} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque doloremque aut tempore tenetur labore eos quos reprehenderit eaque tempora consequuntur?
                        </Typography>
                        <Box sx={{mt:2}} style={{display:"flex", alignItems:'center', justifyContent:'space-around'}}>
                            <Box>
                                <img style={{width:"80px"}} src={peopleOne} alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h5' style={{color:'#46D6D8'}}>
                                    Winson Herry
                                </Typography>
                                <Typography sx={{fontWeight:300}} variant='h6'>
                                   California
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}> 
                    <Paper sx={{p:2}} elevation={5}>
                        <Typography sx={{fontWeight:300}} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque doloremque aut tempore tenetur labore eos quos reprehenderit eaque tempora consequuntur? 
                        </Typography> 
                        <Box sx={{mt:2}} style={{display:"flex", alignItems:'center', justifyContent:'space-around'}}>
                            <Box>
                                <img style={{width:"80px"}} src={peopleTwo} alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h5' style={{color:'#46D6D8'}}>
                                    Ema Watson
                                </Typography>
                                <Typography sx={{fontWeight:300}} variant='h6'>
                                   New York
                                </Typography>
                            </Box>
                        </Box>  
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}> 
                    <Paper sx={{p:2}} elevation={5}>
                        <Typography sx={{fontWeight:300}} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque doloremque aut tempore tenetur labore eos quos reprehenderit eaque tempora consequuntur? 
                        </Typography>
                        <Box sx={{mt:2}} style={{display:"flex", alignItems:'center', justifyContent:'space-around'}}>
                            <Box>
                                <img style={{width:"80px"}} src={peopleThree} alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h5' style={{color:'#46D6D8'}}>
                                    Hilary Clinton
                                </Typography>
                                <Typography sx={{fontWeight:300}} variant='h6'>
                                   Michigan
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonials;