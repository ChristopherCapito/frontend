import React from 'react';
import Link from 'next/link';
import { faLinkedin, faInstagramSquare, faGithubSquare, faXingSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="text-light mt-12">
    <hr className="my-3" />
    <div className="lg:flex lg:flex-row-reverse lg:justify-end">
      <div className="hidden lg:flex lg:flex-col justify-between">
        <a>GitHub</a>
        <a>LinkedIn</a>
        <a>XING</a>
        <a>Instagram</a>
      </div>
      <div className="flex lg:flex-col justify-between mb-4 lg:mb-0 lg:mr-20">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About me</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
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
            <FontAwesomeIcon className="text-icon" icon={faLinkedin} />
            <FontAwesomeIcon className="text-icon" icon={faGithubSquare} />
          </div>
          <div className="flex justify-between">
            <FontAwesomeIcon className="text-icon" icon={faInstagramSquare} />
            <FontAwesomeIcon className="text-icon" icon={faXingSquare} />
          </div>
        </div>
      </div>
    </div>
    <hr className="my-3" />
    <div className="flex justify-between items-center mb-4">
      <div className="text-dark">
        <Link href="/gdpr">
          <a className="mr-8">Data Protection</a>
        </Link>
        <Link href="/imprint">
          <a>Imprint</a>
        </Link>
      </div>
      <div className="hidden lg:flex items-center">
        <p className="mr-4">Follow me</p>
        <FontAwesomeIcon className="text-icon mr-2" icon={faLinkedin} />
        <FontAwesomeIcon className="text-icon mr-2" icon={faGithubSquare} />
        <FontAwesomeIcon className="text-icon mr-2" icon={faInstagramSquare} />
        <FontAwesomeIcon className="text-icon" icon={faXingSquare} />
      </div>
    </div>
  </footer>
);

export default Footer;
