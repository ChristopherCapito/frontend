import '../styles/globals.css';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';
import { m as motion, AnimatePresence, MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../next-seo.config';
// import Cookie from '../components/cookie';

export default function App({ Component, pageProps, router }) {
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
