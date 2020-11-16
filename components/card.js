import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Card = ({ project }) => {
  const imageUrl = process.env.NODE_ENV !== 'development' ? project.image.url : process.env.API_URL + project.image.url;

  const projectNumber = project.id < 10 ? `0${project.id}.` : project.id;

  const direction = project.id % 2 === 0 ? 'row-start-1' : '';

  return (
    <div className="mb-16 lg:mb-48">
      <Link href={{ pathname: 'project', query: { id: project.id } }}>
        <div className="md:grid md:grid-cols-2 gap-16">
          <div className="mb-8 md:mb-0">
            <img
              className="object-cover w-full sm:h-thumb md:h-midThumb lg:h-largeThumb"
              src={imageUrl}
              alt={project.image.url}
            />
          </div>
          <div className={direction}>
            <div id="title" className="text-lg lg:text-xl font-medium my-2">
              <p className="text-light leading-none">
                <span className="text-accent leading-none">{projectNumber}</span> {project.title}
              </p>
            </div>
            <p className="font-light leading-tight md:text-sm lg:text-lg">{project.excerpt}</p>
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
