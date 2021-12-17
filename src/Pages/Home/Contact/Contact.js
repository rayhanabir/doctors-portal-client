import { Box, Button, TextareaAutosize, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import contactBg from '../../../images/bg.png';

const contactUsBanner = {
    background: `url(${contactBg})`,
    marginTop: "150px",
    backgroundColor: "rgba(115, 118, 147, 0.9)",
    backgroundBlendMode: "darken, luminosity",
    backgroundPosition: "center",
  };

const Contact = () => {
    return (
        <>
            <div style={contactUsBanner} className="customer_query">
            <Box sx={{mt:5}}>
                <Typography variant ='h6' style={{ color: "#46D6D8" }}>
                    Contact Us
                </Typography>
                <Typography style={{color:'white', marginBottom:'10px'}} variant='h4'>
                    Always Connect With Us
                </Typography>
            </Box>
            <Box>
                <form>
                    <TextField
                        style={{width:'50%', marginBottom:"20px", backgroundColor:'white'}}
                        label="Email"
                        id="outlined-size-small"
                        placeholder='Your Email'
                        size="small"
                        />
                        <br />
                    <TextField
                    style={{width:'50%', marginBottom:"20px",backgroundColor:'white'}}
                        label="Subject"
                        id="outlined-size-small"
                        placeholder='Your Query'
                        size="small"
                        />

                    <br />
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Your Message"
                        style={{ width: '50%' }}
                        />
                        <br />
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>

            </div>
        </>
    );
};

export default Contact;