import '../styles/globals.css';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useApollo } from '../apollo/apolloClient';
import SEO from '../next-seo.config';
// import Cookie from '../components/cookie';
import { initGA } from '../utils/analytics';

export default function App({ Component, pageProps, router }) {
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    initGA(process.env.UA);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ApolloProvider client={apolloClient}>
        <Nav />
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <Component {...pageProps} />
          <Footer />
        </AnimatePresence>
      </ApolloProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
  router: PropTypes.any,
};
