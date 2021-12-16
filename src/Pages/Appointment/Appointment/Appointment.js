import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableApointment from '../AvailableAppointment/AvailableApointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation/>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableApointment date={date} setDate={setDate}/>
        </div>
    );
};

export default Appointment;