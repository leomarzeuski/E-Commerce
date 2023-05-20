import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import CartButton from '../CartButton';
import { DialogActions, Grid } from '@mui/material';

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export default function AlertDialog({ coffee }: CoffeeProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div style={{ paddingTop: "20px", paddingBottom: "10px" }}>

      <Button variant="text" color="secondary" onClick={handleClickOpen}>
        Saiba Mais
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {coffee.name}
        </DialogTitle>
        <DialogContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <DialogContentText id="alert-dialog-description">
            {JSON.stringify(coffee.description)}
          </DialogContentText>
          <img src={`/coffees/${coffee.photo}`} alt="" style={{ width: '120px'}} />
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="space-around">
            <Grid item>
              <Button variant="text" color="secondary" onClick={handleClose}>Cancelar</Button>
            </Grid>
            <Grid item>
              <CartButton coffee={coffee} />
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}