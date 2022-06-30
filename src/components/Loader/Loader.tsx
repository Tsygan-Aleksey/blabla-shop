import React from "react";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

export const Loader: React.FC = () => (
  <Spin
    indicator={antIcon}
    style={{ position: "absolute", top: "5%", left: "5%" }}
  />
);
