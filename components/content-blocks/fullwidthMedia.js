import propTypes from 'prop-types';
// import { getUrl } from '../../utils/formatFunctions';
import Image from '../image';

const FullWidthMedia = ({ media, altText }) =>
  media && (
    <section className="container mx-auto">
      <Image classes="w-full content-img object-contain" baseURL={media && media} alt={altText} />
    </section>
  );

export default FullWidthMedia;

FullWidthMedia.propTypes = {
  media: propTypes.string,
  altText: propTypes.string,
};
