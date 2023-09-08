import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  valueName: [],
};

export const counterSlice = createSlice({
  name: "thaliItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.valueName.indexOf(action.payload.name) === -1) {
        state.value.push(action.payload);
        state.valueName.push(action.payload.name);
      }
    },
    removeItem: (state, action) => {
      state.value.splice(action.payload, 1);
      state.valueName.splice(action.payload, 1);
    },
    decreaseQuantity: (state, action) => {
      if (state.value[action.payload].quantity === 1) {
        alert("Quantity cannot be less than 1");
      } else {
        state.value[action.payload].quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      state.value[action.payload].quantity += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, decreaseQuantity, increaseQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;
