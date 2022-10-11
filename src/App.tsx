import React, { useEffect, useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { isAppReady } from './store/store.functions';
import { Spin } from 'antd';
import RouteHandler from './router';

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setAppReady(isAppReady());
  }, []);

  if (!appReady) {
    return <Spin size="large" />;
  }

  return <RouteHandler />;
};

export default view(App);
