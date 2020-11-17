import React from 'react';
import Icon from '@iconify/react';
import javascript from '@iconify/icons-simple-icons/javascript';
import html5 from '@iconify/icons-simple-icons/html5';
import css3 from '@iconify/icons-simple-icons/css3';
import react from '@iconify/icons-simple-icons/react';
import node from '@iconify/icons-simple-icons/node-dot-js';
import next from '@iconify/icons-simple-icons/next-dot-js';
import strapi from '@iconify/icons-simple-icons/strapi';
import bootstrap from '@iconify/icons-simple-icons/bootstrap';
import tailwindcss from '@iconify/icons-simple-icons/tailwindcss';
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
    tailwindcss,
    bootstrap,
  };

  const techstack = Techstack.map((e) => (
    <Icon key={e.technology} className="text-xl mr-6" title={e.technology} icon={iconList[e.technology]} />
  ));

  return (
    <section title={altText} style={frontMatterStyle} name="projectFrontmatter" className="text-light">
      <div className=" container mx-auto px-8 py-20">
        <p className="text-accent text-xl font-medium leading-none">{FormatSectionNumber(sectionNumber)}</p>
        <div className="grid grid-cols-2 gap-32">
          <div>
            <h2 className="text-xl font-medium leading-none pb-8">{sectionTitle}</h2>
            <p className="text-lg font-light leading-tight">{sectionDescription}</p>
          </div>
          <div>
            <h2 className="text-xl font-medium leading-none mb-8">Techstack</h2>
            <div className="flex">{techstack}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frontmatter;

Frontmatter.propTypes = {
  sectionDescription: propTypes.string,
  sectionNumber: propTypes.number,
  sectionTitle: propTypes.string,
  frontmatterBackgroundImage: propTypes.string,
  altText: propTypes.string,
  Techstack: propTypes.array,
  // altText: propTypes.string,
};
