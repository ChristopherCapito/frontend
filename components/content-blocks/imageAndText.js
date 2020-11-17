import propTypes from 'prop-types';
import React from 'react';
import { FormatSectionNumber, getUrl } from '../../utils/formatFunctions';

const ImageAndText = ({ media, sectionNumber, sectionTitle, altText, text, direction }) => (
  <section className="bg-light text-black">
    <div className="grid grid-cols-2">
      <img className="w-full cover content-img object-cover" src={getUrl(media)} alt={altText} />
      <div className={direction}>
        <div className="px-24">
          {sectionNumber !== null ? (
            <p className="text-accent text-xl font-medium leading-none">{FormatSectionNumber(sectionNumber)}</p>
          ) : null}
          {sectionNumber !== null ? <p className="text-xl font-medium leading-none">{sectionTitle}</p> : null}
          <p className="text-lg font-light leading-tight">{text}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ImageAndText;

ImageAndText.propTypes = {
  media: propTypes.string,
  sectionNumber: propTypes.number,
  sectionTitle: propTypes.string,
  altText: propTypes.string,
  text: propTypes.string,
  direction: propTypes.string,
};
