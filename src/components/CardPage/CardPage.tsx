import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGoodById, Good } from "../../api/api";
import { Col, Row, Image, Button, Space } from "antd";
import { actionsCart } from "store/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";

export const CardPage: React.FC = () => {
  const { CardId } = useParams() as { CardId: string };
  const [count, setCount] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const [good, setGood] = useState<{ items: Good[]; total: number }>({
    items: [],
    total: 0,
  });

  useEffect(() => {
    getGoodById(CardId).then((r) => setGood(r));
  }, []);
  console.log(good);
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Image src={good.items[0]?.img} />
        </Col>
        <Col span={12}>
          <h1>{good.items[0]?.label}</h1>
          <h2>{good.items[0]?.description}</h2>
          <h2>{good.items[0]?.price} р.</h2>
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
                  }
                  return prevState - 1;
                });
              }}
            >
              -
            </Button>
            <Button
              type="primary"
              onClick={() => {
                dispatch(actionsCart.addToCart({ good: good.items[0], count }));
              }}
            >
              Добавить в корзину
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  );
};
