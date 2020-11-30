import gql from 'graphql-tag';

const PROJECTS_QUERY = gql`
  query Projects {
    projects {
      id
      title
      slug
      number
      excerpt
      image {
        url
        caption
        alternativeText
      }
    }
  }
`;

export default PROJECTS_QUERY;
