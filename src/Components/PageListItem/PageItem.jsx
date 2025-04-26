import { Brightness6, Brightness7, CheckCircleSharp, InfoSharp, StickyNote2Sharp } from '@mui/icons-material'
import { Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PageItem({pageName,pageImage,SubDiscription,Followers,discription,About,followType}) {
    
    const[follow,setFollow]=useState(followType)
  return (
    <>
        <Paper elevation={9} sx={{mb:3}}>
            <div className='w-full py-3 px-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                        <div className='w-[70px] h-[70px] border-2 border-white rounded-full'>
                            <img alt='Page image' src={pageImage} className='w-full f-h-full rounded-full object-cover'/>
                        </div>
                        <div className='px-3 flex-col justify-center items-center '>
                            <Link to={"/Home/Page"} className='text-slate-800 mb-0 text-decoration-none'>{pageName} <CheckCircleSharp sx={{fontSize:"1.2rem", color:"blue"}}/></Link>
                            <p className='py-0 text-[.9rem] text-slate-600'>{SubDiscription}.<span className='text-slate-400'>{Followers} followers</span></p>
                        </div>
                    </div>
                    <div>
                    <Button variant={follow?"outlined":"contained"} onClick={()=>{
                        
                        setFollow(!follow)
                    }}>{follow?"unfollow":"Follow"} </Button>
                    </div>
                </div>
                <div className='px-4 py-4'>
                    <p className='flex justify-start items-center text-slate-400'><InfoSharp sx={{fontSize:"1.9rem"}} className='text-slate-500 mr-3'/> {discription}
                     </p>
                    <p className='flex justify-start items-center text-slate-400'><StickyNote2Sharp sx={{fontSize:"1.9rem"}} className='text-slate-500 mr-3'/> {About} </p>
                </div>
            </div>
        </Paper>
    
    
    </>
  )
}
