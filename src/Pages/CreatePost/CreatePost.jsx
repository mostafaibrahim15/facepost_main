import { AlternateEmail, ArrowDropDown, CameraAlt, Close, Collections, EmojiEmotions, FormatColorText, Instagram, LocationOn, PersonAdd, Public, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, IconButton, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'

export default function CreatePost() {
    const navigator= useNavigate()
  return (
    <>
        <Helmet>
        <title>Create New Post</title>
       
    </Helmet>
    <Box sx={{
        width:{
            xs:"100%",
            sm:"95%",
            md:"75%"
        },
        m:" 0 auto",
       
    }}>
        <Paper elevation={6}>
            <div className='w-full px-3 py-2 flex justify-between items-center bg-neutral-900'>
            <div>
                <IconButton onClick={()=>{
                    navigator("/Home")
                }}>
                    <Close sx={{color:"white"}} />
                </IconButton>
            </div>
            <h3 className='text-white'> Create Post
            </h3>
            <Link to={"/Home/CreatePost/Next"} className='text-decoration-none text-white'>Post</Link>

            </div>
            <div className='flex justify-start items-start py-6  bg-neutral-900'>
                <div className='ml-2 border border-sky-700 rounded-full'>
                    <Avatar src='../../../public/assets/img/whatsapp.jpg'/>
                </div>
                <div className='w-[95%] ml-2  mt-1' >
                    <h2 className='text-[.9rem] md:text-[.9rem] text-white'> mostafa ibrahim</h2>
                    <div className=' grid grid-cols-3 md:grid-cols-6  gap-2 px-2'>
                        <div className=' bg-sky-950 text-sky-400 px-1 rounded-md  flex justify-center items-center gap-2'>
                           
                           <Public sx={{fontSize:{
                                xs:"13px",
                                sm:"10px",
                                 md:"20px"
                            }}}/>
                           
                          
                            <Typography variant="body1" sx={{
                                fontSize:{
                                xs:"9px",
                                sm:"5px",
                                md:"13px"
                                },
                                my:1
                            }}>Public</Typography>
                           
                           <ArrowDropDown sx={{fontSize:{
                                 xs:"13px",
                                 sm:"10px",
                                 md:"25px"
                                
                            }}}/>
                          
                            
                        </div>
                        <div className=' bg-sky-950 text-sky-400 px-1 rounded-md  flex justify-center items-center gap-1 '>
                        <Typography variant="body1" sx={{
                                fontSize:{
                                xs:"9px",
                                sm:"5px",
                                md:"13px"
                                },
                                my:1
                            }}>  +  Album</Typography>
                           
                           <ArrowDropDown sx={{fontSize:{
                                 xs:"13px",
                                 sm:"10px",
                                 md:"25px"
                                
                            }}}/>
                        </div>
                        <div className=' bg-sky-950 text-sky-400 px-1 rounded-md  flex justify-center items-center gap-1 '>
                        <Instagram sx={{fontSize:{
                                 xs:"13px",
                                 sm:"10px",
                                 md:"25px"
                                
                            }}}/>
                        <Typography variant="body1" sx={{
                                fontSize:{
                                xs:"9px",
                                sm:"5px",
                                md:"13px"
                                },
                                my:1
                            }}>  Off</Typography>
                           
                           <ArrowDropDown sx={{fontSize:{
                                 xs:"13px",
                                 sm:"10px",
                                 md:"25px"
                                
                            }}}/>
                        </div>
                        <div className=' bg-sky-950 text-sky-400 px-1 rounded-md   flex justify-center items-center gap-1'>
                        <AlternateEmail sx={{fontSize:{
                                 xs:"13px",
                                 sm:"10px",
                                 md:"25px"
                                
                            }}}/>
                        <Typography variant="body1" sx={{
                                fontSize:{
                                xs:"9px",
                                sm:"5px",
                                md:"13px"
                                },
                                my:1
                            }}>  On</Typography>
                           
                           <ArrowDropDown sx={{fontSize:{
                                 xs:"13px",
                                 sm:"10px",
                                 md:"25px"
                                
                            }}}/>
                        </div>
                        <div className=' bg-sky-950 text-sky-400 px-1 rounded-md  flex justify-center items-center gap-1 '>
                        <Typography variant="body1" sx={{
                                fontSize:{
                                xs:"9px",
                                sm:"5px",
                                md:"12px"
                                },
                                my:1
                            }}>  +   AI label off</Typography>
                           
                           <ArrowDropDown sx={{fontSize:{
                                 xs:"13px",
                                 sm:"10px",
                                 md:"25px"
                                
                            }}}/>
                        </div>
                        
                    </div>
                </div>
               
            </div>
            <div className='bg-neutral-900'>
                <form className='h-[50vh]'>
                    <input type='text' placeholder="what's on your mind?" className='bg-transparent  flex justify-start text-white outline-none px-2 pt-3'/>
                </form>
            </div>
            <div className='flex justify-between items-center py-4 px-5 bg-neutral-900'>
                <Collections sx={{color:"#4caf50"}}/>
                <PersonAdd sx={{color:"blue"}}/>
                <EmojiEmotions sx={{color:"#ff9800"}}/>
                <LocationOn sx={{color:"#aa2e25"}}/>
                <VideoCameraBack sx={{color:"#b2102f"}}/>
                <FormatColorText sx={{color:"#33eb91"}}/>
                <CameraAlt sx={{color:"blue"}}/>

            </div>

        </Paper>
    </Box>
    
    
    </>
  )
}
