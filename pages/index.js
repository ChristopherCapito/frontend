import Link from 'next/link';
import { motion } from 'framer-motion';

const Index = () => (
  <div className="container mx-auto px-8">
    <p className="text-light text-lg font-medium lg:text-2xl lg:leading-tight">
      I'm a freelance web developer doing concepting and developing. Sometimes alone, sometimes, for larger projects,
      with my team over at{' '}
      <span>
        <a href="http://das-andere.studio" className="shadow">
          Das Andere Studio
        </a>
      </span>
      .
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-3 text-light pt-8 lg:pt-16">
      <div className="pb-10">
        <p className="lg:text-md font-medium ">Why don't you see some</p>
        <Link scroll={false} href="/projects">
          <a className="text-md lg:text-xl leading-none font-medium">projects</a>
        </Link>
      </div>
      <div className="pb-10">
        <p className="lg:text-md font-medium">Don't be shy, go and</p>
        <Link scroll={false} href="/contact">
          <a className="text-md lg:text-xl leading-none font-medium">say hi</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Index;
