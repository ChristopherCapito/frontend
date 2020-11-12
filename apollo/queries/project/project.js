import gql from 'graphql-tag';

const PROJECT_QUERY = gql`
  query Projects($id: ID!) {
    project(id: $id) {
      id
      title
      content
      image {
        url
      }
      published_at
    }
  }
`;

export default PROJECT_QUERY;
