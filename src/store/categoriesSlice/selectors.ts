import { LOAD_STATUSES } from "../../constants";
import { RootStore } from "store";
import { State } from "./slice";
import { Category } from "api/api";

export const getCategoriesSlice = (state: RootStore): State => state.categories;
export const getLoadStatusSlice = (state: RootStore): LOAD_STATUSES =>
  getCategoriesSlice(state).loadStatus;

export const getCategories = (state: RootStore) =>
  getCategoriesSlice(state).categories;

export const getIsLoadingSelector = (state: RootStore): Boolean => {
  return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING;
};

export const getIsLoadedSelector = (state: RootStore): Boolean => {
  return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED;
};

export const getIsErrorSelector = (state: RootStore): Boolean => {
  return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;
};

export const getTransformCategory = (state: RootStore): Category[] => {
  const mapCategories = getCategories(state);

  const { categories } = mapCategories;
  return categories;
};
