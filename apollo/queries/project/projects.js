const PROJECTS_QUERY = `
  {
    projects(sort:"publish_date:desc") {
      id
      title
      slug
      publish_date
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
