import { m as motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Links from '../components/links';

const Index = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { x: '-100vw' },
    show: { x: 0, transition: { ease: 'anticipate', duration: 0.6 } },
    exit: { x: '-100vw', transition: { ease: 'anticipate', duration: 0.6 } },
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
      <motion.div variants={container} initial="hidden" animate="show" exit="exit" className="container mx-auto px-8">
        <motion.p variants={listItem} className="text-light text-lg font-medium lg:text-2xl lg:leading-tight">
          I'm a cloud consultant & software engineer. From a website to cloud-architected systems. For larger projects,
          I have a network of associates for development.
        </motion.p>
        <motion.div variants={listItem} className="grid grid-cols-1 lg:grid-cols-3 text-light pt-8 lg:pt-16">
          <div className="pb-10">
            <p className="lg:text-md font-medium">Don't be shy, go and</p>
            <h2>
              <Links
                nextLink
                href="/contact"
                text="contact me"
                additionalClasses="text-md lg:text-xl leading-none font-medium"
              />
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Index;
