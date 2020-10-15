import App from "next/app";
import { Provider } from "react-redux";
import store from "../src/flux/store";
import React from "react";
import Layout from "./layout";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
