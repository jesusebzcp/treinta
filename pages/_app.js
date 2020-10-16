import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import store from "../src/flux/store";
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

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
