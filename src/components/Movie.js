import React, { useState } from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Grid } from '@mui/material';

const Movie = (props) => {
  const { title, posterPath, stars, year } = props;
  const [hover, setHover] = useState(true);
  const handleMouseEnter = () => {
    setHover(false);
  };
  const handleMouseLeave = () => {
    setHover(true);
  };
  const boxStyle = {
    backgroundImage: 'url(https://image.tmdb.org/t/p/w500' + posterPath + ')',
    width: '220px',
    height: '146px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    borderRadius: '4px',
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: hover ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const titleStyle = {
    fontFamily: 'Bebas Neue',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19.2px',
    letterSpacing: '4px',
    textAlign: 'center',
    color: '#ffffff'
  };

  return (

    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PlayCircleOutlined style={{ fontSize: '40px', color: '#ffffff', marginBottom: '40px' }} />
      <span
        style={titleStyle}
      >
        <div>{title} </div>
        {!hover && <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '180px',
          marginTop: '40px'
        }}>
          <div>{<span>{stars}</span>}</div>
          <div>{<span>{year.substring(0, 4)}</span>}</div>
        </div>}
      </span>



    </div>




  );
};

export default Movie;
