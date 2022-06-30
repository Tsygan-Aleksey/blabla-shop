import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { State } from "./slice";
// import { icon } from "components/Menu";

export const getCategoriesSlice = (state: rootStore): State => state.categories;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getCategoriesSlice(state).loadStatus;

export const getCategories = (state: rootStore) =>
  getCategoriesSlice(state).categories;

export const getIsLoadingSelector = (state: rootStore) => {
  return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING;
};

export const getIsLoadedSelector = (state: rootStore) => {
  return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED;
};

export const getIsErrorSelector = (state: rootStore) => {
  return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;
};

export const getTransformCategory = (state: rootStore) => {
  const mapCategories = getCategories(state);

  const { categories } = mapCategories;
  return categories
};
