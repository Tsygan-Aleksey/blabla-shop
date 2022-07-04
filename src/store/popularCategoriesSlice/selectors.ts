import { LOAD_STATUSES } from "../../constants";
import { RootStore } from "../store";
import { State } from "./slice";

export const getPopularCategoriesSlice = (state: RootStore): State =>
  state.popularCategories;

export const getLoadStatus = (state: RootStore): LOAD_STATUSES =>
  getPopularCategoriesSlice(state).loadStatus;

export const getPopularCategories = (state: RootStore) =>
  getPopularCategoriesSlice(state).popularCategories;

export const getIsLoadingSelector = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};

export const getIsLoadedSelector = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};

export const getIsErrorSelector = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};
