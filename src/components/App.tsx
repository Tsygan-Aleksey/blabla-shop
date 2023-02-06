import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Col, Row } from "antd";

import { GoodsPage } from "./GoodsPage";
import { MainPage } from "./MainPage";
import { CategoryPage } from "./CategoryPage";
import { Header } from "./Header";
import { Footer } from "./Footer";
// @ts-ignore
import style from "./app.module.css";

import { CardPage } from "./CardPage";
import { Cart } from "./Cart";
import { RegistrationPage } from "./RegistrationPage";

export function App() {
  useEffect(() => {}, []);
  return (
    <div className={style.app}>
      <Header />
      <div>
        <Row justify="center" align="middle">
          <Col span={20}>
            <Routes>
              <Route path="/blabla-shop" element={<MainPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path={"/goods/:CardId"} element={<CardPage />} />
              <Route path="/category/:idCategory" element={<CategoryPage />} />
              <Route path="/goods" element={<GoodsPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
