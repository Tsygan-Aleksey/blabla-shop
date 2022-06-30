import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "antd";

import { AppDispatch } from "../../store/store";
import { actions, GoodSelectors } from "store/goodsSlice";
import { actionsCategories } from "store/categoriesSlice";

export const GoodsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const goods = useSelector(GoodSelectors.getMapGoods);

  useEffect(() => {
    dispatch(actions.fetchGoods());
    dispatch(actionsCategories.actions.fetchCategories());
  }, []);

  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Category",
      dataIndex: "categoryLabel",
      key: "categoryTypeId",
    },
    {
      title: "Goods",
      dataIndex: "label",
      key: "id",
      render: (label: string) => {
        return <a>{label}</a>;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "id",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "id",
    },
  ];
  return (
    <Table
      dataSource={goods}
      columns={columns}
      pagination={{ total: 220, pageSize: 10 }}
    ></Table>
  );
};
