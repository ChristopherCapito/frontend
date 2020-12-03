import React from 'react';
import xing from '@iconify/icons-simple-icons/xing';
import linkedin from '@iconify/icons-simple-icons/linkedin';
import instagram from '@iconify/icons-simple-icons/instagram';
import mail from '@iconify/icons-mdi/gmail';
import github from '@iconify/icons-simple-icons/github';
import Icon from '@iconify/react';
import { motion } from 'framer-motion';

const ContactOption = ({ icon, socialMediaLink }) => {
  const icons = {
    xing,
    linkedin,
    instagram,
    mail,
    github,
  };
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'anticipate', duration: 0.3 }}
      className="m-8 transition-all flex duration-500 hover:text-accent justify-self-center"
      href={socialMediaLink}
    >
      <Icon icon={icons[icon]} />
    </motion.a>
  );
};

export default ContactOption;
