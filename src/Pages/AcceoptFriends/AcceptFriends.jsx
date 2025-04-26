import { ArrowBackIos, Diversity1, Search } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import FriendItem from '../../Components/Friend/FriendItem'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function AcceptFriends() {
    const navegator= useNavigate()
    const[findRequest,setFindRequest]=useState(true)
    const friendsRequest= [
        {
          id:1234,
          FriendName:"Mostafa Ibrahim",
          FriendImage:"../../../public/assets/img/whatsapp.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:12345,
          FriendName:"Mohamed Khaled",
          FriendImage:"../../../public/assets/img/whatsapp3.jpg",
          FriendMutual:220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp.jpg",
            second:"../../../public/assets/img/whatsapp2.jpg"
          }
        },
        {
          id:1234,
          FriendName:"Abdallah Samer",
          FriendImage:"../../../public/assets/img/whatsapp2.jpg",
          FriendMutual:320,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:1234,
          FriendName:"Mostafa Saied",
          FriendImage:"../../../public/assets/img/whatsapp4.jpg",
          FriendMutual:510,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp.jpg",
            second:"../../../public/assets/img/whatsapp2.jpg"
          }
        },
        {
          id:123466,
          FriendName:"Ahmed Anwar",
          FriendImage:"../../../public/assets/img/whatsapp4.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:1234,
          FriendName:"ibrahim Mosaad",
          FriendImage:"../../../public/assets/img/whatsapp6.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:12349,
          FriendName:"Mostafa Ibrahim",
          FriendImage:"../../../public/assets/img/whatsapp.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:12344,
          FriendName:"Mostafa Ibrahim",
          FriendImage:"../../../public/assets/img/whatsapp.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:12340,
          FriendName:"Mostafa Ibrahim",
          FriendImage:"../../../public/assets/img/whatsapp.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:123478,
          FriendName:"Mostafa Ibrahim",
          FriendImage:"../../../public/assets/img/whatsapp.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:12344521,
          FriendName:"Mostafa Ibrahim",
          FriendImage:"../../../public/assets/img/whatsapp.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:12341596,
          FriendName:"Mostafa Ibrahim",
          FriendImage:"../../../public/assets/img/whatsapp.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
        {
          id:1234000,
          FriendName:"Mostafa Ibrahim",
          FriendImage:"../../../public/assets/img/whatsapp.jpg",
          FriendMutual:1220,
          MutualImage:{
            first:"../../../public/assets/img/whatsapp4.jpg",
            second:"../../../public/assets/img/whatsapp3.jpg"
          }
        },
      ]
  return (
   <>
       <Helmet>
        <title>Friends Request</title>
       
    </Helmet>
   {findRequest?<>
    <Box sx={{
     width:{
        xs:"90%",
        sm:"30%",
        md:"60%"
    },
    m:" 10px auto",
   
 }}
   >
    <div className='flex justify-between items-center'>
        
        <IconButton onClick={()=>{
            navegator("/Home/Friends")
        }}>
            <ArrowBackIos sx={{color:"#333"}}/>
        </IconButton>
        <h3 className='text-[1.1rem]' >Friends Requests</h3>
        <IconButton>
            <Search/>
        </IconButton>

   
    </div>
    <div >
        <TextField type='search' placeholder='Search Friends' sx={{width:"100%",my:2}}
         slotProps={{
                  input:{
                    startAdornment:(
                      <InputAdornment position='start'>
                           <Search sx={{color:"#000"}}/>                             
                      </InputAdornment>
                    )
                  }
                 }} 
        
        
        />
    </div>
    <div className='flex justify-between items-center'>
                <div className='flex-col justify-start items-start'>
                     <h3 className='text-[.9rem] text-slate-800 mb-0'>212 Request</h3>
                     
                </div>
                <div>
                <Button variant="text" sx={{color:"blue"}}>Sort</Button>
                </div>
                
    </div>
    <div className='my-4'>
                 {friendsRequest.map((request)=>(

                              <FriendItem    friendName={request.FriendName} friendImage={request.FriendImage} mutualFrist={request.MutualImage.first} mutualsecond={request.MutualImage.second} mutual={request.FriendMutual} key={request.id} request={true}/>
                    
                 ))}
    </div>

   </Box>
   </>:<>
   <Box sx={{
    display:"flex-col",
    justifyContent:"center",
    alignItems:"center",
    height:"40vh",
    width:{
        xs:"90%",
        sm:"80%",
        md:"70%"
    },
    m:"auto"
    
   }}>
     <div className='flex justify-between items-center'>
            
                <IconButton onClick={()=>{
                    navegator("/Home/Friends")
                }}>
                    <ArrowBackIos sx={{color:"#333"}}/>
                </IconButton>
                <h3 className='text-[1.1rem]' >Your friends</h3>
                <IconButton>
                    <Search/>
                </IconButton>
    
           
            </div>
   <div className='  justify-center items-center w-[60%] text-center mx-auto my-11 '>
    <Diversity1/>
    <h3>No New requests</h3>
    <p>When people send you friend requests , they'll appear here. </p>
    <Button variant='contained' onClick={()=>{
        navegator("/Home/Friends")
    }} sx={{fontSize:".7rem"}}> see Friends Suggestions</Button>
   </div>
   </Box>
   </>}
   
  
   
   </>
  )
}
