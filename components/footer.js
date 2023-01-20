import Icon from '@iconify/react';
import xing from '@iconify/icons-simple-icons/xing';
import linkedin from '@iconify/icons-simple-icons/linkedin';
import github from '@iconify/icons-simple-icons/github';
import instagram from '@iconify/icons-simple-icons/instagram';
import { m as motion } from 'framer-motion';
import Links from './links';

const Footer = () => {
  const container = {
    hidden: { y: '100vw' },
    show: { y: 0, transition: { ease: 'anticipate', duration: 0.6 } },
    exit: { y: '100vw', transition: { ease: 'anticipate', duration: 0.6 } },
  };

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-light mt-12 container mx-auto px-8"
    >
      <hr className="my-3" />
      <div className="lg:flex lg:flex-row-reverse lg:justify-end">
        <div className="hidden lg:flex lg:flex-col justify-between">
          <Links href="https://github.com/ChristopherCapito" text="Github" />
          <Links href="https://de.linkedin.com/in/christopher-capito-41863b145" text="LinkedIn" />
          <Links href="https://www.xing.com/profile/Christopher_Capito" text="XING" />
          <Links href="https://www.instagram.com/capito.rocks/" text="Instagram" />
        </div>
        <div className="flex lg:flex-col justify-between mb-4 lg:mb-0 lg:mr-20">
          <Links nextLink href="/" text="Home" />
          <Links nextLink href="/contact" text="Contact" />
        </div>

        <div className="flex justify-between lg:mr-16">
          <div>
            <p className="text-sm">
              CHRISTOPHER <br />
              CAPITO
            </p>
            <p className="text-dark text-tiny">
              Baumschulweg 64 <br />
              55276 Oppenheim <br />
              <Links
                additionalClasses="text-light"
                href="mailto:Christopher@capito.rocks"
                text="Christopher@capito.rocks"
              />
            </p>
          </div>
          <div className="flex flex-col lg:hidden justify-between">
            <p>Follow me</p>
            <div className="flex justify-between">
              <Links href="https://github.com/ChristopherCapito">
                <Icon className="text-lg" icon={github} />
              </Links>
              <Links href="https://de.linkedin.com/in/christopher-capito-41863b145">
                <Icon className="text-lg" icon={linkedin} />
              </Links>
            </div>
            <div className="flex justify-between">
              <Links href="https://www.xing.com/profile/Christopher_Capito">
                <Icon className="text-lg" icon={xing} />
              </Links>
              <Links href="https://www.instagram.com/capito.rocks/">
                <Icon className="text-lg" icon={instagram} />
              </Links>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between items-center mb-4">
        <div className="text-dark">
          <Links nextLink href="/imprintDataprotection" text="Imprint & Data Protection" />
        </div>
        <div className="hidden lg:flex items-center">
          <p className="mr-4">Follow me</p>
          <Links href="https://github.com/ChristopherCapito">
            <Icon className="text-icon mr-2" icon={github} />
          </Links>
          <Links href="https://de.linkedin.com/in/christopher-capito-41863b145">
            <Icon className="text-icon mr-2" icon={linkedin} />
          </Links>
          <Links href="https://www.xing.com/profile/Christopher_Capito">
            <Icon className="text-icon mr-2" icon={xing} />
          </Links>
          <Links href="https://www.instagram.com/capito.rocks/">
            <Icon className="text-icon mr-2" icon={instagram} />
          </Links>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
