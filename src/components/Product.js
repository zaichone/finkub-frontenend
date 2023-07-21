import React from 'react'
import { Typography, Card, Grid, CardMedia, Box, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

function Product({ thumbnailUrl, title, url,id }) {
    return (
        <Grid item xl={3} lg={3} md={3}>
            <Box sx={{
                ':hover':{
                boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',                
            }}}>
                <CardMedia
                    component="img"
                    alt={title}
                    height="220"
                    image={url}
                    sx={{ width: '100%' }}
                />
                <Typography px={2} mt={3} variant="h5" gutterBottom>{title.slice(0, 30)}</Typography>
                <Typography px={2} variant="h6" gutterBottom>2 weeks ago</Typography>
                <Box p={2}>
                    <StarIcon sx={{ color: 'red' }} />
                    <StarIcon sx={{ color: 'red' }} />
                    <StarIcon sx={{ color: 'red' }} />
                    <StarIcon sx={{ color: 'red' }} />
                    <StarIcon sx={{ color: 'red' }} />

                    
                </Box>
                <Box px={2} sx={{display:'flex'}}>
                    <CurrencyBitcoinIcon/><Typography variant="h6">{Math.floor(Math.random() * 1000)}</Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default Product