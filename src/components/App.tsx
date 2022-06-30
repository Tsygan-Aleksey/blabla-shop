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

export function App() {
  useEffect(() => {}, []);
  return (
    <div className={style.app}>
      <Header />
      <div>
        <Row justify="center" align="middle">
          <Col span={20}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              {/*<Route path="/registration" element={<RegistrationForm />} />*/}

              <Route path="/category/:idCategory" element={<CategoryPage />} />
              <Route path="/goods" element={<GoodsPage />} />
            </Routes>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
