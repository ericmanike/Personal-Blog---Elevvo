import React, { useEffect } from 'react'
import { Search } from './searchContext'
import { Link } from 'react-router-dom'


function Searchpage() {
     const [data, setData] = React.useState([])
     const [find, setFind] = React.useContext(Search)
     const [visible, setVisible] = React.useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/data.json');
            let data = await response.json();
           data = data.posts
          setData(data);
  
        }
          fetchData();
      
    }, [find])

const result = data.filter((post)=>( post.title.toLowerCase().includes(find.toLowerCase()) || post.message.toLowerCase().includes(find.toLowerCase()) ))

   
  return (
    <>
    <div className={`h-[70vh] w-[90vw] md:w-[40vw] ${find?'block':'hidden'} bg-gray-400 text-black  flex justify-center items-center text-center z-[1000] absolute top-60 md:top-[110px] md:right-[120px] rounded-2xl  transition-all duration-1000  ease-in-out flex-col overflow-y-scroll search-results`} style={{boxShadow:"0px 0px 20px black"}}>  

    {result.length > 0 ? result.map((post)=>( <p key = {post.id} className='truncate block overflow-ellipsis w-full h-[30px] text-[20px] m-2 cursor-pointer hover:font-bold '>
      <Link  to={`/blog/${post.id}`} onClick={()=>setFind('')}>{post.title} </Link>
          </p>)): <p> No result found</p>}
     
    </div>
    </>

 
  )
}

export default Searchpage