import  { useEffect, useState } from 'react';
import { useNavigate,useLoaderData, Link} from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import {  FaArrowAltCircleLeft} from 'react-icons/fa';
import ElectricBorder from './ElectricBorder';
import GradientText from './Gradientwords';



   
function Home() {

  const Navigate = useNavigate()
  const Postdata = useLoaderData()
const [index,setIndex] = useState(0)


const data =[ ...Postdata.slice(1,3),...Postdata.slice(8,10)]

const size =data.length


  useEffect(()=>{
    
const Id = setInterval(()=>{setIndex((p)=>(p+1) % size  
)},5000)

return ()=> clearInterval(Id)
  },[size])
  

   
  return (

    <div className='bg-[#00000034] h-[100%] pt-5'>
    


<h1 >
<GradientText
  colors={["#40ffaa", "black", "#40ffaa"]}
  animationSpeed={6}
  showBorder={false}
  className="custom-class text-4xl p-8 mb-4"
>
  Highlights 
</GradientText>
</h1>  
    
   
 
    <div className='h-[80%] w-[80%] m-auto  md:w-full text-2xl  rounded-2xl  justify-center items-center  relative'>
       <FaArrowAltCircleLeft className='absolute bottom-[10%] md:top-[50%] left-10 md:left-20 cursor-pointer h-5 md:h-10 w-5 md:w-10 bg-amber-50 text-amber-600 rounded-2xl z-50' onClick={()=>setIndex((i)=>(i-1+size)% size)} />
  <div className='absolute top-[40%] right-[10%] md:right-[35%] z-10'>
    <GradientText
  colors={["#40ffaa","white"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class p-4 text-[16px] md:text-2xl"
>
    { data[index].title }
    
    </GradientText>
    </div>
    
   

     <div className=' w-full md:w-[50%] h-[100%] md:h-[70%] rounded-2xl m-auto'> 
     <ElectricBorder
     color="#090e4f"
    speed={1}
    chaos={0.5}
    thickness={5}
     style={{ borderRadius: 10 }}
    >
<GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={true}
  className="custom-class text-4xl p-8 mb-4"
><Link to={`/blog/${data[index].id}`}>
  {<img src={data[index].image}  className='transition-all duration-200 opacity-100 rounded-2xl cursor-pointer' />}
 </Link>
  </GradientText>
   </ElectricBorder>
    
     </div>
  
    
    
   <FaArrowAltCircleRight className='absolute bottom-[10%] md:bottom-[50%] right-10 md:right-20 cursor-pointer bg-amber-50 rounded-2xl  text-amber-600 md:h-10 w-5 md:w-10 z-50' onClick={()=>setIndex((i)=>(i+1)% size)}/>
    </div>
   
      <button className='text-white bg-amber-600 mt-5 mb-5 transition-all duration-500 hover:bg-[orange] text-[18px] p-3 rounded-2xl cursor-pointer' onClick={()=>Navigate('/blog')}> See all post</button>
    </div>
   
  );
};

export default Home;

 export const Loader = async()=> {
 const res = await fetch('/data.json')
 const data = await res.json()
 if(!res.ok){
  throw Error('Could not find posts')

 }

  return data.posts
}