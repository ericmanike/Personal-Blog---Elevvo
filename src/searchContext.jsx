import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

  export const Search = createContext()

function SearchContext({children}) {
const [find, setFind] = useState('')
   
  return (
  <Search.Provider value={[find,setFind]} >
    {children}
    </Search.Provider>
  )
}

export default SearchContext