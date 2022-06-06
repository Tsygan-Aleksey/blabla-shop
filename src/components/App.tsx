import React, {useEffect} from 'react';
import {Loader} from "./common";
import {getGoods, getCategories, getPopularCategories} from "api";




export function App() {
    useEffect( ()=>{
        getPopularCategories().then(Popular => console.log(Popular))
        getGoods().then(Goods => console.log(Goods))
        getCategories().then(Categories => console.log(Categories))
    },[])
  return (
    <div className="App">
      <Loader/>
    </div>
  );
}


