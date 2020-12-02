import Link from 'next/link';
import PropTypes from 'prop-types';
import { FormatSectionNumber, getUrl } from '../utils/formatFunctions';

const Card = ({ project: { id, slug, image, number, excerpt, title } }) => {
  const direction = id % 2 === 0 ? 'row-start-1' : '';

  return (
    <div className="mb-16 lg:mb-48">
      <Link scroll={false} href="/projects/[slug]" as={`/projects/${slug}`}>
        <div className="md:grid md:grid-cols-2 gap-16">
          <div className="mb-8 md:mb-0">
            <img
              className="object-cover w-full sm:h-thumb md:h-midThumb lg:h-largeThumb"
              src={image && getUrl(image.url)}
              alt={image.alternativeText}
            />
          </div>
          <div className={direction}>
            <div id="title" className="text-lg lg:text-xl font-medium my-2">
              <p className="text-light leading-none">
                <span className="text-accent leading-none">{FormatSectionNumber(number)}</span> {title}
              </p>
            </div>
            <p className="font-light leading-tight md:text-sm lg:text-lg">{excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

Card.propTypes = {
  project: PropTypes.object,
};
