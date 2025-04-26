import { Close, EmojiEmotions, Favorite, MapsUgc, MoreHoriz, Public, Share, ThumbUp, ThumbUpAlt } from '@mui/icons-material'
import { Avatar, Box, Card, CardHeader, Divider, IconButton, Paper, Typography, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import React, { useState } from 'react'

export default function Post({AvatarImage,AvatarTitle,time,Discription,image}) {
    const[ isOpenComment,setIsOpenComment]= useState("block")
    const[ isOpenCommentInput,setIsOpenCommentInput]= useState("none")
    
    
   
       

  return (
   <>
   <Box sx={{width:{
    xs:"95%",
    sm:"90%",
    
   },
   m:"20px auto",
   position:"relative"
   
}}
   
   >
    <Paper elevation={9}>
    
    <div className='w-full py-2'>
       
       <div className='w-full flex justify-between py-1 px-3'>
            <div className='flex justify-between items-start'>
               <div>
                <Avatar src={AvatarImage} />
               </div>
               <div className='flex-col justify-start ml-2 h-[30px]'>
                    <h4 className='text-[1rem] mb-0 text-slate-700'> {AvatarTitle}</h4>
                  
                  <p className='mt-0 text-[.7rem] text-slate-400'>{time}. <Public  className='mt-0  text-slate-400' style={{fontSize:".7rem"}}/></p>
                  
               </div>
            </div>
            <div >
            <MoreHoriz className='mr-3'/>
            <Close/>
            </div>
            
        </div>
        <div className='w-95% px-4 py-2'>
            <p className='text-sm-[.9rem] text-md-[1.1rem] text-slate-600'>{Discription}</p>
        </div>
       
        
      
       
       {image === " "?"":<> <div className='py-1 px-4 w-[98%] ' >
        <img alt='imagePost ' src={image} className='w-full h-full object-cover'/>
        </div></>}
            
       
           
       
       
      
        
     
       
        <div className='flex justify-between items-center py-3 w-full px-1 px-md-4'>
            <div>
                <ThumbUpAlt sx={{color:"blue",fontSize:".9rem"}}/>
                <Favorite sx={{color:"red" ,fontSize:".9rem"}}/>
                <EmojiEmotions sx={{color:"#ff9800", fontSize:".9rem"}}/>
                <span className='text-[.6rem] sm:text-[.4rem] md:text-[.6rem] text-slate-600'>mostafa and <em className='border rounded-full bg-slate-300 p-1 sm:text-[.4rem] md:text-[.7rem]'>+21</em></span>
            </div>
            <div>
            <span className='text-[.8rem] sm:text-[.2rem] md:text-[.7rem] text-slate-600 mr-0'> <em className='border rounded-full bg-slate-300 p-1'>+21</em> comments</span>
            <span className='text-[.7rem] sm:text-xl md:text-[.7rem] text-slate-600'> <em className='border rounded-full bg-slate-300 p-1'>+21</em> shares</span>

        </div>
       </div>
       <Divider sx={{border:"1px solid #333", width:"94%", m:"auto", opacity:".2"}}/>
      <Box sx={{display:`${isOpenComment}`}}>
      <div className='w-[95%] flex justify-between items-center py-1 px-4'>
            <IconButton>
            <Favorite sx={{ fontSize:"1.6rem" , mr:1}}/>
            <Typography variant="body1"  className='text-slate-500'>Favorite</Typography>
            </IconButton>
            <IconButton onClick={()=>{
                setIsOpenComment("none")
                setIsOpenCommentInput("block")
            }}>
            <MapsUgc sx={{ fontSize:"1.6rem" , mr:1}}/>
            <Typography variant="body1"  className='text-slate-500'>comment</Typography>
            </IconButton>
            <IconButton>
            <Share sx={{ fontSize:"1.6rem" , mr:1}}/>
            <Typography variant="body1"  className='text-slate-500'>Share</Typography>
            </IconButton>
       </div>
      </Box>
      <Box sx={{ display:`${isOpenCommentInput}`}}>
        <div className='w-[95%] py-1 px-5 flex'>
        <TextField id="filled-basic" label="Type your comment here" variant="filled" sx={{flexGrow:1}} />
        <Button variant="outlined" onClick={()=>{
            setIsOpenCommentInput("none")
            setIsOpenComment("block")
        }}>Comment</Button>
        </div>
      </Box>

      
    </div>
    
    </Paper>

   </Box>
   
   
   </>
  )
}
