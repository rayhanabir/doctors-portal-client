import { Typography } from '@mui/material';
import React,{useEffect, useState} from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Appointments = ({date}) => {
    const [appointments, setAppointments] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data));
    },[date])

    return (
        <div>
            <Typography variant='h4'>
                Appointments : {appointments.length}
            </Typography>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Service Name</TableCell>
            <TableCell align="left">time</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{row.patientName}</TableCell>
              <TableCell align="left">{row.serviceName}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="right">Delete</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;