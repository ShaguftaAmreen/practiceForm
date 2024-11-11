import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
    //console.log("children,",props)
  return (
    <div>
      <header>
        <nav style={{display:"flex",justifyContent:"space-between",}}>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </nav>
      </header>
      
      <main><Outlet /></main> 
      
      <footer><h1>&copy; 2024</h1>
      </footer>
    </div>
  )
}

export default Layout
