import React from "react";
import { Link } from "react-router-dom";

import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {PageHeader, Badge} from "antd";

import { MenuApp } from "components/Menu";
// @ts-ignore
import style from "./header.module.css";
import { useSelector } from "react-redux";

import { selectorsCart } from "store/cartSlice";

import {SearchInput} from "../SearchInput";

export const Header: React.FC = () => {

  const cart = useSelector(selectorsCart.getGoodsInCart);

  return (
    <div className={style.header}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={
          <>
            <Link to="/" style={{ color: "#ffffff" }}>
              Bla-Bla shop
            </Link>
          </>
        }
        extra={[
          <SearchInput/>,
          <Link to="/registration" style={{ color: "#ffffff" }}>
            <UserOutlined style={{ fontSize: "30px" }} />
          </Link>,
          <Link to="/cart">
            <Badge
              size="small"
              count={cart.length}
              style={{ backgroundColor: "#0139c7" }}
            >
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#ffffff" }}
              />
            </Badge>
          </Link>,
          <MenuApp />,
        ]}
      />
    </div>
  );
};
