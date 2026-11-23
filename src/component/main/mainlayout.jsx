import React, { Children } from 'react';
import Navbar from '../nav/navbar';
import Secondnav from '../nav/secondnav';
import Footer from '../footer/footer';

const Mainlayout = (props) => {
    return (
        <div>
            <Navbar/>
            {/* <Secondnav/> */}
            {props.children}
            <Footer/>
        </div>
    );
}

export default Mainlayout;
