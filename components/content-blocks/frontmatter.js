import Icon from '@iconify/react';
import javascript from '@iconify/icons-simple-icons/javascript';
import html5 from '@iconify/icons-simple-icons/html5';
import css3 from '@iconify/icons-simple-icons/css3';
import react from '@iconify/icons-simple-icons/react';
import node from '@iconify/icons-simple-icons/node-dot-js';
import next from '@iconify/icons-simple-icons/next-dot-js';
import strapi from '@iconify/icons-simple-icons/strapi';
import bootstrap from '@iconify/icons-simple-icons/bootstrap';
import tailwind from '@iconify/icons-simple-icons/tailwindcss';
import propTypes from 'prop-types';
import { FormatSectionNumber, getUrl } from '../../utils/formatFunctions';

function Frontmatter({
  sectionNumber,
  sectionTitle,
  sectionDescription,
  frontmatterBackgroundImage,
  altText,
  Techstack,
}) {
  // Get background image

  const frontMatterStyle = {
    backgroundImage: `url(${getUrl(frontmatterBackgroundImage)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  };

  const iconList = {
    javascript,
    html5,
    css3,
    react,
    node,
    next,
    strapi,
    tailwind,
    bootstrap,
  };

  const techstack = Techstack.filter((e) => e.technology !== null).map((e) => (
    <div key={e.technology} className="flex flex-col justify-center items-center mr-6 mb-6">
      <Icon className="text-xl md:text-2xl mb-2 " title={e.technology} icon={iconList[e.technology]} />
      <p className="capitalize">{e.technology}</p>
    </div>
  ));

  return (
    <section title={altText} style={frontMatterStyle} name="projectFrontmatter" className="text-light">
      <div className=" container mx-auto px-8 md:py-20">
        {sectionNumber ? (
          <p className="text-accent text-lg md:text-xl font-medium leading-none">
            {FormatSectionNumber(sectionNumber)}
          </p>
        ) : (
          <div />
        )}
        <div className="grid lg:grid-cols-2 lg:gap-32">
          <div>
            {sectionTitle.length > 3 ? (
              <h2 className="text-lg md:text-xl font-medium leading-none pb-8">{sectionTitle}</h2>
            ) : (
              <div />
            )}
            {sectionDescription ? (
              <p className="text-base font-base md:text-lg md:font-light leading-tight">{sectionDescription}</p>
            ) : (
              <div />
            )}
          </div>

          {techstack.length > 0 ? (
            <div className="flex flex-col justify-between">
              <h2 className="text-lg md:text-xl font-medium leading-none pb-4 mt-16 lg:mt-0 md:pb-8 lg:pb-16">
                Techstack
              </h2>
              <div className="flex flex-wrap">{techstack}</div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}

export default Frontmatter;

Frontmatter.propTypes = {
  sectionNumber: propTypes.number,
  sectionTitle: propTypes.string,
  sectionDescription: propTypes.string,
  frontmatterBackgroundImage: propTypes.string,
  altText: propTypes.string,
  Techstack: propTypes.array,
};
