import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
  return (<>
    <div>Dailly post </div>

    <Outlet />
    </>
  )
}

export default BlogLayout