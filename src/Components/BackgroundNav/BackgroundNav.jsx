import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function BackgroundNav() {
   
  return (
    
      <Box sx={{ flexGrow: 1 }}>

      <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"} style={{color:"inherit",textDecoration:"none"}}>FacePost</Link>
          </Typography>
          <Button color="inherit">
            <Link to={"/"} style={{color:"inherit",textDecoration:"none"}}>Signin</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/signup"} style={{color:"inherit",textDecoration:"none"}}>Signup</Link>
          </Button>
        </Toolbar>
    </Container>
      </AppBar>
      </Box>

    
  );
}
