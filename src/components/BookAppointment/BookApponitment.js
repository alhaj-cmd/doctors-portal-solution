import React from 'react';
import BookingCard from '../Appoinment/Appointment/bookingCard/BookingCard';
const bookingData = [
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitinghour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitinghour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitinghour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitinghour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitinghour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitinghour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookApponitment = ({date}) => {
    return (
       <section>
           <h2 className="text-center App-link mb-5">Available Appointments on {date.toDateString()}</h2>
       <div className="row">
           {
               bookingData.map(booking => <BookingCard booking={booking} date={Date} key={booking.id} ></BookingCard> )
           }
       </div>
       </section>
    );
};

export default BookApponitment;