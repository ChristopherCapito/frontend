import propTypes from 'prop-types';
import React from 'react';
import { FormatSectionNumber } from '../../utils/formatFunctions';

const DoubleText = ({ sectionNumber, sectionTitle, textLeft, textRight }) => (
  <section className="bg-light text-black py-24">
    <p className="text-accent text-xl font-medium leading-none px-24">{FormatSectionNumber(sectionNumber)}</p>
    <p className="text-xl font-medium leading-none px-24">{sectionTitle}</p>
    <div className="grid grid-cols-2 mt-6">
      <div className="flex justify-center items-center px-24">
        <p className="text-lg font-light leading-tight">{textLeft}</p>
      </div>
      <div className="flex justify-center items-center px-24">
        <p className="text-lg font-light leading-tight">{textRight}</p>
      </div>
    </div>
  </section>
);

export default DoubleText;

DoubleText.propTypes = {
  sectionNumber: propTypes.number,
  sectionTitle: propTypes.string,
  textLeft: propTypes.string,
  textRight: propTypes.string,
};
