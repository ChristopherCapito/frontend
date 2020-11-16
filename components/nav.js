import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav className="py-12 container mx-auto px-8">
    <div className="flex justify-between items-end">
      <div className="flex-grow text-light mr-6 lg:mr-0">
        <Link href="/">
          <span className="text-md font-bold tracking-tight">Christopher Capito</span>
        </Link>

        <hr />
      </div>
      {/* Mobile Menu (hidden during large screensizes) */}
      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-light border-white hover:text-light hover:border-white"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div>
        <div className="flex hidden lg:block lg:items-center lg:w-auto block">
          <div className="text-sm">
            <Link href="/">
              <a className="mt-4 lg:inline-block lg:mt-0 text-light hover:text-light font-medium mr-4">Home</a>
            </Link>
            <Link href="/projects">
              <a className="mt-4 lg:inline-block lg:mt-0 text-light hover:text-light font-medium mr-4">Projects</a>
            </Link>
            <Link href="/about">
              <a className="mt-4 lg:inline-block lg:mt-0 text-light hover:text-light font-medium mr-4">About</a>
            </Link>
            <Link href="/contact">
              <a className="mt-4 lg:inline-block lg:mt-0 text-light hover:text-light font-medium mr-4">Contact</a>
            </Link>
          </div>
        </div>
        <hr className="hidden lg:block" />
      </div>
    </div>
  </nav>
);

export default Nav;
