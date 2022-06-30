import React from "react";

import { List, Divider } from "antd";

import { Category, Good } from "api/api";
import { CardItem } from "../Card";
import { Link } from "react-router-dom";

export const ContainerWithCards: React.FC<{
  category: Category;
  items: Good[];
}> = ({ items, category }) => {
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
                label={item.label}
                id={item.id}
                price={item.price}
                img={item.img}
              />
            </List.Item>
          </div>
        )}
      ></List>
    </>
  );
};
