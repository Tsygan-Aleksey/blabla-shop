import React from "react";
import { Link } from "react-router-dom";

import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { PageHeader, Divider, Badge } from "antd";

import { MenuApp } from "components/Menu";
// @ts-ignore
import style from "./header.module.css"

export const Header: React.FC = () => {
  return (
    <div  className={style.header}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}

        title={
          <Link to="/" style={{ color: "#ffffff" }}>
            BlaBla-shop
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
              count={1}
              style={{ backgroundColor: "#0139c7" }}
            >
              <ShoppingCartOutlined style={{ fontSize: "30px",color: "#ffffff"}} />
            </Badge>
          </Link>,
          <MenuApp />,
        ]}
      />
      <Divider/>
    </div>
  );
};
