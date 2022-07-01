import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../../constants";
import { getCart, GoodInCart } from "api/api";

export interface State {
  cart: GoodInCart;
  loadStatus: LOAD_STATUSES;
}

const initialState: State = {
  cart: {
    good: {
      price: "",
      id: "",
      label: "",
      img: "",
      description: '',
      categoryTypeId: ''
    },
    count: 0,
    id: "",
  },
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

const fetchCart = createAsyncThunk("cart/getCart", getCart);

export const actions = {
  fetchCart,
};

export const { reducer } = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchCart.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loadStatus = LOAD_STATUSES.LOADED;
    });
  },
});
