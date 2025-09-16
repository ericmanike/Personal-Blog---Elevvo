import React, { use } from 'react'
import { useRouteError } from 'react-router-dom'
function Error () {

    const Eror = useRouteError()

  return (

    <div className='m-auto w-[80%] h-[100vh] flex flex-col justify-center items-center text-center'>
        <p> An error occured </p>
         <em>{Eror.message}</em>
        
         </div>
  )
}

export default Error