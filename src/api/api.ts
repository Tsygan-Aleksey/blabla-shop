import { request } from "./request";

export interface Good {
  categoryTypeId?: string;
  id: string;
  label: string;
  description?: string;
  img: string;
  price: string;
}
export interface Category {
  id: string;
  type: string;
  label: string;
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

export function getGoodsByCategory(categoryTypeId:string):Promise<{ items: Good[]; total: number }>{
  return request('goods',({ params: {categoryTypeIds:`${categoryTypeId}`}}))
}
// export function getCart(): Promise<{ items: Good[]; total: number }> {
//     return request('api/cart', {params: {}})
// }
//
// export function putCart(): Promise<{ items: Good[]; total: number }> {
//     return request('api/cart', {params: {}})
// }
// export function deleteCart(): Promise<{ items: Good[]; total: number }> {
//     return request('api/cart', {params: {}})
// }
//
// export function postGood(): Promise<{ items: Good[]; total: number }> {
//     return request('api/cart', {params: {}})
// }
// export function deleteGood(): Promise<{ items: Good[]; total: number }> {
//     return request('api/cart', {params: {}})
// }
