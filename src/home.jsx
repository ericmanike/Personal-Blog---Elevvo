import  { useEffect, useState } from 'react';
import { useNavigate,useLoaderData, Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import {  FaArrowAltCircleLeft} from 'react-icons/fa';


function Home() {

  const Navigate = useNavigate()
  const Postdata = useLoaderData()
const [index,setIndex] = useState(0)


const data =[ ...Postdata.slice(1,3),...Postdata.slice(8,10)]

const size =data.length


  useEffect(()=>{
    
const Id = setInterval(()=>{setIndex((p)=>(p+1) % size  
)},3000)

return ()=> clearInterval(Id)
  },[size])
  

   
  return (
    <div>
    
    <h2 className='text-3xl shadow-[0_0_10px black] mb-5'> highlights</h2>
 
    <div className='h-[80%]   w-full text-2xl  rounded-2xl  justify-center items-center  relative'>
       <FaArrowAltCircleLeft className='absolute top-[50%] left-20 cursor-pointer h-10 w-10 text-amber-600' onClick={()=>setIndex((i)=>(i-1+size)% size)} />
  <p>{ data[index].title }</p>
  
     <div className='w-[100%] md:w-[50%] h-[100%] md:h-[70%] rounded-2xl m-auto border-4'> {<img src={data[index].image}  className='transition-all duration-200 rounded-2xl cursor-pointer' onClick={()=>clearInterval(Id)}/>}</div>
   <FaArrowAltCircleRight className='absolute bottom-[50%] right-20 cursor-pointer h-10 w-10 text-amber-600' onClick={()=>setIndex((i)=>(i+1)% size)}/>
    </div>
 
      <button className='text-white bg-amber-600 mb-5 transition-all duration-500 hover:bg-[orange] text-[18px] p-3 rounded-2xl cursor-pointer' onClick={()=>Navigate('/blog')}> See all post</button>
    </div>
  );
};
 
export default Home;

 export const Loader = async()=> {
 const data = await fetch('http://localhost:5000/posts')
 if(!data.ok){
  throw Error('Could not find posts')
 }
  return data.json()
}