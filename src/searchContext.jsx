import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

 const Search = createContext()
export {Search}
function SearchContext({children}) {
const [find, setFind] = useState(null)
   
  return (
  <Search.Provider value={{find,setFind}} >
    {children}
    </Search.Provider>
  )
}

export default SearchContext