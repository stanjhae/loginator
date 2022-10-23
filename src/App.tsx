import React, { useEffect, useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { isAppReady } from './store/store.functions';
import { Spin } from 'antd';
import RouteHandler from './router/router';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setAppReady(isAppReady());
  }, []);

  if (!appReady) {
    return <Spin size="large" />;
  }

  return (
    <>
      <NavBar />
      {appReady ? <RouteHandler /> : <Spin size="large" />}
      <Footer />
    </>
  );
};

export default view(App);
