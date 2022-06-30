import React from 'react'
import { Card} from 'antd';
import {Good} from "../../api/api";
import {ShoppingCartOutlined} from "@ant-design/icons";



export const CardItem:React.FC<Good>=({img,price,label})=>{
  const { Meta } = Card;
  return(
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={img} />}
    extra={<ShoppingCartOutlined style={{ fontSize: "30px",color: "#000000"}} onClick={()=>{console.log(123)}}/>}
  >
    <Meta title={price} description={label} />
  </Card>

  )
}