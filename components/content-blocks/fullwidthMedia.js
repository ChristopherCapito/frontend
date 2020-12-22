import propTypes from 'prop-types';
import { getUrl } from '../../utils/formatFunctions';

const FullWidthMedia = ({ media, altText }) =>
  media && (
    <section className="container mx-auto">
      <img className="w-full content-img object-cover" src={media && getUrl(media)} alt={altText} />
    </section>
  );

export default FullWidthMedia;

FullWidthMedia.propTypes = {
  media: propTypes.string,
  altText: propTypes.string,
};
