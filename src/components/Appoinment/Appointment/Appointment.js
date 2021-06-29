import React, { useState } from 'react';
import BookApponitment from '../../BookAppointment/BookApponitment';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
           // console.log(date);
           setSelectedDate(date);
         }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookApponitment date={selectedDate}></BookApponitment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;