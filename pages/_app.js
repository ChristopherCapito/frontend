import '../styles/globals.css';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import { initGA } from '../utils/analytics';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useApollo } from '../apollo/apolloClient';

export default function App({ Component, pageProps }) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    initGA(process.env.UA);
  });

  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <DefaultSeo />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
};
