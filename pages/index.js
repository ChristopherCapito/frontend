import Link from 'next/link';
import { NextSeo } from 'next-seo';

const Index = () => {
  const SEO = {
    title: 'Home',
    description:
      'Hi, I am a web developer always on the lookout for projects. Check my portflio and see for yourself, and then drop me a message!',
    openGraph: {
      title: 'Home',
      description:
        'Hi, I am a web developer always on the lookout for projects. Check my portflio and see for yourself, and then drop me a message!',
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="container mx-auto px-8">
        <p className="text-light text-lg font-medium lg:text-2xl lg:leading-tight">
          I'm a web developer. Have a look at my{' '}
          <Link href="/portfolio">
            <a className="text-red-300">projects</a>
          </Link>{' '}
          and{' '}
          <Link href="/contact">
            <a className="text-red-300">contact me</a>
          </Link>
          . If you need manpower, talk to my team over at{' '}
          <span>
            <a href="http://das-andere.studio" className="text-red-300">
              Das Andere Studio
            </a>
          </span>
          .
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-light pt-8 lg:pt-16">
          <div className="pb-10">
            <p className="lg:text-md font-medium ">Why don't you see my</p>
            <Link scroll={false} href="/portfolio">
              <a className="text-md lg:text-xl leading-none font-medium">portfolio</a>
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
    </>
  );
};

export default Index;
