
import React from 'react'

// mui imports
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { AccountCircle, Email } from '@mui/icons-material';
import { Box, Button, Checkbox, FormControlLabel, Grid, InputAdornment, Paper, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Login() {
// password textfield mui
const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid>
          <Helmet>
              <title>Login</title>
             
          </Helmet>
      <Box  sx={{width:{
        xs:"95%",
        sm:"80%",
        md:"60%",
        lg:"30%",
        xl:"25%"
      }, position:"relative",top:"25%",left:"50%",transform:"translate(-50%,25%)",mb:8}}>
        <Paper elevation={6}>
       <Box sx={{display:"flex", justifyContent:"center" ,alignItems:"center",flexDirection:"column",py:3,ml:3}}>
          <Typography variant="body1" color="initial">
          <Avatar sx={{ bgcolor:"#3f51b5" }}>S</Avatar>
          </Typography>
          <Typography variant="body1" color="initial" sx={{mt:"16px"}}>
            Sign in
          </Typography>
       </Box>
       <Box sx={{ml:3}}>
       <TextField
          // error
          id="outlined-error"
          label="Email"
          placeholder='Email'
          defaultValue=" "
          sx={{width:"95%" ,mb:3}}
         slotProps={{
          input:{
            endAdornment:(
              <InputAdornment position='start'>
                <Email sx={{color:"#3f51b5"}} />
              </InputAdornment>
            )
          }
         }}
          
        />
         <FormControl sx={{ mb:"6px", width: '95%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                sx={{color:"#3f51b5"}}
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      
       </Box>
       <Box sx={{width:"90%" ,display:"flex" ,justifyContent:"space-between",alignItems:"center",ml:3,mb:1}}>
       <FormControlLabel  control={<Checkbox size='small'  />} label="Remember me" />
       <Typography variant="body1" color="initial">
        <Link to={"/ForgetPassword"} style={{textDecoration:"none", fontSize:".7rem", color:"#000"}}>Forget my password ?</Link>
       </Typography>
       </Box>
       <Button variant="contained" sx={{bgcolor:"#3f51b5", width:"90%",mb:1,ml:3}}>
        <Link to={'/Home'} style={{marginLeft:6,textDecoration:"none",color:"inherit"}} >Signin</Link>
       </Button>
       <Box sx={{width:"90%",display:"flex",justifyContent:"center",pb:3}}>
            <Typography variant="body2" color="initial">
              Don't have an account ?    
              <Link to={'/signup'} style={{marginLeft:6}} color='#3f51b5'>Signup</Link>
            </Typography>
       </Box>
       </Paper>
      </Box>
    </Grid>
  )
}
