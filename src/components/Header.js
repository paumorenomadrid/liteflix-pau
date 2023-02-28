import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import AppMenu from '../components/AppMenu';
import HeaderIcons from '../components/HeaderIcons';
import AddMovie from '../components/AddMovie';

const Header = () => {
  const [open, setOpen] = useState(null);
  const handleMenu = (event) => {
    setOpen(event.currentTarget);
  };

const brandStyle = {
    letterSpacing: '4px',
    fontSize: '34px',
    lineHeight: '34px',
    fontFamily: 'Bebas Neue',
    color: '#64EEBC',
    textAlign: 'left',
    display: 'flex',
    textAlign: 'center'
}

return (
    <Box sx={{ flexGrow: 1, marginLeft: '160px', backgroundColor: 'transparent'}}>
      <Toolbar style={{diplay: 'flex', justifyContent: 'space-between', width: '95%'}}>
      <div style = {brandStyle}>
      <span style={{
        fontWeight: '700',
      }}>
        LITE
      </span>
      <span style={{
        fontWeight: '400',
      }}>
       FLIX
      </span>
<AddMovie/>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <IconButton
          size='large'
          edge='start'
          color='secondary'
          aria-label='menu'
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <HeaderIcons/>
      </div>
      </Toolbar>
      <Menu
        id='menu-appbar'
        anchorPosition={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(open)}
      >
        <AppMenu open={open} setOpen={setOpen}/>
      </Menu>
  </Box>

  )
}


export default Header