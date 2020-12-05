import React from 'react';
import xing from '@iconify/icons-simple-icons/xing';
import linkedin from '@iconify/icons-simple-icons/linkedin';
import instagram from '@iconify/icons-simple-icons/instagram';
import mail from '@iconify/icons-mdi/gmail';
import github from '@iconify/icons-simple-icons/github';
import Icon from '@iconify/react';

const ContactOption = ({ icon, socialMediaLink }) => {
  const icons = {
    xing,
    linkedin,
    instagram,
    mail,
    github,
  };
  return (
    <a className="m-8 transition-all flex duration-500 hover:text-accent justify-self-center" href={socialMediaLink}>
      <Icon icon={icons[icon]} />
    </a>
  );
};

export default ContactOption;
