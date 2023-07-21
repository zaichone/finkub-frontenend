import React from 'react'
import Product from './Product';
import { Typography, Card, Box,CardMedia,Grid } from '@mui/material';

function Products(props) {
    const {data} = props;
    data.splice(12, 11);
    console.log(data);
  return (
    <Grid container spacing={4}>
        {data && data.map((item) => <Product key={item.id} url={item.url} title={item.title} img={item.thumbnailUrl}/>)}
    </Grid>
    

 
  )
}

export default Products