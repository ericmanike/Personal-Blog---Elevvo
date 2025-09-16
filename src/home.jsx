import React from 'react';
import { useNavigate,useLoaderData, Link } from 'react-router-dom';

function Home() {

  const Postdata = useLoaderData()

    const Navigate = useNavigate()
  return (
    <div>
    <h1>Eric's Personal blog</h1> 

  
      <h2> highlights</h2>
    <div className='h-[100%]   w-full text-2xl  rounded-2xl flex flex-wrap  justify-center items-center  '>
{ Postdata.slice(0,4).map((post)=>( <div key={post.id} className='w-[45%] m-2 h-[50%] border-2 border-black rounded-2xl p-3 hover:scale-102 transition-all duration-500 cursor-pointer'>
   <Link to="blog">
   {post.title} 
   <img src={post.image}  className='w-full h-[80%] object-cover rounded-2xl  text-[16px]' />
      <em className='truncate block overflow-ellipsis w-full h-[30px] text-[20px]'>{post.message}</em>
   </Link>
  </div>)) }

   
    

    </div>

      <button className='text-white bg-amber-600 mb-5 transition-all duration-500 hover:bg-[orange] text-[18px] p-3 rounded-2xl cursor-pointer' onClick={()=>Navigate('/blog')}> See all post</button>
    </div>
  );
};

export default Home;

 export const Loader = async()=> {
 const data = await fetch('http://localhost:5000/posts')
  return data.json()
}