import { ArrowBackIos, Email } from '@mui/icons-material'
import { Avatar, Box, Button, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Helmet } from 'react-helmet';
export default function ForgetPassword() {
    const [displayTextField,setDisplayTextField]=useState(true)
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
        <title>Reset your Password</title>
       
    </Helmet>
        <Box  sx={{width:{
        xs:"95%",
        sm:"80%",
        md:"60%",
        lg:"30%",
        xl:"25%"
      }, position:"relative",top:"40%",left:"50%",transform:"translate(-50%,50%)",mb:8}}>
          <Paper elevation={6}>
       <Box sx={{display:"flex", justifyContent:"center" ,alignItems:"center",flexDirection:"column",py:3,ml:3}}>
          <Typography variant="body1" color="initial">
          <Avatar sx={{ bgcolor:"#3f51b5" }}>S</Avatar>
          </Typography>
          <Typography variant="body1" color="initial" sx={{mt:"16px"}}>
            Reset Your Password
          </Typography>
       </Box>
       <Box sx={{ml:3}}>
       {displayTextField? <>
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
       </>:<>
       <FormControl sx={{ mb:"6px", width: '95%',marginBottom:3}} variant="outlined">
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
       <FormControl sx={{ mb:"6px", width: '95%',marginBottom:3}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Retype Password</InputLabel>
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
       
       </>}
        
      
       </Box>
       
       <Box sx={{width:"90%",display:"flex",justifyContent:"center",pb:3}}>
       <Button variant="contained" sx={{width:"97%",ml:5}} onClick={()=>{
            setDisplayTextField(!displayTextField)
       }}>
        {displayTextField?"Next":<>
        
        
            <Link to={"/"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}>Reset</Link>
       
        </>}
       </Button>
       </Box>
        
                   <Typography variant="body2" color="initial">
                   {displayTextField?<>
                   <Box sx={{width:"97%",display:"flex",justifyContent:"center",pb:3}}>
                               <Typography variant="body2" color="initial">
                                 Do you  have an account ?    
                                 <Link to={'/'}  >Signin</Link>
                               </Typography>
                          </Box>
                   </>:<>
                   
                   <Button variant="text" sx={{ml:3,pb:4}} onClick={()=>{
                    setDisplayTextField(!displayTextField)
                   }}>
                    <ArrowBackIos />
                        Back

                   </Button>
                   </>}
                     
                   </Typography>
                   </Paper>
      </Box>
    </Grid>
  )
}

