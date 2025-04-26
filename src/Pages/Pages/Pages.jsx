import React, { useState } from 'react'

// MUI IMPORT
import { Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ContactPage, Flag, FlagCircle, PostAdd } from '@mui/icons-material';
import Post from '../../Components/Post/Post';
import PageItem from '../../Components/PageListItem/PageItem';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Pages() {
const navegator = useNavigate()
    // mui state value 
      const [value, setValue] = React.useState(0);

      // state to show botton nav
      const[showPages,setShowPages]= useState("block")
      const[showUnFollowed,setShowUnFollowed]= useState("none")
      const[showCreatePages,setShowCreatePages]= useState("none")

  const Pages=[
    {
      id:111,
      PageName:" Al Ahly SC",
      pageImage:"/assets/img/whatsapp8.jpg",
      SubDiscription:"Sports Club",
      Followers:"18M",
      discription:"wellcom to Al Ahly SC Official FacePost Page  الصفحة الرئيسية للنادلا الأهلى ",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:2222,
      PageName:" FC Barcelona",
      pageImage:"/assets/img/whatsapp16.jpg",
      SubDiscription:"Sports Club",
      Followers:"118M",
      discription:"More than a club. Mes que un Club We #BarcaFans #ForcaBarcA",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:33333,
      PageName:"Real Madris C.F.",
      pageImage:"/assets/img/whatsapp11.jpg",
      SubDiscription:"Sports Club",
      Followers:"128M",
      discription:"Official profile of Real Madrid C.F. 15 times European Champions",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:4555555,
      PageName:"Saba7o Korah - صباحو كورة",
      pageImage:"/assets/img/whatsapp12.jpg",
      SubDiscription:"Interest",
      Followers:"2.2M",
      discription:"WWW.instagram.com/Nsoo7y www.Twitter.com/Nsoo7y www.Youtube.Com/Saba7oKorah",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:59999,
      PageName:"Erza3-أرزع",
      pageImage:"/assets/img/whatsapp13.jpg",
      SubDiscription:"Sports",
      Followers:"1.8M",
      discription:"لو جاى تتفرج عشان مستنى تحليل وتكتيك .. أحب أبشرك انت فى المكان الغلط علشان احنا جايين نرزع",
      About:"10+ Posts in the last 2 weeks",
      FollowType:true,
    },
    {
      id:3333300,
      PageName:"The painter",
      pageImage:"/assets/img/whatsapp11.jpg",
      SubDiscription:"pint",
      Followers:"128M",
      discription:"Official profile of Real Madrid C.F. 15 times European Champions",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:455555500,
      PageName:"MO-Sports",
      pageImage:"/assets/img/whatsapp13.jpg",
      SubDiscription:"Interest",
      Followers:"2.2M",
      discription:"WWW.instagram.com/Nsoo7y www.Twitter.com/Nsoo7y www.Youtube.Com/Saba7oKorah",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:5999900,
      PageName:"Classy",
      pageImage:"/assets/img/whatsapp16.jpg",
      SubDiscription:"Sports",
      Followers:"1.8M",
      discription:"لو جاى تتفرج عشان مستنى تحليل وتكتيك .. أحب أبشرك انت فى المكان الغلط علشان احنا جايين نرزع",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:2222001,
      PageName:" FrontEnd",
      pageImage:"/assets/img/whatsapp14.jpg",
      SubDiscription:"Sports Club",
      Followers:"118M",
      discription:"More than a club. Mes que un Club We #BarcaFans #ForcaBarcA",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:3333320001,
      PageName:"Mazike",
      pageImage:"/assets/img/whatsapp13.jpg",
      SubDiscription:"Music",
      Followers:"128M",
      discription:"Official profile of Real Madrid C.F. 15 times European Champions",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
   
  ]

  const unFollweds= [
     {
      id:3333300,
      PageName:"The painter",
      pageImage:"/assets/img/whatsapp11.jpg",
      SubDiscription:"pint",
      Followers:"128M",
      discription:"Official profile of Real Madrid C.F. 15 times European Champions",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:455555500,
      PageName:"MO-Sports",
      pageImage:"/assets/img/whatsapp13.jpg",
      SubDiscription:"Interest",
      Followers:"2.2M",
      discription:"WWW.instagram.com/Nsoo7y www.Twitter.com/Nsoo7y www.Youtube.Com/Saba7oKorah",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:5999900,
      PageName:"Classy",
      pageImage:"/assets/img/whatsapp16.jpg",
      SubDiscription:"Sports",
      Followers:"1.8M",
      discription:"لو جاى تتفرج عشان مستنى تحليل وتكتيك .. أحب أبشرك انت فى المكان الغلط علشان احنا جايين نرزع",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:2222001,
      PageName:" FrontEnd",
      pageImage:"/assets/img/whatsapp14.jpg",
      SubDiscription:"Sports Club",
      Followers:"118M",
      discription:"More than a club. Mes que un Club We #BarcaFans #ForcaBarcA",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:3333320001,
      PageName:"Mazike",
      pageImage:"/public/assets/img/whatsapp13.jpg",
      SubDiscription:"Music",
      Followers:"128M",
      discription:"Official profile of Real Madrid C.F. 15 times European Champions",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
   
    
  ]


  return (
    <>
        <Helmet>
        <title>pages</title>
       
    </Helmet>
    <Box sx={{width:{
      xs:"100%",
      md:"80%"
     },
    m:" 0px auto"
     }}>
    
    <Box sx={{
      width:{
        xs:"90%",
        sm:"60%"
      },
      m:"10px auto 30px"
     }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       
        <BottomNavigationAction label="All Pages" icon={<Flag />} onClick={()=>{
          setShowPages("block")
          setShowUnFollowed("none")
          setShowCreatePages("none")
        }} />
        <BottomNavigationAction label="Followed" icon={<FlagCircle />}onClick={()=>{
           setShowPages("none")
           setShowUnFollowed("block")
           setShowCreatePages("none")
        }}  />
        <BottomNavigationAction label="Create A new Page" icon={<ContactPage />} onClick={()=>{
           navegator("/Home/CreatePage")
        }}/>
       
      </BottomNavigation>
      

     </Box>
      
        {/* postas rerander */}
            <Box sx={{width:{
             xs:"100%",
             md:"80%"
            },
           m:"auto",
           display:`${showPages}`
            }}>
           
             {Pages.map((page)=>(
           
             
                <PageItem key={page.id} pageName={page.PageName} pageImage={page.pageImage} SubDiscription={page.SubDiscription} Followers={page.Followers} discription={page.discription} About={page.About} followType={page.FollowType} />             
             
           
             ))}
             
            </Box>
      
      
             {/* interActions rerander */}
            <Box sx={{width:{
             xs:"100%",
             md:"80%"
            },
      
           m:"auto",
            display:`${showUnFollowed}`
            }}>
           
             {unFollweds.map((page)=>(
           
             
              <PageItem key={page.id} pageName={page.PageName} pageImage={page.pageImage} SubDiscription={page.SubDiscription} Followers={page.Followers} discription={page.discription} About={page.About} followType={page.FollowType} />             
             
           
             ))}
             
            </Box>
      
      
      
            {/* cratePages  */}
      
            <Box sx={{width:{
             xs:"95%",
             md:"80%"
            },
           m:"auto",
            display:`${showCreatePages}`
            }}>
              
          
             
             
             
           
             
               
             
            </Box>
     </Box>
    </>
  )
}
