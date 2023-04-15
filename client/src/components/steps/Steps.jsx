import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TransitionsModal from 'components/Modal/TransitionsModal'
import './styles.scss'

const steps = [
  {
    label: 'В чому ідея? 🧠',
    description: 'Ви отрумуєте знижку - ми отрумуємо рекламу, все дуже просто і зрозуміло ',
  },
  {
    label: 'Як це буду виглядати? 👀',
    description:
      'Ось приклади постів наших клієнтів. {{link_to_the_posts}}',
  },
  {
    label: 'Що треба зроботи? 📸',
    description: 'Обовʼязково тегни наш магазін в сторис або в посту по тегу {{shop_tag}}. І все! Твоя знижка вже сформована!',
  },
]

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const [open, setOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    name: ''
  })
  const handleSubmit = () => {
    console.log('Form values:', formValues)
    document.location.href =('https://api.instagram.com/oauth/authorize?client_id=799742371516522&redirect_uri=https://react-sytem.space/&scope=user_profile,user_media&response_type=code')
  }
  const handleInputChange = (event) => {
    setFormValues(event.target.value)
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleReset = () => {
    setActiveStep(0)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Останній крок</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Окі, я за!' : 'Далі'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Назад
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            Якщо ти в ділі зробити сторіс чи пост, нам все одно 😎, показуй QR який сформується продавцю і отримувай свою скидку
          </Typography>
          <div className='l-buttons-container'>
            <Button onClick={handleReset}>
              Давай по новій Міша
            </Button>
            <Button onClick={handleOpen} variant="contained">Я в ділі!</Button>
            <TransitionsModal
              open={open}
              handleClose={handleClose}
              onSubmit={handleSubmit}
              onInputChange={handleInputChange}
            />
          </div>
        </Paper>
      )}
    </Box>
  )
}