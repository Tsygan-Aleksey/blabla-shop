import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../../constants";
import {
  Good,
  getGoods,
  putCart,
  GoodsSearch,
  getGoodsByParams,
} from "api/api";
import { AppDispatch, RootStore } from "../store";

export interface State {
  goods: { items: Good[]; total: number };
  loadStatus: LOAD_STATUSES;
}

const initialState: State = {
  goods: {
    items: [],
    total: 0,
  },
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

const fetchGoods = createAsyncThunk("goods/fetchGoods", getGoodsByParams);

export const actions = {
  fetchGoods,
};

export const { reducer } = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchGoods.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.goods = action.payload;
      state.loadStatus = LOAD_STATUSES.LOADED;
    });
  },
});
