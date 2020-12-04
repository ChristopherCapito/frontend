import '../styles/globals.css';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initGA } from '../utils/analytics';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useApollo } from '../apollo/apolloClient';
import SEO from '../next-seo.config';

export default function App({ Component, pageProps, router }) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    initGA(process.env.UA);
  });

  const apolloClient = useApollo(pageProps);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ApolloProvider client={apolloClient}>
        <AnimatePresence
          onExitComplete={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <Nav />

          <motion.div key={router.route} transition={{ when: 'afterChildren' }}>
            <Component {...pageProps} />
            <Footer />
          </motion.div>
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
