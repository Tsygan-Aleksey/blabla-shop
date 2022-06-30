import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { State } from "./slice";

export const getPopularCategoriesSlice = (state: rootStore): State =>
  state.popularCategories;

export const getLoadStatus = (state: rootStore): LOAD_STATUSES =>
  getPopularCategoriesSlice(state).loadStatus;

export const getPopularCategories = (state: rootStore) =>
  getPopularCategoriesSlice(state).popularCategories;

export const getIsLoadingSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};

export const getIsLoadedSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};

export const getIsErrorSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};
