import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import './styles.scss'

const style = {
  position: 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  minWidth: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
}

export default function TransitionsModal({ open, handleClose, onSubmit, onInputChange }) {
  const handleInputChange = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Вкажи посилання на свій пост або сторіс
            </Typography>
            <div className='l-modal-body'>
              <TextField onChange={onInputChange} fullWidth id="outlined-basic" label="Посилання" variant="outlined" />
              <div className='l-buttons-container'>
                <Button onClick={handleInputChange} variant="contained" endIcon={<SendIcon />}>
                  Відправити
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}