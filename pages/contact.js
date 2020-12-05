import { useState } from 'react';
import { NextSeo } from 'next-seo';
import ContactForm from '../components/contactForm';
import ContactOption from '../components/contactOption';

const Contact = () => {
  const [formVisible, setFormVisible] = useState(false);

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
            <ContactForm formVisible={formVisible} />
          </div>
        ) : (
          <div className="grid grid-cols-2 mx-auto contactOptions ">
            <ContactOption icon="linkedin" socialMediaLink="https://de.linkedin.com/in/christopher-capito-41863b145" />
            <ContactOption icon="xing" socialMediaLink="https://www.xing.com/profile/Christopher_Capito" />
            <ContactOption icon="instagram" socialMediaLink="https://www.instagram.com/capito.rocks/" />
            <div
              className="justify-self-center"
              onClick={() => setFormVisible(!formVisible)}
              role="button"
              tabIndex={0}
              onKeyDown={() => setFormVisible(!formVisible)}
            >
              <ContactOption icon="mail" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
