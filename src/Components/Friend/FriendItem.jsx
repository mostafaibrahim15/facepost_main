import { Avatar, Box, Button, Paper } from '@mui/material'

import React, { useState } from 'react'

export default function FriendItem({friendName,friendImage,mutualFrist,mutualsecond,mutual,request}) {

    const [add,setAdd]= useState(false)
    
  return (
   <>
       
    <Paper elevation={6} sx={{mb:4,pt:3,pb:4}}>
    <div className='w-full  px-3 flex justify-start items-center'>
       
      <Box sx={{
        width:{
            xs:"65px",
            md:"120px"
        },
        height:{
            xs:"65px",
            md:"120px"
        }
      }} >
      
            <img alt="friend image" src={friendImage} className='w-full h-full rounded-full border-2 border-white '/>
        
      
      </Box>

        <div div className=' mt-6 ml-6 '>
            <h1 className='text-[1.1rem] text-slate-900 font-bold'>{friendName}</h1>
            <div className='flex justify-start items-center'>
                <div className='py-2 flex'>
                <Avatar src={mutualFrist} sx={{width:"46",height:"46px"}}/>
                <Avatar src={mutualsecond} sx={{width:"36",height:"36px"}}/>
                
                </div>
                <p className=' ml-2 text-["#616161"] text-[.9rem] opacity-70'>{mutual}mutual friends </p>
            </div>
       
        
        </div>

    </div>
    {request?<>
        <Box>
    <div className='flex justify-center items-center '>
         
         <Button variant={add?"outlined":"contained"} sx={{mr:3,width:{
              xs:"30%",
             
          },fontSize:{
              xs:".4rem",
             md:".6rem"
            
          }
          }} onClick={()=>{
              setAdd(!add)
          }}>{add?"friend":"Accept Request"}</Button>
          <Button variant="contained" sx={{backgroundColor:"#424242",width:{
              xs:"30%",
            
          },fontSize:{
             xs:".4rem",
             md:".6rem"
              
             
          }}}>Remove</Button>
         </div>
    </Box>
    </>:<>
    <Box>
    <div className='flex justify-center items-center '>
         
         <Button variant={add?"outlined":"contained"} sx={{mr:3,width:{
              xs:"30%",
             
          },fontSize:{
              xs:".4rem",
             md:".6rem"
            
          }
          }} onClick={()=>{
              setAdd(!add)
          }}>{add?"Cancel Request":"Add Friend"}</Button>
          <Button variant="contained" sx={{backgroundColor:"#424242",width:{
              xs:"30%",
            
          },fontSize:{
             xs:".4rem",
             md:".6rem"
              
             
          }}}>Remove</Button>
         </div>
    </Box>
    </>}
    
    
    </Paper>
   </>
  )
}
