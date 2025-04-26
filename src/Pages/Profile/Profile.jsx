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
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:1,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:"../../../public/assets/img/whatsapp.jpg"
    },
    {
      id:2,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:2010,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:200,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:2000,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:20000,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
  ]

  const interActions=[
    {
      id:89754,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:2145214521,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:21425632541,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:2245152362,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },{
      id:278459658,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:140032520,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCBQAq4fDkjizcfZGBW_6ir3gL4Kd8b_3fA&s"
    },
    {
      id:3458741250,
      AvatarImage:'../../../public/assets/img/whatsapp8.jpg',
      AvatarTitle:"AlAhly SC",
      Time:"10m",
      Discription:"الأهلي يشكر وزير الداخلية والقيادات الأمنية للموافقة على طلب النادي بالسعة الكاملة في لقاء صن داون",
      image:"../../../public/assets/img/whatsapp7.jpg"
    },
    {
      id:47845623541000,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:167745846958,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:5142514251,
      AvatarImage:'../../../public/assets/img/whatsapp3.jpg',
      AvatarTitle:"Mohamed Khaled",
      Time:"30m",
      Discription:"i'm mohamed haled lorem ipsom ",
      image:"../../../public/assets/img/whatsapp3.jpg"
    },
    {
      id:674584754213659,
      AvatarImage:'../../../public/assets/img/whatsapp2.jpg',
      AvatarTitle:"Abdallah samer",
      Time:"30m",
      Discription:"i'm abdallah lorem ipsom ",
      image:"../../../public/assets/img/whatsapp2.jpg"
    },
    {
      id:774123654,
      AvatarImage:'../../../public/assets/img/whatsapp4.jpg',
      AvatarTitle:"Ahmed Anwar",
      Time:"now",
      Discription:"i'mAhmed haled lorem ipsom ",
      image:"../../../public/assets/img/whatsapp4.jpg"
    },
    {
      id:8745621,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:97532156,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:10000251,
      AvatarImage:'../../../public/assets/img/whatsapp5.jpg',
      AvatarTitle:"mostafa Saaed",
      Time:"1h",
      Discription:"i'm mostafa haled lorem ipsom ",
      image:"../../../public/assets/img/whatsapp5.jpg"
    },
    {
      id:110012351234,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:1241253210,
      AvatarImage:'../../../public/assets/img/whatsapp.jpg',
      AvatarTitle:"mostafa Ibrahim",
      Time:"2m",
      Discription:"my name is mostafa ibrahim and i'm front end developer",
      image:" "
    },
    {
      id:1375632653,
      AvatarImage:'../../../public/assets/img/whatsapp6.jpg',
      AvatarTitle:"Ibrahem Mosaad",
      Time:"33m",
      Discription:"i'm  ibrahim haled lorem ipsom ",
      image:"../../../public/assets/img/whatsapp6.jpg"
    },
  ]
  const Pages=[
    {
      id:111,
      PageName:" Al Ahly SC",
      pageImage:"../../../public/assets/img/whatsapp8.jpg",
      SubDiscription:"Sports Club",
      Followers:"18M",
      discription:"wellcom to Al Ahly SC Official FacePost Page  الصفحة الرئيسية للنادلا الأهلى ",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:2222,
      PageName:" FC Barcelona",
      pageImage:"../../../public/assets/img/whatsapp16.jpg",
      SubDiscription:"Sports Club",
      Followers:"118M",
      discription:"More than a club. Mes que un Club We #BarcaFans #ForcaBarcA",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:33333,
      PageName:"Real Madris C.F.",
      pageImage:"../../../public/assets/img/whatsapp11.jpg",
      SubDiscription:"Sports Club",
      Followers:"128M",
      discription:"Official profile of Real Madrid C.F. 15 times European Champions",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:4555555,
      PageName:"Saba7o Korah - صباحو كورة",
      pageImage:"../../../public/assets/img/whatsapp12.jpg",
      SubDiscription:"Interest",
      Followers:"2.2M",
      discription:"WWW.instagram.com/Nsoo7y www.Twitter.com/Nsoo7y www.Youtube.Com/Saba7oKorah",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:59999,
      PageName:"Erza3-أرزع",
      pageImage:"../../../public/assets/img/whatsapp13.jpg",
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
        <img alt='profiel cover' src='../../../public/assets/img/whatsapp9.jpg' className='w-full h-full object-cover border rounded-md'/>
        
        <div className='bg-blue-700 border rounded-full absolute bottom-[-6%] right-[1%] w-[60px] h-[60px] flex justify-center items-center'>
       <EditIcon sx={{color:"#fff"}}/>
        </div>

        <div className='w-[200px] h-[200px] absolute top-[70%] left-2 bg-black border-3 border-white rounded-full'>
        <img alt='profiel cover' src='../../../public/assets/img/whatsapp.jpg' className='w-full h-full object-cover border rounded-full'/>
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
            <Avatar alt='frinds' src='../../../public/assets/img/whatsapp2.jpg'sx={{ml:"1px",mt:2,}}/>
            <Avatar alt='frinds' src='../../../public/assets/img/whatsapp3.jpg'sx={{ml:"1px",mt:2}}/>
            <Avatar alt='frinds' src='../../../public/assets/img/whatsapp4.jpg'sx={{ml:"1px",mt:2}}/>
            <Avatar alt='frinds' src='../../../public/assets/img/whatsapp5.jpg'sx={{ml:"1px",mt:2}}/>
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
