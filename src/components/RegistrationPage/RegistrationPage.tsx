import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Switch,
  Checkbox,
  Space,
  Col,
  Row,
  Divider,
} from "antd";

import { selectorsCategories } from "store/categoriesSlice";
import { AppDispatch } from "store";
import { registrationActions } from "store/registrationSlice";

export const RegistrationPage: React.FC = () => {
  const categoriesItems = useSelector(selectorsCategories.getCategories);
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = categoriesItems;

  return (
    <>
      <Row>
        <Col span={24}>
          <h1>Зарегистрироваться</h1>
        </Col>
        <Divider />
      </Row>

      <Form
        autoComplete="off"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        onFinish={() => {
          dispatch(registrationActions.checkAuth());
        }}
      >
        <Row justify="center">
          <Col span={8}>
            <Form.Item
              label="Имя"
              name="UserName"
              rules={[
                {
                  required: true,
                  message: "Введите имя",
                },
                { whitespace: true },
                { min: 2 },
              ]}
              hasFeedback
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              label="Фамилия"
              name="UserSurname"
              rules={[{ whitespace: true }, { min: 2 }]}
              hasFeedback
            >
              <Input placeholder="Surname" />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "Некорректно введена почта",
                },
                {
                  required: true,
                  message: "Введите почту",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Пароль"
              rules={[
                {
                  required: true,
                  message: "Введите пароль",
                },
                { min: 6 },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Подтвердите пароль"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Подтвердите пароль",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Два пароля не совпадают"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Пол">
              <Radio.Group>
                <Radio value="male"> Мужской </Radio>
                <Radio value="female"> Женский </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Любимые категории" required>
              <Checkbox.Group>
                <Row>
                  {categories.map(({ label, id }) => (
                    <Col key={id}>
                      <Checkbox value={label} style={{ lineHeight: "normal" }}>
                        {label}
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label="Подписка на новости"
              valuePropName="checked"
              required
            >
              <p>Хотите подписаться на рассылку новостей?</p>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </Form.Item>
            <Form.Item
              label="День рождения"
              name="dateofbirth"
              required
              hasFeedback
            >
              <DatePicker
                picker="date"
                format="DD/MM/YY"
                placeholder="Chose date of birth"
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Зарегистрироваться
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
