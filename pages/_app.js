import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import withData from '../utils/apollo';
import Nav from '../components/nav';
import Footer from '../components/footer';

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Head>
      <title>Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <div className="container mx-auto px-8"> */}
    <Nav />
    <Component {...pageProps} />
    <Footer />
    {/* </div> */}
  </ApolloProvider>
);

// Wraps all components in the tree with the data provider
export default withData(App);

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
};
