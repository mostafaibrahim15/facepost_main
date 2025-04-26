import { ArrowBackIos, Close, Search } from '@mui/icons-material'
import { Avatar, Badge, Box, Button, IconButton, Input, InputAdornment, List, ListItem, Paper, Stack, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'

export default function YourFriend() {
    const navigator= useNavigate()

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
  return (
    <>
        <Helmet>
        <title>friends</title>
       
    </Helmet>
     <Box sx={{
        width:{
            xs:"90%",
            sm:"30%",
            md:"60%"
        },
        m:" 10px auto",
       
     }}>
        <div className='flex justify-between items-center'>
        
            <IconButton onClick={()=>{
                navigator("/Home/Friends")
            }}>
                <ArrowBackIos sx={{color:"#333"}}/>
            </IconButton>
            <h3 className='text-[1.1rem]' >Your friends</h3>
            <IconButton>
                <Search/>
            </IconButton>

       
        </div>
        <div >
            <TextField type='search' placeholder='Search Friends' sx={{width:"100%",my:2}}
             slotProps={{
                      input:{
                        startAdornment:(
                          <InputAdornment position='start'>
                               <Search sx={{color:"#000"}}/>                             
                          </InputAdornment>
                        )
                      }
                     }} 
            
            
            />
        </div>
        <div className='flex flex-col justify-start items-start'>
            <div className='flex justify-between items-start w-full '>
                     <div>
                        <h3 className='text-slate-800 text-[.9rem] mb-0'>5 Friends have birthday Today!</h3>
                        <p className='text-slate-600 text-[.6rem] mt-0'>Brighten their day with a message</p>
                     </div>
                     <div>
                        <Close sx={{color:"black",fontSize:"2.3rem"}}/>
                     </div>
            </div>
            <div className='flex justify-start items-center'>
                     <div className='flex'>
                     <Avatar src='../../../public/assets/img/whatsapp.jpg'/>
                     <Avatar src='../../../public/assets/img/whatsapp2.jpg'/>
                     <Avatar src='../../../public/assets/img/whatsapp3.jpg'/>
                     </div>
                     <div>
                        <p className='text-slate-400 ml-4 text-[.6rem]'>mohamed khaled , abdallah smaer,mostafa ibrahim have a birthday today</p>
                     </div>
            </div>
            <Button variant="contained" sx={{width:"100%",my:3}}>See bithdays</Button>
        </div>
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex-col justify-start items-start'>
                     <h3 className='text-[.9rem] text-slate-800 mb-0'>4.951 Friends</h3>
                     <h3 className='text-[.6rem] text-slate-700 mt-0'>469 online</h3>
                </div>
                <div>
                <Button variant="text" sx={{color:"blue"}}>Sort</Button>
                </div>
            </div>
            <div>
            <List>
         <Paper elevation={1}>
      <ListItem sx={{mb:3}}>
        <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial" sx={{textAlign:"center"}}>
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Mostafa Ibrahim</Link>
          </Typography>
          </Stack>
          </ListItem>
         </Paper>
          <Paper elevation={1}>
          <ListItem sx={{mb:3}}>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp2.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Abdallah Samer</Link>
          </Typography>
          </Stack>
          </ListItem>
          </Paper>
          <Paper elevation={1}>
          <ListItem sx={{mb:3}}>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp3.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Mohamed Khaled</Link>
          </Typography>
          </Stack>
          </ListItem>
          </Paper>
         <Paper elevation={1}>
         <ListItem sx={{mb:3}}>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp4.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Ahmed Anwar</Link>
          </Typography>
          </Stack>
          </ListItem>
         </Paper>
          <Paper elevation={1}>
          <ListItem sx={{mb:3}}>
          <Stack direction="row" spacing={2}  sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp5.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Ahmed anwar</Link>
          </Typography>
          </Stack>
          </ListItem>
          </Paper>
         <Paper elevation={1}>
      <ListItem sx={{mb:3}}>
        <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial" sx={{textAlign:"center"}}>
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Mostafa Ibrahim</Link>
          </Typography>
          </Stack>
          </ListItem>
         </Paper>
          <Paper elevation={1}>
          <ListItem sx={{mb:3}}>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp2.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Abdallah Samer</Link>
          </Typography>
          </Stack>
          </ListItem>
          </Paper>
          <Paper elevation={1}>
          <ListItem sx={{mb:3}}>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp3.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Mohamed Khaled</Link>
          </Typography>
          </Stack>
          </ListItem>
          </Paper>
         <Paper elevation={1}>
         <ListItem sx={{mb:3}}>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp4.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Ahmed Anwar</Link>
          </Typography>
          </Stack>
          </ListItem>
         </Paper>
          <Paper elevation={1}>
          <ListItem sx={{mb:3}}>
          <Stack direction="row" spacing={2}  sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp5.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Ahmed anwar</Link>
          </Typography>
          </Stack>
          </ListItem>
          </Paper>
          
        
            </List>
            </div>
        </div>

     </Box>
    
    </>
  )
}
