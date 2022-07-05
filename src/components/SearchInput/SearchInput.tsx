import React, { useCallback, useEffect, useState } from "react";
import { getGoodsByTitle, Good } from "../../api/api";
import { debounce } from "lodash";
import { Button, Input, List, Row } from "antd";

import {  useNavigate } from "react-router-dom";

// @ts-ignore
import style from "./SearchInput.module.css";

export const SearchInput: React.FC = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [goods, setGoods] = useState<Good[]>([]);
  useEffect(() => {
    if (value.length > 3) {
      getSearchGoods(value);
    } else setVisible(false);
  }, [value]);
  const getSearchGoods = useCallback(
    debounce(
      (value) =>
        getGoodsByTitle(value).then(({ items }) => {
          setGoods(items);
          setVisible(true);
        }),
      1500
    ),
    []
  );

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Row style={{ whiteSpace: "nowrap" }}>
      {
        <div className={style.search}>
          <Input onChange={onInputHandler} placeholder={"поиск"} />

          {visible && (
            <List
              bordered
              dataSource={goods.slice(0, 10)}
              renderItem={({ label, id }) => (
                <List.Item key={id}>
                  <Button
                    type="link"
                    onClick={() => {
                      navigate(`/goods/${id}`);
                      setVisible(false);
                    }}
                  >
                    {label}
                  </Button>
                </List.Item>
              )}
            ></List>
          )}
        </div>
      }
    </Row>
  );
};
