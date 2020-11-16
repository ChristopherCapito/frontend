import { useRouter } from 'next/router';
import Moment from 'react-moment';
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
import FormatSectionNumber from '../utils/formatFunctions';
import Query from '../components/query';
import PROJECT_QUERY from '../apollo/queries/project/project';

const Project = () => {
  const router = useRouter();
  return (
    <Query query={PROJECT_QUERY} id={router.query.id}>
      {({ data: { project } }) => {
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

        const techstack = project.Frontmatter.Techstack.map((e) => (
          <Icon key={e.technology} className="text-xl mr-6" title={e.technology} icon={iconList[e.technology]} />
        ));

        const imageUrl =
          process.env.NODE_ENV !== 'development'
            ? project.Frontmatter.frontmatterBackgroundImage.url
            : process.env.API_URL + project.Frontmatter.frontmatterBackgroundImage.url;

        // Get background image
        const frontMatterStyle = {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        };

        return (
          <>
            <section name="projectHeading" className="text-light container mx-auto px-8 pb-6">
              <h1 className="text-3xl font-medium">{project.title}</h1>
              <p className="text-accent text-xl font-bold">
                <Moment format="DD.MM.YYYY">{project.published_at}</Moment>
              </p>
            </section>
            <section style={frontMatterStyle} name="projectFrontmatter" className="text-light">
              <div className=" container mx-auto px-8 py-20">
                <p className="text-accent text-xl font-medium leading-none">
                  {FormatSectionNumber(project.Frontmatter.sectionNumber)}
                </p>
                <div className="grid grid-cols-2 gap-32">
                  <div>
                    <h2 className="text-xl font-medium leading-none pb-8">{project.Frontmatter.sectionTitle}</h2>
                    <p className="text-lg font-light leading-tight">{project.Frontmatter.sectionDescription}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-medium leading-none mb-8">Techstack</h2>
                    <div className="flex">{techstack}</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      }}
    </Query>
  );
};

export default Project;
