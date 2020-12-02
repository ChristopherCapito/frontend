import Link from 'next/link';
import Icon from '@iconify/react';
import xing from '@iconify/icons-simple-icons/xing';
import linkedin from '@iconify/icons-simple-icons/linkedin';
import github from '@iconify/icons-simple-icons/github';
import instagram from '@iconify/icons-simple-icons/instagram';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.div
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '100%' }}
    transition={{ ease: 'easeOut', duration: 0.2 }}
  >
    <footer className="text-light mt-12 container mx-auto px-8">
      <hr className="my-3" />
      <div className="lg:flex lg:flex-row-reverse lg:justify-end">
        <div className="hidden lg:flex lg:flex-col justify-between">
          <a href="https://github.com/ChristopherCapito">GitHub</a>
          <a href="https://de.linkedin.com/in/christopher-capito-41863b145">LinkedIn</a>
          <a href="https://www.xing.com/profile/Christopher_Capito">XING</a>
          <a href="https://www.instagram.com/capito.rocks/">Instagram</a>
        </div>
        <div className="flex lg:flex-col justify-between mb-4 lg:mb-0 lg:mr-20">
          <Link scroll={false} href="/">
            <a>Home</a>
          </Link>
          <Link scroll={false} href="/projects">
            <a>Projects</a>
          </Link>
          <Link scroll={false} href="/contact">
            <a>Contact</a>
          </Link>
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
              <a className="text-light" href="mailto:Christopher@capito.rocks">
                Christopher@capito.rocks
              </a>
            </p>
          </div>
          <div className="flex flex-col lg:hidden justify-between">
            <p>Follow me</p>
            <div className="flex justify-between">
              <Icon className="text-lg" icon={linkedin} />
              <Icon className="text-lg" icon={github} />
            </div>
            <div className="flex justify-between">
              <Icon className="text-lg" icon={instagram} />
              <Icon className="text-lg" icon={xing} />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between items-center mb-4">
        <div className="text-dark">
          <Link scroll={false} href="/gdpr">
            <a className="mr-8">Data Protection</a>
          </Link>
          <Link scroll={false} href="/imprint">
            <a>Imprint</a>
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <p className="mr-4">Follow me</p>
          <a href="https://de.linkedin.com/in/christopher-capito-41863b145">
            <Icon className="text-icon mr-2" icon={linkedin} />
          </a>
          <a href="https://github.com/ChristopherCapito">
            <Icon className="text-icon mr-2" icon={github} />
          </a>
          <a href="https://www.instagram.com/capito.rocks/">
            <Icon className="text-icon mr-2" icon={instagram} />
          </a>
          <a href="https://www.xing.com/profile/Christopher_Capito">
            <Icon className="text-icon" icon={xing} />
          </a>
        </div>
      </div>
    </footer>
  </motion.div>
);

export default Footer;
