import { ArrowBackIos, PersonAdd } from '@mui/icons-material'
import { Box, Button, Divider, FormControlLabel, IconButton, Paper, Radio, Typography } from '@mui/material'

import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'

export default function CreatePage() {
   
  
    const navigator=useNavigate()
  return (
    <>
    <Helmet>
        <title>Create New Page</title>
       
    </Helmet>
    <Box sx={{
        width:{
            xs:"100%",
            sm:"95%",
            md:"75%"
        },
     m:"  auto",
     position:"relative",
     height:"100vh"
       
    }}>
       
            <div className='w-full px-3 py-2 flex justify-between items-center bg-neutral-900'>
            <div>
                <IconButton onClick={()=>{
                    navigator("/Home/Pages")
                }}>
                    <ArrowBackIos sx={{color:"white"}} />
                </IconButton>
            </div>
            <h3 className='text-white'> Create Page
            </h3>
            <Link to={"/Home/Pages"} className='text-decoration-none text-white'>Cancel</Link>

            </div>
            <div className='bg-neutral-900'>
            <h2 className='text-white px-3 py-3'>Which option is best for you ?</h2>
            </div>
            <div className='bg-neutral-900  w-[95%] m-auto rounded-md relative flex justify-between items-center mb-1'>
                <div className='flex justify-start items-start px-2 py-3'>
                    <div className='w-[50px] h-[50px]  rounded-full bg-neutral-950 flex justify-center items-center '>
                        <PersonAdd sx={{color:"#fff"}}/>
                    </div>
                    <div>
                        <Typography variant="body1"  sx={{ ml:2 , color:"#fff"}}>Personal</Typography>
                        <Typography variant="body1" sx={{fontSize:"12px",ml:2,width:"80%"}} className='text-stone-400' > Use another personal profile to explore FaceBook</Typography>
                    </div>
                </div>
                <div className='mr-2'>
               <FormControlLabel value="male" control={<Radio  sx={{color:"#fff"}} />}  />
                </div>
            </div>
            <div className='bg-neutral-900  w-[95%] m-auto rounded-md relative flex justify-between items-center'>
                <div className='flex justify-start items-start px-2 py-3'>
                    <div className='w-[50px] h-[50px]  rounded-full bg-neutral-950 flex justify-center items-center '>
                        <PersonAdd sx={{color:"#fff"}}/>
                    </div>
                    <div>
                        <Typography variant="body1"  sx={{ ml:2 , color:"#fff"}}>Professional</Typography>
                        <Typography variant="body1" sx={{fontSize:"12px",ml:2,width:"80%"}} className='text-stone-400' > Build a public presence or remotevyour brand or business</Typography>
                    </div>
                </div>
                <div className='mr-2'>
                  <FormControlLabel value="male" control={<Radio  sx={{color:"#fff"}}/>}  />  
            </div>
            </div>
            <Button variant="contained"  sx={{
                bgcolor:"blue",
                position:"absolute",
                bottom:"10%",
                width:"95%",
                ml:1
                
            }} >Next</Button>
   </Box>
</>    
   
  )
}
