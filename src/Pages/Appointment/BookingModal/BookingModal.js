import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper', 
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({open, handleClose, booking, date}) => {
    const {name, time} = booking;
    
    const handleBookSubmit= e =>{
        alert('submit successfully')
        e.preventDefault()
        handleClose()

    }
    return (
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
           {name}
          </Typography>
          <form onSubmit={handleBookSubmit}>
            <TextField
            disabled
            sx={{width:"90%", m:1}}
            id="outlined-size-small"
            defaultValue={time}
            size="small"
            />
            <TextField
            sx={{width:"90%", m:1}}
            id="outlined-size-small"
            defaultValue="Your Name"
            size="small"
            />
            <TextField
            sx={{width:"90%", m:1}}
            id="outlined-size-small"
            defaultValue="Phone Number"
            size="small"
            />
            <TextField
            sx={{width:"90%", m:1}}
            id="outlined-size-small"
            defaultValue="Your Email"
            size="small"
            />
            <TextField
            disabled
            sx={{width:"90%", m:1}}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
            />
            <Button type="submit" variant="contained">Submit</Button>
          </form>
          
        </Box>
      </Modal>
    );
};

export default BookingModal;