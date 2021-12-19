import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

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

const BookingModal = ({open, handleClose, booking, date,setBookingSuccess}) => {
    const {name, time} = booking;
    const {user} = useAuth()
    const initialInfo = {patientName:user.displayName, email:user.email, phone:'' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)
    
    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo}
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }
    const handleBookSubmit= e =>{
      e.preventDefault()
      //collect data
      const appointment ={
        ...bookingInfo,
        serviceName:name,
        time,
        date:date.toLocaleDateString()
      }
      //send data to backend or server side
      fetch('http://localhost:5000/appointments', {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(appointment)
      })
      .then(res =>res.json())
      .then(data =>{
        if(data.insertedId){
          setBookingSuccess(true)
          handleClose()
        }
      })
      

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
            name="patientName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            size="small"
            />
            <TextField
            sx={{width:"90%", m:1}}
            id="outlined-size-small"
            name="phone number"
            onBlur={handleOnBlur}
            defaultValue="Phone Number"
            size="small"
            />
            <TextField
            sx={{width:"90%", m:1}}
            id="outlined-size-small"
            name="email"
            onBlur={handleOnBlur}
            defaultValue={user.email}
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