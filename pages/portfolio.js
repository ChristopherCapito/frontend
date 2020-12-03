import PropTypes from 'prop-types';
import { motion, MotionConfig } from 'framer-motion';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import PROJECTS_QUERY from '../apollo/queries/project/projects';
import { addApolloState, initializeApollo } from '../apollo/apolloClient';

export default function Portfolio({ projects }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const Card = dynamic(() => import('../components/card'));

  const SEO = {
    title: 'Portfolio',
    description: 'This is an overview of my projects so far, at least the public ones. How about you add one?',
    openGraph: {
      title: 'Portfolio',
      description: 'This is an overview of my projects so far, at least the public ones. How about you add one?',
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="text-light container mx-auto px-8">
        <h1 className="md:text-xl lg:text-2xl text-icon font-medium mb-12">Take a look at these.</h1>

        <motion.div variants={container} initial="hidden" animate="show" transition={{ delayChildren: 0.5 }}>
          {projects.map((project) => {
            const left = project.id % 2 === 0;

            return (
              <motion.div key={`project__${project.id}`}>
                <Card project={project} left={left} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const {
    data: { projects },
  } = await apolloClient.query({
    query: PROJECTS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: { projects },
    revalidate: 1,
  });
}
