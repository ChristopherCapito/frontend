import propTypes from 'prop-types';
import React from 'react';
import { getUrl } from '../../utils/formatFunctions';

const DoubleMedia = ({ mediaLeft, altTextLeft, mediaRight, altTextRight }) => (
  <section>
    <div className="grid grid-cols-2">
      <img className="w-full cover content-img object-cover" src={getUrl(mediaLeft)} alt={altTextLeft} />
      <img className="w-full cover content-img object-cover" src={getUrl(mediaRight)} alt={altTextRight} />
    </div>
  </section>
);

export default DoubleMedia;

DoubleMedia.propTypes = {
  mediaLeft: propTypes.string,
  altTextLeft: propTypes.string,
  mediaRight: propTypes.string,
  altTextRight: propTypes.string,
};
