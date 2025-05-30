import { Add, Calculate, InsertPhoto } from '@mui/icons-material'
import { Avatar, Box, Divider, Fab, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Post from '../../Components/Post/Post';
import { Helmet } from 'react-helmet';





export default function Home() {
  const myDataOfPst=[
    {
      id:1,
      AvatarImage:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:"https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
    },
    {
      id:2,
      AvatarImage:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    
    {
      id:3,
      AvatarImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7Lj7a7pY74UJu5e1o1lYwSfmlqgmza7_JQ&s',
      AvatarTitle:"AlAhly SC",
      Time:"10m",
      Discription:"الأهلي يشكر وزير الداخلية والقيادات الأمنية للموافقة على طلب النادي بالسعة الكاملة في لقاء صن داون",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutgI2CKc9bcT1jKGy0e8CE58iyWHKd3p2ZQ&s"
    },
    {
      id:4,
      AvatarImage:'/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:16,
      AvatarImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfDxCdogwkPjBKrEmqfnyS4J1YUBjgIlPOQ&s',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:5,
      AvatarImage:'/assets/img/whatsapp3.jpg',
      AvatarTitle:"Mohamed Khaled",
      Time:"30m",
      Discription:"i'm mohamed haled lorem ipsom ",
      image:"/assets/img/whatsapp3.jpg"
    },
    {
      id:6,
      AvatarImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6Q9mHSubF0fd44vKYMUmB3gmbb7BvrO9Qw&s',
      AvatarTitle:"Abdallah samer",
      Time:"30m",
      Discription:"i'm abdallah lorem ipsom ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6Q9mHSubF0fd44vKYMUmB3gmbb7BvrO9Qw&s"
    },
    {
      id:7,
      AvatarImage:'https://img.freepik.com/premium-vector/im-letter-logo-initial-im-letter-business-logo-design-vector-template_754537-753.jpg',
      AvatarTitle:"Ahmed Anwar",
      Time:"now",
      Discription:"i'mAhmed haled lorem ipsom ",
      image:"https://img.freepik.com/premium-vector/im-letter-logo-initial-im-letter-business-logo-design-vector-template_754537-753.jpg"
    },
    {
      id:8,
      AvatarImage:'https://www.shutterstock.com/image-vector/im-letter-logo-icon-design-260nw-2019181664.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:9,
      AvatarImage:'https://www.shutterstock.com/image-vector/im-letter-logo-icon-design-260nw-2019181664.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:10,
      AvatarImage:'https://www.shutterstock.com/image-vector/im-letter-logo-icon-design-260nw-2019181664.jpg',
      AvatarTitle:"mostafa Saaed",
      Time:"1h",
      Discription:"i'm mostafa haled lorem ipsom ",
      image:"https://www.shutterstock.com/image-vector/im-letter-logo-icon-design-260nw-2019181664.jpg"
    },
    
  ]

  

 
  return (
    <>
        <Helmet>
        <title>FacePost</title>
       
    </Helmet>
 <Paper elevation={6} sx={{width:{
  xs:"100%",
  md:"80%"
 },
m:"auto",
px:1,
py:1

 
 }}>
 <div className=' w-[100%] h-[100%] flex  flex-row justify-between items-center px-sm-3 px-md-5 py-1'>
      
     <div className='flex justify-center items-center'>
     <Avatar alt="Remy Sharp" src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"  sx={{mr:{
      xs:1,
      sm:3
     }}}/>
      <Typography variant="body1" color="initial">
       <Link to={"/Home/CreatePost"} className='text-sky-800 text-decoration-none '>What's on your mind ?</Link>
       
      </Typography>
     </div>
      <div>
      <InsertPhoto  sx={{fontSize:"1.6rem"}}/> 
      </div>
       </div>
 </Paper> 
 <Divider sx={{border:"3px solid #333", opacity:".1",width:{
  xs:"80%",

 },
m:"auto"}}/>


 <Box sx={{width:{
  xs:"100%",
  md:"80%"
 },
m:"auto",


}} >

<Grid container  spacing={{xs:3, md:2}} columns={{xs:5, sm:3, md:3}} sx={{ mx:{xs:1,lg:0} ,height:"250px" ,display:"flex"}}>

  
  
 
 <Swiper  slidesPerView={4} >
 <SwiperSlide>
 <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md border-black flex-col justify-start items-center relative '>
          <div className='w-100 h-[70%] '>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 object-cover ' />
          </div>
          <div className='absolute top-[60%] left-[30%] z-20 mb-4'>
          <Fab color="primary" aria-label="add" size='small' >
            <Add  />
          </Fab>
          </div>
          <div className='mt-6 text-center'>
            <Typography variant="body1" > create story</Typography>

          </div>
      </div>
    </Paper>
  </Grid>
 </SwiperSlide>
  <SwiperSlide>
  <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md  flex-col justify-start items-center relative '>
          <div className='w-100 h-100  border  rounded-md'>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 border rounded-md object-cover'/>
          </div>
          <div className='absolute top-[85%] left-[15%] z-20 mb-4'>
              <p className='text-slate-300 text-sm'>mostafa ibrahim</p>
          </div>
          <div className='absolute top-[5%] left-[5%] z-20 mb-4  border-3 border-lime-500 rounded-full '>
              <Avatar src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'/>
          </div>
          
      </div>
    </Paper>
  </Grid>
  </SwiperSlide>
  <SwiperSlide>
  <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md  flex-col justify-start items-center relative '>
          <div className='w-100 h-100 '>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 border rounded-md object-cover'/>
          </div>
          <div className='absolute top-[85%] left-[15%] z-20 mb-4'>
              <p className='text-slate-300 text-sm'>Abdallah samer</p>
          </div>
          <div className='absolute top-[5%] left-[5%] z-20 mb-4  border-3 border-lime-500 rounded-full '>
              <Avatar src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'/>
          </div>
          
      </div>
    </Paper>
  </Grid>
  </SwiperSlide>
  <SwiperSlide>
  <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md  flex-col justify-start items-center relative '>
          <div className='w-100 h-100 '>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 border rounded-md object-cover'/>
          </div>
          <div className='absolute top-[85%] left-[15%] z-20 mb-4'>
              <p className='text-slate-300 text-sm'>mohamed khald</p>
          </div>
          <div className='absolute top-[5%] left-[5%] z-20 mb-4  border-3 border-lime-500 rounded-full '>
              <Avatar src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'/>
          </div>
          
      </div>
    </Paper>
  </Grid>
  </SwiperSlide>
  <SwiperSlide>
  <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md  flex-col justify-start items-center relative '>
          <div className='w-100 h-100 '>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 border rounded-md object-cover'/>
          </div>
          <div className='absolute top-[85%] left-[15%] z-20 mb-4'>
              <p className='text-slate-300 text-sm'>ahmed anwar</p>
          </div>
          <div className='absolute top-[5%] left-[5%] z-20 mb-4  border-3 border-lime-500 rounded-full '>
              <Avatar src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'/>
          </div>
          
      </div>
    </Paper>
  </Grid>
  </SwiperSlide>
  <SwiperSlide>
  <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md  flex-col justify-start items-center relative '>
          <div className='w-100 h-100 '>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 border rounded-md object-cover'/>
          </div>
          <div className='absolute top-[85%] left-[15%] z-20 mb-4'>
              <p className='text-slate-300 text-sm'>mostafa saiid</p>
          </div>
          <div className='absolute top-[5%] left-[5%] z-20 mb-4  border-3 border-lime-500 rounded-full '>
              <Avatar src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'/>
          </div>
          
      </div>
    </Paper>
  </Grid>
  </SwiperSlide>
  <SwiperSlide>
  <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md  flex-col justify-start items-center relative '>
          <div className='w-100 h-100 '>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 border rounded-md object-cover'/>
          </div>
          <div className='absolute top-[85%] left-[15%] z-20 mb-4'>
              <p className='text-slate-300 text-sm'>ibrahim mosaad</p>
          </div>
          <div className='absolute top-[5%] left-[5%] z-20 mb-4  border-3 border-lime-500 rounded-full '>
              <Avatar src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'/>
          </div>
          
      </div>
    </Paper>
  </Grid>
  </SwiperSlide>
  <SwiperSlide>
  <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md  flex-col justify-start items-center relative '>
          <div className='w-100 h-100 '>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 border rounded-md object-cover'/>
          </div>
          <div className='absolute top-[85%] left-[15%] z-20 mb-4'>
              <p className='text-slate-300 text-sm'>mohamed khald</p>
          </div>
          <div className='absolute top-[5%] left-[5%] z-20 mb-4  border-3 border-lime-500 rounded-full '>
              <Avatar src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'/>
          </div>
          
      </div>
    </Paper>
  </Grid>
  </SwiperSlide>
  <SwiperSlide>
  <Grid item>
    <Paper sx={{mt:1}} elevation={6}>
      <div className=' h-[230px] max-w-screen-sm-[100px] max-w-screen-lg-[210px] border rounded-md  flex-col justify-start items-center relative '>
          <div className='w-100 h-100 '>
            <img alt='create story image' src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className='w-100 h-100 border rounded-md object-cover'/>
          </div>
          <div className='absolute top-[85%] left-[15%] z-20 mb-4'>
              <p className='text-slate-300 text-sm'>mohamed khald</p>
          </div>
          <div className='absolute top-[5%] left-[5%] z-20 mb-4  border-3 border-lime-500 rounded-full '>
              <Avatar src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'/>
          </div>
          
      </div>
    </Paper>
  </Grid>
  </SwiperSlide>
 </Swiper>
  

</Grid>

 </Box>
 <Divider sx={{border:"3px solid #333", opacity:".1",width:{
  xs:"80%",

 },
m:"auto"}}/>

 <Box sx={{width:{
  xs:"100%",
  md:"80%"
 },
m:"auto"
 }}>

  {myDataOfPst.map((data)=>(

  
    <Post  key={data.id}  AvatarImage={data.AvatarImage} AvatarTitle={data.AvatarTitle} time={data.Time} Discription={data.Discription} image={data.image}/>
  
  

  ))}
  
 </Box>
    
    </>
  )
}
