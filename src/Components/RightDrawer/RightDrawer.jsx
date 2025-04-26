import { ArrowBackIos, ArrowForwardIos, OnlinePrediction } from '@mui/icons-material';
import { Avatar, AvatarGroup, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography} from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
const drawerWidth=240;
const drawerHeight=90
export default function LeftDrawer({showRightDrawer}) {
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
            xs:`${showRightDrawer}`,
            lg:"block"
          }
        }}
        variant="permanent"
        anchor="right"
open={true}
      >
        <Toolbar />
        <Divider />
        <List>
          <Typography variant="body1" color="initial" sx={{m:1,textAlign:"center"}}>
            <OnlinePrediction style={{fontSize:"1.2rem",marginRight:"15px",textAlign:"center",color:"#64dd17"}}/>
            online Friends
          </Typography>
          <Divider/>
          <Box sx={{display:'flex' ,overflow:"hidden" ,justifyContent:"center",m:2}}>
          <AvatarGroup
      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
      total={6}
    >
             <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
      </StyledBadge>
          
             </Stack>
             <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/2.jpg" />
      </StyledBadge>
          
             </Stack>
             <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/3.jpg" />
      </StyledBadge>
          
             </Stack>
             <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/4.jpg" />
      </StyledBadge>
          
             </Stack>
    </AvatarGroup>
          </Box>
        </List>
        <Divider />
        <List>
         <Typography variant="body1" color="initial" sx={{m:1,textAlign:"center"}}>Pages</Typography>
         <Divider/>
        <Box>
        <List>
        <ListItem>
         <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
        <ListItem>
        <ArrowForwardIos  sx={{fontSize:".9rem"}}/>
        <Typography variant="body1" color="initial">
                    <Link to={'/'} style={{marginLeft:16,textDecoration:"none",color:"#424242"}} >SabahoKora</Link>
          </Typography>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemIcon>
          
                    
          
          </ListItem>
        </ListItemButton>
         </ListItem>
         <Divider/>
        
        <ListItem>
         <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
        <ListItem>
        <ArrowForwardIos sx={{fontSize:".9rem"}}/>
        <Typography variant="body1" color="initial">
                    <Link to={'/'} style={{marginLeft:16,textDecoration:"none",color:"#424242"}} >SabahoKora</Link>
          </Typography>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemIcon>
          
                    
          
          </ListItem>
        </ListItemButton>
         </ListItem>
         <Divider/>
        <ListItem>
         <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
        <ListItem>
        <ArrowForwardIos sx={{fontSize:".9rem"}}/>
        <Typography variant="body1" color="initial">
                    <Link to={'/'} style={{marginLeft:16,textDecoration:"none",color:"#424242"}} >SabahoKora</Link>
          </Typography>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemIcon>
          </ListItem>
        </ListItemButton>
         </ListItem>
         <Divider/>
        <ListItem>
         <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, )}
        >
        <ListItem>
        <ArrowForwardIos sx={{fontSize:".9rem"}}/>
        <Typography variant="body1" color="initial">
                    <Link to={'/'} style={{marginLeft:16,textDecoration:"none",color:"#424242"}} >SabahoKora</Link>
          </Typography>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemIcon>
          
                    
          
          </ListItem>
        </ListItemButton>
         </ListItem>
        </List>
       
        </Box>
        </List>
      </Drawer>
    
    </>
  )
}
