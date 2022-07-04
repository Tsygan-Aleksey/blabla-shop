import { LOAD_STATUSES } from "../../constants";
import { RootStore } from "../store";
import { State } from "./slice";
import { getCategories } from "store/categoriesSlice/selectors";

export const getCategorySlice = (state: RootStore): State => state.category;
export const getLoadStatus = (state: RootStore): LOAD_STATUSES =>
  getCategorySlice(state).loadStatus;

export const getCategory = (state: RootStore) =>
  getCategorySlice(state).category;

export const isLoadingSeleсtor = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};
export const isLoadedSeleсtor = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};
export const isErrorSeleсtor = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};

export const getTransformCategory = (state: RootStore) => {
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
