import React from 'react'
import { Outlet } from 'react-router-dom'
import Background from '../LoginBackground/Background'
import BackgroundNav from '../BackgroundNav/BackgroundNav'

export default function Layout() {
  return (
    <>
       
      <Background/>
      <Outlet></Outlet>
    
    </>
  
    
    
  )
}
