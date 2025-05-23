import { Box, Button, Divider, IconButton } from '@mui/material'
import React from 'react'
import FriendItem from '../../Components/Friend/FriendItem'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Friends() {
const navegator= useNavigate()
   // mui state value 
       
  const friends= [
    {
      id:1234,
      FriendName:"Mostafa Ibrahim",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:12345,
      FriendName:"Mohamed Khaled",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:1234,
      FriendName:"Abdallah Samer",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:320,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:1234,
      FriendName:"Mostafa Saied",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:510,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:123466,
      FriendName:"Ahmed Anwar",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:1234,
      FriendName:"ibrahim Mosaad",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:12349,
      FriendName:"Mostafa Ibrahim",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:12344,
      FriendName:"Mostafa Ibrahim",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:12340,
      FriendName:"Mostafa Ibrahim",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:123478,
      FriendName:"Mostafa Ibrahim",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:12344521,
      FriendName:"Mostafa Ibrahim",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpgg"
      }
    },
    {
      id:12341596,
      FriendName:"Mostafa Ibrahim",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
    {
      id:1234000,
      FriendName:"Mostafa Ibrahim",
      FriendImage:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      FriendMutual:1220,
      MutualImage:{
        first:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        second:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
      }
    },
  ]
  return (
   <>
         <Helmet>
        <title>Your Friends</title>
       
    </Helmet>

      
      
         
      <Box sx={{
        width:{
          xs:"90%",
          sm:"60%",

        },
        m:" 10px auto"
      }}>
     <div className='flex justify-center items-center mb-3'>
    
      <Button variant="contained" onClick={()=>{
        navegator("/Home/YourFriend")
      }}
      
      sx={{
        fontSize:{
          xs:".3rem",
          sm:".7rem",
          md:".9rem"
        },mr:2,
        backgroundColor:"#616161"
      }}
      >
        <span className='w-[10px] h-[10px] rounded-full bg-green-500 mr-1'></span>
        1250 Online
        </Button>
      
      
      <Button variant="contained" onClick={()=>{
        navegator("/Home/AcceptFriend")
      }}
        sx={{
        fontSize:{
          xs:".3rem",
          sm:".7rem",
          md:".9rem"
        },mr:2,
        backgroundColor:"#616161"
      }}
      
      >Friend Request</Button>
      
      
      <Button variant="contained" onClick={()=>{
        navegator("/Home/Friends")
      }}
        sx={{
        fontSize:{
          xs:".3rem",
          sm:".7rem",
          md:".9rem"
        },
        backgroundColor:"#616161"
      }}
      
      >Your Friends</Button>
      
     </div>
      <Divider sx={{border:"1px solid #ccc"}}/>
         <h1 className='my-3 text-slate-800 text-[1.1rem]'>people you may know</h1>
        {friends.map((friend)=>(
          <FriendItem friendName={friend.FriendName} friendImage={friend.FriendImage} mutualFrist={friend.MutualImage.first} mutualsecond={friend.MutualImage.second} mutual={friend.FriendMutual}/>
        ))}



      </Box>
   
   
   </>
  )
}
