import { useRouter } from 'next/router';
import Moment from 'react-moment';
import { getUrl } from '../utils/formatFunctions';
import Query from '../components/query';
import PROJECT_QUERY from '../apollo/queries/project/project';
import ImageAndText from '../components/content-blocks/imageAndText';
import DoubleText from '../components/content-blocks/doubleText';
import DoubleMedia from '../components/content-blocks/doubleMedia';
import Frontmatter from '../components/content-blocks/frontmatter';

const Project = () => {
  const router = useRouter();
  return (
    <Query query={PROJECT_QUERY} id={router.query.id}>
      {({ data: { project } }) => {
        const content = project.Content.map((e) => {
          let direction = 'flex justify-center items-center';
          if (e.textOnLeft === true) direction = 'flex justify-center items-center row-start-1';

          const type = e.__typename;

          switch (type) {
            case 'ComponentSubComponentsFullWidthMedia':
              return (
                <section>
                  <img className="w-full content-img object-cover" src={getUrl(e.media.url)} alt={e.altText} />
                </section>
              );
            case 'ComponentSubComponentsDoubleMedia':
              return (
                <DoubleMedia
                  mediaLeft={e.mediaLeft.url}
                  mediaRight={e.mediaRight.url}
                  altTextLeft={e.altTextLeft}
                  altTextRight={e.altTextRight}
                />
              );
            case 'ComponentSubComponentsDoubleText':
              return (
                <DoubleText
                  sectionNumber={e.sectionNumber}
                  sectionTitle={e.sectionTitle}
                  textLeft={e.textLeft}
                  textRight={e.textRight}
                />
              );
            case 'ComponentSubComponentsImageAndText':
              return (
                <ImageAndText
                  direction={direction}
                  media={e.media.url}
                  alt={e.altText}
                  sectionNumber={e.sectionNumber}
                  sectionTitle={e.sectionTitle}
                  text={e.text}
                />
              );
            default:
              return null;
          }
        });

        return (
          <>
            <section name="projectHeading" className="text-light container mx-auto px-8 pb-6">
              <h1 className="text-3xl font-medium leading-none">{project.title}</h1>
              <p className="text-accent text-xl font-bold">
                <Moment format="DD.MM.YYYY">{project.published_at}</Moment>
              </p>
            </section>
            <Frontmatter
              sectionNumber={project.Frontmatter.sectionNumber}
              sectionTitle={project.Frontmatter.sectionTitle}
              sectionDescription={project.Frontmatter.sectionDescription}
              altText={project.Frontmatter.altText}
              Techstack={project.Frontmatter.Techstack}
            />
            {content}
          </>
        );
      }}
    </Query>
  );
};

export default Project;
