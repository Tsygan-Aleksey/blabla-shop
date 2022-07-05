import React from "react";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 40, background: "white" }} spin />;

export const Loader: React.FC = () => (
  <Spin
    indicator={antIcon}
    style={{ position: "absolute", top: "50%", left: "50%" }}
  />
);
