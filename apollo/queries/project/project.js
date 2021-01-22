const PROJECT_QUERY = `
  query Projects($slug: String!) {
    projects(where: { slug: $slug }) {
      id
      slug
      title
      published_at
      Frontmatter {
        sectionNumber
        sectionTitle
        ghLink
        sectionDescription
        frontmatterBackgroundImage {
          url
          caption
          alternativeText
        }
        Techstack {
          technology
        }
      }
      Content {
        __typename
        ... on ComponentSubComponentsImageAndText {
          sectionNumber
          sectionTitle
          text
          media {
            url
            caption
            alternativeText
          }
          textOnLeft
        }
        __typename
        ... on ComponentSubComponentsDoubleText {
          sectionNumber
          sectionTitle
          textLeft
          textRight
        }
        __typename
        ... on ComponentSubComponentsDoubleMedia {
          mediaLeft {
            url
            caption
            alternativeText
          }
          mediaRight {
            url
            caption
            alternativeText
          }
        }
        __typename
        ... on ComponentSubComponentsFullWidthMedia {
          media {
            url
            caption
            alternativeText
          }
        }
      }
    }
  }
`;

export default PROJECT_QUERY;
