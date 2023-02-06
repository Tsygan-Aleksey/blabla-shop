import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../../constants";
import { Category, getPopularCategories, Good } from "api/api";

export interface State {
  popularCategories: { category: Category; items: Good[] }[];
  loadStatus: LOAD_STATUSES;
}

const initialState: State = {
  popularCategories: [
    {
      items: [
        {
          categoryTypeId: "",
          id: "",
          img: "",
          label: "",
          price: "",
          description: "",
        },
      ],
      category: {
        type: "",
        label: "",
        id: "",
      },
    },
  ],
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

const fetchPopularCategories = createAsyncThunk(
  "popularCategories/fetchPopularCategories",
  getPopularCategories
);

export const actions = {
  fetchPopularCategories,
};

export const { reducer } = createSlice({
  name: "popularCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularCategories.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchPopularCategories.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
    builder.addCase(fetchPopularCategories.fulfilled, (state, action) => {
      state.popularCategories = action.payload;
      state.loadStatus = LOAD_STATUSES.LOADED;
    });
  },
});
