import Icon from '@iconify/react';
import javascript from '@iconify/icons-simple-icons/javascript';
import html5 from '@iconify/icons-simple-icons/html5';
import css3 from '@iconify/icons-simple-icons/css3';
import react from '@iconify/icons-simple-icons/react';
import github from '@iconify/icons-simple-icons/github';
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
  ghLink,
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
      <Icon
        style={{ filter: 'drop-shadow( 0px 2px 2px rgba(0, 0, 0, .25))' }}
        className="text-xl md:text-2xl mb-2"
        title={e.technology}
        icon={iconList[e.technology]}
      />
      <p className="capitalize">{e.technology}</p>
    </div>
  ));

  // Check Github Link and fix if needed

  const gitHubLink = ghLink?.includes('https://' || 'http://') ? ghLink : `https://${ghLink}`;

  return (
    <section title={altText} style={frontMatterStyle} name="projectFrontmatter" className="text-light">
      <div className=" container mx-auto p-8 md:py-12 md:px-24  ">
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
              <>
                <p className="text-base font-base md:text-lg md:font-light leading-tight">{sectionDescription}</p>

                {ghLink?.length > 0 && (
                  <div className="flex items-center mt-4">
                    <p className="text-base font-base md:text-lg md:font-medium leading-tight">Check it out at:</p>

                    <a
                      className=" p-2 px-4 bg-light ml-4 inline-block text-black font-base md:font-medium text-base md:text-lg"
                      target="_blank"
                      rel="noreferrer"
                      href={`${gitHubLink}`}
                    >
                      Github
                      <Icon className="inline-block ml-4" title={github} icon={github} />
                    </a>
                  </div>
                )}
              </>
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
  ghLink: propTypes.string,
  sectionTitle: propTypes.string,
  sectionDescription: propTypes.string,
  frontmatterBackgroundImage: propTypes.string,
  altText: propTypes.string,
  Techstack: propTypes.array,
};
