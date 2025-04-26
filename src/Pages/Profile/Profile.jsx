import React, { useState } from 'react'
// MUI IMPORT
import { Avatar, Box, Divider, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Cake, ContactPage, Email, InfoSharp, LocalPhone, PostAdd } from '@mui/icons-material';
import Post from '../../Components/Post/Post';
import PageItem from '../../Components/PageListItem/PageItem';
import { Helmet } from 'react-helmet';


export default function Profile() {
    // mui state value 
    const [value, setValue] = React.useState(0);


    // state to show botton nav
    const[showPosts,setShowPosts]= useState("block")
    const[showInterActions,setShowInterActions]= useState("none")
    const[showPages,setShowPages]= useState("none")

    // data
  const myPost=[
    {
      id:20,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:1,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
    },
    {
      id:2,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:2010,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:200,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:2000,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:20000,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
  ]

  const interActions=[
    {
      id:89754,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:2145214521,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:21425632541,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:2245152362,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:278459658,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:140032520,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCBQAq4fDkjizcfZGBW_6ir3gL4Kd8b_3fA&s"
    },
    {
      id:3458741250,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"AlAhly SC",
      Time:"10m",
      Discription:"الأهلي يشكر وزير الداخلية والقيادات الأمنية للموافقة على طلب النادي بالسعة الكاملة في لقاء صن داون",
      image:"/assets/img/whatsapp7.jpg"
    },
    {
      id:47845623541000,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:167745846958,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:5142514251,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"Mohamed Khaled",
      Time:"30m",
      Discription:"i'm mohamed haled lorem ipsom ",
      image:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
    },
    {
      id:674584754213659,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"Abdallah samer",
      Time:"30m",
      Discription:"i'm abdallah lorem ipsom ",
      image:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
    },
    {
      id:774123654,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"Ahmed Anwar",
      Time:"now",
      Discription:"i'mAhmed haled lorem ipsom ",
      image:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
    },
    {
      id:8745621,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:97532156,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:10000251,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Saaed",
      Time:"1h",
      Discription:"i'm mostafa haled lorem ipsom ",
      image:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
    },
    {
      id:110012351234,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:1241253210,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:1375632653,
      AvatarImage:'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      AvatarTitle:"Ibrahem Mosaad",
      Time:"33m",
      Discription:"i'm  ibrahim haled lorem ipsom ",
      image:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
    },
  ]
  const Pages=[
    {
      id:111,
      PageName:" Al Ahly SC",
      pageImage:"https://yt3.googleusercontent.com/yrY1DmfWUL92B98od7vzgVMye6tUIJ_Rx80_vsKN6cw4uh_V1QJ_pl20QXD0CdXtSnUBH2sm7g=s900-c-k-c0x00ffffff-no-rj",
      SubDiscription:"Sports Club",
      Followers:"18M",
      discription:"wellcom to Al Ahly SC Official FacePost Page  الصفحة الرئيسية للنادلا الأهلى ",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:2222,
      PageName:" FC Barcelona",
      pageImage:"https://yt3.googleusercontent.com/XqEaCNiBlQxgZtWTgljc-d6r6O-oF2cLsaDIn73mlxFmZ3pYV0tEtAvOM_FMoiMa6FLY2ToR6sw=s900-c-k-c0x00ffffff-no-rj",
      SubDiscription:"Sports Club",
      Followers:"118M",
      discription:"More than a club. Mes que un Club We #BarcaFans #ForcaBarcA",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:33333,
      PageName:"Real Madris C.F.",
      pageImage:"https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/250px-Real_Madrid_CF.svg.png",
      SubDiscription:"Sports Club",
      Followers:"128M",
      discription:"Official profile of Real Madrid C.F. 15 times European Champions",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:4555555,
      PageName:"Saba7o Korah - صباحو كورة",
      pageImage:"https://yt3.googleusercontent.com/GbE7-cRBuImGL-EkdRJuMUsbvWPtaBN5_vHYY58RiIgqi3fppRlzlqK9QXCcplFWDrK459kMqg=s900-c-k-c0x00ffffff-no-rj",
      SubDiscription:"Interest",
      Followers:"2.2M",
      discription:"WWW.instagram.com/Nsoo7y www.Twitter.com/Nsoo7y www.Youtube.Com/Saba7oKorah",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:59999,
      PageName:"Erza3-أرزع",
      pageImage:"https://yt3.googleusercontent.com/_vH0WcA8Am2s_NuuPHCns47b2SK07Wv7jCU2zh8eYQSjOOKBsNrH3w4bYKRtxUia9loagHWi=s900-c-k-c0x00ffffff-no-rj",
      SubDiscription:"Sports",
      Followers:"1.8M",
      discription:"لو جاى تتفرج عشان مستنى تحليل وتكتيك .. أحب أبشرك انت فى المكان الغلط علشان احنا جايين نرزع",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
   
  ]



  return (
    <>
        <Helmet>
        <title>profile</title>
       
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
        <img alt='profiel cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK80rP7gR9SwE7wP8EmgTHXxGRpMCQEQ4Rw&s' className='w-full h-full object-cover border rounded-md'/>
        
        <div className='bg-blue-700 border rounded-full absolute bottom-[-6%] right-[1%] w-[60px] h-[60px] flex justify-center items-center'>
       <EditIcon sx={{color:"#fff"}}/>
        </div>

        <div className='w-[200px] h-[200px] absolute top-[70%] left-2 bg-black border-3 border-white rounded-full'>
        <img alt='profiel cover' src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg' className='w-full h-full object-cover border rounded-full'/>
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
        <div className='mt-[120px] ml-16'>
          <h1 className='text-slate-800'>Mostafa Ibrahim</h1>
          <h6 className='text-[.9rem] ml-4 text-slate-600'>5K <em className='text-slate-400'>followers</em> . 1.2K <em className='text-slate-400'>following</em></h6>
          <div className='flex '>
            <Avatar alt='frinds' src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'sx={{ml:"1px",mt:2,}}/>
            <Avatar alt='frinds' src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'sx={{ml:"1px",mt:2}}/>
            <Avatar alt='frinds' src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'sx={{ml:"1px",mt:2}}/>
            <Avatar alt='frinds' src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'sx={{ml:"1px",mt:2}}/>
          </div>
        </div>
        <Divider sx={{border:"1px solid #ccc", opacity:".3", width:"90%" ,m:" 30px auto"}}/>
        <div className='ml-[10%]' >
         <h1  className='text-slate-800 font-semibold text-[1.3rem]'>Details</h1>
         <h2 className='text-slate-800 text-[1.1rem] mt-4 flex justify-start items-center'> <InfoSharp className='text-slate-400 mr-2'/> Profile . Digital creator</h2>
         <h2 className='text-slate-800 text-[1.1rem] mt-4 flex justify-start items-center ml-[-1%]'> <Avatar  className='mr-3'sizes='small'/> Works at computer Sciencs at city of culture & science city</h2>
         <h2 className='text-slate-700 text-[1.1rem] mt-4 flex justify-start items-center'> <Email className='text-slate-400 mr-2'/> mibrahimabdlglil@gmail.com</h2>
         <h2 className='text-slate-700 text-[1.1rem] mt-4 flex justify-start items-center'> <LocalPhone className='text-slate-400 mr-2'/> 01016438479</h2>
         <h2 className='text-slate-700 text-[1.1rem] mt-4 flex justify-start items-center'> <Cake className='text-slate-400 mr-2'/> October 1,1998</h2>
        </div>
        <Divider sx={{border:"1px solid #ccc", opacity:".3", width:"90%" ,m:" 30px auto"}}/>
        </Box>
     </Box>

     <Box sx={{
      width:{
        xs:"90%",
        sm:"60%"
      },
      m:" 0 auto 50px "
     }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       
        <BottomNavigationAction label="Posts" icon={<PostAdd />} onClick={()=>{
          setShowPosts("block")
          setShowInterActions("none")
          setShowPages("none")
        }} />
        <BottomNavigationAction label="Interactions" icon={<FavoriteIcon />}onClick={()=>{
           setShowPosts("none")
           setShowInterActions("block")
           setShowPages("none")
        }}  />
        <BottomNavigationAction label="Pages" icon={<ContactPage />} onClick={()=>{
           setShowPosts("none")
           setShowInterActions("none")
           setShowPages("block")
        }}/>
       
      </BottomNavigation>
      

     </Box>
     {/* <Divider sx={{border:"1px solid #333", opacity:".1rem", width:"90%" ,m:" 30px auto"}}/> */}
    {/* postas rerander */}
      <Box sx={{width:{
       xs:"100%",
       md:"80%"
      },
     m:"auto",
     display:`${showPosts}`
      }}>
     
       {myPost.map((data)=>(
     
       
         <Post  key={data.id}  AvatarImage={data.AvatarImage} AvatarTitle={data.AvatarTitle} time={data.Time} Discription={data.Discription} image={data.image}/>
       
       
     
       ))}
       
      </Box>


       {/* interActions rerander */}
      <Box sx={{width:{
       xs:"100%",
       md:"80%"
      },

     m:"auto",
      display:`${showInterActions}`
      }}>
     
       {interActions.map((data)=>(
     
       
         <Post  key={data.id}  AvatarImage={data.AvatarImage} AvatarTitle={data.AvatarTitle} time={data.Time} Discription={data.Discription} image={data.image}/>
       
       
     
       ))}
       
      </Box>



      {/* pages rerander */}

      <Box sx={{width:{
       xs:"95%",
       md:"80%"
      },
     m:"auto",
      display:`${showPages}`
      }}>
        
     
       {Pages.map((page)=>(
        <PageItem key={page.id} pageName={page.PageName} pageImage={page.pageImage} SubDiscription={page.SubDiscription} Followers={page.Followers} discription={page.discription} About={page.About} followType={page.FollowType} />
       ))}
       
       
     
       
         
       
      </Box>
    
    </>
  )
}
