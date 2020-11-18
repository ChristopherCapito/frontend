import propTypes from 'prop-types';
import React from 'react';
import { FormatSectionNumber } from '../../utils/formatFunctions';

const DoubleText = ({ sectionNumber, sectionTitle, textLeft, textRight }) => (
  <section className="bg-light text-black py-8 px-8 md:py-24 md:px-24">
    <p className="text-accent text-lg md:text-xl font-medium leading-none ">{FormatSectionNumber(sectionNumber)}</p>
    <p className="text-lg md:text-xl font-medium leading-none ">{sectionTitle}</p>
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-32 mt-6 text-base font-regular md:text-lg md:font-light leading-tight">
      <div className="flex justify-center ">
        <p>{textLeft}</p>
      </div>
      <div className="flex justify-center ">
        <p>{textRight}</p>
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
