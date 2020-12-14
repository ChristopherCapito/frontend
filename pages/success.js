import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Links from '../components/links';

const Success = () => {
  const SEO = {
    title: 'Success!',
    description: 'You sent me a message! Thanks. I will be in touch.',
    openGraph: {
      title: 'Success!',
      description: 'You sent me a message! Thanks. I will be in touch.',
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="container mx-auto px-8 text-light">
        <h1 className="text-lg md:text-3xl font-bold">Submitted!</h1>
        <p className=" md:text-lg font-light mb-8">Thank you for your message! I'll be in touch as soon as possible!</p>
        <Links
          href="/"
          text="Home"
          colored
          textColor="black"
          additionalClasses="py-4 px-8 bg-light text-black font-bold md:text-lg"
        />
      </div>
    </>
  );
};

export default Success;
