import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { view } from '@risingstack/react-easy-state';
import { isAppReady } from './store/store.functions';
import { Spin } from 'antd';

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setAppReady(isAppReady());
  }, []);

  if (!appReady) {
    return <Spin size="large" />;
  }
  return <RouterProvider router={router} />;
};

export default view(App);
