import PropTypes from 'prop-types';
import { m as motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { request } from 'graphql-request';
import PROJECTS_QUERY from '../apollo/queries/project/projects';

export default function Portfolio({ projects }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delayChildren: 0.2,
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
        <motion.div variants={container} initial="hidden" animate="show" exit="exit">
          <h1 className="md:text-xl lg:text-2xl text-icon font-medium mb-12">Take a look at these.</h1>

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

Portfolio.propTypes = {
  projects: PropTypes.array,
};

export async function getStaticProps() {
  // 'request' from ‘graphql-request’ library
  const res = await request(`${process.env.API_URL}/graphql`, PROJECTS_QUERY);
  const { projects } = res;

  return {
    props: {
      projects, // Pass Data in props
    },
  };
}
