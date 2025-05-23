
// MUI IMPORT
import { Avatar, Box, Divider, Grid, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Cake, CheckCircleSharp, ContactPage, Email, InfoSharp, Instagram, LocalPhone, PostAdd } from '@mui/icons-material';
import Post from '../../Components/Post/Post';
import PageItem from '../../Components/PageListItem/PageItem';
import Featuers from '../../Components/Featuers/Featuers';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Helmet } from 'react-helmet';


export default function Profile() {
  


    
    

    // data
  const myPost=[
    {
      id:20,
      AvatarImage:'https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj',
      AvatarTitle:"Al Ahly SC",
      Time:"2m",
      Discription:"هنا الاهلى هنا ابطال الدورى ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6EfolncyI49pmywn8SG-x6nLgb8x4Yi0zA&s"
    },
    {
      id:20121,
      AvatarImage:'https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj',
      AvatarTitle:"Al Ahly SC",
      Time:"2m",
      Discription:"هنا الاهلى هنا ابطال الدورى ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6EfolncyI49pmywn8SG-x6nLgb8x4Yi0zA&s "
    },
    {
      id:2000,
      AvatarImage:'https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj',
      AvatarTitle:"Al Ahly SC",
      Time:"2m",
      Discription:"هنا الاهلى هنا ابطال الدورى ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6EfolncyI49pmywn8SG-x6nLgb8x4Yi0zA&s"
    },
    {
      id:2074586,
      AvatarImage:'https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj',
      AvatarTitle:"Al Ahly SC",
      Time:"2m",
      Discription:"هنا الاهلى هنا ابطال الدورى ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6EfolncyI49pmywn8SG-x6nLgb8x4Yi0zA&s "
    },
    {
      id:204568,
      AvatarImage:'https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj',
      AvatarTitle:"Al Ahly SC",
      Time:"2m",
      Discription:"هنا الاهلى هنا ابطال الدورى ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6EfolncyI49pmywn8SG-x6nLgb8x4Yi0zA&s"
    },
    {
      id:204523,
      AvatarImage:'https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj',
      AvatarTitle:"Al Ahly SC",
      Time:"2m",
      Discription:"هنا الاهلى هنا ابطال الدورى ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6EfolncyI49pmywn8SG-x6nLgb8x4Yi0zA&s "
    },
    {
      id:20415,
      AvatarImage:'https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj',
      AvatarTitle:"Al Ahly SC",
      Time:"2m",
      Discription:"هنا الاهلى هنا ابطال الدورى ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6EfolncyI49pmywn8SG-x6nLgb8x4Yi0zA&s"
    },
    
  ]

  


  return (
    <>
        <Helmet>
        <title>Page</title>
       
    </Helmet>
     <Box sx={{
      width:{
        xs:"95%",
        md:"100%"
      },
      m:{
        xs:" -10px auto",
        
      }
     }}>
       <div className=' h-[55vh] border rounded-md relative'>
        <img alt='profiel cover' src='https://waya.media/arabi/wp-content/uploads/sites/2/2021/11/Al-Ahly-1600px.jpg' className='w-full h-full object-cover border rounded-md'/>
        
       

        <div className='w-[200px] h-[200px] absolute top-[70%] left-2 bg-black border-3 border-white rounded-full'>
        <img alt='profiel cover' src='https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj' className='w-full h-full object-cover border rounded-full'/>
        </div>
         
        
      </div>
     </Box>
     <Box sx={{
      width:{
        xs:"95%",
        md:"100%"
      },
      m:{
        xs:" 0 auto",
        
      }}}>
        <Box>
        <div className='mt-[120px] ml-9'>
          <h1 className='text-slate-800'>Al Ahly SC <CheckCircleSharp sx={{ color:"blue"}}/></h1>
          <h6 className='text-[.9rem] ml-4 text-slate-600'>14M <em className='text-slate-400'>Likes</em> . 18M <em className='text-slate-400'>followers</em></h6>
          <div className='flex '>
            <Avatar alt='frinds' src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'sx={{ml:"1px",mt:2,}}/>
            <Avatar alt='frinds' src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'sx={{ml:"1px",mt:2}}/>
            <Avatar alt='frinds' src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'sx={{ml:"1px",mt:2}}/>
            <Avatar alt='frinds' src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'sx={{ml:"1px",mt:2}}/>
          </div>
          <h1 className='text-gray-600 text-[1.1rem] my-3'>Welcom to Al Ahly SC Official FacePost Page  الصفحة الرسمية للنادى الأهلى </h1>
        </div>
        <Divider sx={{border:"1px solid #ccc", opacity:".3", width:"90%" ,m:" 30px auto"}}/>
        <div className='ml-[10%]' >
         <h1  className='text-slate-800 font-semibold text-[1.3rem]'>Details</h1>
         <div className='flex justify-start items-start'>
         <InfoSharp className='text-slate-400 mr-2'/>
         <div>
         <h2 className='text-slate-600 text-[1.1rem]  flex justify-start items-center mb-0 font-bold'>  Page . Sports Club</h2>
         <h2 className='text-slate-400 text-[.6rem] flex justify-start items-center mt-1 ml-1'> Al Ahly SC Sports Club is resbonsible for this page</h2>
         </div>
         </div>
  
         <h2 className='text-slate-600 font-bold text-[1.1rem] mt-2 flex justify-start items-center'> <Instagram className='text-slate-400 mr-2'/> alahly and other 5 links</h2>
        </div>
        

        
        </Box>
  
     </Box>
     <h1  className='text-slate-800 font-semibold text-[1.3rem] ml-[13%] my-4'>Featuered</h1>
    <Grid container  spacing={{xs:3, md:2}} columns={{xs:1, sm:2, md:4}} sx={{ mx:{xs:1,lg:0}  ,display:"flex"}}>
        <Swiper slidesPerView={1} loop={true}>
            <SwiperSlide>
                <Grid item>
                    <Featuers/>
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid item>
                    <Featuers/>
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid item>
                    <Featuers/>
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid item>
                    <Featuers/>
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid item>
                    <Featuers/>
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid item>
                    <Featuers/>
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid item>
                    <Featuers/>
                </Grid>
            </SwiperSlide>
        </Swiper>
    </Grid>


     
    {/* postas rerander */}
      <Box sx={{width:{
       xs:"100%",
       md:"80%"
      },
     m:"auto",
     display:`block`
      }}>
     
       {myPost.map((data)=>(
     
       
         <Post  key={data.id}  AvatarImage={data.AvatarImage} AvatarTitle={data.AvatarTitle} time={data.Time} Discription={data.Discription} image={data.image}/>
       
       
     
       ))}
       
      </Box>


     



     
    
    </>
  )
}
