import React, {  useState } from 'react'
import HomeNavbar from '../HomeNavBar/HomeNavbar'
import { Outlet } from 'react-router-dom'
import LeftDrawer from '../LeftDrawer/LeftDrawer'
import RightDrawer from '../RightDrawer/RightDrawer'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
 
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function HomeLayout() {
   const [showDrawer,setShowDrawer]=useState("none")
  const [openOrClose,setOpenOrClose]= useState("close")
   
  
  return (
    <>
      <Grid container spacing={2}>
      <Grid>
       <HomeNavbar setShowDrawer={setShowDrawer} openOrClose={openOrClose}setOpenOrClose={setOpenOrClose} />
      </Grid>
      <Grid sx={{width:{
        xs:"100%",
       
      },
      m:{
        xs:"50px auto",
        md:"90px auto",
        lg:`60px 260px 0 `
      }
      
      }}>
      <Outlet></Outlet>
      </Grid>
      <Grid >
   
      <LeftDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} /> 
      </Grid>
     
     
    </Grid>
    
    </>
  )
}
