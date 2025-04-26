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

  const unFollweds= [
     {
      id:3333300,
      PageName:"The painter",
      pageImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
      SubDiscription:"pint",
      Followers:"128M",
      discription:"Official profile of Real Madrid C.F. 15 times European Champions",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:455555500,
      PageName:"MO-Sports",
      pageImage:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      SubDiscription:"Interest",
      Followers:"2.2M",
      discription:"WWW.instagram.com/Nsoo7y www.Twitter.com/Nsoo7y www.Youtube.Com/Saba7oKorah",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:5999900,
      PageName:"Classy",
      pageImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s",
      SubDiscription:"Sports",
      Followers:"1.8M",
      discription:"لو جاى تتفرج عشان مستنى تحليل وتكتيك .. أحب أبشرك انت فى المكان الغلط علشان احنا جايين نرزع",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:2222001,
      PageName:" FrontEnd",
      pageImage:"https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
      SubDiscription:"Sports Club",
      Followers:"118M",
      discription:"More than a club. Mes que un Club We #BarcaFans #ForcaBarcA",
      About:"10+ Posts in the last 2 weeks",
      FollowType:false,
    },
    {
      id:3333320001,
      PageName:"Mazike",
      pageImage:"https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
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
