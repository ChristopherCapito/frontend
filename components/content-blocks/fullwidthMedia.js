import propTypes from 'prop-types';
import React from 'react';
import { getUrl } from '../../utils/formatFunctions';

const FullWidthMedia = ({ media, altText }) => (
  <section>
    <img className="w-full content-img object-cover" src={getUrl(media)} alt={altText} />
  </section>
);

export default FullWidthMedia;

FullWidthMedia.propTypes = {
  media: propTypes.string,
  altText: propTypes.string,
};
