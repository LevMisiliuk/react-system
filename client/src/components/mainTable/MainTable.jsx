import React, { useEffect, useState } from 'react'
import './styles.scss'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Modal,
  Typography,
  Button,
  makeStyles,
  createStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      margin: '10px',
      maxWidth: '620px',
    },
  })
)

function MainTable() {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    setData([{id: 1, name: 'check'}])
    const currentUrl = window.location.href
    console.log(currentUrl)
    //TODO SEND ACCESS TOKEN TO AXENDR TO LET HIM MAKE A CALL TO instagram/api
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Link
        href='https://api.instagram.com/oauth/authorize?client_id=799742371516522&redirect_uri=https://react-sytem.space/&scope=user_profile,user_media&response_type=code'
        target='_blank'
        rel='noopener'
      >
        Material-UI
      </Link>
      <TableContainer component={Paper}>
        <Table aria-label='Users data'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                hover
                onClick={handleOpen}
                key={item.id}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <Typography variant='h6' gutterBottom>
            Modal Title
          </Typography>
          <Typography variant='body1' gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illo dolor dolorem facilis quis qui soluta. Vitae quos voluptate nam recusandae? Distinctio, sapiente ad. Suscipit laboriosam, laborum rerum quis perferendis nesciunt necessitatibus dolores at explicabo perspiciatis iusto voluptates sequi labore deserunt ab consequuntur eius ut est nobis quidem? Quas, dolorum?
          </Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default MainTable