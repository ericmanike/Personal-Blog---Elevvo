import React from 'react'
import Layout from './Layout' 
import {  Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home, { Loader } from './home.jsx'
import Contact from './contact' 
import ContactLayout from './contactLayout.jsx'
import Info from './contactinfo.jsx'
import Details, { DetailsLoader } from './details.jsx'
import Blog from './blog.jsx'
import BlogLayout from './blogLayout.jsx'
import Notfound from './Notfound.jsx'
import Error from './error.jsx'
import SearchContext from './searchContext.jsx'



function App() {

 

         const router = createBrowserRouter(createRoutesFromElements(
          <Route path='/' element={<Layout />} errorElement={<Error/>}>
            <Route index element={<Home/>}  loader={Loader}/>

            <Route path='blog' element={<BlogLayout />} > 
              <Route index element={<Blog />}  loader ={Loader}  errorElement={<Error />}/>
               <Route path=':id' element={<Details />}  loader={DetailsLoader} errorElement={<Error />}/>
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
   
   <SearchContext>
    <RouterProvider router={router} />

  </ SearchContext >
   
</>
  )
}

export default App
