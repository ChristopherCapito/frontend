import React from 'react';
import { request } from 'graphql-request'; // in your page
import Markdown from 'markdown-to-jsx';

const Page = `
query Page {
    page {
      Content
    }
  }
`;

const Imprint = ({ Content }) => (
  <section className="container mx-auto px-8">
    <Markdown
      options={{
        overrides: {
          a: {
            props: {
              class: 'text-accent',
            },
          },
          h1: {
            props: {
              class: 'text-xl md:text-2xl lg:text-3xl text-light font-bold',
            },
          },
          h2: {
            props: {
              class: 'text-lg md:text-xl lg:text-2xl text-light font-medium',
            },
          },
          h3: {
            props: {
              class: 'text-sm md:text-lg lg:text-xl text-light font-medium',
            },
          },
          h4: {
            props: {
              class: 'text-sm md:text-icon lg:text-lg text-light font-medium',
            },
          },
          p: {
            props: {
              class: 'text-light',
            },
          },
          li: {
            props: {
              class: 'list-disc mx-2 md:mx-8',
            },
          },
        },
      }}
    >
      {Content}
    </Markdown>
  </section>
);
export default Imprint;

export async function getStaticProps(context) {
  // get the variables for the query via   {slug:context.params.slug}
  // query for PROJECT_QUERY
  // 'request' from ‘graphql-request’ library

  const res = await request(`${process.env.API_URL}/graphql`, Page);
  const {
    page: { Content },
  } = res;

  return {
    props: {
      Content, // Pass Data in props
    },
  };
}
