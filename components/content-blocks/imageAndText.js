import propTypes from 'prop-types';
import { FormatSectionNumber } from '../../utils/formatFunctions';
import Image from '../image';

const ImageAndText = ({ media, sectionNumber, sectionTitle, altText, text, textLeft }) => {
  let direction = 'flex justify-center items-center';
  if (textLeft === true) direction = 'flex justify-center items-center lg:row-start-1';

  return (
    (media || text) && (
      <section className="bg-light text-black container mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* <img className="w-full cover content-img block-img object-cover" src={getUrl(media)} alt={altText} /> */}
          <Image classes="w-full cover content-img block-img object-cover" baseURL={media} alt={altText} />
          <div className={direction}>
            <div className="px-8 py-8 md:py-24 md:px-24">
              {sectionNumber && (
                <p className="text-accent text-lg md:text-xl font-medium leading-none">
                  {FormatSectionNumber(sectionNumber)}
                </p>
              )}
              {sectionTitle && <p className="text-lg mb-8 md:text-xl font-medium leading-none">{sectionTitle}</p>}
              <p className="text-base md:text-lg md:font-light md:leading-tight">{text}</p>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ImageAndText;

ImageAndText.propTypes = {
  media: propTypes.string,
  sectionNumber: propTypes.number,
  sectionTitle: propTypes.string,
  altText: propTypes.string,
  text: propTypes.string,
  textLeft: propTypes.bool,
};
