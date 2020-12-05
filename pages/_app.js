import '../styles/globals.css';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
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
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  router: PropTypes.any,
};
