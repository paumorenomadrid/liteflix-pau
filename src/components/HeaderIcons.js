import React from 'react';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import imgAvatar from '../../public/img/perfil.jpg'

const HeaderIcons = () => {
  return (
    <div>
        <>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='secondary'
        >
          <Badge color='primary' variant='dot'>
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          color='secondary'
        >
          <Avatar src={imgAvatar} />
        </IconButton>
    </>
    </div>
  )
}

export default HeaderIcons