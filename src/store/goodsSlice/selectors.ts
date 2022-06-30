import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";

import { getCategories } from "store/categoriesSlice/selectors";
import { Good } from "../../api/api";
import { State } from "./slice";

export const getGoodsSlice = (state: rootStore): State => state.goods;
export const getLoadStatus = (state: rootStore): LOAD_STATUSES =>
  getGoodsSlice(state).loadStatus;
export const getGoods = (state: rootStore) => getGoodsSlice(state).goods;

export const getIsLoadingSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};
export const getIsLoadedSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};
export const getIsErrorSelector = (state: rootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};

export const getMapGoods = (state: rootStore) => {
  const goods = getGoods(state);
  const Categories = getCategories(state);
  const { items } = goods;
  const { categories } = Categories;

  return items.map((item: Good) => ({
    ...item,
    categoryLabel:
      categories.find(({ id }) => id === item.categoryTypeId)?.label ??
      "Неизвестная категория",
  }));
};
