import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGoodById, Good } from "../../api/api";
import {Col, Row, Image, Button} from "antd";

export const CardPage: React.FC = () => {
  const { CardId } = useParams() as { CardId: string };
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
          <Image  src={good.items[0]?.img} />
        </Col>
        <Col span={12}>
            <h1>{good.items[0]?.label}</h1>
            <h2>{good.items[0]?.description}</h2>
            <h2>{good.items[0]?.price} р.</h2>
            <Button type="primary" onClick={()=>{
                console.log(good.items[0]?.id)
            }}>
                Добавить в корзину
            </Button>

        </Col>
      </Row>
    </>
  );
};
