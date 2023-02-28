import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import HeaderIcons from '../components/HeaderIcons';
import IconButton from '@mui/material/IconButton';
import AddMovie from '../components/AddMovie';

const AppMenu = (props) => {
    const { setOpen } = props;

    const handleClose = () => {
        setOpen(false);
    };
    const itemStyle = {
        color: '#ffffff',
        width: '761px',
        fontFamily: 'Bebas Neue',
        fontSize: '22px',
        fontweight: '400',
        lineHeight: '22px',
        letterSpacing: '4px',
        marginTop: '22px',
        marginBottom: '22px',
        marginLeft: '88px'
    }
    const addFilmStyle = {
        marginTop: '44px',
        marginBottom: '44px',
        marginLeft: '30px'
    }
    return (
        <div>
            <MenuItem>
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between'
                }}>
                <IconButton
                    size='large'
                    edge='start'
                    color='secondary'
                    aria-label='menu'
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
                    <HeaderIcons />
                </div>
            </MenuItem>
            <MenuItem style={itemStyle}>
                INICIO
            </MenuItem>
            <MenuItem style={itemStyle}>
                SERIES
            </MenuItem>
            <MenuItem style={itemStyle}>
                PELÍCULAS
            </MenuItem>
            <MenuItem style={itemStyle}>
                AGREGADAS RECIENTEMENTE
            </MenuItem>
            <MenuItem style={itemStyle}>
                MIS PELÍCULAS
            </MenuItem>
            <MenuItem style={itemStyle}>
                MI LISTA
            </MenuItem>
            <MenuItem style={addFilmStyle}>
                <AddMovie />
            </MenuItem>
            <MenuItem style={itemStyle}>
                CERRAR SESIÓN
            </MenuItem>

        </div>
    )
}

export default AppMenu