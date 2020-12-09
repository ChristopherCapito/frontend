import '../styles/globals.css';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../next-seo.config';
// import Cookie from '../components/cookie';
import { initGA } from '../utils/analytics';

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    initGA(process.env.UA);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit">
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
  router: PropTypes.object,
};
