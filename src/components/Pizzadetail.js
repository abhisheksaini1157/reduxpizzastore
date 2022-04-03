import { React, useState } from "react";
import {
  Box,
 
  Button,
  Dialog,
  DialogTitle,
 
  DialogActions,
  TextField,
  MenuItem,
  ButtonGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addToCart,
  setSize,
  setTopings,
  
} from "../redux/reducers/cart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-toastify";

const Pizzadetail = ({ ...props }) => {
 

  const [pizzasize, setPizzasize] = useState("");
  const [pizzatopings, setPizzatopings] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  console.log(pizzasize);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonGroup disableElevation style={{ backgroundColor: "#fff" }}>
        <Button style={{ color: "#FF0000" }}>
          <RemoveIcon />
        </Button>
        <Button style={{ color: "#FF0000" }} onClick={handleClickOpen}>
          <AddIcon />
        </Button>
      </ButtonGroup>
     

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.name}</DialogTitle>
        <Box p={2}>
          {props.size.map((size) => (
            <>
              <TextField
                select
                fullWidth
                value={pizzasize}
                onChange={(e) => {
                  setPizzasize(e.target.value);
                }}
                label={size.title}
              >
                {size.items.map((item) => (
                  <MenuItem value={item.size}>{item.size}</MenuItem>
                ))}
              </TextField>
            </>
          ))}
        </Box>

        <Box p={2}>
          {props.toppings.map((toping) => (
            <>
              <TextField
                select
                fullWidth
                value={pizzatopings}
                onChange={(e) => {
                  setPizzatopings(e.target.value);
                }}
                label={toping.title}
              >
                {toping.items.map((item) => (
                  <MenuItem value={item.name}>{item.name}</MenuItem>
                ))}
              </TextField>
            </>
          ))}
        </Box>

        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#000" }}>
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#FC4C02", color: "#fff" }}
            onClick={() => {
              dispatch(addToCart(props));
              // send pizzsize as value and props.id as id
              dispatch(setSize({ value: pizzasize, id: props.id }));
              dispatch(setTopings({ value: pizzatopings, id: props.id }));
              toast.success("Added to cart");

              handleClose();
            }}
          >
            Add to cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Pizzadetail;
