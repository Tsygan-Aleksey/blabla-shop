import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { LOAD_STATUSES } from "../../constants";
import { getGoodsByCategory, Good } from "api/api";

export interface State {
  category: { items: Good[]; total: number };
  loadStatus: LOAD_STATUSES;
}
const initialState: State = {
  category: {
    items: [],
    total: 0,
  },
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  getGoodsByCategory
);

export const actionsCategory = {
  fetchCategory,
};

export const { reducer } = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loadStatus = LOAD_STATUSES.LOADED;
    });
  },
});
