import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div className="container mx-auto px-8">
    <p className="text-light text-lg font-medium lg:text-2xl lg:leading-tight">
      I'm a freelance developer who ideates and develops projects. Sometimes alone, sometimes, for larger projects, with
      my team over at Das Andere Studio.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-3 text-light pt-8 lg:pt-16">
      <div className="pb-10">
        <p className="lg:text-md font-medium ">Why don't you see some</p>
        <Link href="/projects">
          <a className="text-md lg:text-xl leading-none font-medium">projects</a>
        </Link>
      </div>
      <div className="pb-10">
        <p className="lg:text-md font-medium">Find out more stuff</p>
        <Link href="/about">
          <a className="text-md lg:text-xl leading-none font-medium">about me</a>
        </Link>
      </div>
      <div className="pb-10">
        <p className="lg:text-md font-medium">Don't be shy, go and</p>
        <Link href="/contact">
          <a className="text-md lg:text-xl leading-none font-medium">say hi</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
