import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { PaperClipOutlined } from '@ant-design/icons';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';

const AddMovie = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '730px',
    height: '440px',
    bgcolor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const button = {
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
    marginTop: '32px',
  };
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    setStep(0)
    if (reason && reason == 'backdropClick') {
      return;
    }
  };
  const handleBottonClose = () => {
    setStep(0), setOpen(false)
  };
  const handleClick = () => {
    step == 4 ? setStep(0) : setStep(step + 1);
  };
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#8c8c8c',
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: '#64EEBC',
    },
  }));
  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          fontFamily: 'Bebas Neue',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          letterSpacing: '4px',
          lineHeight: '18px',
          color: '#ffffff',
          marginLeft: '50px',
        }}
      >
        + Agregar pelicula
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        onClick={handleClick}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
          <div>
            <span
              style={{
                fontFamily: 'Bebas Neue',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '20px',
                letterSpacing: '4px',
                lineHeight: '20px',
                color: '#64EEBC',
                marginLeft: '250px'
              }}
            >
              AGREGAR PELÍCULA
            </span>
            <CloseIcon onClick={handleBottonClose} style={{
              color: '#ffffff',
              marginLeft: '230px',
              marginBottom: '20px',
              marginTop: '20px'
            }} />
          </div>
          {
            {
              0: (
                <>
                  <Box
                    component='span'
                    sx={{
                      p: 2,
                      border: '1px dashed white',
                      color: '#ffffff',
                      fontFamily: 'Bebas Neue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '4px',
                      lineHeight: '19.2px',
                      width: '602px',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '48px',
                      marginBottom: '48px'
                    }}
                  >
                    <PaperClipOutlined />
                    &nbsp;AGREGA UN ARCHIVO O ARRASTRALO Y SOLTALO AQUI
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      p: 2,
                      borderBottom: '1px',
                      borderBottomColor: '#ffffff',
                      color: '#ffffff',
                      fontFamily: 'Bebas Neue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '4px',
                      lineHeight: '19.2px',
                      textDecoration: 'underline',
                    }}
                  >
                    TÍTULO
                  </Box>
                </>
              ),
              1: (
                <>
                  <Box sx={{ flexGrow: 1 }}>
                    <span
                      style={{
                        fontFamily: 'Bebas Neue',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        letterSpacing: '4px',
                        lineHeight: '19.2px',
                        color: '#ffffff',
                      }}
                    >
                      CARGANDO 40%
                    </span>
                    <br />
                    <BorderLinearProgress variant='determinate' value={40} style={{ width: '602px' }} />
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      p: 2,
                      borderBottom: '1px',
                      borderBottomColor: '#ffffff',
                      color: '#ffffff',
                      fontFamily: 'Bebas Neue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '4px',
                      lineHeight: '19.2px',
                      textDecoration: 'underline',
                    }}
                  >
                    LITEFLIX THE MOVIE
                  </Box>
                </>
              ),
              2: (
                <>
                  <Box sx={{ flexGrow: 1 }}>
                    <span
                      style={{
                        fontFamily: 'Bebas Neue',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        letterSpacing: '4px',
                        lineHeight: '19.2px',
                        color: '#ffffff',
                      }}
                    >
                      100% CARGADO
                    </span>
                    <br />
                    <BorderLinearProgress variant='determinate' value={100} style={{ width: '602px' }} />
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      p: 2,
                      borderBottom: '1px',
                      borderBottomColor: '#ffffff',
                      color: '#ffffff',
                      fontFamily: 'Bebas Neue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '4px',
                      lineHeight: '19.2px',
                      textDecoration: 'underline',
                    }}
                  >
                    LITEFLIX THE MOVIE
                  </Box>
                </>
              ),
              3: (
                <>
                  <Box sx={{ flexGrow: 1 }}>
                    <span
                      style={{
                        fontFamily: 'Bebas Neue',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        letterSpacing: '4px',
                        lineHeight: '19.2px',
                        color: '#ffffff',
                      }}
                    >
                      ¡ERROR! NO SE PUDO CARGAR LA PELÍCULA
                    </span>
                    <br />
                    <BorderLinearProgress variant='determinate' value={100} sx={{ width: '602px', [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: '#fa0000',
    }, }} />
                        <span
                      style={{
                        fontFamily: 'Bebas Neue',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        letterSpacing: '4px',
                        lineHeight: '19.2px',
                        color: '#ffffff',
                        marginLeft: '500px'
                      }}
                    >
                      REINTENTAR
                    </span>
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      p: 2,
                      borderBottom: '1px',
                      borderBottomColor: '#ffffff',
                      color: '#ffffff',
                      fontFamily: 'Bebas Neue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '4px',
                      lineHeight: '19.2px',
                      textDecoration: 'underline',
                    }}
                  >
                    LITEFLIX THE MOVIE
                  </Box>
                </>
              ),
              4: <><span
              style={{
                fontFamily: 'Bebas Neue',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '24px',
                letterSpacing: '4px',
                lineHeight: '26px',
                color: '#ffffff',
              }}
            >
              ¡FELICIDADES!
            </span>
            <span
            style={{
              fontFamily: 'Bebas Neue',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '24px',
              letterSpacing: '4px',
              lineHeight: '24px',
              color: '#ffffff',
            }}
          >
            LITEFLIX THE MOVIE FUE CORRECTAMENTE SUBIDA.
          </span>
          </>
            }[step]
          }
          <div>
            {
              step < 4 && (
                <>
                  {step < 3 ? (
                    <Button sx={button} disabled>
                      SUBIR PELÍCULA
                    </Button>
                  ) : (
                    <Button sx={button} onClick={handleBottonClose}>SUBIR PELÍCULA</Button>
                  )}
                </>)}
            {step == 4 && <Button sx={button} onClick={handleBottonClose}>IR A HOME</Button>}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddMovie;
