import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

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

const BookingModal = ({open, handleClose, booking}) => {
    const {name, time, space} = booking;
    
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
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
           {time}
          </Typography>
        </Box>
      </Modal>
    );
};

export default BookingModal;