import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import dynamic from 'next/dynamic';
import PROJECT_QUERY from '../../apollo/queries/project/project';
import PROJECTS_QUERY from '../../apollo/queries/project/projects';

import { addApolloState, initializeApollo } from '../../apollo/apolloClient';

export default function Project({ projects }) {
  const ImageAndText = dynamic(() => import('../../components/content-blocks/imageAndText'));
  const DoubleText = dynamic(() => import('../../components/content-blocks/doubleText'));
  const DoubleMedia = dynamic(() => import('../../components/content-blocks/doubleMedia'));
  const Frontmatter = dynamic(() => import('../../components/content-blocks/frontmatter'));
  const FullWidthMedia = dynamic(() => import('../../components/content-blocks/fullwidthMedia'));

  const project = projects[0];

  let content;
  if (project.Content) {
    content = project.Content.map((e, i) => {
      switch (e.__typename) {
        case 'ComponentSubComponentsFullWidthMedia':
          if (e.media) return <FullWidthMedia key={i} media={e.media.url} altText={e.media.alternativeText} />;
          return;
        case 'ComponentSubComponentsDoubleMedia':
          return (
            <DoubleMedia
              key={i}
              mediaLeft={e.mediaLeft && e.mediaLeft.url}
              mediaRight={e.mediaRight && e.mediaRight.url}
              altTextLeft={e.mediaLeft && e.mediaLeft.alternativeText}
              altTextRight={e.mediaRight && e.mediaRight.alternativeText}
            />
          );
        case 'ComponentSubComponentsDoubleText':
          return (
            <DoubleText
              key={i}
              sectionNumber={e.sectionNumber}
              sectionTitle={e.sectionTitle}
              textLeft={e.textLeft}
              textRight={e.textRight}
            />
          );
        case 'ComponentSubComponentsImageAndText':
          return (
            <ImageAndText
              key={i}
              media={e.media && e.media.url}
              alt={e.media && e.media.alternativeText}
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
  }

  const {
    sectionTitle,
    sectionNumber,
    sectionDescription,
    Techstack,
    frontmatterBackgroundImage,
  } = project.Frontmatter;

  const technologyKeywords = Techstack.filter((e) => e.technology !== null)
    .map((e) => e.technology)
    .join(', ');

  const SEO = {
    title: sectionTitle === (null || 0) || 'Project',
    description: sectionDescription && sectionDescription,

    additionalMetaTags: [
      {
        name: 'keywords',
        content: `${technologyKeywords}, ${sectionTitle}`,
      },
    ],

    openGraph: {
      title: sectionTitle && sectionTitle,
      description: sectionDescription && sectionDescription,
    },
  };

  console.log(project);

  return (
    <>
      <NextSeo {...SEO} />
      <section name="projectHeading" className="text-light container mx-auto px-8 md:px-12  pb-6">
        <h1 className="text-icon md:text-3xl font-medium leading-none">{project.title}</h1>
        <p className="text-accent text-tiny md:text-xl font-bold">
          {new Intl.DateTimeFormat('fr').format(new Date(project.published_at))}
        </p>
      </section>
      {project.Frontmatter && (
        <Frontmatter
          frontmatterBackgroundImage={frontmatterBackgroundImage && frontmatterBackgroundImage.url}
          sectionNumber={sectionNumber}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
          altText={frontmatterBackgroundImage && frontmatterBackgroundImage.alternativeText}
          Techstack={Techstack}
        />
      )}

      {content}
    </>
  );
}

Project.propTypes = {
  projects: PropTypes.array,
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const {
    data: { projects },
  } = await apolloClient.query({
    query: PROJECTS_QUERY,
  });
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();
  const {
    data: { projects },
  } = await apolloClient.query({
    query: PROJECT_QUERY,
    variables: { slug: context.params.slug },
  });

  return addApolloState(apolloClient, {
    props: { projects },
    revalidate: false,
  });
}
