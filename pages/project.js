import { useRouter } from 'next/router';
import Moment from 'react-moment';
import Query from '../components/query';
import PROJECT_QUERY from '../apollo/queries/project/project';
import ImageAndText from '../components/content-blocks/imageAndText';
import DoubleText from '../components/content-blocks/doubleText';
import DoubleMedia from '../components/content-blocks/doubleMedia';
import Frontmatter from '../components/content-blocks/frontmatter';
import FullWidthMedia from '../components/content-blocks/fullwidthMedia';

const Project = () => {
  const router = useRouter();
  return (
    <Query query={PROJECT_QUERY} id={router.query.id}>
      {({ data: { project } }) => {
        const content = project.Content.map((e) => {
          switch (e.__typename) {
            case 'ComponentSubComponentsFullWidthMedia':
              return <FullWidthMedia media={e.media.url} altText={e.media.alternativeText} />;
            case 'ComponentSubComponentsDoubleMedia':
              return (
                <DoubleMedia
                  mediaLeft={e.mediaLeft.url}
                  mediaRight={e.mediaRight.url}
                  altTextLeft={e.mediaLeft.alternativeText}
                  altTextRight={e.mediaRight.alternativeText}
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
                  media={e.media.url}
                  alt={e.media.alternativeText}
                  sectionNumber={e.sectionNumber}
                  sectionTitle={e.sectionTitle}
                  text={e.text}
                  textLeft={e.textOnLeft}
                />
              );
            default:
              return null;
          }
        });

        return (
          <>
            <section name="projectHeading" className="text-light container mx-auto px-8 pb-6">
              <h1 className="text-icon md:text-3xl font-medium leading-none">{project.title}</h1>
              <p className="text-accent text-tiny md:text-xl font-bold">
                <Moment format="DD.MM.YYYY">{project.published_at}</Moment>
              </p>
            </section>
            <Frontmatter
              frontmatterBackgroundImage={project.Frontmatter.frontmatterBackgroundImage.url}
              sectionNumber={project.Frontmatter.sectionNumber}
              sectionTitle={project.Frontmatter.sectionTitle}
              sectionDescription={project.Frontmatter.sectionDescription}
              altText={project.Frontmatter.frontmatterBackgroundImage.alternativeText}
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
