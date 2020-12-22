import propTypes from 'prop-types';
import { getUrl } from '../../utils/formatFunctions';

const DoubleMedia = ({ mediaLeft, altTextLeft, mediaRight, altTextRight }) =>
  (mediaLeft || mediaRight) && (
    <section className="container mx-auto ">
      <div className="grid lg:grid-cols-2">
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
