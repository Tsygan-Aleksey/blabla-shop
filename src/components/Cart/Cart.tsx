import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../store/store";
import { selectorsCart, actionsCart } from "store/cartSlice";
import { Button, Divider, Image, Space, Table } from "antd";

import { GoodInCart } from "../../api/api";
import { Link } from "react-router-dom";


export const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector(selectorsCart.getGoodsInCart);
  const editedCart = cart.map((item) => {
    return {
      ...item,
      label: item.good.label,
      img: item.good.img,
      price: item.good.price,
    };
  });

  const columns = [
    {
      title: "Номер товара",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Изображение",
      dataIndex: "img",
      key: "img",
      render: (img: string) => {
        return <Image src={img} height={170}></Image>;
      },
    },
    {
      title: "Товар",
      dataIndex: "label",
      key: "",
      render: (label: string, record: { id: string }) => {
        return <Link to={`/goods/${record.id}`}>{label}</Link>;
      },
    },
    {
      title: "Количество",
      dataIndex: ["good", "label"],
      key: "id",
      render: (
        _: unknown,
        record: { count: GoodInCart["count"]; good: GoodInCart["good"] }
      ) => {
        return (
          <Space>
            {record.count}
            <Button
              onClick={() => {
                dispatch(
                  actionsCart.addToCart({
                    good: record.good,
                    count: record.count + 1,
                  })
                );
              }}
            >
              +
            </Button>
            <Button
              onClick={() => {
                dispatch(
                  actionsCart.addToCart({
                    good: record.good,
                    count: record.count - 1,
                  })
                );
              }}
            >
              -
            </Button>
          </Space>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "id",
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id: string, record: { good: GoodInCart["good"] }) => {
        return (
          <>
            <Button onClick={() => {}}>Купить</Button>
            <Divider />
            <Button
              onClick={() => {
                dispatch(
                  actionsCart.addToCart({
                    good: record.good,
                    count: 0,
                  })
                );
              }}
            >
              Удалить
            </Button>
          </>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(actionsCart.fetchCart());
  }, []);

  return (<>
      {editedCart.length > 0 && <Table dataSource={editedCart} columns={columns} pagination={false}></Table>}
      {editedCart.length === 0 && <h1>'Пока ничего нет!'</h1>}

  </>)
};
