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
          mediaRight {
            url
          }
        }
        __typename
        ... on ComponentSubComponentsFullWidthMedia {
          media {
            url
          }
        }
      }
    }
  }
`;

export default PROJECT_QUERY;
