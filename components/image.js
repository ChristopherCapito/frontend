import { getUrl } from '../utils/formatFunctions';

const Image = ({ classes, baseURL, alt }) => (
  <picture>
    <img
      className={classes}
      src={getUrl(baseURL)}
      srcSet={`
               ${getUrl(baseURL, 'small')} 500w, 
               ${getUrl(baseURL, 'medium')} 750w,
               ${getUrl(baseURL, 'large')} 1000w,
               ${getUrl(baseURL)} 1500w
               `}
      alt={alt}
    />
  </picture>
);

// UNCOMMENT THIS ONCE STRAPI ALLOWS CUSTOM IMAGE SIZES OR CLOUDINARY DERIVATION WORKS
// const Image = ({ classes, baseURL, alt, half }) => {
//     const url = getUrl(baseURL);
//     return half ? (
//       <picture>
//         <img
//           className={classes}
//           src={url}
//           srcSet={`
//                  320-${url} 320w,
//                  384-${url} 384w,
//                  512-${url} 512w,
//                  683-${url} 683w,
//                  800-${url} 800w,
//                  960-${url} 960w
//                  `}
//           alt={alt}
//         />
//       </picture>
//     ) : (
//       <picture>
//         <img
//           className={classes}
//           src={url}
//           srcSet={`
//                640-${url} 640w,
//                768-${url} 768w,
//                1024-${url} 1024w,
//                1366-${url} 1366w,
//                1600-${url} 1600w,
//                1920-${url} 1920w
//                `}
//           alt={alt}
//         />
//       </picture>
//     );
//   };

export default Image;
