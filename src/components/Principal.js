import axios from 'axios';
import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';

const Banner = () => {
  const [title, setTitle] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
        .then(request => setTitle(_.get(request, 'data.results[0].original_title', 'no existe')))
    };
    fetchData();
  }, [])

  const buttonPrimary = {
    fontFamily: 'Bebas Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '4px',
    backgroundColor: '#242424',
    height: '56px',
    width: '248px',
    color: '#ffffff',
    marginBottom: '162px',
    marginRight: '12px',
    marginTop: '32px'
  }

  const buttonSecundary = {
    fontFamily: 'Bebas Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '4px',
    background: 'rgba(36, 36, 36, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    height: '56px',
    width: '248px',
    color: '#ffffff',
    marginLeft: '12px',
    marginBottom: '162px',
    marginTop: '32px'
  }
  
  return (
  <div style= {{display: 'block'}}>
    <div style = {{display: 'inline'}}>
      <span style={{
        fontFamily: 'Bebas Neue',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '4px',
        textAlign: 'left',
        color: '#ffffff'
      }}>
        ORIGINAL DE 
      </span>
      <span style={{
        fontFamily: 'Bebas Neue',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: '4px',
        textAlign: 'left',
        color: '#ffffff'
      }}>
       &nbsp;LITEFLIX
      </span>
    </div>
    <div>
      <span style={{
        fontFamily: 'Bebas Neue',
        fontSize: '76px',
        fontWeight: '700',
        lineHeight: '78px',
        letterSpacing: '12px',
        textAlign: 'left',
        textTransform: 'uppercase',
        color: '#64EEBC'
      }}>
        {title}
      </span>
    </div>
    <div style = {{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
    <Button sx={buttonPrimary}><ArrowRightIcon/> REPRODUCIR</Button>
    <Button sx={buttonSecundary}><AddIcon/>MI LISTA</Button>
      </div>
  </div>
  )
}

export default Banner