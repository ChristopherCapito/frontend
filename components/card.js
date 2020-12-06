import Link from 'next/link';
import PropTypes from 'prop-types';
import { FormatSectionNumber, getUrl } from '../utils/formatFunctions';

const Card = ({ project: { slug, image, number, excerpt, title }, left }) => (
  <div className="mb-16 lg:mb-48">
    <Link href="/projects/[slug]" as={`/projects/${slug}`}>
      <div className="md:grid md:grid-cols-2 grid-flow-row gap-16">
        <img
          src={image && getUrl(image.url)}
          alt={image.alternativeText}
          className={`${left && 'order-2'} mb-8 md:mb-0 object-cover w-full sm:h-thumb md:h-midThumb lg:h-largeThumb`}
        />
        <div className="order-1">
          <div id="title" className="text-lg lg:text-xl font-medium my-2">
            <p className="text-light leading-none">
              <span className="text-accent leading-none">{FormatSectionNumber(number)}</span> {title}
            </p>
          </div>
          <p className="font-light leading-tight md:text-sm lg:text-lg break-words">{excerpt}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;

Card.propTypes = {
  project: PropTypes.object,
};
