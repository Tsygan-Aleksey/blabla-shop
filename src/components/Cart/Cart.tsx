import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../store/store";
import { selectorsCart, actionsCart } from "store/cartSlice";
import { Button, Image, Space, Table } from "antd";

import {GoodInCart, putCart} from "../../api/api";
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
      render: (label: string, record: {id: string}) => {
        return <Link to={`/goods/${record.id}`}>{label}</Link>;
      },
    },
    {
      title: "Количество",
      dataIndex: ["good", "label"],
      key: "id",
      render: (_: unknown, record: { count: GoodInCart['count'], good: GoodInCart['good'] }) => {
        return (

          <Space>
            {record.count}
            <Button onClick={()=>{putCart(record.good, record.count + 1, record.good.id)
              setTimeout(()=>{
                dispatch(actionsCart.fetchCart())
              },100)}}>+</Button>
            <Button onClick={()=>{putCart(record.good, record.count - 1, record.good.id)
              setTimeout(()=>{
                dispatch(actionsCart.fetchCart())
              },200)}}>-</Button>
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
      render: (id: string) => {
        return (
          <Button
            onClick={() => {
              console.log(id);
            }}
          >
            Купить
          </Button>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(actionsCart.fetchCart());
    console.log(cart);
  }, []);

  return (
    <Table dataSource={editedCart} columns={columns} pagination={false}></Table>
  );
};
