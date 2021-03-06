// pages/404.js
import { NextSeo } from 'next-seo';
import Links from '../components/links';

export default function Custom404() {
  const SEO = {
    title: '404',
    description: 'Do you hate it when your customer!s see 404 pages? Me too. Call me and we ll elimate them!',
    openGraph: {
      title: '404',
      description: 'Do you hate it when your customer!s see 404 pages? Me too. Call me and we ll elimate them!',
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="w-full container px-8 mx-auto">
        <div className="mb-32 w-7/12 ">
          <h1 className="text-light text-lg lg:text-xl">
            I could not find what you are looking for. <span className="text-base">(This is a 404 page)</span>
          </h1>
          <p className="text-light pb-6">Do you hate it when your customers see 404 pages? Me too.</p>
          <Links
            nextLink
            href="/contact"
            textColor="black"
            text="Call me"
            colored
            additionalClasses="bg-white p-4 px-6 font-bold"
          />
        </div>
      </div>
    </>
  );
}
