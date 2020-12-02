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

export default function App({ Component, pageProps, router }) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    initGA(process.env.UA);
  });

  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <DefaultSeo />
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
        <motion.div
          key={router.route}
          initial={{ x: '100%' }}
          animate={{ x: 0, y: 0 }}
          exit={{ x: '100%' }}
          transition={{ ease: 'anticipate', duration: 0.6 }}
        >
          <Component {...pageProps} />
        </motion.div>

        <Footer />
      </AnimatePresence>
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
  router: PropTypes.any,
};
