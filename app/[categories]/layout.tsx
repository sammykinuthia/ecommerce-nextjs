import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
    <NavBar/>
      <h1>categories</h1>
      {children}
      <Footer/>
    </>
  )
}

export default Layout