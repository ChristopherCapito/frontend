import propTypes from 'prop-types';
import { getUrl } from '../../utils/formatFunctions';
import Image from '../image';

const DoubleMedia = ({ mediaLeft, altTextLeft, mediaRight, altTextRight }) =>
  (mediaLeft || mediaRight) && (
    <section className="container mx-auto ">
      <div className="grid lg:grid-cols-2">
        <Image classes="w-full cover content-img object-contain" baseURL={mediaLeft} alt={altTextLeft} />
        <Image classes="w-full cover content-img object-contain" baseURL={mediaRight} alt={altTextRight} />
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
