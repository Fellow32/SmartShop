import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
};

export const newItemsReducer = createSlice({
  name: "new_items",
  initialState,
  reducers: {
    getNewItemsFetch: (state) => {
      state.isLoading = true;
    },

    getItems: (state, action) => {
      state.items = action.payload;
    },
    getNewItemsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getNewItemsFetch, getItems, getNewItemsFailure } = newItemsReducer.actions;

export default newItemsReducer.reducer;
