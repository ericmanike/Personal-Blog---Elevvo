import React from 'react';
import Navbar from './Navbar';

import {Outlet } from 'react-router-dom';


function Layout({data, setData}) {
  return (
    <div>
      < Navbar />
      <div  className=' text-center mt-10 font-bold text-2xl'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;