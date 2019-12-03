import React, { useState, useDebugValue } from 'react';
import Popower from "../components/Popower";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(data) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const totalPrice = () => {
    let sum = 0;
    data.data.forEach(item => {
      sum += item.price;
    });
    return sum;
  }

  const showAlert = (item) => {
    if (item.count <= 5) {
      return <Popower data={item} />
    }
    return "";
  }

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        startIcon={<ShoppingCartIcon/>}
        onClick={handleOpen}
        >
        {data.data.length}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <table width="700px">
              <thead>
                <tr>
                  <th>Наименование</th>
                  <th>Количество</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td 
                        width="400px" 
                        align="center" 
                        className="cart-table__title"
                      >
                        {item.name}</td>
                      <td align="center">
                        <input
                          className="cart-table__input" 
                          type="text" 
                          value="1" 
                        />
                        {showAlert(item)}
                      </td>
                      <td align="center">{item.price} руб / шт.</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="cart-footer">
              <div className="totalPrice">
                <span>Общая стоимость: </span>
                <span>{Number(totalPrice().toFixed(2))}</span>
              </div>
              <div className="footer-delete">
                <DeleteIcon className="footer-delete__btn" fontSize="small" color="secondary" onClick={data.func}/>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}