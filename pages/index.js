import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

const Index = () => {
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

  const container = {
    hidden: { x: '-100%' },
    transition: { when: 'afterChildren' },
    show: {
      x: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { x: '-100%' },
  };

  const item = {
    hidden: { x: '-100%' },
    show: { x: 0 },
  };

  return (
    <div>
      <NextSeo {...SEO} />
      <motion.div variants={container} initial="hidden" animate="show" exit="exit" className="container mx-auto px-8">
        <motion.p variants={container} className="text-light text-lg font-medium lg:text-2xl lg:leading-tight">
          <motion.span variants={item}>I'm a web developer. Have a look at my </motion.span>
          <motion.span variants={item}>
            <Link href="/portfolio">
              <a className="text-red-300">projects</a>
            </Link>{' '}
          </motion.span>
          <motion.span variants={item}>and </motion.span>
          <motion.span variants={item}>
            <Link href="/contact">
              <a className="text-red-300">contact me</a>
            </Link>
          </motion.span>
          <motion.span variants={item}>. If you need manpower, talk to my team over at </motion.span>
          <motion.span variants={item}>
            <a href="http://das-andere.studio" className="text-red-300">
              Das Andere Studio
            </a>
            .
          </motion.span>
        </motion.p>
        <motion.div variants={container} className="grid grid-cols-1 lg:grid-cols-3 text-light pt-8 lg:pt-16">
          <div className="pb-10">
            <motion.p variants={item} className="lg:text-md font-medium ">
              Why don't you see my
            </motion.p>
            <motion.div variants={item}>
              <Link scroll={false} href="/portfolio">
                <a className="text-md lg:text-xl leading-none font-medium">portfolio</a>
              </Link>
            </motion.div>
          </div>
          <div className="pb-10">
            <motion.p variants={item} className="lg:text-md font-medium">
              Don't be shy, go and
            </motion.p>
            <motion.div variants={item}>
              <Link scroll={false} href="/contact">
                <a className="text-md lg:text-xl leading-none font-medium">say hi</a>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
