import Link from 'next/link';
import PropTypes from 'prop-types';
import { m as motion } from 'framer-motion';
import { FormatSectionNumber, getUrl } from '../utils/formatFunctions';

const Card = ({ project: { slug, image, number, excerpt, title, publish_date, Frontmatter }, left }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { x: left ? '-100vw' : '100vw' },
    show: { x: 0, transition: { ease: 'anticipate', duration: 0.6 } },
    exit: {
      x: left ? '-100vw' : '100vw',
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mb-24 lg:mb-48"
    >
      <motion.div
        className="md:grid md:grid-cols-2 grid-flow-row gap-16"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.img
          src={image && getUrl(image.url, 'large')}
          alt={image.alternativeText}
          className={`${left && 'order-2'} mb-8 md:mb-0 object-cover w-full sm:h-thumb md:h-midThumb lg:h-largeThumb`}
          variants={listItem}
        />
        <div className="order-1">
          <motion.div variants={listItem}>
            <div id="title" className="text-lg lg:text-xl font-medium my-2">
              <p className="text-light leading-none">
                <span className="text-accent leading-none">{FormatSectionNumber(number)}</span> {title}{' '}
                <span className="text-sm font-medium text-accent">{publish_date}</span>
              </p>
            </div>
          </motion.div>
          <motion.div variants={listItem}>
            <p className="font-light leading-tight md:text-sm lg:text-lg break-words">{excerpt}</p>
          </motion.div>
          <motion.div className=" mt-8" variants={listItem}>
            {Frontmatter?.ghLink && (
              <a
                className="p-4 mr-4 bg-light font-bold text-accent"
                href={Frontmatter.ghLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check at {Frontmatter.titleLinkText}
              </a>
            )}
            <Link href="/portfolio/[slug]" as={`/portfolio/${slug}`}>
              <a className="p-4 bg-light font-bold text-black">Read More</a>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;

Card.propTypes = {
  project: PropTypes.object,
};
