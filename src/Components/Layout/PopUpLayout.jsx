import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PopUpLayout() {
  return (
   <>
   
   <Box sx={{bgcolor:"#000", height:"100vh", py:6}}>
   <Outlet></Outlet>
   </Box>
   </>
  )
}
