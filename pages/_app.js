import Head from 'next/head';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useApollo } from '../apollo/apolloClient';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Christopher Capito</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
