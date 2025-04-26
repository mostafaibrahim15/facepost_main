import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { ArrowBackIosNew, ArrowDropDown, ArrowForwardIos, Close, List } from '@mui/icons-material';




export default function HomeNavbar({setShowDrawer,openOrClose,setOpenOrClose}) {
    const [anchorElNav, setAnchorElNav] = useState(null);

  
  
 
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
   
  return (
  <>
  
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to={'/Home'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >FacePost </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {openOrClose ==="open"?<>
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
             
              color="inherit"
              onClick={()=>{  
               
                setShowDrawer("none")
                setOpenOrClose("close")
              }}
            >
             <ArrowBackIosNew />
            </IconButton>
            </>:<>
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
             
              color="inherit"
              onClick={()=>{  
                setOpenOrClose("open")
                setShowDrawer("block")
               
              }}
            >
              <MenuIcon  />
            </IconButton>
            
            </>}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              
                <MenuItem >
                  <Typography sx={{ textAlign: 'center' }}>
                  <Link to={"/Home"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}  >Home </Link>
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography sx={{ textAlign: 'center' }}>
                  <Link to={"/Home/Pages"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}  >Pages </Link>
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography sx={{ textAlign: 'center' }}>
                  <Link to={"/Home/Friends"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}  >Friends </Link>
                  </Typography>
                </MenuItem>
       
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             <Link to={'/Home'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >FacePost </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <MenuItem >
                  <Typography sx={{ textAlign: 'center' }}>
                  <Link to={"/Home"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}  >Home </Link>
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography sx={{ textAlign: 'center' }}>
                  <Link to={"/Home/Pages"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}  >Pages </Link>
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography sx={{ textAlign: 'center' }}>
                  <Link to={"/Home/Friends"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}  >Friends </Link>
                  </Typography>
                </MenuItem>
         
          </Box>
          
          
          <Box sx={{ flexGrow: 0 }}>
          
            <Link to={'/Home/Profile'} style={{textDecoration:"none", fontSize:".7rem", color:"#000"}}>
                <Avatar alt="Remy Sharp" src="../../../public/assets/img/whatsapp.jpg"  />
            </Link>
            
            
              
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  
  </>
  )
}
