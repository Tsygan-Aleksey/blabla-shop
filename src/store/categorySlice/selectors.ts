import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { State } from "./slice";
import { getCategories } from "store/categoriesSlice/selectors";

export const getCategorySlice = (state: rootStore): State => state.category;
export const getLoadStatus = (state: rootStore): LOAD_STATUSES =>
  getCategorySlice(state).loadStatus;

export const getCategory = (state: rootStore) =>
  getCategorySlice(state).category;

export const isLoadingSeleсtor = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};
export const isLoadedSeleсtor = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};
export const isErrorSeleсtor = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};

export const getTransformCategory = (state: rootStore) => {
  const category = getCategory(state);
  const mapCategories = getCategories(state);
  const { items } = category;
  const { categories } = mapCategories;

  return items.map((item) => ({
    ...item,
    categoryLabel:
      categories.find(({ id }) => id === item.categoryTypeId)?.label ??
      "Неизвестная категория",
  }));
};
