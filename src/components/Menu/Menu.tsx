import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Menu, Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";

import { AppDispatch } from "store";
import { actionsCategories, selectorsCategories } from "store/categoriesSlice";

// @ts-ignore
import style from "./menu.module.css";

export const MenuApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => {
    setVisible((prevState) => !prevState);
  };
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectorsCategories.getTransformCategory);
  const loaded = useSelector(selectorsCategories.getIsLoadedSelector);
  const error = useSelector(selectorsCategories.getIsErrorSelector);

  useEffect(() => {
    dispatch(actionsCategories.actions.fetchCategories());
  }, []);

  return (
    <>
      <Button onClick={toggleDrawer}>
        <MenuOutlined style={{ color: "#0035F8" }} />
      </Button>

      <Drawer
        placement={"right"}
        closable={false}
        onClose={toggleDrawer}
        visible={visible}
        width={250}
        forceRender={true}
        title={
          <div>
            <span>Категории</span>{" "}
            <Button className={style.closeBtn} onClick={toggleDrawer}>
              <CloseOutlined />
            </Button>
          </div>
        }
        getContainer={false}
        footer={<Link to="/goods">Хотите посмотреть все товары?</Link>}
      >
        <Menu>
          {error && <div>ошибка</div>}
          {loaded &&
            categories.map((category) => (
              <MenuItem key={category.id}>
                <Link to={`/category/${category.id}`}>{category.label}</Link>
              </MenuItem>
            ))}
        </Menu>
      </Drawer>
    </>
  );
};
