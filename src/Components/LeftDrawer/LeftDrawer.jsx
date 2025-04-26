import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { AddBox, Bookmark, ContactPage, Create, Diversity1, HomeFilled, Logout, People } from '@mui/icons-material';
const drawerWidth=240;
const drawerHeight=90
export default function LeftDrawer({showDrawer,setShowDrawer}) {
    const [selectedIndex, setSelectedIndex] = useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    // styled friends avatar 

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
    <Drawer
        sx={{
          width: `${drawerWidth}px`,
            height:`${drawerHeight}vh`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          display:{
            xs:`${showDrawer}`,
            lg:"block"
          }
        }}
        variant= "permanent"
        anchor="left"
        onClose={()=>{
          setShowDrawer("none")
        }}
       open={true}
      >
        <Toolbar />
        <Divider />
       <Box sx={{display:{xs:"block" , sm:"none"}}}>
       <List>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItem>
          <ListItemIcon>
          <HomeFilled sx={{color:"#0277bd"}} />
        </ListItemIcon>
          <Typography variant="body1" color="initial">
          <Link to={'/Home'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Home</Link>
          </Typography>
          
          </ListItem>
          </ListItemButton>
          </List>
        <List>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItem>
          <ListItemIcon>
          <People sx={{color:"#0277bd"}} />
        </ListItemIcon>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Friends'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Friends</Link>
          </Typography>
          
          </ListItem>
          </ListItemButton>
          </List>
        <List>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItem>
          <ListItemIcon>
          <ContactPage sx={{color:"#0277bd"}} />
        </ListItemIcon>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Pages'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Pages</Link>
          </Typography>
          
          </ListItem>
          </ListItemButton>
          </List>
       </Box>
          <List>
          <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
            <ListItem>
          <ListItemIcon>
          <Create sx={{color:"#00897b"}} />
        </ListItemIcon>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/CreatePost'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Create Post</Link>
          </Typography>
          
          </ListItem>
        </ListItemButton>
          </List>
          <List>
          <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
            <ListItem>
          <ListItemIcon>
          <AddBox sx={{color:"#6a1b9a"}} />
        </ListItemIcon>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/CreatePage'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Create Page</Link>
          </Typography>
          
          </ListItem>
        </ListItemButton>
          </List>
          <List>
          <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
        <ListItem>
          <ListItemIcon>
          <Bookmark sx={{color:"#3f51b5"}}/>
        </ListItemIcon>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Favorite'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Favorites</Link>
          </Typography>
          
          </ListItem>
        </ListItemButton>
          </List>
         <List>
         <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
        <ListItem>
          <ListItemIcon>
          <Logout sx={{color:"red"}}/>
        </ListItemIcon>
          <Typography variant="body1" color="initial">
          <Link to={'/'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Logout</Link>
          </Typography>
          
          </ListItem>
        </ListItemButton>
         </List>
          
        
        <Divider />
        <Typography variant="body1" color="initial" sx={{textAlign:"center",m:1}}>
            <Diversity1 style={{alignItems:"center" ,fontSize:".9rem",marginRight:"15px",color:"#455a64"}}/>
            Friends
            </Typography>
        <Divider/>
        <List>
        <ListItem>
        <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial" sx={{textAlign:"center"}}>
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Mostafa Ibrahim</Link>
          </Typography>
          </Stack>
          </ListItem>
          <ListItem>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Mostafa Saeed</Link>
          </Typography>
          </Stack>
          </ListItem>
          <ListItem>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Ibrahim mossad</Link>
          </Typography>
          </Stack>
          </ListItem>
          <ListItem>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Mohamed Khald</Link>
          </Typography>
          </Stack>
          </ListItem>
          <ListItem>
          <Stack direction="row" spacing={2}  sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
          <Typography variant="body1" color="initial">
          <Link to={'/Home/Profile'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Ahmed anwar</Link>
          </Typography>
          </Stack>
          </ListItem>
        
        </List>
      </Drawer>
    
    </>
  )
}
