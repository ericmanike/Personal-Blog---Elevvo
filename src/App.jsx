import React from 'react'
import Layout from './Layout' 
import {  Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home, { Loader } from './home.jsx'
import Contact from './contact' 
import ContactLayout from './contactLayout.jsx'
import Info from './contactinfo.jsx'
import Details, { DetailsLoader } from './details.jsx'
import Blog from './Blog.jsx'
import BlogLayout from './blogLayout.jsx'
import Notfound from './Notfound.jsx'


function App() {

 

         const router = createBrowserRouter(createRoutesFromElements(
          <Route path='/' element={<Layout />} >
            <Route index element={<Home/>}  loader={Loader}/>

            <Route path='blog' element={<BlogLayout />} > 
              <Route index element={<Blog />}  loader ={Loader} />
               <Route path=':id' element={<Details />}  loader={DetailsLoader}/>
            </Route>

            <Route path='contact' element={<ContactLayout/>} >
                 <Route index element={<Contact/>} />
                  <Route path='contactInfo' element={<Info/>} />
            </Route>
            <Route path='*' element={<Notfound/> } />'
            </Route>

  
          
         ))

    
    
 

  return (
    <>
   
   
    <RouterProvider router={router} >

       
      </RouterProvider>
    
   
</>
  )
}

export default App
