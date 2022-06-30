import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { reducer as allGoodsReducer } from "./goodsSlice";
import { reducer as categoriesReducer } from "./categoriesSlice";
import { reducer as popularCategoriesReducer } from "./popularCategoriesSlice";
import { reducer as categoryReducer } from "./categorySlice";

const rootReducer = combineReducers({
  goods: allGoodsReducer,
  categories: categoriesReducer,
  popularCategories: popularCategoriesReducer,
  category: categoryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type rootStore = ReturnType<typeof rootReducer>;
