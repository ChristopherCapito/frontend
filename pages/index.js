import Link from 'next/link';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

const Index = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { x: '-100vw' },
    show: { x: 0, transition: { ease: 'anticipate', duration: 0.6 } },
    exit: { x: '-100vw' },
  };

  const SEO = {
    title: 'Home',
    description:
      'Hi, I am a web developer always on the lookout for projects. Check my portflio and see for yourself, and then drop me a message!',
    openGraph: {
      title: 'Home',
      description:
        'Hi, I am a web developer always on the lookout for projects. Check my portflio and see for yourself, and then drop me a message!',
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <motion.div variants={container} initial="hidden" animate="show" className="container mx-auto px-8">
        <motion.p variants={listItem} className="text-light text-lg font-medium lg:text-2xl lg:leading-tight">
          I'm a freelance web developer doing concepting and developing. Sometimes alone, sometimes, for larger
          projects, with my team over at{' '}
          <span>
            <a href="http://das-andere.studio" className="shadow">
              Das Andere Studio
            </a>
          </span>
          .
        </motion.p>
        <motion.div variants={listItem} className="grid grid-cols-1 lg:grid-cols-3 text-light pt-8 lg:pt-16">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={listItem}>
              <div className="pb-10">
                <p className="lg:text-md font-medium ">Why don't you see my</p>
                <Link scroll={false} href="/portfolio">
                  <a className="text-md lg:text-xl leading-none font-medium">portfolio</a>
                </Link>
              </div>
            </motion.div>
            <motion.div variants={listItem}>
              <div className="pb-10">
                <p className="lg:text-md font-medium">Don't be shy, go and</p>
                <Link scroll={false} href="/contact">
                  <a className="text-md lg:text-xl leading-none font-medium">say hi</a>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Index;
