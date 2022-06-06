import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./components";
import './server'
import 'antd/dist/antd.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
