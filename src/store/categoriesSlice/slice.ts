import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../../constants";
import { Category, getCategories } from "api/api";

export interface State {
  categories: { categories: Category[] };
  loadStatus: LOAD_STATUSES;
}

const initialState: State = {
  categories: {
    categories: [],
  },
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  getCategories
);

export const actions = {
  fetchCategories,
};

export const { reducer } = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loadStatus = LOAD_STATUSES.LOADED;
    });
  },
});
