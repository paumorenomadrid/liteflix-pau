import axios from 'axios';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Movie from './Movie';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DoneIcon from '@mui/icons-material/Done';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = React.useState(null);
  const handleDropDown = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
        .then((request) => setMovies(_.slice(request.data.results, [0], [4])));
    };
    fetchData();
  }, []);
  const dropDownStyle = {
    letterSpacing: '4px',
    fontSize: '18px',
    lineHeight: '18px',
    fontFamily: 'Bebas Neue',
    color: '#ffffff',
    textAlign: 'center'
  }
  return (
    <div style={dropDownStyle}>
      <span style={{
        fontWeight: '50',
      }}>
        VER:
      </span>
      <span style={{
        fontWeight: '600',
      }}>
        POPULARES
        <IconButton aria-label='expand'
          onClick={handleDropDown}
          style={{ color: '#ffffff' }}>
          <ExpandMoreIcon />
        </IconButton>
      </span>
      {movies.map((movie, i) => (
        <Movie 
          key={i} 
          title={movie.original_title} 
          posterPath={movie.backdrop_path} 
          stars={movie.vote_average}
          year={movie.release_date} />
      ))}

      <Menu
        id='menu-appbar'
        anchorEl={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(open)}
        onClose={handleClose}

      >
        <MenuItem
          onClick={handleClose}
          style={{
            color: '#ffffff',
            width: '241px',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Bebas Neue',
            fontSize: '16px',
            fontweight: '700',
            lineHeight: '16px',
            letterSpacing: '4px',
            textAlign: 'left'
          }}>
          POPULARES
          <DoneIcon />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{
            color: '#ffffff',
            width: '241px',
            fontFamily: 'Bebas Neue',
            fontSize: '16px',
            fontweight: '700',
            lineHeight: '16px',
            letterSpacing: '4px',
            textAlign: 'left'

          }}>
          MIS PELÍCULAS
        </MenuItem>
      </Menu>
    </div>

  );
};

export default Movies;
