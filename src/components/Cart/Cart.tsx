import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { AppDispatch } from "../../store/store";
import { selectorsCart, actionsCart } from "store/cartSlice";

export const Cart = () =>{
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector(selectorsCart.getCart);

    useEffect(() => {
        dispatch(actionsCart.fetchCart());
        console.log(cart)
    }, []);
    return <div></div>
}