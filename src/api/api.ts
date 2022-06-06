import {request} from "./request";

interface Good {
    categoryTypeId: string
    id: string;
    label: string;
    description: string;
    img: string;
    price: string
}
interface Categories{
    id: string;
    label: string;
    type: string
}
export function getGoods(): Promise<{ items: Good[]; total: number }> {
        return request('api/goods', {params: {}})
    }

export function getCategories(): Promise<{ categories: Categories[] }> {
    return request('api/categories', {params: {}})
}
export function getPopularCategories(): Promise<{ items: Good[]; category: Categories }[]> {
    return request('api/popular_categories', {params: {}})
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





