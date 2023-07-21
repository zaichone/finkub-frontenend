import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { Typography, Container, Divider, Box, Pagination } from '@mui/material';
import Products from './components/Products';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=23')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <Container pb={3}>
      <Typography variant="h1" component="div" gutterBottom>Frontend Part</Typography>
      <Typography variant="body1" gutterBottom>JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</Typography>
      {data && <Typography variant="h6" gutterBottom>Items 1-12 of {data.length}</Typography>}
      <Divider />
      <Box my={3} sx={{ display: 'flex' }}>
        {data && <Products data={data} />}
      </Box>
      <Divider />
      <Box my={3} minHeight={3} sx={{textAlign:'center',color:'white'}}>
        <Pagination count={10} variant="outlined" shape="rounded" sx={{display:'inline-block'}} />
      </Box>
    </Container>
  );
}

export default App;
