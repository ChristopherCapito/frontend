import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import ContactForm from '../components/contactForm';
import ContactOption from '../components/contactOption';

const Contact = () => {
  const [formVisible, setFormVisible] = useState(false);

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
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const SEO = {
    title: 'Contact',
    description:
      'You can reach me via phone, XING, LinkedIn, Instagram, Twitter or mail. Drop me a message or give me a call!',
    openGraph: {
      title: 'Contact',
      description:
        'You can reach me via phone, XING, LinkedIn, Instagram, Twitter or mail. Drop me a message or give me a call!',
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <motion.div initial={{ x: '100%' }} animate={{ x: 0, y: 0 }} exit={{ x: '100%' }}>
        <AnimatePresence exitBeforeEnter>
          <div className="container mx-auto px-8 text-light text-2xl">
            {formVisible ? (
              <div>
                <a
                  onClick={() => setFormVisible(!formVisible)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => setFormVisible(!formVisible)}
                  className={`px-8 bg-light text-black ${formVisible ? '' : 'hidden'}`}
                >
                  Back
                </a>
                <motion.div inital={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ContactForm formVisible={formVisible} />
                </motion.div>
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-2 mx-auto contactOptions "
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <motion.div variants={listItem}>
                  <ContactOption
                    icon="linkedin"
                    socialMediaLink="https://de.linkedin.com/in/christopher-capito-41863b145"
                  />
                </motion.div>
                <motion.div variants={listItem}>
                  <ContactOption icon="xing" socialMediaLink="https://www.xing.com/profile/Christopher_Capito" />
                </motion.div>
                <motion.div variants={listItem}>
                  <ContactOption icon="instagram" socialMediaLink="https://www.instagram.com/capito.rocks/" />
                </motion.div>
                <motion.div variants={listItem}>
                  <div
                    className="justify-self-center"
                    onClick={() => setFormVisible(!formVisible)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => setFormVisible(!formVisible)}
                  >
                    <ContactOption icon="mail" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Contact;
