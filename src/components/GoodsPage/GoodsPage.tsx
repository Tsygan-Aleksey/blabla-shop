import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Image, TableProps, Divider } from "antd";

import { AppDispatch } from "../../store/store";
import { actions, GoodSelectors } from "store/goodsSlice";
import { actionsCategories } from "store/categoriesSlice";
import { Link } from "react-router-dom";
import { selectorsCategories } from "store/categoriesSlice";
import { ColumnsType } from "antd/es/table";
import { Good, GoodsSearch } from "../../api/api";
import Search from "antd/es/input/Search";

import { Loader } from "../Loader";
import { ErrorToast } from "../ErrorToast";

export const GoodsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const goods = useSelector(GoodSelectors.getMapGoods);
  const loading = useSelector(GoodSelectors.getIsLoadingSelector);
  const error = useSelector(GoodSelectors.getIsErrorSelector);
  const { categories } = useSelector(selectorsCategories.getCategories);
  const [value, setValue] = useState("");
  const [params, setParams] = useState<GoodsSearch>({});

  useEffect(() => {
    dispatch(actionsCategories.actions.fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(actions.fetchGoods(params));
  }, [params]);

  const onSearch = () => {
    setParams((prevState) => {
      return { ...prevState, text: value };
    });
    setValue("");
    console.log(params.text);
  };
  const onChange: TableProps<Good>["onChange"] = (
    pagination,
    filters,
    sorter: { [key: string]: any }
  ) => {
    setParams((prevState) => {
      let newState = prevState;
      if (filters.categoryTypeId !== null) {
        newState = {
          ...newState,
          categoryTypeIds: filters.categoryTypeId?.toString(),
        };
      }
      if (filters.categoryTypeId === null) {
        delete newState.categoryTypeIds;
      }
      if (sorter.order === "ascend") {
        newState = {
          ...newState,
          sortBy: sorter?.field,
          sortDirection: "asc",
        };
      }
      if (sorter.order === "descend") {
        newState = {
          ...newState,
          sortBy: sorter?.field,
          sortDirection: "desc",
        };
      }
      if (sorter.order === undefined) {
        newState = {
          ...newState,
          sortBy: "id",
        };
        delete newState.sortDirection;
      }

      return newState;
    });
  };

  const columns: ColumnsType<Good> = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Категория",
      dataIndex: "categoryLabel",
      key: "categoryTypeId",
      filters: [
        ...categories.map(({ label, id }) => {
          return {
            text: label,
            value: id,
          };
        }),
      ],
    },

    {
      title: "Название",
      dataIndex: "label",
      key: "id",
      render: (label: string, record: { id: string }) => {
        return <Link to={`/goods/${record.id}`}>{label}</Link>;
      },
      filterSearch: true,
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "id",
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "id",
      sorter: true,
    },
    {
      title: "Изображение",
      dataIndex: "img",
      key: "id",
      render: (img: string) => {
        return <Image height={200} src={img} />;
      },
    },
  ];
  return (
    <>
      <Search
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        placeholder="Введите название"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Divider />
      <Table
        pagination={{
          pageSizeOptions: [10, 15, 20, 25],
          total: goods.total,
          onChange: (currentPage, pageSize) => {
            setParams((prevState) => {
              return {
                ...prevState,
                sortBy: "id",
                sortDirection: "asc",
                limit: Number(pageSize),
                offset: Number(pageSize) * Number(currentPage - 1),
              };
            });
          },
          defaultPageSize: 20,
        }}
        dataSource={goods.items}
        columns={columns}
        onChange={onChange}
      ></Table>
      {loading && <Loader />}
      {error && <ErrorToast />}
    </>
  );
};
