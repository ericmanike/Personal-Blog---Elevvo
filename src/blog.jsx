import React, { useEffect } from 'react';
import { Link,useLoaderData} from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import {Search} from './searchContext';
import { useContext } from 'react';
function Blog() {
  const [searchParams,setSearchParams] = useSearchParams()
  const [filteredData, setFiltered] = React.useState([])
  
   const [find, setFind] = useContext(Search)
  const category = searchParams.get('category')

    let Postdata = useLoaderData()
   
  useEffect(()=>{
    if(category){
      const filtered = Postdata.filter((post)=>post.category === category)
    setFiltered(filtered);
   
    } else{
      setFiltered(Postdata)
    }
    
   



    }, [category]);


  



    
 
   function handleCategory(cat){

      return cat == category ? 'bg-gray-600 text-white':
      'bg-amber-600 text-white'
   }

  return (
    <div className='relative'>
   
      <h2> All Post</h2>

      <button onClick={()=>setSearchParams({})} className={`text-[10px] md:text-[20px] m-2 p-2 bg-amber-600 rounded-[10px] text-white   hover:shadow-[1px_1px_50px_blue-400]
      Neon Button  transition-all duration-500 ${handleCategory()} `}  > 
        All Post
      </button>
       <button onClick={()=>setSearchParams({category:'Programming and Tech'})} className={` text-[10px] md:text-[20px] m-2 p-2 bg-amber-600 rounded-[10px] text-white  transition-all duration-500 ${handleCategory('Programming and Tech')}`}> 
        Programming and Tech
      </button>
       <button onClick={()=>setSearchParams({category:'Life Style'})} className={`text-[10px] md:text-[20px] m-2 p-2 bg-amber-600 rounded-[10px] text-white  transition-all duration-500 ${handleCategory('Life Style')}`}>
        Uni & Life Style
      </button>

      <div  className='h-[100%]  w-full text-[16px] md:text-[18px] z-0 rounded-2xl flex flex-wrap  text-center justify-center items-center  '>
      { filteredData.map((post)=>( <div key={post.id} className='w-[45%] m-2 h-[30%] border-2 border-black rounded-2xl p-3 hover:scale-101 transition-all duration-500 cursor-pointer overflow-ellipsis pb-5 relative'>

    <Link to={`/blog/${post.id}`}  key={post.id}> 
      
      
   <em className='text-amber-950 text-2xl'> Title:</em> {post.title}
     <img src={post.image} className='w-full h-[90%] object-cover rounded-2xl  text-[16px]' />
      <em className='truncate block overflow-ellipsis w-full h-[30px] text-[20px]'>{post.message}</em>
      <FaEye className='absolute right-10 top-5 m-auto text-[20px] hidden md:block text-black rounded-2xl '/>
  </Link>

   
  </div>)) }

        </div>
        The end 👊👊
    </div>
  );
};

export default Blog;