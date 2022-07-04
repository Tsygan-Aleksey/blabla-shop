import { LOAD_STATUSES } from "../../constants";
import { RootStore } from "../store";

import { getCategories } from "store/categoriesSlice/selectors";
import { Good } from "../../api/api";
import { State } from "./slice";

export const getGoodsSlice = (state: RootStore): State => state.goods;
export const getLoadStatus = (state: RootStore): LOAD_STATUSES =>
  getGoodsSlice(state).loadStatus;
export const getGoods = (state: RootStore) => getGoodsSlice(state).goods;

export const getIsLoadingSelector = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADING;
};
export const getIsLoadedSelector = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.LOADED;
};
export const getIsErrorSelector = (state: RootStore) => {
  return getLoadStatus(state) === LOAD_STATUSES.ERROR;
};

export const getMapGoods = (state: RootStore) => {
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
