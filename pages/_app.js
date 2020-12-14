import '../styles/globals.css';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';

import { useEffect } from 'react';
import { m as motion, AnimatePresence, MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../next-seo.config';
// import Cookie from '../components/cookie';
import { initGA } from '../utils/analytics';

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    initGA(process.env.UA);
  }, []);

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <DefaultSeo {...SEO} />
      <Nav />
      <MotionConfig features={[ExitFeature, AnimationFeature]}>
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
          <motion.div key={router.asPath} className="overflow-hidden">
            <Component {...pageProps} />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  router: PropTypes.any,
};
