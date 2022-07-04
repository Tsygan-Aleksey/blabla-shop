import { request } from "./request";

export interface Good {
  categoryTypeId: string;
  id: string;
  label: string;
  description: string;
  img: string;
  price: string;
}
export interface Category {
  id: string;
  type: string;
  label: string;
}

interface GoodsSearch {
  ids: string; // выбрать по id, exmaple ids=1,2,3
  categoryTypeIds: string; // выбрать по id категория, example categoryTypeIds=1,2,3
  minPrice: number; // выбрать с ценой не более максимально указанной
  maxPrice: number; // выбрать с ценой не менее минимально указанной
  text: string; // выбрать по содержанию указанной подстроки в названии
  limit: number; // количество возвращаемых товаров, по умолчанию 20
  offset: number; // смещение относительно начала.
  sortBy: keyof Good; // по какому полю бек сортирует товары, по умолчанию по id
  sortDirection: "asc" | "desc"; // как сортировать asc - по возрастанию desc - по убыванию, по умолчанию asc
}

export interface GoodInCart {
  good: Good;
  count: number; // кол-во товара в корзине
  id: string; // id товара
}

export function getGoods(): Promise<{ items: Good[]; total: number }> {
  return request("goods");
}

export function getCategories(): Promise<{ categories: Category[] }> {
  return request("categories");
}
export function getPopularCategories(): Promise<
  { items: Good[]; category: Category }[]
> {
  return request("popular_categories");
}

export function getGoodsByCategory(
  categoryTypeId: GoodsSearch["categoryTypeIds"]
): Promise<{ items: Good[]; total: number }> {
  return request("goods", { params: { categoryTypeIds: `${categoryTypeId}` } });
}

export function getGoodById(
  id: GoodsSearch["ids"]
): Promise<{ items: Good[]; total: number }> {
  return request("goods", { params: { ids: id } });
}
export function getGoodsByTitle(
  value: string
): Promise<{ items: Good[]; total: number }> {
  return request("goods", { params: { text: value } });
}
export function getCart(): Promise<GoodInCart[]> {
  return request("cart");
}

export function putCart(
  item: GoodInCart["good"],
  count: GoodInCart["count"],
  id: GoodInCart["id"]
): Promise<GoodInCart> {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ good: item, count: count, id }),
  };
  return request("cart", { requestOptions });
}

