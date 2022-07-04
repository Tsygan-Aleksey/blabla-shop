import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { PageHeader, Badge } from "antd";

import { MenuApp } from "components/Menu";
// @ts-ignore
import style from "./header.module.css"
import {useDispatch, useSelector} from "react-redux";

import { selectorsCart, actionsCart } from "store/cartSlice";
import {AppDispatch} from "store/store";

export const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector(selectorsCart.getGoodsInCart);
  useEffect(() => {
    dispatch(actionsCart.fetchCart());
  }, []);
  return (
    <div  className={style.header}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}

        title={
          <Link to="/" style={{ color: "#ffffff" }}>
            Bla-Bla shop
          </Link>
        }
        extra={[
          <SearchOutlined style={{ fontSize: "30px", color: "#ffffff" }} />,
          <Link to="/registration" style={{ color: "#ffffff" }}>
            <UserOutlined style={{ fontSize: "30px" }} />
          </Link>,
          <Link to="/cart" >
            <Badge
              size="small"
              count={cart.length}
              style={{ backgroundColor: "#0139c7" }}
            >
              <ShoppingCartOutlined style={{ fontSize: "30px",color: "#ffffff"}} />
            </Badge>
          </Link>,
          <MenuApp />,
        ]}
      />
    </div>
  );
};
