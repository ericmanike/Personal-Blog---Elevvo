import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function ContactLayout() {
  return (
    <div>
    <h1>
        Contact Me
    </h1>
    <ul className=' flex  flex-row justify-around'>
        <li> <NavLink to='/'>Form</NavLink></li>
        <li> <NavLink to='contactinfo'>Contact Info</NavLink></li>
        


    </ul>
    <Outlet />

    </div>
  );
};

export default ContactLayout;