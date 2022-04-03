import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    totalAmount: 0,
    size: [
      {
        id: "",
        value: "",
      },
    ],
    topings: [
      {
        id: "",
        value: "",
      },
    ],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const isItemExist = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (!isItemExist) {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }

      state.quantity++;
      state.totalAmount += payload.price;
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.quantity -= payload.quantity;
      state.totalAmount -= payload.price * payload.quantity;
      // remove from size array as well
      state.size = state.size.filter((item) => item.id !== payload.id);
    },
    addItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity += 1;
      state.totalAmount += payload.price;
    },
    subtractItemQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      if (subItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem.quantity -= 1;
      }
      state.quantity -= 1;
      state.totalAmount -= subItem.price;
    },
    setSize: (state, { payload }) => {
      // push values of payload in size array
      state.size.push({
        id: payload.id,
        value: payload.value,
      });
    },
    setTopings: (state, { payload }) => {
      // push values of payload in size array
      state.topings.push({
        id: payload.id,
        value: payload.value,
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
  setSize,
  setTopings,
} = cartSlice.actions;

export default cartSlice.reducer;
