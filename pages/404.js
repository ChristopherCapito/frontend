// pages/404.js
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

export default function Custom404() {
  const SEO = {
    title: '404',
    description: 'Do you hate it when your customer!s see 404 pages? Me too. Call me and we ll elimate them!',
    openGraph: {
      title: '404',
      description: 'Do you hate it when your customer!s see 404 pages? Me too. Call me and we ll elimate them!',
    },
    noindex: true,
  };

  return (
    <>
      <NextSeo {...SEO} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full container px-8 mx-auto"
      >
        <div className="mb-32 w-7/12 ">
          <h1 className="text-light text-lg lg:text-xl">
            I could not find what you are looking for. <span className="text-base">(This is a 404 page)</span>
          </h1>
          <p className="text-light pb-6">Do you hate it when your customers see 404 pages? Me too.</p>
          <a className="bg-white  p-4 px-6 font-bold" href="/contact">
            Call me
          </a>
        </div>
      </motion.div>
    </>
  );
}
