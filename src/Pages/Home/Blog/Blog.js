import { Box, Container, Grid, Typography,Paper } from '@mui/material';
import React from 'react';
import BlogPeople from '../../../images/people-1.png';

const Blog = () => {
    return (
        <Container sx={{mt:5}}>
            <Box sx={{mb:5}}>
                <Typography style={{ color: "#46D6D8" }} variant='h6'>
                    Our Blogs
                </Typography>
                <Typography variant='h4'>
                    From Our Blog News
                </Typography>

            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{backgroundColor:"#95E2E3"}} elevation={5} sx={{p:2}} >
                            <Box>
                                <Typography style={{textAlign:'left', color:"white"}} variant='h5'>
                                    Rashed Kabir
                                </Typography>
                                <Typography style={{textAlign:'left', color:'white'}} variant='h6'>
                                   22 April 2022
                                </Typography>
                            </Box>
                        <Typography style={{textAlign:'left', margin:'70px 0', color:'white'}} variant='h5'>
                            Check at least a Doctor in a year for Your Teeth
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={5} sx={{p:2}} >
                        <Box style={{display:'flex', alignItems:"center"}}>
                            <Box>
                                <img style={{width:"70px", marginRight:'25px'}} src={BlogPeople} alt="" />
                            </Box>
                            <Box>
                                <Typography style={{textAlign:'left'}} variant='h5'>
                                    Dr.Caudi
                                </Typography>
                                <Typography style={{textAlign:'left'}} variant='h6'>
                                   23 April 2021 
                                </Typography>
                            </Box>
                        </Box>
                        <Typography style={{textAlign:'left'}} variant='h5'>
                            Two times of brush in a day can <br />
                            Keep you Healthy
                        </Typography>
                        <Typography style={{textAlign:'left', color:'gray'}} sx={{fontWeight:300}} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga mollitia, iure fugit quo dignissimos beatae.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={5} sx={{p:2}} >
                        <Box style={{display:'flex', alignItems:"center"}}>
                            <Box>
                                <img style={{width:"70px", marginRight:'25px'}} src={BlogPeople} alt="" />
                            </Box>
                            <Box>
                                <Typography style={{textAlign:'left'}} variant='h5'>
                                    Dr.Caudi
                                </Typography>
                                <Typography style={{textAlign:'left'}} variant='h6'>
                                   23 April 2021 
                                </Typography>
                            </Box>
                        </Box>
                        <Typography style={{textAlign:'left'}} variant='h5'>
                            Two times of brush in a day can <br />
                            Keep you Healthy
                        </Typography>
                        <Typography style={{textAlign:'left', color:'gray'}} sx={{fontWeight:300}} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga mollitia, iure fugit quo dignissimos beatae.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Blog;    