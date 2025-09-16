import React from 'react';
import { useLoaderData} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Details() {
  
const navigate = useNavigate();
const details = useLoaderData()   


  return (
    <div>
      <h1> Read full post</h1>

      <div className=' w-full md:w-[70%]  h-screen m-auto border-2 border-[gray] rounded-2xl p-3 hover:scale-101 transition-all duration-500 cursor-pointer flex flex-col'>
   <h2 className='text-2xl font-bold'>{details.title} </h2>
   <img src={details.image}  className='w-full h-[40%] md:h-[50%] object-cover rounded-2xl mt-2' />
   <p className=' w-full overflow-ellipsis h-fit text-[20px]'>{details.message}</p>
   <p className=' w-full  text-[18px] italic mt-2 text-amber-800'> Reference: {details.reference}</p>
</div>
<button className='bg-orange-500 text-white p-3 rounded-2xl mt-5 hover:scale-105 transition-all duration-300 ease-in-out' onClick={ ()=>navigate('/blog')}>Back to All post</button>
    </div>
  );
};

export default Details;


export const DetailsLoader = async({params})=> {
  const {id} = params;
  const data = await fetch("http://localhost:5000/posts/"+id)
   return data.json()
   
 }