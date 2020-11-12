import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Card = ({ project }) => {
  const imageUrl = process.env.NODE_ENV !== 'development' ? project.image.url : process.env.API_URL + project.image.url;
  return (
    <Link href={{ pathname: 'project', query: { id: project.id } }}>
      <a className="">
        <div className="">
          <div className="">
            <img src={imageUrl} alt={project.image.url} height="100" />
          </div>
          <div className="">
            <p id="title" className="">
              {project.title}
            </p>
            <p className="">{project.excerpt}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  project: PropTypes.object,
};
