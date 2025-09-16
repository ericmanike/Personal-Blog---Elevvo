import React from 'react';

function Info() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 text-2xl space-y-4'>
      <p> <a href='tel:+2335442518' className='flex flex-row space-x-4'>
      Phone number : 0543442518
  
      </a></p>
     <p className='flex flex-row space-x-4 '> <a href='mailto:manikeeric@gmail.com'> 
       Email  
  
      </a> </p>
    <p> Address : Kumasi KNUST Campus, Ghana </p>

    </div>
  );
};

export default Info;