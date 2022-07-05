import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { reducer as allGoodsReducer } from "./goodsSlice";
import { reducer as categoriesReducer } from "./categoriesSlice";
import { reducer as popularCategoriesReducer } from "./popularCategoriesSlice";
import { reducer as categoryReducer } from "./categorySlice";
import { reducer as cartReducer } from "./cartSlice";
import { reducer as registrationSlice } from "./registrationSlice";

const rootReducer = combineReducers({
  goods: allGoodsReducer,
  categories: categoriesReducer,
  popularCategories: popularCategoriesReducer,
  category: categoryReducer,
  cart: cartReducer,
  registration: registrationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof rootReducer>;
