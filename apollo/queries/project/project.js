import gql from 'graphql-tag';

const PROJECT_QUERY = gql`
  query Projects($id: ID!) {
    project(id: $id) {
      id
      title
      Frontmatter {
        sectionNumber
        sectionTitle
        sectionDescription
        frontmatterBackgroundImage {
          url
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
          }
          altText
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
          }
          altTextLeft
          mediaRight {
            url
          }
          altTextRight
        }
        __typename
        ... on ComponentSubComponentsFullWidthMedia {
          media {
            url
          }
          altText
        }
      }
    }
  }
`;

export default PROJECT_QUERY;
