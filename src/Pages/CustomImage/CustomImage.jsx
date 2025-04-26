import { Email, Translate } from '@mui/icons-material'
import { Avatar, Box, Button, FormControlLabel, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'; 
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        rows: 1,
        cols: 1,
    }]

    // upload mui
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
export default function CustomImage() {
  return (
    <div>
          <Helmet>
        <title>choose Image</title>
       
        </Helmet>
      <Grid>
      <Box sx={{width:{
        xs:"95%",
        sm:"80%",
        md:"60%",
        lg:"30%",
        xl:"25%"
      }, position:"relative",top:"20%",left:"50%",transform:"translate(-50%,20%)",mb:8,paddingBottom:8}}>
        <Paper elevation={6}>
       <Box sx={{display:"flex", justifyContent:"center" ,alignItems:"center",flexDirection:"column",py:3,ml:3}}>
          <Typography variant="body1" color="initial">
          <Avatar sx={{ bgcolor:"#3f51b5" }}>I</Avatar>
          </Typography>
          <Typography variant="body1"  sx={{mt:"16px" ,color:"#0097a7"}}>
            please select profile image 
          </Typography>
       </Box>
       <Box sx={{ml:3}}>
       
          
       <ImageList
      sx={{ width: 150, height: 150,m:"20px auto",borderRadius:"50%",marginBottom:3 }}
      variant="quilted"
      cols={1}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{width:"100%",height:"100%"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  
    <Box sx={{display:'flex',justifyContent:"center",mb:3}}>
    <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        >
        choose image
        <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
        />
        </Button>
    </Box>
        
      
       </Box>
      
       
       <Box sx={{mx:3, display:"flex",justifyContent:"space-between"}}>
       <Button variant="text"><Link to={"/home"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}>Next</Link></Button>
       <Button variant="text"><Link to={"/home"} style={{marginLeft:6,textDecoration:"none",color:"inherit"}}>Skip</Link></Button>
       </Box>
       
        
       
       </Paper>
      </Box>
      </Grid>
    </div>
  )
}
