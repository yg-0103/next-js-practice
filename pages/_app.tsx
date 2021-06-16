import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import GlobalStyle from 'styles/global';
import Layout from 'Layout';
import { configureStore } from '@reduxjs/toolkit';
import rootReducers, { rootSaga } from 'modules';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
