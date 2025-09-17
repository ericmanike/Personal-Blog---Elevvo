import React from 'react';
import Navbar from './Navbar';
   import Searchpage from './Searchpage.jsx'

import {Outlet } from 'react-router-dom';


function Layout() {
  return (
    <div>
      < Navbar />
      <Searchpage />
      <div  className=' text-center mt-10 font-bold text-2xl'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;