import { CheckCircleSharp, Public } from '@mui/icons-material'
import { Avatar, Paper } from '@mui/material'
import React from 'react'

export default function Featuers() {
  return (
    <>
        <Paper elevation={6} >
        <div className=' py-2  ml-[10%] mb-5'>
            <div className='flex justify-start items-start'>
               <div>
                <Avatar src="../../../public/assets/img/whatsapp8.jpg" />
               </div>
               <div className='flex-col justify-start ml-2 h-[30px]'>
                    <h4 className='text-[1rem] mb-0 text-slate-700'> Al Ahly SC <CheckCircleSharp sx={{fontSize:"1.2rem", color:"blue"}}/> </h4>
                  
                  <p className='mt-0 text-[.7rem] text-slate-400'>Oct 29,2024 . <Public  className='mt-0  text-slate-400' style={{fontSize:".7rem"}}/></p>
               </div>
            </div>
            <div >
                <p className='mt-2'>هنا النادى الأهلى  ابطال نصف العالم </p>
                <div className='w-full h-[40vh]'>
                    <img className='w-full h-full object-cover' src='../../../public/assets/img/whatsapp21.jpg'/>
                </div>
            </div>
            
        </div>
        </Paper>
    
    </>
  )
}
