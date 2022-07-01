import React, {useEffect} from "react";

import { List, Divider } from "antd";

import { Category, Good } from "api/api";
import { CardItem } from "../Card";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store";
import {selectorsCart, actionsCart} from "../../store/cartSlice";

export const ContainerWithCards: React.FC<{
  category: Category;
  items: Good[];
}> = ({ items, category }) => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector(selectorsCart.getCart);

    useEffect(() => {
        dispatch(actionsCart.fetchCart());
        console.log(cart.count)
    }, []);

  return (
    <>
      <h2 style={{ color: "#0035F8" }}>
        <Link to={`/category/${category.id}`}>{category.label}</Link>
      </h2>
      <Divider></Divider>
      <List
        grid={{ gutter: 10, column: 5 }}
        dataSource={items}
        renderItem={(item) => (
          <div>
            <List.Item>
              <CardItem
                id={item.id}
                img={item.img}
                label={item.label}
                price={item.price}
                description={item.description}
                categoryTypeId={item.categoryTypeId}
              />
            </List.Item>
          </div>
        )}
      ></List>
    </>
  );
};
