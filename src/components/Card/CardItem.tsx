import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import { Good, putCart } from "../../api/api";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const CardItem: React.FC<Good> = (
  { img, price, label, id, categoryTypeId, description },
  count
) => {
  const navigate = useNavigate();

  const { Meta } = Card;
  const cartRef = useRef<HTMLHeadingElement>(null);
  return (
    <Card
      hoverable
      onClick={(event) => {
        if (cartRef.current?.children[0] === event.target) {
          putCart(
            { img, price, label, id, categoryTypeId, description },
            count,
            id
          ).then();
        } else {
          navigate(`/goods/${id}`);
        }
      }}
      style={{ width: 240 }}
      cover={<img alt="example" src={img} />}
      extra={
        <ShoppingCartOutlined
          ref={cartRef}
          style={{ fontSize: "30px", color: "#000000" }}
        />
      }
    >
      <Meta title={`${price} р.`} description={label} />
    </Card>
  );
};
