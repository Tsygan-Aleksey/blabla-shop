import { LOAD_STATUSES } from "../../constants";
import { RootStore } from "../store";
import { State } from "./slice";
import { Category, Good } from "../../api/api";

export const getPopularCategoriesSlice = (state: RootStore): State =>
  state.popularCategories;

export const getLoadStatus = (state: RootStore): LOAD_STATUSES =>
  getPopularCategoriesSlice(state).loadStatus;

export const getPopularCategories = (
  state: RootStore
): { items: Good[]; category: Category }[] =>
  getPopularCategoriesSlice(state).popularCategories;

export const getIsLoadingSelector = (state: RootStore): Boolean => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};

export const getIsLoadedSelector = (state: RootStore): Boolean => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};

export const getIsErrorSelector = (state: RootStore): Boolean => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};
