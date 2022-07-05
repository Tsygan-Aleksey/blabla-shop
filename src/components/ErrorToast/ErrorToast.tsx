import { Alert } from 'antd';


import React from 'react';



export const ErrorToast: React.FC = () => <Alert
      message="Ошибка"
      description="Попробуйте позже!"
      type="error"
      showIcon
    />