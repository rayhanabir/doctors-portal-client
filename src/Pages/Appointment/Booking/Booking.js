import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking}) => {
    const {name, space, time} = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
           <>
            <Grid item xs={12} sm={6} md={4}> 
                <Paper sx={{py:5}} elevation={5}>
                    <Typography variant='h5' sx={{color:"info.main", fontWeight:500}}>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        {time}
                    </Typography>
                    <Typography>
                        {space} space Available
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal 
            open={open}
            handleClose={handleClose}
            booking = {booking}
            >
            </BookingModal>
           </>
    );
};

export default Booking;