import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { State } from "./slice";

export const getCartSlice = (state: rootStore): State => state.cart;
export const getLoadStatus = (state: rootStore): LOAD_STATUSES =>
    getCartSlice(state).loadStatus;

export const getCart = (state: rootStore) =>
    getCartSlice(state).cart;

export const getIsLoadingSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};

export const getIsLoadedSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};

export const getIsErrorSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};

