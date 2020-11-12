import gql from 'graphql-tag';

const PROJECTS_QUERY = gql`
  query Projects {
    projects {
      id
      title
      excerpt
      image {
        url
      }
    }
  }
`;

export default PROJECTS_QUERY;
