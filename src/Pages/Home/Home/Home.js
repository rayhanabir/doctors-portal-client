import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
           <Navigation/>
           <Banner/>
           <Services/>
           <Treatment/>
           <AppointmentBanner/>
           <Testimonials/>
           <Blog/>
           <Doctors/>
          
        </div>
    );
};

export default Home;