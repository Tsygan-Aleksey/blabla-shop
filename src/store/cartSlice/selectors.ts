import { LOAD_STATUSES } from "../../constants";
import { RootStore } from "store";
import { State } from "./slice";
import { GoodInCart } from "api/api";

export const getCartSlice = (state: RootStore): State => state.cart;
export const getLoadStatus = (state: RootStore): LOAD_STATUSES =>
  getCartSlice(state).loadStatus;

export const getGoodsInCart = (state: RootStore): GoodInCart[] =>
  getCartSlice(state).cart;

export const getIsLoadingSelector = (state: RootStore): Boolean => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};

export const getIsLoadedSelector = (state: RootStore): Boolean => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};

export const getIsErrorSelector = (state: RootStore): Boolean => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};
