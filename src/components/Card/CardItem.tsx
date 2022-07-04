import React, {  useRef, useState } from "react";
import {Button, Card, Image, Space} from "antd";
import { Good } from "../../api/api";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionsCart} from "../../store/cartSlice";
import {AppDispatch} from "../../store/store";

export const CardItem: React.FC<Good> = ({
  img,
  price,
  label,
  id,
  categoryTypeId,
  description,
}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const { Meta } = Card;
  const cartRef = useRef<HTMLHeadingElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<Image alt="example" src={img} />}
      extra={
        <Space>
          <Button
            onClick={() => {
              setCount((prevState) => prevState + 1);
            }}
          >
            +
          </Button>
          <span>{count}</span>
          <Button
            onClick={() => {
              setCount((prevState) => {
                if (prevState === 1) {
                  return prevState;
                } else return prevState - 1;
              });
            }}
          >
            -
          </Button>
          <Button
            onClick={(event) => {
              dispatch(actionsCart.addToCart({good:{img, price, label, id, categoryTypeId, description}, count},
              ));
            }}
          >
            <ShoppingCartOutlined ref={cartRef} style={{ color: "#000000" }} />
          </Button>
        </Space>
      }
    >
      <Meta
        title={`${price} р.`}
        description={
          <Space>
            {label}{" "}
            <Button
              onClick={() => {
                navigate(`/goods/${id}`);
              }}
            >
              Подробнее
            </Button>
          </Space>
        }
      />
    </Card>
  );
};
