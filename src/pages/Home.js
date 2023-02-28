import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import _ from 'lodash';
import Banner from '../components/Principal';
import Movies from '../components/Movies';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {
  const [posterPath, setPosterPath] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
        .then((request) => setPosterPath(_.get(request, 'data.results[0].backdrop_path', 'no existe')));
    };
    fetchData();
  }, []);

  return (
    <div style={
        {backgroundImage: 'url(https://image.tmdb.org/t/p/w500' + posterPath + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center'}}>
      <Header />
      <Box sx={{flexGrow: 1, marginLeft: '184px',}}>
        <Grid container direction='row' alignItems='flex-end'>
          <Grid item xs={12} md={9}>
            <Banner />
          </Grid>
          <Grid item xs={12} md={3} container direction='column' alignItems='center' marginBottom='75px'>
            <Movies />

          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
