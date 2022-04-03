import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} from "../redux/reducers/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, quantity, size, topings } = useSelector(
    (state) => state.cart
  );
  console.log(size);
  console.log(cartItems);

  if (quantity === 0) {
    return <div>No items in cart</div>;
  }

  return (
    <>
      <Box margin={2}>
        {cartItems.map((item, index) => (
          <Box key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
                width:"100%",
                height:"200px",
                marginTop:"20px"
              }}
            >
              <img
                src={item.img_url}
                alt="pizza"
                style={{ width: "20%", height: "70%" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  height: "100%",
                  margin: "10px",
                }}
              >
                <Typography variant="body">Name : {item.name}</Typography>
                <Typography variant="body">Price : {item.price}</Typography>
                <Typography variant="body">
                 
                  Size :{
                  size.map((size) => {
                    if (size.id === item.id) {
                      return size.value;
                    }
                    return null
                  })}
                </Typography>
                <Typography variant="body">
                  
                  Topings :
                  {topings.map((toping) => {
                    if (toping.id === item.id) {
                      return <>{toping.value},</>;
                    }
                    return null
                   
                  })}
                </Typography>

                <Typography variant="body">Quantity : {item.quantity}</Typography>
                <ButtonGroup
                  disableElevation
                  style={{ backgroundColor: "#fff" }}
                >
                  <Button
                    style={{ color: "#FF0000" }}
                    onClick={() => {
                      dispatch(subtractItemQuantity(item));
                      toast.success("Item quantity decreased");
                    }}
                  >
                    -
                  </Button>
                  <Button
                    style={{ color: "#FF0000" }}
                    onClick={() => {
                      dispatch(addItemQuantity(item));
                      toast.success("Item quantity increased");
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  margin: "10px",
                }}
              >
                <Button
                  style={{ color: "#FF0000" }}
                  onClick={() => {
                    dispatch(removeFromCart(item));
                    toast.success("Item removed from cart");
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          </Box>
        ))}
      </Box>
    </>
   
  );
};

export default Cart;
